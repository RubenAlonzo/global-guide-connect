import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import './PlacesDetails.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Accordion from 'react-bootstrap/Accordion';

const placeData = [
    {
        id: "1",
        country: "France",
        placeName: "Eiffel Tower",
        rating: 4,
        description: "Locally nicknamed \"La dame de fer\" (French for \"Iron Lady\"), it was constructed as the centerpiece of the 1889 World's Fair, and to crown the centennial anniversary of the French Revolution. Although initially criticised by some of France's leading artists and intellectuals for its design, it has since become a global cultural icon of France and one of the most recognisable structures in the world.",
        experience: "Visiting the Eiffel Tower is an unforgettable experience that immerses you in the heart of Parisian culture and history. As you approach this iconic structure, you'll be struck by its sheer magnitude and intricate iron lattice design. The anticipation builds as you ascend, whether by elevator or the more adventurous route of climbing the stairs. From the various observation decks, you'll be treated to breathtaking panoramic views of Paris, including famous landmarks like the Seine River, the Louvre, and Notre-Dame Cathedral. The atmosphere is filled with a sense of wonder and romance, especially if you visit in the evening when the tower sparkles with thousands of twinkling lights. The experience is often complemented by the delightful sounds of street musicians and the enticing aromas from nearby cafés, making a visit to the Eiffel Tower a feast for the senses and a cherished memory for a lifetime.",
        imageUrl: "https://www.travelandleisure.com/thmb/SPUPzO88ZXq6P4Sm4mC5Xuinoik=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/eiffel-tower-paris-france-EIFFEL0217-6ccc3553e98946f18c893018d5b42bde.jpg",
        imgURL1: "https://i.natgeofe.com/k/6d4021bf-832e-49f6-b898-27b7fcd7cbf7/eiffel-tower-ground-up_2x1.jpg",
        imgURL2: "https://res.klook.com/image/upload/c_fill,w_750,h_500/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/t3f9zjjeu2nebhdcmaka.jpg"
      },
      {
        id: "2",
        country: "Italy",
        placeName: "Colisseum",
        rating: 3,
        description: "The Italian Colosseum, also known as the Flavian Amphitheatre, is an ancient Roman structure located in the heart of Rome. Completed in 80 AD, it was used for gladiatorial contests, public spectacles, and other entertainment events. It is the largest ancient amphitheatre ever built, capable of seating around 50,000 spectators. The Colosseum is an iconic symbol of Imperial Rome and is one of the most visited tourist attractions in the world. Its architecture and engineering have made it an enduring symbol of Roman innovation and culture.",
        experience: "Visiting the Colosseum is like stepping back in time to ancient Rome. As you enter this monumental amphitheatre, you can imagine the roar of the crowd and the intensity of the gladiatorial games that once took place there. Walking through its arches, you'll see the intricate underground network of tunnels where animals and fighters were held before their dramatic entrances. Climbing the stairs to the upper levels, you'll be rewarded with a panoramic view of the arena and the surrounding ruins of the Roman Forum and Palatine Hill. ",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/1200px-Colosseo_2020.jpg",
        imgURL1: "https://cdn.britannica.com/03/98303-050-C8036C9D/Interior-Colosseum-Rome.jpg",
        imgURL2: "https://media.tacdn.com/media/attractions-splice-spp-720x480/10/6f/b7/80.jpg"
      },
      {
        id: "3",
        country: "United States",
        placeName: "Statue of Liberty",
        rating: 5,
        description: "The Statue of Liberty, located on Liberty Island in New York Harbor, is a colossal neoclassical sculpture designed by Frédéric Auguste Bartholdi and dedicated on October 28, 1886. A gift from the people of France to the United States, it symbolizes freedom and democracy.",
        experience: "Visiting the Statue of Liberty offers a profound experience filled with historical and cultural significance. As you approach Liberty Island by ferry, the statue's grandeur becomes increasingly impressive against the skyline. Once on the island, you can explore the museum at the statue's base, which provides fascinating insights into its construction, history, and symbolic importance. Climbing to the pedestal offers stunning views of New York Harbor and the Manhattan skyline.",
        imageUrl: "https://www.nps.gov/stli/planyourvisit/images/Liberty-statue-with-manhattan_1.jpg?maxwidth=1300&maxheight=1300&autorotate=false",
        imgURL1: "https://www.thoughtco.com/thmb/3DlDPE4JqEnhfl4lmDdSMKKtMPU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/usa-new-york-city-statue-of-liberty-close-up-450680-001-583311ef3df78c6f6a649e46.jpg",
        imgURL2: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Liberty_Island_photo_Don_Ramey_Logan.jpg/1200px-Liberty_Island_photo_Don_Ramey_Logan.jpg"
      }
];
const faqs = [
    {
      question: "What's Included?",
      answer: "Our tour includes skip-the-line entry and a guided visit."
    },
    {
      question: "What should I bring?",
      answer: "Bring a valid ID, comfortable shoes, and a camera. Don’t forget a light jacket in case it’s chilly!"
    },
    {
      question: "How's the weather?",
      answer: "Weather can vary, so check the forecast before you go."
    },
    {
      question: "Can I get in a vehicle?",
      answer: "It is recommended to come either by taxi or public trasport, please check with your guide for any vehicle permisions."
    }
  ];

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
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    
    return(
        <div className="container pb-5">
           <p className="h3 py-3"><Link className="link-underline link-underline-opacity-0 link-dark" to={"/home"}>Back</Link></p>
            {placeData.filter(data => data.id === placeId).map(place => (
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-8 mb-4">
                            <img className="large-image rounded" src={place.imageUrl} alt=""/>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <img className="small-image rounded" src={place.imgURL1} alt=""/>
                            <img className="small-image rounded mb-1" src={place.imgURL2} alt=""/>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between w-50">
                        <div className="align-self-start">
                            <p className="h1">{place.placeName}</p>
                            <p className="h1">{Stars(place.rating)}</p>
                            <p className="h3 fw-light">{place.country}</p>
                        </div>
                        <div>
                            <button className="btn btn-dark">Find Guides!</button>
                        </div>
                    </div>

                    <div className="w-50">
                        <p className="h2">About:</p>
                        <p>{place.description}</p>
                        <p className="h2">What will you experience:</p>
                        <p>{place.experience}</p>
                        <p className="h2">Frequently Asked Questions:</p>
                        <Accordion defaultActiveKey="0">
                            {faqs.map((faq, index) => (
                                <Accordion.Item eventKey={index.toString()} key={index}>
                                <Accordion.Header style={{ fontWeight: 'bold !important'}}>{faq.question}</Accordion.Header>
                                <Accordion.Body>
                                    {faq.answer}
                                </Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion>
                    </div>
                </div>
            ))}   
        </div>  
        
    )
     
}

export default PlacesDetails