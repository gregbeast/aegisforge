import React, { createContext, useContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { saveLanguagePreference, formatLocalizedDate } from '../utils/languageUtils';

// Create context
const TranslationContext = createContext();

/**
 * Custom hook to use the translation context
 */
export const useTranslationContext = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslationContext must be used within a TranslationProvider');
  }
  return context;
};

/**
 * Translation Provider component
 * Provides translation functions and state to the component tree
 */
export const TranslationProvider = ({ children }) => {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  
  // Update state when language changes
  useEffect(() => {
    setCurrentLanguage(i18n.language);
  }, [i18n.language]);
  
  // Change language and save preference
  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    saveLanguagePreference(code);
    document.documentElement.lang = code;
  };
  
  // Format date according to current language
  const formatDate = (date, options = {}) => {
    return formatLocalizedDate(date, currentLanguage, options);
  };
  
  // Format number according to current language
  const formatNumber = (number, options = {}) => {
    return new Intl.NumberFormat(currentLanguage, options).format(number);
  };
  
  // Check if text direction is RTL
  const isRTL = () => {
    return ['ar', 'he', 'fa', 'ur'].includes(currentLanguage);
  };
  
  // Get text direction
  const getDirection = () => {
    return isRTL() ? 'rtl' : 'ltr';
  };
  
  // The context value
  const value = {
    t,
    currentLanguage,
    changeLanguage,
    formatDate,
    formatNumber,
    isRTL,
    getDirection,
    supportedLanguages: ['en', 'es', 'fr', 'de', 'ja', 'it']
  };
  
  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};

export default TranslationProvider;