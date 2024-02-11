import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useParams, NavLink, useNavigate } from 'react-router-dom';
import '../css/form.css';
import { signInWithEmailAndPassword, signOut, sendEmailVerification } from 'firebase/auth';
import { db } from '../firebase_setup/firebase.js'
import { ref, push, child, update } from "firebase/database";
import { auth } from '../firebase_setup/firebase';
import { Form, Input, Checkbox, Button } from 'antd';
import { message } from 'antd';
import Cookies from 'js-cookie';


function Login() {
    const navigate = useNavigate();
    const secretPass = "XkhZG4fW2t2W";
    const handleSubmit = (e) => {
        let obj = {
            uid: '',
            name: e.name,
            email: e.email,
            password: e.password,
        }
        signInWithEmailAndPassword(auth, e.email, e.password)
            .then((userCredential) => {
                // Signed in
                /*var lgDate = new Date();
                update(ref(database, 'users/' + user.uid), {
                    last_login: lgDate,
                })*/

                const user = userCredential.user;
                Cookies.set('token', user.uid, {expires:1});
                message.success("Signed in as " + user.email)
                navigate("/")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                //message.error(errorMessage)
                console.log(errorCode, errorMessage);
                message.error("Invalid email or password!");
            });

    }
        

    return (
        <div className="form-wrapper">
        <div className="form">
        <div className = "form-logo" onClick={(e) => navigate("/")}>
                        <span className = "community">
                            Community
                        </span>
                        <span className = "heros">
                            Heroes
                        </span>
                    </div>
            <Form
                name="registration"
                style={{
                    maxWidth: 700,
                }}
                onFinish={handleSubmit}
                autoComplete="off"
                method='POST'
                scrollToFirstError
            >
                <div className="form-section">
                    <div className="form-row">
                    <div className="form-row">
                        <Form.Item
                            name="email"
                            rules={[
                                {
                                    type: 'email',
                                    message: 'Not a valid email',
                                },
                                {
                                    required: true,
                                    message: 'Please input your email',
                                },
                            ]}
                        >
                            <Input placeholder="Email*" />
                        </Form.Item>
                    </div>
                    <div className="form-row">
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                            hasFeedback
                        >
                            <Input.Password placeholder="Password*" />
                        </Form.Item>
                    </div>
                        <Button type="primary" htmlType="submit">
                            Login
                        </Button>
                        <Button type="primary" style = {{marginLeft:"10px"}} onClick={(e) => {navigate("/register")}}>
                            Sign Up
                        </Button>
                    </div>

                </div>
            </Form>
        </div>
        </div>
    )
}


export default Login