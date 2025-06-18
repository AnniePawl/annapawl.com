import { React, useState, useEffect } from "react";
import './pantone.scss'

export default function Pantone(){
    // const [bkgdClr, setBkgdClr] = useState("#bada55");

    let randomColor = "#";
    const makeRandomColor = () => {
        const colorValues = [
          "0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
          for (let x = 0; x < 6; x++) {
          let index = Math.floor(Math.random() * 16);
          let randomValue = colorValues[index];
          randomColor += randomValue;
             }
        return randomColor;
      };
      
    // Generate color card
      const makeColorCard = () => {
        makeRandomColor();
        let hexNum = (document.getElementById("hexNum").innerHTML = randomColor);
        let displayColor = document.getElementById("displayColor");
        displayColor.style.backgroundColor = randomColor;
      };
      
    //   makeColorCard();
      
    //   // Change color on swatch or spacebar click
      const changeColor = () => {
        randomColor = "#";
        makeColorCard();
      };
      
      document.addEventListener("keyup", (event) => {
        if (event.code === "Space") {
          randomColor = "#";
          makeColorCard();
        }
      });
      
    //   // Copy Hex code to clipboard
      const copyCode = () => { navigator.clipboard.writeText(randomColor);
    };
      

    return(
        <div>
            <div className="color-card md:scale-[1.2]" id="colorCard">
                <div className="color-card__top flex items-center justify-center" id="displayColor" onClick={changeColor}>
                    <p className='text-[9px] text-zinc-50 tracking-wider'>click me </p>
                </div>
                <div className="color-card__bottom">
                    <p id="hexNum">#ecd26b</p>
                    <div className="copy" onClick={copyCode}></div>
                    <span className="tooltip">copy hex</span>
                </div>
            </div>
        </div>
    )
}