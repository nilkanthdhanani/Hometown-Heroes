import React, { useState, useEffect } from 'react';
import './form.scss';
import { lwandle } from '../../../assets/images/image';
import SubmitForm from '../../../components/form';

export default function Form({ onFormLoad }) {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    useEffect(() => {
        if (imageLoaded && onFormLoad) {
            onFormLoad();
        }
    }, [imageLoaded, onFormLoad]);

    return (
        <section className="form">
            <div className="container3">
                <div className="form-main" onLoad={handleImageLoad}>
                    <div className="form-main-img">
                        <img src={lwandle} alt="form" />
                    </div>
                    {imageLoaded && (
                        <div className="form-div">
                            <h3>LWANDLE</h3>
                            <p>Jetzt Gebot abgeben und das Projekt unterstützen.</p>
                            <p>Gib einfach deine Kontaktdaten in das Eingabefeld</p>
                            <p>und dein Gebot für das Bild ab.</p>
                            <SubmitForm />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
