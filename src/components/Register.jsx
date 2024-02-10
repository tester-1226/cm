import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { genericFetch } from './datafetch';
import '../css/form.css';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from '../firebase_setup/firebase.js';
import { ref, push } from "firebase/database";
import CryptoJS from 'crypto-js'; 
import { message } from 'antd';

const Register = (props) => {
    const secretPass = "XkhZG4fW2t2W";
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [confirm, setConfirm] = useState(''); 
    const [error, setError] = useState(false);
    const [redirectHome, setRedirectHome] = useState(false);
    const [emsg, setEmsg] = useState(''); 

    useEffect(() => {
        if(password !== confirm){
            setError(true);
            setEmsg("Passwords Must Match");
        } else {
            setError(false);
        }
    }, [confirm, password]);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Encrypt password
        const encryptedPassword = CryptoJS.AES.encrypt(password, secretPass).toString();

        // Create user in Firebase Authentication
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                const userData = {
                    name: username,
                    email: email,
                    password: encryptedPassword
                };

                // Push user data to Firebase Realtime Database
                const dbRef = ref(db);
                push(ref(db), userData)
                .then(() => {
                    console.log("User data added to the database");
                    // If you want to redirect after successful registration
                    setRedirectHome(true);
                })
                .catch((error) => {
                    console.error("Error adding user data to the database: ", error);
                });

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error("Error creating user:", errorMessage);
                // Handle error message display (e.g., using Ant Design message.error)
                message.error(errorMessage);
            });
    }

    return (
        <div>
            <form className = "form-wrapper" onSubmit={handleFormSubmit}>
            <div className = "form">
                    <div className = "form-padding">
                        <div className = "form-logo">
                            <span className = "community">
                                Community
                            </span>
                            <span className = "heros">
                                Heroes
                            </span>
                        </div>
                        <div className = "form-section">
                            <div className = "form-input-wrapper">
                                <input className="form-input" type="text" placeholder="Username" name="email"
                                required
                                value = {username}
                                onChange = {(e) => setUsername(e.target.value)}
                                ></input>
                                <span className = "form-input-focus-border"></span>
                                <span className = "form-input-focus-border-reverse"></span>
                            </div>
                        </div>
                        <div className = "form-section">
                            <div className = "form-input-wrapper">
                                <input className="form-input" type="text" placeholder="Email" name="email"
                                required
                                value = {email}
                                onChange = {(e) => setEmail(e.target.value)}
                                ></input>
                                <span className = "form-input-focus-border"></span>
                                <span className = "form-input-focus-border-reverse"></span>
                            </div>
                        </div>
                        <div className = "form-section">
                            <div className = "form-input-wrapper">
                                <input className="form-input" type="password" placeholder="Password" name="password"
                                required
                                
                                value = {password}
                                onChange = {(e) => setPassword(e.target.value)}
                                ></input>
                                <span className = "form-input-focus-border"></span>
                                <span className = "form-input-focus-border-reverse"></span>
                            </div>
                        </div>
                        <div className = "form-section">
                            <div className = "form-input-wrapper">
                                <input className="form-input" type="password" placeholder="Confirm Password" name="confirm Password"
                                required
                                value = {confirm}
                                onChange = {(e) => setConfirm(e.target.value)}
                                ></input>
                                <span className = "form-input-focus-border"></span>
                                <span className = "form-input-focus-border-reverse"></span>
                            </div>
                        </div>
                        {
                            error &&
                            <div className = "form-section">
                                <div classNameName = "form-error">
                                    <div classNameName="form-msg-error"> {emsg} </div>
                                </div>
                            </div>
                        }
                        <div className = "form-section">
                            <button className = "form-large-button">Register</button>
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