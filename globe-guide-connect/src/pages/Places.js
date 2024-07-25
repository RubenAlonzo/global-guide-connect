import React, { Component } from 'react';
import { Container, Col, Form } from 'react-bootstrap';
import PlaceCard from '../components/PlaceCard';
import GuideCard from '../components/GuideCard';
import Header from '../components/Header';
import '../components/Guides.css';
import { placesData, guidesData} from '../components/PlaceData';
import CustomButton from '../components/CustomButton';

function App() {
    return (
        <div>
            <Header />
            <Container>
                <section id='hero-section' className="hero-section d-flex align-items-center my-4">
                    <div className="container">
                        <div className="row align-items-center">
                            <div>
                                <h1 className="text-center my-5 py-5 display-4">Explore the world most amazing places</h1>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="d-flex align-items-center mb-3 py-3">
                    <h1 className="mb-2 me-3">Places:</h1>
                    <CustomButton text="Add"/>
                </section>

                <section className="mb-5">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex flex-grow-1 align-items-center me-3">
                            <Form.Control type="text" placeholder="Search a country" className="me-2 rounded-pill" />
                            <CustomButton text="Go!"/>
                        </div>
                        <Form.Check
                            type="checkbox"
                            id="show-only-my-places"
                            label="Show only my places"
                            defaultChecked
                        />
                    </div>
                </section>

                <section >
                    <div className="row">
                        {placesData.map((place) => (
                            <Col md={4} className="mb-4" key={place.id}>
                                <PlaceCard place={place} />
                            </Col>
                        ))}
                    </div>
                </section>

                <section className="my-5">
                    <h1>You may also like our Guides</h1>
                </section>

                <section>
                    <div className="row">
                        {guidesData.slice(0, 4).map((guide) => (
                            <Col md={4} className="mb-4" key={guide.id}>
                                <GuideCard guide={guide} />
                            </Col>
                        ))}
                    </div>
                </section>

                <section className="text-center my-4">
                <CustomButton text="Show All Guides" />
                </section>
            </Container>
        </div>
    );
}

export default App;
