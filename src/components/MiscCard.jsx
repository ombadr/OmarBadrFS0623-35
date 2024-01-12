import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const MiscCard = ({ data }) => {
  const currentTime = data.dt * 1000;
  const date = new Date(currentTime);

  const options = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: 'Europe/Rome',
  };

  const formattedTime = date
    .toLocaleTimeString('it-IT', options)
    .replace(':', '.');

  const capitalFirstLetter = (word) => {
    return word[0].toUpperCase() + word.slice(1);
  };

  let weatherDescription = capitalFirstLetter(data.weather[0].description);
  return (
    <Container className='bg-warning m-3 rounded p-2'>
      <Row>
        <Col className='align-self-center'>
          <h3>{data.city}</h3>
        </Col>
        <Col className='align-self-center'>
          <p className='text-center m-0 fw-bold fs-4'>{formattedTime}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>{Math.round(data.main.temp)}°C</h1>
          <p>
            Weather: <span className='fw-bold'>{weatherDescription}</span>
          </p>
        </Col>
        <Col>
          <img src={`icons/${data.weather[0].icon}.png`} alt='weather icon' />
        </Col>
      </Row>
    </Container>
  );
};

export default MiscCard;
