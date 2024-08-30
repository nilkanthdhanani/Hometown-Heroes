import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../commen/header';
import Footer from '../commen/footer';
import Loader from '../commen/loader';

export default function DefaultLayout() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  const specialPages = ['/donate', '/auss2024', '/lwandle'];

  const isSpecialPage = specialPages.includes(location.pathname);
  const backgroundColor = isSpecialPage ? '#1a1a1a' : '#f6f1e5';
  const color = isSpecialPage ? '#f6f1e5' : '#1b1b1b';

  const shouldShowFooter = location.pathname !== '/auss2024';

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000); // Simulate loading time

    return () => clearTimeout(timer);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
    document.body.style.color = color;

    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
    };
  }, [backgroundColor, color]);

  return (
    <>
      {loading && <Loader />}
      <Header />
      {!loading && <Outlet />}
      {!loading && shouldShowFooter && <Footer />}
    </>
  );
}
