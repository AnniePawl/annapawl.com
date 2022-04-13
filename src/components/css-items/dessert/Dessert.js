import React from "react";
import "./dessert.scss";

function Dessert(props) {
  const { cn } = props;

  return (
    <div className={`dessert-container ${cn}`}>
      <div className="dessert-stand-top"></div>
      <div className="dessert-base"></div>
      <div className="dessert-stand-base"></div>
      <div className="dessert-spiral"></div>
    </div>
  );
}

export default Dessert;
