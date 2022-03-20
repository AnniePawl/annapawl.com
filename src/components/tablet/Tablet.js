import React from "react";
import TabletAbout from "../about-me/TabletAbout";
import TabletShelves from "../css-items/shelves/TabletShelves";

import "./tablet.scss";

function Tablet() {
  return (
    <div className="tablet">
      <TabletAbout />
      <div className="tablet-shelf-container">
        <TabletShelves />
      </div>
    </div>
  );
}

export default Tablet;
