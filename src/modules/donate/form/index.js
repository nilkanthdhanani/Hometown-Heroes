import React from 'react';
import SubmitForm from '../../../components/form';

export default function Form() {

    return (
        <section className="form">
            <div className="container3">
                <div className="form-main">
                    <div className="form-div-head">
                        <h2>DONATE</h2>
                    </div>
                    <div className="form-div">
                        <h3>HOMETOWN HEROES 2024</h3>
                        <p>Jetzt Gebot abgeben und das Projekt unterstützen.</p>
                        <p>Gib einfach deine Kontaktdaten in das Eingabefeld</p>
                        <p>und dein Gebot für das Bild ab.</p>
                        <SubmitForm />
                    </div>
                </div>
            </div>
        </section>
    )
}
