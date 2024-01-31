import React from "react";
import grand from "/src/assets/grand-hall.jpeg";
import cap from "/src/assets/cap-img.png";
import building from "/src/assets/building.jpeg";

const SingleMeetingRoom = ({ meetingRoom }) => {
  const { name, capacity, floor } = meetingRoom;
  return (
    <article className="meeting-card">
      <aside className="meeting-card-info">
        <div>
          <img src={grand} alt="grand-hall" />
          <h3>{name}</h3>
        </div>
        <div>
          <img src={cap} alt="grand-hall" />
          <p>Capacity: {capacity}</p>
        </div>
        <div>
          <img src={building} alt="grand-hall" />
          <p>Floor: {floor}</p>
        </div>
      </aside>
    </article>
  );
};

export default SingleMeetingRoom;
