import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../commen/header';
import Footer from '../commen/footer';

export default function DefaultLayout() {
  const location = useLocation();

  useEffect(() => {
    const isSpecialPage = location.pathname === '/donate' || location.pathname === '/auss2024'  || location.pathname === '/lwandle';

    if (isSpecialPage) {
      document.body.classList.add('special-bg');
    } else {
      document.body.classList.remove('special-bg');
    }

    return () => {
      document.body.classList.remove('special-bg');
    };
  }, [location.pathname]);

  const shouldShowFooter = location.pathname !== '/auss2024';

  return (
    <>
      <Header />
      <Outlet />
      {shouldShowFooter && <Footer />}
    </>
  );
}
