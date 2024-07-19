import React from 'react';
import './SearchBar.css'; // Import the CSS file

const SearchBar = () => {
  return (
    <section className="hero-section d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="display-4">Explore amazing places with the best guides</h1>
            <div className="input-group mt-4">
              <input type="text" className="form-control" placeholder="Places" />
              <div className="input-group-append">
                <button className="btn btn-primary" type="button">Search</button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="image-placeholder">
              <img src="https://plus.unsplash.com/premium_photo-1687653079484-12a596ddf7a9?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hero" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
