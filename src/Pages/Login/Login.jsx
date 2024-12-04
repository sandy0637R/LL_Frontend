import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../../utils/Utils";
import axios from "axios";

function Login() {
  const emailref = useRef();
  const passwordref = useRef();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = emailref.current.value;
    const password = passwordref.current.value;
    const loginInfo = { email, password };
    try {
      const response = await axios.post("https://land-lord.onrender.com/auth/login", loginInfo);
      const { success, message, jwtToken, name, email, error } = response.data;

      if (success) {
        handleSuccess(message);
        localStorage.setItem("token", jwtToken);
        localStorage.setItem("loggedInUser", name);
        localStorage.setItem("email", email);
        setTimeout(() => {
          navigate("/home"); // Redirect after 1 second
        }, 1000);
      } else if (error) {
        const details =
          error?.details?.[0]?.message || "An unknown error occurred";
        handleError(details);
      } else if (!success) {
        handleError(message);
      }
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
          <h1 className="fw-bold mb-0 fs-3">Login</h1>
          <p className="text-muted">Access your account</p>
        </div>
        <form onSubmit={handleLogin}>
          {/* Email Field */}
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control rounded-pill px-3"
              id="floatingInput"
              placeholder="name@example.com"
              ref={emailref}
              autoFocus
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
          {/* Login Button */}
          <button
            className="w-100 btn btn-primary rounded-pill py-2 mb-3"
            type="submit"
          >
            Login
          </button>
          {/* Signup Link */}
          <div className="text-center">
            <small className="text-muted">
              New user?{" "}
              <Link to={"/signup"} className="text-decoration-none">
                Sign up here
              </Link>
            </small>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
