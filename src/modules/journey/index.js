import React from 'react';
import './journey.scss';
import Ausstellung2023 from '../ausstellung2023';
import { journey } from '../../assets/images/image';

export default function Journey() {
    return (
        <>
            <div className="journey">
                <div className="journey-banner">
                    <div className="containerH">
                        <div className="journey-banner-div">
                            <div className="journey-head">
                                <h1>FOLLOW THE JOURNEY</h1>
                            </div>
                            <div className="journey-banner-div">
                                <div className="journey-banner-div-intro">
                                    <h2>INTRO</h2>
                                    <p>“Welcome to this comprehensive document that encapsulates the essence and journey of HOMETOWN HEROES. Within this page, you will find a vivid portrayal of our mission, our experiences, and our unwavering commitment to driving positive change. Explore how HOMETOWN HEROES, with its roots in the townships of Cape Town, will blossom into a platform of compassion, artistry, and impactful collaborations.“</p>
                                </div>
                                <div className="journey-banner-img">
                                    <img src={journey} alt="journey" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Ausstellung2023 />
            </div>
        </>
    )
}
