import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getData } from './api';

function CityWeather() {
  const { cityName } = useParams();
  const [weatherData, setWeatherData] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getData(cityName);
        setWeatherData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [cityName]);

  const handleFavoriteToggle = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (isFavorite) {
      const updatedFavorites = favorites.filter((city) => city !== cityName);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } else {
      const updatedFavorites = [...favorites, cityName];
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(favorites.includes(cityName));
  }, [cityName]);

  return (
    <div>
      <h2>Weather in {cityName}</h2>
      {weatherData && (
        <div>
          <p>Temperature: {weatherData.main.temp}</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          <button onClick={handleFavoriteToggle}>
            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
        </div>
      )}
    </div>
  );
}

export default CityWeather;
