import { z } from 'zod';
import IBAN from 'iban';


export const formSchema = z.object({
  // Informations personnelles
  lastName: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  firstName: z.string().min(2, 'Le prénom doit contenir au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  phone: z.string().regex(/^\d{10,15}$/, 'Numéro de téléphone invalide'),
  dateOfBirth: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Format de date invalide (YYYY-MM-DD)'),
  placeOfBirth: z.string().min(2, 'Lieu de naissance invalide'),
  nationality: z.string().min(2, 'Nationalité invalide'),
  nationalRegisterNumber: z.string().min(5, 'Numéro de registre national invalide'),
  idCardNumber: z.string().min(5, 'Numéro de carte d\'identité invalide'),
  idCardValidity: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Format de date invalide (YYYY-MM-DD)'),
  idCardType: z.string().min(2, 'Type de carte d\'identité invalide'),

  // Adresse et contact
  legalAddress: z.string().min(5, 'Adresse invalide'),
  postalCode: z.string().regex(/^\d{4,5}$/, 'Code postal invalide'),
  city: z.string().min(2, 'Ville invalide'),
  landline: z.string().regex(/^\d{10,15}$/, 'Numéro de téléphone fixe invalide').optional().or(z.literal('')),

  // Situation familiale
  maritalStatus: z.string().refine(
    val => ['célibataire', 'marié', 'divorcé', 'veuf'].includes(val),
    'Statut marital invalide'
  ),
  spouseDetails: z.string().optional(),

  // Profession et employeur
  job: z.string().min(2, 'Profession invalide'),
  employerName: z.string().min(2, 'Nom d\'employeur invalide'),
  contractType: z.string().refine(
    val => ['CDI', 'CDD', 'indépendant', 'intérimaire'].includes(val),
    'Type de contrat invalide'
  ),
  activitySector: z.string().min(2, 'Secteur d\'activité invalide'),
  employmentSince: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Format de date invalide (YYYY-MM-DD)'),
  employerAddress: z.string().min(5, 'Adresse employeur invalide'),
  employerCity: z.string().min(2, 'Ville employeur invalide'),
  employerPostalCode: z.string().regex(/^\d{4,5}$/, 'Code postal employeur invalide'),
  employerPhone: z.string().regex(/^\d{10,15}$/, 'Numéro de téléphone employeur invalide').optional().or(z.literal('')),

  // Revenus et charges
  numberOfChildren: z.string()
    .transform((val) => parseInt(val, 10))
    .refine((val) => !isNaN(val) && val >= 0, 'Nombre d\'enfants invalide'),
  housingStatus: z.string().refine(
    val => ['propriétaire', 'locataire', 'hébergé'].includes(val),
    'Statut d\'habitation invalide'
  ),
  livingSince: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Format de date invalide (YYYY-MM-DD)'),
  rentOrMortgage: z.string()
    .transform((val) => parseFloat(val))
    .refine((val) => !isNaN(val) && val >= 0, 'Montant invalide'),
  iban: z.string()
    .refine((val) => IBAN.isValid(val), 'IBAN invalide')
    .transform((val) => val.replace(/\s/g, '').toUpperCase()),
  bankAccountSince: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Format de date invalide (YYYY-MM-DD)'),
  netIncome: z.string()
    .transform((val) => parseFloat(val))
    .refine((val) => !isNaN(val) && val >= 0, 'Revenu net invalide'),
  otherIncome: z.string()
    .transform((val) => val === '' ? 0 : parseFloat(val))
    .refine((val) => !isNaN(val) && val >= 0, 'Montant invalide')
    .optional(),
  familyAllowances: z.string()
    .transform((val) => val === '' ? 0 : parseFloat(val))
    .refine((val) => !isNaN(val) && val >= 0, 'Montant invalide')
    .optional(),
  otherMonthlyCharges: z.string()
    .transform((val) => val === '' ? 0 : parseFloat(val))
    .refine((val) => !isNaN(val) && val >= 0, 'Montant invalide')
    .optional(),
  currentCredits: z.string()
    .transform((val) => parseInt(val, 10))
    .refine((val) => !isNaN(val) && val >= 0, 'Nombre de crédits invalide'),
  totalCreditMonthlyPayments: z.string()
    .transform((val) => parseFloat(val))
    .refine((val) => !isNaN(val) && val >= 0, 'Montant invalide'),
  totalCreditAmount: z.string()
    .transform((val) => parseFloat(val))
    .refine((val) => !isNaN(val) && val >= 0, 'Montant invalide'),

  // Achat et consentement
  comments: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, 'Vous devez autoriser le traitement des données'),
});

export type FormData = z.infer<typeof formSchema>;