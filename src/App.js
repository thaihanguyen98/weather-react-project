import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App container">
      <Weather defaultcity="Sydney" />
      <footer className="container text-center my-3">
        <FontAwesomeIcon className="icon" icon={faCode} /> Designed & Coded by
        Thai Ha
      </footer>
    </div>
  );
}

export default App;
