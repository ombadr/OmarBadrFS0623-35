import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import Search from '../components/Search';
import WelcomeCard from '../components/WelcomeCard';

describe('MyDate mounting', () => {
  it('render MyDate', () => {
    const { getByText } = render(<App />);
    const myDateElement = getByText(/Friday/i);
    expect(myDateElement).toBeInTheDocument();
  });
});

describe('Search mounting', () => {
  it('render Search', () => {
    const { getByTestId } = render(<Search />);
    const searchElement = getByTestId('search-component');
    expect(searchElement).toBeInTheDocument();
  });
});

describe('WelcomeCard mounting', () => {
  it('render WelcomeCard', () => {
    const { getByText } = render(<WelcomeCard />);
    const welcomeCard = getByText('Ready to check the current temperature?');
    expect(welcomeCard).toBeInTheDocument();
  });
});
