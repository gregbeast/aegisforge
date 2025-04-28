import React from 'react';
import { Shield, Lock, AlertCircle, Cpu, Smartphone, Server, Cloud } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';


const ConceptPage = ({ darkMode = false, navigateToScanner }) => {
  const { t } = useTranslation();
  
  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero section */}
      <div className="text-center mb-16">
        <div className={`inline-flex p-3 rounded-full ${darkMode ? 'bg-blue-900 text-white' : 'bg-blue-100 text-blue-700'} mb-4`}>
          <Shield size={28} />
        </div>
        <h1 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-slate-800'} mb-4`}>
          {t('conceptPage.title')}
        </h1>
        <p className={`text-xl ${darkMode ? 'text-blue-100' : 'text-slate-600'} max-w-2xl mx-auto`}>
          {t('conceptPage.subtitle')}
        </p>
      </div>

      {/* Core mission section */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">{t('conceptPage.mission.title')}</h2>
        <p className="text-slate-700 mb-6 leading-relaxed">
        <Trans i18nKey="conceptPage.mission.paragraph1" components={{ bold: <strong /> }} />
        </p>
{/*         <p className="text-slate-700 leading-relaxed">
          {t('conceptPage.mission.paragraph2')}
        </p> */}
      </div>

      {/* Key features boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-100">
          <div className="flex items-center mb-4">
            <div className="p-2 rounded-full bg-blue-100 text-blue-600 mr-4">
              <AlertCircle size={24} />
            </div>
            <h3 className="text-xl font-semibold text-slate-800">{t('conceptPage.features.breachDetection.title')}</h3>
          </div>
          <p className="text-slate-600">
          <Trans i18nKey="conceptPage.features.breachDetection.description" components={{ bold: <strong /> }} />
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-100">
          <div className="flex items-center mb-4">
            <div className="p-2 rounded-full bg-green-100 text-green-600 mr-4">
              <Lock size={24} />
            </div>
            <h3 className="text-xl font-semibold text-slate-800">{t('conceptPage.features.passwordSecurity.title')}</h3>
          </div>
          <p className="text-slate-600">
            {t('conceptPage.features.passwordSecurity.description')}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-100">
          <div className="flex items-center mb-4">
            <div className="p-2 rounded-full bg-purple-100 text-purple-600 mr-4">
              <Smartphone size={24} />
            </div>
            <h3 className="text-xl font-semibold text-slate-800">{t('conceptPage.features.deviceSecurity.title')}</h3>
          </div>
          <p className="text-slate-600">
            {t('conceptPage.features.deviceSecurity.description')}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-100">
          <div className="flex items-center mb-4">
            <div className="p-2 rounded-full bg-indigo-100 text-indigo-600 mr-4">
              <Server size={24} />
            </div>
            <h3 className="text-xl font-semibold text-slate-800">{t('conceptPage.features.networkProtection.title')}</h3>
          </div>
          <p className="text-slate-600">
            {t('conceptPage.features.networkProtection.description')}
          </p>
        </div>
      </div>

      {/* Security Methodology */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg p-8 mb-12 text-white">
        <h2 className="text-2xl font-bold mb-6">{t('conceptPage.methodology.title')}</h2>
        <div className="space-y-6">
          <div className="flex">
            <div className="mr-4 mt-1">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-blue-600 font-bold">1</div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{t('conceptPage.methodology.step1.title')}</h3>
              <p className="text-blue-100">
                {t('conceptPage.methodology.step1.description')}
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="mr-4 mt-1">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-blue-600 font-bold">2</div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{t('conceptPage.methodology.step2.title')}</h3>
              <p className="text-blue-100">
                {t('conceptPage.methodology.step2.description')}
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="mr-4 mt-1">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-blue-600 font-bold">3</div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{t('conceptPage.methodology.step3.title')}</h3>
              <p className="text-blue-100">
                {t('conceptPage.methodology.step3.description')}
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="mr-4 mt-1">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-blue-600 font-bold">4</div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{t('conceptPage.methodology.step4.title')}</h3>
              <p className="text-blue-100">
                {t('conceptPage.methodology.step4.description')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy commitment */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
        <div className="flex items-start md:items-center mb-6">
          <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
            <Cloud size={24} />
          </div>
          <h2 className="text-2xl font-bold text-slate-800">{t('conceptPage.privacy.title')}</h2>
        </div>
        <p className="text-slate-700 mb-4 leading-relaxed">
          {t('conceptPage.privacy.intro')}
        </p>
        <ul className="space-y-3 text-slate-700 mb-4">
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            <span>{t('conceptPage.privacy.points.local')}</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            <span>{t('conceptPage.privacy.points.noSelling')}</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            <span>{t('conceptPage.privacy.points.encryption')}</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            <span>{t('conceptPage.privacy.points.control')}</span>
          </li>
        </ul>
        <p className="text-slate-700 leading-relaxed">
          {t('conceptPage.privacy.conclusion')}
        </p>
      </div>

      {/* Get started CTA */}
      <div className="text-center mb-12">
        <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-800'} mb-4`}>
          {t('conceptPage.cta.title')}
        </h2>
        <p className={`${darkMode ? 'text-blue-100' : 'text-slate-600'} mb-6 max-w-2xl mx-auto`}>
          {t('conceptPage.cta.description')}
        </p>
        <button 
          onClick={navigateToScanner}
          className="inline-block py-3 px-8 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-colors cursor-pointer"
        >
          {t('conceptPage.cta.button')}
        </button>
      </div>
    </div>
  );
};

export default ConceptPage;