import React from 'react';
import './theFuture.scss'
import { theFuture } from '../../../assets/images/image';

export default function TheFuture() {
    return (
        <>
            <div className="future">
                <div className="container10">
                    <div className="the-future">
                        <h2>HOMETOWN HEROES</h2>
                        <img src={theFuture} alt="theFuture" />
                        <h3>“EQUAL AS HUMANS - DESPITE DIFFERENCES“</h3>
                        <h2>THE FUTURE</h2>
                    </div>
                </div>
            </div>
        </>
    )
}
