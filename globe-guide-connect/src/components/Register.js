import React, { useState } from "react";
import "./RegisterLoginForm.css"; // Import the CSS file
import { useNavigate } from "react-router-dom"; // Import useHistory for redirection

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Check if the email already exists in LocalStorage
    const existingUser = localStorage.getItem(email);
    if (existingUser) {
      setErrorMessage("This email is already registered");
      setTimeout(() => {
        setErrorMessage(""); // Clear any previous error messages
      }, 3000);
    } else {
      // Set isLoggedIn to false for other existing users
      const allKeys = Object.keys(localStorage);
      allKeys.forEach((key) => {
        if (key !== email) {
          const otherUser = JSON.parse(localStorage.getItem(key));
          if (otherUser) {
            otherUser.isLoggedIn = false;
            localStorage.setItem(key, JSON.stringify(otherUser));
          }
        }
      });
      // Store the new user's email and password in LocalStorage
      const userData = {
        email,
        password,
        isLoggedIn: true,
      };
      localStorage.setItem(email, JSON.stringify(userData));

      // Navigate to the home page
      navigate("/home");
    }
  };

  return (
    <div className="container">
      <h1 className="display-4">Register and be a guide</h1>

      <div className="register-form">
        <form className="form-border" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Value"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Value"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-register">
            Register
          </button>
        </form>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>
    </div>
  );
};

export default Register;

/*

const RegisterForm = () => {
  return (
    <div class="container">
        <h1 className="display-4">Register and be a guide</h1>

        <div class="register-form">
            <form className="form-border">
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" placeholder="Value" required/>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="Value" required/>
                </div>
                <button type="submit" class="btn btn-register">Register</button>
            </form>
        </div>
    </div>
  );
};

export default RegisterForm;

*/
