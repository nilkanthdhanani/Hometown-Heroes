import React from 'react';
import Form from './form';
import ArtistName from '../lwandle/artistName';
import AuktionWhite from '../lwandle/auktionWhite';
import Sponsoren from './sponsoren';

export default function Donate() {
    return (
        <>
            <Form />
            <ArtistName />
            <AuktionWhite />
            <Sponsoren />
        </>
    )
}
