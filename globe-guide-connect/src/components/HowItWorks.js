import React from 'react';

const HowItWorks = () => {
  return (
    <section className="how-it-works py-5">
      <div className="container">
        <h2 className="text-center">How does it work?</h2>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card py-4">
              <div className="card-body">
                <h5 className="card-title text-center">Step 1</h5>
                <p className="card-text text-center">Search for guides and experiences based on your interests.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card py-4">
              <div className="card-body">
                <h5 className="card-title text-center">Step 2</h5>
                <p className="card-text text-center">Check profiles and reviews to find the best match for your needs.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card py-4">
              <div className="card-body">
                <h5 className="card-title text-center">Step 3</h5>
                <p className="card-text text-center">Book your guide and enjoy your personalized experience.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
