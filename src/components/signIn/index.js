import React from 'react';
import './sighnIn.scss'
import EyeIcon from './eyeIcon';
import CloseIcon from './closeIcon';

export default function SignIn() {
    return (
        <section className="sign-in">
            <h2>Welcome to Winpro FX</h2>
            <div className="signin-form">
                <div className="signin-form-div">
                    <h3>Sign In</h3>
                    <form>
                        <div className="signin-form-input">
                            <input type="email" placeholder="Email" />
                            <span>Field is required</span>
                            <span>Invalid email address</span>
                            <div className="side-icon">
                                <CloseIcon />
                                <span>Clear</span>
                            </div>
                        </div>
                        <div className="signin-form-input">
                            <input type="password" placeholder="Password" />
                            <span>Field is required</span>
                            <span>Invalid password</span>
                            <div className="side-icon">
                                <EyeIcon />
                                <span>Show</span>
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
    )
}
