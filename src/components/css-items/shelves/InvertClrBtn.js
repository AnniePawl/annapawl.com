import React, { useState } from "react";
import arrows from '../../../assets/arrows.png';

const InvertClrBtn = () => {
  const [isInverted, setIsInverted] = useState(false);
  const [spinning, setSpinning] = useState(false);

  const toggleInvert = () => {
    const newValue = !isInverted;
    setIsInverted(newValue);
    setSpinning(true); // trigger spin

    const desktopHome = document.getElementById("home");
    const desktopAbout = document.getElementById("desktopAbout");

    if (desktopHome) {
      desktopHome.classList.toggle("invert-wrapper", newValue);
    }
    if (desktopAbout) {
      desktopAbout.classList.toggle("invert-wrapper2", newValue);
    }

    // stop spinning after one rotation (1s default spin)
    setTimeout(() => setSpinning(false), 1000);
  };

  return (
    <div
      className="absolute top-14 left-5 h-7 w-7 cursor-pointer"
      onClick={toggleInvert}
      title="Toggle color mode"
    >
      <img
        src={arrows}
        alt="Arrows"
        className={`h-7 w-7 saturate-200 transition-transform duration-300 ${isInverted ? 'rotate-180' : ''
          }`}
      />
    </div>
  );
};

export default InvertClrBtn;
