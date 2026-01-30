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
      // Immediately scroll to top - multiple approaches for reliability
      window.scrollTo(0, 0);
      
      // Also use setTimeout to ensure DOM is ready
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 0);
      
      // And another one slightly delayed to catch late renders
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 10);
      
      // Use requestAnimationFrame for good measure
      requestAnimationFrame(() => {
        window.scrollTo(0, 0);
      });
    }
  }, [pathname, hash]);

  return null;
};
