import React, { useEffect, useState } from "react";
import "../digitalClock/digital-clock.scss";

function DigitalClock(props) {
  const { cn } = props;
  const [time, setTime] = useState("");

  const displayTime = () => {
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let amPm = "";

    hr < 12 ? (amPm = "AM") : (amPm = "PM");

    if (hr > 12) {
      hr -= 12;
    }

    let paddedHr = String(hr).padStart(2, "0");
    let paddedMin = String(min).padStart(2, "0");

    setTime(`${paddedHr}:${paddedMin} ${amPm}`);
  };

  useEffect(() => {
    displayTime();
  }, []);

  return (
    // <div className="digital-clock__container">
    <div className={`${cn} clock`}>
      <p>{time}</p>
      {/* </div> */}
    </div>
  );
}

export default DigitalClock;
