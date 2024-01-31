import React from "react";

const SingleBooking = ({ booking }) => {
  const { meeting_name, startdate, enddate } = booking;

  const formatDateTime = (dateTimeString) => {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      timeZoneName: 'short',
    };

    const formattedDateTime = new Date(dateTimeString).toLocaleString('en-US', options);
    return formattedDateTime;
  };


  const formattedStartDate = formatDateTime(startdate);
  const formattedEndDate = formatDateTime(enddate);

  return (
    <article className="booking-card">
      <aside className="booking-card-info">
        <h3>{meeting_name}</h3>
        <p>Start: {formattedStartDate}</p>
        <p>End: {formattedEndDate}</p>
      </aside>
    </article>
  );
};

export default SingleBooking;
