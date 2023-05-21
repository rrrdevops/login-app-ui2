import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./login.css";

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  


  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your login logic here

    try {
      const response = await fetch('http://localhost:8000/login-app-0.0.1-SNAPSHOT/loginapp/users/${username}/${password}', {
        method: 'POST',
        headers: {
          
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Login successful, redirect to profile page
        navigate('/profile');
      } else {
        // Login failed, display error message
        const data = await response.json();
        setError(data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('An error occurred during login. Please try again later.');
    }

    
  };
  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="username2"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password: 
          <input
            type="password2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default LoginPage;
