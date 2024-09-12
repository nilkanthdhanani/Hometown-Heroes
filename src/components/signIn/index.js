import React, { useState } from 'react';
import './sighnIn.scss';
import EyeIcon from './eyeIcon';
import CloseIcon from './closeIcon';
import EyecloseIcon from './eyecloseIcon';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [errors, setErrors] = useState({ email: '', password: '' });

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Form submit handler
    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = { email: '', password: '' };

        // Validate email field
        if (!email) {
            newErrors.email = 'Field is required';
        } else if (!emailRegex.test(email)) {
            newErrors.email = 'Invalid email address';
        }

        // Validate password field
        if (!password) {
            newErrors.password = 'Field is required';
        } else if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters long';
        }

        setErrors(newErrors);

        // Only submit if there are no errors
        if (!newErrors.email && !newErrors.password) {
            console.log('Form submitted:', { email, password });
        }
    };

    // Handler to clear email input
    const clearEmail = () => {
        setEmail('');
        setErrors((prevErrors) => ({ ...prevErrors, email: '' })); // Clear email error when input is cleared
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
                    <form onSubmit={handleSubmit}>
                        <div className="signin-form-input">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setErrors((prevErrors) => ({ ...prevErrors, email: '' })); // Clear error on input change
                                }}
                                placeholder="Email"
                            />
                            {errors.email && <span>{errors.email}</span>}
                            {email && (
                                <div className="side-icon" onClick={clearEmail}>
                                    <CloseIcon />
                                    <span>Clear</span>
                                </div>
                            )}
                        </div>
                        <div className="signin-form-input">
                            <input
                                type={isPasswordVisible ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    setErrors((prevErrors) => ({ ...prevErrors, password: '' })); // Clear error on input change
                                }}
                                placeholder="Password"
                            />
                            {errors.password && <span>{errors.password}</span>}
                            <div className="side-icon" onClick={togglePasswordVisibility}>
                                {isPasswordVisible ? <EyecloseIcon /> : <EyeIcon />}
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
