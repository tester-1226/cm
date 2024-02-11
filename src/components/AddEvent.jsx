import React, { useState, useEffect } from 'react';
import '../css/addEvent.css'
import '../css/form.css'
import Navbar from './Navbar';
import { db } from '../firebase_setup/firebase.js'
import { ref, push, child, update } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { message, Form, Input, Checkbox, Button } from 'antd';
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';


const AddEvent = () => {
    const navigate = useNavigate();
    const [eventData, setEventData] = useState({
        uid: '',
        description: '',
        name: '',
        location: '',
        date: '',
        time: ''
    });

    const userUid = Cookies.get('token');
    console.log(userUid)
    console.log(eventData);
    eventData["uid"] = userUid;
    console.log()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEventData({ ...eventData, [name]: value });
    };

    const handleSubmit = () => {
        const eventsRef = ref(db, 'events');
        push(eventsRef, eventData)
            .then(() => {
                message.success("Event added successfully!");
                navigate('/'); // Redirect to homepage after adding event
            })
            .catch((error) => {
                console.error("Error adding event:", error);
                message.error("Failed to add event. Please try again.");
            });
    };

    return (
        <div>
            <Navbar/>
            <div className="form-wrapper">
        <div style={{minWidth: "400px"}} className="form">
        <div style={{marginBottom: "40px"}} className = "form-logo" onClick={(e) => navigate("/")}>
                        <span className = "community">
                            Community
                        </span>
                        <span className = "heros">
                            Heroes
                        </span>
                    </div>
            <Form onFinish={handleSubmit}>
                <Form.Item label="Description">
                    <Input type="text" name="description" value={eventData.description} onChange={handleChange} />
                </Form.Item>
                <Form.Item label="Name">
                    <Input type="text" name="name" value={eventData.name} onChange={handleChange} />
                </Form.Item>
                <Form.Item label="Location">
                    <Input type="text" name="location" value={eventData.location} onChange={handleChange} />
                </Form.Item>
                <Form.Item label="Date">
                    <Input type="date" name="date" value={eventData.date} onChange={handleChange} />
                </Form.Item>
                <Form.Item label="Time">
                    <Input type="time" name="time" value={eventData.time} onChange={handleChange} />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">Create Event</Button>
                </Form.Item>
            </Form>
            </div>
            </div>
        </div>
    );
};

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // return (
    //     <div align = "center">
    //         <h1>
    //             Create An Event
    //         </h1>
    //         <div>
    //             <label for="eventName">Event name:</label>
    //             <input type="text" id="eventName" name="eventName"></input>
    //         </div>
    //         <br>
    //         </br>
    //         <div>
    //             <label for="location">Location:</label>
    //             <input type="text" id="eventLocation" name="eventLocation"></input>
    //         </div>
    //         <br>
    //         </br>
    //         <div>
    //             <label for="userName">Username:</label>
    //             <input type="text" id="userName" name="userName"></input>
    //             <label for="date">Date:</label>
    //             <input type="date" name="eventDate"></input>
    //             <label for="time">Time:</label>
    //             <input type="time" name="eventDate"></input>
    //         </div>
    //         <br>
    //         </br>
    //         <div>
    //             <label>
    //             Event Description
    //             </label>
    //             <br>
    //             </br>
    //             <textarea rows="4" cols="50" class="form-resize">

    //             </textarea>
    //         </div>
    //         <br>
    //         </br>
    //         <div align = "center">
    //             <button class="form-createEvent-button">Create Event</button>
    //          </div>

            
    //     </div>

    // );
export default AddEvent;