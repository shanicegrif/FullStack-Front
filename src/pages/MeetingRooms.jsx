import { useEffect, useState } from "react";
import SingleMeetingRoom from "./SingleMeetingRoom";

const API = import.meta.env.VITE_API_URL;

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
        <div>
            {meetingRooms.map((meetingRoom) => (
              <SingleMeetingRoom key={meetingRoom.meetingRoom_id} meetingRoom={meetingRoom} />
            ))}
        </div>
      </section>
    </div>
  );
}

export default MeetingRooms;