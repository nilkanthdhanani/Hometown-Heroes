import React from 'react'
import './footer.scss';
import { NavLink, useLocation } from 'react-router-dom';
import FooterLogo from '../../assets/images/svg/footerLogo';

export default function Footer() {
  // const location = useLocation();

  // const isSpecialPage = location.pathname === '/donate' || location.pathname === '/auss2024' || location.pathname === '/lwandle';

  return (
    <>
      <footer>
        <div className="footer-links">
          <NavLink to={"/impressum"}>IMPRESSUM</NavLink>
          <NavLink to={"/datenschutz"}>DATENSCHUTZ</NavLink>
        </div>
        <div className="footer-logo">
          <FooterLogo />
        </div>
      </footer>
    </>
  )
}
