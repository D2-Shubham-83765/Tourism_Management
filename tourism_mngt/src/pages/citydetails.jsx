import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import config from '../config';


const CityDetails = () => {
    const { cityId } = useParams(); // Get the city ID from the URL parameter
    const [cityData, setCityData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCityData = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`${config.url}/cities/${cityId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                console.log(response.data); // Debugging line
                setCityData(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching city data:", error.response ? error.response.data : error.message);
                setError('Failed to fetch city data');
                setLoading(false);
            }
        };
        fetchCityData();
    }, [cityId]);

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

    return (
        <div className='city-details'>
            {cityData && (
                <>
                    <h1 className='city-name'>{cityData.name}</h1>
                    <p>{cityData.cityDetails}</p>
                    <p>Duration: {cityData.duration}</p>
                    <p>Starting Date: {cityData.startingDate}</p>
                    <p>Ending Date: {cityData.endingDate}</p>
                    <p>Location: {cityData.location}</p>
                    <p>Price: &#8377; {cityData.price}</p>
                    <div className="images">
                        {cityData.images.map((image, index) => (
                            <img 
                                key={index} 
                                src={`data:image/jpeg;base64,${image}`} 
                                alt={`City Image ${index + 1}`} 
                                className="city-image"
                            />
                        ))}
                    </div>
                    <div className="hotels">
                        <h3>Hotels</h3>
                        {cityData.hotels.map((hotel, index) => (
                            <div key={index} className="hotel">
                                <h4>{hotel.name}</h4>
                                <p>Address: {hotel.address}</p>
                                <p>Rate per Person: &#8377; {hotel.rate_per_person}</p>
                                <p>Star Rating: {hotel.star_rating}</p>
                                <p>Facilities:</p>
                                <ul>
                                    {hotel.breakfast && <li>Breakfast</li>}
                                    {hotel.free_wi_fi && <li>Free Wi-Fi</li>}
                                    {hotel.pool && <li>Pool</li>}
                                    {hotel.restaurant && <li>Restaurant</li>}
                                    {hotel.housekeeping && <li>Housekeeping</li>}
                                    {hotel.luggage_assistance && <li>Luggage Assistance</li>}
                                    {hotel.bonfire && <li>Bonfire</li>}
                                </ul>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default CityDetails;
