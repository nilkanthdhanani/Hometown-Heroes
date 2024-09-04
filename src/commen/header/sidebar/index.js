import React from 'react';
import './sidebar.scss';
import CloseSvg from '../../../assets/images/svg/closeSvg';
import { NavLink } from 'react-router-dom';
import PowerdSvg from '../../../assets/images/svg/powerdSvg';
import JesamSvgFooter from '../../../assets/images/svg/jesamSvgFooter';
import DataSvg from '../../../assets/images/svg/dataSvg';

export default function Sidebar({ isOpen, toggleSidebar }) {
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className="close-svg" onClick={toggleSidebar}>
                <CloseSvg />
            </div>
            <div className="sidebar-main">
                <div className="sidebar-content">
                    <div className="sidebar-line"></div>
                    <div className="sidebar-text-first">
                        <NavLink to="/auss2023" onClick={toggleSidebar}>AUSSTELLUNG <span>2023</span></NavLink>
                    </div>
                    <div className="sidebar-line"></div>
                    <div className="sidebar-text-first">
                        <NavLink to="/auss2024" onClick={toggleSidebar}>AUSSTELLUNG <span>2024</span></NavLink>
                    </div>
                    <div className="sidebar-line"></div>
                    <div className="sidebar-text-second">
                        <NavLink to="/donate" onClick={toggleSidebar}>DONATE</NavLink>
                    </div>
                    <div className="sidebar-line"></div>
                    <div className="sidebar-text-second">
                        <NavLink to="/journey" onClick={toggleSidebar}>FOLLOW THE JOURNEY</NavLink>
                    </div>
                </div>
                <div className="sidebar-footer">
                    <div className="footer-links">
                        <NavLink to={"/impressum"} onClick={toggleSidebar}>IMPRESSUM</NavLink>
                        <NavLink to={"/datenschutz"} onClick={toggleSidebar}>DATENSCHUTZ</NavLink>
                    </div>
                    <div className="footer-logo-respo">
                        <NavLink to={'/'} onClick={toggleSidebar}>
                            <PowerdSvg />
                            <JesamSvgFooter />
                            <DataSvg />
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
