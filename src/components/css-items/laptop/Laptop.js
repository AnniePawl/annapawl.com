import React from "react";
import "./laptop.scss";

function Laptop(props) {
  const { cn } = props;
  return (
    <div className={`laptop-container ${cn}`}>
      <div className="laptop">
        <div className="laptop__screen">
          <div className="laptop__terminal">
            <p>$ You look great</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Laptop;
