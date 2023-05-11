// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import CityWeather from './components/CityWeather';
import Search from './components/Search';

function App() {
  return (
    <Router>
      <div className="container">
        <header className="header">
          <h1>Weather App</h1>
        </header>

        <Search />

        <main className="main">
          <Routes>
            <Route path="/city/:cityName" element={<CityWeather />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>

        <footer>
          <p>&copy; 2023 Amin Samani</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
