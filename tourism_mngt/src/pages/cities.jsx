import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config';
import { useParams, useNavigate } from 'react-router-dom';
import './cities.css'; // Import the CSS file for styling3

const CityPage = () => {
    const { id } = useParams(); // Get the city ID from the route
    const [cityData, setCityData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true); // Add loading state
    const navigate = useNavigate(); // Initialize useNavigate hook



    useEffect(() => {
        const fetchCityData = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`${config.url}/packages/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                setCityData(response.data);
                setLoading(false); // Set loading to false after data is fetched
            } catch (error) {
                console.error("Error fetching city data:", error.response ? error.response.data : error.message);
                setError('Failed to fetch city data');
                setLoading(false); // Set loading to false if there's an error
            }
        };
        fetchCityData();
    }, [id]);

    if (loading) {
        return (
            <div className="loader-container">
                <p>Loading...</p>
            </div>  
        );
    } 

    if (error) {
        return <div className="error-message">{error}</div>;
    }

    const handleCardClick = (iden) => {
        navigate(`/cities/${iden}`);
    };
        
    return (
        <div className='city-page'>
            {cityData.length > 0 && (
                <>
                <br />
                    <h1 className='page-title'>Book your favourite City!</h1>
                    <div className='card-group'>
                        {cityData.map((city, id) => (
                            <div
                                key={id} 
                                className="col-md-3" 
                                onClick={() => handleCardClick(city.id)} // Handle click event
                                style={{ cursor: 'pointer' }} // Change cursor to pointer
                            >
                                <div className="card">
                                    <img
                                        src={`data:image/jpeg;base64,${city.cityImage}`}
                                       className="card-img-top"
                                        alt={city.packageName}
                                    />
                                    <div className="card-body">
                                        <div className="city-header">
                                            <h5 className="city-name">{city.name}</h5>
                                            <div className="duration-box">{city.duration}</div>
                                        </div>
                                        <hr />
                                        <p className="card-text">{city.cityDetails}</p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="price-box">
                                            <small className="text-muted">
                                                &#8377; {city.price}/person
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default CityPage;
