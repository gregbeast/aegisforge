import React from "react";
import { useTranslation } from "react-i18next";

// Map HIBP DataClasses to icons (add as many as you like)
const DATATYPE_ICONS = {
  "Email addresses": "📧",
  "Usernames": "👤",
  "Passwords": "🔑",
  "Dates of birth": "🎂",
  "IP addresses": "🌐",
  "Phone numbers": "📱",
  "Physical addresses": "🏠",
  "Credit card data": "💳",
  "Social media profiles": "📱",
  generic: "🔎",
};

const badgeColors = [
  'bg-red-100 text-red-700',
  'bg-yellow-100 text-yellow-700',
  'bg-blue-100 text-blue-700'
];

// Accepts a raw HIBP breach object
function BreachDetailItem({ breach, idx }) {
  const { t } = useTranslation();
  
  // Fallback if property missing, to prevent render bugs
  const name = breach.Title || breach.Name || t('breachList.unknown');
  const date = breach.BreachDate || t('breachList.unknownDate');
  const records = breach.PwnCount?.toLocaleString() || '???';
  const dataTypes = breach.DataClasses || [];
  const description = breach.Description || '';

  return (
    <div
      className="flex items-start gap-3 py-2 px-3 mb-2 rounded-lg border border-blue-50
                  transition duration-500 animate-fade-in bg-white shadow-sm"
      style={{ animationDelay: `${idx * 70}ms` }}
      key={breach.Name || idx}
      aria-label={t('breachList.breachAriaLabel', { name, date })}
    >
      <span className="text-2xl">{DATATYPE_ICONS.generic}</span>
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap gap-2 items-center">
          <span className="font-bold text-base text-red-700 truncate">{name}</span>
          <span className={`text-xs px-2 py-0.5 rounded ${badgeColors[idx % badgeColors.length]}`}>
            {date}
          </span>
          <span className="text-xs text-slate-500">
            {t('breachList.recordsCount', { count: records })}
          </span>
        </div>
        <div className="flex flex-wrap gap-2 mt-1">
          {dataTypes.map((type) => (
            <span
              key={type}
              className="text-xs bg-slate-100 text-slate-700 px-2 py-0.5 rounded inline-flex items-center"
            >
              {DATATYPE_ICONS[type] || DATATYPE_ICONS.generic} {t(`breachList.dataTypes.${type}`, { defaultValue: type })}
            </span>
          ))}
        </div>
        {description && (
          <p className="mt-1 text-xs text-slate-500 line-clamp-2" title={description}>
            {description.replace(/<\/?[^>]+(>|$)/g, "")}
          </p>
        )}
      </div>
    </div>
  );
}

export default function BreachList({ breaches }) {
  const { t } = useTranslation();
  
  if (!breaches?.length)
    return (
      <p
        className="text-green-700 font-medium bg-green-50 rounded px-3 py-2 text-center"
        aria-live="polite"
      >
        {t('breachList.noBreachesFound')}
      </p>
    );
  return (
    <div aria-live="polite">
      <h3 className="font-medium text-blue-700 mb-2">{t('breachList.emailFoundIn')}</h3>
      <div>
        {breaches.map((b, idx) => (
          <BreachDetailItem key={b.Name || idx} breach={b} idx={idx} />
        ))}
      </div>
    </div>
  );
}