import React from 'react';
import { Smartphone, ShieldAlert, ShieldCheck, Lock, Unlock, AlertCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const DeviceCard = ({ device }) => {
  const { t } = useTranslation();
  const { os = t('deviceCard.unknownOs'), patches = [], rootStatus = false, permissions = [] } = device || {};

  // Check if device has recent security patches (simplified for demo)
  const hasRecentPatches = patches && patches.length > 0;
  
  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-4 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="flex items-center">
          <Smartphone className="text-white mr-3" size={20} />
          <h3 className="font-semibold text-white">{t('deviceCard.title')}</h3>
        </div>
      </div>
      
      <div className="p-4">
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm font-medium text-slate-700">{t('deviceCard.operatingSystem')}</p>
            <span className="text-sm text-purple-700 bg-purple-50 px-2 py-0.5 rounded">
              {os}
            </span>
          </div>
          
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm font-medium text-slate-700">{t('deviceCard.rootStatus')}</p>
            <span className={`flex items-center text-sm ${rootStatus ? 'text-red-700 bg-red-50' : 'text-green-700 bg-green-50'} px-2 py-0.5 rounded`}>
              {rootStatus ? (
                <>
                  <Unlock size={14} className="mr-1" />
                  {t('deviceCard.rootedJailbroken')}
                </>
              ) : (
                <>
                  <Lock size={14} className="mr-1" />
                  {t('deviceCard.secure')}
                </>
              )}
            </span>
          </div>
          
          <div className="flex justify-between items-center">
            <p className="text-sm font-medium text-slate-700">{t('deviceCard.securityPatches')}</p>
            <span className={`flex items-center text-sm ${hasRecentPatches ? 'text-green-700 bg-green-50' : 'text-yellow-700 bg-yellow-50'} px-2 py-0.5 rounded`}>
              {hasRecentPatches ? (
                <>
                  <ShieldCheck size={14} className="mr-1" />
                  {t('deviceCard.upToDate')}
                </>
              ) : (
                <>
                  <ShieldAlert size={14} className="mr-1" />
                  {t('deviceCard.updatesNeeded')}
                </>
              )}
            </span>
          </div>
        </div>
        
        {patches && patches.length > 0 && (
          <div className="mb-4">
            <p className="text-sm font-medium text-slate-700 mb-2">{t('deviceCard.latestPatches')}</p>
            <div className="flex flex-wrap gap-2">
              {patches.map((patch, idx) => (
                <span key={idx} className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded">
                  {patch}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {permissions && permissions.length > 0 && (
          <div>
            <div className="flex items-center mb-2">
              <p className="text-sm font-medium text-slate-700">{t('deviceCard.appPermissions')}</p>
              {permissions.length > 5 && (
                <span className="ml-2 flex items-center text-xs text-yellow-700">
                  <AlertCircle size={12} className="mr-1" />
                  {t('deviceCard.highNumberOfPermissions')}
                </span>
              )}
            </div>
            
            <div className="flex flex-wrap gap-2">
              {permissions.map((permission, idx) => (
                <span key={idx} className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded">
                  {t(`deviceCard.permissions.${permission}`, { defaultValue: permission })}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {rootStatus && (
          <div className="mt-4 p-3 bg-red-50 rounded border border-red-100 text-sm text-red-700">
            <p className="font-medium mb-1">{t('deviceCard.securityWarning')}:</p>
            <p>
              {t('deviceCard.rootWarningMessage')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeviceCard;