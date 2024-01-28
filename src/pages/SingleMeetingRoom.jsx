import React from 'react';
import PropTypes from 'prop-types';


const SingleMeetingRoom = () => {
  return (
    <>
    <div>
      <h1> Single meeting room </h1>
      <p>book room {roominfo}</p>
      <p>Meeting name</p>
      <p>start</p>
      <p>end</p>
      <p> attendees</p>
      <button>submit</button>
    </div>
      <div>
        //map through bookings by meeting ID
      </div>
    </>

  );
};

export default SingleMeetingRoom;
