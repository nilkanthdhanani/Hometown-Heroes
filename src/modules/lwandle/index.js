import React from 'react';
import Form from './form';
import ArtistName from './artistName';
import Timer from '../../components/timer';

export default function Lwandle() {
    return (
        <>
            <Form />
            <ArtistName />
            <Timer theme="light" />
        </>
    )
}
