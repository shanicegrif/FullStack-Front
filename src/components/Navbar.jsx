import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <header>Nifle Towers</header>
      <button>
        <Link to="/meetingRooms">Meeting Rooms</Link>
      </button>
      <button>
        <Link to="/bookings">Bookings</Link>
      </button>
      <button>
        <Link to="/meetingRooms/new">New Meeting Rooms</Link>
      </button>
    </nav>
  );
}
