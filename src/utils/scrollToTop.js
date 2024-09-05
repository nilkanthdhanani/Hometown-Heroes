import { useEffect } from 'react';

export const useScrollToTop = (pathname) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};
