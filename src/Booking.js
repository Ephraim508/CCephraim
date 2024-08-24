// Booking.js
import React, { useContext } from "react";
import { BookingContext } from './BookingContext';
import Navbar from "./Navbar";
import './App.css'

const Booking = () => {
  const { bookings } = useContext(BookingContext);

  return (
    <div >
       
     <div><div className="booking-head"> <h1 className="student-bookings">Student Bookings</h1></div>
    <div className="booking-container"> <div><Navbar/></div>
      {bookings.length > 0 ? (
        <ul className="booking-list">
       {bookings.map((booking, index) => (
        <div className="bookingData">
           <li key={index} className="booking-item">
           <p>Name: {booking.name}</p>
           <p>Email: {booking.email}</p>
           <p>Availability: {booking.availability}</p>
           <p>Mentor Name: {booking.mentorName}</p>
         </li>
        </div>
       ))}
     </ul>
      ) : (
       <div className="no-bookings">
         <p>No bookings available.</p>
        </div>
      )}</div></div>
    </div>
  );
};

export default Booking;
