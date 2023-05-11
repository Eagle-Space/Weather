import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getData } from './api';

function CityWeather() {
  const { cityName } = useParams();
  const [weatherData, setWeatherData] = useState(null);
  
  // Fetch weather data for the given city name
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getData(cityName); // Make API request to get weather data
        setWeatherData(response.data); // Store the weather data in state
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [cityName]); // Fetch data whenever the city name changes

 
  return (
    <div>
      <h2>Weather in {cityName}</h2>
      {weatherData && (
        <div>
          <p>Temperature: {weatherData.main.temp}</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          <p>Cloudiness: {weatherData.clouds.all}</p>
          <p>Humidity: {weatherData.main.humidity}</p>
          <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}</p>
          <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}</p>
        </div>
      )}
    </div>
  );
}

export default CityWeather;
