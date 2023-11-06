import React, { useState } from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlassLocation } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      city: response.data.name,
      feelsLike: Math.round(response.data.main.feels_like),
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed * 2.237),
      description: response.data.weather[0].description,
      highTemp: Math.round(response.data.main.temp_max),
      lowTemp: Math.round(response.data.main.temp_min),
      visibility: response.data.visibility / 1000,
      gust: Math.round(response.data.wind.gust * 2.237),
      cloudiness: response.data.clouds.all,
      date: new Date(response.data.dt * 1000),
      precipitation: response.data.precipitation,
      sunrise: new Date(response.data.sys.sunrise * 1000),
      sunset: new Date(response.data.sys.sunset * 1000),
      icon: response.data.weather[0].icon,
    });
  }
  const [city, setCity] = useState(props.defaultcity);
  function search() {
    const apiKey = "2980ff43226d67e53abfcdb6d457dcc8";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="Header">
          <header className="App-header container text-md-start my-2 mt-3">
            <div className="row align-items-center">
              <h1 className="col-md-6">Weather Dashboard</h1>
              <div class="w-100 d-md-none d-block"></div>
              <form
                className="input-group col p-1 search-from"
                onSubmit={handleSubmit}
              >
                <button
                  className="btn btn-outline-primary"
                  id="geolocation-btn"
                  type="button"
                >
                  <FontAwesomeIcon icon={faLocationArrow} />
                </button>
                <input
                  type="search"
                  placeholder="Search a city"
                  class="form-control"
                  id="search-input"
                  onChange={handleCityChange}
                />
                <button
                  type="submit"
                  className="btn btn-outline-primary search-btn"
                >
                  <FontAwesomeIcon
                    className="align-self-center"
                    icon={faMagnifyingGlassLocation}
                  />
                </button>
              </form>
            </div>
          </header>
        </div>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();

    return "Loading..";
  }
}
