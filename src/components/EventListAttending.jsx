import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import "../css/global.css";
import Leaves from "../images/material_leaves.jpg";

const EventListAttending = (props) => {
    const eArray = [
        {
            "date": "2024-02-15",
            "description": "Come help cleanup the area around UGA and make our campus pretty again.",
            "location": "MLC",
            "name": "UGA Campus Cleanup",
            "time": "12:00",
            "uid": "LZx2cXcdVteKGwltsdWxj0tDoZG3"
            },
            {
            "date": "2024-07-05",
            "description": "Let's all get together and celebrate with Jake to make hi's birthday amazing!",
            "location": "1785 Bar and Grill, Athens, GA 30601",
            "name": "Jake's Birthday ",
            "time": "20:00",
            "uid": "LZx2cXcdVteKGwltsdWxj0tDoZG3"
            },
            {
            "date": "2024-06-08",
            "description": "Let's all get together at the lake, enjoy a nice summer day, and make some new friends!",
            "location": "Lake Lanier. Lower Overlook Rd, Buford, GA 30518",
            "name": "Summer Picnic",
            "time": "17:00",
            "uid": "LZx2cXcdVteKGwltsdWxj0tDoZG3"
            },
    ];
    const [events, setEvents] = useState('');

    useEffect(() => {
        setEvents(eArray);
    }, []);
    
    let itemsArr = [...events].sort((a, b) => {
        if (a.date < b.date) {
            return -1;
          }
          if (a.date > b.date) {
            return 1;
          }
          // a must be equal to b
          return 0;
    });

    return (
        <div className="list-container">
            <div className="list-title">
                Events You're Attending
            </div>
            <div class = "material-listwrapper">
                {itemsArr.map((event) => 
                <div class = "material-eventbox">
                    <div class="image">
                        <img src={Leaves} />
                    </div>
                    <div class="info">
                        <div class="top">
                            {event.name}
                        </div>
                        <div class="middle section">
                            {event.description}
                        </div>
                        <div class="bottom">
                            [{event.location}] - [{event.date}] - [{event.time}]
                        </div>
                        <button class = "small-material-button rsvp-button">
                            Cancel
                        </button>
                    </div>
                </div>
                )}
            </div>
        </div>
    );
}

export default EventListAttending;
