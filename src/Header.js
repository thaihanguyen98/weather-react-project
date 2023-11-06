import React from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlassLocation } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div className="Header">
      <header className="App-header container text-md-start my-2 mt-3">
        <div className="row align-items-center">
          <h1 className="col-md-6">Weather Dashboard</h1>
          <div class="w-100 d-md-none d-block"></div>
          <form className="input-group col p-1 search-from">
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
  );
}
