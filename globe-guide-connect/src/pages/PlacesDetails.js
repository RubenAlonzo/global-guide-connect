import React from "react";
import { Link, useParams } from "react-router-dom";
import './PlacesDetails.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const placeData = [
    {
        id: "1",
        country: "France",
        placeName: "Eiffel Tower",
        rating: 4,
        description: "Locally nicknamed \"La dame de fer\" (French for \"Iron Lady\"), it was constructed as the centerpiece of the 1889 World's Fair, and to crown the centennial anniversary of the French Revolution. Although initially criticised by some of France's leading artists and intellectuals for its design, it has since become a global cultural icon of France and one of the most recognisable structures in the world.",
        imageUrl: "https://www.travelandleisure.com/thmb/SPUPzO88ZXq6P4Sm4mC5Xuinoik=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/eiffel-tower-paris-france-EIFFEL0217-6ccc3553e98946f18c893018d5b42bde.jpg",
        imgURL1: "https://i.natgeofe.com/k/6d4021bf-832e-49f6-b898-27b7fcd7cbf7/eiffel-tower-ground-up_2x1.jpg",
        imgURL2: "https://res.klook.com/image/upload/c_fill,w_750,h_500/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/t3f9zjjeu2nebhdcmaka.jpg"
      }
]

function Stars ( rating ){
        const starsArr = [];
        for (let i = 0; i < 5; i++) {
            if (rating - 1 < i) {
                starsArr.push("bi bi-star");
            } else {
                starsArr.push("bi bi-star-fill");  
            }
        }
    return starsArr.map((el) => <i className={el}></i>)
}


const PlacesDetails = () => {
    let { placeId } = useParams();
    
    return(
        <div className="container">
           <p className="h3 py-3"><Link className="link-underline link-underline-opacity-0 link-dark" to={"/home"}>Back</Link></p>
            {placeData.filter(data => data.id === placeId).map(place => (
                <div className="container-fluid">
                    <div className="grid gap-3 mb-2 row row-cols-2">
                        <div className="col-8">
                            <img className="img-fluid rounded" src={place.imageUrl} alt=""/>
                        </div>
                        <div className="col-3">
                            <div className="row row-cols-1 row-gap-5">
                                <div className="col">
                                    <img className="img-fluid rounded" src={place.imgURL1} alt=""/>
                                </div>
                                <div className="col">
                                    <img className="img-fluid rounded" src={place.imgURL2} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="h1">{place.placeName}</p>
                    <p className="h1">{Stars(place.rating)}</p>
                    <p className="h3 fw-light">{place.country}</p>
                    <br/>
                    <br/>
                    <p className="h2">About:</p>
                    <p>{place.description}</p>
                </div>
            ))}   
        </div>  
        
    )
     
}

export default PlacesDetails