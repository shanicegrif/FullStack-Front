import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
        <h3>{meetingRoom.name}</h3>
        <p>Capacity: {meetingRoom.capacity}</p>
        <p>Floor: {meetingRoom.floor}</p>
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
    </div>
  );
};

export default ShowMeeting;
