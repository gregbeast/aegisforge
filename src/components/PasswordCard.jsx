import React from 'react';
import { Lock, AlertTriangle, CheckCircle, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';

/**
 * PasswordCard component displays the security status of passwords
 * 
 * @param {Object} props
 * @param {Object} props.password - Password data object
 * @param {boolean} props.password.compromised - Whether the password is compromised
 * @param {number} props.password.count - Number of breaches the password was found in
 * @returns {JSX.Element}
 */
const PasswordCard = ({ password }) => {
  const { t } = useTranslation();
  
  // Use default values if password data is missing
  const isCompromised = password?.compromised ?? false;
  const count = password?.count ?? 0;
  
  return (
    <div className={`p-4 rounded-lg ${isCompromised ? 'bg-red-50' : 'bg-green-50'} transition-all duration-300`}>
      <div className="flex items-center mb-3">
        <div className={`p-2 rounded-full mr-3 ${isCompromised ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
          <Lock size={18} />
        </div>
        <h3 className={`font-medium ${isCompromised ? 'text-red-700' : 'text-green-700'}`}>
          {t('passwordCard.title')}
        </h3>
      </div>
      
      <div className="flex items-center">
        {isCompromised ? (
          <>
            <AlertTriangle size={16} className="text-red-500 mr-2 flex-shrink-0" />
            <p className="text-sm text-slate-700">
              {count === 1 
                ? t('passwordCard.foundInOneBreachMessage')
                : t('passwordCard.foundInMultipleBreachesMessage', { count: count.toLocaleString() })}
            </p>
          </>
        ) : (
          <>
            <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
            <p className="text-sm text-slate-700">
              {t('passwordCard.notFoundMessage')}
            </p>
          </>
        )}
      </div>
      
      {isCompromised && (
        <div className="mt-3 text-xs bg-white p-3 rounded border border-red-100">
          <p className="font-medium text-red-700 mb-1">{t('passwordCard.recommendedActionsTitle')}:</p>
          <ul className="space-y-1 text-slate-700">
            <li className="flex items-start">
              <Shield size={12} className="mr-1 mt-0.5 text-slate-500" />
              {t('passwordCard.actions.changePassword')}
            </li>
            <li className="flex items-start">
              <Shield size={12} className="mr-1 mt-0.5 text-slate-500" />
              {t('passwordCard.actions.useUniquePassword')}
            </li>
            <li className="flex items-start">
              <Shield size={12} className="mr-1 mt-0.5 text-slate-500" />
              {t('passwordCard.actions.enable2FA')}
            </li>
            <li className="flex items-start">
              <Shield size={12} className="mr-1 mt-0.5 text-slate-500" />
              {t('passwordCard.actions.usePasswordManager')}
            </li>
          </ul>
        </div>
      )}
      
      {!isCompromised && (
        <div className="mt-3 text-xs bg-white p-3 rounded border border-green-100">
          <p className="font-medium text-green-700 mb-1">{t('passwordCard.keepUpGoodWorkTitle')}:</p>
          <ul className="space-y-1 text-slate-700">
            <li className="flex items-start">
              <Shield size={12} className="mr-1 mt-0.5 text-slate-500" />
              {t('passwordCard.goodPractices.continueUniquePasswords')}
            </li>
            <li className="flex items-start">
              <Shield size={12} className="mr-1 mt-0.5 text-slate-500" />
              {t('passwordCard.goodPractices.regularlyUpdate')}
            </li>
            <li className="flex items-start">
              <Shield size={12} className="mr-1 mt-0.5 text-slate-500" />
              {t('passwordCard.goodPractices.usePasswordManager')}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

// Default props if none are provided
PasswordCard.defaultProps = {
  password: {
    compromised: false,
    count: 0
  }
};

export default PasswordCard;