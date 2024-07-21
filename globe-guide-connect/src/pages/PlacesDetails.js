import React from "react";
import { Link, useParams } from "react-router-dom";

const placeData = [
    {
        id: "1",
        country: "France",
        placeName: "Eiffel Tower",
        description: "Experience the magic of Paris from the top of this iconic tower.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Eiffel_tower_paris.jpg/512px-Eiffel_tower_paris.jpg"
      }
]

const PlacesDetails = () => {
    let { placeId } = useParams();
    return(
        <div className="container">
           <p className="h3 py-3"><Link className="link-underline link-underline-opacity-0 link-dark" to={"/home"}>Back</Link></p>
            {placeData.filter(data => data.id === placeId).map(place => (
                <p className="h1">{place.country}</p>
            ))}   
        </div>  
        
    )
     
}

export default PlacesDetails