import React, { useEffect, useMemo } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../common/header';
import Footer from '../common/footer';

export default function DefaultLayout() {
  const location = useLocation();

  const specialPages = useMemo(() => ['/donate', '/auss2024', '/lwandle'], []);
  const homeAndImpressum = useMemo(() => ['/', '/impressum'], []);

  const isSpecialPage = specialPages.includes(location.pathname);
  const isHomeOrImpressum = homeAndImpressum.includes(location.pathname);

  const backgroundColor = isSpecialPage ? '#1a1a1a' : '#f6f1e5';
  const color = isSpecialPage ? '#f6f1e5' : '#1b1b1b';

  const shouldShowFooter = location.pathname !== '/auss2024';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
    document.body.style.color = color;

    const rootElement = document.getElementById('root');
    if (isHomeOrImpressum) {
      rootElement.classList.add('footer-space');
    } else {
      rootElement.classList.remove('footer-space');
    }

    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
    };
  }, [backgroundColor, color, isHomeOrImpressum]);

  return (
    <>
      <Header />
      <Outlet />
      {shouldShowFooter && <Footer />}
    </>
  );
}
