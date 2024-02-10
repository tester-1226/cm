import React from 'react'
import '../css/form.css';

const Login = (props) => {
    return (
        <div>
            <div class = "form-section">
                <div class = "form-input-wrapper">
                    <input class="form-input" type="text" placeholder="Email" name="email"></input>
                    <span class = "form-input-focus-border"></span>
                    <span class = "form-input-focus-border-reverse"></span>
                </div>
            </div>
            <div class = "form-section">
                <div class = "form-input-wrapper">
                    <input class="form-input" type="text" placeholder="Password" name="email"></input>
                    <span class = "form-input-focus-border"></span>
                    <span class = "form-input-focus-border-reverse"></span>
                </div>
            </div>
            <div class = "form-section">
                    <button class = "form-large-button">Login</button>
            </div>
        </div>
    );
}

export default Login;