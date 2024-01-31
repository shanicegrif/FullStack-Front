import React from "react";
import { Link } from "react-router-dom";
import grandHallImage from "/src/assets/grand-hall.jpeg";
import capImage from "/src/assets/cap-img.png";
import buildingImage from "/src/assets/building.jpeg";

const SingleMeetingRoom = ({ meetingRoom, id }) => {
  const {name, capacity, floor } = meetingRoom;

  return (
    <article className="meeting-card">
      <aside className="meeting-card-info">
        <div>
          <img src={grandHallImage} alt={`${name} meeting room`} />
          <Link to={`/meetingRooms/${id}`}>
            <h3>{name}</h3>
          </Link>
        </div>
        <div>
          <img src={capImage} alt="Capacity icon" />
          <p>Capacity: {capacity}</p>
        </div>
        <div>
          <img src={buildingImage} alt="Floor icon" />
          <p>Floor: {floor}</p>
        </div>
      </aside>
    </article>
  );
};

export default SingleMeetingRoom;