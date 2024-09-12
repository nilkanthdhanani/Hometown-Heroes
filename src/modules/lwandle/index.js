import React, { useState } from 'react';
import Form from './form';
import ArtistName from './artistName';
import Timer from '../../components/timer';

export default function Lwandle() {
    const [formLoaded, setFormLoaded] = useState(false);

    const handleFormLoad = () => {
        setFormLoaded(true);
    };

    return (
        <>
            <Form onFormLoad={handleFormLoad} />
            {formLoaded && (
                <>
                    <ArtistName />
                    <Timer theme="light lwandle" />
                </>
            )}
        </>
    );
}
