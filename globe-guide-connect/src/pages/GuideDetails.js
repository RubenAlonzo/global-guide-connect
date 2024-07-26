import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import './GuideDetails.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Accordion from 'react-bootstrap/Accordion';

const guideData = [
    {
        id: "1",
        name: "John Doe",
        languages: "English, Spanish",
        rating: 5,
        gender: "male",
        description: "John Doe, a seasoned tourist guide, brings history to life with his engaging and informative tours. When guiding visitors through iconic landmarks like the Statue of Liberty, John creates an immersive experience. He begins by providing a rich historical background, explaining how the statue was a gift from France in 1886 and symbolizing freedom and democracy. As he leads his group onto the ferry, John points out significant landmarks along the way, keeping the journey lively with anecdotes and lesser-known facts.",
        price: "45",
      },
      {
        id: "2",
        name: "Jane Smith",
        languages: "English, French",
        rating: 4,
        gender: "female",
        description: "Jane Smith, a knowledgeable and passionate tourist guide, offers an unforgettable experience at the Italian Colosseum. With a background in Roman history and archaeology, Jane brings the ancient amphitheatre to life through vivid storytelling and detailed explanations. She expertly guides visitors through the Colosseum's arches and corridors, describing the grand spectacles and gladiatorial contests that once took place there. \n Jane's tours are interactive and engaging, encouraging visitors to imagine the sights and sounds of ancient Rome. She highlights the architectural marvels and engineering feats of the Colosseum, providing a comprehensive understanding of its historical significance. Her enthusiasm and ability to connect with her audience ensure that each tour is both educational and enjoyable. Visitors leave with a deep appreciation for Roman history and a memorable experience of one of the world's most iconic landmarks.",
        price: "60",
      },
      {
        id: "3",
        name: "Samuel Green",
        languages: "English, German",
        rating: 3,
        gender: "male",
        description: "Samuel Green, an expert guide specializing in German historical sites, provides an enriching and captivating tour experience. Whether leading visitors through the historic streets of Berlin, the fairytale castles of Bavaria, or the poignant remnants of World War II sites, Samuel's deep knowledge and passion for German history shine through. \nSamuel's tours are meticulously planned and tailored to the interests of his guests. He blends historical facts with compelling narratives, making each location's past come alive. His engaging storytelling, combined with a knack for uncovering hidden gems and lesser-known details, keeps visitors intrigued throughout the tour. Samuel also ensures that his tours are interactive, encouraging questions and discussions to deepen the experience.",
        price: "25",
      }
];
const faqs = [
    {
      question: "Why you should choose me",
      answer: "I will make an effort for you to have an amazing experience"
    },
    {
      question: "Where will we meet?",
      answer: "All the information will be shared on the WhatsApp group chat"
    },
    {
      question: "How long does it take?",
      answer: "Depending of the day and the quantity of people, it will take between 2 or 3 hours"
    },
    {
      question: "Any additional information?",
      answer: "Please ask all your questions on the WhatsApp group!"
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


const GuideDetails = () => {
    let { guideId } = useParams();
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    
    return(
        <div className="container pb-5">
           <p className="h3 py-3"><Link className="link-underline link-underline-opacity-0 link-dark" to={"/home"}>Back</Link></p>
            {guideData.filter(data => data.id === guideId).map(guide => (
                <div className="container-fluid ">
                    <div className="row gx-5">
                        <div className="col-lg-7 mb-5">
                            <img className="large-avatar rounded-circle" src={`https://xsgames.co/randomusers/assets/avatars/${guide.gender}/${guide.id}.jpg`} alt=""/>
                        </div>
                        <div className="col-lg-5" >
                        <form className="bg-body-secondary p-4 ms-3 rounded-2">
                            <legend className="text-center">Book your Guide</legend>
                            <div class="mb-3">
                                <input type="text" className="form-control" placeholder="First Name"/>
                            </div>
                            <div class="mb-3">
                                <input type="text" className="form-control" placeholder="Last Name"/>
                            </div>
                            <div class="mb-3">
                                <input type="Email" className="form-control" placeholder="Email"/>
                            </div>
                            <div class="mb-3">
                                <textarea className="form-control" rows={5} placeholder="Reach out Message"/>
                            </div>
                            <div className="d-grid gap-2">
                                <button class="btn btn-dark">Book a Guide</button>
                            </div>
                        </form>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between" style={{
                        width: "65%"
                    }}>
                        <div className="align-self-start">
                            <p className="h1">{guide.name}</p>
                            <p className="h1">{Stars(guide.rating)}</p>
                            <p className="h3 fw-light">{guide.languages}</p>
                        </div>
                        <div className="">
                            <p className="h3"><strong>${guide.price} per person per hour</strong></p>
                        </div>
                    </div>
                    <div className="w-50">
                        <p className="h2">About:</p>
                        <p>{guide.description}</p>
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

export default GuideDetails