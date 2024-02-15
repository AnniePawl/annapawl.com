import React from "react";
import "./dessert.scss";

function Dessert(props) {
  const { cn } = props;

  return (
    <div className={`dessert-container ${cn}`}>
      <div className="dessert__stand-top"></div>
      <div className="dessert__base"></div>
      <div className="dessert__stand-base"></div>
      <div className="dessert__spiral"></div>

    </div>
  );
}

export default Dessert;


