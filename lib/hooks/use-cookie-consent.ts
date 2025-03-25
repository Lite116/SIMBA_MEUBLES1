'use client';

import { useState, useEffect } from 'react';

export type CookieConsent = {
    analytics: boolean;
    functional: boolean;
    marketing: boolean;
};

const COOKIE_CONSENT_KEY = 'cookie-consent';

export function useCookieConsent() {
    const [consent, setConsent] = useState<CookieConsent | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const storedConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
        if (storedConsent) {
            setConsent(JSON.parse(storedConsent));
        }
        setIsLoading(false);
    }, []);

    const updateConsent = (newConsent: CookieConsent) => {
        setConsent(newConsent);
        localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(newConsent));
    };

    const acceptAll = () => {
        const allConsent: CookieConsent = {
            analytics: true,
            functional: true,
            marketing: true,
        };
        updateConsent(allConsent);
    };

    const rejectAll = () => {
        const noConsent: CookieConsent = {
            analytics: false,
            functional: false,
            marketing: false,
        };
        updateConsent(noConsent);
    };

    return {
        consent,
        isLoading,
        updateConsent,
        acceptAll,
        rejectAll,
    };
}