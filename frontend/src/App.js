import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState({});
  const [cityName, setCityName] = useState("");
  const weather_api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=5a18649b9875dbb4fd25b9dce8346a27`;

  const searchLoaction = (event) => {
    // console.log(cityName, setCityName);
    if (event.key === "Enter") {
      axios.get(weather_api).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setCityName("");
    }
  };

  return (
    <div className="app">
      <div className="container">
        <div className="search_box">
          <input
            value={cityName}
            onChange={(event) => setCityName(event.target.value)}
            onKeyPress={searchLoaction}
            placeholder="Enter City Name"
            type="text"
          ></input>
        </div>

        <div className="top">
          <p className="name">{data.name}</p>
          {data.main ? <p className="temp">{data.main.temp}°F</p> : null}
          {data.weather ? (
            <p className="description">{data.weather[0].main}</p>
          ) : null}
        </div>

        <div className="bottom">
          {data.main ? (
            <p className="humidity">
              {data.main.humidity}% <br /> Humidity
            </p>
          ) : null}
          {data.main ? (
            <p className="feelsLike">
              {data.main.feels_like}°F <br /> Feels Like
            </p>
          ) : null}
          {data.wind ? (
            <p className="wind_speed">
              {data.wind.speed} MPH <br /> Wind Speed
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
