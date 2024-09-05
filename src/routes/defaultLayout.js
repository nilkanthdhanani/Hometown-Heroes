import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../common/header';
import Footer from '../common/footer';
import { shouldShowFooter } from '../utils/pageConditions';
import { usePageStyles } from '../utils/pageEffects';
import { useScrollToTop } from '../utils/scrollToTop';

export default function DefaultLayout() {
  const location = useLocation();

  useScrollToTop(location.pathname);

  usePageStyles(location.pathname);

  return (
    <>
      <Header />
      <Outlet />
      {shouldShowFooter(location.pathname) && <Footer />}
    </>
  );
}
