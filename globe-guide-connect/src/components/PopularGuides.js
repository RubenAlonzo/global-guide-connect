import React from 'react';

const PopularGuides = () => {
  return (
    <section className="popular-guides py-5">
      <div className="container">
        <h2 className="text-center">Most Popular Guides</h2>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card">
              <img src="https://via.placeholder.com/150" className="card-img-top" alt="Guide 1" />
              <div className="card-body">
                <h5 className="card-title">Guide 1</h5>
                <p className="card-text">Description of Guide 1.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://via.placeholder.com/150" className="card-img-top" alt="Guide 2" />
              <div className="card-body">
                <h5 className="card-title">Guide 2</h5>
                <p className="card-text">Description of Guide 2.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://via.placeholder.com/150" className="card-img-top" alt="Guide 3" />
              <div className="card-body">
                <h5 className="card-title">Guide 3</h5>
                <p className="card-text">Description of Guide 3.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <button className="btn btn-dark">Show All Guides</button>
        </div>
      </div>
    </section>
  );
};

export default PopularGuides;
