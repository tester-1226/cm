import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import '../css/nav.css';

const Navbar = () => {
    const navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useState('');
    const [redirectHome, setRedirectHome] = useState(false);

    useEffect(() => {
        let token = Cookies.get('token');
        if(token) setLoggedIn(true);
    },[])

    const handleLogout = () => {
        Cookies.remove("token");
		setRedirectHome(true);
        setLoggedIn(false);
    }

    return(
        <div>
            {
				redirectHome &&
				<Navigate replace to="/" />
			}
            <div className="nav">
                <div className="left">
                    <div className = "form-logo grid-center" onClick={(e) => navigate("/")}>
                        <span className = "community">
                            Community
                        </span>
                        <span className = "heros">
                            Heroes
                        </span>
                    </div>
                </div>
                {
                    loggedIn &&
                    <div className="right">
                        <button class = "nav-button" onClick={(e) => navigate("/add-event")}>
                            Add
                        </button>
                        <button class = "nav-button" onClick={(e) => navigate("/profile")}>
                            My Events
                        </button>
                        <button class = "nav-button" onClick={(e) => handleLogout()}>
                            Logout
                        </button>
                    </div>
                }
                {
                    (!loggedIn) &&
                    <div class = "navbar-flex right">
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