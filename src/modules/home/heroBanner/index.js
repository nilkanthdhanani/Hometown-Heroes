import React from 'react';
import './heroBanner.scss';
import { heroBanner } from '../../../assets/images/image';

export default function HeroBanner() {
    return (
        <>
            <div className="hero-banner">
                <div className="container">
                    <div className="hero-box">
                        <h1>HOME TOWN HEROES</h1>
                        <p>A PHOTOGRAPHIC JOURNEY THROUGH THE TOWNSHIPS OF CAPE TOWN</p>
                        <div className="hero-box-image">
                            <img src={heroBanner} alt="heroBanner" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
