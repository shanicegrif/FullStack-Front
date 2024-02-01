import React from "react";

const HomePage = () => {
  return (
    <div className="homepage">
      <header>
        <h1>Welcome to The Nifel Towers</h1>
        <p>Your one-stop solution for meetings and bookings</p>
      </header>
      <section className="cta-section">
        <p>Book a meeting room now and make your events memorable! Or if you already have a meeting check the time and schedule of the meeting.</p>
      </section>
      <section className="features-section">
        <h2>Key Features</h2>
        <ul>
          <li>Easy and quick meeting room bookings</li>
          <li>Flexible scheduling options</li>
          <li>Comfortable and modern meeting spaces</li>
        </ul>
      </section>
      <section className="about-section">
        <h2>About Us</h2>
        <p>
          The Nifel Towers is dedicated to providing state-of-the-art meeting
          spaces for your business needs. Our mission is to make your events
          successful and hassle-free.
        </p>
      </section>
      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>
          Have questions or need assistance? Contact our support team at{' '}
          <a href="mailto:support@nifeltowers.com">support@nifeltowers.com</a>.
        </p>
      </section>
      <footer>
        <p>&copy; 2024 The Nifel Towers. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
