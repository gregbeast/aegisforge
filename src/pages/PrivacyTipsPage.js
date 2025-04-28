import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Lock, 
  Eye, 
  Smartphone, 
  Wifi, 
  Cloud, 
  Mail, 
  CreditCard, 
  User, 
  Fingerprint,
  CheckCircle,
  XCircle,
  Info,
  ChevronRight,
  Search,
  Filter
} from 'lucide-react';

const PrivacyTipsPage = ({ darkMode = false, navigateToPage }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeDifficulty, setActiveDifficulty] = useState('all');
  const [activeCompletionStatus, setActiveCompletionStatus] = useState('all');
  const [completedTips, setCompletedTips] = useState(() => {
    // Try to get completed tips from localStorage
    const saved = localStorage.getItem('secureMe_completedTips');
    return saved ? JSON.parse(saved) : [];
  });
  const [securityScore, setSecurityScore] = useState(0);
  const [showScoreAnimation, setShowScoreAnimation] = useState(false);
  
  const categories = [
    { id: 'all', label: 'All Tips', icon: <Shield className="h-5 w-5" /> },
    { id: 'passwords', label: 'Passwords', icon: <Lock className="h-5 w-5" /> },
    { id: 'privacy', label: 'Privacy', icon: <Eye className="h-5 w-5" /> },
    { id: 'devices', label: 'Devices', icon: <Smartphone className="h-5 w-5" /> },
    { id: 'network', label: 'Network', icon: <Wifi className="h-5 w-5" /> },
    { id: 'data', label: 'Data', icon: <Cloud className="h-5 w-5" /> }
  ];
  
  const difficulties = [
    { id: 'all', label: 'All Levels' },
    { id: 'easy', label: 'Easy' },
    { id: 'medium', label: 'Medium' },
    { id: 'hard', label: 'Hard' }
  ];
  
  const completionStatuses = [
    { id: 'all', label: 'All Status' },
    { id: 'completed', label: 'Completed', icon: <CheckCircle className="h-4 w-4" /> },
    { id: 'incomplete', label: 'Not Done', icon: <XCircle className="h-4 w-4" /> }
  ];
  
  const privacyTips = [
    {
      id: 'passwords-1',
      title: 'Use a password manager',
      description: 'A good password manager generates strong unique passwords for each site and stores them securely so you don\'t have to remember them all.',
      difficulty: 'medium',
      categories: ['passwords'],
      icon: <Lock className="h-8 w-8" />,
      impact: 'high',
      actionItems: [
        'Research password managers like 1Password, Bitwarden, or LastPass',
        'Install the password manager on all your devices',
        'Start saving your passwords and generate new strong ones'
      ],
      learnMoreLink: 'https://www.consumerreports.org/digital-security/password-managers-are-a-good-way-to-boost-online-security-a9730768295/'
    },
    {
      id: 'passwords-2',
      title: 'Enable two-factor authentication (2FA)',
      description: 'Adding a second verification step prevents unauthorized access even if your password is compromised.',
      difficulty: 'easy',
      categories: ['passwords', 'privacy'],
      icon: <Fingerprint className="h-8 w-8" />,
      impact: 'high',
      actionItems: [
        'Start with your email and financial accounts',
        'Use an authenticator app instead of SMS when possible',
        'Save backup codes in a secure location'
      ],
      learnMoreLink: 'https://www.ncsc.gov.uk/guidance/setting-two-factor-authentication-2fa'
    },
    {
      id: 'privacy-1',
      title: 'Review privacy settings on social media',
      description: 'Limit who can see your posts, personal information, and how platforms can use your data.',
      difficulty: 'easy',
      categories: ['privacy'],
      icon: <User className="h-8 w-8" />,
      impact: 'medium',
      actionItems: [
        'Check Facebook, Instagram, Twitter/X, LinkedIn settings',
        'Limit data sharing with third-party apps',
        'Consider making accounts private or limiting audience'
      ],
      learnMoreLink: 'https://www.consumerreports.org/privacy/facebook-privacy-settings-a2721508262/'
    },
    {
      id: 'privacy-2',
      title: 'Use a VPN for public Wi-Fi',
      description: 'A VPN encrypts your internet connection, protecting your data from potential eavesdroppers on public networks.',
      difficulty: 'medium',
      categories: ['privacy', 'network'],
      icon: <Wifi className="h-8 w-8" />,
      impact: 'medium',
      actionItems: [
        'Research reputable VPN providers (avoid free ones)',
        'Install VPN software on all your devices',
        'Enable auto-connect for public WiFi networks'
      ],
      learnMoreLink: 'https://www.consumer.ftc.gov/articles/what-know-about-virtual-private-networks-vpns'
    },
    {
      id: 'devices-1',
      title: 'Keep your software updated',
      description: 'Software updates often include security patches that protect against newly discovered vulnerabilities.',
      difficulty: 'easy',
      categories: ['devices'],
      icon: <Smartphone className="h-8 w-8" />,
      impact: 'high',
      actionItems: [
        'Enable automatic updates on all devices',
        'Check for updates at least weekly if auto-updates aren\'t available',
        'Don\'t ignore update notifications'
      ],
      learnMoreLink: 'https://www.ncsc.gov.uk/guidance/alert-update-software-and-firmware-to-prevent-potential-cyber-attacks'
    },
    {
      id: 'devices-2',
      title: 'Use screen locks and encryption',
      description: 'Protect your device data if it\'s lost or stolen by using strong authentication and encryption.',
      difficulty: 'easy',
      categories: ['devices', 'privacy'],
      icon: <Lock className="h-8 w-8" />,
      impact: 'high',
      actionItems: [
        'Set up fingerprint/face recognition and a strong PIN',
        'Enable full-disk encryption if available',
        'Set auto-lock to activate after a short period of inactivity'
      ],
      learnMoreLink: 'https://www.ncsc.gov.uk/guidance/setting-screen-lock'
    },
    {
      id: 'network-1',
      title: 'Secure your home Wi-Fi',
      description: 'A securely configured home network is your first line of defense against intrusions.',
      difficulty: 'medium',
      categories: ['network'],
      icon: <Wifi className="h-8 w-8" />,
      impact: 'medium',
      actionItems: [
        'Use WPA3 encryption if available (minimum WPA2)',
        'Create a strong, unique password for your network',
        'Change default admin credentials on your router',
        'Consider setting up a guest network for visitors'
      ],
      learnMoreLink: 'https://www.consumerreports.org/electronics-computers/routers/make-your-wi-fi-network-safer-more-secure/'
    },
    {
      id: 'data-1',
      title: 'Backup your data regularly',
      description: 'Regular backups protect your data from ransomware, device failure, and accidental deletion.',
      difficulty: 'medium',
      categories: ['data'],
      icon: <Cloud className="h-8 w-8" />,
      impact: 'high',
      actionItems: [
        'Set up automatic backups to an external drive or cloud service',
        'Test your backups periodically to ensure they work',
        'Follow the 3-2-1 rule: 3 copies, 2 different media types, 1 offsite'
      ],
      learnMoreLink: 'https://www.ncsc.gov.uk/information/data-backup'
    },
    {
      id: 'privacy-3',
      title: 'Be cautious with email',
      description: 'Email is a common vector for phishing attacks and malware distribution.',
      difficulty: 'easy',
      categories: ['privacy', 'data'],
      icon: <Mail className="h-8 w-8" />,
      impact: 'high',
      actionItems: [
        'Don\'t open unexpected attachments',
        'Verify sender addresses carefully',
        'Be skeptical of urgent requests, especially financial ones',
        'Use a spam filter'
      ],
      learnMoreLink: 'https://www.consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams'
    },
    {
      id: 'data-2',
      title: 'Use payment protection',
      description: 'Protect your financial information when shopping or banking online.',
      difficulty: 'easy',
      categories: ['data', 'privacy'],
      icon: <CreditCard className="h-8 w-8" />,
      impact: 'high',
      actionItems: [
        'Use virtual card numbers when available',
        'Consider a dedicated card for online purchases',
        'Check for HTTPS before entering payment information',
        'Monitor statements regularly for unauthorized charges'
      ],
      learnMoreLink: 'https://www.consumer.ftc.gov/articles/protecting-your-identity-while-shopping-online'
    },
    {
      id: 'network-2',
      title: 'Configure DNS security',
      description: 'Using secure DNS services can block malicious websites and prevent some tracking.',
      difficulty: 'hard',
      categories: ['network', 'privacy'],
      icon: <Shield className="h-8 w-8" />,
      impact: 'medium',
      actionItems: [
        'Research secure DNS providers like Cloudflare (1.1.1.1) or Quad9',
        'Configure your devices or router to use secure DNS',
        'Test your configuration at DNS leak test websites'
      ],
      learnMoreLink: 'https://www.consumerreports.org/digital-security/how-to-boost-your-internet-security-with-dns/'
    },
    {
      id: 'devices-3',
      title: 'Secure IoT devices',
      description: 'Smart home devices can create security vulnerabilities if not properly secured.',
      difficulty: 'hard',
      categories: ['devices', 'network'],
      icon: <Smartphone className="h-8 w-8" />,
      impact: 'medium',
      actionItems: [
        'Change default passwords on all smart devices',
        'Keep firmware updated on all IoT devices',
        'Consider placing IoT devices on a separate network',
        'Disable features you don\'t use that could create vulnerabilities'
      ],
      learnMoreLink: 'https://www.ncsc.gov.uk/guidance/smart-devices-in-the-home'
    }
  ];
  
  // Filter tips based on active category, difficulty, and completion status
  const filteredTips = privacyTips.filter(tip => {
    const categoryMatch = activeCategory === 'all' || tip.categories.includes(activeCategory);
    const difficultyMatch = activeDifficulty === 'all' || tip.difficulty === activeDifficulty;
    
    // Determine if the tip matches the selected completion status
    let completionMatch = true;
    if (activeCompletionStatus === 'completed') {
      completionMatch = completedTips.includes(tip.id);
    } else if (activeCompletionStatus === 'incomplete') {
      completionMatch = !completedTips.includes(tip.id);
    }
    
    return categoryMatch && difficultyMatch && completionMatch;
  });
  
  // Calculate security score based on completed tips
  useEffect(() => {
    // Save completed tips to localStorage
    localStorage.setItem('secureMe_completedTips', JSON.stringify(completedTips));
    
    // Calculate score - each completed tip is worth up to 10 points based on impact
    const maxScore = privacyTips.reduce((sum, tip) => {
      const impactValue = tip.impact === 'high' ? 10 : tip.impact === 'medium' ? 7 : 4;
      return sum + impactValue;
    }, 0);
    
    const currentScore = privacyTips.reduce((sum, tip) => {
      if (completedTips.includes(tip.id)) {
        const impactValue = tip.impact === 'high' ? 10 : tip.impact === 'medium' ? 7 : 4;
        return sum + impactValue;
      }
      return sum;
    }, 0);
    
    const calculatedScore = Math.round((currentScore / maxScore) * 100);
    
    // Animate score change if it's different
    if (calculatedScore !== securityScore) {
      setShowScoreAnimation(true);
      setTimeout(() => {
        setShowScoreAnimation(false);
        setSecurityScore(calculatedScore);
      }, 1000);
    } else {
      setSecurityScore(calculatedScore);
    }
  }, [completedTips]);
  
  // Toggle completed status for a tip
  const toggleTipCompletion = (tipId) => {
    setCompletedTips(prev => {
      if (prev.includes(tipId)) {
        return prev.filter(id => id !== tipId);
      } else {
        return [...prev, tipId];
      }
    });
  };
  
  // Get difficulty badge color
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'easy':
        return darkMode ? 'bg-green-800 text-green-100' : 'bg-green-100 text-green-800';
      case 'medium':
        return darkMode ? 'bg-yellow-800 text-yellow-100' : 'bg-yellow-100 text-yellow-800';
      case 'hard':
        return darkMode ? 'bg-red-800 text-red-100' : 'bg-red-100 text-red-800';
      default:
        return darkMode ? 'bg-slate-700 text-slate-100' : 'bg-slate-100 text-slate-800';
    }
  };
  
  // Get impact badge color
  const getImpactColor = (impact) => {
    switch (impact) {
      case 'high':
        return darkMode ? 'text-green-400' : 'text-green-600';
      case 'medium':
        return darkMode ? 'text-yellow-400' : 'text-yellow-600';
      case 'low':
        return darkMode ? 'text-red-400' : 'text-red-600';
      default:
        return darkMode ? 'text-slate-400' : 'text-slate-600';
    }
  };
  
  // Get color for progress bar and counter based on completion level
  const getProgressColor = (completed, total) => {
    // Calculate percentage of completion
    const percentage = (completed / total) * 100;
    
    if (completed === 0) {
      return {
        progressBar: 'bg-red-900',
        text: darkMode ? 'text-red-700' : 'text-red-900'
      };
    }
    if (percentage > 0 && percentage <= 33) {
      return {
        progressBar: 'bg-red-600',
        text: darkMode ? 'text-red-500' : 'text-red-600'
      };
    }
    if (percentage > 33 && percentage <= 66) {
      return {
        progressBar: 'bg-yellow-500',
        text: darkMode ? 'text-yellow-500' : 'text-yellow-600'
      };
    }
    return {
      progressBar: 'bg-green-500',
      text: darkMode ? 'text-green-500' : 'text-green-600'
    };
  };

  // Get progress color objects
  const progressColors = getProgressColor(completedTips.length, privacyTips.length);
  
  // Calculate counts for filter badges
  const completedCount = completedTips.length;
  const incompleteCount = privacyTips.length - completedCount;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero section */}
      <div className="text-center mb-12">
        <div className={`inline-flex p-3 rounded-full ${darkMode ? 'bg-blue-900 text-white' : 'bg-blue-100 text-blue-700'} mb-4`}>
          <Shield size={28} />
        </div>
        <h1 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-slate-800'} mb-2`}>
          Privacy Tips
        </h1>
        <p className={`text-2xl font-medium ${darkMode ? 'text-blue-200' : 'text-blue-600'} mb-4`}>
          Simple Steps for Better Online Security
        </p>
        <p className={`text-lg ${darkMode ? 'text-blue-100' : 'text-slate-600'} max-w-2xl mx-auto`}>
          Follow these tips to enhance your digital privacy and protect your personal information.
        </p>
      </div>
      
      {/* Security score card */}
      <div className={`mb-8 rounded-xl overflow-hidden ${darkMode ? 'bg-slate-800' : 'bg-white'} shadow-md`}>
        <div className="p-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex-1">
              <h2 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-slate-800'} mb-2`}>
                Your Privacy Score
              </h2>
              <p className={`${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                Complete more tips to improve your score
              </p>
              
              <div className="mt-4 flex items-center gap-2">
                <div className="w-full bg-slate-200 rounded-full h-4 dark:bg-slate-700">
                  <div 
                    className={`h-4 rounded-full ${progressColors.progressBar} transition-all duration-1000 ease-out`}
                    style={{ width: `${securityScore}%` }}
                  ></div>
                </div>
                <span className={`font-bold text-lg text-white bg-slate-700 px-2 py-0.5 rounded-md ${
                  showScoreAnimation ? 'animate-pulse' : ''
                }`}>
                  {securityScore}%
                </span>
              </div>
            </div>
            
            <div className="mt-6 md:mt-0 text-center md:text-right">
              <div className="flex items-center justify-end gap-3 mb-2">
                <span className={`inline-flex items-center ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  <CheckCircle className="mr-1 h-4 w-4 text-green-500" />
                  Completed
                </span>
                <span className={`font-bold text-xl ${progressColors.text}`}>
                  {completedTips.length}/{privacyTips.length}
                </span>
              </div>
              <button
                onClick={() => setCompletedTips([])}
                className={`text-sm ${darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-800'} transition-colors`}
              >
                Reset progress
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Filters section */}
      <div className="space-y-4 mb-8">
        {/* Category filter tabs */}
        <div className="overflow-x-auto">
          <h3 className={`text-sm font-medium mb-2 ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}>
            <Filter className="w-4 h-4 inline mr-1" />
            Filter by category:
          </h3>
          <div className="flex space-x-2 min-w-max">
            {categories.map(category => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors flex items-center ${
                  activeCategory === category.id
                    ? darkMode
                      ? 'bg-blue-600 text-white'
                      : 'bg-blue-600 text-white'
                    : darkMode
                      ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      : 'bg-white text-slate-700 hover:bg-slate-100'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className="mr-2">{category.icon}</span>
                {category.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Difficulty filter tabs */}
        <div className="overflow-x-auto">
          <h3 className={`text-sm font-medium mb-2 ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}>
            <Filter className="w-4 h-4 inline mr-1" />
            Filter by difficulty:
          </h3>
          <div className="flex space-x-2 min-w-max">
            {difficulties.map(difficulty => (
              <button
                key={difficulty.id}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeDifficulty === difficulty.id
                    ? darkMode
                      ? 'bg-blue-600 text-white'
                      : 'bg-blue-600 text-white'
                    : darkMode
                      ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      : 'bg-white text-slate-700 hover:bg-slate-100'
                }`}
                onClick={() => setActiveDifficulty(difficulty.id)}
              >
                {difficulty.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Completion status filter tabs */}
        <div className="overflow-x-auto">
          <h3 className={`text-sm font-medium mb-2 ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}>
            <Filter className="w-4 h-4 inline mr-1" />
            Filter by status:
          </h3>
          <div className="flex space-x-2 min-w-max">
            {completionStatuses.map(status => (
              <button
                key={status.id}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors flex items-center ${
                  activeCompletionStatus === status.id
                    ? darkMode
                      ? 'bg-blue-600 text-white'
                      : 'bg-blue-600 text-white'
                    : darkMode
                      ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      : 'bg-white text-slate-700 hover:bg-slate-100'
                }`}
                onClick={() => setActiveCompletionStatus(status.id)}
              >
                {status.icon && <span className="mr-2">{status.icon}</span>}
                {status.label}
                {status.id === 'completed' && completedCount > 0 && (
                  <span className={`ml-2 px-1.5 py-0.5 text-xs rounded-full ${darkMode ? 'bg-green-800 text-green-100' : 'bg-green-100 text-green-800'}`}>
                    {completedCount}
                  </span>
                )}
                {status.id === 'incomplete' && incompleteCount > 0 && (
                  <span className={`ml-2 px-1.5 py-0.5 text-xs rounded-full ${darkMode ? 'bg-red-800 text-red-100' : 'bg-red-100 text-red-800'}`}>
                    {incompleteCount}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
        
        {/* Reset filters button */}
        {(activeCategory !== 'all' || activeDifficulty !== 'all' || activeCompletionStatus !== 'all') && (
          <div className="flex justify-end">
            <button
              onClick={() => {
                setActiveCategory('all');
                setActiveDifficulty('all');
                setActiveCompletionStatus('all');
              }}
              className={`text-sm flex items-center ${
                darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'
              }`}
            >
              <XCircle className="h-4 w-4 mr-1" />
              Reset all filters
            </button>
          </div>
        )}
      </div>
      
      {/* Tips grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {filteredTips.length > 0 ? (
          filteredTips.map(tip => {
            const isCompleted = completedTips.includes(tip.id);
            
            return (
              <div 
                key={tip.id}
                className={`rounded-xl overflow-hidden transition-all ${
                  darkMode 
                    ? isCompleted ? 'bg-slate-700 border border-green-500' : 'bg-slate-800 hover:bg-slate-700'
                    : isCompleted ? 'bg-white border border-green-500' : 'bg-white hover:shadow-md'
                } shadow-sm`}
              >
                <div className="p-6">
                  <div className="flex justify-between">
                    <div className={`p-2 rounded-full mb-4 ${
                      darkMode ? 'bg-blue-900 text-blue-100' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {tip.icon}
                    </div>
                    
                    <div>
                      <button
                        onClick={() => toggleTipCompletion(tip.id)}
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          isCompleted
                            ? 'bg-green-100 text-green-600 hover:bg-green-200'
                            : darkMode 
                              ? 'bg-slate-700 text-slate-300 hover:bg-slate-600' 
                              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                        aria-label={isCompleted ? "Mark as incomplete" : "Mark as complete"}
                      >
                        {isCompleted ? (
                          <CheckCircle className="h-5 w-5" />
                        ) : (
                          <XCircle className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>
                  
                  <h3 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                    {tip.title}
                  </h3>
                  
                  <p className={`mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    {tip.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getDifficultyColor(tip.difficulty)}`}>
                      {tip.difficulty.charAt(0).toUpperCase() + tip.difficulty.slice(1)}
                    </span>
                    
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      darkMode ? 'bg-slate-700 text-slate-300' : 'bg-slate-100 text-slate-700'
                    }`}>
                      Impact: <span className={`ml-1 font-bold ${getImpactColor(tip.impact)}`}>
                        {tip.impact.charAt(0).toUpperCase() + tip.impact.slice(1)}
                      </span>
                    </span>
                  </div>
                  
                  <div 
                    className={`mb-4 p-3 rounded-lg text-sm ${
                      darkMode ? 'bg-slate-700' : 'bg-slate-50'
                    }`}
                  >
                    <div className="flex items-start mb-2">
                      <Info className={`h-4 w-4 mt-0.5 mr-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                      <span className={`font-medium ${darkMode ? 'text-white' : 'text-slate-700'}`}>Action items:</span>
                    </div>
                    <ul className={`list-disc pl-6 space-y-1 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                      {tip.actionItems.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <a 
                      href={tip.learnMoreLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`inline-flex items-center text-sm font-medium ${
                        darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
                      }`}
                    >
                      Learn more
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </a>
                    
                    {isCompleted && (
                      <span className={`inline-flex items-center text-sm ${
                        darkMode ? 'text-green-400' : 'text-green-600'
                      }`}>
                        <CheckCircle className="mr-1 h-4 w-4" />
                        Completed
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className={`col-span-2 text-center py-12 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            <div className="flex justify-center mb-4">
              <Search className="h-12 w-12 opacity-30" />
            </div>
            <p className="text-lg font-medium mb-2">No matching tips found</p>
            <p>Try adjusting your filters to see more tips.</p>
            <button 
              className={`mt-4 px-4 py-2 rounded-lg ${
                darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'
              } text-white transition-colors`}
              onClick={() => {
                setActiveCategory('all');
                setActiveDifficulty('all');
                setActiveCompletionStatus('all');
              }}
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
      
      {/* CTA section */}
      <div className={`rounded-lg ${
        darkMode ? 'bg-slate-800' : 'bg-white'
      } shadow-md p-6 mb-12 text-center`}>
        <h2 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-800'} mb-4`}>
          Want a personalized security assessment?
        </h2>
        <p className={`mb-6 ${darkMode ? 'text-slate-300' : 'text-slate-600'} max-w-lg mx-auto`}>
          Run a full scan to identify specific vulnerabilities and receive tailored recommendations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={(e) => {
              e.preventDefault();
              if (navigateToPage) navigateToPage('scan-form');
            }}
            className={`px-6 py-3 rounded-lg ${
              darkMode 
                ? 'bg-green-600 hover:bg-green-700 text-white' 
                : 'bg-green-600 hover:bg-green-700 text-white'
            } font-medium transition-colors flex items-center justify-center`}
          >
            <Shield className="mr-2 h-5 w-5" />
            Run a Security Scan
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyTipsPage;