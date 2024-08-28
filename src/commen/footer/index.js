import React from 'react'
import './footer.scss';
import { NavLink, useLocation } from 'react-router-dom';
import Powerd from '../../assets/images/svg/powered';
import FooterLogo from '../../assets/images/svg/footerLogo';
import DataScience from '../../assets/images/svg/dataScience';

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
          <Powerd />
          <FooterLogo />
          <DataScience />
        </div>
      </footer>
    </>
  )
}
