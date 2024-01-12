import React from 'react';
import { render } from '@testing-library/react';
import WeatherCard from '../components/WeatherCard';

describe('WeatherCard Component', () => {
  it('renders with provided props', () => {
    const data = {
      wind: {
        speed: 10,
      },
      main: {
        temp: 25,
        humidity: 60,
        pressure: 1010,
      },
    };
    const title = 'Wind Speed';
    const unitOfMeasure = 'km/h';
    const icon = 'winds-weather-symbol';
    const value = 'wind';

    const { getByText, getByAltText } = render(
      <WeatherCard
        data={data}
        title={title}
        unitOfMeasure={unitOfMeasure}
        icon={icon}
        value={value}
      />
    );

    expect(getByText(title)).toBeInTheDocument();

    expect(getByText(`10 ${unitOfMeasure}`)).toBeInTheDocument();

    expect(getByAltText('weather icon')).toBeInTheDocument();
  });
});
