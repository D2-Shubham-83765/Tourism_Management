import React, { useState } from 'react';
import {Link} from 'react-router-dom'

const TravelManagementSystem = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    gender: '',
    document: '',
    documentFile: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData();
    for (const key in formData) {
      form.append(key, formData[key]);
    }
    // Make the API call to submit the form data
    fetch('/submit-passenger-details', {
      method: 'POST',
      body: form
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <style>
        {`
          body {
            font-family: Arial, sans-serif;
            background-image: url("https://example.com/travel-background.jpg");
            background-repeat: no-repeat;
            background-position: center center;
            background-attachment: fixed;
            background-size: cover;
            margin: 0;
            padding: 0;
          }
          .overlay {
            background-color: rgba(0, 0, 0, 0.6);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
          }
          .container {
            max-width: 600px;
            margin: 50px auto;
            background-color: rgba(255, 255, 255, 0.9);
            padding: 20px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            position: relative;
            z-index: 1;
          }
          h1 {
            text-align: center;
            margin-bottom: 20px;
            color: #333;
          }
          label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
            color: #555;
          }
          input,
          select {
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
          }
          .submit {
            background-color: #ff9800;
            color: white;
            padding: 10px 15px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
            margin-top: 10px;
            width: 100%;
          }
        `}
      </style>
      <div className="overlay"></div>
      <div className="container">
        <h1>Add Passenger Details</h1>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

          <label htmlFor="age">Age</label>
          <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} required min="0" />

          <label htmlFor="gender">Gender</label>
          <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <label htmlFor="document">Document Type</label>
          <select id="document" name="document" value={formData.document} onChange={handleChange} required>
            <option value="">Select Document</option>
            <option value="aadhar">Aadhar</option>
            <option value="pan card">PAN Card</option>
            <option value="passport">Passport</option>
          </select>

          <label htmlFor="file-upload">Upload Document</label>
          <input type="file" id="file-upload" name="documentFile" accept=".pdf,.jpg,.jpeg,.png" onChange={handleChange} required />
        <Link to="/Summary">
          <input className="submit" type="submit" value="Submit" />
        </Link>
        </form>
      </div>
    </div>
  );
};

export default TravelManagementSystem;