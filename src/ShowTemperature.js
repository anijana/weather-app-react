import React, { useState } from "react";
import "./ShowTemperature.css";

export default function ShowTemperature(props) {
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
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          <span className="selectCelsuis">°C </span>|{" "}
          <span className="clickFahrenheit" onClick={showFahrenheit}>
            °F
          </span>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(fahrenheit())}</span>
        <span className="unit">
          <span className="selectFahrenheit">°F </span> |{" "}
          <span className="clickCelsuis" onClick={showCelsius}>
            °C
          </span>
        </span>
      </div>
    );
  }
}