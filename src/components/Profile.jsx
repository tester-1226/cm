import React from 'react';
import '../css/profile.css';
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { genericFetch } from './datafetch';
import { signInWithEmailAndPassword, signOut, sendEmailVerification, getAuth } from 'firebase/auth';
import { database } from '../firebase_setup/firebase.js'
import { ref, push, child, update } from "firebase/database";
import { auth } from '../firebase_setup/firebase';
import Cookies from 'js-cookie';

const Profile = (props) => {
    const user = Cookies.get('token');
    console.log(user);

    const dbRef = ref(getDatabase());

    const userID = user.uid;
    console.log(userID);


    return (
        <div>
           <div align = "center">
                <button class = "form-larger-button">
                    Upload your pfp
                </button>
            </div>

            <div align = "Center">
                <h4>
                    Email:
                </h4>
            </div>


            <div align = "center">

            </div>
        </div>
    );
}

export default Profile;