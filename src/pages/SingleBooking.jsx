import React from "react";

const SingleBooking = ({booking}) => {
  const {meeting_name, startdate, enddate} = booking;

  return (
    <article className="booking-card">
      <aside className="booking-card-info">
        <h3>{meeting_name}</h3>
        <p>Start: {startdate}</p>
        <p>End: {enddate}</p>
      </aside>
    </article>
  )
}

export default SingleBooking;