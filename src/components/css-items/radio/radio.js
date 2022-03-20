import React, { useEffect, useState } from "react";
import "./radio.scss";

function Radio(props) {
  const { cn } = props;
  const [station, setStation] = useState(105.9);
  const programs = [
    "NPR",
    "Radio Lab",
    "On Being",
    "WQXR",
    "Brian Lehrer",
    "The Moth",
    "All Things Considered",
  ];
  // automatically update radio station (mobile view only)

  return (
    <div className={`radio-container ${cn}`}>
      <div className="radio-top"></div>
      <div className="radio-bottom">
        <div className="radio-display-station">{station}</div>

        <div className="radio-buttons">
          <button
            className="radio-button1"
            onClick={() => setStation(station - 0.5)}
          >
            -
          </button>

          <button
            className="radio-button2"
            onClick={() => {
              setStation(station + 0.5);
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default Radio;
