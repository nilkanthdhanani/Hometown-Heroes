import React, { useState } from 'react';
import './sighnIn.scss';
import EyeIcon from './eyeIcon';
import CloseIcon from './closeIcon';
import EyecloseIcon from './eyecloseIcon';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false); // Track password visibility

    // Handler to clear email input
    const clearEmail = () => {
        setEmail('');
    };

    // Handler to toggle password visibility
    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <section className="sign-in">
            <h2>Welcome to Winpro FX</h2>
            <div className="signin-form">
                <div className="signin-form-div">
                    <h3>Sign In</h3>
                    <form>
                        <div className="signin-form-input">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                            />
                            <span>Field is required</span>
                            <span>Invalid email address</span>
                            {email && (
                                <div className="side-icon" onClick={clearEmail}>
                                    <CloseIcon />
                                    <span>Clear</span>
                                </div>
                            )}
                        </div>
                        <div className="signin-form-input">
                            <input
                                type={isPasswordVisible ? 'text' : 'password'}  // Toggle input type
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                            />
                            <span>Field is required</span>
                            <span>Invalid password</span>
                            <div className="side-icon" onClick={togglePasswordVisibility}>
                                {isPasswordVisible ? <EyecloseIcon /> : <EyeIcon />} {/* Toggle icon */}
                                <span>{isPasswordVisible ? 'Hide' : 'Show'}</span>
                            </div>
                        </div>
                        <button type="submit">Login</button>
                        <div className="forgot-password"><a href="/">Forgot Password</a></div>
                    </form>
                </div>
            </div>
            <div className="contact-us">
                <div className="contact-us-text">
                    <p>Contact us at <a href="/">Support@winprofx.com</a></p>
                </div>
                <div className="contact-us-link">
                    <a href="/">Restricted Region</a>
                    <a href="/">Risk Warning</a>
                </div>
                <div className="contact-us-link">
                    <a href="/">Sign Up</a>
                </div>
            </div>
        </section>
    );
}
