import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EventSpace from '../pages/EventSpace';

const NewEventSpace = () => {
  const [eventSpaces, setEventSpaces] = useState([]);

  useEffect(() => {
    const fetchNewEventSpaces = async () => {
      try {
        const spaces = await getMeetingRooms();
        setEventSpaces(spaces);
      } catch (error) {
        console.error('Error fetching event spaces:', error);
      }
    };

    fetchNewEventSpaces();
  }, []);

  return (
    <div className="container event-space">
      <h2>Event Spaces</h2>
      <ul className="event-space-list">
        {eventSpaces.map(space => (
          <li key={space.id} className="event-space-list-item">
            <Link to={`/event-spaces/${space.id}`}>
              {space.name} - {space.location}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewEventSpace;