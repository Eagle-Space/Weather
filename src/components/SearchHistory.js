// components/SearchHistory.js
import React, { useState, useEffect } from 'react';

function SearchHistory() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const storedHistory = localStorage.getItem('history');
    if (storedHistory) {
      setHistory(JSON.parse(storedHistory));
    }
  }, []);

  return (
    <div>
      <h2>Search History</h2>
      <ul>
        {history.map(city => (
          <li key={city}>{city}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchHistory;
