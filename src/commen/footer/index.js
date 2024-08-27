import React from 'react'
import './footer.scss';
import { NavLink } from 'react-router-dom';
import Powerd from '../../assets/images/svg/powered';
import FooterLogo from '../../assets/images/svg/footerLogo';
import DataScience from '../../assets/images/svg/dataScience';

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-links">
          <NavLink>IMPRESSUM</NavLink>
          <NavLink>DATENSCHUTZ</NavLink>
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
