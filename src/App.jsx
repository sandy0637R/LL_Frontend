import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Property from "./Pages/Property/Property";
import Documents from "./Pages/Documents/Documents";
import Maintainence from "./Pages/Maintainence/Maintainence";
import Login from "./Pages/Login/Login";
import Explore from "./Pages/Explore/Explore";
import Help from "./Pages/Help/Help";
import Plans from "./Pages/Plans/Plans";
import Services from "./Pages/Services/Services";
import Create from "./Pages/Create/Create";
import Signup from "./Pages/Login/Signup";
import RefreshHandler from "./Components/Refresh";
import Profile from "./Pages/Profile/Profile";
import { ToastContainer } from "react-toastify";
import Sell from "./Pages/Sell/Sell";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  const PrivateRoute = ({ element }) => {
    if (isCheckingAuth) return null; // Wait for auth check
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  const PublicRoute = ({ element }) => {
    if (isCheckingAuth) return null; // Wait for auth check
    return isAuthenticated ? <Navigate to="/home" /> : element;
  };

  return (
    <Router>
      <RefreshHandler
        setIsAuthenticated={setIsAuthenticated}
        setIsCheckingAuth={setIsCheckingAuth}
      />
      <Navbar />

      {isCheckingAuth ? (
        <p>Loading...</p> // Optionally display a spinner here
      ) : (
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          {/* Private Routes */}
          <Route path="/home" element={<PrivateRoute element={<Home />} />} />
          <Route
            path="/documents"
            element={<PrivateRoute element={<Documents />} />}
          />
          <Route
            path="/create"
            element={<PrivateRoute element={<Create />} />}
          />
          <Route
            path="/property"
            element={<PrivateRoute element={<Property />} />}
          />
          <Route
            path="/maintainence"
            element={<PrivateRoute element={<Maintainence />} />}
          />
          <Route
            path="/explore"
            element={<PrivateRoute element={<Explore />} />}
          />
          <Route path="/help" element={<PrivateRoute element={<Help />} />} />
          <Route path="/plans" element={<PrivateRoute element={<Plans />} />} />
          <Route
            path="/services"
            element={<PrivateRoute element={<Services />} />}
          />
          <Route
            path="/profile"
            element={<PrivateRoute element={<Profile />} />}
          />
          <Route path="/sell" element={<PrivateRoute element={<Sell />} />} />
         
          {/* Public Routes */}
          <Route path="/login" element={<PublicRoute element={<Login />} />} />
          <Route
            path="/signup"
            element={<PublicRoute element={<Signup />} />}
          />
        </Routes>
      )}
      <Footer />
    </Router>
  );
}

export default App;
