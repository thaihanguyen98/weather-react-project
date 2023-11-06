import React, { useState } from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoadingIcon from "./icons/loading.svg";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { faWater } from "@fortawesome/free-solid-svg-icons";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlassLocation } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import SunTimestamp from "./SunTimestamp";

export default function Main(props) {
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
        <div className="main">
          <div className="row d-flex">
            <div class="local-overview col ms-lg-4 mt-4">
              <main>
                <div className="container">
                  <div className="mx-3 my-4">
                    <h2>
                      Forecast in <span id="location">{weatherData.city}</span>
                    </h2>
                    <h3 id="today">
                      <FormattedDate date={weatherData.date} />
                    </h3>
                  </div>
                  <div className="container flex-md-row flex-column">
                    <div className="row">
                      <section className="temp-overview col-lg-5">
                        <div className="current-weather card">
                          <div className="card-body">
                            <div className="d-flex">
                              <h1 className="flex-grow-1">
                                <span id="temp-now">
                                  {weatherData.temperature}
                                </span>
                                °<span className="celsius">C</span>
                                <span className="toggle-temps">
                                  /{" "}
                                  <a href="/" className="fahrenheit">
                                    F
                                  </a>
                                </span>
                              </h1>
                              <h3 className="text-end pt-2">
                                <small>High</small>
                                <span className="temps" id="high-temp">
                                  {weatherData.highTemp}
                                </span>
                                °<span className="celsius">C</span>
                                <br />
                                <small>Low</small>
                                <span className="temps" id="low-temp">
                                  {weatherData.lowTemp}
                                </span>
                                °<span className="celsius">C</span>
                              </h3>
                            </div>
                            <br />
                            <br />
                            <div className="d-flex">
                              <div className="flex-grow-1">
                                <p>
                                  <span id="description-temp">
                                    Partly cloudy
                                  </span>
                                  <br />
                                  Feels like
                                  <span className="temps" id="feels-like">
                                    {weatherData.feelsLike}
                                  </span>
                                  °<span className="celsius">C</span>
                                  <br />
                                  <small id="condition-msg"></small>
                                </p>
                              </div>
                              <div>
                                <img
                                  src={LoadingIcon}
                                  width="85"
                                  className="weather-icon default-main-icon"
                                  alt="Loading icon"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <div className="w-100 d-lg-none d-block"></div>
                      <section className="temp-details col-lg-4 col-md-5 mt-3 mt-md-2 mt-lg-0">
                        <div className="card p-1 initial">
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item d-flex">
                              <strong className="flex-grow-1">
                                Precipitation
                              </strong>
                              <span id="gust" className="temps">
                                {weatherData.precipitation}
                              </span>
                              <span className="celsius">mm</span>
                              <FontAwesomeIcon
                                className="icon align-self-center"
                                icon={faWater}
                              />
                            </li>
                            <li className="list-group-item d-flex">
                              <strong className="flex-grow-1">
                                Visibility{" "}
                              </strong>
                              <span id="visibility">
                                {weatherData.visibility}
                              </span>
                              km
                              <FontAwesomeIcon
                                className=" icon align-self-center "
                                icon={faEyeSlash}
                              />
                            </li>

                            <li className="list-group-item d-flex">
                              <strong className="flex-grow-1">Wind </strong>
                              <span id="wind">{weatherData.wind}</span>
                              <span id="wind-unit">km/h</span>
                              <FontAwesomeIcon
                                className="icon align-self-center"
                                icon={faWind}
                              />
                            </li>

                            <li className="list-group-item d-flex">
                              <strong className="flex-grow-1"> Humidity</strong>
                              <span id="humidity">{weatherData.humidity}</span>%
                              <FontAwesomeIcon
                                className="icon align-self-center"
                                icon={faWater}
                              />
                            </li>

                            <li className="list-group-item d-flex">
                              <strong className="flex-grow-1">
                                Cloudiness{" "}
                              </strong>
                              <span id="clouds">{weatherData.cloudiness}</span>%
                              <FontAwesomeIcon
                                className="icon align-self-center"
                                icon={faCloud}
                              />
                            </li>
                          </ul>
                        </div>
                      </section>
                      <div className="w-100 d-md-none d-block"></div>
                      <section className="sun-time col-md mt-3 mt-md-2 mt-lg-0">
                        <div className="card">
                          <div className="card-img-overlay text-center ">
                            <FontAwesomeIcon
                              className="sunrise-set-icon"
                              icon={faSun}
                            />
                            <h3>Sunrise</h3>
                            <h2 id="sunrise-time">
                              <SunTimestamp date={weatherData.sunset} />
                            </h2>
                            <br />
                            <FontAwesomeIcon
                              className="sunrise-set-icon"
                              icon={faMoon}
                            />
                            <h3>Sunset</h3>
                            <h2 id="sunset-time">
                              <SunTimestamp date={weatherData.sunrise} />
                            </h2>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                  <section className="full-forecast d-flex justify-content-md-around my-4"></section>
                  <div className="w-100 d-lg-none d-block mb-2"></div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();

    return "Loading..";
  }
}
