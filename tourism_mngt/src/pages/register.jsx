import { useState } from 'react';
import image from '../Images/image.jpg';
import { useNavigate } from 'react-router-dom';
import { register } from "../services/user";
import { toast } from 'react-toastify';

function Register() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [securityQuestionId, setSecurityQuestionId] = useState('')
  const [securityAnswer, setSecurityAnswer] = useState('')

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

  const onCancel = () => {
    navigate('/');
  };

  const isValidEmail = () => {
    return email.includes('@')
  }
  const handleFirstName = (event) =>{
    setFirstName(event.target.value);
  }

  const handleLastName = (event)=> {
    setLastName(event.target.value);
  }

  const handleEmail = (event) => {
    setEmail(event.target.value);
  }

  const handlePhone = (event) => {
    setPhoneNumber(event.target.value);
  }

  const handlePassword = (event) => {
    setPassword(event.target.value);
  }

  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  }

  const handleQuestionChange = (event) => {
    setSecurityQuestionId(event.target.value);
  }

  const handleAnswerChange = (event) => {
    setSecurityAnswer(event.target.value);
  }

  const onRegister = async () => {
    console.log('onRegister')

    if (firstName.length === 0) {
      toast.warning('enter first name')
    } else if (lastName.length === 0) {
      toast.warning('enter last name')
    } else if (email.length === 0) {
      toast.warning('enter email')
    } else if (!isValidEmail()) {
      toast.warning('Email is not valid')
    }else if (phoneNumber.length === 0) {
      toast.warning('Enter phone number')
    }else if (password.length === 0) {
      toast.warning('enter password')
    } else if (confirmPassword.length === 0) {
      toast.warning('confirm password')
    } else if (password !== confirmPassword) {
      toast.warning('password does not match')
    }else if (securityAnswer.length ===0){
      toast.warning('enter security answer')
    }
     else {
      
      const result = await register(firstName, lastName, email, phoneNumber, password, confirmPassword, securityQuestionId, securityAnswer)
      console.log(result)
      if (result.status === 'success') {
        toast.success('You are successfully registered')
        navigate('/')
      } else {
        toast.error('Failed to register the user')
      }
    }
  }

  
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
      <form className='form-container' style={formContainerStyle}>
        <div className='mb-3'>
          <label htmlFor='Name' style={labelStyle}>First Name :</label>
          <input  type='text'  className='form-control input'  id='name' placeholder="e.g Suresh" 
            style={inputStyle} onChange={handleFirstName} required/>
        </div>

        <div className='mb-3'>
          <label htmlFor='Name' style={labelStyle}>Last Name :</label>
          <input  type='text'  className='form-control input'  id='name' placeholder="e.g Suresh" 
            style={inputStyle} onChange={handleLastName} required/>
        </div>

        <div className='mb-3'>
          <label htmlFor='Email' style={labelStyle}>Email :</label>
          <input type='email' className='form-control input' id='Email' placeholder="abc@gmail.com" 
            style={inputStyle} onChange={handleEmail} required />
        </div>

        <div className='mb-3'>
          <label htmlFor='Password' style={labelStyle}>Password :</label>
          <input type='password' className='form-control input'  id='password' placeholder="******" style={inputStyle} 
            onChange={handlePassword} required  minLength={8} />
          <small style={{ color: 'black' }}>Password must be at least 8 characters long.</small>

        </div>

        <div className='mb-3'>
          <label htmlFor='Password' style={labelStyle}>Confirm Password :</label>
          <input type='password' className='form-control input'  id='confirm-password' placeholder="******" style={inputStyle} 
            onChange={handleConfirmPassword} required  minLength={8} />
          <small style={{ color: 'black' }}>Password must be at least 8 characters long.</small>

        </div>

        <div className='mb-3'>
          <label htmlFor='Phone' style={labelStyle}>Phone :</label>
          <input type='number' className='form-control input' id='phoneNumber' placeholder="Phone" style={inputStyle}onChange={handlePhone}  required  pattern="\d{10}" />
      
        </div>

        <div className='mb-3'>
          <label htmlFor='Security question' style={labelStyle}>Security Question :</label>
          <select  id='security_ques'  className='form-control input' style={inputStyle} 
                value={securityQuestionId} onChange={handleQuestionChange} required  >
            <option value=''>Select question</option>
            <option value='1'>What is your favourite sport?</option>
            <option value='2'>What is the your favourite color? </option>
            <option value='3'>Which is your dream destination?</option>
            <option value='4'>In which city were you born?</option>
          </select>
          
          <label htmlFor='Security answer' style={labelStyle}>Security Answer :</label>
          <input type='text' className='form-control input' id='Answer' placeholder="give your answer" style={inputStyle} 
            onChange={handleAnswerChange}required />
        
        </div>

        <div className='mb-3' style={buttonContainerStyle}>
          <button type='submit' className='btn btn-success' style={buttonStyle} onClick={onRegister}>Register</button>
          <button type='button' className='btn btn-secondary' style={buttonStyle} onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
