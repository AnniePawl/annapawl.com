import React from "react";
import MobileAbout from "../about-me/MobileAbout";
import MobileShelves from "../css-items/shelves/MobileShelves";
import MobileLinks from "./MobileLinks";
import "./mobile.scss";

function Mobile() {
  return (
    <div className="mobile">
      <MobileAbout />
      <div className="mobile-shelves-container">
        <MobileShelves />
      </div>
      <MobileLinks />
    </div>
  );
}

export default Mobile;
