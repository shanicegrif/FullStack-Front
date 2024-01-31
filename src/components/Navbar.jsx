import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <Link to="/meetingRooms">
        <button>Meeting Rooms</button>
      </Link>
      <Link to="/bookings">
        <button>Bookings</button>
      </Link>
      <Link to="/meetingRooms/new">
        <button>New Meeting Room</button>
      </Link>
    </nav>
  );
}
