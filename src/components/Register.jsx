import React, { useState, setState } from 'react';
import { db } from '../firebase_setup/firebase.js'
import { ref, push, child, update } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { message, Form, Input, Checkbox, Button } from 'antd';
import '../css/form.css';
import { useNavigate } from "react-router-dom";
// import bcrypt from 'bcryptjs';
import CryptoJS from 'crypto-js'; 
function Register() {
    const navigate = useNavigate();
    const secretPass = "XkhZG4fW2t2W";
    const handleSubmit = (e) => {
        let obj = {
            uid: '',
            name: e.name,
            email: e.email,
            password: e.password,
        }

        // worst line of code i've ever written in my life
        if (obj["isSubscribedToPromotions"] != true) obj["isSubscribedToPromotions"] = false
        //console.log(e)
        //console.log(obj) 
        debugger;
        //const newPostKey = push(child(ref(database), 'posts')).key;
        const updates = {};
        const auth = getAuth();
        //encryot password,ccn1,ccn1expdate
        obj.password = CryptoJS.AES.encrypt(obj.password, secretPass).toString();
        console.log(obj)

        createUserWithEmailAndPassword(auth, obj["email"], e["password"])
            .then((userCredential) => {
                const user = userCredential.user;
                message.success("Registration success!")
                obj["uid"] = user.uid;
                sendEmailVerification(user)
                    .then(() => {
                        message.success("A confirmation email has been sent to your email address.")
                        updates['/users/' + obj["uid"]] = obj;
                        return update(ref(db), updates);
                    })
                    .catch((error) => {
                        //message.error("We could not send the verification email - contact an admin")
                        message.error(error.message)
                    });
            })
            .catch((error) => {
                message.error(error.message)
            })
        //console.log(firstName,lastName,email,password,confirmPassword);
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
                        <Form.Item
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your name',
                                    whitespace: true,
                                },
                            ]}
                        >
                            <Input placeholder="Name*" />
                        </Form.Item>
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

                        <Form.Item
                            name="confirm"
                            dependencies={['password']}
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Please confirm your password!',
                                },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('Passwords do not match!'));
                                    },
                                }),
                            ]}
                        >
                            <Input.Password placeholder="Confirm Password*" />
                        </Form.Item>
                    </div>
                        <Button type="primary" htmlType="submit">
                            Register
                        </Button>
                        <Button type="primary" style = {{marginLeft:"10px"}} onClick={(e) => {navigate("/login")}}>
                            Login Instead
                        </Button>
                    </div>

                </div>
            </Form>
        </div>
        </div>
    )
}

export default Register
//