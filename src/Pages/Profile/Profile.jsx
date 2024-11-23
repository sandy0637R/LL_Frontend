import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [loggedInUser, setLoggedInUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");
    setLoggedInUser(user);
  }, []);

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <div className="profile-details">
        <p><strong>User:</strong> {loggedInUser}</p>
      </div>
      <button className="btn btn-secondary" onClick={handleBackClick}>Back</button>
    </div>
  );
};

export default Profile;
