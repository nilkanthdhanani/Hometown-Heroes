import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../../assets/images/svg/logo';
import './header.scss';

  export default function Header() {
    const location = useLocation();

    const isSpecialPage = location.pathname === '/donate' || location.pathname === '/auss2024' || location.pathname === '/lwandle';

  return (
    <>
      <header className={isSpecialPage ? 'header special-header' : 'header'}>
        <div className="containerH">
          <div className="header-div">
            <NavLink to="/">
              <Logo/>
            </NavLink>
            <div className="header-links">
              <NavLink to="/auss2023">AUSSTELLUNG 2023</NavLink>
              <NavLink to="/auss2024">AUSSTELLUNG 2024</NavLink>
              <NavLink to="/donate">DONATE</NavLink>
              <NavLink to="/journey">FOLLOW THE JOURNEY</NavLink>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
