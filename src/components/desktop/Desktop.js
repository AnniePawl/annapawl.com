import React, { useState } from "react";
import DesktopAbout from "../about-me/DesktopAbout";
import DesktopShelves from "../css-items/shelves/DesktopShelves";
import "./desktop.scss";
import { ReactComponent as InfoIcon } from "../../assets/info.svg";
import Modal from "../modal/Modal";

function Desktop() {
  const [open, setOpen] = useState(false);

  return (
    <div className="desktop">
      <div
        className="info-button"
        onClick={(e) => {
          setOpen(true);
        }}
      >
        <InfoIcon />
      </div>
      <DesktopAbout />
      <div className="desktop-shelves-container">
        <Modal
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

export default Desktop;
