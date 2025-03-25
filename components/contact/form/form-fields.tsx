'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FieldErrors, UseFormRegister, Controller, Control } from 'react-hook-form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';

interface FormFieldsProps {
  register: UseFormRegister<any>;
  errors: FieldErrors;
  control: Control<any>;
}

export function FormFields({ register, errors, control }: FormFieldsProps) {
  return (
    <div className="max-w-5xl mx-auto p-8 space-y-16">
      {/* Informations personnelles */}
      <div className="space-y-12">
        <div className="border-b border-gray-300 pb-4">
          <h2 className="text-2xl font-semibold text-gray-800">Informations personnelles</h2>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Label htmlFor="lastName" className="text-sm font-medium">
              Nom
            </Label>
            <Input 
              id="lastName" 
              {...register('lastName')} 
              className="h-11"
            />
            {errors.lastName && (
              <p className="text-sm text-red-500 mt-2">{errors.lastName.message as string}</p>
            )}
          </div>

          <div className="space-y-6">
            <Label htmlFor="firstName" className="text-sm font-medium">
              Prénom
            </Label>
            <Input 
              id="firstName" 
              {...register('firstName')} 
              className="h-11"
            />
            {errors.firstName && (
              <p className="text-sm text-red-500 mt-2">{errors.firstName.message as string}</p>
            )}
          </div>

          <div className="space-y-6">
            <Label htmlFor="email" className="text-sm font-medium">
              Email
            </Label>
            <Input 
              id="email" 
              type="email" 
              {...register('email')} 
              className="h-11"
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-2">{errors.email.message as string}</p>
            )}
          </div>

          <div className="space-y-6">
            <Label htmlFor="phone" className="text-sm font-medium">
              Téléphone
            </Label>
            <Input 
              id="phone" 
              type="tel" 
              {...register('phone')} 
              className="h-11"
            />
            {errors.phone && (
              <p className="text-sm text-red-500 mt-2">{errors.phone.message as string}</p>
            )}
          </div>

          <div className="space-y-6">
            <Label htmlFor="dateOfBirth" className="text-sm font-medium">
              Date de naissance
            </Label>
            <Input 
              id="dateOfBirth" 
              type="date" 
              {...register('dateOfBirth')} 
              className="h-11"
            />
            {errors.dateOfBirth && (
              <p className="text-sm text-red-500 mt-2">{errors.dateOfBirth.message as string}</p>
            )}
          </div>

          <div className="space-y-6">
            <Label htmlFor="placeOfBirth" className="text-sm font-medium">
              Lieu de naissance
            </Label>
            <Input 
              id="placeOfBirth" 
              {...register('placeOfBirth')} 
              className="h-11"
            />
            {errors.placeOfBirth && (
              <p className="text-sm text-red-500 mt-2">{errors.placeOfBirth.message as string}</p>
            )}
          </div>

          <div className="space-y-6">
            <Label htmlFor="nationality" className="text-sm font-medium">
              Nationalité
            </Label>
            <Input 
              id="nationality" 
              {...register('nationality')} 
              className="h-11"
            />
            {errors.nationality && (
              <p className="text-sm text-red-500 mt-2">{errors.nationality.message as string}</p>
            )}
          </div>

          <div className="space-y-6">
            <Label htmlFor="nationalRegisterNumber" className="text-sm font-medium">
              Numéro de registre national
            </Label>
            <Input 
              id="nationalRegisterNumber" 
              {...register('nationalRegisterNumber')} 
              className="h-11"
            />
            {errors.nationalRegisterNumber && (
              <p className="text-sm text-red-500 mt-2">{errors.nationalRegisterNumber.message as string}</p>
            )}
          </div>

          <div className="space-y-6">
            <Label htmlFor="idCardNumber" className="text-sm font-medium">
              Numéro de carte d&lsquo;identité
            </Label>
            <Input 
              id="idCardNumber" 
              {...register('idCardNumber')} 
              className="h-11"
            />
            {errors.idCardNumber && (
              <p className="text-sm text-red-500 mt-2">{errors.idCardNumber.message as string}</p>
            )}
          </div>

          <div className="space-y-6">
            <Label htmlFor="idCardValidity" className="text-sm font-medium">
              Date de validité de la carte d&lsquo;identité
            </Label>
            <Input 
              id="idCardValidity" 
              type="date" 
              {...register('idCardValidity')} 
              className="h-11"
            />
            {errors.idCardValidity && (
              <p className="text-sm text-red-500 mt-2">{errors.idCardValidity.message as string}</p>
            )}
          </div>

          <div className="space-y-6">
            <Label htmlFor="idCardType" className="text-sm font-medium">
              Type de carte d&lsquo;identité
            </Label>
            <Input 
              id="idCardType" 
              {...register('idCardType')} 
              className="h-11"
            />
            {errors.idCardType && (
              <p className="text-sm text-red-500 mt-2">{errors.idCardType.message as string}</p>
            )}
          </div>
        </div>
      </div>

      {/* Adresse et contact */}
      <div className="space-y-12">
        <div className="border-b border-gray-300 pb-4">
          <h2 className="text-2xl font-semibold text-gray-800">Adresse et contact</h2>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Label htmlFor="legalAddress" className="text-sm font-medium">
              Adresse légale
            </Label>
            <Input 
              id="legalAddress" 
              {...register('legalAddress')} 
              className="h-11"
            />
            {errors.legalAddress && (
              <p className="text-sm text-red-500 mt-2">{errors.legalAddress.message as string}</p>
            )}
          </div>

          <div className="space-y-6">
            <Label htmlFor="postalCode" className="text-sm font-medium">
              Code postal
            </Label>
            <Input 
              id="postalCode" 
              {...register('postalCode')} 
              className="h-11"
            />
            {errors.postalCode && (
              <p className="text-sm text-red-500 mt-2">{errors.postalCode.message as string}</p>
            )}
          </div>

          <div className="space-y-6">
            <Label htmlFor="city" className="text-sm font-medium">
              Ville
            </Label>
            <Input 
              id="city" 
              {...register('city')} 
              className="h-11"
            />
            {errors.city && (
              <p className="text-sm text-red-500 mt-2">{errors.city.message as string}</p>
            )}
          </div>

          <div className="space-y-6">
            <Label htmlFor="landline" className="text-sm font-medium">
              Téléphone fixe <span className="text-gray-500">(optionnel)</span>
            </Label>
            <Input 
  id="landline" 
  type="tel" 
  {...register('landline')} // Optionnel
  className="h-11"
/>
            {errors.landline && (
              <p className="text-sm text-red-500 mt-2">{errors.landline.message as string}</p>
            )}
          </div>
        </div>
      </div>



      {/* Situation familiale */}
      <div className="space-y-12">
        <div className="border-b border-gray-300 pb-4">
          <h2 className="text-2xl font-semibold text-gray-800">Situation familiale</h2>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Label htmlFor="maritalStatus" className="text-sm font-medium">
              Statut marital
            </Label>
            <Controller
              name="maritalStatus"
              control={control}
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="h-11">
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
              <p className="text-sm text-red-500 mt-2">{errors.maritalStatus.message as string}</p>
            )}
          </div>

          <div className="space-y-6">
            <Label htmlFor="spouseDetails" className="text-sm font-medium">
              Nom prénom du conjoint <span className="text-gray-500">(optionnel)</span>
            </Label>
            <Input 
              id="spouseDetails" 
              {...register('spouseDetails')} 
              className="h-11"
            />
          </div>
        </div>
      </div>

      {/* Profession et employeur */}
      <div className="space-y-12">
        <div className="border-b border-gray-300 pb-4">
          <h2 className="text-2xl font-semibold text-gray-800">Profession et employeur</h2>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Label htmlFor="job" className="text-sm font-medium">
              Profession
            </Label>
            <Input 
              id="job" 
              {...register('job')} 
              className="h-11"
            />
            {errors.job && (
              <p className="text-sm text-red-500 mt-2">{errors.job.message as string}</p>
            )}
          </div>

          <div className="space-y-6">
            <Label htmlFor="employerName" className="text-sm font-medium">
              Nom de l&lsquo;employeur
            </Label>
            <Input 
              id="employerName" 
              {...register('employerName')} 
              className="h-11"
            />
            {errors.employerName && (
              <p className="text-sm text-red-500 mt-2">{errors.employerName.message as string}</p>
            )}
          </div>

          <div className="space-y-6">
            <Label htmlFor="contractType" className="text-sm font-medium">
              Type de contrat
            </Label>
            <Controller
              name="contractType"
              control={control}
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="h-11">
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
              <p className="text-sm text-red-500 mt-2">{errors.contractType.message as string}</p>
            )}
          </div>

          <div className="space-y-6">
            <Label htmlFor="activitySector" className="text-sm font-medium">
              Secteur d&lsquo;activité
            </Label>
            <Input 
              id="activitySector" 
              {...register('activitySector')} 
              className="h-11"
            />
            {errors.activitySector && (
              <p className="text-sm text-red-500 mt-2">{errors.activitySector.message as string}</p>
            )}
          </div>

          <div className="space-y-6">
            <Label htmlFor="employmentSince" className="text-sm font-medium">
              Date d&lsquo;entrée en fonction
            </Label>
            <Input 
              id="employmentSince" 
              type="date" 
              {...register('employmentSince')} 
              className="h-11"
            />
            {errors.employmentSince && (
              <p className="text-sm text-red-500 mt-2">{errors.employmentSince.message as string}</p>
            )}
          </div>

          <div className="space-y-6">
            <Label htmlFor="employerAddress" className="text-sm font-medium">
              Adresse de l&lsquo;employeur
            </Label>
            <Input 
              id="employerAddress" 
              {...register('employerAddress')} 
              className="h-11"
            />
            {errors.employerAddress && (
              <p className="text-sm text-red-500 mt-2">{errors.employerAddress.message as string}</p>
            )}
          </div>

          <div className="space-y-6">
            <Label htmlFor="employerCity" className="text-sm font-medium">
              Ville de l&lsquo;employeur
            </Label>
            <Input 
              id="employerCity" 
              {...register('employerCity')} 
              className="h-11"
            />
            {errors.employerCity && (
              <p className="text-sm text-red-500 mt-2">{errors.employerCity.message as string}</p>
            )}
          </div>

          <div className="space-y-6">
            <Label htmlFor="employerPostalCode" className="text-sm font-medium">
              Code postal de l&lsquo;employeur
            </Label>
            <Input 
              id="employerPostalCode" 
              {...register('employerPostalCode')} 
              className="h-11"
            />
            {errors.employerPostalCode && (
              <p className="text-sm text-red-500 mt-2">{errors.employerPostalCode.message as string}</p>
            )}
          </div>

          <div className="space-y-6">
            <Label htmlFor="employerPhone" className="text-sm font-medium">
              Téléphone de l&lsquo;employeur <span className="text-gray-500">(optionnel)</span>
            </Label>
            <Input 
              id="employerPhone" 
              type="tel" 
              {...register('employerPhone')} 
              className="h-11"
            />
            {errors.employerPhone && (
              <p className="text-sm text-red-500 mt-2">{errors.employerPhone.message as string}</p>
            )}
          </div>
        </div>
      </div>

      {/* Revenus et charges */}
      <div className="space-y-12">
        <div className="border-b border-gray-300 pb-4">
          <h2 className="text-2xl font-semibold text-gray-800">Revenus et charges</h2>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Label htmlFor="numberOfChildren" className="text-sm font-medium">
              Nombre d&lsquo;enfants
            </Label>
            <Input 
              id="numberOfChildren" 
              type="number" 
              min="0" 
              {...register('numberOfChildren')} 
              className="h-11"
            />
            {errors.numberOfChildren && (
              <p className="text-sm text-red-500 mt-2">{errors.numberOfChildren.message as string}</p>
            )}
          </div>

          <div className="space-y-6">
            <Label htmlFor="housingStatus" className="text-sm font-medium">
              Statut d&apos;habitation
            </Label>
            <Controller
              name="housingStatus"
              control={control}
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="h-11">
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
              <p className="text-sm text-red-500 mt-2">{errors.housingStatus.message as string}</p>
            )}
          </div>

          <div className="space-y-6">
            <Label htmlFor="livingSince" className="text-sm font-medium">
              Date d&lsquo;entrée dans le logement
            </Label>
            <Input 
              id="livingSince" 
              type="date" 
              {...register('livingSince')} 
              className="h-11"
            />
            {errors.livingSince && (
              <p className="text-sm text-red-500 mt-2">{errors.livingSince.message as string}</p>
            )}
          </div>

          <div className="space-y-6">
            <Label htmlFor="rentOrMortgage" className="text-sm font-medium">
              Loyer ou mensualité crédit
            </Label>
            <Input 
              id="rentOrMortgage" 
              type="number" 
              min="0" 
              step="0.01" 
              {...register('rentOrMortgage')} 
              className="h-11"
            />
            {errors.rentOrMortgage && (
              <p className="text-sm text-red-500 mt-2">{errors.rentOrMortgage.message as string}</p>
            )}
          </div>

          <div className="space-y-6">
            <Label htmlFor="iban" className="text-sm font-medium">
              IBAN
            </Label>
            <Input 
              id="iban" 
              {...register('iban')} 
              className="h-11"
            />
            {errors.iban && (
              <p className="text-sm text-red-500 mt-2">{errors.iban.message as string}</p>
            )}
          </div>

          <div className="space-y-6">
            <Label htmlFor="bankAccountSince" className="text-sm font-medium">
              Date d&lsquo;ouverture du compte
            </Label>
            <Input 
              id="bankAccountSince" 
              type="date" 
              {...register('bankAccountSince')} 
              className="h-11"
            />
            {errors.bankAccountSince && (
              <p className="text-sm text-red-500 mt-2">{errors.bankAccountSince.message as string}</p>
            )}
          </div>

          <div className="space-y-6">
            <Label htmlFor="netIncome" className="text-sm font-medium">
              Revenu net mensuel
            </Label>
            <Input 
              id="netIncome" 
              type="number" 
              min="0" 
              step="0.01" 
              {...register('netIncome')} 
              className="h-11"
            />
            {errors.netIncome && (
              <p className="text-sm text-red-500 mt-2">{errors.netIncome.message as string}</p>
            )}
          </div>

          <div className="space-y-6">
            <Label htmlFor="otherIncome" className="text-sm font-medium">
              Autres revenus mensuels <span className="text-gray-500">(optionnel)</span>
            </Label>
            <Input 
              id="otherIncome" 
              type="number" 
              min="0" 
              step="0.01" 
              {...register('otherIncome')} 
              className="h-11"
            />
            {errors.otherIncome && (
              <p className="text-sm text-red-500 mt-2">{errors.otherIncome.message as string}</p>
            )}
          </div>

          <div className="space-y-6">
            <Label htmlFor="familyAllowances" className="text-sm font-medium">
              Allocations familiales <span className="text-gray-500">(optionnel)</span>
            </Label>
            <Input 
              id="familyAllowances" 
              type="number" 
              min="0" 
              step="0.01" 
              {...register('familyAllowances')} 
              className="h-11"
            />
            {errors.familyAllowances && (
              <p className="text-sm text-red-500 mt-2">{errors.familyAllowances.message as string}</p>
            )}
          </div>

          <div className="space-y-6">
            <Label htmlFor="otherMonthlyCharges" className="text-sm font-medium">
              Autres charges mensuelles <span className="text-gray-500">(optionnel)</span>
            </Label>
            <Input 
              id="otherMonthlyCharges" 
              type="number" 
              min="0" 
              step="0.01" 
              {...register('otherMonthlyCharges')} 
              className="h-11"
            />
            {errors.otherMonthlyCharges && (
              <p className="text-sm text-red-500 mt-2">{errors.otherMonthlyCharges.message as string}</p>
            )}
          </div>

          <div className="space-y-6">
            <Label htmlFor="currentCredits" className="text-sm font-medium">
              Nombre de crédits en cours
            </Label>
            <Input 
              id="currentCredits" 
              type="number" 
              min="0" 
              {...register('currentCredits')} 
              className="h-11"
            />
            {errors.currentCredits && (
              <p className="text-sm text-red-500 mt-2">{errors.currentCredits.message as string}</p>
            )}
          </div>

          <div className="space-y-6">
            <Label htmlFor="totalCreditMonthlyPayments" className="text-sm font-medium">
              Total mensualités de crédit
            </Label>
            <Input 
              id="totalCreditMonthlyPayments" 
              type="number" 
              min="0" 
              step="0.01" 
              {...register('totalCreditMonthlyPayments')} 
              className="h-11"
            />
            {errors.totalCreditMonthlyPayments && (
              <p className="text-sm text-red-500 mt-2">{errors.totalCreditMonthlyPayments.message as string}</p>
            )}
          </div>

          <div className="space-y-6">
            <Label htmlFor="totalCreditAmount" className="text-sm font-medium">
              Montant total des crédits
            </Label>
            <Input 
              id="totalCreditAmount" 
              type="number" 
              min="0" 
              step="0.01" 
              {...register('totalCreditAmount')} 
              className="h-11"
            />
            {errors.totalCreditAmount && (
              <p className="text-sm text-red-500 mt-2">{errors.totalCreditAmount.message as string}</p>
            )}
          </div>
        </div>
      </div>

      {/* Projet d'achat et consentement */}
      <div className="space-y-12">
        <div className="border-b border-gray-300 pb-4">
          <h2 className="text-2xl font-semibold text-gray-800">Projet d&lsquo;achat et consentement</h2>
        </div>

          <div className="space-y-6">
            <Label htmlFor="comments" className="text-sm font-medium">
              Commentaires additionnels <span className="text-gray-500">(optionnel)</span>
            </Label>
            <Textarea 
              id="comments" 
              {...register('comments')}
              className="min-h-[100px] resize-none"
            />
            {errors.comments && (
              <p className="text-sm text-red-500 mt-2">{errors.comments.message as string}</p>
            )}
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-2">
              <Controller
                name="consent"
                control={control}
                render={({ field }) => (
                  <Checkbox 
                    id="consent"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                )}
              />
              <Label 
                htmlFor="consent" 
                className="text-sm leading-normal"
              >
                Je consens au traitement de mes données personnelles conformément à la politique de confidentialité
              </Label>
            </div>
            {errors.consent && (
              <p className="text-sm text-red-500 mt-2">{errors.consent.message as string}</p>
            )}
          </div>
        </div>
      </div>
    
  );
}

export default FormFields;