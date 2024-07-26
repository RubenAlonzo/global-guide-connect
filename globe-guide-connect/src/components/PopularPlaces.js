import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

// Source for places images: https://commons.wikimedia.org/wiki/Main_Page
// Search for a place, pick an image with nice ratio, and copy the URL for around 512 × 768 pixels
const places = [
  {
    id: 1,
    country: "France",
    placeName: "Eiffel Tower",
    description: "Experience the magic of Paris from the top of this iconic tower.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Eiffel_tower_paris.jpg/512px-Eiffel_tower_paris.jpg"
  },
  {
    id: 2,
    country: "Italy",
    placeName: "Colosseum",
    description: "Step back in time and marvel at the grandeur of ancient Rome.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Roman_Colosseum_5.jpg/360px-Roman_Colosseum_5.jpg"
  },
  {
    id: 3,
    country: "USA",
    placeName: "Statue of Liberty",
    description: "Be inspired by the symbol of freedom and democracy in New York Harbor.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Statue_of_Liberty_Paris_2007-05-29.jpg/576px-Statue_of_Liberty_Paris_2007-05-29.jpg"
  }
];

const PopularPlaces = () => {

  const navigate = useNavigate();

  const ShowAllPlaces = () => {
    navigate('/places');
  };

  return (
    <section className="popular-places py-5 bg-light">
      <div className="container">
        <h2 className="text-center">Most Popular Places</h2>
        <div className="row mt-4">
          {places.map(place => (  
              <div className="col-md-4" key={place.id}>
                <div className="card">
                  <img src={place.imageUrl} className="card-img-top" style={{maxHeight:'354px'}} alt={place.placeName} />
                  <div className="card-body">
                  <Link to={"/place-details/"+place.id}>
                    <h5 className="card-title">{place.placeName}</h5>
                  </Link>
                    <p className="card-text"><strong>Country:</strong> {place.country}</p>
                    <p className="card-text">{place.description}</p>
                  </div>
                </div>
              </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <button className="btn btn-dark" onClick={ShowAllPlaces}>Show All Places</button>
        </div>
      </div>
    </section>
  );
};

export default PopularPlaces;
