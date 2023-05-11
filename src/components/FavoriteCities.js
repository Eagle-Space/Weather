import React, { useState, useEffect } from 'react';

function FavoriteCities() {
  const [favoriteCities, setFavoriteCities] = useState([]);
  const [newCity, setNewCity] = useState('');

  useEffect(() => {
    // Fetch favorite cities from local storage on component load
    const storedCities = localStorage.getItem('favoriteCities');
    if (storedCities) {
      setFavoriteCities(JSON.parse(storedCities)); // Set the favorite cities from local storage in state
    }
  }, []);

  useEffect(() => {
    // Update local storage whenever favoriteCities state changes
    localStorage.setItem('favoriteCities', JSON.stringify(favoriteCities)); // Store the favorite cities in local storage
  }, [favoriteCities]); // Trigger the effect whenever the favoriteCities state changes

  const handleAddCity = () => {
    if (newCity.trim() !== '') {
      setFavoriteCities(prevCities => [...prevCities, newCity]); // Add the new city to the favoriteCities state
      setNewCity(''); // Clears the input 
    }
  };

  return (
    <div>
      <h2>Favorite Cities</h2>
      <input
        type="text"
        value={newCity}
        onChange={e => setNewCity(e.target.value)} // Update the newCity state 
        placeholder="Enter a city"
      />
      <button onClick={handleAddCity}>Add City</button>
      <ul>
        {favoriteCities.map(city => (
          <li key={city}>{city}</li> // Show each favorite city as a li item
        ))}
      </ul>
    </div>
  );
}

export default FavoriteCities;
