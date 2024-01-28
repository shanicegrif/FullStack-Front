import { useEffect, useState } from "react";
import SingleMeetingRoom from "./SingleMeetingRoom";

const API = import.meta.env.API_URL;

function MeetingRooms() {
  const [meetingRooms, setmeetingRooms] = useState([]);

  useEffect(() => {
    fetch(`${API}/meetingRooms`)
    .then((response) => response.json())
    .then((data) => setmeetingRooms(data.data.payload))
    .catch((error) => console.error(error))
  }, []);

  return (
    <div className="meetingRooms">
      <section>
        <table>
          <thead>
          </thead>
          <tbody>
            {meetingRooms.map((meetingRoom) => (
              <meetingRoom key={meetingRoom.meetingRoom_id} meetingRoom={meetingRoom} />
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default meetingRooms;