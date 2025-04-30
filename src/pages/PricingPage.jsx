import React, { useState, useRef } from 'react';
import FaqItem from '../components/FaqItem';
import VideoModal from '../components/VideoModal';

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [activeTab, setActiveTab] = useState('personal');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const pricingRef = useRef(null);

// Video URLs for different orientations
const landscapeVideoUrl = "/videos/background.mp4"; // 16:9 format 
const portraitVideoUrl = "/videos/aegis-forge-demo.mp4"; // 9:16 format


// Scroll to pricing section when "View Plans" button is clicked
const scrollToPricing = (e) => {
    e.preventDefault();
    pricingRef.current.scrollIntoView({ 
    behavior: 'smooth',
    block: 'start'
    });
};

// Open video modal when "Watch Demo" button is clicked
const openVideoModal = (e) => {
    e.preventDefault();
    setIsVideoModalOpen(true);
};

  // Pricing data
  const personalPlans = [
    {
      name: 'Free',
      tagline: 'Basic security',
      description: 'Essential protection for individuals',
      price: {
        monthly: 0,
        annually: 0
      },
      features: [
        { text: 'Manual scan (1x/month)', highlighted: false },
        { text: 'Basic security report', highlighted: false },
        { text: 'Email alerts for critical breaches', highlighted: false }
      ],
      cta: 'Start Free',
      popular: false,
      color: 'from-gray-50 to-gray-100',
      borderColor: 'border-gray-200'
    },
    {
      name: 'Basic',
      tagline: 'Most popular',
      description: 'Enhanced protection for digital life',
      price: {
        monthly: 3.90,
        annually: 39
      },
      features: [
        { text: 'Automatic weekly scans', highlighted: true },
        { text: 'Real-time breach alerts', highlighted: true },
        { text: 'Password strength analysis', highlighted: false },
        { text: 'Protection for 1 email address', highlighted: false },
        { text: 'Monthly security summary', highlighted: false }
      ],
      cta: 'Get Started',
      popular: true,
      color: 'from-blue-50 to-blue-100',
      borderColor: 'border-blue-500'
    },
    {
      name: 'Plus',
      tagline: 'Complete protection',
      description: 'Premium security for your digital presence',
      price: {
        monthly: 7.90,
        annually: 79
      },
      features: [
        { text: 'Daily automatic scans', highlighted: true },
        { text: 'Advanced breach notifications', highlighted: true },
        { text: 'Personalized security recommendations', highlighted: true },
        { text: 'Dark web monitoring', highlighted: false },
        { text: 'Priority support', highlighted: false },
        { text: 'Security score history', highlighted: false }
      ],
      cta: 'Get Plus',
      popular: false,
      color: 'from-indigo-50 to-indigo-100',
      borderColor: 'border-indigo-300'
    }
  ];

  const businessPlans = [
    {
      name: 'Pro Solo',
      tagline: 'Freelancers & small businesses',
      description: 'Professional security for individuals',
      price: {
        monthly: 19,
        annually: 189
      },
      features: [
        { text: 'Up to 5 email addresses', highlighted: true },
        { text: 'Advanced breach monitoring', highlighted: false },
        { text: 'Team dashboard', highlighted: false },
        { text: 'Email notifications', highlighted: false },
        { text: 'Basic API access', highlighted: false }
      ],
      cta: 'Get Pro Solo',
      popular: false,
      color: 'from-gray-50 to-gray-100',
      borderColor: 'border-gray-200'
    },
    {
      name: 'Pro Team',
      tagline: 'Best for teams',
      description: 'Complete security for growing teams',
      price: {
        monthly: 49,
        annually: 490
      },
      features: [
        { text: 'Up to 25 email addresses', highlighted: true },
        { text: 'Aggregated breach alerts', highlighted: true },
        { text: 'Team management dashboard', highlighted: true },
        { text: 'Full API access', highlighted: false },
        { text: 'Advanced reporting', highlighted: false },
        { text: 'Priority support', highlighted: false }
      ],
      cta: 'Get Pro Team',
      popular: true,
      color: 'from-blue-50 to-blue-100',
      borderColor: 'border-blue-500'
    },
    {
      name: 'Enterprise',
      tagline: 'For organizations',
      description: 'Custom security solutions for large teams',
      price: {
        monthly: 149,
        annually: 1490
      },
      features: [
        { text: '100+ email addresses', highlighted: true },
        { text: 'White label options', highlighted: true },
        { text: 'Custom SLA', highlighted: true },
        { text: 'Dedicated support', highlighted: false },
        { text: 'Advanced threat intelligence', highlighted: false },
        { text: 'Custom integration options', highlighted: false },
        { text: 'Security compliance reporting', highlighted: false }
      ],
      cta: 'Contact Sales',
      popular: false,
      color: 'from-indigo-50 to-indigo-100',
      borderColor: 'border-indigo-300'
    }
  ];

  const activePlans = activeTab === 'personal' ? personalPlans : businessPlans;
  
  const calculateSavings = (plan) => {
    if (billingCycle === 'monthly' || plan.price.monthly === 0) return null;
    const monthlyCost = plan.price.monthly;
    const yearlyCost = plan.price.annually / 12;
    const savings = ((monthlyCost - yearlyCost) / monthlyCost * 100).toFixed(0);
    return savings;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
    {/* Video Modal */}
    <VideoModal 
      isOpen={isVideoModalOpen} 
      onClose={() => setIsVideoModalOpen(false)} 
      landscapeVideoUrl={landscapeVideoUrl}
      portraitVideoUrl={portraitVideoUrl}
    />
      {/* Enhanced Hero Section with Animation and Shield */}
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-800 to-slate-900 py-16 sm:py-24">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iLjA1Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLThoLTJ2LTRoMnY0em0wLThoLTJWOGgydjEwem0tNCAyMGgtMnYtNGgydjR6bTAtOGgtMnYtNGgydjR6bTAtOGgtMlY4aDJ2MTB6bS00IDIwaC0ydi00aDJ2NHptMC04aC0ydi00aDJ2NHptMC04aC0yVjhoMnYxMHptLTQgMjBoLTJ2LTRoMnY0em0wLThoLTJ2LTRoMnY0em0wLThoLTJWOGgydjEweiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
          <div className="absolute inset-y-0 right-0 w-3/4 bg-gradient-to-l from-blue-500 via-blue-600 to-transparent opacity-20"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-white/5"></div>
        </div>
        
                {/* Content Container */}
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            {/* Text Section */}
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl animate-fade-in-down mb-4">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-100">Secure Your Digital Identity</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto md:mx-0 text-xl text-blue-100 sm:text-2xl md:mt-5 animate-fade-in">
                Choose the perfect Aegis Forge plan to protect what matters most
              </p>
              
              <div className="mt-10 md:flex md:justify-start space-y-4 md:space-y-0 md:space-x-4">
                <button
                  onClick={scrollToPricing}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-slate-900 bg-blue-100 hover:bg-blue-200 transition-colors animate-fade-in"
                >
                  View Plans
                  <svg className="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <button
                  onClick={openVideoModal}
                  className="inline-flex items-center px-6 py-3 border border-blue-400 text-base font-medium rounded-md text-blue-100 bg-transparent hover:bg-slate-700 transition-colors animate-fade-in group"
                >
                  <span>Watch Demo</span>
                  <svg className="ml-2 -mr-1 h-5 w-5 transition-transform duration-200 group-hover:scale-110" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Shield Animation Section */}
            <div className="hidden md:block md:w-1/2 mt-10 md:mt-0">
              <div className="relative flex justify-center">
                <div className="w-64 h-64 relative animate-pulse">
                  {/* Shield Base */}
                  <svg className="absolute inset-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path 
                      d="M12 22C12 22 20 18 20 12V6L12 2L4 6V12C4 18 12 22 12 22Z" 
                      fill="rgba(59, 130, 246, 0.3)" 
                      stroke="#4b96ff" 
                      strokeWidth="1" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                  
                  {/* Inner Shield Glow */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-40 h-40 rounded-full bg-blue-500 opacity-20 animate-ping"></div>
                  </div>
                  
                  {/* Lock Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-20 h-20 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={1.5} 
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" 
                      />
                    </svg>
                  </div>
                  
                  {/* Pulse Rings */}
                  <div className="absolute -inset-4 flex items-center justify-center">
                    <div className="w-full h-full rounded-full border-2 border-blue-400 opacity-30 animate-ping" style={{ animationDuration: '3s', animationDelay: '0.5s' }}></div>
                  </div>
                  <div className="absolute -inset-8 flex items-center justify-center">
                    <div className="w-full h-full rounded-full border-2 border-blue-300 opacity-20 animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Trust Badges */}
          <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center justify-center md:justify-start">
              <div className="flex items-center text-sm font-medium text-gray-300">
                <svg className="flex-shrink-0 h-5 w-5 text-blue-400 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>99.9% Uptime</span>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <div className="flex items-center text-sm font-medium text-gray-300">
                <svg className="flex-shrink-0 h-5 w-5 text-blue-400 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>SOC 2 Certified</span>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <div className="flex items-center text-sm font-medium text-gray-300">
                <svg className="flex-shrink-0 h-5 w-5 text-blue-400 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>GDPR Compliant</span>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <div className="flex items-center text-sm font-medium text-gray-300">
                <svg className="flex-shrink-0 h-5 w-5 text-blue-400 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Swiss Data Security</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Plan Type and Billing Cycle Selectors in One Row */}
        <div ref={pricingRef} className="flex flex-col md:flex-row justify-between items-center max-w-3xl mx-auto mb-16 bg-white rounded-xl shadow-md p-3 scroll-mt-8">          {/* Plan Type Selector */}
          <div className="inline-flex p-1.5 bg-gray-100 rounded-lg mb-4 md:mb-0">
            <button
              className={`${
                activeTab === 'personal'
                  ? 'bg-white shadow-sm text-blue-600'
                  : 'text-gray-500 hover:text-gray-900'
              } py-2 px-6 rounded-md font-medium text-sm focus:outline-none transition-all duration-200`}
              onClick={() => setActiveTab('personal')}
            >
              Personal
            </button>
            <button
              className={`${
                activeTab === 'business'
                  ? 'bg-white shadow-sm text-blue-600'
                  : 'text-gray-500 hover:text-gray-900'
              } py-2 px-6 rounded-md font-medium text-sm focus:outline-none transition-all duration-200`}
              onClick={() => setActiveTab('business')}
            >
              Business
            </button>
          </div>
          
          {/* Billing Cycle Selector */}
          <div className="flex items-center bg-gray-100 p-1.5 rounded-lg">
            <span className={`mr-3 text-sm font-medium ${billingCycle === 'monthly' ? 'text-blue-600' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button 
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${billingCycle === 'annually' ? 'bg-blue-600' : 'bg-gray-300'}`}
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annually' : 'monthly')}
              aria-label="Toggle billing cycle"
            >
              <span 
                className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-md transition duration-300 ${billingCycle === 'annually' ? 'translate-x-5' : 'translate-x-0.5'}`} 
              />
            </button>
            <span className={`ml-3 text-sm font-medium ${billingCycle === 'annually' ? 'text-blue-600' : 'text-gray-500'}`}>
              Annually
            </span>
            {billingCycle === 'annually' && (
              <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Save 20%
              </span>
            )}
          </div>
        </div>
        
        {/* Pricing Cards */}
        <div id="pricing" className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8 mb-20">
          {activePlans.map((plan, index) => {
            const savings = calculateSavings(plan);
            const isPopular = plan.popular;
            return (
              <div 
                key={index} 
                className={`relative flex flex-col rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 bg-gradient-to-b ${plan.color} ${isPopular ? 'border-2 border-blue-500 z-10' : 'border border-gray-200'}`}
              >
                {isPopular && (
                  <div className="absolute top-0 inset-x-0 flex justify-center">
                    <div className="h-6 px-4 flex items-center justify-center rounded-b-lg bg-blue-600 text-white text-sm font-semibold uppercase tracking-wide shadow-md">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="p-6 flex-grow">
                  {/* Plan Name and Tag */}
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                      <p className="text-sm text-gray-500 mt-1">{plan.tagline}</p>
                    </div>
                    {plan.name === 'Free' && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-blue-100 text-blue-800">
                        Free Forever
                      </span>
                    )}
                  </div>
                  
                  {/* Price */}
                  <div className="mt-6 flex items-baseline">
                    <span className="text-5xl font-extrabold text-gray-900">
                      {plan.price[billingCycle] === 0 ? 'Free' : `${plan.price[billingCycle].toFixed(2)}`}
                    </span>
                    {plan.price[billingCycle] !== 0 && (
                      <>
                        <span className="ml-1 text-2xl font-medium text-gray-500">
                          CHF
                        </span>
                        <span className="ml-2 text-base font-medium text-gray-500">
                          /{billingCycle === 'monthly' ? 'mo' : 'yr'}
                        </span>
                      </>
                    )}
                  </div>
                  
                  {/* Savings Badge */}
                  {savings && (
                    <div className="mt-2 inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-green-100 text-green-800">
                      Save {savings}%
                    </div>
                  )}
                  
                  {/* Description */}
                  <p className="mt-4 text-sm text-gray-500">{plan.description}</p>
                  
                  {/* Features */}
                  <ul role="list" className="mt-6 space-y-3">
                    {plan.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-start">
                        <div className={`flex-shrink-0 h-5 w-5 ${feature.highlighted ? 'text-blue-500' : 'text-green-500'}`}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            {feature.highlighted ? (
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            ) : (
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            )}
                          </svg>
                        </div>
                        <p className={`ml-2 text-sm ${feature.highlighted ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>{feature.text}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Call to Action */}
                <div className="p-6 bg-white bg-opacity-80 border-t border-gray-200">
                  <button
                    type="button"
                    className={`w-full py-3 px-4 rounded-lg text-center font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors ${
                      isPopular
                        ? 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500'
                        : plan.name === 'Free' 
                          ? 'bg-gray-100 hover:bg-gray-200 text-gray-800 focus:ring-gray-500'
                          : 'bg-white hover:bg-gray-50 text-blue-600 border border-blue-300 focus:ring-blue-500'
                    }`}
                  >
                    {plan.cta}
                  </button>
                  {plan.name !== 'Free' && (
                    <p className="mt-2 text-xs text-center text-gray-500">
                      {billingCycle === 'monthly' ? 'No long-term contract' : 'Billed annually'} • Cancel anytime
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Compare All Features */}
        <div className="my-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Compare All Features</h2>
            <p className="mt-2 text-gray-500">See exactly what you get with each plan</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-xl shadow-md">
              <thead>
                <tr className="bg-gray-50">
                  <th className="py-4 px-6 text-left text-sm font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">Features</th>
                  {activePlans.map((plan, idx) => (
                    <th key={idx} className="py-4 px-6 text-center text-sm font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">
                      {plan.name}
                      {plan.popular && (
                        <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          Popular
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900">Scan Frequency</td>
                  <td className="py-4 px-6 text-sm text-gray-500 text-center">1x / month</td>
                  <td className="py-4 px-6 text-sm text-gray-500 text-center">Weekly</td>
                  <td className="py-4 px-6 text-sm text-gray-500 text-center">Daily</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900">Email Alerts</td>
                  <td className="py-4 px-6 text-center">
                    <svg className="h-5 w-5 text-green-500 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <svg className="h-5 w-5 text-green-500 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <svg className="h-5 w-5 text-green-500 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900">Dark Web Monitoring</td>
                  <td className="py-4 px-6 text-center">
                    <svg className="h-5 w-5 text-gray-400 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <svg className="h-5 w-5 text-gray-400 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <svg className="h-5 w-5 text-green-500 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900">Personalized Recommendations</td>
                  <td className="py-4 px-6 text-center">
                    <svg className="h-5 w-5 text-gray-400 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <svg className="h-5 w-5 text-gray-400 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <svg className="h-5 w-5 text-green-500 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900">Priority Support</td>
                  <td className="py-4 px-6 text-center">
                    <svg className="h-5 w-5 text-gray-400 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <svg className="h-5 w-5 text-gray-400 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <svg className="h-5 w-5 text-green-500 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="bg-white rounded-2xl shadow-md px-6 py-8 my-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900">What Our Users Say</h2>
            <p className="mt-2 text-gray-500">Join thousands of satisfied users protecting their digital identity</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">JD</span>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-gray-900">John Doe</h3>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-4 w-4 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600">"Aegis Forge notified me about a data breach before it made the news. I was able to change my passwords quickly and prevent any damage."</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">SJ</span>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-gray-900">Sarah Johnson</h3>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-4 w-4 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600">"I use the Plus plan and love how it provides daily scans. The personalized recommendations have helped me improve my overall security posture."</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">MT</span>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-gray-900">Michael Thompson</h3>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-4 w-4 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600">"As a small business owner, the Pro Team plan has been invaluable. We can monitor all our team emails and get centralized alerts about potential security issues."</p>
            </div>
          </div>
        </div>
        {/* Enterprise Call-to-action */}
        {activeTab === 'business' && (
          <div className="relative my-20 overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-xl">
            <div className="absolute right-0 top-0 -mt-20 -mr-20 opacity-20">
              <svg width="404" height="404" fill="none" viewBox="0 0 404 404">
                <defs>
                  <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" className="text-white" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
              </svg>
            </div>
            <div className="px-6 py-12 sm:px-12 lg:grid lg:grid-cols-2 lg:gap-x-8">
              <div>
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  Enterprise-Grade Security
                </h2>
                <p className="mt-4 text-lg text-blue-100">
                  Need a custom solution for your organization? Our enterprise plan includes enhanced security features, dedicated account management, SLA guarantees, and white-label options.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-blue-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-white">Advanced Security Controls</h3>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-blue-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-white">Customized Solutions</h3>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-blue-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-white">Dedicated Support</h3>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <a
                    href="#contact-sales"
                    className="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-700 bg-white hover:bg-blue-50 transition-colors"
                  >
                    Contact Sales
                  </a>
                </div>
              </div>
              <div className="mt-12 lg:mt-0 flex items-center justify-center">
                <div className="max-w-md">
                  <img
                    className="h-56 w-auto object-cover rounded-lg shadow-lg"
                    src="/api/placeholder/600/400"
                    alt="Enterprise security dashboard"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* FAQ Section - Interactive with fold/unfold */}
        <div className="my-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">Everything you need to know about Aegis Forge</p>
          </div>
          
          <div className="max-w-3xl mx-auto divide-y divide-gray-200 rounded-2xl bg-white shadow overflow-hidden">
            {[
              {
                question: "How does Aegis Forge protect my data?",
                answer: "Aegis Forge uses industry-leading encryption and security protocols to monitor and protect your digital presence. We scan known data breaches and the dark web to detect if your information has been compromised, and provide actionable security recommendations."
              },
              {
                question: "Can I upgrade or downgrade my plan anytime?",
                answer: "Yes, you can upgrade, downgrade, or cancel your subscription at any time. Changes will take effect at the start of your next billing cycle. There are no cancellation fees or long-term commitments."
              },
              {
                question: "Is there a money-back guarantee?",
                answer: "Yes, we offer a 30-day money-back guarantee on all paid plans. If you're not satisfied with our service, you can request a full refund within 30 days of your purchase."
              },
              {
                question: "What happens if a data breach is detected?",
                answer: "If we detect that your information has been compromised, you'll receive an immediate alert with details about the breach and specific recommendations to secure your accounts and personal information."
              },
              {
                question: "How often are scans performed?",
                answer: "Scan frequency depends on your plan. Free users get one manual scan per month, Basic users receive weekly automatic scans, and Plus users enjoy daily automatic scans for the most comprehensive protection."
              },
              {
                question: "Can I protect multiple email addresses?",
                answer: "Personal plans protect a single email address. For multiple email addresses, we recommend our Business plans: Pro Solo (up to 5 emails), Pro Team (up to 25 emails), or Enterprise (100+ emails)."
              }
            ].map((faq, index) => (
              <FaqItem 
                key={index} 
                question={faq.question} 
                answer={faq.answer} 
                defaultOpen={index === 0} // First item open by default
              />
            ))}
          </div>
        </div>
        
        {/* Trust Badges */}
        <div className="my-20 text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-8">Trusted by individuals and businesses worldwide</h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="flex justify-center">
              <img className="h-12 opacity-50" src="/api/placeholder/120/60" alt="Trust badge 1" />
            </div>
            <div className="flex justify-center">
              <img className="h-12 opacity-50" src="/api/placeholder/120/60" alt="Trust badge 2" />
            </div>
            <div className="flex justify-center">
              <img className="h-12 opacity-50" src="/api/placeholder/120/60" alt="Trust badge 3" />
            </div>
            <div className="flex justify-center">
              <img className="h-12 opacity-50" src="/api/placeholder/120/60" alt="Trust badge 4" />
            </div>
          </div>
        </div>
        
        {/* Final CTA */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden my-20">
          <div className="px-6 py-12 sm:px-12 lg:px-16 bg-gradient-to-br from-blue-50 to-indigo-50">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">Secure Your Digital Identity Today</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Join thousands of users who trust Aegis Forge to protect their online presence. Get started with our free plan or unlock advanced protection features.
              </p>
              <div className="mt-8 flex justify-center space-x-4">
                <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                  Get Started Free
                </button>
                <button className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors">
                  View Demo
                </button>
              </div>
            </div>
          </div>
          
          {/* Money-back guarantee badge */}
          <div className="py-8 bg-gray-50 border-t border-gray-200">
            <div className="max-w-xl mx-auto px-4">
              <div className="bg-white rounded-xl shadow-sm border border-green-100 p-6 flex flex-col md:flex-row items-center justify-center">
                <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mb-4 md:mb-0">
                  <svg className="h-8 w-8 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-0 md:ml-6 text-center md:text-left">
                  <h3 className="text-lg font-bold text-gray-900">30-Day Money-Back Guarantee</h3>
                  <p className="text-gray-600 mt-1">Try Aegis Forge risk-free. If you're not completely satisfied, we'll refund your payment.</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mt-6">
                <div className="flex items-center justify-center">
                  <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span className="ml-2 text-sm font-medium text-gray-900">Secure payment</span>
                </div>
                <div className="flex items-center justify-center">
                  <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                  <span className="ml-2 text-sm font-medium text-gray-900">24/7 support</span>
                </div>
                <div className="flex items-center justify-center">
                  <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <span className="ml-2 text-sm font-medium text-gray-900">Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;