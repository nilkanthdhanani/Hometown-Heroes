import React, { useState, useEffect } from 'react';
import Form from './form';
import ArtistName from '../lwandle/artistName';
import Timer from '../../components/timer';
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
            {windowWidth >= 576 && <Timer theme="light" /> }
            <Sponsoren />
        </>
    );
}
