import { useEffect } from 'react';
import { isHomeOrImpressum, getStylesForPage } from './pageConditions';

export const usePageStyles = (pathname) => {
  useEffect(() => {
    const { backgroundColor, color } = getStylesForPage(pathname);

    document.body.style.backgroundColor = backgroundColor;
    document.body.style.color = color;

    const rootElement = document.getElementById('root');
    if (isHomeOrImpressum(pathname)) {
      rootElement.classList.add('footer-space');
    } else {
      rootElement.classList.remove('footer-space');
    }

    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
    };
  }, [pathname]);
};
