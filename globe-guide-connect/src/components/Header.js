import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {

  let users = JSON.parse(localStorage.getItem("users")) || [];
  let isLoggedIn = false;
  let currentUserEmail = null;

  users.forEach(user => {
    if (user.isLoggedIn) {
      isLoggedIn = true;
      currentUserEmail = user.email;
    }
  });

  const navigate = useNavigate(); 

  const handleLogout = () => {

    const findLoggedInUser = users.find(user => user.email === currentUserEmail);

    if (findLoggedInUser) {
      findLoggedInUser.isLoggedIn = false;
      users = users.map((user) =>
        user.email === currentUserEmail ? findLoggedInUser : user
      );
      localStorage.setItem("users", JSON.stringify(users));
    }
    navigate("/home");
  };

  return (
    <header className="py-2 bg-white sticky-top shadow-sm">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="logo">GG Connect</h1>
          <nav>
            <ul className="nav">
              <li className="nav-item"><Link className="nav-link" to="/home">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/places">Places</Link></li>
              <li className="nav-item"><Link className="nav-link" to="#">Guides</Link></li>
              {isLoggedIn ? (
                <li className="nav-item">
                  <button className="nav-link" onClick={handleLogout}>Log Out</button>
                </li>
              ) : (
                <li className="nav-item"><Link className="nav-link" to="/login">Sign In</Link></li>
              )}
              <li className="nav-item"><Link className="btn btn-success text-white" to="/register">Sign Up</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
