'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  ArrowRight,
  Check,
  ChevronLeft,
  Layers,
  LayoutGrid,
  type LucideIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';
import { usePackContext } from '@/lib/contexts/pack-context';
import {
  CREDIT_FORM_SECTION_COUNT,
  CREDIT_FORM_SECTION_FIELDS,
  CREDIT_FORM_SECTION_LABELS,
  FormFieldsSection,
} from './form/form-fields-section';
import { Spinner } from '@/components/ui/spinner';
import {
  formSchema,
  FormData,
  creditFormStep1Schema,
  CreditFormStep1Data,
  SimulationPackKey,
} from '@/lib/types/form';
import { sendToMakeWebhook } from '@/lib/utils/webhook';
import { PackSummary } from './form/pack-summary';
import { CreditLegalNotice } from '@/components/CreditLegalNotice';
import { pushGtmEvent } from '@/lib/gtm';
import { SITE_CONFIG } from '@/lib/constants';
import { Pack } from '@/lib/types';
import { cn } from '@/lib/utils';
import { SimulationWhatsAppEscape } from './simulation-whatsapp-escape';

const WA_NUMBER = '32471930694';

function packToSimulationKey(pack: Pack | null): SimulationPackKey {
  if (!pack) return 'trio';
  if (pack.name === 'Pack Duo') return 'duo';
  return 'trio';
}

function getTriggerFieldsForSection(
  section: number,
  hideQuickStepFields: boolean
): (keyof FormData)[] {
  const base = CREDIT_FORM_SECTION_FIELDS[section];
  if (section !== 0 || !hideQuickStepFields) return base;
  return base.filter((f) => f !== 'firstName' && f !== 'phone');
}

const PACK_OPTIONS: {
  key: SimulationPackKey;
  title: string;
  hint: string;
  Icon: LucideIcon;
}[] = [
  {
    key: 'duo',
    title: 'Pack Duo',
    hint: 'Salon, salle à manger… deux espaces à composer.',
    Icon: Layers,
  },
  {
    key: 'trio',
    title: 'Pack Trio',
    hint: 'Trois pièces pour un intérieur harmonieux.',
    Icon: LayoutGrid,
  },
];

export function ContactForm() {
  const router = useRouter();
  const { toast } = useToast();
  const {
    selectedPack,
    roomSelections,
    additionalSelections,
    clearPackData,
    setPackData,
  } = usePackContext();

  const funnelFromConfigurator = Boolean(
    selectedPack && roomSelections.length > 0
  );

  const [step, setStep] = useState<1 | 2>(() =>
    funnelFromConfigurator ? 2 : 1
  );
  const [quickBasicsDone, setQuickBasicsDone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sectionIndex, setSectionIndex] = useState(0);
  const prevStepRef = useRef<1 | 2>(step);

  /** Clé pack pour le message WhatsApp (stable quand l’étape 1 est démontée). */
  const [waPackKey, setWaPackKey] = useState<SimulationPackKey>(() =>
    packToSimulationKey(selectedPack)
  );

  const mainForm = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      consent: false,
      spouseDetails: '',
      comments: '',
      landline: '',
      employerPhone: '',
    } as unknown as FormData,
  });

  const step1Form = useForm<CreditFormStep1Data>({
    resolver: zodResolver(creditFormStep1Schema),
    defaultValues: {
      firstName: '',
      phone: '',
      packKey: packToSimulationKey(selectedPack),
    },
  });

  const step1PackKey = step1Form.watch('packKey');

  useEffect(() => {
    if (selectedPack) {
      const k = packToSimulationKey(selectedPack);
      setWaPackKey(k);
      step1Form.setValue('packKey', k);
    }
  }, [selectedPack, step1Form]);

  useEffect(() => {
    if (step === 1) {
      setWaPackKey(step1PackKey);
    }
  }, [step, step1PackKey]);

  useEffect(() => {
    if (prevStepRef.current === 1 && step === 2) {
      setSectionIndex(0);
    }
    prevStepRef.current = step;
  }, [step]);

  const waPackLabel = useMemo(
    () => SITE_CONFIG.packs[waPackKey].name,
    [waPackKey]
  );

  const whatsappHref = useMemo(() => {
    const text = encodeURIComponent(
      `Bonjour, je suis intéressé par le ${waPackLabel}, pouvez-vous m'aider ?`
    );
    return `https://wa.me/${WA_NUMBER}?text=${text}`;
  }, [waPackLabel]);

  const onStep1Submit = (data: CreditFormStep1Data) => {
    const pack = SITE_CONFIG.packs[data.packKey];
    setPackData(pack, roomSelections, additionalSelections);
    mainForm.setValue('firstName', data.firstName);
    mainForm.setValue('phone', data.phone);
    setWaPackKey(data.packKey);
    setQuickBasicsDone(true);
    setStep(2);
  };

  const handleBackFromStep2 = () => {
    if (quickBasicsDone) {
      setStep(1);
      return;
    }
    router.back();
  };

  const onFinalSubmit = async (data: FormData) => {
    if (!selectedPack) {
      toast({
        title: 'Erreur',
        description:
          'Choix du pack manquant. Revenez à l’étape 1 si nécessaire.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await sendToMakeWebhook(
        data,
        selectedPack,
        roomSelections,
        additionalSelections
      );

      pushGtmEvent('credit_form_success', {
        pack_name: selectedPack.name,
      });

      toast({
        title: 'Demande envoyée !',
        description: 'Nous vous contacterons dans les plus brefs délais.',
        variant: 'default',
        duration: 5000,
      });

      localStorage.setItem('formSubmitted', 'true');
      clearPackData();

      setTimeout(() => {
        router.push('/?form=success');
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: 'Erreur',
        description:
          "Une erreur est survenue lors de l'envoi du formulaire. Veuillez réessayer.",
        variant: 'destructive',
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const goNextSection = async () => {
    const fields = getTriggerFieldsForSection(sectionIndex, quickBasicsDone);
    const ok = await mainForm.trigger(fields);
    if (!ok) return;
    setSectionIndex((i) => Math.min(i + 1, CREDIT_FORM_SECTION_COUNT - 1));
  };

  const goPrevSection = () => {
    if (sectionIndex > 0) {
      setSectionIndex((i) => i - 1);
      return;
    }
    handleBackFromStep2();
  };

  const isLastSection = sectionIndex === CREDIT_FORM_SECTION_COUNT - 1;

  return (
    <div className="space-y-8">
      {step === 1 && (
        <div className="text-center space-y-5 max-w-xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FE6022]/20 bg-[#FE6022]/[0.06] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#FE6022]">
            Étape 1 · Simulation express
          </div>
          <p className="text-lg sm:text-xl font-semibold text-gray-900 leading-snug tracking-tight">
            Quelques infos,{' '}
            <span className="text-[#FE6022]">votre formule</span>, et c&apos;est
            parti.
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm">
            {['Réponse rapide', 'Sans engagement', 'Gratuit'].map((label) => (
              <li
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full border border-gray-200/80 bg-white/90 px-3 py-1.5 text-gray-700 shadow-sm"
              >
                <Check
                  className="h-3.5 w-3.5 shrink-0 text-[#FE6022]"
                  strokeWidth={2.5}
                  aria-hidden
                />
                {label}
              </li>
            ))}
          </ul>
        </div>
      )}

      {step === 1 && (
        <div className="max-w-lg mx-auto">
          <div className="flex gap-2 mb-2">
            <div className="h-1.5 flex-1 rounded-full bg-[#FE6022] shadow-sm shadow-[#FE6022]/30" />
            <div className="h-1.5 flex-1 rounded-full bg-gray-200/90" />
          </div>
          <p className="text-center text-xs font-medium text-gray-500">
            Puis dossier complet en étape 2, section par section
          </p>
        </div>
      )}

      {step === 2 && (
        <div className="max-w-5xl mx-auto px-1 text-center space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gray-600">
            Étape 2 · Dossier crédit
          </div>
          <div className="flex gap-2 max-w-md mx-auto">
            <div className="h-1.5 flex-1 rounded-full bg-[#FE6022]" />
            <div className="h-1.5 flex-1 rounded-full bg-[#FE6022]" />
          </div>
        </div>
      )}

      {step === 1 && (
        <form
          onSubmit={step1Form.handleSubmit(onStep1Submit)}
          className="space-y-8 max-w-lg mx-auto"
        >
          <div className="rounded-3xl border border-gray-100/90 bg-gradient-to-b from-gray-50/80 to-white/90 p-6 sm:p-7 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.9)] space-y-5">
            <div className="space-y-2">
              <Label
                htmlFor="sim-firstName"
                className="text-sm font-medium text-gray-800"
              >
                Prénom
              </Label>
              <Input
                id="sim-firstName"
                className="h-12 text-base rounded-2xl border-gray-200/90 bg-white shadow-sm transition-shadow focus-visible:ring-2 focus-visible:ring-[#FE6022]/30"
                autoComplete="given-name"
                {...step1Form.register('firstName')}
              />
              {step1Form.formState.errors.firstName && (
                <p className="text-sm text-red-600">
                  {step1Form.formState.errors.firstName.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="sim-phone"
                className="text-sm font-medium text-gray-800"
              >
                Téléphone
              </Label>
              <Input
                id="sim-phone"
                type="tel"
                className="h-12 text-base rounded-2xl border-gray-200/90 bg-white shadow-sm transition-shadow focus-visible:ring-2 focus-visible:ring-[#FE6022]/30"
                inputMode="tel"
                autoComplete="tel"
                placeholder="ex. 0470123456"
                {...step1Form.register('phone')}
              />
              {step1Form.formState.errors.phone && (
                <p className="text-sm text-red-600">
                  {step1Form.formState.errors.phone.message}
                </p>
              )}
            </div>
          </div>

          <SimulationWhatsAppEscape
            href={whatsappHref}
            packLabel={waPackLabel}
            emphasis
          />

          <div className="space-y-4">
            <div>
              <p className="text-lg font-semibold text-gray-900 tracking-tight">
                Choisissez votre formule
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Cliquez sur la carte — vous pourrez affiner les pièces ensuite.
              </p>
            </div>
            <Controller
              control={step1Form.control}
              name="packKey"
              render={({ field }) => (
                <RadioGroup
                  onValueChange={field.onChange}
                  value={field.value}
                  className="grid gap-4 sm:grid-cols-2 sm:gap-4"
                >
                  {PACK_OPTIONS.map((opt) => {
                    const selected = field.value === opt.key;
                    const Icon = opt.Icon;
                    return (
                      <label
                        key={opt.key}
                        htmlFor={`pack-${opt.key}`}
                        className={cn(
                          'relative cursor-pointer rounded-3xl border-2 p-5 sm:p-6 text-left transition-all duration-300',
                          'hover:border-[#FE6022]/35 hover:shadow-lg hover:shadow-gray-900/5 hover:-translate-y-0.5',
                          selected
                            ? 'border-[#FE6022] bg-gradient-to-br from-[#FE6022]/[0.08] to-white shadow-lg shadow-[#FE6022]/10 ring-2 ring-[#FE6022]/20'
                            : 'border-gray-100 bg-white'
                        )}
                      >
                        <RadioGroupItem
                          value={opt.key}
                          id={`pack-${opt.key}`}
                          className="sr-only"
                        />
                        {selected ? (
                          <span className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#FE6022] text-white shadow-md">
                            <Check className="h-4 w-4" strokeWidth={2.5} />
                          </span>
                        ) : null}
                        <div
                          className={cn(
                            'mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br shadow-inner',
                            selected
                              ? 'from-[#FE6022]/25 to-[#FE6022]/10 text-[#FE6022]'
                              : 'from-gray-100 to-gray-50 text-gray-600'
                          )}
                        >
                          <Icon className="h-7 w-7" strokeWidth={1.75} />
                        </div>
                        <span className="block text-base font-bold text-gray-900">
                          {opt.title}
                        </span>
                        <p className="mt-2 text-sm leading-relaxed text-gray-600">
                          {opt.hint}
                        </p>
                      </label>
                    );
                  })}
                </RadioGroup>
              )}
            />
            {step1Form.formState.errors.packKey && (
              <p className="text-sm text-red-600">
                {step1Form.formState.errors.packKey.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            className="group w-full h-14 rounded-2xl text-base font-semibold bg-[#FE6022] hover:bg-[#e5571f] text-white shadow-lg shadow-[#FE6022]/25 transition-all hover:shadow-xl hover:shadow-[#FE6022]/20"
            size="lg"
          >
            <span className="inline-flex items-center justify-center gap-2">
              Continuer ma simulation
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Button>
        </form>
      )}

      {step === 2 && (
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-8 lg:items-start max-w-6xl mx-auto px-1 sm:px-2">
          <aside className="order-1 lg:order-2 lg:sticky lg:top-24 space-y-4 w-full shrink-0">
            <PackSummary variant="compact" />
            <CreditLegalNotice variant="compact" />
          </aside>

          <div className="order-2 lg:order-1 min-w-0 space-y-6">
            <div className="flex px-1 sm:px-0">
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="gap-1 text-gray-600 -ml-2"
                onClick={goPrevSection}
              >
                <ChevronLeft className="h-4 w-4" />
                {sectionIndex === 0 ? 'Retour' : 'Section précédente'}
              </Button>
            </div>

            {quickBasicsDone && (
              <div className="rounded-xl border border-[#FE6022]/25 bg-[#FE6022]/5 px-4 py-3 text-sm text-gray-800">
                <span className="font-medium">
                  {mainForm.getValues('firstName')}
                </span>
                <span className="mx-2 text-gray-400">·</span>
                <span>{mainForm.getValues('phone')}</span>
                <span className="mx-2 text-gray-400">·</span>
                <span className="font-medium text-[#FE6022]">
                  {selectedPack?.name ?? waPackLabel}
                </span>
              </div>
            )}

            <div className="rounded-xl border border-gray-100 bg-gray-50/80 px-4 py-3">
              <p className="text-xs font-medium uppercase tracking-wide text-gray-500 mb-1">
                Dossier crédit
              </p>
              <p className="text-sm font-semibold text-gray-900">
                {CREDIT_FORM_SECTION_LABELS[sectionIndex]}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Section {sectionIndex + 1} sur {CREDIT_FORM_SECTION_COUNT}
              </p>
              <div
                className="mt-3 flex gap-1"
                role="progressbar"
                aria-valuenow={sectionIndex + 1}
                aria-valuemin={1}
                aria-valuemax={CREDIT_FORM_SECTION_COUNT}
                aria-label="Progression du dossier"
              >
                {Array.from({ length: CREDIT_FORM_SECTION_COUNT }).map(
                  (_, i) => (
                    <div
                      key={i}
                      className={cn(
                        'h-1.5 flex-1 rounded-full transition-colors',
                        i <= sectionIndex ? 'bg-[#FE6022]' : 'bg-gray-200'
                      )}
                    />
                  )
                )}
              </div>
            </div>

            <form
              onSubmit={mainForm.handleSubmit(onFinalSubmit)}
              className="space-y-6"
            >
              {sectionIndex < 3 ? (
                <SimulationWhatsAppEscape
                  href={whatsappHref}
                  packLabel={waPackLabel}
                  emphasis
                />
              ) : (
                <SimulationWhatsAppEscape
                  href={whatsappHref}
                  packLabel={waPackLabel}
                />
              )}

              <FormFieldsSection
                section={sectionIndex}
                register={mainForm.register}
                errors={mainForm.formState.errors}
                control={mainForm.control}
                hideQuickStepFields={quickBasicsDone}
              />

              <div className="flex flex-col-reverse sm:flex-row gap-3 sm:justify-between sm:items-center pt-2">
                <Button
                  type="button"
                  variant="outline"
                  className="w-full sm:w-auto"
                  onClick={goPrevSection}
                >
                  {sectionIndex === 0 ? 'Retour à l’étape 1' : 'Précédent'}
                </Button>

                {!isLastSection ? (
                  <Button
                    type="button"
                    className="w-full sm:w-auto min-w-[160px]"
                    onClick={() => void goNextSection()}
                  >
                    Suivant
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="w-full sm:w-auto min-w-[200px]"
                    disabled={isSubmitting || !selectedPack}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <Spinner className="h-4 w-4" />
                        Envoi en cours...
                      </span>
                    ) : (
                      'Envoyer ma demande'
                    )}
                  </Button>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
