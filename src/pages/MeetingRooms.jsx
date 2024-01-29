import { useEffect, useState } from "react";
import SingleMeetingRoom from "./SingleMeetingRoom";

const API = import.meta.env.VITE_API_URL;

function MeetingRooms() {
  const [meetingRooms, setmeetingRooms] = useState([]);

  useEffect(() => {
    fetch(`${API}/meetingRooms`)
      .then((response) => response.json())
      .then((data) => setmeetingRooms(data.data.payload))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="meetingRooms">
      <section>
        <div className="meetingRoom-search">
        <h4>Find available rooms</h4>
          <form>
            <label htmlFor="title">Start:</label>
            <input
              id="start"
              type="datetime-local"
              required
            />
            <label htmlFor="title">End:</label>
            <input
              id="end"
              type="datetime-local"
              required
            />
            <label htmlFor="floor">Floor:</label>
            <input id="floor" type="text" placeholder="Floor Number" />
            <label htmlFor="capacity">Capacity:</label>
            <input id="capacity" type="number"/>
          </form>
          <p>floor</p>
          <p>capacity</p>
          <button>Find</button>
        </div>
        <hr className="meetingRoom-newbreak" />
        <div>
          {meetingRooms.map((meetingRoom) => (
            <SingleMeetingRoom key={meetingRoom.id} meetingRoom={meetingRoom} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default MeetingRooms;
