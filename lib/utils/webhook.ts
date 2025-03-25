'use client';

import { FormData } from '@/lib/types/form';
import { Pack } from '@/lib/types';
import { RoomSelection } from '@/lib/types/selection';
import { AdditionalSelection } from '@/lib/types/additional-options';
import { getOptionNameById, getOptionPriceById } from './option-utils';

export async function sendToMakeWebhook(
  formData: FormData,
  selectedPack: Pack | null,
  roomSelections: RoomSelection[],
  additionalSelections: AdditionalSelection[]
) {
  const webhookUrl = process.env.NEXT_PUBLIC_WEBHOOK_URL;
  if (!webhookUrl) {
    throw new Error('Configuration error: Webhook URL is not defined');
  }

  if (!selectedPack) {
    throw new Error('Pack data is missing');
  }

  try {
    // Calculate additional options total using the utility function
    const additionalOptionsTotal = additionalSelections.reduce(
      (total, sel) => total + (sel.quantity * (getOptionPriceById(sel.id) || 0)),
      0
    );

    const totalMonthly = selectedPack.price + (additionalOptionsTotal / selectedPack.duration);

    const roomSelectionFields = roomSelections.reduce((acc, room, index) => {
      acc[`selection${index + 1}`] = `${room.type} (${room.optionId})`;
      return acc;
    }, {} as Record<string, string>);

    const additionalOptionsString = additionalSelections
      .map(sel => {
        const name = getOptionNameById(sel.id);
        const price = getOptionPriceById(sel.id);
        return name ? `${name} (${price}€) x${sel.quantity}` : null;
      })
      .filter(Boolean)
      .join(', ');

    // Créer un objet avec toutes les données personnelles
    const personalInfo = {
      lastName: formData.lastName,
      firstName: formData.firstName,
      email: formData.email,
      phone: formData.phone,
      dateOfBirth: formData.dateOfBirth,
      placeOfBirth: formData.placeOfBirth,
      nationality: formData.nationality,
      nationalRegisterNumber: formData.nationalRegisterNumber,
      idCardNumber: formData.idCardNumber,
      idCardValidity: formData.idCardValidity,
      idCardType: formData.idCardType
    };

    // Créer un objet avec les données d'adresse
    const addressInfo = {
      legalAddress: formData.legalAddress,
      postalCode: formData.postalCode,
      city: formData.city,
      landline: formData.landline
    };

    // Créer un objet avec les données familiales
    const familyInfo = {
      maritalStatus: formData.maritalStatus,
      spouseDetails: formData.spouseDetails,
      numberOfChildren: formData.numberOfChildren
    };

    // Créer un objet avec les données professionnelles
    const professionalInfo = {
      job: formData.job,
      employerName: formData.employerName,
      contractType: formData.contractType,
      activitySector: formData.activitySector,
      employmentSince: formData.employmentSince,
      employerAddress: formData.employerAddress,
      employerCity: formData.employerCity,
      employerPostalCode: formData.employerPostalCode,
      employerPhone: formData.employerPhone
    };

    // Créer un objet avec les données financières
    const financialInfo = {
      housingStatus: formData.housingStatus,
      livingSince: formData.livingSince,
      rentOrMortgage: formData.rentOrMortgage,
      iban: formData.iban,
      bankAccountSince: formData.bankAccountSince,
      netIncome: formData.netIncome,
      otherIncome: formData.otherIncome,
      familyAllowances: formData.familyAllowances,
      otherMonthlyCharges: formData.otherMonthlyCharges,
      currentCredits: formData.currentCredits,
      totalCreditMonthlyPayments: formData.totalCreditMonthlyPayments,
      totalCreditAmount: formData.totalCreditAmount
    };

    // Créer un objet avec les données de la commande
    const orderInfo = {
      packName: selectedPack.name,
      packPrice: selectedPack.price,
      packDuration: selectedPack.duration,
      totalMonthly,
      roomSelections: roomSelectionFields,
      additionalOptions: additionalOptionsString,
      additionalOptionsTotal,
      comments: formData.comments || ''
    };

    const payload = {
      date: new Date().toISOString(),
      personalInfo,
      addressInfo,
      familyInfo,
      professionalInfo,
      financialInfo,
      orderInfo,
      consent: formData.consent
    };

    console.log('Payload:', JSON.stringify(payload, null, 2));

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! status: ${response.status}. Response: ${errorText}`);
    }

    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      return await response.json();
    }

    return await response.text();
  } catch (error) {
    console.error('Webhook error:', error);
    throw error;
  }
}