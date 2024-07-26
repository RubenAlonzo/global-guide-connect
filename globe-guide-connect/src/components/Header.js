import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
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
              <li className="nav-item"><Link className="nav-link" to="#">Sign In</Link></li>
              <li className="nav-item"><Link className="btn btn-success text-white" to="#">Sign Up</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
