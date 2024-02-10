import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { genericFetch } from './datafetch';
import '../css/form.css';

const Register = (props) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [confirm, setConfirm] = useState(''); 

    const [redirectHome, setRedirectHome] = useState(false);
    const [error, setError] = useState(false);
    const [emsg, setEmsg] = useState(''); 
    
    useEffect(() => {
        if(password != confirm){
            setError(true);
            setEmsg("Passwords Must Match");
        }else{
            setError(false);
        }
    }, [confirm, password]);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if(error) return;
        genericFetch(
            "GET",
            "http://localhost:8080/api/v1/customer/info?email="+username,
            {}
        ).then(resp => {
            
        })
    }

    return (
        <div>
            <form class = "form-wrapper" onSubmit={handleFormSubmit}>
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
                                <input class="form-input" type="text" placeholder="Username" name="email"
                                required
                                value = {username}
                                onChange = {(e) => setUsername(e.target.value)}
                                ></input>
                                <span class = "form-input-focus-border"></span>
                                <span class = "form-input-focus-border-reverse"></span>
                            </div>
                        </div>
                        <div class = "form-section">
                            <div class = "form-input-wrapper">
                                <input class="form-input" type="text" placeholder="Email" name="email"
                                required
                                value = {email}
                                onChange = {(e) => setEmail(e.target.value)}
                                ></input>
                                <span class = "form-input-focus-border"></span>
                                <span class = "form-input-focus-border-reverse"></span>
                            </div>
                        </div>
                        <div class = "form-section">
                            <div class = "form-input-wrapper">
                                <input class="form-input" type="text" placeholder="Password" name="email"
                                required
                                value = {password}
                                onChange = {(e) => setPassword(e.target.value)}
                                ></input>
                                <span class = "form-input-focus-border"></span>
                                <span class = "form-input-focus-border-reverse"></span>
                            </div>
                        </div>
                        <div class = "form-section">
                            <div class = "form-input-wrapper">
                                <input class="form-input" type="text" placeholder="Confirm Password" name="email"
                                required
                                value = {confirm}
                                onChange = {(e) => setConfirm(e.target.value)}
                                ></input>
                                <span class = "form-input-focus-border"></span>
                                <span class = "form-input-focus-border-reverse"></span>
                            </div>
                        </div>
                        {
                            error &&
                            <div class = "form-section">
                                <div className = "form-error">
                                    <div className="form-msg-error"> {emsg} </div>
                                </div>
                            </div>
                        }
                        <div class = "form-section">
                            <button class = "form-large-button">Register</button>
                        </div>
                    </div>
                </div> 
            </form>
            {
                redirectHome &&
                <Navigate replace to="/" />
            }
        </div>
    );
}

export default Register;