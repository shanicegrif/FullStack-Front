import { useState } from "react";
import { useNavigate } from "react-router-dom";
const API = import.meta.env.VITE_API_URL;

export default function NewMeetingRoomForm() {
  const [roomInfo, setRoomInfo] = useState({
    name: "",
    capacity: "",
    floor: "",
  });
  const navigate = useNavigate();

  const handleTextChange = (event) => {
    const { id, value } = event.target;

    if (id === "floor") {
      const parsedValue = value.trim() !== "" ? parseInt(value, 10) : "";

      if (!isNaN(parsedValue) || value.trim() === "") {
        setRoomInfo({ ...roomInfo, [id]: parsedValue });
      }
    } else if (id === "capacity") {
      const parsedValue = value.trim() !== "" ? parseInt(value, 10) : "";

      if (!isNaN(parsedValue) || value.trim() === "") {
        setRoomInfo({ ...roomInfo, [id]: parsedValue });
      }
    } else {
      setRoomInfo({ ...roomInfo, [id]: value });
    }
  };

  const addMeeting = () => {
    fetch(`${API}/meetingRooms`, {
      method: "POST",
      body: JSON.stringify(roomInfo),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        navigate(`/meetingRooms`);
      })
      .catch((error) => console.error("catch", error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addMeeting();
  };

  return (
    <div className="new-room-form-container">
      <form onSubmit={handleSubmit}>
        <div className="block">
          <label>Room Name:</label>
          <input
            type="text"
            id="name"
            value={roomInfo.name}
            onChange={handleTextChange}
            placeholder="name of the room"
            required
          />
        </div>
        <div className="block">
          <label>Floor:</label>
          <input
            type="number"
            id="floor"
            value={roomInfo.floor}
            onChange={handleTextChange}
            placeholder="# of floor"
            required
          />
        </div>
        <div className="block">
          <label>Capacity:</label>
          <input
            type="number"
            id="capacity"
            value={roomInfo.capacity}
            onChange={handleTextChange}
            placeholder="room capacity"
            required
          />
        </div>
        <div className="new-room-form-button">
          <button type="submit" className="newButton">
            Create Room
          </button>
        </div>
      </form>
    </div>
  );
}
