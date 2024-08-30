import React from 'react';
import './theGallary.scss';
import { theGallary } from '../../../assets/images/image';

export default function TheGallary() {
    return (
        <>
            <div className="gallary">
                <div className="container3">
                    <div className="gallary-div">
                        <div className="the-gallary-head">
                            <h2>THE GALLERY</h2>
                        </div>
                        <div className="gallary-image">
                            <img src={theGallary} alt="theGallary" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
