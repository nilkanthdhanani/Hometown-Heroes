import React from 'react';
import './contact.scss';
import { NavLink } from 'react-router-dom';

export default function Contact() {
    return (
        <>
            <div className="contact">
                <div className="container12">
                    <div className="contact-div">
                        <h2>IN CASE YOU WANT TO SUPPORT OUR VISION</h2>
                        <p>CONTACT</p>
                        <NavLink>TOM VON BELOW</NavLink>
                        <NavLink>+49 177 2362335</NavLink>
                        <NavLink>info@tvbfilm.com</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}
