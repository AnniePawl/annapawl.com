import React from "react";
import TabletShelves from "../css-items/shelves/TabletShelves";
import Contact from "../about-me/Contact";
import "./tablet.scss";

function Tablet() {
  return (
    <div className="tablet-shelf-container">
      <div className="tablet-contact">
        <Contact />
      </div>

      <TabletShelves />
    </div>
  );
}

export default Tablet;
