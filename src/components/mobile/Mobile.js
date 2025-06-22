import React, { useState } from "react";
import Modal from "../modal/Modal";
import MobileAbout from "../about-me/MobileAbout";
import MobileShelves from "../css-items/shelves/MobileShelves";
import MobileFooter from "./MobileFooter";
import MobileWriting from "../writing/MobileWriting";
import MobileCodeSnippets from "../code-snippets/MobileCodeSnippets";
import MobileEmbroidery from "../embroidery/MobileEmbroidery";
import "./mobile.scss";
import { ReactComponent as InfoIcon } from "../../assets/info.svg";

function Mobile() {
  const [open, setOpen] = useState(false);
  return (
    <div className="mobile">
      <MobileAbout />
      <Modal
        cn={"mobile__modal"}
        isOpen={open}
        onClose={(e) => {
          setOpen(false);
          e.stopPropagation();
        }}
      />
      <div className="mobile__shelves-container">

        <div class='relative w-full h-full'>
          <div
            className="mobile__info-btn absolute top-4 right-4"
            onClick={(e) => {
              setOpen(true);
            }}
          >
            <InfoIcon class=' h-6 w-6 ' />
          </div>
          <MobileShelves />
        </div>
      </div>
      {/* <MobileCodeSnippets />
      <MobileEmbroidery />
      <MobileWriting /> */}
      <MobileFooter />
    </div>
  );
}

export default Mobile;
