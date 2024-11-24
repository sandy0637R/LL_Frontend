import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [loggedInUser, setLoggedInUser] = useState("");
  const [loggedInEmail, setLoggedInEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");
    const email=localStorage.getItem("email")
    setLoggedInUser(user);
    setLoggedInEmail(email)
  }, []);

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <div className="profile-details">
        <p><strong>User:</strong> {loggedInUser}</p>
        <p><strong>Email:</strong> {loggedInEmail}</p>
      </div>
      <button className="btn btn-secondary" onClick={handleBackClick}>Back</button>
    </div>
  );
};

export default Profile;
