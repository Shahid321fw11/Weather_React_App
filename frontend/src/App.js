import React, {useState} from "react";
import axios from 'axios';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="container">
          <div className="top">
            <p className="name">Delhi</p>
            <p className="temp">23 °F</p>
            <p className="description">Cloudy</p>
          </div>
          <div className="bottom">
            <p className="humidity">Humidity: 29</p>
            <p className="pressure">Pressure: 1014</p>
            <p className="wind-speed">Wind-Speed: 3.6MPH</p>
          </div>
      </div>
    </div>
  );
}

export default App;
