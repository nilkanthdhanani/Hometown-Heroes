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
                        <div className="auktion-timer-text">
                            <h3>13</h3>
                        </div>
                        <div className="auktion-timer-text">
                            <h3>23</h3>
                        </div>
                        <div className="auktion-timer-text">
                            <h3>59</h3>
                        </div>
                        <div className="auktion-timer-text">
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
