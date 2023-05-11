import React, { useState, useEffect } from 'react';

function SearchHistory() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    // Fetch search history from local storage when component loads
    const storedHistory = localStorage.getItem('history');
    if (storedHistory) {
      setHistory(JSON.parse(storedHistory)); // Set the search history from local storage in state
    }
  }, []);

  return (
    <div>
      <h2>Search History</h2>
      <ul>
        {history.map(city => (
          <li key={city}>{city}</li> // Display each searched city as a list item
        ))}
      </ul>
    </div>
  );
}

export default SearchHistory;
