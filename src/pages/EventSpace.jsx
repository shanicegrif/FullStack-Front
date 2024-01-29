
import  { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types'; // Import PropTypes

import { getOneMeetingRoom } from '../api/fetch';

const EventSpace = ({ name, location }) => {
  const { id } = useParams();
  const [eventSpace, setEventSpace] = useState(null);

  const loading = eventSpace === null;

  useEffect(() => {
    const fetchEventSpace = async () => {
      try {
        const space = await getOneMeetingRoom(id);
        setEventSpace(space);
      } catch (error) {
        console.error(`Error fetching event space with id ${id}:`, error);
      }
    };

    fetchEventSpace();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!eventSpace) {
    return <div>Error loading data</div>;
  }

  return (
    <div className="container">
      <h2>{eventSpace.name}</h2>
      <p>Location: {eventSpace.location}</p>
      <Link to={`/event-spaces/${id}/edit`}>Edit Event Space</Link>
    </div>
  );
};


EventSpace.propTypes = {
  name: PropTypes.string, 
  location: PropTypes.string, 
};

export default EventSpace;
