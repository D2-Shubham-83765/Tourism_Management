import React, { useState } from 'react';
import './PassengerPage.css';  // Assuming you'll add some basic styling

const PassengerPage = () => {
    const [passengers, setPassengers] = useState([]);
    const [passenger, setPassenger] = useState({
        name: '',
        age: '',
        gender: '',
        email: '',
        adhar: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Ensure that the adhar number only accepts up to 12 digits
        if (name === 'adhar' && (value.length > 12 || isNaN(value))) {
            return;
        }

        setPassenger({ ...passenger, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if the adhar number is exactly 12 digits
        if (passenger.adhar.length !== 12) {
            alert('Aadhar number must be exactly 12 digits.');
            return;
        }

        setPassengers([...passengers, passenger]);
        setPassenger({ name: '', age: '', gender: '', email: '', adhar: '' });  // Reset form
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
                        name="adhar" 
                        value={passenger.adhar} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <button type="submit">Add Passenger</button>
            </form>

            <h3>Passenger List</h3>
            <table className="passenger-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Email</th>
                        <th>Adhar</th>
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
        </div>
    );
};

export default PassengerPage;
