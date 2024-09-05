import React, { useState, useEffect } from 'react';
import Form from './form';
import ArtistName from '../lwandle/artistName';
import AuktionWhite from '../lwandle/auktionWhite';
import Sponsoren from './sponsoren';

export default function Donate() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <Form />
            <ArtistName />
            {windowWidth >= 576 && <AuktionWhite />}
            <Sponsoren />
        </>
    );
}
