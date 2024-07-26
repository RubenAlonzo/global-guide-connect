import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const allEntries = Object.entries(localStorage);
  let email;
  allEntries.forEach((entry) => {
        if (entry) {
          const loggedInUser = JSON.parse(entry[1]).isLoggedIn;
          if (loggedInUser) {
            email = entry[0];
          }
        }
      });
  const isLoggedIn = JSON.parse(localStorage.getItem(email))?.isLoggedIn;
  const navigate = useNavigate(); 

  const handleLogout = () => {

    const currentUser = JSON.parse(localStorage.getItem(email));
    if (currentUser) {
      currentUser.isLoggedIn = false;
      localStorage.setItem(email, JSON.stringify(currentUser));
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
