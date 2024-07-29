import React from 'react';
import { Container, Col, Form } from 'react-bootstrap';
import PlaceCard from '../components/PlaceCard';
import '../components/Guides.css';
import { placesData } from '../components/PlaceData';
import CustomButton from '../components/CustomButton';
import PopularGuides from '../components/PopularGuides';
import { isAuthenticated } from '../components/auth';

function App() {
    return (
        <div>
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
                    {isAuthenticated() && (
                        <CustomButton text="Add" />
                    )}
                </section>

                <section className="mb-5">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex flex-grow-1 align-items-center me-3">
                            <Form.Control type="text" placeholder="Search a country" className="me-2 rounded-pill" />
                            <CustomButton text="Go!" />
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

                <PopularGuides customText={'You may also like our Guides'} customStyle={{ fontSize: '2.5rem' }} />

            </Container>
        </div>
    );
}

export default App;
