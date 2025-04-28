import React, { useState, useEffect } from 'react';
import { Shield, AlertCircle, Wifi, Lock, Smartphone, CheckCircle, Loader } from 'lucide-react';
import { scanEmail } from '../api/scanApi';
import ScoreGauge from '../components/ScoreGauge';
import BreachList from '../components/BreachList';
import PasswordCard from '../components/PasswordCard';
import WifiCard from '../components/WifiCard';
import DeviceCard from '../components/DeviceCard';
import RecommendationsCard from '../components/RecommendationsCard';
import SkeletonResults from '../components/SkeletonResults';
import Tabs from '../components/Tabs';
import { useTranslation } from 'react-i18next';

function ScanPage({ 
  darkMode = false, 
  navigateToScanForm,
  isLoading,
  loadingCompleted,
  handleScanOperation 
}) {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [scanResults, setScanResults] = useState(null);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [showForm, setShowForm] = useState(true);
  
  // Check if there's an email stored from the landing page
  useEffect(() => {
    // Get stored email
    const storedEmail = sessionStorage.getItem('scanEmail');
    // Check if we should start scanning immediately
    const startScanImmediately = sessionStorage.getItem('startScanImmediately');
    
    if (storedEmail) {
      setEmail(storedEmail);
      
      // If coming from landing page, start scan immediately
      if (startScanImmediately === 'true') {
        // Don't show the form - go straight to scanning
        setShowForm(false);
        
        // Clear session storage
        sessionStorage.removeItem('scanEmail');
        sessionStorage.removeItem('startScanImmediately');
        
        // Slight delay to ensure component is mounted
        setTimeout(() => {
          performScan(storedEmail);
        }, 100);
      }
    }
  }, []);

  // Separate function for actual scanning logic that uses handleScanOperation
  const performScan = async (emailToScan) => {
    setError(null);
    
    await handleScanOperation(async () => {
      try {
        // Call your API
        const results = await scanEmail(emailToScan);
        setScanResults(results);
        return results;
      } catch (err) {
        console.error("Scan failed:", err);
        setError(t('scanPage.scanError'));
        // If scan fails and we came directly to scanning, show the form
        setShowForm(true);
        throw err; // Re-throw to let handleScanOperation know there was an error
      }
    });
    
    // Ensure the page scrolls to the top to show results
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle the form submit
  const handleScan = async (e) => {
    if (e) e.preventDefault();
    
    if (!email) return;
    
    performScan(email);
  };

  const resetScan = () => {
    setScanResults(null);
    setError(null);
    setEmail('');
    setShowForm(true);
    // Scroll back to top when starting a new scan
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const tabs = [
    { id: 'overview', label: t('scanPage.tabs.overview'), icon: <Shield size={16} /> },
    { id: 'breaches', label: t('scanPage.tabs.breaches'), icon: <AlertCircle size={16} /> },
    { id: 'details', label: t('scanPage.tabs.details'), icon: <Smartphone size={16} /> }
  ];

  return (
    <div className="max-w-3xl mx-auto">
      {/* Hide the form if we're coming directly from landing page or if we're loading */}
      {!scanResults && showForm && !isLoading && (
        <div className="mb-12 text-center">
          <div className={`inline-flex p-2 rounded-full ${darkMode ? 'bg-blue-900 text-white' : 'bg-blue-100 text-blue-700'} mb-4`}>
            <Shield size={24} />
          </div>
          <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-slate-800'} mb-2`}>
            {t('scanPage.title')}
          </h1>
          <p className={`${darkMode ? 'text-blue-100' : 'text-slate-600'} mb-8 max-w-lg mx-auto`}>
            {t('scanPage.description')}
          </p>
          
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-md mx-auto">
            <form onSubmit={handleScan} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                  {t('scanPage.emailLabel')}
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('scanPage.emailPlaceholder')}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  disabled={isLoading}
                />
                <p className="mt-1 text-xs text-slate-500">
                  {t('scanPage.emailHint')}
                </p>
              </div>
              
              {error && (
                <div className="p-3 rounded-lg bg-red-50 text-red-700 text-sm flex items-center">
                  <AlertCircle size={16} className="mr-2 flex-shrink-0" />
                  {error}
                </div>
              )}
              
              <button
                type="submit"
                disabled={isLoading || !email}
                className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-all ${
                  isLoading || !email
                    ? 'bg-blue-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg'
                }`}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <Loader className="animate-spin mr-2 h-4 w-4" />
                    {t('scanPage.scanning')}
                  </span>
                ) : (
                  t('scanPage.scanButton')
                )}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Loading state */}
      {isLoading && (
        <div className="animate-fade-in-down">
          <div className="text-center mb-8">
            <div className={`inline-flex p-2 rounded-full ${darkMode ? 'bg-blue-900 text-white' : 'bg-blue-100 text-blue-700'} mb-4`}>
              <Loader className="animate-spin" size={24} />
            </div>
            <h2 className={`text-2xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-600'} mb-2`}>
              {t('scanPage.loadingTitle')}
            </h2>
            <p className={`${darkMode ? 'text-slate-400' : 'text-slate-500'} mb-8`}>
              {t('scanPage.loadingDescription')}
            </p>
          </div>

          <SkeletonResults darkMode={darkMode} />
        </div>
      )}

      {/* Results - only show when not loading and we have results */}
      {scanResults && !isLoading && loadingCompleted && (
        <div className="space-y-6 animate-fade-in">
          {/* Top section with score and actions */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-1/3 flex justify-center">
              <ScoreGauge score={scanResults.score} darkMode={darkMode} />
            </div>
            
            <div className="w-full md:w-2/3">
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-800'} mb-4`}>
                {t('scanPage.resultsTitle')}
              </h2>
              <RecommendationsCard recommendations={scanResults.recommendations} />
              
              <button
                onClick={resetScan}
                className="mt-4 w-full py-2 px-4 bg-slate-100 rounded-lg font-medium text-slate-700 hover:bg-slate-200 transition-colors"
              >
                {t('scanPage.newScanButton')}
              </button>
            </div>
          </div>
          
          {/* Tabs for different categories */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
            
            <div className="p-6">
              {activeTab === 'overview' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <PasswordCard password={scanResults.password} />
                  <WifiCard wifi={scanResults.wifi} />
                </div>
              )}
              
              {activeTab === 'breaches' && (
                <BreachList breaches={scanResults.breaches} />
              )}
              
              {activeTab === 'details' && (
                <DeviceCard device={scanResults.device} />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ScanPage;