import React from 'react';
import './auktion.scss';

export default function Auktion() {
    return (
        <>
            <div className="auktion">
                <div className="container">
                    <div className="auktion-div">
                        <h2>AUKTION 2024 NOCH</h2>
                    </div>
                    <div className="auktion-timer">
                        <div className="auktion-timer-div">
                            <div className="auktion-timer-text">
                                <h3>13</h3>
                            </div>
                            <span>DAYS</span>
                        </div>
                        <div className="auktion-timer-div">
                            <div className="auktion-timer-text">
                                <h3>23</h3>
                            </div>
                            <span>HOURS</span>
                        </div>
                        <div className="auktion-timer-div">
                            <div className="auktion-timer-text">
                                <h3>59</h3>
                            </div>
                            <span>MINUTES</span>
                        </div>
                        <div className="auktion-timer-div">
                            <div className="auktion-timer-text">
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
