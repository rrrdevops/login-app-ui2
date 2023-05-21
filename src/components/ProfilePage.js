import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./profile.css";

function ProfilePage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add your logout logic here
    // For example, clear user session or token

    // Redirect to the login page
    navigate('/');
  };

  return (
    <div>
      <h2>Profile Page</h2>
      {/* Add your profile information and content here */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default ProfilePage;
