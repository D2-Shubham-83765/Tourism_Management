import React, { useState } from 'react';
import './PassengerPage.css'; 
import { useNavigate } from 'react-router-dom';
import config from '../config';
import axios from 'axios';

const PassengerPage = () => {
    const [passengers, setPassengers] = useState([]);
    const [passenger, setPassenger] = useState({
        name: '',
        age: '',
        gender: '',
        email: '',
        aadhaar: '',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate(); 

   
    const handleChange = (e) => {
        const { name, value } = e.target; 

        // Ensure that the adhar number only accepts up to 12 digits
        if (name === 'aadhaar' && (value.length > 12 || isNaN(value))) {
            return;
        }

        setPassenger({ ...passenger, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if the adhar number is exactly 12 digits
        if (passenger.aadhaar.length !== 12) {
            alert('Aadhaar number must be exactly 12 digits.');
            return;
        }

        const bookingNo = localStorage.getItem('bookingNo');

        const passengerWithBooking = { ...passenger, bookingNo };

        setLoading(true);
        setError(null)

        try {
            const response = await axios.post(`${config.url}/traveller`, passengerWithBooking);
            setPassengers([...passengers, response.data]);
            setPassenger({ name: '', age: '', gender: '', email: '', aadhaar: '' });  // Reset form
        } catch (error) {
            setError(error.response?.data?.message || 'Failed to add passenger');
        } finally {
            setLoading(false);
        }
    };
   
    const viewBookingSummary = () => {
        navigate('/booking-summary'); // Adjust the path to your payments page route
    };

    const goBack = () => {
        navigate(-1); // Go back to the previous page
    };
    
    return (

        
    
        <div className="passenger-page">
            
            <h2>Passenger Details</h2>

            <form onSubmit={handleSubmit} className="passenger-form">
                <div>
                    <label>Name:</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={passenger.name} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div>
                    <label>Age:</label>
                    <input 
                        type="number" 
                        name="age" 
                        value={passenger.age} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div>
                    <label>Gender:</label>
                    <select 
                        name="gender" 
                        value={passenger.gender} 
                        onChange={handleChange} 
                        required
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div>
                    <label>Email:</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={passenger.email} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div>
                    <label>Adhar:</label>
                    <input 
                        type="number" 
                        name="aadhaar" 
                        value={passenger.aadhaar} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <button type="submit">Add Passenger</button>
            </form>
 <br /> <br />
            <h3>Passenger List</h3>
            <table className="passenger-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Email</th>
                        <th>Aadhar</th>
                    </tr>
                </thead>
                <tbody>
                    {passengers.map((p, index) => (
                        <tr key={index}>
                            <td>{p.name}</td>
                            <td>{p.age}</td>
                            <td>{p.gender}</td>
                            <td>{p.email}</td>
                            <td>{p.adhar}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

      
                <button onClick={viewBookingSummary} className="go-to-booking-button">
                    View Booking Summary
                </button>
        </div>

        
    );
};

export default PassengerPage;
