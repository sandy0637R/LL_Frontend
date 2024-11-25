import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Profile.css"

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
    <div className='profile-back-img'>
      <div className="profile-container">
      <div className='profile-body'>
      <h2 className='profile-heading'>Profile</h2>
      <div className="profile-details">
        <div className='profile-info-sec'><label className='profile-label'>User:</label> <p className='profile-info'>{loggedInUser}</p></div>
        <div className='profile-info-sec'><label className='profile-label'>Email:</label><p className='profile-info'> {loggedInEmail}</p></div>
      </div>
      <button className="profile-back-btn" onClick={handleBackClick}>Back</button>
      </div>
    </div>
    </div>
  );
};

export default Profile;
