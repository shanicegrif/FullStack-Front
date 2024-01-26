import { useState } from "react";

export default function NewRoomForm(){
    const [ roomInfo, setRoomInfo ] = useState({
        name:"",
        capacity:0,
        floor:0,
    });

    const handleTextChange = (event) => {
        setSinglePost({ ...roomInfo, [event.target.id]: event.target.value });
    };

    return(
        <div className="new-room-form-container">
            <h2>Create a Room</h2>
            <form>
                <label>Room Name:</label>
                <input type="text" id="name"></input>
                <label>Floor:</label>
                <input type="text" id="capacity"></input>
                <label>Capacity:</label>
                <input type="number" id="floor"></input>
                <button></button>
            </form>
        </div>
    )
}