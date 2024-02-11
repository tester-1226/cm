import React, { useState, useEffect } from 'react';
import { getDatabase, ref, get, child } from 'firebase/database';
import { onAuthStateChanged , getAuth} from 'firebase/auth';
import CryptoJS from 'crypto-js';
import { Form } from 'antd'; // Ensure you import Form from 'antd' if you haven't already
import Navbar from './Navbar';

function Profile(props) {
    const secretPass = "XkhZG4fW2t2W";
    const [form] = Form.useForm();
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
        <div>
            <Navbar />
            <div align="center">
                <button className="form-larger-button">
                    Upload your pfp
                </button>
            </div>

            <div align="center">
                <p>
                    Email: {profile.email}
                </p>
            </div>
            <div align="center">
                <p>
                    Username: {profile.name}
                </p>
            </div>

            <div align="center">
                {/* List Component */}
            </div>
        </div>
    );
}

export default Profile;
