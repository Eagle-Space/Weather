import React from 'react';
import TrendingCities from './TrendingCities';

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <div className="main-content">
        <p>Welcome to the Weather App!</p>
        <TrendingCities />

      </div>
     
      </div>
  );
}

export default Home;
