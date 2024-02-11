import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import "../css/global.css";
import Leaves from "../images/material_leaves.jpg";
import { message } from 'antd';

const EventList = (props) => {
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
        {
        "date": "2024-04-28",
        "description": "Come by to the art exhibit and show our support to the aspiring artists of our community.",
        "location": "Museum of Art. 90 Carlton St, Athens, GA 30602.",
        "name": "Upcoming Artists Art Exhibition",
        "time": "12:00",
        "uid": "LZx2cXcdVteKGwltsdWxj0tDoZG3"
        },
        {
        "date": "2024-02-11",
        "description": "Celebrate diversity with music, dance, food, and crafts from different cultures.",
        "location": "Tate Center",
        "name": "Cultural Night",
        "time": "18:00",
        "uid": "LZx2cXcdVteKGwltsdWxj0tDoZG3"
        },
        {
        "date": "2024-07-29",
        "description": "Conduct workshops on topics like gardening, cooking, photography, or DIY crafts.",
        "location": "Life sciences ",
        "name": "Workshop Series",
        "time": "08:00",
        "uid": "LZx2cXcdVteKGwltsdWxj0tDoZG3"
        },
        {
        "date": "2024-02-12",
        "description": " Arrange a friendly competition in sports like soccer, basketball, or volleyball.",
        "location": "IM Fields",
        "name": "Sports Tournament",
        "time": "15:00",
        "uid": "LZx2cXcdVteKGwltsdWxj0tDoZG3"
        },
        {
        "date": "2024-05-23",
        "description": "Enjoy a book club gathering to discuss literature and foster a love for reading in the community.",
        "location": "Sandy Creek Park",
        "name": "Book Club Meeting",
        "time": "16:00",
        "uid": "LZx2cXcdVteKGwltsdWxj0tDoZG3"
        },
        {
        "date": "2024-02-26",
        "description": "Let's all band together and donate some food to help the people of our community.",
        "location": "Community Center of Athens",
        "name": "Food Drive",
        "time": "19:00",
        "uid": "LZx2cXcdVteKGwltsdWxj0tDoZG3"
        },
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
                        <button class = "small-material-button rsvp-button" onClick={(e) => {message.success("Successfully RSVP'd")}}>
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
