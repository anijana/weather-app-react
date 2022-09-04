import React, { useState } from "react";
import Details from "./Details";
import Forecast from "./Forecast";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    let sec = response.data.sys.sunset;
    let date = new Date(sec * 1000);
    let timeStr = `${date.getHours()}:${date.getMinutes()}`
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      humidity: Math.round(response.data.main.humidity),
      icon: response.data.weather[0].icon,
      timeStr : timeStr,
      pressure: response.data.main.pressure,
      visibility: response.data.visibility
    });
  }

  function Search() {
    const apiKey = "ddae09554f95a0c11e6ecb1276ffb8ea";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    Search();
  }

  function handleCityChange(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function searchLocation(position) {
    let apiKey = "ddae09554f95a0c11e6ecb1276ffb8ea";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form
          onSubmit={handleSubmit}
          className="d-flex search-bar"
          role="search"
          id="searchForm"
        >
          <input
            className="form-control me-2 shadow-none bg-light"
            type="search"
            placeholder="Enter your city"
            id="cityInput"
            autoFocus="on"
            onChange={handleCityChange}
          />
          <button className="btn btn shadow-none search-btn" type="submit">
            Search
          </button>
          <div>
            <i
              className="fa-solid fa-location-dot currentBtn"
              onClick={getCurrentLocation}
            ></i>
          </div>
        </form>
        <Details data={weatherData} />
        <Forecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    Search();
    return "Loading...";
  }
}