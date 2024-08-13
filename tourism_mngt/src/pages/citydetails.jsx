import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import config from '../config';

// Inline styles for the component
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: '#f4f4f9',
  },
  cityHeader: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  cityName: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
  },
  cityDescription: {
    fontSize: '1.2rem',
    color: '#555',
    marginBottom: '20px',
    lineHeight: '1.5',
  },
  cityInfoBox: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
    width: '60%',
    margin: '0 auto', // Center horizontally
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center children horizontally
  },
  cityInfoHeader: {
    fontSize: '1.4rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '15px',
  },
  cityInfo: {
    fontSize: '1rem',
    color: '#666',
    marginBottom: '10px',
  },
  cityInfoBoxItem: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    marginBottom: '10px',
  },
  cityPrice: {
    fontSize: '1.6rem',
    color: '#e67e22',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  images: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  cityImage: {
    borderRadius: '10px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    width: '350px',
    height: '220px',
    objectFit: 'cover',
  },
  bookNowButton: {
    display: 'block',
    width: '220px',
    padding: '12px',
    margin: '0 auto',
    textAlign: 'center',
    backgroundColor: '#007BFF',
    color: '#fff',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    borderRadius: '8px',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
  },
  bookNowButtonHover: {
    backgroundColor: '#0056b3',
    transform: 'scale(1.05)',
  },
  hotels: {
    marginTop: '30px',
  },
  hotelsTitle: {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '20px',
    textAlign: 'center',
  },
  hotelCard: {
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '20px',
    marginBottom: '20px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    maxWidth: '500px',
    margin: '0 auto',
  },
  hotelName: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
  },
  hotelInfo: {
    fontSize: '1.1rem',
    color: '#666',
    marginBottom: '8px',
  },
  hotelFacilities: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
  },
  facilitiesList: {
    listStyleType: 'none',
    padding: '0',
    margin: '0',
  },
  facilitiesListItem: {
    fontSize: '1.1rem',
    color: '#555',
    marginBottom: '5px',
  },
};

const CityDetails = () => {
  const { cityId } = useParams();
  const [cityInfo, setCityInfo] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCityData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${config.url}/cities/${cityId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        console.log('API Response:', response.data); // Log full response for debugging
        setCityInfo(response.data);
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
    return <div className="loader-container">Loading...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!cityInfo) {
    return <div>No data available</div>;
  }

  const imageUrl = (imagePath) => `${config.url}/images/${imagePath}`;

  const renderFacilities = (facilities) => (
    <ul style={styles.facilitiesList}>
      {facilities.breakfast && <li style={styles.facilitiesListItem}>Breakfast</li>}
      {facilities.free_wi_fi && <li style={styles.facilitiesListItem}>Free Wi-Fi</li>}
      {facilities.pool && <li style={styles.facilitiesListItem}>Pool</li>}
      {facilities.restaurant && <li style={styles.facilitiesListItem}>Restaurant</li>}
      {facilities.housekeeping && <li style={styles.facilitiesListItem}>Housekeeping</li>}
      {facilities.luggage_assistance && <li style={styles.facilitiesListItem}>Luggage Assistance</li>}
      {facilities.bonfire && <li style={styles.facilitiesListItem}>Bonfire</li>}
    </ul>
  );

  return (
    <div style={styles.container}>
      <div style={styles.cityHeader}>
        <h1 style={styles.cityName}>{cityInfo.name || 'City Name Not Available'}</h1>
        <p style={styles.cityDescription}>{cityInfo.cityDetails || 'Details not available'}</p>
        
        <div style={styles.cityInfoBox}>
          <h2 style={styles.cityInfoHeader}>Trip Details</h2>
          <div style={styles.cityInfoBoxItem}>
            <p style={styles.cityInfo}>Duration: {cityInfo.duration || 'Duration not available'}</p>
          </div>

          <div style={styles.cityInfoBoxItem}>
            <p style={styles.cityInfo}>Day 1 Plan: {cityInfo.day1Description || 'Duration not available'}</p>
          </div>

          <div style={styles.cityInfoBoxItem}>
            <p style={styles.cityInfo}>Day 2 Plan: {cityInfo.day2Description || 'Duration not available'}</p>
          </div>

          <div style={styles.cityInfoBoxItem}>
            <p style={styles.cityInfo}>Day 3 Plan: {cityInfo.day3Description || 'Duration not available'}</p>
          </div>
          
          <div style={styles.cityInfoBoxItem}>
            <p style={styles.cityInfo}>Day 4 Plan: {cityInfo.day4Description || 'Duration not available'}</p>
          </div>
          
          <div style={styles.cityInfoBoxItem}>
            <p style={styles.cityInfo}>Starting Date: {cityInfo.startingDate ? new Date(cityInfo.startingDate).toLocaleDateString() : 'Starting date not available'}</p>
          </div>
          <div style={styles.cityInfoBoxItem}>
            <p style={styles.cityInfo}>Ending Date: {cityInfo.endingDate ? new Date(cityInfo.endingDate).toLocaleDateString() : 'Ending date not available'}</p>
          </div>
          <div style={styles.cityInfoBoxItem}>
            <p style={styles.cityInfo}>Location: {cityInfo.location || 'Location not available'}</p>
          </div>
        </div>

       
   
      </div>

      <div style={styles.images}>
        {cityInfo.images && cityInfo.images.length > 0 ? (
          cityInfo.images.map((imagePath, index) => (
            <img
              key={index}
              src={imageUrl(imagePath)}
              alt={`City Image ${index + 1}`}
              style={styles.cityImage}
            />
          ))
        ) : (
          <p>No images available</p>
        )}
      </div>

      <div style={styles.hotels}>
        <h3 style={styles.hotelsTitle}>Hotels</h3>
        {cityInfo.hotels && cityInfo.hotels.length > 0 ? (
          cityInfo.hotels.map((hotel, index) => (
            <div key={index} style={styles.hotelCard}>
              <h4 style={styles.hotelName}>{hotel.name || 'Hotel Name Not Available'}</h4>
              <p style={styles.hotelInfo}>Address: {hotel.address || 'Address not available'}</p>
              <p style={styles.hotelInfo}>Rate per Person: &#8377; {hotel.ratePerPerson ? hotel.ratePerPerson.toFixed(2) : 'Rate not available'}</p>
              <p style={styles.hotelInfo}>Rating: {hotel.starRating || 'Star rating not available'}</p>
              <p style={styles.hotelFacilities}>Facilities:</p>
              {renderFacilities(hotel)}
            </div>
          ))
        ) : (
          <p>No hotels available</p>
        )}
        <br />
        <br />
        <a href="#" 
           style={styles.bookNowButton}
           onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.bookNowButtonHover.backgroundColor}
           onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.bookNowButton.backgroundColor}
           onClick={() => alert('Booking feature coming soon!')}
        >
          Book Now
        </a>
      </div>
    </div>
  );
};

export default CityDetails;
