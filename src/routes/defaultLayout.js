import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../commen/header';
import Footer from '../commen/footer';

export default function DefaultLayout() {
  const location = useLocation();

  const specialPages = ['/donate', '/auss2024', '/lwandle'];
  const homeAndImpressum = ['/', '/impressum'];

  const isSpecialPage = specialPages.includes(location.pathname);
  const isHomeOrImpressum = homeAndImpressum.includes(location.pathname);

  const backgroundColor = isSpecialPage ? '#1a1a1a' : '#f6f1e5';
  const color = isSpecialPage ? '#f6f1e5' : '#1b1b1b';

  const shouldShowFooter = location.pathname !== '/auss2024';

  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
    document.body.style.color = color;

    if (isHomeOrImpressum) {
      document.getElementById('root').classList.add('home-impressum-style');
    } else {
      document.getElementById('root').classList.remove('home-impressum-style');
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
