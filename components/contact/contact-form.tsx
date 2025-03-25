'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { usePackContext } from '@/lib/contexts/pack-context';
import { FormFields } from './form/form-fields';
import { Spinner } from '@/components/ui/spinner';
import { formSchema, FormData } from '@/lib/types/form';
import { sendToMakeWebhook } from '@/lib/utils/webhook';
import { PackSummary } from './form/pack-summary';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const { toast } = useToast();
  const { selectedPack, roomSelections, additionalSelections, totalMonthly, clearPackData } = usePackContext();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    if (!selectedPack) {
      toast({
        title: 'Erreur',
        description: 'Veuillez sélectionner un pack avant de soumettre le formulaire.',
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

      toast({
        title: 'Demande envoyée !',
        description: 'Nous vous contacterons dans les plus brefs délais.',
        variant: 'default',
        duration: 5000,
      });

      localStorage.setItem('formSubmitted', 'true');
      clearPackData();
      
      setTimeout(() => {
        router.push('/');
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: 'Erreur',
        description: 'Une erreur est survenue lors de l\'envoi du formulaire. Veuillez réessayer.',
        variant: 'destructive',
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-8">
      <PackSummary />
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <FormFields register={register} errors={errors}  control={control} />

        <div className="flex justify-center">
  <Button 
    type="submit" 
    className="px-8" // Ajoute juste du padding horizontal
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
</div>
      </form>
    </div>
  );
}