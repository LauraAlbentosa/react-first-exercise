// src/SayHello.jsx
import React from 'react';

const calculateSquareArea = ({side}) => {
    const area = side * side;
  return <h2>El área es: {area}</h2>;
};

export default calculateSquareArea;
