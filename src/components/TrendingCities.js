// components/TrendingCities.js
import React, { useState, useEffect } from 'react';

function TrendingCities() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    // Retrieve trending cities from local storage
    const storedTrending = localStorage.getItem('trending');
    if (storedTrending) {
      setTrending(JSON.parse(storedTrending));
    }
  }, []);

  return (
    <div>
      <h2>Trending Cities</h2>
      <ul>
        {trending.map(city => (
          <li key={city}>{city}</li>
        ))}
      </ul>
    </div>
  );
}

export default TrendingCities;
