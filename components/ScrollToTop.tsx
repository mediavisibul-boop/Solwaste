import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Global ScrollToTop component that resets scroll position on route changes.
 * This ensures all pages load from the top, except when navigating to hash anchors.
 */
export const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Only scroll to top if there's no hash (anchor link)
    if (!hash) {
      // Immediately scroll to top
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto'
      });
    }
  }, [pathname, hash]);

  return null;
};
