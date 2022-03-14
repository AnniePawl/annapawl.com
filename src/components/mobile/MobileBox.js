import React from "react";
import "./mobile.scss";

function MobileBox(props) {
  const { id, cn, box_item, text } = props;
  return (
    <div className="mobile-box">
      <div className={`mobile-box-art mobile-box-art-${id} ${cn}`}>
        {" "}
        {box_item}
      </div>
      <div className="mobile-box-text">
        <p>{text}</p>
      </div>
    </div>
  );
}

export default MobileBox;
