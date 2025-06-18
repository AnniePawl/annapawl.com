import SkillsBtn from './SkillsBtn';
import { React, useState, useEffect } from "react";
import "./aboutme.scss";
import "../code-snippets/color-slider.scss"

export default function AboutMe(){
    const [rangeVal, setRangeVal] = useState(204);
    const [bkgdClr, setBkgdClr] = useState("hsl(204, 100%, 96%)");
    // console.log(`default bg ${bkgdClr}`);
    useEffect(() => {
      // console.log("value chagned");
      setBkgdClr(`hsl(${rangeVal}, 100%, 96%`);
    }, [rangeVal]);
    return(
        <div className='h-[100vh] w-screen bg-cover flex items-center flex-col' style={{ backgroundColor: `${bkgdClr}` }}>
            {/* Color Slider  */}
            <div className='absolute top-5 right-5 h-fit w-[250px]' id="code-snippets" > 
            {/* <a className="mr-4 contact__codepen-icon scale-[.6] absolute bottom-3 right-0" href="https://codepen.io/annampawl" target="blank"><Codepen/></a> */}
                <input
                    className="colorSlider w-full max-w-6xl px-4 "
                    type="range"
                    onChange={(event) => setRangeVal(event.target.value)}
                    value={rangeVal}
                    min="0"
                    max="360"
                ></input>
             </div>


            <div className='w-full max-w-7xl pt-10'>
                <h1 className='rainbow text-zinc-700 uppercase font-thin text-5xl tracking-tight'>About Me</h1>
                <p>Hi! Welcome to my little corner of the internet. I'm a front end
        engineer bridging the gap between development and design. I like making
        satisfying little experiences with code. The web should be fun ✨</p>
            </div> 
            {/* <img src={headshot} className='w-96 absolute bottom-0 left-20'></img> */}

        </div>

    )
}