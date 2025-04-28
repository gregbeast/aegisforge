import React, { createContext, useContext, useState } from 'react';

// Create context
const VideoContext = createContext();

/**
 * VideoContextProvider component that provides video modal state to the application
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Child components
 * @returns {JSX.Element} - The VideoContextProvider component
 */
export const VideoContextProvider = ({ children }) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const openVideoModal = () => {
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  return (
    <VideoContext.Provider value={{ isVideoModalOpen, openVideoModal, closeVideoModal }}>
      {children}
    </VideoContext.Provider>
  );
};

// Custom hook to use the video context
export const useVideoContext = () => useContext(VideoContext);