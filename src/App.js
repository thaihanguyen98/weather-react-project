import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Main from "./Main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App container">
      <Header />
      <div className="row d-flex">
        <div class="local-overview col ms-lg-4 mt-4">
          <Main defaultcity="Sydney" />
        </div>
      </div>
      <footer className="container text-center my-3">
        <FontAwesomeIcon className="icon" icon={faCode} /> Designed & Coded by
        Thai Ha
      </footer>
    </div>
  );
}

export default App;
