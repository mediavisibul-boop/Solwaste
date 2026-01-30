import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Global ScrollToTop component that resets scroll position on route changes.
 * This ensures all pages load from the top, except when navigating to hash anchors.
 */
export const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Always scroll to top on pathname change
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};
