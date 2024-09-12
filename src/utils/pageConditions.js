export const specialPages = ['/donate', '/auss2024', '/lwandle'];
export const homeAndImpressum = ['/', '/impressum'];

export const isSpecialPage = (pathname) => specialPages.includes(pathname);
export const isHomeOrImpressum = (pathname) => homeAndImpressum.includes(pathname);

export const getStylesForPage = (pathname) => {
  if (isSpecialPage(pathname)) {
    return { backgroundColor: '#1a1a1a', color: '#fff' };
  }
  return { backgroundColor: '#fff', color: '#1b1b1b' };
};

export const shouldShowFooter = (pathname) => pathname !== '/auss2024';
