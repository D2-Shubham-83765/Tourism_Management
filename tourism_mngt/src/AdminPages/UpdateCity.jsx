import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';
import { toast } from 'react-toastify';
import { useParams, useNavigate } from 'react-router-dom';

export default function UpdateCity() {
    const { id } = useParams(); // Get the city ID from the route
    const [name, setName] = useState('');
    const [cityDetails, setCityDetails] = useState('');
    const [cityImage, setCityImage] = useState(null);
    const [day1Description, setDay1Description] = useState('');
    const [day2Description, setDay2Description] = useState('');
    const [day3Description, setDay3Description] = useState('');
    const [day4Description, setDay4Description] = useState('');
    const [duration, setDuration] = useState('');
    const [startingDate, setStartingDate] = useState('');
    const [endingDate, setEndingDate] = useState('');
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');
    const [package_id, setPackageId] = useState('');
    const [currentCityImage, setCurrentCityImage] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchCityData = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    throw new Error("No token found");
                }
                console.log("Token:", token); // Log token to verify
                console.log("Fetching data from:", `${config.url}/cities/${id}`);
                
                const response = await axios.get(`${config.url}/cities/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
    
                console.log("City Data:", response.data); // Log response data for debugging
    
                const city = response.data;
                setName(city.name);
                setCityDetails(city.cityDetails);
                setCurrentCityImage(city.cityImage);
                setDay1Description(city.day1Description);
                setDay2Description(city.day2Description);
                setDay3Description(city.day3Description);
                setDay4Description(city.day4Description);
                setDuration(city.duration);
                setStartingDate(city.startingDate);
                setEndingDate(city.endingDate);
                setLocation(city.location);
                setPrice(city.price);
                setPackageId(city.package_id);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching city data:", error.response ? error.response.data : error.message);
                setError(`Failed to fetch city data: ${error.response ? error.response.data.message : error.message}`);
                setLoading(false);
            }
        };
    
        fetchCityData();
    }, [id]);
    

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        
        const formData = new FormData();
        formData.append('name', name);
        formData.append('cityDetails', cityDetails);
        if (cityImage) formData.append('cityImage', cityImage);
        formData.append('day1Description', day1Description);
        formData.append('day2Description', day2Description);
        formData.append('day3Description', day3Description);
        formData.append('day4Description', day4Description);
        formData.append('duration', duration);
        formData.append('startingDate', startingDate);
        formData.append('endingDate', endingDate);
        formData.append('location', location);
        formData.append('price', price);
        formData.append('package_id', package_id);

        try {
            const token = localStorage.getItem('token');
            await axios.put(`${config.url}/cities/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`,
                }
            });
            toast.success('City updated successfully!');
            navigate(`/cities/${id}`);
        } catch (error) {
            toast.error('Error updating city');
            console.error("Error updating city:", error.response ? error.response.data : error.message); // Log detailed error
            alert('Failed to update city. Please try again.');
        }
    };

    if (loading) {
        return (
            <div style={{ textAlign: 'center', padding: '20px' }}>
                <p>Loading...</p>
            </div>
        );
    }

    if (error) {
        return <div style={{ color: 'red', textAlign: 'center', padding: '20px' }}>{error}</div>;
    }

    return (
        <div style={{
            maxWidth: 600,
            margin: '40px auto',
            padding: 20,
            border: '5px solid #ddd',
            borderRadius: 10,
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
        }}>
            <div style={{
                textAlign: 'center',
                marginBottom: 20
            }}>
                <h2 style={{
                    fontWeight: 'bold',
                    color: '#333'
                }}>Update City</h2>
            </div>
            <form onSubmit={handleFormSubmit}>
                <label style={{ display: 'block', marginBottom: 5 }}>City Name</label>
                <input
                    type="text"
                    placeholder="e.g., Paris"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    style={{ width: '100%', height: 40, padding: 10, border: '1px solid #ccc', borderRadius: 5, marginBottom: '10px' }}
                />
                <br />
                <label style={{ display: 'block', marginBottom: 5 }}>City Details</label>
                <textarea
                    placeholder="Add Details"
                    value={cityDetails}
                    onChange={(e) => setCityDetails(e.target.value)}
                    required
                    style={{ width: '100%', height: 100, padding: 10, border: '1px solid #ccc', borderRadius: 5, marginBottom: '10px' }}
                />
                <br />
                <label style={{ display: 'block', marginBottom: 5 }}>Upload Image</label>
                <input
                    type="file"
                    onChange={(e) => setCityImage(e.target.files[0])}
                    style={{ width: '100%', height: 50, padding: 10, border: '1px solid #ccc', borderRadius: 5, marginBottom: '20px' }}
                />
                {currentCityImage && (
                    <div>
                        <img
                            src={`data:image/jpeg;base64,${currentCityImage}`}
                            alt="Current City"
                            style={{ width: '100%', height: 'auto', borderRadius: 5, marginBottom: '20px' }}
                        />
                    </div>
                )}
                <br />
                <label style={{ display: 'block', marginBottom: 5 }}>Day 1 Description</label>
                <textarea
                    placeholder="Day 1 Description"
                    value={day1Description}
                    onChange={(e) => setDay1Description(e.target.value)}
                    required
                    style={{ width: '100%', height: 100, padding: 10, border: '1px solid #ccc', borderRadius: 5, marginBottom: '10px' }}
                />
                <br />
                <label style={{ display: 'block', marginBottom: 5 }}>Day 2 Description</label>
                <textarea
                    placeholder="Day 2 Description"
                    value={day2Description}
                    onChange={(e) => setDay2Description(e.target.value)}
                    required
                    style={{ width: '100%', height: 100, padding: 10, border: '1px solid #ccc', borderRadius: 5, marginBottom: '10px' }}
                />
                <br />
                <label style={{ display: 'block', marginBottom: 5 }}>Day 3 Description</label>
                <textarea
                    placeholder="Day 3 Description"
                    value={day3Description}
                    onChange={(e) => setDay3Description(e.target.value)}
                    required
                    style={{ width: '100%', height: 100, padding: 10, border: '1px solid #ccc', borderRadius: 5, marginBottom: '10px' }}
                />
                <br />
                <label style={{ display: 'block', marginBottom: 5 }}>Day 4 Description</label>
                <textarea
                    placeholder="Day 4 Description"
                    value={day4Description}
                    onChange={(e) => setDay4Description(e.target.value)}
                    required
                    style={{ width: '100%', height: 100, padding: 10, border: '1px solid #ccc', borderRadius: 5, marginBottom: '10px' }}
                />
                <br />
                <label style={{ display: 'block', marginBottom: 5 }}>Duration</label>
                <input
                    type="text"
                    placeholder="e.g., 4 days"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    required
                    style={{ width: '100%', height: 40, padding: 10, border: '1px solid #ccc', borderRadius: 5, marginBottom: '10px' }}
                />
                <br />
                <label style={{ display: 'block', marginBottom: 5 }}>Starting Date</label>
                <input
                    type="date"
                    value={startingDate}
                    onChange={(e) => setStartingDate(e.target.value)}
                    required
                    style={{ width: '100%', height: 40, padding: 10, border: '1px solid #ccc', borderRadius: 5, marginBottom: '10px' }}
                />
                <br />
                <label style={{ display: 'block', marginBottom: 5 }}>Ending Date</label>
                <input
                    type="date"
                    value={endingDate}
                    onChange={(e) => setEndingDate(e.target.value)}
                    required
                    style={{ width: '100%', height: 40, padding: 10, border: '1px solid #ccc', borderRadius: 5, marginBottom: '10px' }}
                />
                <br />
                <label style={{ display: 'block', marginBottom: 5 }}>Location</label>
                <input
                    type="text"
                    placeholder="e.g., Paris, Lyon"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                    style={{ width: '100%', height: 40, padding: 10, border: '1px solid #ccc', borderRadius: 5, marginBottom: '10px' }}
                />
                <br />
                <label style={{ display: 'block', marginBottom: 5 }}>City Price</label>
                <input
                    type="number"
                    placeholder="Add Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                    style={{ width: '100%', height: 40, padding: 10, border: '1px solid #ccc', borderRadius: 5, marginBottom: '10px' }}
                />
                <br />
                <label style={{ display: 'block', marginBottom: 5 }}>Package ID</label>
                <input
                    type="number"
                    placeholder="Add Package ID"
                    value={package_id}
                    onChange={(e) => setPackageId(e.target.value)}
                    required
                    style={{ width: '100%', height: 40, padding: 10, border: '1px solid #ccc', borderRadius: 5, marginBottom: '10px' }}
                />
                <br />
                <button type="submit" style={{
                    width: 200,
                    height: 40,
                    backgroundColor: '#4CAF50',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 5,
                    cursor: 'pointer',
                    margin: '20px auto',
                    display: 'block'
                }}>Update City</button>
            </form>
        </div>
    );
}
