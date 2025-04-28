import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { saveLanguagePreference } from '../utils/languageUtils';

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  
  const languages = [
    { code: 'en', name: t('languages.en'), flag: '🇺🇸' },
    { code: 'es', name: t('languages.es'), flag: '🇪🇸' },
    { code: 'fr', name: t('languages.fr'), flag: '🇫🇷' },
    { code: 'de', name: t('languages.de'), flag: '🇩🇪' },
    { code: 'ja', name: t('languages.ja'), flag: '🇯🇵' },
    { code: 'it', name: t('languages.it'), flag: '🇮🇹' }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];
  
  useEffect(() => {
    if (isOpen) {
      setAnimateIn(true);
    }
  }, [isOpen]);
  
  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    saveLanguagePreference(code);
    setIsOpen(false);
    setAnimateIn(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className="inline-flex justify-center items-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span className="mr-1 text-lg">{currentLanguage.flag}</span>
        <span className="hidden sm:inline">{currentLanguage.name}</span>
        <svg className="ml-1 h-5 w-5 transition-transform duration-200 ease-in-out" 
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }}
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" 
          aria-hidden="true">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>

      {isOpen && (
        <div 
          className={`origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 ${animateIn ? 'animate-fade-in' : ''} transition-all duration-200`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="language-menu"
        >
          <div className="py-1" role="none">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => changeLanguage(language.code)}
                className={`${
                  currentLanguage.code === language.code ? 'bg-indigo-50 text-indigo-700 font-medium' : 'text-gray-700'
                } flex items-center w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors duration-150`}
                role="menuitem"
              >
                <span className="mr-3 text-lg">{language.flag}</span>
                <span>{language.name}</span>
                {currentLanguage.code === language.code && (
                  <svg className="ml-auto h-5 w-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;