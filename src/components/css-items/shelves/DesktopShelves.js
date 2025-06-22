import React, { useState, useEffect } from "react";
import Shelf from "./Shelf";
import Radio from "../radio/radio";
import Books from "../books/Books";
import Sewing from "../sewing/Sewing";
import Pens from "../writing/Pens";
import Books2 from "../books/Books2";
import Laptop from "../laptop/Laptop";
import Dessert from "../dessert/Dessert";
import NewtonsCradle from "../newtonsCradle/NewtonsCradle";
import DigitalClock from "../digitalClock/DigitalClock";
import TeaCup from "../teacup/teacup";
import ColorSlider from "../../code-snippets/ColorSlider";
import InvertClrBtn from "./InvertClrBtn";
import "./shelves.scss";

function DesktopShelves() {
    const [rangeVal, setRangeVal] = useState(216);
    const [bgColor, setBgColor] = useState("#e8f1ff");

      useEffect(() => {
    setBgColor(`hsl(${rangeVal}, 100%, 95%)`);
  }, [rangeVal]);

  return (
    <div className="relative w-[100vw]"
    style={{ backgroundColor: bgColor }}>
        <InvertClrBtn class='absolute top-5 left-5'/>
        <ColorSlider  rangeVal={rangeVal} setRangeVal={setRangeVal}
       className="z-[100000] absolute bottom-[14%] left-1/2 -translate-x-1/2 scale-[.6]" />
      <div className="desktop-shelves w-full">

        {/* Shelf 1 */}
        <Shelf
          cssItem1={<NewtonsCradle cn={"desktop-newtonsCradle-container"} />}
          cssItem2={<Dessert cn={"desktop-dessert-container"} />}
          cssItem3={<Books2 cn={"desktop-books2-container"} />}
        />
        {/* Shelf 2*/}
        <Shelf
          cssItem1={<Radio cn={"desktop-radio-container"} />}
          cssItem2={<Pens cn={"desktop-pens-container"} />}
          cssItem3={<Laptop cn={"desktop-laptop-container"} />}
          cssItem4={<TeaCup />}
        />
        {/* Shelf 3 */}
        <Shelf
          cssItem1={<Sewing cn={"desktop-sewing-container"} />}
          cssItem2={<Books cn={"desktop-books-container"} />}
          cssItem3={<DigitalClock />}
        />
      </div>
    </div>
  );
}

export default DesktopShelves;
