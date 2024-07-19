import React from 'react';

const PopularPlaces = () => {
  return (
    <section className="popular-places py-5 bg-light">
      <div className="container">
        <h2 className="text-center">Most Popular Places</h2>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card">
              <img src="https://via.placeholder.com/150" className="card-img-top" alt="Place 1" />
              <div className="card-body">
                <h5 className="card-title">Place 1</h5>
                <p className="card-text">Description of Place 1.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://via.placeholder.com/150" className="card-img-top" alt="Place 2" />
              <div className="card-body">
                <h5 className="card-title">Place 2</h5>
                <p className="card-text">Description of Place 2.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://via.placeholder.com/150" className="card-img-top" alt="Place 3" />
              <div className="card-body">
                <h5 className="card-title">Place 3</h5>
                <p className="card-text">Description of Place 3.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <button className="btn btn-dark">Show All Places</button>
        </div>
      </div>
    </section>
  );
};

export default PopularPlaces;
