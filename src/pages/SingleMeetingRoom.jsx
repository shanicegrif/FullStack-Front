import React from "react";

const SingleMeetingRoom = ({ meetingRoom }) => {
  const { name, capacity, floor } = meetingRoom;
  return (
    <article className="meeting-card">
      <aside className="meeting-card-info">
        <h3>{name}</h3>
        <p>Capacity: {capacity}</p>
        <p>Floor: {floor}</p>
      </aside>
    </article>
  );
};

export default SingleMeetingRoom;
