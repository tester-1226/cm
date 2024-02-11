import React, { useState, useEffect } from 'react';
import { getDatabase, ref, get, child } from 'firebase/database';
import { onAuthStateChanged , getAuth} from 'firebase/auth';
import CryptoJS from 'crypto-js';
import { Form } from 'antd'; // Ensure you import Form from 'antd' if you haven't already
import Navbar from './Navbar';
import Jake from "../images/jake.jpg"
import EventListAttending from './EventListAttending';
import EventListCreated from './EventListCreated';

import "../css/profile.css"
import { SHOW_ALL } from 'rc-tree-select';

function Profile(props) {
    const secretPass = "XkhZG4fW2t2W";
    const [form] = Form.useForm();
    const [show, setShow] = useState(false);
    const [profile, setProfile] = useState({
        uid: '',
        name: '',
        phone: '',
        email: '',
        password: ''
    });

    useEffect(() => {
        const auth = getAuth(); // Ensure you import auth from 'firebase/auth'
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                const dbRef = ref(getDatabase());
                get(child(dbRef, `users/${uid}`)).then((snapshot) => {
                    if (snapshot.exists()) {
                        const userData = snapshot.val();
                        setProfile({
                            uid: uid,
                            name: userData.name,
                            phone: userData.phone,
                            email: userData.email,
                            password: CryptoJS.AES.decrypt(userData.password, secretPass).toString(CryptoJS.enc.Utf8),
                        });
                        form.setFieldsValue({
                            name: userData.name,
                            phone: userData.phone,
                            email: userData.email
                        });
                        console.log('The profile is : ', profile);
                    }
                }).catch((error) => {
                    console.error('Error fetching user data:', error);
                });
            }
        });
    }, [form]);

    return (
        <div className="capsule">
        <Navbar />
        <div className = "profile-push">
            
            <div align="center">
                <button className="form-larger-button">
                    <img src = {Jake}></img>
                </button>
            </div>

            <div className="pinfo">
                <div className='info-box' align="center">
                    <p>
                        Email: {profile.email}
                    </p>
                </div>
                <div className='info-box' align="center">
                    <p>
                        Username: {profile.name}
                    </p>
                </div>
            </div>

            <div className='tablist' align="center">
                <div className="tabs">
                    <button onClick={(e) => {setShow(false)}}>Created</button>
                    <button onClick={(e) => {setShow(true)}}>Attending</button>
                </div>
                { show &&
                <div className="attending">
                    <EventListAttending />
                </div>
                }
                { (!show) &&
                <div className="created">
                    <EventListCreated />
                </div>
                }
            </div>
            <div className="separator"></div>
        </div>
        </div>
    );
}

export default Profile;
