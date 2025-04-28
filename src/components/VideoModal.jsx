import React, { useEffect, useRef } from 'react';

/**
 * VideoModal component that displays a video in a modal popup
 * @param {Object} props - Component props
 * @param {boolean} props.isOpen - Whether the modal is open
 * @param {function} props.onClose - Function to call when the modal is closed
 * @returns {JSX.Element} - The VideoModal component
 */
const VideoModal = ({ isOpen, onClose }) => {
  const videoRef = useRef(null);
  
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Play video when modal opens
      if (videoRef.current) {
        videoRef.current.play().catch(error => {
          console.log('Autoplay prevented:', error);
        });
      }
    } else {
      document.body.style.overflow = 'unset';
      // Pause video when modal closes
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }
    
    // Clean up when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle closing modal with Escape key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEsc);
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      {/* Background overlay */}
      <div 
        className="fixed inset-0 bg-slate-900 bg-opacity-75 transition-opacity" 
        aria-hidden="true"
        onClick={onClose}
      ></div>
      
      {/* Modal content */}
      <div className="flex items-center justify-center min-h-screen p-4 sm:p-0">
        <div 
          className="relative bg-black rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-4xl sm:w-full"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            type="button"
            className="absolute top-0 right-0 z-10 m-4 bg-black bg-opacity-70 rounded-full p-2 inline-flex items-center justify-center text-white hover:bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={onClose}
          >
            <span className="sr-only">Close</span>
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* Video */}
          <div className="aspect-w-16 aspect-h-9">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              controls
              playsInline
              poster="/api/placeholder/1280/720"
            >
              <source src="/videos/aegis-forge-demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;