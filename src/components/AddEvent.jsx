import React from 'react'
import '../css/addEvent.css'
import Navbar from './Navbar';
import { db } from '../firebase_setup/firebase.js'
import { ref, push, child, update } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { message, Form, Input, Checkbox, Button } from 'antd';
import { useNavigate } from "react-router-dom";

const AddEvent = (props) => {

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        let obj = {
            uid: '',
            description: e.description,
            name: e.name,
            location: e.location,
            date: e.date,
            time: e.time
        }
    }

    return (
        <div align = "center">
            <h1>
                Create An Event
            </h1>
            <div>
                <label for="eventName">Event name:</label>
                <input type="text" id="eventName" name="eventName"></input>
            </div>
            <br>
            </br>
            <div>
                <label for="location">Location:</label>
                <input type="text" id="eventLocation" name="eventLocation"></input>
            </div>
            <br>
            </br>
            <div>
                <label for="userName">Username:</label>
                <input type="text" id="userName" name="userName"></input>
                <label for="date">Date:</label>
                <input type="date" name="eventDate"></input>
                <label for="time">Time:</label>
                <input type="time" name="eventDate"></input>
            </div>
            <br>
            </br>
            <div>
                <label>
                Event Description
                </label>
                <br>
                </br>
                <textarea rows="4" cols="50" class="form-resize">

                </textarea>
            </div>
            <br>
            </br>
            <div align = "center">
                <button class="form-createEvent-button">Create Event</button>
             </div>

            
        </div>

    );
}
export default AddEvent;