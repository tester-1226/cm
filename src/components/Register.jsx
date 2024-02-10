import React from 'react'
import '../css/form.css';

const Register = (props) => {
    return (
        <div class = "form-wrapper">
           <div class = "form">
                <div class = "form-padding">
                    <div class = "form-logo">
                        <span class = "community">
                            Community
                        </span>
                        <span class = "heros">
                            Heroes
                        </span>
                    </div>
                    <div class = "form-section">
                        <div class = "form-input-wrapper">
                            <input class="form-input" type="text" placeholder="Username" name="email"></input>
                            <span class = "form-input-focus-border"></span>
                            <span class = "form-input-focus-border-reverse"></span>
                        </div>
                    </div>
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
                        <div class = "form-input-wrapper">
                            <input class="form-input" type="text" placeholder="Confirm Password" name="email"></input>
                            <span class = "form-input-focus-border"></span>
                            <span class = "form-input-focus-border-reverse"></span>
                        </div>
                    </div>
                    <div class = "form-section">
                        <button class = "form-large-button">Register</button>
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default Register;