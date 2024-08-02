import React from 'react';
import banaras from '../Images/banaras.jpg';
import beachbackside from '../Images/beachbackside.jpg';

function AboutUs() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    minWidth: '100%',
    minHeight: '100vh',
    backgroundImage: `url(${beachbackside})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const sectionStyle = {
    flex: 1,
    padding: '50px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    color: 'black',
    boxSizing: 'border-box',
  };

  const imagesStyle = {
    flex: 1,
    padding: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'black',
    boxSizing: 'border-box',
  };

  const imageRowStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    marginBottom: '20px',
    marginTop : '40px'
  };

  const imageStyle = {
    margin: '10px',
    maxWidth: '30%',
    height: '130px',
    borderRadius: '20px',
  };

  const headingStyle = {
    fontSize: '36px',
    margin: '20px 0',
  };

  const subHeadingStyle = {
    fontSize: '24px',
    margin: '10px 0',
  };

  const paragraphStyle = {
    fontSize: '17px',
    lineHeight: '1.6',
    margin: '10px 0',
  };


  const mediaQueries = `
    @media (max-width: 1024px) {
      .container {
        flex-direction: column;
      }

      .section, .images {
        padding: 20px;
        align-items: center;
      }

      .image-row {
        flex-direction: column;
        align-items: center;
      }

      .image-row img {
        max-width: 80%;
      }
    }

    @media (max-width: 768px) {
      .section {
        padding: 15px;
      }

      .images {
        padding: 15px;
      }

      .image-row {
        margin-bottom: 10px;
      }

      .image-row img {
        max-width: 80%;
      }
    }

    @media (max-width: 480px) {
      .section {
        padding: 10px;
      }

      .images {
        padding: 10px;
      }

      .image-row img {
        max-width: 100%;
      }
    }
  `;

  return (
    <div>
      <style>{mediaQueries}</style>
      <div className="container" style={containerStyle}>
        <div className="section" style={sectionStyle}>
          <div>
            <h2 style={headingStyle}>About us</h2>
          </div>
          <div>
            <p style={paragraphStyle}>
              At Travelago, we are passionate about creating unforgettable travel experiences. With a commitment to
              excellence and a deep understanding of our customers’ needs, we strive to be your trusted partner in
              exploring the world. Whether you’re dreaming of a luxurious getaway, an adventurous expedition, or a
              culturally enriching journey, we are here to turn your travel aspirations into reality.
            </p>
          </div>
          <br />
          <div>
            <h4 style={subHeadingStyle}>What we do</h4>
            <p style={paragraphStyle}>
              Our dedicated team of travel experts leverages their deep knowledge and extensive network to curate seamless
              journeys, encompassing everything from flights and accommodations to tours and activities. Whether you're
              seeking a luxurious escape, an adventurous expedition, or a culturally immersive trip, we handle all aspects
              of your travel arrangements with meticulous attention to detail. From solo travelers to large groups, we offer
              customized itineraries, reliable bookings, and round-the-clock support to ensure your journey is not only
              memorable but also stress-free.
            </p>
          </div>
          <br />
          <div>
            <h4 style={subHeadingStyle}>Who we are</h4>
            <p style={paragraphStyle}>
              [Company Name] is a leading provider of comprehensive travel management solutions. Our dedicated team of
              travel experts brings together years of industry experience and a genuine love for travel. We leverage our
              extensive network of partners and suppliers to offer you a diverse range of destinations, activities, and
              accommodations tailored to your preferences.
            </p>
          </div>
        </div>
        <div className="images" style={imagesStyle}>
          <div className="image-row" style={imageRowStyle}>
            <img src={banaras} alt="Placeholder" style={{ height: '240px', width: '100%', borderRadius: '20px' }} />
          </div>
          <div>
            <h4 style={subHeadingStyle}>What we believe</h4>
            <p style={paragraphStyle}>
              We believe that exploring new places, experiencing different cultures, 
              and connecting with people around the world enriches our lives and broadens our perspectives. 
              Our belief in travel extends beyond mere movement, it's about creating meaningful experiences that leave a lasting impact. 
              We believe in authenticity, ensuring every journey we curate reflects the true essence of the destinations we visit. 
            </p>
          </div>
          <br />
          <h2 style={{ fontSize: '30px', margin: '20px 0' }}>Leadership Team</h2>
          <div className="image-row" style={imageRowStyle}>
            <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_640,q_50/lsci/db/PICTURES/CMS/316500/316584.png" alt="Placeholder" style={imageStyle} />
            <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_640,q_50/lsci/db/PICTURES/CMS/316600/316605.png" alt="Placeholder" style={imageStyle} />
            <img src="https://via.placeholder.com/150" alt="Placeholder" style={imageStyle} />
            <img src="https://via.placeholder.com/150" alt="Placeholder" style={imageStyle} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
