import React from 'react'
import '../css/profile.css';


const Profile = (props) => {
    return (
        <div>
           <div class = 'form-patting'>
                <button>
                    Upload your pfp
                    <input type="file">

                    </input>
                </button>
                
            </div>
        </div>
    );
}

export default Profile;