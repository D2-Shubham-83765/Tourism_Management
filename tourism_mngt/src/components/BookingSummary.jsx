// Importing React library and the useSelector hook from React Redux
import React from 'react';
import { useSelector } from 'react-redux';

// BookingSummary component definition
const BookingSummary = () => {
  // Access booking details from the Redux store
  const bookingDetails = useSelector((state) => state.booking.bookingDetails);

  // Check if booking details are not available
  if (!bookingDetails) {
    return <p>No booking details available.</p>; // Return a message if no booking details are found
  }

  // Render the booking summary if booking details are available
  return (
    <div>
      {/* Display the booking summary */}
      <h1>Booking Summary</h1>
      <p>Booking ID: {bookingDetails.bookingId}</p> {/* Display booking ID */}
      <p>Booking No: {bookingDetails.bookingNo}</p> {/* Display booking number */}
      <p>Package Name: {bookingDetails.packageName}</p> {/* Display package name */}
      <p>City Name: {bookingDetails.cityName}</p> {/* Display city name */}
      <p>No. of Passengers: {bookingDetails.noOfPassengers}</p> {/* Display number of passengers */}
      <p>Total Cost: ${bookingDetails.totalCost}</p> {/* Display total cost */}
      <p>Payment Status: {bookingDetails.isPaymentStatus ? 'Paid' : 'Pending'}</p> {/* Display payment status */}
    </div>
  );
};

// Exporting the BookingSummary component as the default export
export default BookingSummary;
