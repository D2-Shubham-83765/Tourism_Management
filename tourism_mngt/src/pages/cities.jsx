import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CityPage = () => {
    const { packageId } = useParams(); // Get the city ID from the route
    const [cityData, setCityData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCityData = async () => {
            try {
                const response = await axios.get(`/packages/${packageId}`); // Adjust API URL
                console.log('Fetched data:', response.data); // Debugging
                setCityData(response.data);
            } catch (error) {
                console.error("Error fetching city data", error);
                setError('Failed to fetch city data');
            }
        };
        fetchCityData();
    }, [packageId]);

    if (error) return <div>{error}</div>;
    if (!cityData) return <div>Loading...</div>;

    const { name, cityDetails, cityImage, duration, price } = cityData;

    // Convert byte array to base64 string
  

    return (
     
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          {cityData.map((city,id)=>(
            <div key={id} className="col-md-3 mb-3">
                <div className="card">
                    <img
                        src={`data:image/jpeg;base64,${city.cityImage}`}
                        className="card-img-top"
                        alt={city.packageName}
                    />
                    <div className="card-body">
                        <h5 className="card-title">
                            <b>{city.name}</b>
                            <b>{city.duration}</b>
                        </h5>
                        <hr />
                        <p className="card-text">{city.cityDetails}</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">
                            starting at &#8377; {city.price}
                        </small>
                    </div>
                </div>
        </div>
              ))}
        </div>
    );
};

export default CityPage;
