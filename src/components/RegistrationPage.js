import React, { useState } from 'react';
import "./registration.css";
import { useNavigate } from 'react-router-dom';

function RegistrationPage() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [place, setPlace] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your registration logic here
    // You can access the form field values from the state variables (firstName, lastName, etc.)

    try {
      const response = await fetch('http://localhost:8000/login-app-0.0.1-SNAPSHOT/loginapp/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName, username, password, place }),
      });

      if (response.ok) {
        // Registration successful, redirect to login page
        navigate('/');
      } else {
        // Registration failed, display error message
        const data = await response.json();
        setError(data.message);
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setError('An error occurred during registration. Please try again later.');
    }
    // console.log('Registration form submitted');
    
  };

 

  return (
    <div>
      <h2>Registration Page</h2>
      {/* Add your registration form here */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="first"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="last"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label>User Name:</label>
          <input
            type="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Place:</label>
          <input
            type="place"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
       
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RegistrationPage;
