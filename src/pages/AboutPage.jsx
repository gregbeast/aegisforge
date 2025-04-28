import React, { useState } from 'react';
import { Users, Award, Globe, Shield, MessageCircle, Mail, Check, AlertCircle, Loader } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

const AboutPage = ({ darkMode = false }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    isError: false,
    message: ''
  });
  
  const teamMembers = [
    {
      name: t('aboutPage.team.members.greg.name'),
      role: t('aboutPage.team.members.greg.role'),
      bio: t('aboutPage.team.members.greg.bio'),
      image: "/photos/400/GR.png"
    },
    {
      name: t('aboutPage.team.members.marissa.name'),
      role: t('aboutPage.team.members.marissa.role'),
      bio: t('aboutPage.team.members.marissa.bio'),
      image: "/photos/400/MD.png"
    },
    {
      name: t('aboutPage.team.members.marcus.name'),
      role: t('aboutPage.team.members.marcus.role'),
      bio: t('aboutPage.team.members.marcus.bio'),
      image: "/photos/400/MW.png"
    },
    {
      name: t('aboutPage.team.members.emma.name'),
      role: t('aboutPage.team.members.emma.role'),
      bio: t('aboutPage.team.members.emma.bio'),
      image: "/photos/400/ER.png"
    }
  ];

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Set form to submitting state
    setFormStatus({
      isSubmitting: true,
      isSubmitted: false,
      isError: false,
      message: ''
    });
    
    try {
      // Send the form data to our API endpoint
      const response = await axios.post('/api/contact', formData);
      
      // Handle successful submission
      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        isError: false,
        message: response.data.message || 'Your message has been sent successfully!'
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus(prev => ({
          ...prev,
          isSubmitted: false,
          message: ''
        }));
      }, 5000);
      
    } catch (error) {
      // Handle error
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        message: error.response?.data?.message || 'Failed to send message. Please try again later.'
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero section */}
      <div className="text-center mb-16">
        <div className={`inline-flex p-3 rounded-full ${darkMode ? 'bg-blue-900 text-white' : 'bg-blue-100 text-blue-700'} mb-4`}>
          <Shield size={28} />
        </div>
        <h1 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-slate-800'} mb-4`}>
          {t('aboutPage.title')}
        </h1>
        <p className={`text-xl ${darkMode ? 'text-blue-100' : 'text-slate-600'} max-w-2xl mx-auto`}>
          {t('aboutPage.subtitle')}
        </p>
      </div>

      {/* Our Story Section */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">{t('aboutPage.story.title')}</h2>
        <div className="prose max-w-none text-slate-700">
          <p>
            {t('aboutPage.story.paragraph1')}
          </p>
          <p>
            {t('aboutPage.story.paragraph2')}
          </p>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-100">
          <div className="flex items-center mb-4">
            <div className="p-2 rounded-full bg-blue-100 text-blue-600 mr-4">
              <Shield size={24} />
            </div>
            <h3 className="text-xl font-semibold text-slate-800">{t('aboutPage.values.protection.title')}</h3>
          </div>
          <p className="text-slate-600">
            {t('aboutPage.values.protection.description')}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-100">
          <div className="flex items-center mb-4">
            <div className="p-2 rounded-full bg-green-100 text-green-600 mr-4">
              <Award size={24} />
            </div>
            <h3 className="text-xl font-semibold text-slate-800">{t('aboutPage.values.excellence.title')}</h3>
          </div>
          <p className="text-slate-600">
            {t('aboutPage.values.excellence.description')}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-100">
          <div className="flex items-center mb-4">
            <div className="p-2 rounded-full bg-purple-100 text-purple-600 mr-4">
              <Users size={24} />
            </div>
            <h3 className="text-xl font-semibold text-slate-800">{t('aboutPage.values.userCentered.title')}</h3>
          </div>
          <p className="text-slate-600">
            {t('aboutPage.values.userCentered.description')}
          </p>
        </div>
      </div>

      {/* Our Impact Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg p-8 mb-12 text-white">
        <h2 className="text-2xl font-bold mb-8">{t('aboutPage.impact.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">{t('aboutPage.impact.users.count')}</div>
            <p className="text-blue-100">{t('aboutPage.impact.users.label')}</p>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">{t('aboutPage.impact.vulnerabilities.count')}</div>
            <p className="text-blue-100">{t('aboutPage.impact.vulnerabilities.label')}</p>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">{t('aboutPage.impact.satisfaction.count')}</div>
            <p className="text-blue-100">{t('aboutPage.impact.satisfaction.label')}</p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-800'} mb-6`}>
          {t('aboutPage.team.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 bg-slate-100">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="object-cover w-full h-full" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800">{member.name}</h3>
                <p className="text-blue-600 mb-3">{member.role}</p>
                <p className="text-slate-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Global Presence */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
        <div className="flex items-start md:items-center mb-6">
          <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
            <Globe size={24} />
          </div>
          <h2 className="text-2xl font-bold text-slate-800">{t('aboutPage.global.title')}</h2>
        </div>
        <p className="text-slate-700 mb-6">
          {t('aboutPage.global.description')}
        </p>
        <div className="aspect-w-16 aspect-h-9 bg-slate-100 rounded-lg overflow-hidden">
          <img 
            src="/images/MapChartV2.png" 
            alt={t('aboutPage.global.mapAlt')} 
            className="object-cover w-full h-full" 
          />
        </div>
      </div>

      {/* Testimonials */}
      <div className="mb-16">
        <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-800'} mb-6`}>
          {t('aboutPage.testimonials.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-100">
            <div className="flex space-x-0.5 mb-3 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <p className="text-slate-700 mb-4">
              {t('aboutPage.testimonials.first.text')}
            </p>
            <p className="font-medium text-slate-800">{t('aboutPage.testimonials.first.author')}</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-100">
            <div className="flex space-x-0.5 mb-3 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <p className="text-slate-700 mb-4">
              {t('aboutPage.testimonials.second.text')}
            </p>
            <p className="font-medium text-slate-800">{t('aboutPage.testimonials.second.author')}</p>
          </div>
        </div>
      </div>

      {/* Contact Section - Updated with functional form */}
      <div id="contact-section" className="bg-white rounded-xl shadow-lg p-8 mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">{t('aboutPage.contact.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-slate-800 mb-4">{t('aboutPage.contact.info.title')}</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-medium text-slate-800">{t('aboutPage.contact.info.email.title')}</p>
                  <a href="mailto:contact@aegisforge.com" className="text-blue-600 hover:underline">
                    {t('aboutPage.contact.info.email.address')}
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <MessageCircle className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-medium text-slate-800">{t('aboutPage.contact.info.chat.title')}</p>
                  <p className="text-slate-600">{t('aboutPage.contact.info.chat.availability')}</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800 mb-4">{t('aboutPage.contact.form.title')}</h3>
            
            {/* Form status messages */}
            {formStatus.isSubmitted && (
              <div className="mb-4 p-3 bg-green-50 border border-green-100 rounded-lg flex items-center text-green-700">
                <Check className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>{formStatus.message}</span>
              </div>
            )}
            
            {formStatus.isError && (
              <div className="mb-4 p-3 bg-red-50 border border-red-100 rounded-lg flex items-center text-red-700">
                <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>{formStatus.message}</span>
              </div>
            )}
            
            {/* Contact form */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                  {t('aboutPage.contact.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required
                  disabled={formStatus.isSubmitting}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                  {t('aboutPage.contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required
                  disabled={formStatus.isSubmitting}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                  {t('aboutPage.contact.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required
                  disabled={formStatus.isSubmitting}
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-sm hover:bg-blue-700 transition-colors flex items-center justify-center"
                disabled={formStatus.isSubmitting}
              >
                {formStatus.isSubmitting ? (
                  <>
                    <Loader className="animate-spin mr-2 h-4 w-4" />
                    {t('common.loading')}
                  </>
                ) : (
                  t('aboutPage.contact.form.submit')
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Join Our Team */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg p-8 mb-12 text-white">
        <h2 className="text-2xl font-bold mb-4">{t('aboutPage.careers.title')}</h2>
        <p className="text-blue-100 mb-6">
          {t('aboutPage.careers.description')}
        </p>
        <a 
          href="#careers" 
          className="inline-block px-6 py-3 bg-white text-blue-600 font-medium rounded-lg shadow-sm hover:bg-blue-50 transition-colors"
        >
          {t('aboutPage.careers.button')}
        </a>
      </div>
    </div>
  );
};

export default AboutPage;