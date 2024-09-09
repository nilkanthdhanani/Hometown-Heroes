import React, { useState, useEffect } from 'react';
import './timer.scss';

export default function Timer({ theme }) {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const targetDate = new Date('2024-09-19T23:59:59');

        const calculateTimeLeft = () => {
            const now = new Date();
            const difference = targetDate - now;

            let timeLeft = {};

            if (difference > 0) {
                timeLeft = {
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                };
            } else {
                timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
            }

            setTimeLeft(timeLeft);
        };

        const timer = setInterval(calculateTimeLeft, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className={`timer ${theme}`}>
            <div className="container">
                <div className="timer-header">
                    <h2>AUKTION 2024 NOCH</h2>
                </div>
                <div className="timer-countdown">
                    <div className="timer-text"><h3>{timeLeft.days}</h3></div>
                    <div className="timer-text"><h3>{timeLeft.hours}</h3></div>
                    <div className="timer-text"><h3>{timeLeft.minutes}</h3></div>
                    <div className="timer-text"><h3>{timeLeft.seconds}</h3></div>
                </div>
                <div className="timer-labels">
                    <span>DAYS</span>
                    <span>HOURS</span>
                    <span>MINUTES</span>
                    <span>SECONDS</span>
                </div>
            </div>
        </section>
    );
}
