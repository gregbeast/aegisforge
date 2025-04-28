import React from 'react';
import { Shield, ExternalLink, Settings, Key, Lock, Wifi, FileText, BellRing, Search, Gauge } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const SecurityToolsPage = ({ darkMode = false }) => {
  const { t } = useTranslation();

  // Define security tools with more details
  const securityTools = [
    {
      id: 1,
      name: "Password Strength Checker",
      description: "Test how strong your passwords are against common cracking techniques.",
      link: "#",
      icon: <Key size={24} className="text-amber-500" />,
      popular: true,
      detail: "Our advanced password strength analyzer evaluates your passwords using multiple algorithms to identify vulnerabilities. Get recommendations on how to improve password security without sacrificing memorability."
    },
    {
      id: 2,
      name: "Secure File Deletion Tool",
      description: "Permanently erase sensitive files to prevent recovery.",
      link: "#",
      icon: <FileText size={24} className="text-red-500" />,
      popular: false,
      detail: "When you delete files normally, the data can often be recovered. Our secure deletion tool overwrites your files multiple times using industry-standard methods to ensure they cannot be recovered, even with specialized forensic tools."
    },
    {
      id: 3,
      name: "Home Network Scanner",
      description: "Identify devices connected to your network and detect vulnerabilities.",
      link: "#",
      icon: <Wifi size={24} className="text-blue-500" />,
      popular: true,
      detail: "Discover all devices on your home network, identify unknown connections, and detect security issues. The scanner provides a detailed report of potential vulnerabilities with step-by-step remediation instructions."
    },
    {
      id: 4,
      name: "Encryption Assistant",
      description: "Easy-to-use tool for encrypting sensitive files and communications.",
      link: "#",
      icon: <Lock size={24} className="text-green-500" />,
      popular: false,
      detail: "Protect your private data with strong encryption. Our tool simplifies the process of encrypting files, messages, and even whole directories with AES-256 encryption - making it accessible even to non-technical users."
    },
    {
      id: 5,
      name: "Security Notification Service",
      description: "Get alerts about new vulnerabilities affecting your devices and accounts.",
      link: "#",
      icon: <BellRing size={24} className="text-purple-500" />,
      popular: true,
      detail: "Stay ahead of threats with personalized security alerts. After a quick system scan, we'll monitor for new vulnerabilities specific to your software, devices, and services, and notify you with simple remediation steps."
    },
    {
      id: 6,
      name: "Privacy Scanner",
      description: "Analyze your digital footprint and identify privacy risks.",
      link: "#",
      icon: <Search size={24} className="text-indigo-500" />,
      popular: true,
      detail: "Discover what information about you is publicly available online. Our privacy scanner searches across websites, data brokers, and public records to help you identify and remove unwanted personal information exposures."
    },
    {
      id: 7,
      name: "Password Generator",
      description: "Create strong, unique passwords for all your accounts.",
      link: "#",
      icon: <Key size={24} className="text-yellow-500" />,
      popular: true,
      detail: "Generate highly secure passwords with configurable parameters including length, character types, and pronounceability. Save generated passwords directly to your password manager or copy them securely to your clipboard."
    },
    {
      id: 8,
      name: "System Security Audit",
      description: "Comprehensive security check for your computer or mobile device.",
      link: "#",
      icon: <Gauge size={24} className="text-cyan-500" />,
      popular: false,
      detail: "Run a thorough security audit of your device to identify outdated software, security misconfigurations, and potential vulnerabilities. Get a detailed report with prioritized security recommendations tailored to your system."
    }
  ];

  // Get popular tools for featured section
  const popularTools = securityTools.filter(tool => tool.popular);

  return (
    <div className="max-w-5xl mx-auto">
      {/* Hero section */}
      <div className="text-center mb-16">
        <div className={`inline-flex p-3 rounded-full ${darkMode ? 'bg-blue-900 text-white' : 'bg-blue-100 text-blue-700'} mb-4`}>
          <Shield size={28} />
        </div>
        <h1 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-slate-800'} mb-4`}>
          {t('securityTools.title', 'Security Tools')}
        </h1>
        <p className={`text-xl ${darkMode ? 'text-blue-100' : 'text-slate-600'} max-w-2xl mx-auto`}>
          {t('securityTools.description', 'Free tools to help you analyze, secure, and monitor your digital security posture.')}
        </p>
      </div>

      {/* Featured Tools Section */}
      <div className="mb-16">
        <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-800'} mb-6`}>
          {t('securityTools.featuredTools', 'Featured Tools')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {popularTools.map((tool) => (
            <div key={tool.id} className="bg-white rounded-xl shadow-md p-6 border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <div className="p-2 bg-slate-100 rounded-full mr-4 flex-shrink-0">
                  {tool.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 text-lg">{tool.name}</h3>
                  <p className="text-slate-600">{tool.description}</p>
                </div>
              </div>
              <p className="text-slate-500 text-sm mb-4">{tool.detail}</p>
              <a 
                href={tool.link}
                className="text-blue-600 hover:text-blue-700 font-medium flex items-center mt-2"
              >
                {t('securityTools.accessTool', 'Access Tool')}
                <ExternalLink size={16} className="ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mb-16 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl shadow-lg p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">{t('securityTools.customScan', 'Need a Comprehensive Security Assessment?')}</h2>
        <p className="mb-6">
          {t('securityTools.customScanDescription', 'Our full-featured security scanner combines multiple tools to give you a complete picture of your security status and personalized recommendations.')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-6 py-3 bg-white text-blue-700 font-medium rounded-lg shadow-sm hover:bg-blue-50 transition-colors">
            {t('securityTools.startScan', 'Start Full Security Scan')}
          </button>
          <button className="px-6 py-3 bg-transparent border border-white text-white font-medium rounded-lg shadow-sm hover:bg-white hover:bg-opacity-10 transition-colors">
            {t('securityTools.learnMore', 'Learn More')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecurityToolsPage;