import React, { useState } from "react";
import DesktopShelves from "../css-items/shelves/DesktopShelves";
import "./desktop-home.scss";
import { ReactComponent as InfoIcon } from "../../assets/info.svg";


import Modal from "../modal/Modal";

function DesktopHome() {
  const [open, setOpen] = useState(false);
  return (
    <div className="DesktopHome-container relative" id="home">
      <div
        className="info-button"
        onClick={(e) => {
          setOpen(true);
        }}
      >
        
        <InfoIcon className="absolute -left-7 z-[100]"/>
      </div>
      <div className="desktop__shelves-container pt-20">
        <Modal
          cn={"desktop__modal"}
          isOpen={open}
          onClose={(e) => {
            setOpen(false);
            e.stopPropagation();
          }}
        />
        <DesktopShelves />
      </div>
    </div>
  );
}

export default DesktopHome;
