import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Search() {
  const [city, setCity] = useState('');
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    navigate(`/city/${city}`); // Navigates to the /city/:cityName route
    updateTrending(city); // Update the trending cities
    updateHistory(city); // Update the search history
    setCity(''); // Clear the input field
  };

  const updateTrending = city => {
    let trending = localStorage.getItem('trending'); // Fetch trending cities from local storage
    trending = trending ? JSON.parse(trending) : []; // Parse the trending cities or initialize an empty array
    if (!trending.includes(city)) {
      trending.unshift(city); // Add the current city to the beginning of the trending cities array
      if (trending.length > 3) {
        trending.pop(); // Remove the last city from the trending cities array if it exceeds the limit
      }
      localStorage.setItem('trending', JSON.stringify(trending)); // Store the updated trending cities in local storage
    }
  };

  const updateHistory = city => {
    let history = localStorage.getItem('history'); // Fetch search history from local storage
    history = history ? JSON.parse(history) : []; // Parse the search history or initialize an empty array
    history.unshift(city); // Add the current city to the beginning of the search history array
    if (history.length > 5) {
      history.pop(); // Remove the last searched city from the search history if it exceeds the limit
    }
    localStorage.setItem('history', JSON.stringify(history)); // Store the updated search history in local storage
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={city} onChange={e => setCity(e.target.value)} placeholder="Search for a city..." />
      <button type="submit">Search</button>
    </form>
  );
}

export default Search;
