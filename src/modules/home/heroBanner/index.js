import React from 'react';
import './heroBanner.scss';
import { heroBanner } from '../../../assets/images/image';

export default function HeroBanner() {
    return (
        <section className="hero-banner">
            <div className="container">
                <div className="hero-box">
                    <div className="hero-box-head">
                        <h1>HOME TOWN HEROES</h1>
                    </div>
                    <div className="hero-box-pera">
                        <p>A PHOTOGRAPHIC JOURNEY THROUGH THE TOWNSHIPS OF CAPE TOWN</p>
                    </div>
                    <div className="hero-box-image">
                        <img src={heroBanner} alt="heroBanner" />
                    </div>
                </div>
            </div>
        </section>
    )
}
