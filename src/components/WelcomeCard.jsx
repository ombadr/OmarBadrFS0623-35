import React from 'react';
import { Container } from 'react-bootstrap';

const WelcomeCard = () => {
  return (
    <Container className='bg-warning m-3 rounded py-3 text-center shadow-lg'>
      <h1 className='text-dark font-weight-bold'>Welcome! 👋🏻</h1>
      <p className='text-dark mt-3'>
        🔍 <strong>Ready to check the current temperature?</strong> <br />
        <br />
        Just type in the name of your city in the search bar above and discover
        the latest weather details in a breeze!
      </p>
    </Container>
  );
};

export default WelcomeCard;
