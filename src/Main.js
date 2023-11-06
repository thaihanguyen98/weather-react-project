import React from "react";
import "./Main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoadingIcon from "./icons/loading.svg";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { faWater } from "@fortawesome/free-solid-svg-icons";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

export default function Main() {
  return (
    <div className="Main">
      <main>
        <div className="container">
          <div className="mx-3 my-4">
            <h2>
              Forecast in <span id="location">Sydney, NSW</span>
            </h2>
            <h3 id="today">Monday, 6 November 2023</h3>
          </div>
          <div className="container flex-md-row flex-column">
            <div className="row">
              <section className="temp-overview col-lg-5">
                <div className="current-weather card">
                  <div className="card-body">
                    <div className="d-flex">
                      <h1 className="flex-grow-1">
                        <span id="temp-now">20</span>°
                        <span className="celsius">C</span>
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
                          20
                        </span>
                        °<span className="celsius">C</span>
                        <br />
                        <small>Low</small>
                        <span className="temps" id="low-temp">
                          5
                        </span>
                        °<span className="celsius">C</span>
                      </h3>
                    </div>
                    <br />
                    <br />
                    <div className="d-flex">
                      <div className="flex-grow-1">
                        <p>
                          <span id="description-temp">Partly cloudy</span>
                          <br />
                          Feels like
                          <span className="temps" id="feels-like">
                            19
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
                      <strong className="flex-grow-1">Precipitation</strong>
                      <span id="gust" className="temps">
                        00
                      </span>
                      <span className="celsius">mm</span>
                      <FontAwesomeIcon
                        className="icon align-self-center"
                        icon={faWater}
                      />
                    </li>
                    <li className="list-group-item d-flex">
                      <strong className="flex-grow-1">Visibility </strong>
                      <span id="visibility">20</span>km
                      <FontAwesomeIcon
                        className=" icon align-self-center "
                        icon={faEyeSlash}
                      />
                    </li>

                    <li className="list-group-item d-flex">
                      <strong className="flex-grow-1">Wind </strong>
                      <span id="wind">00</span>
                      <span id="wind-unit">km/h</span>
                      <FontAwesomeIcon
                        className="icon align-self-center"
                        icon={faWind}
                      />
                    </li>

                    <li className="list-group-item d-flex">
                      <strong className="flex-grow-1"> Humidity</strong>
                      <span id="humidity">00</span>%
                      <FontAwesomeIcon
                        className="icon align-self-center"
                        icon={faWater}
                      />
                    </li>

                    <li className="list-group-item d-flex">
                      <strong className="flex-grow-1">Cloudiness </strong>
                      <span id="clouds">00</span>%
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
                    <h2 id="sunrise-time">4:00AM</h2>
                    <br />
                    <FontAwesomeIcon
                      className="sunrise-set-icon"
                      icon={faMoon}
                    />
                    <h3>Sunset</h3>
                    <h2 id="sunset-time">7:30PM</h2>
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
  );
}
