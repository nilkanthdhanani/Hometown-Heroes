import React, { useState } from 'react';
import './submitForm.scss';

export default function SubmitForm() {
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const [formData, setFormData] = useState({
        vorname: '',
        nachname: '',
        firma: '',
        email: '',
        gebot: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        setFormData({
            vorname: '',
            nachname: '',
            firma: '',
            email: '',
            gebot: ''
        });

        setIsChecked(false);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-input">
                    <p>Startgebot pro Bild: 300€</p>
                    <div className="form-input-box flex">
                        <div className="form-input-first">
                            <label>Vorname *</label>
                            <input
                                type="text"
                                name="vorname"
                                value={formData.vorname}
                                onChange={handleChange}
                                placeholder="Vorname *"
                                required />
                        </div>
                        <div className="form-input-first">
                            <label>Nachname *</label>
                            <input
                                type="text"
                                name="nachname"
                                value={formData.nachname}
                                onChange={handleChange}
                                placeholder="Nachname *"
                                required />
                        </div>
                    </div>
                    <div className="form-input-box">
                        <label>Firma</label>
                        <input
                            type="text"
                            name="firma"
                            value={formData.firma}
                            onChange={handleChange}
                            placeholder="Firma"
                            required />
                    </div>
                    <div className="form-input-box">
                        <label>E-Mail-Adresse *</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="E-Mail-Adresse *"
                            required />
                    </div>
                </div>
                <div className="form-input">
                    <h4>Gebot</h4>
                    <div className="form-input-box flex">
                        <div className="form-input-first">
                            <label>Gebot in € *</label>
                            <input
                                type="number"
                                name="gebot"
                                value={formData.gebot}
                                onChange={handleChange}
                                placeholder="300€"
                                required />
                        </div>
                        <div className="form-input-first"></div>
                    </div>
                    <div className="form-input-check">
                        <input
                            type="checkbox"
                            id="agb"
                            name="agb"
                            value="agb"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                            required />
                        <span>Es gelten die AGB. Ich habe die Datenschutzerklärung zur Kenntnis genommen.</span>
                    </div>
                </div>
                <div className="form-button">
                    <button>Gebot abgeben</button>
                </div>
            </form>
        </>
    )
}
