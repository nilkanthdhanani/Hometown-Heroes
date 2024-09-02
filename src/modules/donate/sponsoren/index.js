import React from 'react';
import './sponsoren.scss';
import CanonSvg from '../../../assets/images/svg/canonSvg';
import Omrsvg from '../../../assets/images/svg/omrsvg';
import JesamSvg from '../../../assets/images/svg/jesamSvg';

export default function Sponsoren() {
    return (
        <>
            <div className="sponsoren">
                <h2>SPONSOREN & PARTNER</h2>
                <div className="sponsoren-logo">
                    <Omrsvg />
                    <CanonSvg />
                    <JesamSvg />
                </div>
            </div>
        </>
    )
}
