// src/components/BookingSummary.jsx
import React from 'react';
import { useSelector } from 'react-redux';

const BookingSummary = () => {
  const bookingDetails = useSelector((state) => state.booking.bookingDetails);

  if (!bookingDetails) {
    return <p>No booking details available.</p>;
  }

  return (
    <div>
      <h1>Booking Summary</h1>
      <p>Booking ID: {bookingDetails.bookingId}</p>
      <p>Booking No: {bookingDetails.bookingNo}</p>
      <p>Package Name: {bookingDetails.packageName}</p>
      <p>City Name: {bookingDetails.cityName}</p>
      <p>No. of Passengers: {bookingDetails.noOfPassengers}</p>
      <p>Total Cost: ${bookingDetails.totalCost}</p>
      <p>Payment Status: {bookingDetails.isPaymentStatus ? 'Paid' : 'Pending'}</p>
    </div>
  );
};

export default BookingSummary;
