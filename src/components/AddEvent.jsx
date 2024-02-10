import React from 'react'

const AddEvent = (props) => {
    return (
        <div>
            <div>
                <form>
                    <label for="img">Event Picture:</label>
                    <input type="file" id="img" name="img" accept="image/*"></input>
                    <input type="submit"></input>
                </form>
            </div>
            <div>
                <form>
                    <br>
                        <label for="firstName">Event name:</label>
                        <input type="text" id="eventName" name="eventName"></input>
                    </br>
                    <br>
                    <label for="freeform">Description of Event:</label>
                    </br>
                    <br>
                    <textarea id="freeform" name="freeform" rows="4" cols="50">
                    </textarea>
                    </br>
                    <br>
                        <label for="firstName">Event Date:</label>
                        <input type="date" name="eventDate"></input>
                    </br>
                    <br>
                        <label for="firstName">Event Time:</label>
                        <input type="time" name="eventTime"></input>
                    </br>
                    <input type="submit" value="Create Event"> </input>
                </form>             
            </div>
        </div>

    );
}

export default AddEvent;