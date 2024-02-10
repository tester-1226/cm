import React, { useState, useEffect } from 'react';
import { database } from '../firebase_setup/firebase.js'
import { ref, push, child, update } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
//import { message, Form, Input, Checkbox, Button } from 'antd';
import { Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { genericFetch } from './datafetch';
import '../css/form.css';

import CryptoJS from 'crypto-js'; 

const Register = (props) => {
    const secretPass = "XkhZG4fW2t2W";
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

    const handleFormSubmit = (e) => 
    {
        e.preventDefault();
        let obj = 
        {
            uid: '',
            name: e.name,
            phone: e.phone,
            email: e.email,
            password: e.password
        }
        const updates = {};
        const auth = getAuth();
        //encryot password,ccn1,ccn1expdate
        obj.password = CryptoJS.AES.encrypt(obj.password, secretPass).toString();
        updates['users/' + auth.currentUser.uid] = obj;
        createUserWithEmailAndPassword(auth, obj["email"], obj["password"])
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("Registration success!")
                obj["uid"] = user.uid;
            })
        // if(error) return;
        // genericFetch(
        //     "GET",
        //     "http://localhost:8080/api/v1/customer/info?email="+username,
        //     {}
        // )
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
                                <input className="form-input" type="text" placeholder="Password" name="email"
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
                                <input className="form-input" type="text" placeholder="Confirm Password" name="email"
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