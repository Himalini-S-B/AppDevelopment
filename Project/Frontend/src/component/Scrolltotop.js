import React, { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll the page to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div>
      {isVisible && (
        <IconButton
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '50px',
            right: '50px',
            backgroundColor: 'purple',
            color: 'white',
          }}
          aria-label="scroll to top"
        >
          <ArrowUpwardIcon />
        </IconButton>
      )}
    </div>
  );
};

export default ScrollToTop;
