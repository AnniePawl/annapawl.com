import React from "react";
import TabletShelves from "../css-items/shelves/TabletShelves";
import Contact from "../about-me/Contact";
import "./tablet.scss";
import { ReactComponent as InfoIcon } from "../../assets/info.svg";

function Tablet() {
  return (
    <div className="tablet-shelf-container">
      <div className="info-button">
        <InfoIcon />
      </div>
      <div className="tablet-contact">
        <Contact />
      </div>

      <TabletShelves />
    </div>
  );
}

export default Tablet;
