import React from 'react';
import './sponsoren.scss';
import { canon, jesam, omr } from '../../../assets/images/image';

export default function Sponsoren() {
    return (
        <>
            <div className="sponsoren">
                <h2>SPONSOREN & PARTNER</h2>
                <div className="sponsoren-logo">
                    <img src={omr} alt="omr" />
                    <img src={canon} alt="canon" />
                    <img src={jesam} alt="jesam" />
                </div>
            </div>
        </>
    )
}
