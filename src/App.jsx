import React, { useState, useEffect, Suspense } from 'react';
import { Shield, Menu, X, Globe } from 'lucide-react';
import ScanPage from './pages/ScanPage';
import ScanFormPage from './pages/ScanFormPage';
import LandingPage from './pages/LandingPage';
import ConceptPage from './pages/ConceptPage';
import ResourcesPage from './pages/ResourcesPage';
import SecurityToolsPage from './pages/SecurityToolsPage';
import AboutPage from './pages/AboutPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import PrivacyTipsPage from './pages/PrivacyTipsPage';
import FAQPage from './pages/FAQPage';
import PricingPage from './pages/PricingPage';
import LanguageSwitcher from './components/LanguageSwitcher';
import { TranslationProvider } from './providers/TranslationProvider';
import { useTranslation } from 'react-i18next';
/* import { VideoContextProvider, useVideoContext } from './contexts/VideoContext';
import VideoModal from './components/VideoModal'; */
import './i18n'; // Import i18next configuration

import './App.css';

// Separate component for the app content to use translation hooks
function AppContent() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('landing'); // Default to landing page
  const [isLoading, setIsLoading] = useState(false);
  const [loadingCompleted, setLoadingCompleted] = useState(false);
  const [activeSection, setActiveSection] = useState(null); // Track section to scroll to

/* // Navbar component that conditionally renders based on video modal state
const ConditionalNavbar = () => {
  const { isVideoModalOpen } = useVideoContext();
  
  // Don't render navbar if video modal is open
  if (isVideoModalOpen) return null;
  
  return <Navbar />;
}; */
  
  // You can set this to true to enable video background
  const useVideoBackground = true;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigateTo = (page, section = null) => {
    // If navigating to the same page with a section, don't reset the page
    const isNavigatingToSamePage = currentPage === page;
    
    if (!isNavigatingToSamePage) {
      setCurrentPage(page);
      
      // Reset loading states when navigating between pages
      setIsLoading(false);
      setLoadingCompleted(false);
      
      // Ensure the page scrolls to the absolute top (position 0)
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      // Force the browser to complete the scroll even if React re-renders
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }, 100);
    }
    
    // Set the active section for scrolling (regardless of page change)
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  // Effect to handle section scrolling after page change or when section changes
  useEffect(() => {
    if (activeSection) {
      // Give the page time to render before scrolling to the section
      const scrollTimer = setTimeout(() => {
        const sectionElement = document.getElementById(activeSection);
        if (sectionElement) {
          // Scroll to the section with smooth behavior
          sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        // Reset the active section after scrolling
        setActiveSection(null);
      }, 500); // Delay to ensure the page content is fully rendered
      
      return () => clearTimeout(scrollTimer);
    }
  }, [currentPage, activeSection]);

  // Additional effect to ensure proper scrolling when changing pages
  useEffect(() => {
    // Ensure scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [currentPage]);
  
  // Close menu when clicking outside of it (for better UX)
  useEffect(() => {
    const handleClickOutside = (event) => {
      const mobileMenu = document.getElementById('mobile-menu');
      const menuButton = document.getElementById('menu-button');
      
      if (isMenuOpen && mobileMenu && !mobileMenu.contains(event.target) && 
          menuButton && !menuButton.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Function to handle scan operations with proper loading state management
  const handleScanOperation = async (scanFunction) => {
    // Set loading state to true
    setIsLoading(true);
    setLoadingCompleted(false);
    
    try {
      // Create a minimum delay to ensure loading state is visible
      const minDelay = new Promise(resolve => setTimeout(resolve, 800));
      
      // Wait for both the scan function and minimum delay
      await Promise.all([scanFunction(), minDelay]);
      
      // Add a small delay before completing to ensure smooth transition
      setTimeout(() => {
        setLoadingCompleted(true);
        setIsLoading(false);
      }, 300);
    } catch (error) {
      console.error('Scan operation error:', error);
      // Still mark as completed but with an error state that can be passed to components
      setLoadingCompleted(true);
      setIsLoading(false);
    }
  };

  // Render the current page based on state
  const renderPage = () => {
    switch(currentPage) {
      case 'landing':
        return <LandingPage 
                 darkMode={useVideoBackground} 
                 navigateToScanner={() => navigateTo('scanner')}
               />;
      case 'concept':
        return <ConceptPage 
                 darkMode={useVideoBackground} 
                 navigateToScanner={() => navigateTo('scanner')} 
               />;
      case 'resources':
        return <ResourcesPage darkMode={useVideoBackground} />;
      case 'about':
        return <AboutPage darkMode={useVideoBackground} />;
      case 'security-tools':
        return <SecurityToolsPage darkMode={useVideoBackground} />;
      case 'pricing':
        return <PricingPage darkMode={useVideoBackground} />;
      case 'privacy-policy':
        return <PrivacyPolicyPage darkMode={useVideoBackground} />;
      case 'terms-of-service':
        return <TermsOfServicePage darkMode={useVideoBackground} />;
      case 'privacy-tips':
        return <PrivacyTipsPage darkMode={useVideoBackground} />;
      case 'FAQ':
        return <FAQPage darkMode={useVideoBackground} 
        navigateToPage={navigateTo}
        />;
      case 'scan-form':
        return <ScanFormPage 
                 darkMode={useVideoBackground}
                 navigateToScanner={() => navigateTo('scanner')}
               />;
      case 'scanner':
        return <ScanPage 
                 darkMode={useVideoBackground}
                 navigateToScanForm={() => navigateTo('scan-form')}
                 isLoading={isLoading}
                 loadingCompleted={loadingCompleted}
                 handleScanOperation={handleScanOperation}
               />;
      default:
        return <LandingPage 
                 darkMode={useVideoBackground} 
                 navigateToScanner={() => navigateTo('scanner')}
               />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Background Layer */}
      {useVideoBackground ? (
        // Video Background
        <div className="fixed inset-0 z-0 w-full h-full overflow-hidden">
          <video
            className="absolute min-w-full min-h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/videos/background.mp4" type="video/mp4" />
            {/* Fallback background if video fails to load */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50"></div>
          </video>
          {/* Optional overlay to darken video for better text visibility */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
      ) : (
        // Gradient Background
        <div className="fixed inset-0 z-0 bg-gradient-to-br from-slate-50 to-blue-50"></div>
      )}

      {/* Persistent Top Navigation Bar - Always Visible */}
      <header className="sticky top-0 z-50 py-4 px-6 bg-white shadow-sm" id="page-header">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center cursor-pointer" onClick={() => navigateTo('landing')}>
            <Shield className="h-8 w-8 text-blue-600" />
            <h1 className="ml-2 text-2xl font-bold text-blue-800">{t('app.title')}</h1>
          </div>
          
          {/* Desktop/Tablet Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <nav className="mr-4">
              <ul className="flex space-x-6">
                <li>
                  <a 
                    href="#"
                    onClick={(e) => { e.preventDefault(); navigateTo('scan-form'); }}
                    className={`text-slate-600 hover:text-blue-600 transition-colors ${currentPage === 'scan-form' || currentPage === 'scanner' ? 'text-blue-600 font-medium' : ''}`}
                  >
                    {t('navigation.scanner')}
                  </a>
                </li>
                <li>
                  <a 
                    href="#"
                    onClick={(e) => { e.preventDefault(); navigateTo('concept'); }}
                    className={`text-slate-600 hover:text-blue-600 transition-colors ${currentPage === 'concept' ? 'text-blue-600 font-medium' : ''}`}
                  >
                    {t('navigation.concept')}
                  </a>
                </li>
                <li>
                  <a 
                    href="#"
                    onClick={(e) => { e.preventDefault(); navigateTo('privacy-tips'); }}
                    className={`text-slate-600 hover:text-blue-600 transition-colors ${currentPage === 'privacy-tips' ? 'text-blue-600 font-medium' : ''}`}
                  >
                    {t('navigation.privacyTips')}
                  </a>
                </li>
                <li>
                  <a 
                    href="#"
                    onClick={(e) => { e.preventDefault(); navigateTo('pricing'); }}
                    className={`text-slate-600 hover:text-blue-600 transition-colors ${currentPage === 'pricing' ? 'text-blue-600 font-medium' : ''}`}
                  >
                    {t('navigation.pricing')}
                  </a>
                </li>
                <li>
                  <a 
                    href="#"
                    onClick={(e) => { e.preventDefault(); navigateTo('security-tools'); }}
                    className={`text-slate-600 hover:text-blue-600 transition-colors ${currentPage === 'security-tools' ? 'text-blue-600 font-medium' : ''}`}
                  >
                    {t('navigation.security-tools')}
                  </a>
                </li>
                <li>
                  <a 
                    href="#"
                    onClick={(e) => { e.preventDefault(); navigateTo('about'); }}
                    className={`text-slate-600 hover:text-blue-600 transition-colors ${currentPage === 'about' ? 'text-blue-600 font-medium' : ''}`}
                  >
                    {t('navigation.about')}
                  </a>
                </li>
              </ul>
            </nav>
            
            {/* Language Switcher in Header */}
            <LanguageSwitcher />
          </div>
          
          {/* Mobile Menu Controls - Always visible */}
          <div className="md:hidden flex items-center">
            <LanguageSwitcher />
            <button 
              id="menu-button"
              className="ml-4 p-2 rounded-md text-slate-700 focus:outline-none hover:bg-slate-100 transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Dropdown - Appears below the header */}
        <div 
          id="mobile-menu"
          className={`md:hidden bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="container mx-auto px-6 py-2">
            <ul className="space-y-1">
              <li>
                <a 
                  href="#"
                  className={`block py-3 px-4 rounded-lg transition-colors
                    ${currentPage === 'scan-form' || currentPage === 'scanner' 
                      ? 'bg-blue-50 text-blue-600 font-medium' 
                      : 'text-slate-800 hover:bg-slate-50'}`}
                  onClick={(e) => { e.preventDefault(); navigateTo('scan-form'); }}
                >
                  {t('navigation.scanner')}
                </a>
              </li>
              <li>
                <a 
                  href="#"
                  className={`block py-3 px-4 rounded-lg transition-colors
                    ${currentPage === 'concept' 
                      ? 'bg-blue-50 text-blue-600 font-medium' 
                      : 'text-slate-800 hover:bg-slate-50'}`}
                  onClick={(e) => { e.preventDefault(); navigateTo('concept'); }}
                >
                  {t('navigation.concept')}
                </a>
              </li>
              <li>
                <a 
                  href="#"
                  className={`block py-3 px-4 rounded-lg transition-colors
                    ${currentPage === 'privacy-tips' 
                      ? 'bg-blue-50 text-blue-600 font-medium' 
                      : 'text-slate-800 hover:bg-slate-50'}`}
                  onClick={(e) => { e.preventDefault(); navigateTo('privacy-tips'); }}
                >
                  {t('navigation.privacyTips')}
                </a>
              </li>
              <li>
                <a 
                  href="#"
                  className={`block py-3 px-4 rounded-lg transition-colors
                    ${currentPage === 'scan-form' || currentPage === 'pricing' 
                      ? 'bg-blue-50 text-blue-600 font-medium' 
                      : 'text-slate-800 hover:bg-slate-50'}`}
                  onClick={(e) => { e.preventDefault(); navigateTo('pricing'); }}
                >
                  {t('navigation.pricing')}
                </a>
              </li>
              <li>
                <a 
                  href="#"
                  className={`block py-3 px-4 rounded-lg transition-colors
                    ${currentPage === 'security-tools' 
                      ? 'bg-blue-50 text-blue-600 font-medium' 
                      : 'text-slate-800 hover:bg-slate-50'}`}
                  onClick={(e) => { e.preventDefault(); navigateTo('security-tools'); }}
                >
                  {t('navigation.security-tools')}
                </a>
              </li>
              <li>
                <a 
                  href="#"
                  className={`block py-3 px-4 rounded-lg transition-colors
                    ${currentPage === 'about' 
                      ? 'bg-blue-50 text-blue-600 font-medium' 
                      : 'text-slate-800 hover:bg-slate-50'}`}
                  onClick={(e) => { e.preventDefault(); navigateTo('about'); }}
                >
                  {t('navigation.about')}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
          
      <main className="relative z-10 flex-grow w-full py-8 px-4">
        <div className="container mx-auto">
          {/* Render the current page */}
          {renderPage()}
        </div>
      </main>
          
      <footer className="relative z-10 bg-slate-800 text-slate-300 py-8 w-full">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center">
                <Shield className="h-6 w-6 text-blue-400" />
                <span className="ml-2 text-xl font-bold text-white">{t('app.title')}</span>
              </div>
              <p className="mt-2 text-sm text-slate-400 max-w-md">
                {t('footer.description')}
              </p>
            </div>
                
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
                  {t('footer.features')}
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a 
                      href="#" 
                      onClick={(e) => { e.preventDefault(); navigateTo('scan-form'); }}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {t('footer.emailScan')}
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#" 
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {t('footer.passwordCheck')}
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#" 
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {t('footer.deviceSecurity')}
                    </a>
                  </li>
                </ul>
              </div>
                  
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
                  {t('footer.resources')}
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a 
                      href="#" 
                      onClick={(e) => { e.preventDefault(); navigateTo('resources'); }}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {t('footer.securityGuide')}
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#" 
                      onClick={(e) => { e.preventDefault(); navigateTo('privacy-tips'); }}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {t('footer.privacyTips')}
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#" 
                      onClick={(e) => { e.preventDefault(); navigateTo('FAQ'); }}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {t('footer.faq')}
                    </a>
                  </li>
                </ul>
              </div>
                  
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
                  {t('footer.legal')}
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('privacy-policy'); }}
                      className="text-slate-400 hover:text-white transition-colors">
                      {t('footer.privacyPolicy')}
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('terms-of-service'); }}
                      className="text-slate-400 hover:text-white transition-colors">
                      {t('footer.termsOfService')}
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#" 
                      onClick={(e) => { e.preventDefault(); navigateTo('about', 'contact-section'); }}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {t('footer.contact')}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
              
          <div className="mt-8 pt-8 border-t border-slate-700 text-sm text-slate-400 text-center">
            <p>{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Main App component with translation provider
function App() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <TranslationProvider>
        <AppContent />
      </TranslationProvider>
    </Suspense>
  );
}

export default App;