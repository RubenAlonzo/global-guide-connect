import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaMapMarkerAlt, FaStar, FaEdit, FaTrash } from 'react-icons/fa';
import { isAuthenticated } from './auth';

const PlaceCard = ({ place }) => {
  return (
    <Card className="position-relative rounded-4 shadow-sm">
      <Card.Img variant="top" src={place.image} style={{ height: '150px', objectFit: 'cover' }} alt={`${place.name} image`} />
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <div>
            {Array.from({ length: 5 }, (_, index) => (
              <FaStar key={index} color={index < place.rating ? '#FFD700' : '#E4E5E9'} />
            ))}
          </div>
          {isAuthenticated() && (
            <div className="position-absolute end-0 m-2 d-flex">
              <Button
                variant="outline-warning"
                className="d-flex align-items-center justify-content-center me-2 rounded-circle"
                style={{ width: '36px', height: '36px', padding: '0' }}
              >
                <FaEdit />
              </Button>
              <Button
                variant="outline-danger"
                className="d-flex align-items-center justify-content-center rounded-circle"
                style={{ width: '36px', height: '36px', padding: '0' }}
              >
                <FaTrash />
              </Button>
            </div>
          )}
        </div>
        <Card.Title><strong>{place.name}</strong></Card.Title>
        <Card.Text className="d-flex align-items-center">
          <FaMapMarkerAlt className="me-2" />
          {place.location}
        </Card.Text>
        <Card.Text>${place.price} /pp a day</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PlaceCard;
