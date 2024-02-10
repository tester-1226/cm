import React from 'react'
import '../css/event.css';
const Event = (props) => {
    return (
        <div>
            <div align = "center">
                <button class = "form-eventImage-button">
                    Event Image
                </button>
            </div>
            <div align = "center">
                <p>
                    Event Name:
                </p>
            </div>
            <div align = "center">
                <p>
                    Event Name:
                </p>
            </div>

            <div align = "center">
                <p>
                    Description:
                </p>
            </div>

            <div align = "center">
                <p>
                     Date:
                </p>
            </div>

            <div align = "center">
                <p>
                     Time:
                </p>
            </div>

            <div align = "center">
                <p>
                     Location:
                </p>
            </div>

             <div align = "center">
                <button class="form-RSVP-button">RSVP</button>
             </div>
        </div>
    );
}

export default Event;