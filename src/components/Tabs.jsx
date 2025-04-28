import React from 'react';

const Tabs = ({ tabs, activeTab, onChange }) => {
  return (
    <div className="flex border-b">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`flex-1 py-3 px-4 text-center font-medium transition-all
            ${
              activeTab === tab.id
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-slate-600 hover:text-blue-500'
            }`}
        >
          <div className="flex items-center justify-center">
            {tab.icon && <span className="mr-2">{tab.icon}</span>}
            <span>{tab.label}</span>
          </div>
        </button>
      ))}
    </div>
  );
};

export default Tabs;