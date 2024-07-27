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

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const findUser = users.find((user) => user.email === email);

    if (findUser) {
      setErrorMessage("This email is already registered");
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);     
       return;
    }
    
    users.forEach((user) => {
      if (user.email !== email) {
        user.isLoggedIn = false;
      }
    });

    const userData = {
      email,
      password,
      isLoggedIn: true,
    };
    
    users.push(userData);

    localStorage.setItem("users", JSON.stringify(users));

    navigate("/home");
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
