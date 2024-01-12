import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const WeatherCard = ({ data, title, unitOfMeasure, icon, value }) => {
  let valueCard;

  if (value === 'wind') {
    valueCard = data.wind.speed;
  } else {
    valueCard = data.main[value];
  }

  return (
    <Container className='bg-warning m-3 rounded py-3'>
      <Row>
        <Col className='align-self-center text-center'>
          <img src={`icons/${icon}.png`} width='50px' alt='weather icon' />
        </Col>
        <Col className='align-self-center'>
          <p className='m-0'>{title}</p>
          <p className='m-0 fs-2 fw-bold'>
            {Math.round(valueCard)} {unitOfMeasure}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default WeatherCard;
