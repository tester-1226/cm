import React from 'react'

const Event = (props) => {
    return (
        <div>
            <form>
                <label for="img">Event Image:</label>
                <input type="image" id="eventImage" name="eventImage" accept="image/*"></input>
                <input type="image" id="pfp" name="pfp" accept="image/*"></input>
             </form>
             <div>
                <label for="eventName">Event name:</label>
                <input type="text" id="eventName" name="eventName"></input>
                <label for="userName">Username:</label>
                <input type="text" id="userName" name="userName"></input>
                <label for="location">Location:</label>
                <input type="text" id="eventLocation" name="eventLocation"></input>
                <label for="date">Date:</label>
                <input type="date" name="eventDate"></input>
                <label for="time">Time:</label>
                <input type="time" name="eventDate"></input>
             </div>
             <div id="button">
                <button type="button">RSVP</button>
             </div>
        </div>
    );
}

export default Event;