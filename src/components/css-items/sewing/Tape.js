import React from "react";
import "./tape.scss";

function Tape(props) {
  const { cn } = props;
  return (
    <div className={`tape ${cn}`}>
      <div className="tape__top"></div>
      <div className="tape__bottom"></div>
    </div>
  );
}

export default Tape;
