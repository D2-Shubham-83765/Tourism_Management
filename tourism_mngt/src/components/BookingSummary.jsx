<<<<<<< HEAD
// Importing React library and the useSelector hook from React Redux
=======
>>>>>>> 2fa1b315ec7cc5fe5590c2803d99413733af7ad7
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BookingSummary.css';
import axios from 'axios';
import config from '../config';
import {toast} from 'react-toastify';

// BookingSummary component definition
const BookingSummary = () => {
<<<<<<< HEAD
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
=======
    const navigate = useNavigate();

   const bookingNo = localStorage.getItem('bookingNo') || 'Not Available';
    const packageName = localStorage.getItem('selectedPackageName') || 'Not Available';
    const cityName = localStorage.getItem('selectedCityName') || 'Not Available';
    const hotelName = localStorage.getItem('hotelName') || 'Not Available';
    const totalPrice = parseFloat(localStorage.getItem('totalPrice')) || 0;
    const noOfPassengers = parseInt(localStorage.getItem('noOfPassengers')) || 0;
    const totalCost = totalPrice * noOfPassengers;

    const handlePayment = async () => {
      try {
          await axios.put(`${config.url}/booking/update-payment-status`, {
              bookingNo,
              paymentStatus: true // Update this according to your payment status
          });
          navigate('/payment-confirmation');
      } catch (error) {
          console.error('Failed to update payment status:', error);
          alert('An error occurred while processing the payment.');
      }
  };

    return (
        <div className="booking-summary">
            <h1 className="summary-title">Booking Summary</h1>
            <div className="summary-details">
                <div className="summary-item">
                    <span className="summary-label">Package Name:</span>
                    <span className="summary-value">{packageName}</span>
                </div>
                <div className="summary-item">
                    <span className="summary-label">City Name:</span>
                    <span className="summary-value">{cityName}</span>
                </div>
                <div className="summary-item">
                    <span className="summary-label">Hotel Name:</span>
                    <span className="summary-value">{hotelName}</span>
                </div>
                <div className="summary-item">
                    <span className="summary-label">Number of Passengers:</span>
                    <span className="summary-value">{noOfPassengers}</span>
                </div>
                <div className="summary-item">
                    <span className="summary-label">Total Cost:</span>
                    <span className="summary-value">₹ {totalCost.toFixed(2)}</span>
                </div>
            </div>
            <button className="go-to-booking-button" onClick={handlePayment}>
               Pay Now
            </button>
        </div>
    );
>>>>>>> 2fa1b315ec7cc5fe5590c2803d99413733af7ad7
};

// Exporting the BookingSummary component as the default export
export default BookingSummary;

