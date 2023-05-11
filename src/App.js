import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import CityWeather from "./components/CityWeather";
import Search from "./components/Search";
import FavoriteCities from "./components/FavoriteCities";
import TrendingCities from "./components/TrendingCities";
import SearchHistory from "./components/SearchHistory";

function App() {
  return (
    <Router>
      <div className="container">
        {/* Header */}
        <header className="header">
          <h1>Weather App</h1>
        </header>

        {/* Search Component */}
        <Search />

        {/* Main Content */}
        <main className="main">
          <Routes>
            {/* Route for CityWeather Component */}
            <Route path="/city/:cityName" element={<CityWeather />} />

            {/* Route for Home Component */}
            <Route path="/" element={<Home />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer>
          {/* Favorite Cities Component */}
          <FavoriteCities />

          {/* Trending Cities Component */}
          <TrendingCities />

          {/* Search History Component */}
          <SearchHistory />

          {/* Copyright */}
          <p>&copy; 2023 Amin Samani</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
