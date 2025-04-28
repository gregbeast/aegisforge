import React from 'react';
import { CheckCircle, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const RecommendationsCard = ({ recommendations = [] }) => {
  const { t } = useTranslation();
  
  // No recommendations provided
  if (!recommendations || recommendations.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-blue-100 overflow-hidden">
      <div className="bg-blue-50 px-4 py-3 border-b border-blue-100">
        <h3 className="font-medium text-blue-800">{t('recommendations.title')}</h3>
      </div>
      
      <div className="divide-y divide-slate-100">
        {recommendations.map((recommendation, idx) => (
          <div 
            key={idx} 
            className="p-3 flex items-start hover:bg-blue-50 transition-colors"
          >
            <CheckCircle size={18} className="text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-slate-700">
                {t(`recommendations.items.${recommendation}`, {
                  // Fallback if the exact key isn't found
                  defaultValue: t(`recommendations.items.${recommendation.toLowerCase().replace(/\s+/g, '_')}`, {
                    // Final fallback to the recommendation itself (which might be a key)
                    defaultValue: recommendation
                  })
                })}
              </p>
            </div>
            <ChevronRight size={16} className="text-slate-400" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationsCard;