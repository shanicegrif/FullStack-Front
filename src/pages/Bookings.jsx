import { useEffect, useState } from "react";
import SingleBooking from "./SingleBooking";

const API = import.meta.env.VITE_API_URL;

function Bookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch(`${API}/bookings`)
      .then((response) => response.json())
      .then((data) => setBookings(data.data.payload))
      .catch((error) => console.error(error))
  }, []);

  return (
    <div className="bookings">
      <section>
       <div>
          {bookings.map((booking) => (
            <SingleBooking key={booking.booking_id} booking={booking} />
          ))}
       </div>
  
      </section>
    </div>
  );
}

export default Bookings;