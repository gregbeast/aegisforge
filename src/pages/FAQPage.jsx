import React, { useState, useEffect } from 'react';
import { Shield, Search, X, CheckCircle, ChevronDown, ChevronUp, Lock, Mail, Smartphone, Brain, BellRing, Calendar, Users, MessageCircle } from 'lucide-react';

const FAQ = ({ darkMode = false, navigateToPage }) => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedItem, setExpandedItem] = useState(null);
  const [filteredFaqs, setFilteredFaqs] = useState([]);
  
  // FAQ categories for tabs
  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'service', label: 'Service' },
    { id: 'security', label: 'Security' },
    { id: 'usage', label: 'Usage' },
    { id: 'billing', label: 'Subscription' }
  ];
  
  // FAQ items with category tags
  const faqItems = [
    {
      id: 1,
      question: "What is SecureMe?",
      answer: (
        <div className="space-y-2">
          <p>
            SecureMe is an intelligent cybersecurity tool that <strong>analyzes your email address</strong> to detect if it has been compromised in known data breaches.
          </p>
          <p>
            It <strong>alerts you in real-time</strong>, gives you a <strong>security score</strong>, and recommends concrete actions to protect your accounts.
          </p>
        </div>
      ),
      categories: ['service'],
      icon: <Shield className="flex-shrink-0" />
    },
    {
      id: 2,
      question: "What exactly does SecureMe scan?",
      answer: (
        <div className="space-y-2">
          <p>We analyze:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Your <strong>emails</strong> in public and private databases (HIBP, LeakBase...)</li>
            <li>Your <strong>compromised passwords</strong> (anonymously hashed)</li>
            <li>Your <strong>exposed data</strong> (name, phone, networks)</li>
            <li>And depending on your plan, <strong>your devices or Wi-Fi network</strong> (if mobile)</li>
          </ul>
        </div>
      ),
      categories: ['service', 'security'],
      icon: <Mail className="flex-shrink-0" />
    },
    {
      id: 3,
      question: "Is it really free?",
      answer: (
        <div className="space-y-2">
          <p>
            <strong>Yes</strong>: SecureMe offers a <strong>100% free</strong> version with a monthly scan.
          </p>
          <p>
            For <strong>continuous monitoring</strong>, proactive alerts, and personalized recommendations, you can upgrade to one of our premium subscriptions.
          </p>
        </div>
      ),
      categories: ['billing'],
      icon: <CheckCircle className="flex-shrink-0" />
    },
    {
      id: 4,
      question: "Is it secure? Is my data protected?",
      answer: (
        <div className="space-y-2">
          <p>Absolutely. Your data:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Is <strong>never stored in plain text</strong></li>
            <li>Is <strong>hashed and anonymized</strong> from the first scan</li>
            <li>Is <strong>never resold or shared</strong></li>
            <li>Is hosted in <strong>Switzerland</strong> or <strong>Europe</strong> on secure servers</li>
          </ul>
          <p>SecureMe is 100% compliant with <strong>GDPR</strong> and <strong>Swiss DPA</strong> standards.</p>
        </div>
      ),
      categories: ['security'],
      icon: <Lock className="flex-shrink-0" />
    },
    {
      id: 5,
      question: "Where do the detected breaches come from?",
      answer: (
        <div className="space-y-2">
          <p>We use:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Official public databases (HaveIBeenPwned, etc.)</li>
            <li>Private databases from security researchers</li>
            <li>Information collected by our OSINT & security partners</li>
            <li>An <strong>automated dark web monitoring</strong> and underground forums</li>
          </ul>
        </div>
      ),
      categories: ['service', 'security'],
      icon: <Search className="flex-shrink-0" />
    },
    {
      id: 6,
      question: "Do I need to install an app?",
      answer: (
        <div className="space-y-2">
          <p>
            Not at all. SecureMe works <strong>directly from your browser</strong> (computer, mobile, or tablet). No installation required, no access to your devices.
          </p>
        </div>
      ),
      categories: ['usage', 'service'],
      icon: <Smartphone className="flex-shrink-0" />
    },
    {
      id: 7,
      question: "I'm not an expert. Is this for me?",
      answer: (
        <div className="space-y-2">
          <p>Yes! SecureMe was designed for <strong>all audiences</strong>:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Clear, mobile-first interface</li>
            <li>Understandable results in 1 click</li>
            <li>Simple, personalized advice that can be applied immediately</li>
            <li>No technical jargon</li>
          </ul>
        </div>
      ),
      categories: ['usage'],
      icon: <Brain className="flex-shrink-0" />
    },
    {
      id: 8,
      question: "How does the security score work?",
      answer: (
        <div className="space-y-2">
          <p>Your score (out of 100) is calculated based on:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>The number of breaches detected</li>
            <li>The severity of exposed data</li>
            <li>How recent they are</li>
            <li>Your behavior (password changes, 2FA, etc.)</li>
          </ul>
        </div>
      ),
      categories: ['service', 'usage'],
      icon: <Shield className="flex-shrink-0" />
    },
    {
      id: 9,
      question: "What happens if I'm compromised?",
      answer: (
        <div className="space-y-2">
          <p>Don't panic. You'll receive:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>An <strong>immediate email alert</strong></li>
            <li><strong>Personalized advice</strong> to apply (change password, enable two-factor authentication, etc.)</li>
            <li>A <strong>step-by-step guide</strong> to secure your accounts</li>
          </ul>
        </div>
      ),
      categories: ['usage', 'security'],
      icon: <BellRing className="flex-shrink-0" />
    },
    {
      id: 10,
      question: "Can I cancel my subscription at any time?",
      answer: (
        <div className="space-y-2">
          <p>Of course. You can:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Cancel directly from your dashboard</li>
            <li>Or write to us at any time</li>
          </ul>
          <p>No minimum duration. No hidden commitments.</p>
        </div>
      ),
      categories: ['billing'],
      icon: <Calendar className="flex-shrink-0" />
    },
    {
      id: 11,
      question: "I want to protect my family/team: is that possible?",
      answer: (
        <div className="space-y-2">
          <p>Yes! SecureMe offers:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Family/team packages</strong></li>
            <li><strong>Multi-email monitoring</strong></li>
            <li>A shared dashboard</li>
            <li>A business version with domain audit</li>
          </ul>
        </div>
      ),
      categories: ['service', 'billing'],
      icon: <Users className="flex-shrink-0" />
    }
  ];
  
  // Filter FAQs based on active tab and search query
  useEffect(() => {
    let filtered = faqItems;
    
    // Filter by category/tab
    if (activeTab !== 'all') {
      filtered = filtered.filter(item => item.categories.includes(activeTab));
    }
    
    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(item => 
        item.question.toLowerCase().includes(query) || 
        (typeof item.answer === 'string' && item.answer.toLowerCase().includes(query))
      );
    }
    
    setFilteredFaqs(filtered);
  }, [activeTab, searchQuery]);
  
  // Toggle FAQ item expansion
  const toggleItem = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };
  
  // Handle tab change
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setExpandedItem(null); // Close any expanded items when changing tabs
  };
  
  // Handle search input
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setExpandedItem(null); // Close any expanded items when searching
  };
  
  // Clear search
  const clearSearch = () => {
    setSearchQuery('');
  };
  
  // Handle navigation to contact section
  const handleContactClick = (e) => {
    e.preventDefault();
    if (navigateToPage) {
      navigateToPage('about', 'contact-section');
    }
  };
  
  // Handle navigation to try for free
  const handleTryFreeClick = (e) => {
    e.preventDefault();
    if (navigateToPage) {
      navigateToPage('landing');
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero section with updated title layout */}
      <div className="text-center mb-12">
        <div className={`inline-flex p-3 rounded-full ${darkMode ? 'bg-blue-900 text-white' : 'bg-blue-100 text-blue-700'} mb-4`}>
          <MessageCircle size={28} />
        </div>
        <h1 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-slate-800'} mb-2`}>
          FAQ - SecureMe
        </h1>
        <p className={`text-2xl font-medium ${darkMode ? 'text-blue-200' : 'text-blue-600'} mb-4`}>
          Your Questions, Our Priority
        </p>
        <p className={`text-lg ${darkMode ? 'text-blue-100' : 'text-slate-600'} max-w-2xl mx-auto`}>
          Quickly find answers to your questions about our cybersecurity service.
        </p>
      </div>
      
      {/* Search bar */}
      <div className="mb-8">
        <div className={`relative rounded-lg overflow-hidden ${darkMode ? 'bg-slate-800' : 'bg-white'} shadow-md`}>
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className={`h-5 w-5 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`} />
          </div>
          <input
            type="text"
            className={`block w-full pl-10 pr-12 py-4 ${
              darkMode 
                ? 'bg-slate-800 text-white placeholder-slate-400 border-slate-700 focus:border-blue-500' 
                : 'bg-white text-slate-900 placeholder-slate-400 border-slate-300 focus:border-blue-500'
            } border-0 focus:ring-2 focus:ring-blue-500 rounded-lg transition-all`}
            placeholder="Search for a question..."
            value={searchQuery}
            onChange={handleSearch}
          />
          {searchQuery && (
            <button
              onClick={clearSearch}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              aria-label="Clear search"
            >
              <X className={`h-5 w-5 ${darkMode ? 'text-slate-400' : 'text-slate-500'} hover:text-slate-700`} />
            </button>
          )}
        </div>
      </div>
      
      {/* Category tabs */}
      <div className="mb-8 overflow-x-auto">
        <div className="flex space-x-2 min-w-max">
          {categories.map(category => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activeTab === category.id
                  ? darkMode
                    ? 'bg-blue-600 text-white'
                    : 'bg-blue-600 text-white'
                  : darkMode
                    ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    : 'bg-white text-slate-700 hover:bg-slate-100'
              }`}
              onClick={() => handleTabChange(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
      
      {/* FAQ items */}
      <div className="space-y-4 mb-12">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map(item => (
            <div 
              key={item.id} 
              className={`rounded-lg overflow-hidden ${
                darkMode ? 'bg-slate-800' : 'bg-white'
              } shadow-sm transition-all duration-200 ${
                expandedItem === item.id ? 'shadow-md' : ''
              }`}
            >
              <button
                className={`w-full px-6 py-4 flex items-center justify-between ${
                  darkMode ? 'text-white hover:bg-slate-700' : 'text-slate-800 hover:bg-slate-50'
                } transition-colors`}
                onClick={() => toggleItem(item.id)}
                aria-expanded={expandedItem === item.id}
              >
                <div className="flex items-center">
                  <div className={`mr-3 ${
                    darkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}>
                    {item.icon}
                  </div>
                  <span className="font-medium text-left">{item.question}</span>
                </div>
                {expandedItem === item.id ? (
                  <ChevronUp className={`flex-shrink-0 h-5 w-5 ${
                    darkMode ? 'text-slate-400' : 'text-slate-500'
                  }`} />
                ) : (
                  <ChevronDown className={`flex-shrink-0 h-5 w-5 ${
                    darkMode ? 'text-slate-400' : 'text-slate-500'
                  }`} />
                )}
              </button>
              
              {expandedItem === item.id && (
                <div 
                  className={`px-6 py-4 border-t ${
                    darkMode ? 'border-slate-700 text-slate-300' : 'border-slate-200 text-slate-600'
                  } animate-fade-in`}
                >
                  {item.answer}
                </div>
              )}
            </div>
          ))
        ) : (
          <div className={`text-center py-12 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            <div className="flex justify-center mb-4">
              <Search className="h-12 w-12 opacity-30" />
            </div>
            <p className="text-lg font-medium mb-2">No results found</p>
            <p>Try another search or view all our questions.</p>
            <button 
              className={`mt-4 px-4 py-2 rounded-lg ${
                darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'
              } text-white transition-colors`}
              onClick={() => {
                setSearchQuery('');
                setActiveTab('all');
              }}
            >
              View all questions
            </button>
          </div>
        )}
      </div>
      
      {/* Contact section with updated button colors and navigation */}
      <div className={`rounded-lg ${
        darkMode ? 'bg-slate-800' : 'bg-white'
      } shadow-md p-6 mb-12 text-center`}>
        <h2 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-800'} mb-4`}>
          Have another question?
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={handleContactClick}
            className={`px-6 py-3 rounded-lg ${
              darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'
            } text-white font-medium transition-colors flex items-center justify-center`}
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Contact us directly
          </button>
          <button 
            onClick={handleTryFreeClick}
            className={`px-6 py-3 rounded-lg ${
              darkMode 
                ? 'bg-green-600 hover:bg-green-700 text-white' 
                : 'bg-green-600 hover:bg-green-700 text-white'
            } font-medium transition-colors flex items-center justify-center`}
          >
            <Shield className="mr-2 h-5 w-5" />
            Try for free
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;