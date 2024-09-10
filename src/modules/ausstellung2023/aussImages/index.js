import React from 'react';
import './aussImages.scss';
import { aussImg1, aussImg2, aussImg3 } from '../../../assets/images/image';

export default function AussImages() {
    return (
        <section className="auss-images">
            <div className="container2">
                <div className="auss-images-div">
                    <div className="auss-images-div1">
                        <img src={aussImg1} alt="aussImg1" />
                    </div>
                    <div className="auss-images-div2">
                        <div className="auss-images-div2-img1">
                            <img src={aussImg2} alt="aussImg1" />
                        </div>
                        <div className="auss-images-div2-img1">
                            <img src={aussImg3} alt="aussImg1" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
