import React, { useState } from 'react';
import { Shield, CheckCircle, Loader } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const LandingPage = ({ darkMode = false, navigateToScanner }) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [error, setError] = useState(null);
  
  // Text color classes based on darkMode
  const headingColor = darkMode ? "text-white" : "text-slate-800";
  const textColor = darkMode ? "text-white" : "text-slate-700";
  const subTextColor = darkMode ? "text-blue-100" : "text-slate-600";
  const subtleTextColor = darkMode ? "text-blue-200" : "text-slate-600";

  const handleScan = async (e) => {
    if (e) e.preventDefault();
    
    if (!email.trim()) return;
    
    setIsScanning(true);
    setError(null);
    
    try {
      // Store the email in sessionStorage so ScanPage can use it
      sessionStorage.setItem('scanEmail', email);
      // Add flag to indicate coming from landing page
      sessionStorage.setItem('startScanImmediately', 'true');
      
      // Short delay to show scanning state before navigating
      setTimeout(() => {
        // Navigate directly to scanner page (bypass the form)
        navigateToScanner();
      }, 300);
    } catch (err) {
      console.error("Error:", err);
      setError(t('landing.error'));
      setIsScanning(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="py-8 md:py-16">
        {/* Header with logo */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center">
            <Shield className="text-green-400 h-10 w-10" />
            <h1 className={`text-2xl md:text-3xl font-bold ml-2 ${headingColor}`}>{t('app.title')}</h1>
          </div>
        </div>
        
        {/* Main headline */}
        <div className="text-center mb-6">
          <h2 className={`text-3xl md:text-4xl font-bold ${headingColor} mb-4`}>
            {t('landing.headline')}
          </h2>
          <p className={`text-xl ${textColor}`}>
            {t('landing.subheadline')}
          </p>
        </div>
        
        {/* Email input form */}
        <div className="max-w-lg mx-auto mb-12">
          <form onSubmit={handleScan} className="flex flex-col md:flex-row gap-3 mb-3">
            <input
              type="email"
              id="email"
              placeholder={t('landing.emailPlaceholder')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all text-slate-800"
              required
            />
            <button
              type="submit"
              disabled={isScanning || !email}
              className={`px-6 py-3 font-medium text-white rounded-lg transition-all ${
                isScanning || !email
                  ? 'bg-green-400 cursor-not-allowed'
                  : 'bg-green-500 hover:bg-green-600 shadow-md hover:shadow-lg'
              }`}
            >
              {isScanning ? (
                <span className="flex items-center justify-center">
                  <Loader className="animate-spin mr-2 h-4 w-4" />
                  {t('landing.checking')}
                </span>
              ) : (
                t('landing.verifyButton')
              )}
            </button>
          </form>
          
          {error && (
            <div className="p-3 rounded-lg bg-red-50 text-red-700 text-sm mb-4">
              {error}
            </div>
          )}
          
          <p className={`text-sm text-center ${subTextColor}`}>
            {t('landing.description')}
          </p>
        </div>
        
        {/* Benefits */}
        <div className="space-y-4 mb-12">
          <div className="flex items-start">
            <CheckCircle className="text-green-400 mt-1 flex-shrink-0 mr-3" size={20} />
            <p className={textColor}>
              {t('landing.benefits.instant')}
            </p>
          </div>
          <div className="flex items-start">
            <CheckCircle className="text-green-400 mt-1 flex-shrink-0 mr-3" size={20} />
            <p className={textColor}>
              {t('landing.benefits.alerts')}
            </p>
          </div>
          <div className="flex items-start">
            <CheckCircle className="text-green-400 mt-1 flex-shrink-0 mr-3" size={20} />
            <p className={textColor}>
              {t('landing.benefits.recommendations')}
            </p>
          </div>
          <div className="flex items-start">
            <CheckCircle className="text-green-400 mt-1 flex-shrink-0 mr-3" size={20} />
            <p className={textColor}>
              {t('landing.benefits.interface')}
            </p>
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className={`${darkMode ? 'bg-blue-900/50' : 'bg-blue-50'} rounded-lg p-4`}>
            <p className={textColor + " mb-3"}>
              {t('landing.testimonials.first.text')}
            </p>
            <p className={subtleTextColor + " font-medium"}>{t('landing.testimonials.first.author')}</p>
          </div>
          <div className={`${darkMode ? 'bg-blue-900/50' : 'bg-blue-50'} rounded-lg p-4`}>
            <p className={textColor + " mb-3"}>
              {t('landing.testimonials.second.text')}
            </p>
            <p className={subtleTextColor + " font-medium"}>{t('landing.testimonials.second.author')}</p>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={handleScan}
            disabled={isScanning}
            className={`px-8 py-4 font-medium rounded-lg shadow-md transition-all ${
              isScanning
                ? 'bg-green-400 text-white cursor-not-allowed'
                : 'bg-green-500 text-white hover:bg-green-600 hover:shadow-lg'
            }`}
          >
            {isScanning ? (
              <span className="flex items-center justify-center">
                <Loader className="animate-spin mr-2 h-4 w-4" />
                {t('landing.checking')}
              </span>
            ) : (
              t('landing.ctaButton')
            )}
          </button>
          <p className={`mt-3 ${subTextColor}`}>
            {t('landing.free')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;