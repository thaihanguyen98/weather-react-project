import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°C`;
  }
  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°C`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = date.getDay();

    return days[day];
  }
  return (
    <div className="WeatherForecastDay">
      <ul>
        <li className="ForecastDaily">{day()}</li>
        <li className="ForecastIcon">
          <WeatherIcon code={props.data.weather[0].icon} />
        </li>
        <li className="ForecastTempHigh">{maxTemp()}</li>
        <li className="ForecastTempLow">{minTemp()}</li>
      </ul>
    </div>
  );
}
