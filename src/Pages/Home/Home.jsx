import React from "react";
import { Link } from "react-router-dom";
import Explore from "../Explore/Explore";
import "./Home.css";
const Home = () => {
  return (
    <div className="dashboard-body">
      <div className="main-container">
        <div className="home-main-sec">
          <div className="home-sub-sec">
            <div className=" main-text-sec">
              <p className="home-p">Property Management Software</p>
              <h1 className="home-h1">Real Estate runs on LandLord</h1>
              <h4 className="home-h4">
                "We’re here to help you manage your property in a more
                innovative way. Manage your properties with ease. When you say
                property management, we think Landlord."
              </h4>
              <Link to="/create" className="home-link">
                <button className="add-prop-btn">Add Property</button>
              </Link>
            </div>
            <div className="main-btn-sec">
              <Link to="/property" className="home-link">
                <button className="main-nav-btn">
                  Properties <i class="fa-solid fa-location-dot"></i>
                </button>
              </Link>
              <Link to="/documents" className="home-link">
                <button className="main-nav-btn">
                  Documents <i class="fa-solid fa-file"></i>
                </button>
              </Link>
              <Link to="/maintainence" className="home-link">
                <button className="main-nav-btn">
                  Maintainence <i class="fa-solid fa-list"></i>
                </button>
              </Link>
              <Link to="/sell" className="home-link">
                <button className="main-nav-btn">
                  Sell <i class="fa-solid fa-magnifying-glass"></i>
                </button>
              </Link>
            </div>
            <div className="show-sec">
              <h1 className="main-text">LandLord</h1>
            </div>
          </div>
          <div className="main-img-sec">
            <img
              src="/public/assets/Dashboard-main-img.gif"
              alt=""
              className="home-main-img"
            />
          </div>
        </div>

        <div className="explore-sec">
          <h1 className="home-h1" style={{ textAlign: "center" }}>
            Explore
          </h1>
          <Explore />
        </div>
      </div>
    </div>
  );
};

export default Home;
