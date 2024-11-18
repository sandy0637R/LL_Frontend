import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  return (
    <div className="nav-main">
      <div className="nav-logo">Logo</div>
      <div className="navgators">
        <ul className="nav-ul">
          {isHomePage ? (
            <>
              <Link
                to="/explore"
                className={`link ${
                  location.pathname === "/explore" ? "active-link" : ""
                }`}
              >
                <li className="nav-li">Explore</li>
              </Link>
              <Link
                to="/help"
                className={`link ${
                  location.pathname === "/help" ? "active-link" : ""
                }`}
              >
                <li className="nav-li">Help</li>
              </Link>
              <Link
                to="/services"
                className={`link ${
                  location.pathname === "/services" ? "active-link" : ""
                }`}
              >
                <li className="nav-li">Services</li>
              </Link>
              <Link
                to="/plans"
                className={`link ${
                  location.pathname === "/plans" ? "active-link" : ""
                }`}
              >
                <li className="nav-li">Plans</li>
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/"
                className={`link ${
                  location.pathname === "/" ? "active-link" : ""
                }`}
              >
                <li className="nav-li">Home</li>
              </Link>
              <Link
                to="/property"
                className={`link ${
                  location.pathname === "/property" ? "active-link" : ""
                }`}
              >
                <li className="nav-li">Properties</li>
              </Link>
              <Link
                to="/create"
                className={`link ${
                  location.pathname === "/create" ? "active-link" : ""
                }`}
              >
                <li className="nav-li">Add Property</li>
              </Link>
              <Link
                to="/documents"
                className={`link ${
                  location.pathname === "/documents" ? "active-link" : ""
                }`}
              >
                <li className="nav-li">Documents</li>
              </Link>
              <Link
                to="/maintainence"
                className={`link ${
                  location.pathname === "/maintainence" ? "active-link" : ""
                }`}
              >
                <li className="nav-li">Maintainence</li>
              </Link>
            </>
          )}

          <Link
            to="/login"
            className={`link ${
              location.pathname === "/login" ? "active-link" : ""
            }`}
          >
            <li className="nav-li">Login</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
