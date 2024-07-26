import React, { useState } from "react";
import "./RegisterLoginForm.css"; // Import the CSS file
import { useNavigate } from "react-router-dom"; // Import useHistory for redirection

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Check if user exists in LocalStorage
    const userData = localStorage.getItem(email);
    if (!userData) {
      setErrorMessage("This email does not exist");
      setTimeout(() => {
        setErrorMessage(""); // Clear any previous error messages
      }, 3000);
      return; // Exit if email is not found
    }

    // Parse the user data
    const user = JSON.parse(userData);

    // Check if the password is correct
    if (user.password !== password) {
      setErrorMessage("Incorrect password");
      setTimeout(() => {
        setErrorMessage(""); // Clear any previous error messages
      }, 3000);
      return; // Exit if password is incorrect
    }

    // If both email and password are valid
    user.isLoggedIn = true; // Update the user's logged-in status
    localStorage.setItem(email, JSON.stringify(user)); // Save updated user data
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
    setErrorMessage(""); // Clear any previous error messages
    navigate("/home"); // Redirect to the dashboard or desired route
  };

  return (
    <div className="container">
      <h1 className="display-4">Login</h1>

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
            Sign In
          </button>
        </form>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>
    </div>
  );
};

export default Login;
