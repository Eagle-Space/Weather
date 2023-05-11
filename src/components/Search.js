import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Search() {
  const [city, setCity] = useState('');
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    navigate(`/city/${city}`);
    updateTrending(city);
    updateHistory(city);
    setCity('');
  };

  const updateTrending = (city) => {
    let trending = localStorage.getItem('trending');
    trending = trending ? JSON.parse(trending) : [];
    if (!trending.includes(city)) {
      trending.unshift(city);
      if (trending.length > 3) {
        trending.pop();
      }
      localStorage.setItem('trending', JSON.stringify(trending));
    }
  };

  const updateHistory = (city) => {
    let history = localStorage.getItem('history');
    history = history ? JSON.parse(history) : [];
    history.unshift(city);
    if (history.length > 5) {
        history.pop();
    }
    localStorage.setItem('history', JSON.stringify(history));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={city} onChange={e => setCity(e.target.value)} placeholder="Search for a city..." />
      <button type="submit">Search</button>
    </form>
  );
}

export default Search;
