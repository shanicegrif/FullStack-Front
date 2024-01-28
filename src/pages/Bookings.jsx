import { useEffect, useState } from "react";
import SingleBooking from "./SingleBooking";

const API = import.meta.env.API_URL;

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
        <table>
          <thead>
          </thead>
            <tbody>
              {bookings.map((SingleBooking) => (
                <SingleBooking key={SingleBooking.id} SingleBooking={SingleBooking} />
              ))}
            </tbody>
        </table>
      </section>
    </div>
  );
}

export default Bookings;