import React from 'react';
import './form.scss';
import { lwandle } from '../../../assets/images/image';
import SubmitForm from '../../../components/form';

export default function Form() {
    return (
        <section className="form">
            <div className="container3">
                <div className="form-main">
                    <div className="form-main-img">
                        <img src={lwandle} alt="form" />
                    </div>
                    <div className="form-div">
                        <h3>LWANDLE</h3>
                        <p>Jetzt Gebot abgeben und das Projekt unterstützen. <br />Gib einfach deine Kontaktdaten in das Eingabefeld <br />und dein Gebot für das Bild ab.</p>
                        <SubmitForm />
                    </div>
                </div>
            </div>
        </section>
    )
}
