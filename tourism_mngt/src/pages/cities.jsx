import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const City = () => {
  const photoGroups = [
    {
      caption: 'Goa',
      photos: [
        'https://hblimg.mmtcdn.com/content/hubble/img/goakolkatadestimages/mmt/activities/m_Goa_6_l_668_1000.jpg',
        'https://hblimg.mmtcdn.com/content/hubble/img/goakolkatadestimages/mmt/activities/m_Goa_9_l_667_1000.jpg',
        'https://hblimg.mmtcdn.com/content/hubble/img/goakolkatadestimages/mmt/activities/m_Goa_2_l_667_1000.jpg'
      ],
      // link: '/CityDetails' 
    },
    { 
      caption: 'Pondicherry',
      photos: [
        'https://hblimg.mmtcdn.com/content/hubble/img/pondicherry/mmt/destination/m_Pondicherry_activity_beach_l_382_691.jpg',
        'https://hblimg.mmtcdn.com/content/hubble/img/new_dest_imagemar/mmt/activities/m_Pondicherry_1_l_658_1200.jpg',
        'https://hblimg.mmtcdn.com/content/hubble/img/new_dest_imagemar/mmt/activities/m_Pondicherry_2_l_658_1200.jpg'
      ],
      // link: '/CityDetails'
    },
    {
      caption: 'Alibhag',
      photos: [
        'https://hblimg.mmtcdn.com/content/hubble/img/desttvimg/mmt/destination/m_Alibaug_tv_destination_img_6_l_963_1712.jpg',
        'https://hblimg.mmtcdn.com/content/hubble/img/new_dest_imagemar/mmt/activities/m_Alibaug_2_l_800_1200.jpg',
        'https://hblimg.mmtcdn.com/content/hubble/img/desttvimg/mmt/destination/m_Alibaug_tv_destination_img_3_l_911_1214.jpg'
      ],
      // link: '/CityDetails'
    },
    {
      caption: 'Kovalam',
      photos: [
        'https://hblimg.mmtcdn.com/content/hubble/img/kovalam/mmt/destination/m_Kovalam_activity_beach_l_383_614.jpg',
        'https://hblimg.mmtcdn.com/content/hubble/img/kovalam/mmt/destination/m_Kovalam_activity_food_l_502_753.jpg',
        'https://hblimg.mmtcdn.com/content/hubble/img/kovalam/mmt/destination/m_Kovalam_activity_heritage%20and%20culture_l_436_656.jpg'
      ],
      // link: '/CityDetails'
    }
  ];

  const galleryStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    padding: '20px'
  };

  const sliderContainerStyle = {
    width: '300px',
    margin: '10px',
    textAlign: 'center',
    position: 'relative',
  };

  const sliderStyle = {
    width: '100%',
    height: '300px'
  };

  const captionContainerStyle = {
    position: 'absolute',
    top: '0',
    left: '0',
    background: '',
    padding: '10px',
    borderRadius: '10px',
    zIndex: '1',
  };

  const captionStyle = {
    fontSize: '20px',
    color: 'black',
    marginBottom: '10px',
    marginTop: '310px',
    marginLeft: '-10%'
  };

  const descriptionStyle = {
    fontSize: '14px',
    color: 'grey',
    wordSpacing: '280px',
    marginTop: '20px',
    marginLeft: '-200px'
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
      
  const imgStyle = {
    width: '100%', 
    height: '300px',
    objectFit: 'cover',
    borderRadius: '10px',
  };

  return (
    
    <div style={{ textAlign: 'center', marginTop: '50px'  }}>
      <h1>Beaches Page</h1>
      <br />
      <p style={{ fontSize: '17px', textAlign : 'center', marginLeft : '50px',  marginRight : '50px'}} >Imagine soft white sands, crystal-clear waters, and lush palm trees swaying in the breeze. Tropical beaches offer the perfect setting for relaxation and adventure.
      Snorkeling, scuba diving, paddleboarding, and sunbathing are popular activities. You can also explore vibrant coral reefs and diverse marine life. These beaches are ideal for families, offering gentle waves, shallow waters, and a range of amenities.
           
      </p>
       
      <div style={galleryStyle}>
        {photoGroups.map((group, index) => (
          <div key={index} style={sliderContainerStyle}>
            <div style={captionContainerStyle}>
              <div style={captionStyle}>{group.caption}</div>
            </div>
            <Slider {...settings} style={sliderStyle}>
              {group.photos.map((photo, idx) => (
                <div key={idx}> 
                  <a href={group.link} target="_blank" rel="noopener noreferrer">
                    <img src={photo} alt={`Photo ${index + 1}-${idx + 1}`} style={imgStyle} />
                  </a>
                </div>
              ))}
            </Slider>
          </div>
        ))}
      </div>
      <div style={descriptionStyle}>
         ₹2667.78/night ₹1085.64/night ₹1454.23/night ₹2568.25/night
      </div>
    </div>
  );
};

export default City;
