import React from 'react';

const Header = () => {
  return (
    <header className="py-3">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="logo">GG Connect</h1>
          <nav>
            <ul className="nav">
              <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Places</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Guides</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Sign In</a></li>
              <li className="nav-item"><a className="nav-link btn btn-success text-white" href="#">Sign Up</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
