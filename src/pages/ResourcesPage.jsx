import React, { useState } from 'react';
import { Book, FileText, Video, ChevronDown, ChevronUp, ExternalLink, Download, Shield } from 'lucide-react';

const ResourcesPage = ({ darkMode = false }) => {
  const [expandedGuide, setExpandedGuide] = useState(null);

  const toggleGuide = (id) => {
    if (expandedGuide === id) {
      setExpandedGuide(null);
    } else {
      setExpandedGuide(id);
    }
  };

  // Function to handle PDF downloads
  const handleDownload = (pdfName) => {
    // The path should point to where your PDFs are stored in the public folder
    const pdfPath = `/pdfs/${pdfName}.pdf`;
    
    // Create a link element
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = `${pdfName}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const securityGuides = [
    {
      id: 1,
      title: "Password Management Best Practices",
      description: "Learn how to create strong, unique passwords and manage them effectively.",
      icon: <Shield size={20} />,
      content: (
        <div className="space-y-4">
          <p>
            Strong passwords are your first line of defense against unauthorized access to your accounts. 
            Follow these guidelines to create and manage secure passwords:
          </p>
          <h4 className="font-semibold text-slate-800">Creating Strong Passwords</h4>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>Use at least 12 characters—the more characters, the stronger the password</li>
            <li>Include a mix of uppercase and lowercase letters, numbers, and special characters</li>
            <li>Avoid using easily guessable information (birthdays, names, common words)</li>
            <li>Consider using passphrases—combinations of random words with special characters</li>
          </ul>
          <h4 className="font-semibold text-slate-800">Password Management Tips</h4>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>Use a different password for each of your accounts</li>
            <li>Use a reputable password manager to securely store your credentials</li>
            <li>Enable two-factor authentication (2FA) wherever available</li>
            <li>Change passwords immediately if an account may have been compromised</li>
            <li>Consider periodic password changes for critical accounts (every 3-6 months)</li>
          </ul>
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-blue-700 font-medium">Pro Tip:</p>
            <p className="text-blue-600">
              A password manager can generate and store strong, unique passwords for all your accounts, 
              so you only need to remember one master password.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Protecting Your Privacy Online",
      description: "Tips for minimizing your digital footprint and safeguarding personal information.",
      icon: <Shield size={20} />,
      content: (
        <div className="space-y-4">
          <p>
            Your online activities create a digital footprint that can be tracked and analyzed. 
            Here's how to protect your privacy while using the internet:
          </p>
          <h4 className="font-semibold text-slate-800">Browser Privacy</h4>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>Use private browsing modes when necessary</li>
            <li>Install privacy-focused browser extensions to block trackers</li>
            <li>Regularly clear your browsing history and cookies</li>
            <li>Consider using a privacy-focused browser for sensitive activities</li>
          </ul>
          <h4 className="font-semibold text-slate-800">Social Media Privacy</h4>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>Review and adjust privacy settings on all social platforms</li>
            <li>Limit the personal information you share publicly</li>
            <li>Be cautious about accepting friend/connection requests from unknown individuals</li>
            <li>Disable location tagging when posting photos or updates</li>
          </ul>
          <h4 className="font-semibold text-slate-800">General Privacy Practices</h4>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>Use a VPN (Virtual Private Network) when connecting to public WiFi</li>
            <li>Create separate email addresses for different purposes (personal, shopping, etc.)</li>
            <li>Opt out of data collection when possible</li>
            <li>Regularly check and remove your data from people-search websites</li>
          </ul>
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-blue-700 font-medium">Pro Tip:</p>
            <p className="text-blue-600">
              Consider creating a schedule for privacy maintenance—monthly review of privacy settings, 
              quarterly opt-out requests, and annual digital footprint cleanups.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Securing Your Mobile Devices",
      description: "Essential steps to protect your smartphones and tablets from security threats.",
      icon: <Shield size={20} />,
      content: (
        <div className="space-y-4">
          <p>
            Mobile devices contain significant amounts of personal and sensitive information. 
            Follow these guidelines to ensure they remain secure:
          </p>
          <h4 className="font-semibold text-slate-800">Basic Security Measures</h4>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>Use a strong PIN, password, pattern, or biometric authentication</li>
            <li>Enable auto-lock after a short period of inactivity (1-5 minutes)</li>
            <li>Keep your operating system and apps updated with the latest versions</li>
            <li>Enable remote tracking, locking, and wiping capabilities</li>
          </ul>
          <h4 className="font-semibold text-slate-800">App Security</h4>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>Download apps only from official app stores (App Store, Google Play)</li>
            <li>Review app permissions before installing and limit unnecessary access</li>
            <li>Regularly audit installed apps and remove ones you no longer use</li>
            <li>Be cautious of apps requesting excessive permissions</li>
          </ul>
          <h4 className="font-semibold text-slate-800">Data Protection</h4>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>Enable device encryption if available</li>
            <li>Regularly back up your device data to a secure location</li>
            <li>Use secure, private messaging apps for sensitive communications</li>
            <li>Be cautious when connecting to public WiFi networks</li>
          </ul>
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-blue-700 font-medium">Pro Tip:</p>
            <p className="text-blue-600">
              Consider using a "guest mode" or separate user profile when letting others use your device to 
              protect your personal information and apps.
            </p>
          </div>
        </div>
      )
    }
  ];

  const educationalResources = [
    { 
      title: "The Complete Guide to Personal Cybersecurity",
      type: "ebook",
      icon: <FileText size={16} className="text-green-600" />,
      link: "#"
    },
    { 
      title: "Recognizing and Avoiding Phishing Attacks",
      type: "video",
      icon: <Video size={16} className="text-red-600" />,
      link: "#"
    },
    { 
      title: "Data Breach Response: What to Do When Your Information is Exposed",
      type: "article",
      icon: <FileText size={16} className="text-blue-600" />,
      link: "#"
    },
    { 
      title: "Digital Security for Families: Protecting Children Online",
      type: "guide",
      icon: <Book size={16} className="text-purple-600" />,
      link: "#"
    },
    { 
      title: "Secure Your Home Network in 5 Steps",
      type: "video",
      icon: <Video size={16} className="text-red-600" />,
      link: "#"
    },
    { 
      title: "Two-Factor Authentication: A Comprehensive Guide",
      type: "article",
      icon: <FileText size={16} className="text-blue-600" />,
      link: "#"
    }
  ];

  const securityTools = [
    {
      name: "Password Strength Checker",
      description: "Test how strong your passwords are against common cracking techniques.",
      link: "#"
    },
    {
      name: "Secure File Deletion Tool",
      description: "Permanently erase sensitive files to prevent recovery.",
      link: "#"
    },
    {
      name: "Home Network Scanner",
      description: "Identify devices connected to your network and detect vulnerabilities.",
      link: "#"
    },
    {
      name: "Encryption Assistant",
      description: "Easy-to-use tool for encrypting sensitive files and communications.",
      link: "#"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero section */}
      <div className="text-center mb-16">
        <div className={`inline-flex p-3 rounded-full ${darkMode ? 'bg-blue-900 text-white' : 'bg-blue-100 text-blue-700'} mb-4`}>
          <Book size={28} />
        </div>
        <h1 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-slate-800'} mb-4`}>
          Security Resources
        </h1>
        <p className={`text-xl ${darkMode ? 'text-blue-100' : 'text-slate-600'} max-w-2xl mx-auto`}>
          Expert guides, tools, and educational materials to help you strengthen your digital security.
        </p>
      </div>

      {/* Interactive Security Guides Section */}
      <div className="mb-16">
        <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-800'} mb-6`}>
          Interactive Security Guides
        </h2>
        <div className="space-y-4">
          {securityGuides.map((guide) => (
            <div key={guide.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-100">
              <button 
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors"
                onClick={() => toggleGuide(guide.id)}
              >
                <div className="flex items-center">
                  <div className="p-2 rounded-full bg-blue-100 text-blue-600 mr-4">
                    {guide.icon}
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-slate-800">{guide.title}</h3>
                    <p className="text-sm text-slate-600">{guide.description}</p>
                  </div>
                </div>
                <div>
                  {expandedGuide === guide.id ? (
                    <ChevronUp size={20} className="text-slate-400" />
                  ) : (
                    <ChevronDown size={20} className="text-slate-400" />
                  )}
                </div>
              </button>
              {expandedGuide === guide.id && (
                <div className="px-6 py-4 border-t border-slate-100 bg-slate-50">
                  {guide.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Educational Materials Section */}
      <div className="mb-16">
        <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-800'} mb-6`}>
          Educational Materials
        </h2>
        <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {educationalResources.map((resource, index) => (
              <a 
                key={index} 
                href={resource.link}
                className="flex items-start p-4 rounded-lg hover:bg-slate-50 transition-colors group"
              >
                <div className="p-2 bg-slate-100 rounded-full mr-3 group-hover:bg-slate-200 transition-colors">
                  {resource.icon}
                </div>
                <div>
                  <h3 className="font-medium text-slate-800 group-hover:text-blue-600 transition-colors flex items-center">
                    {resource.title}
                    <ExternalLink size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <span className="text-xs uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                    {resource.type}
                  </span>
                </div>
              </a>
            ))}
          </div>
          <div className="text-center mt-6">
            <button className="px-4 py-2 text-blue-600 font-medium hover:text-blue-700 flex items-center justify-center mx-auto">
              View All Resources <ChevronDown size={16} className="ml-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Security Tools Section */}
      <div className="mb-16">
        <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-800'} mb-6`}>
          Security Tools
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {securityTools.map((tool, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-slate-100 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-slate-800 mb-2">{tool.name}</h3>
              <p className="text-slate-600 text-sm mb-4">{tool.description}</p>
              <a 
                href={tool.link}
                className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center"
              >
                Access Tool
                <ExternalLink size={14} className="ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Downloadable Resources */}
      <div className="mb-16 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl shadow-lg p-8 text-white">
        <div className="flex items-center mb-6">
          <Download size={28} className="mr-3" />
          <h2 className="text-2xl font-bold">Downloadable Security Checklists</h2>
        </div>
        <p className="mb-6">
          Get our comprehensive security checklists to help protect your digital life. Perfect for printing or 
          saving for quick reference.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button 
            onClick={() => handleDownload('personal-security-checklist')}
            className="flex items-center justify-center p-4 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all"
          >
            <Download size={16} className="mr-2" />
            <span className="font-medium">Personal Security Checklist</span>
          </button>
          <button
            onClick={() => handleDownload('family-safety-guide')}
            className="flex items-center justify-center p-4 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all"
          >
            <Download size={16} className="mr-2" />
            <span className="font-medium">Family Safety Guide</span>
          </button>
          <button
            onClick={() => handleDownload('travel-security-checklist')}
            className="flex items-center justify-center p-4 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all"
          >
            <Download size={16} className="mr-2" />
            <span className="font-medium">Travel Security Checklist</span>
          </button>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Stay Updated on Security Threats</h2>
        <p className="text-slate-600 mb-6">
          Subscribe to our security newsletter to receive alerts about emerging threats, new security 
          guides, and tips to keep your digital life secure.
        </p>
        <form className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              required
            />
            <button 
              type="submit" 
              className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-sm hover:bg-blue-700 transition-colors"
            >
              Subscribe
            </button>
          </div>
          <p className="text-xs text-slate-500">
            We respect your privacy. You can unsubscribe at any time. See our 
            <a href="#" className="text-blue-600 hover:underline"> Privacy Policy</a> for details.
          </p>
        </form>
      </div>
    </div>
  );
};

export default ResourcesPage;