import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import config from '../config';

const CityPage = () => {
    const { id } = useParams(); // Get the city ID from the route
    const [cityData, setCityData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCityData = async () => {
            try {
              console.log(id)
              const token = localStorage.getItem('token')
                const response = await axios.get(`${config.url}/packages/${id}` ,{
                  headers: {
                    Authorization: `Bearer ${token}`, 
                  }
                }
                ) 
                console.log('Fetched data:', response.data);
                setCityData(response.data)
          } catch (error) {
              console.error("Error fetching city data:", error.response ? error.response.data : error.message);
              setError('Failed to fetch city data');
          }
        };
        fetchCityData();
    }, [id]);

    if (error) return <div>{error}</div>;
    if (!cityData) return <div>Loading...</div>;

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
