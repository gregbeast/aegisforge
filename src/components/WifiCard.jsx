import React from 'react';
import { Wifi, AlertTriangle, CheckCircle, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const WifiCard = ({ wifi }) => {
  const { t } = useTranslation();
  const { encryption = 'Unknown', isPublic = false } = wifi || {};
  
  // Determine security level
  const getSecurityLevel = () => {
    if (isPublic) return 'low';
    if (!encryption || encryption === 'None' || encryption === 'WEP') return 'low';
    if (encryption === 'WPA') return 'medium';
    return 'high'; // WPA2 or WPA3
  };
  
  const securityLevel = getSecurityLevel();
  const colorMap = {
    low: {
      bg: 'bg-red-50',
      icon: 'bg-red-100 text-red-600',
      text: 'text-red-700',
      iconComponent: <AlertTriangle size={16} className="text-red-500 mr-2" />
    },
    medium: {
      bg: 'bg-yellow-50',
      icon: 'bg-yellow-100 text-yellow-600',
      text: 'text-yellow-700',
      iconComponent: <Shield size={16} className="text-yellow-500 mr-2" />
    },
    high: {
      bg: 'bg-green-50',
      icon: 'bg-green-100 text-green-600',
      text: 'text-green-700',
      iconComponent: <CheckCircle size={16} className="text-green-500 mr-2" />
    }
  };
  
  const colors = colorMap[securityLevel];
  
  return (
    <div className={`p-4 rounded-lg ${colors.bg} transition-all duration-300`}>
      <div className="flex items-center mb-3">
        <div className={`p-2 rounded-full mr-3 ${colors.icon}`}>
          <Wifi size={18} />
        </div>
        <h3 className={`font-medium ${colors.text}`}>
          {t('wifiCard.title')}
        </h3>
      </div>
      
      <div className="flex items-center">
        {colors.iconComponent}
        <p className="text-sm text-slate-700">
          {encryption} {t('wifiCard.encryption')}
          {isPublic 
            ? t('wifiCard.publicNetwork') 
            : t('wifiCard.privateNetwork')}
        </p>
      </div>
      
      {securityLevel === 'low' && (
        <div className="mt-3 text-xs bg-white p-3 rounded border border-red-100">
          <p className="font-medium text-red-700 mb-1">{t('wifiCard.securityConcerns')}:</p>
          <ul className="space-y-1 text-slate-700">
            {isPublic && (
              <li className="flex items-start">
                <Shield size={12} className="mr-1 mt-0.5 text-slate-500" />
                {t('wifiCard.concerns.publicWifiVulnerable')}
              </li>
            )}
            {(!encryption || encryption === 'None') && (
              <li className="flex items-start">
                <Shield size={12} className="mr-1 mt-0.5 text-slate-500" />
                {t('wifiCard.concerns.unencryptedWifi')}
              </li>
            )}
            {encryption === 'WEP' && (
              <li className="flex items-start">
                <Shield size={12} className="mr-1 mt-0.5 text-slate-500" />
                {t('wifiCard.concerns.wepCompromised')}
              </li>
            )}
            <li className="flex items-start">
              <Shield size={12} className="mr-1 mt-0.5 text-slate-500" />
              {t('wifiCard.concerns.useVpn')}
            </li>
          </ul>
        </div>
      )}
      
      {securityLevel === 'medium' && (
        <div className="mt-3 text-xs bg-white p-3 rounded border border-yellow-100">
          <p className="font-medium text-yellow-700 mb-1">{t('wifiCard.recommendations')}:</p>
          <ul className="space-y-1 text-slate-700">
            <li className="flex items-start">
              <Shield size={12} className="mr-1 mt-0.5 text-slate-500" />
              {t('wifiCard.recommendations.upgradeToWpa2')}
            </li>
            <li className="flex items-start">
              <Shield size={12} className="mr-1 mt-0.5 text-slate-500" />
              {t('wifiCard.recommendations.useStrongPassword')}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default WifiCard;