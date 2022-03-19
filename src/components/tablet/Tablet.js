import React from "react";
import TabletAbout from "../about-me/TabletAbout";
import Shelf from "../css-items/shelves/Shelf";
import "./tablet.scss";

function Tablet() {
  return (
    <div className="tablet">
      <TabletAbout />
      <div className="tablet-shelf-container"></div>
      {/* <Shelf /> */}
    </div>
  );
}

export default Tablet;
