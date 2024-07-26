import React, { useState } from "react";
import "./RegisterLoginForm.css";
import { useNavigate } from "react-router-dom"; 

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); 

    const existingUser = localStorage.getItem(email);
    if (existingUser) {
      setErrorMessage("This email is already registered");
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    } else {
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
      
      const userData = {
        email,
        password,
        isLoggedIn: true,
      };
      localStorage.setItem(email, JSON.stringify(userData));

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