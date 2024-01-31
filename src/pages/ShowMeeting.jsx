import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SingleBooking from "./SingleBooking";
import grandHallImage from "/src/assets/grand-hall.jpeg";
import capImage from "/src/assets/cap-img.png";
import buildingImage from "/src/assets/building.jpeg";
const API = import.meta.env.VITE_API_URL;

const ShowMeeting = () => {
  const [meetingRoom, setMeetingRoom] = useState([]);
  const [bookings, setBookings] = useState([]);
  const { id } = useParams();
  const [booking, setBooking] = useState({
    meeting_name: "",
    startdate: "",
    enddate: "",
    attendees: "",
    meeting_room_id: id,
  });

  useEffect(() => {
    fetch(`${API}/meetingRooms/${id}`)
      .then((response) => response.json())
      .then((data) => setMeetingRoom(data.data.payload))
      .catch((error) => console.error(error));
  }, [id, API]);

  useEffect(() => {
    fetch(`${API}/meetingRooms/${id}/bookings`)
      .then((response) => response.json())
      .then((data) => setBookings(data.data.payload))
      .catch((error) => console.error(error));
  }, [id, API]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setBooking({
      meeting_name: "",
      startdate: "",
      enddate: "",
      attendees: "",
      meeting_room_id: id,
    });
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setBooking((prevBooking) => ({
      ...prevBooking,
      [id]: value,
    }));
  };
  return (
    <div>
      <div className="show-meeting">
        <div className="show-meeting-info">
          <div>
            <img src={grandHallImage} alt={`meeting room`} />
            <h3>{meetingRoom.name}</h3>
          </div>
          <div>
            <img src={capImage} alt="Capacity icon" />
            <p>Capacity: {meetingRoom.capacity}</p>
          </div>
          <div>
            <img src={buildingImage} alt="Floor icon" />
            <p>Floor: {meetingRoom.floor}</p>
          </div>
        </div>
      </div>
      <hr />
      <p>Book Room:</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="meetingName">Meeting Name:</label>
          <input
            type="text"
            id="meeting_name"
            value={booking.meeting_name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="startDate">Start:</label>
          <input
            type="datetime-local"
            id="startdate"
            value={booking.startdate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="endDate">End:</label>
          <input
            type="datetime-local"
            id="enddate"
            value={booking.enddate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="attendees">Attendees:</label>
          <input
            type="text"
            id="attendees"
            value={booking.attendees}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <hr />
      <div className="meetingRoom-bookinglist">
        {bookings.map((booking) => (
          <SingleBooking key={booking.id} booking={booking} />
        ))}
      </div>
    </div>
  );
};

export default ShowMeeting;
