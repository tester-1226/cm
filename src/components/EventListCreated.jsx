import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import "../css/global.css";
import Leaves from "../images/material_leaves.jpg";

const EventListCreated = (props) => {
    const eArray = [
            {
            "date": "2024-03-12",
            "description": "Come join us on a tree plantation drive across town , to help make the world a better place to live and breathe for the future generations",
            "location": "Athens",
            "name": "Trees Matter",
            "time": "07:30",
            "uid": "LZx2cXcdVteKGwltsdWxj0tDoZG3"
            }
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
                Events You Created
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
                            Delete
                        </button>
                    </div>
                </div>
                )}
            </div>
        </div>
    );
}

export default EventListCreated;
