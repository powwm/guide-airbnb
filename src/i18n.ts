import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import des traductions
import translationEN from './locales/en/translation.json';
import translationFR from './locales/fr/translation.json';
import paymentEN from './locales/en/payment.json';
import paymentFR from './locales/fr/payment.json';
import successEN from './locales/en/success.json';
import successFR from './locales/fr/success.json';
import navEN from './locales/en/nav.json';
import navFR from './locales/fr/nav.json';
import guideFormEN from './locales/en/guideForm.json';
import guideFormFR from './locales/fr/guideForm.json';

// Fusion des traductions
const resources = {
  en: {
    translation: translationEN,
    payment: paymentEN,
    success: successEN,
    nav: navEN,
    guideForm: guideFormEN,
  },
  fr: {
    translation: translationFR,
    payment: paymentFR,
    success: successFR,
    nav: navFR,
    guideForm: guideFormFR,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr', // Langue par défaut
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n; 