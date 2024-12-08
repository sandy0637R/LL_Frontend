import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { handleError, handleSuccess } from "../../utils/Utils";
import { ToastContainer } from "react-toastify";
import axios from "axios";

function Signup() {
  const nameref = useRef();
  const emailref = useRef();
  const passwordref = useRef();
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    const name = nameref.current.value;
    const email = emailref.current.value;
    const password = passwordref.current.value;
    const signupInfo = { name, email, password };
    try {
      const response = await axios.post("http://localhost:8080/auth/signup", signupInfo);
      const { success, message, error } = response.data;

      if (success) {
        handleSuccess(message); // Show success toast
        setTimeout(() => {
          navigate("/login"); // Redirect after 1 second
        }, 1000);
      } else if (error) {
        const details =
          error?.details?.[0]?.message || "An unknown error occurred";
        handleError(details);
      } else if (!success) {
        handleError(message);
      }
      nameref.current.value = "";
      emailref.current.value = "";
      passwordref.current.value = "";
    } catch (err) {
      const errorMessage = err.response?.data?.message || "An error occurred";
      handleError(errorMessage);
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div
        className="card shadow p-4 rounded"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <div className="text-center mb-4">
          <h1 className="fw-bold mb-0 fs-3">Sign Up</h1>
          <p className="text-muted">Create your account</p>
        </div>
        <form onSubmit={handleSignup}>
          {/* Name Field */}
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control rounded-pill px-3"
              id="name"
              placeholder="Enter your name"
              ref={nameref}
              autoFocus
            />
            <label htmlFor="name">Enter your name</label>
          </div>
          {/* Email Field */}
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control rounded-pill px-3"
              id="floatingInput"
              placeholder="name@example.com"
              ref={emailref}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          {/* Password Field */}
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control rounded-pill px-3"
              id="floatingPassword"
              placeholder="Password"
              ref={passwordref}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          {/* Signup Button */}
          <button
            className="w-100  rounded-pill py-2 mb-3 btn btn-primary"
            type="submit"
          >
            Sign Up
          </button>
          {/* Login Link */}
          <div className="text-center">
            <small className="text-muted">
              Already have an account?{" "}
              <Link to={"/login"} className="text-decoration-none">
                Login here
              </Link>
            </small>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Signup;
