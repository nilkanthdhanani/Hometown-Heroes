import React from 'react';
import './thankYou.scss';
import { thankYou } from '../../../assets/images/image';

export default function ThankYou() {
    return (
        <>
            <div className="thank-you">
                <div className="container4">
                    <div className="thank-you-div">
                        <div className="thank-you-head">
                            <h2>THANK YOU</h2>
                            <div className="thank-you-image">
                                <img src={thankYou} alt="thank-you" />
                            </div>
                        </div>
                        <div className="thank-you-text">
                            <p>We extend our heartfelt gratitude for taking the time to explore the story, mission, and future of Hometown Heroes.</p>
                            <p>Your commitment to understanding our vision is deeply appreciated. We believe that positive change begins with awareness, and your engagement is a vital step in that direction. Together, we can amplify our message of equality, humanity, and compassion, and inspire the world to make a difference.</p>
                            <p>We look forward to the possibility of joining forces with you to create a brighter, more equitable future for all.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
