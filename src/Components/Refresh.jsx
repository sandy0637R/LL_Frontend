import React, { useEffect } from "react";

const RefreshHandler = ({ setIsAuthenticated, setIsCheckingAuth }) => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Mocked token verification logic
      setIsAuthenticated(true); // Update based on real verification result
    } else {
      setIsAuthenticated(false);
    }
    setIsCheckingAuth(false); // Mark auth check as complete
  }, [setIsAuthenticated, setIsCheckingAuth]);

  return null; // No UI for this component
};

export default RefreshHandler;
