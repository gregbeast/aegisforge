import React, { useState } from 'react';
import { Shield, AlertCircle, Loader } from 'lucide-react';

function ScanFormPage({ darkMode = false, navigateToScanner }) {
  const [email, setEmail] = useState('');
  const [scanning, setScanning] = useState(false);
  const [error, setError] = useState(null);

  const handleScan = async (e) => {
    if (e) e.preventDefault();
    
    if (!email.trim()) return;
    
    setScanning(true);
    setError(null);
    
    try {
      // Store the email in sessionStorage so ScanPage can use it
      sessionStorage.setItem('scanEmail', email);
      sessionStorage.setItem('startScanImmediately', 'true');
      
      // Short delay to show scanning state before navigating
      setTimeout(() => {
        // Navigate to scanner page which will handle the actual scan
        navigateToScanner();
      }, 300);
    } catch (err) {
      console.error("Error:", err);
      setError("We couldn't process your request. Please try again.");
      setScanning(false); // Fixed: changed setIsScanning to setScanning
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-12 text-center">
        <div className={`inline-flex p-2 rounded-full ${darkMode ? 'bg-blue-900 text-white' : 'bg-blue-100 text-blue-700'} mb-4`}>
          <Shield size={24} />
        </div>
        <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-slate-800'} mb-2`}>
          Check Your Digital Security
        </h1>
        <p className={`${darkMode ? 'text-blue-100' : 'text-slate-600'} mb-8 max-w-lg mx-auto`}>
          Scan your email to discover data breaches, assess your password security, 
          and get personalized recommendations.
        </p>
        
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-md mx-auto">
          <form onSubmit={handleScan} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                disabled={scanning}
              />
              <p className="mt-1 text-xs text-slate-500">
                We'll check if your email has been involved in any data breaches
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
              disabled={scanning || !email}
              className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-all ${
                scanning || !email
                  ? 'bg-blue-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg'
              }`}
            >
              {scanning ? (
                <span className="flex items-center justify-center">
                  <Loader className="animate-spin mr-2 h-4 w-4" />
                  Scanning...
                </span>
              ) : (
                'Scan Now'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ScanFormPage;