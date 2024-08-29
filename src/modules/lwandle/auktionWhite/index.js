import React from 'react';
import './auktionWhite.scss';

export default function AuktionWhite() {
    return (
        <>
            <div className="auktionw">
                <div className="container">
                    <div className="auktionw-div">
                        <h2>AUKTION 2024 NOCH</h2>
                    </div>
                    <div className="auktionw-timer">
                        <div className="auktionw-timer-text">
                            <h3>13</h3>
                        </div>
                        <div className="auktionw-timer-text">
                            <h3>23</h3>
                        </div>
                        <div className="auktionw-timer-text">
                            <h3>59</h3>
                        </div>
                        <div className="auktionw-timer-text">
                            <h3>59</h3>
                        </div>
                    </div>
                    <div className="auction-timer-title">
                        <span>DAYS</span>
                        <span>HOURS</span>
                        <span>MINUTES</span>
                        <span>seconds</span>
                    </div>
                </div>
            </div>
        </>
    )
}
