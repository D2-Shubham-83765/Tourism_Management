import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import config from "../config";

const CityPage = () => {
  const { cityId } = useParams(); // Get cityId from URL parameters
  const [city, setCity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCity = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/cities/${cityId}}`);
        setCity(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCity();
  }, [cityId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching city data</p>;

  return (
    <div>
      {city && (
        <>
          <h1>{city.name}</h1>
          <p>{city.cityDetails}</p>
          {city.cityImage && (
            <img 
              src={`data:image/jpeg;base64,${btoa(String.fromCharCode(...new Uint8Array(city.cityImage)))}`} 
              alt={city.name} 
              style={{ width: '100%', maxWidth: '600px' }}
            />
          )}
          <p>Duration: {city.duration}</p>
          <p>Price: ${city.price}</p>
        </>
      )}
    </div>
  );
};

export default CityPage;
