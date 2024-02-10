import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";

import '../css/nav.css';

const Navbar = () => {
    const navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useState('');

    useEffect(() => {
        let token = Cookies.get('token');
        if(token) setLoggedIn(true);
    },[])

    return(
        <div>
            <div className="nav">
                <div className = "form-logo grid-center" onClick={(e) => navigate("/")}>
                    <span className = "community">
                        Community
                    </span>
                    <span className = "heros">
                        Heroes
                    </span>
                </div>
                <button class = "nav-button" onClick={(e) => navigate("/events")}>
                    Events
                </button>
                {
                    loggedIn &&
                    <div class = "navbar-flex">
                        <button class = "nav-button" onClick={(e) => navigate("/add-events")}>
                            Add
                        </button>
                        <div className="nav-profile-pic">

                        </div>
                    </div>
                }
                {
                    (!loggedIn) &&
                    <div class = "navbar-flex">
                        <button class = "nav-button" onClick={(e) => navigate("/login")}>
                            Login
                        </button>
                        <button class = "nav-button" onClick={(e) => navigate("/register")}>
                            Register
                        </button>
                    </div>
                }
            </div>
        </div>
    );
}

export default Navbar;