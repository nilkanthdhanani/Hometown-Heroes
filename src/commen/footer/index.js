import React from 'react'
import './footer.scss';
import { NavLink, useLocation } from 'react-router-dom';
import FooterLogo from '../../assets/images/svg/footerLogo';
import PowerdSvg from '../../assets/images/svg/powerdSvg';
import JesamSvgFooter from '../../assets/images/svg/jesamSvgFooter';
import DataSvg from '../../assets/images/svg/dataSvg';

export default function Footer() {
  const location = useLocation();

  const isSpecialPage = location.pathname === '/donate' || location.pathname === '/auss2024' || location.pathname === '/lwandle';

  return (
    <>
      <footer className={isSpecialPage ? 'footer special-footer' : 'footer'}>
        <div className="footer-links">
          <NavLink to={"/impressum"}>IMPRESSUM</NavLink>
          <NavLink to={"/datenschutz"}>DATENSCHUTZ</NavLink>
        </div>
        <div className="footer-logo">
          <NavLink to={'/'}><FooterLogo /></NavLink>
        </div>
        <div className="footer-logo-respo">
          <NavLink to={'/'}>
            <PowerdSvg />
            <JesamSvgFooter />
            <DataSvg />
          </NavLink>
        </div>
      </footer>
    </>
  )
}
