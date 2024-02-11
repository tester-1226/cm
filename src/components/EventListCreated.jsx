import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import "../css/global.css";
import Leaves from "../images/material_leaves.jpg";

const EventList = (props) => {
    const eArray = [
        {
            "date": "2025-01-01",
            "description": "testEvent",
            "location": "EventLocation",
            "name": "EventName",
            "time": "23:59",
            "uid": "LZx2cXcdVteKGwltsdWxj0tDoZG3"
        },
        {
            "date": "2025-12-12",
            "description": "testEvent2",
            "location": "EventLocation2",
            "name": "EventName2",
            "time": "12:00",
            "uid": "LZx2cXcdVteKGwltsdWxj0tDoZG3"
          },
        {
        "date": "2026-06-02",
        "description": "abcDesc",
        "location": "abcLocation",
        "name": "abcEvent",
        "time": "18:06",
        "uid": "VomvuRSE3eUKhZMMjlNNp9jUqeZ2"
        },
    ];
    const [events, setEvents] = useState('');

    useEffect(() => {
        setEvents(eArray);
    }, []);
    
    let itemsArr = [...events].sort((a, b) => {
        if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          // a must be equal to b
          return 0;
    });

    return (
        <div className="list-container">
            <div className="list-title">
                Upcoming Events
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
                            RSVP
                        </button>
                    </div>
                </div>
                )}
            </div>
        </div>
    );
}

export default EventList;
