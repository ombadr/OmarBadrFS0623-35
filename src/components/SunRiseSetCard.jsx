import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const SunRiseSetCard = ({ data, value, title, icon }) => {
  let valueCard;

  if (value === 'sunrise') {
    valueCard = data.sys.sunrise;
  } else {
    valueCard = data.sys.sunset;
  }

  const time = new Date(valueCard * 1000);

  const options = {
    hour: '2-digit',
    minute: '2-digit',
  };

  const formattedTime = time
    .toLocaleTimeString('it-IT', options)
    .replace(':', '.');

  return (
    <Container className='bg-warning m-3 rounded'>
      <Row className='align-items-center py-3'>
        <Col className='text-center'>
          <img height='50px' src={`icons/${icon}.png`} alt='weather icon' />
        </Col>
        <Col className='align-self-center'>
          <p className='m-0'>{title}</p>
          <h4 className='m-0 fw-bold'>{formattedTime}</h4>
        </Col>
      </Row>
    </Container>
  );
};

export default SunRiseSetCard;
