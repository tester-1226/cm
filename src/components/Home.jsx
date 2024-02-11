import React from 'react'
import Navbar from './Navbar';
import EventList from './EventList';


const Home = (props) => {
    return (
        <div>
            <Navbar/>
            <EventList />
        </div>
    );
}

export default Home;