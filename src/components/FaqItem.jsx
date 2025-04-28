import React, { useState } from 'react';

/**
 * Interactive FAQ item component with fold/unfold functionality
 * @param {Object} props - Component props
 * @param {string} props.question - The FAQ question
 * @param {string} props.answer - The FAQ answer
 * @param {boolean} props.defaultOpen - Whether the item should be open by default
 * @returns {JSX.Element} - The FAQ item component
 */
const FaqItem = ({ question, answer, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="py-6 px-6 flex justify-between items-center w-full text-left focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:rounded-md"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        <span className="ml-6 flex-shrink-0">
          <svg 
            className={`h-5 w-5 text-blue-500 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 20 20" 
            fill="currentColor"
            aria-hidden="true"
          >
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </span>
      </button>
      {isOpen && (
        <div className="pb-6 px-6 animate-fade-in">
          <p className="text-base text-gray-500">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FaqItem;