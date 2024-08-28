import React from 'react';
import './form.scss';
import { lwandle } from '../../../assets/images/image';

export default function Form() {
    return (
        <>
            <div className="form">
                <div className="container3">
                    <div className="form-main">
                        <div className="form-main-img">
                            <img src={lwandle} alt="form" />
                        </div>
                        <div className="form-div">
                            <h3>LWANDLE</h3>
                            <p>Jetzt Gebot abgeben und das Projekt unterstützen. <br />Gib einfach deine Kontaktdaten in das Eingabefeld <br />und dein Gebot für das Bild ab.</p>
                            <div className="form-input">
                                <p>Startgebot pro Bild: 300€</p>
                                <div className="form-input-box flex">
                                    <div className="form-input-first">
                                        <label>Vorname *</label>
                                        <input type="text" placeholder="Vorname *" />
                                    </div>
                                    <div className="form-input-first">
                                        <label>Nachname *</label>
                                        <input type="text" placeholder="Nachname *" />
                                    </div>
                                </div>
                                <div className="form-input-box">
                                    <label>Firma</label>
                                    <input type="text" placeholder="Firma" />
                                </div>
                                <div className="form-input-box">
                                    <label>E-Mail-Adresse *</label>
                                    <input type="text" placeholder="E-Mail-Adresse *" />
                                </div>
                            </div>
                            <div className="form-input">
                                <h4>Gebot</h4>
                                <div className="form-input-box flex">
                                    <div className="form-input-first">
                                        <label>Gebot in € *</label>
                                        <input type="text" placeholder="300€" />
                                    </div>
                                    <div className="form-input-first"></div>
                                </div>
                                <ul>
                                    <li>Es gelten die AGB. Ich habe die Datenschutzerklärung zur Kenntnis genommen.</li>
                                </ul>
                            </div>
                            <div className="form-button">
                                <button>Gebot abgeben</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
