'use client';

import type { ReactNode } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  FieldErrors,
  UseFormRegister,
  Controller,
  Control,
} from 'react-hook-form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { FormData } from '@/lib/types/form';
import { cn } from '@/lib/utils';

export const CREDIT_FORM_SECTION_COUNT = 6;

export const CREDIT_FORM_SECTION_LABELS = [
  'Informations personnelles',
  'Adresse et contact',
  'Situation familiale',
  'Profession et employeur',
  'Revenus et charges',
  'Consentement',
] as const;

/** Champs RHF à valider par section (ordre du parcours). */
export const CREDIT_FORM_SECTION_FIELDS: (keyof FormData)[][] = [
  [
    'lastName',
    'firstName',
    'email',
    'phone',
    'dateOfBirth',
    'placeOfBirth',
    'nationality',
    'nationalRegisterNumber',
    'idCardNumber',
    'idCardValidity',
    'idCardType',
  ],
  ['legalAddress', 'postalCode', 'city', 'landline'],
  ['maritalStatus', 'spouseDetails'],
  [
    'job',
    'employerName',
    'contractType',
    'activitySector',
    'employmentSince',
    'employerAddress',
    'employerCity',
    'employerPostalCode',
    'employerPhone',
  ],
  [
    'numberOfChildren',
    'housingStatus',
    'livingSince',
    'rentOrMortgage',
    'iban',
    'bankAccountSince',
    'netIncome',
    'otherIncome',
    'familyAllowances',
    'otherMonthlyCharges',
    'currentCredits',
    'totalCreditMonthlyPayments',
    'totalCreditAmount',
  ],
  ['comments', 'consent'],
];

type Props = {
  section: number;
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
  control: Control<FormData>;
  hideQuickStepFields?: boolean;
};

function SectionShell({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section
      className={cn(
        'rounded-2xl border border-gray-100 bg-white shadow-sm',
        'p-6 sm:p-8 space-y-8'
      )}
    >
      <header className="space-y-1.5 pb-4 border-b border-gray-100">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 tracking-tight">
          {title}
        </h3>
        {description ? (
          <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
        ) : null}
      </header>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">{children}</div>
    </section>
  );
}

function FieldWrap({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn('space-y-2 sm:col-span-1', className)}>{children}</div>;
}

/**
 * Une seule section du dossier crédit (parcours progressif étape 2).
 */
export function FormFieldsSection({
  section,
  register,
  errors,
  control,
  hideQuickStepFields = false,
}: Props) {
  if (section === 0) {
    return (
      <SectionShell
        title={CREDIT_FORM_SECTION_LABELS[0]}
        description="Identité et pièce d’identité — renseignements nécessaires pour l’étude de votre dossier."
      >
        <FieldWrap>
          <Label htmlFor="lastName">Nom</Label>
          <Input id="lastName" {...register('lastName')} className="h-11" />
          {errors.lastName && (
            <p className="text-sm text-red-600">{errors.lastName.message}</p>
          )}
        </FieldWrap>

        {!hideQuickStepFields && (
          <FieldWrap>
            <Label htmlFor="firstName">Prénom</Label>
            <Input id="firstName" {...register('firstName')} className="h-11" />
            {errors.firstName && (
              <p className="text-sm text-red-600">{errors.firstName.message}</p>
            )}
          </FieldWrap>
        )}

        <FieldWrap>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" {...register('email')} className="h-11" />
          {errors.email && (
            <p className="text-sm text-red-600">{errors.email.message}</p>
          )}
        </FieldWrap>

        {!hideQuickStepFields && (
          <FieldWrap>
            <Label htmlFor="phone">Téléphone</Label>
            <Input
              id="phone"
              type="tel"
              inputMode="numeric"
              {...register('phone')}
              className="h-11"
            />
            {errors.phone && (
              <p className="text-sm text-red-600">{errors.phone.message}</p>
            )}
          </FieldWrap>
        )}

        <FieldWrap>
          <Label htmlFor="dateOfBirth">Date de naissance</Label>
          <Input
            id="dateOfBirth"
            type="date"
            {...register('dateOfBirth')}
            className="h-11"
          />
          {errors.dateOfBirth && (
            <p className="text-sm text-red-600">{errors.dateOfBirth.message}</p>
          )}
        </FieldWrap>

        <FieldWrap>
          <Label htmlFor="placeOfBirth">Lieu de naissance</Label>
          <Input id="placeOfBirth" {...register('placeOfBirth')} className="h-11" />
          {errors.placeOfBirth && (
            <p className="text-sm text-red-600">{errors.placeOfBirth.message}</p>
          )}
        </FieldWrap>

        <FieldWrap>
          <Label htmlFor="nationality">Nationalité</Label>
          <Input id="nationality" {...register('nationality')} className="h-11" />
          {errors.nationality && (
            <p className="text-sm text-red-600">{errors.nationality.message}</p>
          )}
        </FieldWrap>

        <FieldWrap>
          <Label htmlFor="nationalRegisterNumber">Numéro de registre national</Label>
          <Input
            id="nationalRegisterNumber"
            {...register('nationalRegisterNumber')}
            className="h-11"
          />
          {errors.nationalRegisterNumber && (
            <p className="text-sm text-red-600">
              {errors.nationalRegisterNumber.message}
            </p>
          )}
        </FieldWrap>

        <FieldWrap>
          <Label htmlFor="idCardNumber">Numéro de carte d&apos;identité</Label>
          <Input id="idCardNumber" {...register('idCardNumber')} className="h-11" />
          {errors.idCardNumber && (
            <p className="text-sm text-red-600">{errors.idCardNumber.message}</p>
          )}
        </FieldWrap>

        <FieldWrap>
          <Label htmlFor="idCardValidity">Validité de la carte d&apos;identité</Label>
          <Input
            id="idCardValidity"
            type="date"
            {...register('idCardValidity')}
            className="h-11"
          />
          {errors.idCardValidity && (
            <p className="text-sm text-red-600">{errors.idCardValidity.message}</p>
          )}
        </FieldWrap>

        <FieldWrap>
          <Label htmlFor="idCardType">Type de carte d&apos;identité</Label>
          <Input id="idCardType" {...register('idCardType')} className="h-11" />
          {errors.idCardType && (
            <p className="text-sm text-red-600">{errors.idCardType.message}</p>
          )}
        </FieldWrap>
      </SectionShell>
    );
  }

  if (section === 1) {
    return (
      <SectionShell
        title={CREDIT_FORM_SECTION_LABELS[1]}
        description="Adresse de résidence et coordonnées complémentaires."
      >
        <FieldWrap className="sm:col-span-2 lg:col-span-3">
          <Label htmlFor="legalAddress">Adresse légale</Label>
          <Input id="legalAddress" {...register('legalAddress')} className="h-11" />
          {errors.legalAddress && (
            <p className="text-sm text-red-600">{errors.legalAddress.message}</p>
          )}
        </FieldWrap>

        <FieldWrap>
          <Label htmlFor="postalCode">Code postal</Label>
          <Input id="postalCode" {...register('postalCode')} className="h-11" />
          {errors.postalCode && (
            <p className="text-sm text-red-600">{errors.postalCode.message}</p>
          )}
        </FieldWrap>

        <FieldWrap>
          <Label htmlFor="city">Ville</Label>
          <Input id="city" {...register('city')} className="h-11" />
          {errors.city && (
            <p className="text-sm text-red-600">{errors.city.message}</p>
          )}
        </FieldWrap>

        <FieldWrap>
          <Label htmlFor="landline">
            Téléphone fixe <span className="text-gray-500 font-normal">(optionnel)</span>
          </Label>
          <Input id="landline" type="tel" {...register('landline')} className="h-11" />
          {errors.landline && (
            <p className="text-sm text-red-600">{errors.landline.message}</p>
          )}
        </FieldWrap>
      </SectionShell>
    );
  }

  if (section === 2) {
    return (
      <SectionShell
        title={CREDIT_FORM_SECTION_LABELS[2]}
        description="Situation matrimoniale."
      >
        <FieldWrap>
          <Label htmlFor="maritalStatus">Statut marital</Label>
          <Controller
            name="maritalStatus"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="h-11" id="maritalStatus">
                  <SelectValue placeholder="Sélectionnez votre statut" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="célibataire">Célibataire</SelectItem>
                  <SelectItem value="marié">Marié(e)</SelectItem>
                  <SelectItem value="divorcé">Divorcé(e)</SelectItem>
                  <SelectItem value="veuf">Veuf/Veuve</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          {errors.maritalStatus && (
            <p className="text-sm text-red-600">{errors.maritalStatus.message}</p>
          )}
        </FieldWrap>

        <FieldWrap className="sm:col-span-2">
          <Label htmlFor="spouseDetails">
            Nom et prénom du conjoint{' '}
            <span className="text-gray-500 font-normal">(optionnel)</span>
          </Label>
          <Input id="spouseDetails" {...register('spouseDetails')} className="h-11" />
        </FieldWrap>
      </SectionShell>
    );
  }

  if (section === 3) {
    return (
      <SectionShell
        title={CREDIT_FORM_SECTION_LABELS[3]}
        description="Activité professionnelle et employeur actuel."
      >
        <FieldWrap>
          <Label htmlFor="job">Profession</Label>
          <Input id="job" {...register('job')} className="h-11" />
          {errors.job && (
            <p className="text-sm text-red-600">{errors.job.message}</p>
          )}
        </FieldWrap>

        <FieldWrap>
          <Label htmlFor="employerName">Nom de l&apos;employeur</Label>
          <Input id="employerName" {...register('employerName')} className="h-11" />
          {errors.employerName && (
            <p className="text-sm text-red-600">{errors.employerName.message}</p>
          )}
        </FieldWrap>

        <FieldWrap>
          <Label htmlFor="contractType">Type de contrat</Label>
          <Controller
            name="contractType"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="h-11" id="contractType">
                  <SelectValue placeholder="Type de contrat" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="CDI">CDI</SelectItem>
                  <SelectItem value="CDD">CDD</SelectItem>
                  <SelectItem value="indépendant">Indépendant</SelectItem>
                  <SelectItem value="intérimaire">Intérimaire</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          {errors.contractType && (
            <p className="text-sm text-red-600">{errors.contractType.message}</p>
          )}
        </FieldWrap>

        <FieldWrap>
          <Label htmlFor="activitySector">Secteur d&apos;activité</Label>
          <Input id="activitySector" {...register('activitySector')} className="h-11" />
          {errors.activitySector && (
            <p className="text-sm text-red-600">{errors.activitySector.message}</p>
          )}
        </FieldWrap>

        <FieldWrap>
          <Label htmlFor="employmentSince">Date d&apos;entrée en fonction</Label>
          <Input
            id="employmentSince"
            type="date"
            {...register('employmentSince')}
            className="h-11"
          />
          {errors.employmentSince && (
            <p className="text-sm text-red-600">{errors.employmentSince.message}</p>
          )}
        </FieldWrap>

        <FieldWrap className="sm:col-span-2">
          <Label htmlFor="employerAddress">Adresse de l&apos;employeur</Label>
          <Input id="employerAddress" {...register('employerAddress')} className="h-11" />
          {errors.employerAddress && (
            <p className="text-sm text-red-600">{errors.employerAddress.message}</p>
          )}
        </FieldWrap>

        <FieldWrap>
          <Label htmlFor="employerCity">Ville de l&apos;employeur</Label>
          <Input id="employerCity" {...register('employerCity')} className="h-11" />
          {errors.employerCity && (
            <p className="text-sm text-red-600">{errors.employerCity.message}</p>
          )}
        </FieldWrap>

        <FieldWrap>
          <Label htmlFor="employerPostalCode">Code postal employeur</Label>
          <Input
            id="employerPostalCode"
            {...register('employerPostalCode')}
            className="h-11"
          />
          {errors.employerPostalCode && (
            <p className="text-sm text-red-600">{errors.employerPostalCode.message}</p>
          )}
        </FieldWrap>

        <FieldWrap>
          <Label htmlFor="employerPhone">
            Téléphone employeur{' '}
            <span className="text-gray-500 font-normal">(optionnel)</span>
          </Label>
          <Input
            id="employerPhone"
            type="tel"
            {...register('employerPhone')}
            className="h-11"
          />
          {errors.employerPhone && (
            <p className="text-sm text-red-600">{errors.employerPhone.message}</p>
          )}
        </FieldWrap>
      </SectionShell>
    );
  }

  if (section === 4) {
    return (
      <SectionShell
        title={CREDIT_FORM_SECTION_LABELS[4]}
        description="Revenus, logement, compte bancaire et engagements en cours."
      >
        <FieldWrap>
          <Label htmlFor="numberOfChildren">Nombre d&apos;enfants</Label>
          <Input
            id="numberOfChildren"
            type="number"
            min={0}
            {...register('numberOfChildren')}
            className="h-11"
          />
          {errors.numberOfChildren && (
            <p className="text-sm text-red-600">{errors.numberOfChildren.message}</p>
          )}
        </FieldWrap>

        <FieldWrap>
          <Label htmlFor="housingStatus">Statut d&apos;habitation</Label>
          <Controller
            name="housingStatus"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="h-11" id="housingStatus">
                  <SelectValue placeholder="Sélectionnez votre statut" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="propriétaire">Propriétaire</SelectItem>
                  <SelectItem value="locataire">Locataire</SelectItem>
                  <SelectItem value="hébergé">Hébergé</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          {errors.housingStatus && (
            <p className="text-sm text-red-600">{errors.housingStatus.message}</p>
          )}
        </FieldWrap>

        <FieldWrap>
          <Label htmlFor="livingSince">Date d&apos;entrée dans le logement</Label>
          <Input
            id="livingSince"
            type="date"
            {...register('livingSince')}
            className="h-11"
          />
          {errors.livingSince && (
            <p className="text-sm text-red-600">{errors.livingSince.message}</p>
          )}
        </FieldWrap>

        <FieldWrap>
          <Label htmlFor="rentOrMortgage">Loyer ou mensualité crédit</Label>
          <Input
            id="rentOrMortgage"
            type="number"
            min={0}
            step="0.01"
            {...register('rentOrMortgage')}
            className="h-11"
          />
          {errors.rentOrMortgage && (
            <p className="text-sm text-red-600">{errors.rentOrMortgage.message}</p>
          )}
        </FieldWrap>

        <FieldWrap className="sm:col-span-2">
          <Label htmlFor="iban">IBAN</Label>
          <Input id="iban" {...register('iban')} className="h-11" />
          {errors.iban && (
            <p className="text-sm text-red-600">{errors.iban.message}</p>
          )}
        </FieldWrap>

        <FieldWrap>
          <Label htmlFor="bankAccountSince">Ouverture du compte</Label>
          <Input
            id="bankAccountSince"
            type="date"
            {...register('bankAccountSince')}
            className="h-11"
          />
          {errors.bankAccountSince && (
            <p className="text-sm text-red-600">{errors.bankAccountSince.message}</p>
          )}
        </FieldWrap>

        <FieldWrap>
          <Label htmlFor="netIncome">Revenu net mensuel</Label>
          <Input
            id="netIncome"
            type="number"
            min={0}
            step="0.01"
            {...register('netIncome')}
            className="h-11"
          />
          {errors.netIncome && (
            <p className="text-sm text-red-600">{errors.netIncome.message}</p>
          )}
        </FieldWrap>

        <FieldWrap>
          <Label htmlFor="otherIncome">
            Autres revenus <span className="text-gray-500 font-normal">(optionnel)</span>
          </Label>
          <Input
            id="otherIncome"
            type="number"
            min={0}
            step="0.01"
            {...register('otherIncome')}
            className="h-11"
          />
          {errors.otherIncome && (
            <p className="text-sm text-red-600">{errors.otherIncome.message}</p>
          )}
        </FieldWrap>

        <FieldWrap>
          <Label htmlFor="familyAllowances">
            Allocations familiales{' '}
            <span className="text-gray-500 font-normal">(optionnel)</span>
          </Label>
          <Input
            id="familyAllowances"
            type="number"
            min={0}
            step="0.01"
            {...register('familyAllowances')}
            className="h-11"
          />
          {errors.familyAllowances && (
            <p className="text-sm text-red-600">{errors.familyAllowances.message}</p>
          )}
        </FieldWrap>

        <FieldWrap>
          <Label htmlFor="otherMonthlyCharges">
            Autres charges mensuelles{' '}
            <span className="text-gray-500 font-normal">(optionnel)</span>
          </Label>
          <Input
            id="otherMonthlyCharges"
            type="number"
            min={0}
            step="0.01"
            {...register('otherMonthlyCharges')}
            className="h-11"
          />
          {errors.otherMonthlyCharges && (
            <p className="text-sm text-red-600">{errors.otherMonthlyCharges.message}</p>
          )}
        </FieldWrap>

        <FieldWrap>
          <Label htmlFor="currentCredits">Nombre de crédits en cours</Label>
          <Input
            id="currentCredits"
            type="number"
            min={0}
            {...register('currentCredits')}
            className="h-11"
          />
          {errors.currentCredits && (
            <p className="text-sm text-red-600">{errors.currentCredits.message}</p>
          )}
        </FieldWrap>

        <FieldWrap>
          <Label htmlFor="totalCreditMonthlyPayments">Total mensualités crédit</Label>
          <Input
            id="totalCreditMonthlyPayments"
            type="number"
            min={0}
            step="0.01"
            {...register('totalCreditMonthlyPayments')}
            className="h-11"
          />
          {errors.totalCreditMonthlyPayments && (
            <p className="text-sm text-red-600">
              {errors.totalCreditMonthlyPayments.message}
            </p>
          )}
        </FieldWrap>

        <FieldWrap>
          <Label htmlFor="totalCreditAmount">Montant total des crédits</Label>
          <Input
            id="totalCreditAmount"
            type="number"
            min={0}
            step="0.01"
            {...register('totalCreditAmount')}
            className="h-11"
          />
          {errors.totalCreditAmount && (
            <p className="text-sm text-red-600">{errors.totalCreditAmount.message}</p>
          )}
        </FieldWrap>
      </SectionShell>
    );
  }

  if (section === 5) {
    return (
      <SectionShell
        title={CREDIT_FORM_SECTION_LABELS[5]}
        description="Dernière étape : une précision utile et votre accord pour traiter la demande."
      >
        <FieldWrap className="sm:col-span-2 lg:col-span-3">
          <Label htmlFor="comments">
            Commentaires{' '}
            <span className="text-gray-500 font-normal">(optionnel)</span>
          </Label>
          <Textarea
            id="comments"
            {...register('comments')}
            className="min-h-[100px] resize-y"
          />
          {errors.comments && (
            <p className="text-sm text-red-600">{errors.comments.message}</p>
          )}
        </FieldWrap>

        <FieldWrap className="sm:col-span-2 lg:col-span-3">
          <div className="flex items-start gap-3 rounded-xl bg-gray-50 border border-gray-100 p-4">
            <Controller
              name="consent"
              control={control}
              render={({ field }) => (
                <Checkbox
                  id="consent"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className="mt-0.5"
                />
              )}
            />
            <Label htmlFor="consent" className="text-sm leading-relaxed cursor-pointer">
              Je consens au traitement de mes données personnelles conformément à la{' '}
              <a href="/politique-de-confidentialite" className="text-[#FE6022] underline">
                politique de confidentialité
              </a>
              .
            </Label>
          </div>
          {errors.consent && (
            <p className="text-sm text-red-600">{errors.consent.message}</p>
          )}
        </FieldWrap>
      </SectionShell>
    );
  }

  return null;
}
