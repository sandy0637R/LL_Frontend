import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const RefreshHandler = ({ setIsAuthenticated, setIsCheckingAuth }) => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Mocked token verification logic
      setIsAuthenticated(true); // Update based on real verification result
    } else {
      setIsAuthenticated(false);
    }
    setIsCheckingAuth(false); // Mark auth check as complete
  }, [setIsAuthenticated, setIsCheckingAuth, location, navigate]);

  return null;
};

export default RefreshHandler;
