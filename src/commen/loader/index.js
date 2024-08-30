import React from 'react';
import './loader.scss';

export default function Loader() {
    return (
        <div className="advanced-loader-container">
            <div className="circle">
                <div className="inner-circle"></div>
            </div>
            <div className="loading-text">Loading</div>
        </div>
    );
}
