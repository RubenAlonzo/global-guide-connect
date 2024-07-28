import React from 'react';
import { Button } from 'react-bootstrap';

const CustomButton = ({ text, ...props }) => {
  return (
    <Button
      variant="dark"
      style={{ width: '150px', textAlign: 'center' }}
      {...props}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
