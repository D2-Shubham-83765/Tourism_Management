import React from "react";
import image from '../Images/image.jpg';
import { useNavigate } from 'react-router-dom';

function Register() {
  const inputStyle = {
    width: '100%',
    maxWidth: '400px',
    margin: '10px 0',
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '100%',
    minHeight: '100vh',
    background: `url(${image}) no-repeat center center fixed`,
    backgroundSize: 'cover',
  };

  const formContainerStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '90%',
    maxWidth: '500px',
    marginBottom: '30px'
  };

  const labelStyle = {
    fontWeight: 'bold',
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  };

  const buttonStyle = {
    margin: '0 10px',
  };

  const navigate = useNavigate();

  const onHome = () => {
    navigate('/home');
  };

  
  const handleSubmit = (event) => {
    event.preventDefault(); 
    
    console.log("Form submitted");
  };

  
  const mediaQueries = `
    @media (max-width: 1024px) {
      .container {
        padding: 20px;
      }

      .form-container {
        width: 100%;
        max-width: 90%;
      }

      .input {
        width: 100%;
        max-width: 100%;
      }
    }

    @media (max-width: 768px) {
      .container {
        padding: 15px;
      }

      .form-container {
        padding: 15px;
      }

      .input {
        width: 100%;
        max-width: 100%;
      }
    }

    @media (max-width: 480px) {
      .container {
        padding: 10px;
      }

      .form-container {
        padding: 10px;
      }

      .input {
        width: 100%;
        max-width: 100%;
      }
    }
  `;

  return (
    <div className='container' style={containerStyle}>
      <br />
      <div><h2>Registration Page</h2></div>
      <br />
      <style>{mediaQueries}</style>
      <form className='form-container' style={formContainerStyle} onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='Name' style={labelStyle}>Name :</label>
          <input  type='text'  className='form-control input'  id='name' placeholder="e.g Suresh" style={inputStyle} required/>
        </div>

        <div className='mb-3'>
          <label htmlFor='Email' style={labelStyle}>Email :</label>
          <input type='email' className='form-control input' id='Email' placeholder="abc@gmail.com" style={inputStyle} required />
        </div>

        <div className='mb-3'>
          <label htmlFor='Password' style={labelStyle}>Password :</label>
          <input type='password' className='form-control input'  id='password' placeholder="******" style={inputStyle} required  minLength={8} />
          <small style={{ color: 'black' }}>Password must be at least 8 characters long.</small>

        </div>

        <div className='mb-3'>
          <label htmlFor='Age' style={labelStyle}>Age :</label>
          <input type='number' className='form-control input' id='Age' placeholder="e.g 22" style={inputStyle} required />
        </div>



        <div className='mb-3'>
          <label htmlFor='Phone' style={labelStyle}>Phone :</label>
          <input type='number' className='form-control input' id='phone' placeholder="Phone" style={inputStyle}  required  pattern="\d{10}" />
      
        </div>

        
        <div className='mb-3'>
          <label htmlFor='Gender' style={labelStyle}>Gender :</label>
          <select  id='gender'  className='form-control input' style={inputStyle}  required  >
            <option value=''>Select Gender</option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
          </select>
        </div>


     

        <div className='mb-3'>
          <label htmlFor='Address' style={labelStyle}>Address :</label>
          <input type='text' className='form-control input' id='Address' placeholder="Address" style={inputStyle} required />
        </div>


        <div className='mb-3'>
          <label htmlFor='Security question' style={labelStyle}>Security Question :</label>
          <select  id='security_ques'  className='form-control input' style={inputStyle}  required  >
            <option value=''>Select question</option>
            <option value='name'>What is the name of your first school? </option>
            <option value='sport'>What is the name of your favorite sport?</option>
            <option value='movie'>Your favorite actor/actress name?</option>
            <option value='movie'>In which city were you born?</option>
          </select>

          <input type='text' className='form-control input' id='Answer' placeholder="give your answer" style={inputStyle} required />
        
        </div>


        <div className='mb-3' style={buttonContainerStyle}>
          <button type='submit' className='btn btn-success' style={buttonStyle}>Register</button>
          <button type='button' onClick={onHome} className='btn btn-secondary' style={buttonStyle}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
