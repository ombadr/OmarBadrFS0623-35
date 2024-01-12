import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap';
import Search from './components/Search';
import WeatherCard from './components/WeatherCard';
import ForecastGraph from './components/ForecastGraph';
import MySidebar from './components/MySidebar';
import MyDate from './components/MyDate';
import { WEATHER_API_KEY, WEATHER_API_URL } from './api';
import { useState } from 'react';
import WelcomeCard from './components/WelcomeCard';

function App() {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);

  const handleSearchChange = (searchData) => {

    const [lat, lon] = searchData.value.split(' ');

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
    const forecastWeatherFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)

    Promise.all([currentWeatherFetch, forecastWeatherFetch])
      .then(async (response) => {

        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        if (forecastResponse.list) {
          const groupByDay = forecastResponse.list.reduce((accumulator, currentValue) => {
            const date = new Date(currentValue.dt_txt).toDateString();
            if (!accumulator[date]) {
              accumulator[date] = [];
            }
            accumulator[date].push(currentValue);
            return accumulator;
          }, {});

          const dailyData = Object.keys(groupByDay).slice(0, 5).map((date) => {
            const dayData = groupByDay[date];

            const averageTemp = dayData.reduce((accumulator, currentValue) => {
              return accumulator + currentValue.main.temp;
            }, 0) / dayData.length;
            return { date, averageTemp }
          })
          forecastResponse.dailyData = dailyData
        }
        setCurrentWeather({ city: searchData.label, ...weatherResponse })
        setForecastWeather({ city: searchData.label, ...forecastResponse })
      })
      .catch(err => console.log(err))
  }


  return (

    <Container className='mt-3'>
      <Row>
        <Col md={8}>
          <Row>
            <Col md={3}>
              <MyDate />
            </Col>
            <Col md={9}>
              <Search onSearchChange={handleSearchChange} />
            </Col>
          </Row>
          <hr />
          {/* WEATHER CARDS */}
          {
            currentWeather ? (<>
              <Row>
                <Col md={6}>
                  <WeatherCard data={currentWeather} title='Wind Speed' unitOfMeasure='km/h' icon='winds-weather-symbol' value='wind' />
                </Col>
                <Col md={6}>
                  <WeatherCard data={currentWeather} title='Temperature' unitOfMeasure='°C' icon='thermometer' value='temp' />
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <WeatherCard data={currentWeather} title='Humidity' unitOfMeasure='%' icon='humidity' value='humidity' />
                </Col>
                <Col md={6}>
                  <WeatherCard data={currentWeather} title='Pressure' unitOfMeasure='hPa' icon='pressure' value='pressure' />
                </Col>
              </Row>
            </>) : (<WelcomeCard />)
          }

          <hr />
          {/* FORECAST GRAPH */}
          {forecastWeather && (
            <ForecastGraph temperatureData={forecastWeather.dailyData} />
          )}
        </Col>
        <Col md={4}>
          {
            currentWeather && (
              <MySidebar data={currentWeather} />
            )
          }
        </Col>
      </Row>
    </Container>
  );
}

export default App;
