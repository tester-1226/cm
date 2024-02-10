import React, { useEffect, useState } from 'react';
import '../css/profile.css';
import { ref, getDatabase, child, get } from "firebase/database";
import { database } from '../firebase_setup/firebase.js';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase_setup/firebase';
import Cookies from 'js-cookie';

const Profile = (props) => {
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            const dbRef = ref(getDatabase());
            const userID = user.uid;
            get(child(dbRef, `users/${userID}`)).then((snapshot) => {
                if (snapshot.exists()) {
                    const userData = snapshot.val();
                    console.log(userData);
                    // Update state with user data if needed
                } else {
                    console.log("User data not found");
                }
            }).catch((error) => {
                console.error("Error fetching user data:", error);
            });
        }
    }, [user]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <div align="center">
                <button className="form-larger-button">
                    Upload your pfp
                </button>
            </div>

            <div align="center">
                <p>
                    Email: {user.email}
                </p>
            </div>

            {/* Add other user details as needed */}

            <div align="center">
                {/* List Component */}
            </div>
        </div>
    );
}

export default Profile;
