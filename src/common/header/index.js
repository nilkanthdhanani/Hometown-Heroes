import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../../assets/images/svg/logo';
import './header.scss';
import MenuSvg from '../../assets/images/svg/menuSvg';
import Sidebar from './sidebar';

export default function Header() {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const isSpecialPage = location.pathname === '/donate' || location.pathname === '/auss2024' || location.pathname === '/lwandle';

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isSidebarOpen]);

  return (
    <>
      <header className={isSpecialPage ? 'header special-header' : 'header'}>
        <div className="containerH">
          <div className="header-div">
            <div className="header-div-logo">
              <NavLink to="/" aria-label="Homepage"><Logo /></NavLink>
            </div>
            <nav>
              <NavLink to="/auss2023">AUSSTELLUNG 2023</NavLink>
              <NavLink to="/auss2024">AUSSTELLUNG 2024</NavLink>
              <NavLink to="/donate">DONATE</NavLink>
              <NavLink to="/journey">FOLLOW THE JOURNEY</NavLink>
            </nav>
            <div className="header-menu" onClick={toggleSidebar}>
              <MenuSvg />
            </div>
          </div>
        </div>
      </header>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  );
}
