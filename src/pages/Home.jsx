import {useState} from 'react';
import FindAvailableRoom from '../components/FindAvailableRoomsForm';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to The NIfel Towers</h1>
      <FindAvailableRoom />
    </div>
  );
};

export default HomePage;
