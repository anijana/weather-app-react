import React from "react";
import "./FormattedDate.css";

export default function FormattedDate() {
  function refreshPage() {
    window.location.reload(true);
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let date = new Date();
  let day = days[date.getDay()];
  let month = months[date.getMonth()];

  let dateNumber = date.getDate();
  if (dateNumber === 1) {
    dateNumber = `${dateNumber}st`;
  } else if (dateNumber === 2) {
    dateNumber = `${dateNumber}nd`;
  } else if (dateNumber === 3) {
    dateNumber = `${dateNumber}rd`;
  } else {
    dateNumber = `${dateNumber}th`;
  }

  let hours = date.getHours();

  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div>
      <span className="FormattedDate mr-3">
        Last Updated:
        <span className="p-1">
          {day} {dateNumber} {month} <small>at </small>
          {hours}:{minutes}
          {"  "}
        </span>
        <span className="ml-3">
          <i class="fa-solid fa-arrow-rotate-right" onClick={refreshPage}></i>
        </span>
      </span>
    </div>
  );
}