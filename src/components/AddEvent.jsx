import React from 'react'
import '../css/addEvent.css'
import Navbar from './Navbar';
const AddEvent = (props) => {
    return (
        <div align = "center">
            <h1>
                Create An Event
            </h1>
            <div>
                <button class = "form-eventImage-button">
                    Event Image
                </button>
            </div>
            <br>
            </br>
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
            <div class = "form-userPadding">
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
                <label for="eventDescirption">Event Description
                    
                </label>
                <br>
                </br>
                <textarea rows = "4" cols = "50"class = "form-resize">

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