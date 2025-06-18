import React, { useState } from "react";

const ToggleInvert = () => {
  const [isInverted, setIsInverted] = useState(false);

const toggleInvert = () => {
  const newValue = !isInverted;
  setIsInverted(newValue);

  const desktopHome = document.getElementById("home");
  const desktopAbout = document.getElementById("desktopAbout");

  if (desktopHome) {
    desktopHome.classList.toggle("invert-wrapper", newValue);
  }

  if (desktopAbout) {
    desktopAbout.classList.toggle("invert-wrapper2", newValue);
  }
};

  return (
    <div className="absolute bottom-5 right-6 z-50" onClick={toggleInvert}>
      <div
        className={`w-12 h-7 flex items-center px-1 rounded-full cursor-pointer transition-colors duration-300 shadow-inner ${
          isInverted ? "bg-[#7ab1fd]" : "bg-[#7ab1fd]"
        }`}
      >
        <div
          className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
            isInverted ? "translate-x-5" : "translate-x-0"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default ToggleInvert;
