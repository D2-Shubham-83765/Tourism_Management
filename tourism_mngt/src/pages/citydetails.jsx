import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import config from '../config';

const CityDetails = () => {
  const { cityId } = useParams();
  const [cityInfo, setCityInfo] = useState(null);
  const [selectedHotel, setSelectedHotel] = useState(null);
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
    return <div style={styles.loaderContainer}>Loading...</div>;
  }

  if (error) {
    return <div style={styles.errorMessage}>{error}</div>;
  }

  if (!cityInfo) {
    return <div>No data available</div>;
  }

  const imageUrl = (imagePath) => {
    const fullUrl = `${config.url}${imagePath}`;
    console.log('Constructed Image URL:', fullUrl); // Log URL for debugging
    return fullUrl;
  };

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

  const handleHotelClick = (hotel) => {
    setSelectedHotel(hotel);
  };

  return (
    <div style={styles.container}>
      <div style={styles.cityHeader}>
        <h1 style={styles.cityName}>{cityInfo.name || 'City Name Not Available'}</h1>
        <p style={styles.cityDescription}>{cityInfo.cityDetails || 'Details not available'}</p>
        <span style={styles.cityInfoLabel}>Duration:</span>
          <span style={styles.cityInfoValue}>{cityInfo.duration || 'Not available'}</span> &nbsp; &nbsp;
          <span style={styles.cityInfoLabel}>Location:</span>
          <span style={styles.cityInfoValue}>{cityInfo.location || 'Not available'}</span>
      
 <br /> <br />
          <div style={styles.images}> 
        {cityInfo.images && cityInfo.images.length > 0 ? (
          cityInfo.images.map((imagePath, index) => (
            <img
              key={index}
              src={imageUrl(imagePath)}
              alt={`City Image ${index + 1}`}
              style={styles.cityImage}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/150'; // Fallback image
                console.error('Image failed to load:', e.target.src);
              }}
            />
          ))
        ) : (
          <p>No images available</p>
        )}
      </div>
        
       
      </div>
        <div style={styles.cityInfoBox}>
          <h2 style={styles.cityInfoHeader}>Trip Details</h2>
          <div style={styles.cityInfoBoxItem}>
            <span style={styles.cityInfoLabel}>Day 1 Plan:</span>
            <span style={styles.cityInfoValue}>{cityInfo.day1Description || 'Not available'}</span>
          </div>

          <div style={styles.cityInfoBoxItem}>
            <span style={styles.cityInfoLabel}>Day 2 Plan:</span>
            <span style={styles.cityInfoValue}>{cityInfo.day2Description || 'Not available'}</span>
          </div>
                  
          <div style={styles.cityInfoBoxItem}>
            <span style={styles.cityInfoLabel}>Day 3 Plan:</span>
            <span style={styles.cityInfoValue}>{cityInfo.day3Description || 'Not available'}</span>
          </div>
          
          <div style={styles.cityInfoBoxItem}>
            <span style={styles.cityInfoLabel}>Day 4 Plan:</span>
            <span style={styles.cityInfoValue}>{cityInfo.day4Description || 'Not available'}</span>
          </div>
          
          <div style={styles.cityInfoBoxItem}>
            <span style={styles.cityInfoLabel}>Starting Date:</span>
            <span style={styles.cityInfoValue}>{cityInfo.startingDate ? new Date(cityInfo.startingDate).toLocaleDateString() : 'Not available'}</span>
          </div>
          <div style={styles.cityInfoBoxItem}>
            <span style={styles.cityInfoLabel}>Ending Date:</span>
            <span style={styles.cityInfoValue}>{cityInfo.endingDate ? new Date(cityInfo.endingDate).toLocaleDateString() : 'Not available'}</span>
          </div>
        </div> 
      
    

      <div style={styles.hotels}>
        <h3 style={styles.hotelsTitle}>Hotels</h3>
        <h6>select the hotel that suites you</h6>
        <div style={styles.hotelsList}>
          {cityInfo.hotels && cityInfo.hotels.length > 0 ? ( 
            cityInfo.hotels.map((hotel, index) => (
              <div
                key={index}
                style={selectedHotel && selectedHotel.id === hotel.id ? styles.selectedHotelCard : styles.hotelCard}
                onClick={() => handleHotelClick(hotel)}
              >
                <h4 style={styles.hotelName}>{hotel.name || 'Hotel Name Not Available'}</h4>
                <br />
                <p style={styles.hotelInfo}>Address: {hotel.address || 'Address not available'}</p>
                <p style={styles.hotelInfo}>Rate per Person: &#8377; {hotel.ratePerPerson ? hotel.ratePerPerson.toFixed(2) : 'Rate not available'}</p>
                <p style={styles.hotelInfo}>Rating: {hotel.starRating || 'Star rating not available'}</p>
              </div>
            )) 
          ) : ( 
            <p>No hotels available</p>
          )}
        </div> 
 <br />
        {selectedHotel && (
          <div style={styles.hotelDetails}>
            <h4 style={styles.hotelDetailsHeader}>Selected Hotel Details</h4>
            <p style={styles.hotelInfo}>Name: {selectedHotel.name || 'Hotel Name Not Available'}</p>
            <p style={styles.hotelInfo}>Address: {selectedHotel.address || 'Address not available'}</p>
            <p style={styles.hotelInfo}>Rate per Person: &#8377; {selectedHotel.ratePerPerson ? selectedHotel.ratePerPerson.toFixed(2) : 'Rate not available'}</p>
            <p style={styles.hotelInfo}>Rating: {selectedHotel.starRating || 'Star rating not available'}</p>
            <p style={styles.hotelFacilities}>Facilities:</p>
            {renderFacilities(selectedHotel)}
          </div>
        )}
        <br />
        <div style={styles.cityInfoBoxItem}>
          <p style={styles.cityInfo}>Price: <span style={styles.cityPrice}>&#8377; {cityInfo.price || 'Not available'}</span></p>
        </div>
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

// Inline styles for the component
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center',
  },
  loaderContainer: {
    textAlign: 'center',
    padding: '20px',
  },
  errorMessage: {
    color: 'red',
    textAlign: 'center',
    padding: '20px',
  },
  cityHeader: {
    marginBottom: '20px',
  },
  cityName: {
    fontSize: '3rem',
    marginBottom: '10px',
    fontWeight : 'bold'
  },
  cityDescription: {
    fontSize: '1.2rem',
    marginBottom: '20px',
  },
  cityInfoBox: {
    backgroundColor: '#f4f4f4',
    padding: '15px',
    borderRadius: '8px',
    marginBottom: '20px',
    display: 'inline-block',
    textAlign: 'left',
  },
  cityInfoHeader: {
    fontSize: '1.5rem',
    marginBottom: '10px',
  },
  cityInfoBoxItem: {
    marginBottom: '10px',
  },
  cityInfoLabel: {
    fontWeight: 'bold',
  },
  cityInfoValue: {
    marginLeft: '10px',
  },
  images: {
    marginBottom: '20px',
  },
  cityImage: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  hotels: {
    marginTop: '20px',
  },
  hotelsTitle: {
    fontSize: '1.5rem',
    marginBottom: '10px',
  },
  hotelsList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    
    justifyContent: 'center',
  },
  hotelCard: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '10px',
    cursor: 'pointer',
    width: '200px',
    textAlign: 'left',
    transition: 'background-color 0.3s',
  },
  selectedHotelCard: {
    border: '1px solid #007bff',
    borderRadius: '8px',
    padding: '10px',
    cursor: 'pointer',
    width: '200px',
    textAlign: 'left',
    backgroundColor: '#e0f7fa',
    transition: 'background-color 0.3s',
  },
  hotelName: {
    fontSize: '1.2rem',
    marginBottom: '5px',
  },
  hotelInfo: {
    marginBottom: '5px',
  },
  hotelFacilities: {
    marginTop: '10px',
    color : 'black'
  },
  hotelDetails: {
    marginTop: '20px',
    padding: '15px',
    border: '1px solid #ddd',
    borderRadius:'8px',
    backgroundColor: '#f9f9f9',
    width : '50%',
    margin: '0 auto' /* add this line to center the element */
},
  hotelDetailsHeader: {
    fontSize: '1.5rem',
    marginBottom: '10px',
  },
  cityPrice: {
    fontWeight: 'bold',
    color: '#007bff',
  },
  bookNowButton: {
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    cursor: 'pointer',
  },
  bookNowButtonHover: {
    backgroundColor: '#0056b3',
  },
  facilitiesList: {
    listStyleType: 'none',
    padding: '0',
    margin: '0',
  },
  facilitiesListItem: {
    marginBottom: '5px',
  },
};

export default CityDetails;
