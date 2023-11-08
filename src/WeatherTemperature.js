import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temp-now">{Math.round(props.celsius)}°</span>

        <span className="toggle-temps">
          C |
          <a href="/" onClick={showFahrenheit} className="fahrenheit">
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temp-now">{Math.round(fahrenheit())}°</span>
        <span className="toggle-temps">
          F |
          <a href="/" onClick={showCelsius} className="celsius">
            °C
          </a>
        </span>
      </div>
    );
  }
}
