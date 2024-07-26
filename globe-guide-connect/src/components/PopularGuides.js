import React from 'react';
import { Link } from 'react-router-dom';


const guides = [
  {
    id: 1,
    fullName: "John Doe",
    gender: "male",
    location: "New York, USA",
    costPerHour: 20,
    languages: ["English", "Spanish"]
  },
  {
    id: 2,
    fullName: "Jane Smith",
    gender: "female",
    location: "Paris, France",
    costPerHour: 25,
    languages: ["English", "French"]
  },
  {
    id: 3,
    fullName: "Samuel Green",
    gender: "male",
    location: "Berlin, Germany",
    costPerHour: 30,
    languages: ["English", "German"]
  }
];

const PopularGuides = ({ customText, customStyle }) => {
  return (
    <section className="popular-guides py-5">
      <div className="container">
        <h2 className="text-center" style={customStyle}>{customText}</h2>
        <div className="row mt-4">
          {guides.map(guide => (
            <div className="col-md-4" key={guide.id}>
              <div className="card">
                <img src={`https://xsgames.co/randomusers/assets/avatars/${guide.gender}/${guide.id}.jpg`} className="card-img-top" alt={guide.fullName} />
                <div className="card-body">
                  <Link to={"/guide-details/"+guide.id}>
                  <h5 className="card-title">{guide.fullName}</h5>
                  </Link>
                  <p className="card-text"><strong>Price:</strong> ${guide.costPerHour}/per hour per person</p>
                  <p className="card-text mb-1">Location: {guide.location}</p>
                  <p className="card-text">Languages: {guide.languages.join(', ')}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <button className="btn btn-dark">Show All Guides</button>
        </div>
      </div>
    </section>
  );
};

export default PopularGuides;
