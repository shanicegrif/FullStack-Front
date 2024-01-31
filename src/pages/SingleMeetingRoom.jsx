import React from "react";
import pic from "/src/assets/grand-hall.jpeg";

const SingleMeetingRoom = ({ meetingRoom }) => {
  const { name, capacity, floor } = meetingRoom;
  return (
    <article className="meeting-card">
      <aside className="meeting-card-info">
        <div className="meeting-card-img"> 
          <img src={pic} alt="grand-hall" />
          <h3>{name}</h3>
        </div>
        <p>Capacity: {capacity}</p>
        <p>Floor: {floor}</p>
      </aside>
    </article>
  );
};

export default SingleMeetingRoom;
