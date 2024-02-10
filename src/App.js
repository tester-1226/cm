import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom';

import Home from "./components/Home"
import Login from "./components/Login"
import Register from "./components/Register"
import Events from "./components/Events"
import Profile from "./components/Profile"
import AddEvent from "./components/AddEvent"
import Event from "./components/Event"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/events" element={<Events/>}></Route>
      <Route path="/profile" element={<Profile/>}></Route>
      <Route path="/add-event" element={<AddEvent/>}></Route>
      <Route path="/event" element={<Event/>}></Route>
    </Routes>
  );
}

export default App;
