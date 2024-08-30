import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../commen/header';
import Footer from '../commen/footer';

export default function DefaultLayout() {
  const font = new FontFace(
    'Big Shoulders Display',
    'url(https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@100..900&family=Big+Shoulders+Inline+Text:wght@100..900&display=swap)'
  );

  font.load().then(function (loadedFont) {
    document.fonts.add(loadedFont);

    document.body.style.fontFamily = '"Big Shoulders Display", sans-serif';
  }).catch(function (error) {
    console.error('Font failed to load:', error);
  });

  const location = useLocation();

  const specialPages = ['/donate', '/auss2024', '/lwandle'];

  const isSpecialPage = specialPages.includes(location.pathname);
  const backgroundColor = isSpecialPage ? '#1a1a1a' : '#f6f1e5';
  const color = isSpecialPage ? '#f6f1e5' : '#1b1b1b';

  const shouldShowFooter = location.pathname !== '/auss2024';

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
      <Header />
      <Outlet />
      {shouldShowFooter && <Footer />}
    </>
  );
}
