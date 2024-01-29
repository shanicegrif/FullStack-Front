import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/Navbar"

import Bookings from "./pages/Bookings";
import MeetingRooms from "./pages/MeetingRooms";
import NewMeetingRooms from "./pages/NewMeetingRooms";
import SingleMeetingRoom from "./pages/SingleMeetingRoom";
import FourOFour from "./pages/FourOFour";
import Home from "./pages/Home";
import NewRoom from "./pages/NewRoom";
import BookingDetails from "./pages/BookingDetails";
import NewEventSpace from './components/NewEventSpace';

import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div className="App">
      <Router>
        <NavBar />
        <main class="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<FourOFour />} />
            <Route path="/bookings" element={<Bookings/>} />
            <Route path="/bookings/new" element={<NewRoom/>} />
            <Route path="/meetingRooms" element={<MeetingRooms/>} />
            <Route path="/meetingRooms/:id" element={<SingleMeetingRoom/>} />
            <Route path="/meetingRooms/new" element={<NewMeetingRooms/>} />
            <Route path="/meetingRooms/:id/bookings" element={<BookingDetails/>} /> 
            <Route path="/event-spaces" element={<NewEventSpace />} />         
            </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App
