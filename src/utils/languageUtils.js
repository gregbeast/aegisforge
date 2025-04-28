// Language detection and management utilities

/**
 * Gets the user's preferred language from browser settings
 * Falls back to 'en' if the language is not supported
 * @param {Array} supportedLanguages - Array of language codes that the app supports
 * @returns {string} The detected language code
 */
export const detectUserLanguage = (supportedLanguages = ['en', 'es', 'fr', 'de', 'ja', 'it']) => {
    // Get browser language (e.g. 'en-US', 'fr', 'es-ES')
    const browserLang = navigator.language || navigator.userLanguage;
    
    // Extract base language code (e.g. 'en' from 'en-US')
    const baseLanguage = browserLang.split('-')[0];
    
    // Check if the language is supported, otherwise fall back to English
    return supportedLanguages.includes(baseLanguage) ? baseLanguage : 'en';
  };
  
  /**
   * Saves the user's language preference to localStorage
   * @param {string} langCode - The language code to save
   */
  export const saveLanguagePreference = (langCode) => {
    try {
      localStorage.setItem('userLanguage', langCode);
    } catch (error) {
      console.error('Could not save language preference to localStorage:', error);
    }
  };
  
  /**
   * Retrieves the user's language preference from localStorage
   * @returns {string|null} The saved language code or null if not found
   */
  export const getSavedLanguage = () => {
    try {
      return localStorage.getItem('userLanguage');
    } catch (error) {
      console.error('Could not retrieve language preference from localStorage:', error);
      return null;
    }
  };
  
  /**
   * Returns the formatted date according to the given locale
   * @param {string|Date} date - The date to format
   * @param {string} locale - The locale code (e.g. 'en', 'es')
   * @param {object} options - Intl.DateTimeFormat options
   * @returns {string} Formatted date string
   */
  export const formatLocalizedDate = (date, locale = 'en', options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }) => {
    const dateObj = date instanceof Date ? date : new Date(date);
    return new Intl.DateTimeFormat(locale, options).format(dateObj);
  };