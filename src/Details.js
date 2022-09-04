import React from "react";
import FormattedDate from "./FormattedDate";
import Icon from "./Icon";
import ShowTemperature from "./ShowTemperature";

export default function Details(props) {
  return (
    <div className="Details">
      <h1>{props.data.city}</h1>
      <ul>
        <li className="text-capitalize">{props.data.description}</li>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
      </ul>

      <div className="row mt-4">
        <div className="col-8">
          <div className="d-flex justify-content-evenly">
            <Icon code={props.data.icon} size={100} />
            <ShowTemperature celsius={props.data.temperature} />
          </div>
        </div>
        <div className="col-4">
          <ul style={{color:'#ec6e4c'}}>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
            <li>Sunset: {props.data.timeStr} PM</li>
            <li>Pressure: {props.data.pressure}</li>
            <li>Visibility: {props.data.visibility}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}