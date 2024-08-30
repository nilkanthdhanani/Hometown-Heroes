import React from 'react';
import './theGallary.scss';
import { theGallary } from '../../../assets/images/image';

export default function TheGallary() {
    return (
        <>
            <div className="the-gallary">
                <div className="container3">
                    <h2>THE GALLERY</h2>
                    <div className="gallary-image">
                        <img src={theGallary} alt="theGallary" />
                    </div>
                </div>
            </div>
        </>
    )
}
