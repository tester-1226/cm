import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { genericFetch } from './datafetch';
import '../css/form.css';
import { signInWithEmailAndPassword, signOut, sendEmailVerification } from 'firebase/auth';
import { database } from '../firebase_setup/firebase.js'
import { ref, push, child, update } from "firebase/database";
import { auth } from '../firebase_setup/firebase';


const Login = (props) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState(''); 

    const [redirectHome, setRedirectHome] = useState(false);

    const handleFormSubmit = (e) => {
        /*e.preventDefault();
        genericFetch(
            "GET",
            "http://localhost:8080/api/v1/customer/info?email="+username,
            {}
        ).then(resp => {
            
        })*/
        e.preventDefault();
        signInWithEmailAndPassword(auth, username, password)
            .then((userCredential) => {
                // Signed in
                /*var lgDate = new Date();
                update(ref(database, 'users/' + user.uid), {
                    last_login: lgDate,
                })*/

                const user = userCredential.user;
                //props.changeLoginState(true, user.uid)
                console.log(user.uid);
                console.log("Signed in as " + user.email)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                //message.error(errorMessage)
                console.log(errorCode, errorMessage);
                console.log("Invalid email or password!");
            });
        }


    return (
        <div>
            <form class = "form-wrapper" onSubmit={handleFormSubmit}>
            <div class = "form">
                    <div class = "form-padding">
                        <div class = "form-logo" onClick={(e) => navigate("/")}>
                            <span class = "community">
                                Community
                            </span>
                            <span class = "heros">
                                Heroes
                            </span>
                        </div>
                        <div class = "form-section">
                            <div class = "form-input-wrapper">
                                <input class="form-input" type="text" placeholder="Email" name="email"
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
                                <button type = "submit" class = "form-large-button">Login</button>
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

export default Login;