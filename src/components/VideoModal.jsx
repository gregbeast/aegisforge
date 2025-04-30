import React, { useEffect, useRef, useState } from 'react';

/**
 * Enhanced VideoModal component that displays orientation-specific videos
 * @param {Object} props - Component props
 * @param {boolean} props.isOpen - Whether the modal is open
 * @param {function} props.onClose - Function to call when the modal is closed
 * @param {string} props.landscapeVideoUrl - URL for 16:9 landscape video (desktop, landscape mobile)
 * @param {string} props.portraitVideoUrl - URL for 9:16 portrait video (portrait mobile)
 * @returns {JSX.Element} - The VideoModal component
 */
const VideoModal = ({ 
  isOpen, 
  onClose, 
  landscapeVideoUrl = "/videos/aegis-forge-demo-landscape.mp4",
  portraitVideoUrl = "/videos/aegis-forge-demo-portrait.mp4"
}) => {
  const videoRef = useRef(null);
  const [isPortrait, setIsPortrait] = useState(false);
  
  // Detect orientation on mount and when orientation changes
  useEffect(() => {
    const checkOrientation = () => {
      // Consider both window dimensions and matchMedia for more reliability
      const portrait = window.matchMedia("(orientation: portrait)").matches || 
                      (window.innerHeight > window.innerWidth);
      setIsPortrait(portrait);
    };
    
    // Check orientation immediately
    checkOrientation();
    
    // Set up listeners for orientation/resize changes
    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);
    
    // Clean up when component unmounts
    return () => {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
    };
  }, []);
  
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

  // Determine which video source to use
  const videoSource = isPortrait ? portraitVideoUrl : landscapeVideoUrl;
  
  // Set appropriate aspect ratio classes based on orientation
  const aspectRatioClass = isPortrait 
    ? "aspect-w-9 aspect-h-16" // Portrait video
    : "aspect-w-16 aspect-h-9"; // Landscape video

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900 bg-opacity-75" 
      aria-labelledby="modal-title" 
      role="dialog" 
      aria-modal="true"
      onClick={onClose}
    >
      {/* Modal content */}
      <div className="flex items-center justify-center min-h-screen p-4 sm:p-0">
        <div 
          className={`relative ${aspectRatioClass} bg-black rounded-lg overflow-hidden shadow-xl transform transition-all w-full sm:max-w-4xl mx-auto`}
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
          <video
            ref={videoRef}
            className="w-full h-full object-contain"
            controls
            playsInline
            poster={isPortrait ? "/api/placeholder/720/1280" : "/api/placeholder/1280/720"}
          >
            <source src={videoSource} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Orientation indicator for testing/debugging (can be removed in production) */}
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
            {isPortrait ? 'Portrait Mode' : 'Landscape Mode'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;