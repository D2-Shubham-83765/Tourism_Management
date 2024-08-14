// src/components/BookingForm.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'; // Ensure you have react-router-dom installed
import { updateBookingField } from '../redux/bookingSlice';

const BookingForm = () => {
  const bookingData = useSelector((state) => state.booking);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateBookingField({ field: name, value }));
  };

  const handleBookingSubmission = (bookingData) => {
    fetch('/api/bookings', {
      method: 'POST',
      body: JSON.stringify(bookingData),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => {
        // Save booking details to Redux store or state
        dispatch(updateBookingField({ field: 'bookingDetails', value: data }));

        // Redirect to booking summary page
        history.push('/booking-summary');
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleBookingSubmission(bookingData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <div> */}
        {/* <label>Booking No:</label>
        <input
          type="text"
          name="bookingNo"
          value={bookingData.bookingNo}
          onChange={handleChange}
          required
        />
      </div> */}

      <div>
        <label>Package Name:</label>
        <input
          type="text"
          name="packageName"
          value={bookingData.packageName}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>City Name:</label>
        <input
          type="text"
          name="cityName"
          value={bookingData.cityName}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>No. of Passengers:</label>
        <input
          type="number"
          name="noOfPassengers"
          value={bookingData.noOfPassengers}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Total Cost:</label>
        <input
          type="number"
          step="0.01"
          name="totalCost"
          value={bookingData.totalCost}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Submit Booking</button>
    </form>
  );
};

export default BookingForm;
