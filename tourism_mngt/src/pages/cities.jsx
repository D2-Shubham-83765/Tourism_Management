import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config';
import { useParams } from 'react-router-dom';
import './cities.css'; // Import the CSS file for styling

const CityPage = () => {
    const { id } = useParams(); // Get the city ID from the route
    const [cityData, setCityData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCityData = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`${config.url}/packages/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                
                console.log('Fetched data:', response.data);
                setCityData(response.data);
            } catch (error) {
                console.error("Error fetching city data:", error.response ? error.response.data : error.message);
                setError('Failed to fetch city data');
            }
        };
        fetchCityData();
    }, [id]);

    return (
        <div className='city-page'>
            <br />
            <h1 className='page-title'>Book your favourite Beach now !</h1>
            <div className='card-group'>
                {cityData.map((city, index) => (
                    <div key={index} className="col-md-3">
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
                                <small className="text-muted">
                                    &#8377; {city.price} / person
                                </small>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CityPage;
