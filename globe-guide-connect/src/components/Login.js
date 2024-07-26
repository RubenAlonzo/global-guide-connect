import React, { useState } from "react";
import "./RegisterLoginForm.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); 

    const userData = localStorage.getItem(email);
    if (!userData) {
      setErrorMessage("This email does not exist");
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
      return;
    }

    const user = JSON.parse(userData);

    if (user.password !== password) {
      setErrorMessage("Incorrect password");
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
      return; 
    }

    user.isLoggedIn = true; 
    localStorage.setItem(email, JSON.stringify(user)); 
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
    setErrorMessage(""); 
    navigate("/home");
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
