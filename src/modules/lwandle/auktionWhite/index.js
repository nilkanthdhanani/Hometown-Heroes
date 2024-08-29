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
                        <div className="auktionw-timer-div">
                            <div className="auktionw-timer-text">
                                <h3>13</h3>
                            </div>
                            <span>DAYS</span>
                        </div>
                        <div className="auktionw-timer-div">
                            <div className="auktionw-timer-text">
                                <h3>23</h3>
                            </div>
                            <span>HOURS</span>
                        </div>
                        <div className="auktionw-timer-div">
                            <div className="auktionw-timer-text">
                                <h3>59</h3>
                            </div>
                            <span>MINUTES</span>
                        </div>
                        <div className="auktionw-timer-div">
                            <div className="auktionw-timer-text">
                                <h3>59</h3>
                            </div>
                            <span>seconds</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
