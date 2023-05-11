import React from 'react';
import TrendingCities from './TrendingCities';
import FavoriteCities from './FavoriteCities';
import SearchHistory from './SearchHistory';

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <FavoriteCities />
      <TrendingCities />
      <SearchHistory />
    </div>
  );
}

export default Home;
