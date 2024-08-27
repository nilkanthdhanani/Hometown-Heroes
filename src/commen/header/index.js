import React from 'react';
import './header.scss';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/images/svg/logo';

export default function Header() {
  return (
    <>
      <header>
        <div className="containerH">
          <div className="header-div">
            <NavLink>
              <Logo />
            </NavLink>
            <div className="header-links">
              <NavLink to={"/auss2023"}>AUSSTELLUNG 2023</NavLink>
              <NavLink>AUSSTELLUNG 2024</NavLink>
              <NavLink>DONATE</NavLink>
              <NavLink>FOLLOW THE JOURNEY</NavLink>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
