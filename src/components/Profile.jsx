import React, { useEffect, useState } from 'react';
import '../css/profile.css';
import { ref, getDatabase, child, get } from "firebase/database";
import { database } from '../firebase_setup/firebase.js';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase_setup/firebase';
import Cookies from 'js-cookie';
import Navbar from './Navbar';

const Profile = (props) => {
    const [user, loading, error] = useAuthState(auth);
    const [displayName, setDisplayName] = useState(null);
    let userData;
    console.log(Cookies.get('token'))

    useEffect(() => {
        if (user) {
            const dbRef = ref(getDatabase());
            const userID = user.uid;
            console.log(userID)
            get(dbRef, `users/${userID}`).then((snapshot) => {
                console.log(snapshot)
                if (snapshot.exists()) {
                    userData = snapshot.val();
                    console.log(userData);
                    console.log("1")
                    // Update state with user data if needed
                } else {
                    console.log("User data not found");
                }
            }).catch((error) => {
                console.error("Error fetching user data:", error);
            });
        }
        console.log(user)
        console.log(userData)
    }, [user]);
    

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

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
                    Email: {user.email}
                </p>
            </div>
            <div align="center">
                <p>
                    Username: {userData}
                </p>
            </div>

            <div align="center">
                {/* List Component */}
            </div>
        </div>
    );
}

export default Profile;