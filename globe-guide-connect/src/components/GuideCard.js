import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaGlobe, FaEdit, FaTrash } from 'react-icons/fa';

const GuideCard = ({ guide }) => {
  return (
    <Card className="position-relative rounded-3 shadow-sm">
      <Card.Img variant="top" src={guide.image} style={{ height: '150px', objectFit: 'cover' }} alt={`${guide.name} image`} />
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <Card.Title><strong>{guide.name}</strong></Card.Title>
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
        </div>
        <Card.Text>Price: ${guide.price} /hour</Card.Text>
        <Card.Text className="d-flex align-items-center">
          <FaGlobe className="me-2" />
          {guide.languages.join(', ')}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default GuideCard;
