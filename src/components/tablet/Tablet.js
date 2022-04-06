import React, { useState } from "react";
import TabletShelves from "../css-items/shelves/TabletShelves";
import Contact from "../about-me/Contact";
import "./tablet.scss";
import { ReactComponent as InfoIcon } from "../../assets/info.svg";
import Modal from "../modal/Modal";

function Tablet() {
  const [open, setOpen] = useState(false);
  return (
    <div className="tablet-shelf-container">
      <div
        className="info-button"
        onClick={(e) => {
          setOpen(true);
        }}
      >
        <InfoIcon />
      </div>
      <div className="tablet-contact">
        <Contact />
      </div>
      <Modal
        cn={"tablet-modal"}
        isOpen={open}
        onClose={(e) => {
          setOpen(false);
          e.stopPropagation();
        }}
      />

      <TabletShelves />
    </div>
  );
}

export default Tablet;
