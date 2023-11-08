import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { faTemperatureHalf } from "@fortawesome/free-solid-svg-icons";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faWater } from "@fortawesome/free-solid-svg-icons";
import FormattedDate from "./FormattedDate";
import SunTimestamp from "./SunTimestamp";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import WeatherForecast from "./WeatherForecast";

export default function WeatherInfo(props) {
  return (
    <div className="main">
      <div className="row d-flex">
        <div class="local-overview col ms-lg-4 mt-4">
          <main>
            <div className="container">
              <div className="mx-3 my-4">
                <h2>
                  Forecast in <span id="location">{props.data.city}</span>
                </h2>
                <h3 id="today">
                  <FormattedDate date={props.data.date} />
                </h3>
              </div>
              <div className="container flex-md-row flex-column">
                <div className="row">
                  <section className="temp-overview col-lg-5">
                    <div className="current-weather card">
                      <div className="card-body">
                        <div className="d-flex flex-row justify-content-center mt-3 ">
                          <div className="mt-2">
                            <WeatherIcon
                              code={props.data.icon}
                              alt={props.data.description}
                            />
                          </div>
                          <div className="temperature">
                            <WeatherTemperature
                              celsius={props.data.temperature}
                            />
                          </div>
                        </div>
                        <div className="text-center" id="description-temp">
                          {props.data.description}
                        </div>
                        <div className="high-low-temps text-center">
                          <h3>
                            L:
                            <span id="low-temp">{props.data.lowTemp}</span>° H:
                            <span id="high-temp">{props.data.highTemp}</span>°
                          </h3>
                        </div>
                      </div>
                    </div>
                  </section>
                  <div className="w-100 d-lg-none d-block"></div>
                  <section className="temp-details col-lg-4 col-md-5 mt-3 mt-md-2 mt-lg-0">
                    <div className="card p-1 initial">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex">
                          <strong className="flex-grow-1">Feels like</strong>
                          <span id="gust" className="temps">
                            {props.data.feelsLike}
                          </span>
                          <span>°C</span>
                          <FontAwesomeIcon
                            className="icon align-self-center"
                            icon={faTemperatureHalf}
                          />
                        </li>
                        <li className="list-group-item d-flex">
                          <strong className="flex-grow-1">Visibility </strong>
                          <span id="visibility">{props.data.visibility}</span>
                          km
                          <FontAwesomeIcon
                            className=" icon align-self-center "
                            icon={faEyeSlash}
                          />
                        </li>

                        <li className="list-group-item d-flex">
                          <strong className="flex-grow-1">Wind </strong>
                          <span id="wind">{props.data.wind}</span>
                          <span id="wind-unit">km/h</span>
                          <FontAwesomeIcon
                            className="icon align-self-center"
                            icon={faWind}
                          />
                        </li>

                        <li className="list-group-item d-flex">
                          <strong className="flex-grow-1"> Humidity</strong>
                          <span id="humidity">{props.data.humidity}</span>%
                          <FontAwesomeIcon
                            className="icon align-self-center"
                            icon={faWater}
                          />
                        </li>

                        <li className="list-group-item d-flex">
                          <strong className="flex-grow-1">Cloudiness </strong>
                          <span id="clouds">{props.data.cloudiness}</span>%
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
                          <SunTimestamp date={props.data.sunrise} />
                        </h2>
                        <br />
                        <FontAwesomeIcon
                          className="sunrise-set-icon"
                          icon={faMoon}
                        />
                        <h3>Sunset</h3>
                        <h2 id="sunset-time">
                          <SunTimestamp date={props.data.sunset} />
                        </h2>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
              <section className="full-forecast d-flex justify-content-md-around my-4">
                {" "}
                <WeatherForecast coordinates={props.data.coord} />
              </section>
              <div className="w-100 d-lg-none d-block mb-2"></div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
