import { useState } from "react";
import { postNewRoom } from "../api/fetch";
import { useNavigate } from "react-router-dom";

export default function NewRoomForm(){
    const [ roomInfo, setRoomInfo ] = useState({
        name:"",
        capacity:0,
        floor:1,
    });
    const nav = useNavigate();

    const handleTextChange = (event) => {
        setRoomInfo({ ...roomInfo, [event.target.id]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        postNewRoom(roomInfo)
          .then(() => {
            console.log("create success!");
            // put nav here
          })
          .catch((err) => console.error(err));
    };

    return(
        <div className="new-room-form-container">
            <h2>Create a Room</h2>
            <form>
                <label>Room Name:</label>
                <input type="text" id="name" value={roomInfo.name} onChange={handleTextChange} placeholder="name of the room" required />
                <label>Floor:</label>
                <input type="text" id="capacity" value={roomInfo.floor} onChange={handleTextChange} placeholder="# of floor" required />
                <label>Capacity:</label>
                <input type="number" id="floor" value={roomInfo.capacity} onChange={handleTextChange} placeholder="room capacity" required />
                <input className="form-submit" type="submit" value="Submit" />
            </form>
        </div>
    )
}