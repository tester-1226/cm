import React from 'react'
import '../css/form.css';

const Profile = (props) => {
    return (
        <div class = "form-wrapper">
            <div class = "form">
                 <div class = "form-padding">
                        <div class = "form-logo">
                            <span class = "community">
                                Community
                            </span>
                            <span class = "heros">
                                Heroes
                            </span>
                        <div>
                            <form>
                            <label for="img">Profile Picture:</label>
                            <input type="file" id="img" name="img" accept="image/*"></input>
                            <input type="submit"></input>
                            </form>
                        </div>
                        <div>
                            <tr>
                            <td>Email</td>
                            <td> <input type="email" placeholder="sophie@example.com" /></td>
                            </tr>
                            <tr>
                            <td>UserName</td>
                            <td> <input type="text" name="username" id="username" /></td>
                            </tr>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;