import React from "react";

export default function SunTimestamp(props) {
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours || 12;

  return (
    <div>
      {hours}:{minutes} {ampm}
    </div>
  );
}
