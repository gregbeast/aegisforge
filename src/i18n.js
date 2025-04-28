import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { detectUserLanguage, getSavedLanguage } from './utils/languageUtils';

// Get the user's preferred language
const savedLanguage = getSavedLanguage();
const detectedLanguage = detectUserLanguage(['en', 'es', 'fr', 'de', 'ja', 'it']);
const userLanguage = savedLanguage || detectedLanguage;

i18n
  // Load translations from /public/locales
  .use(Backend)
  // Detect user language
  .use(LanguageDetector)
  // Pass i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize i18next
  .init({
    fallbackLng: 'en',
    lng: userLanguage,
    debug: process.env.NODE_ENV === 'development',
    
    // Where to look for translations
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    
    // Default namespace
    defaultNS: 'translation',
    
    // Detection options
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage'],
    },
    
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    
    // React settings
    react: {
      useSuspense: true,
    },
  });

export default i18n;