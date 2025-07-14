import { React, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Pantone from "./Pantone";
import RgbSlider from "./RgbSlider";
import Checkerboard from "./Checkerboard";
import { ReactComponent as StarIcon } from "../../assets/star-icon.svg";
import { ReactComponent as Codepen } from "../../assets/codepen.svg";
import "./code-snippets.scss";
import "./color-slider.scss";

export default function CodeSnippets2() {
  const [rangeVal, setRangeVal] = useState(160);
  const [bkgdClr, setBkgdClr] = useState("hsl(160, 100%, 92%)");
  // console.log(`default bg ${bkgdClr}`);
  useEffect(() => {
    // console.log("value chagned");
    setBkgdClr(`hsl(${rangeVal}, 100%, 92%`);
  }, [rangeVal]);

  return (
<div className="overflow-hidden w-screen h-fit flex flex-col items-center">
        <Link to="/">
            <div className='absolute top-4 left-4 scale-[.7] '><StarIcon /></div>
        </Link>
        {/* Color Slider/Heading */}
         <div className='h-fit w-screen flex flex-col items-center pt-16 pb-12 relative' id="code-snippets" style={{ backgroundColor: `${bkgdClr}` }}> 
         <a className="mr-4 contact__codepen-icon scale-[.6] absolute bottom-3 right-0" href="https://codepen.io/annampawl" target="blank"><Codepen/></a>
            <div className='text flex w-full flex justify-center pb-5'>
                <h1 className='mr-3 md:mr-5 whitespace-nowrap text-zinc7600 text-2xl md:text-6xl font-black tracking-wider md:tracking-widest text-emerald-200 uppercase'>Code Snippets</h1>
                <h1 className='mr-3 md:mr-5 whitespace-nowrap text-zinc-700 text-2xl md:text-6xl font-black tracking-wider md:tracking-widest text-emerald-200 uppercase'>Code Snippets</h1>
                <h1 className='mr-3 md:mr-5 whitespace-nowrap text-zinc-700 text-2xl md:text-6xl font-black tracking-wider md:tracking-widest text-emerald-200 uppercase'>Code Snippets</h1>
                <h1 className='mr-3 md:mr-5 whitespace-nowrap text-zinc-700 text-2xl md:text-6xl font-black tracking-wider md:tracking-widest text-emerald-200 uppercase'>Code Snippets</h1>
                <h1 className='mr-3 md:mr-5 whitespace-nowrap text-zinc-700 text-2xl md:text-6xl font-black tracking-wider md:tracking-widest text-emerald-200 uppercase'>Code Snippets</h1>
                <h1 className='mr-3 md:mr-5 whitespace-nowrap text-zinc-700 text-2xl md:text-6xl font-black tracking-wider md:tracking-widest text-emerald-200 uppercase'>Code Snippets</h1>
            </div>
            <input
                className="colorSlider w-full max-w-6xl px-4 "
                type="range"
                onChange={(event) => setRangeVal(event.target.value)}
                value={rangeVal}
                min="0"
                max="360"
            ></input>
         </div>
        <div className='w-full flex grid grid-cols-1 md:grid-cols-2 '>
            <div className='relative py-40 bg-blue-200 flex items-center justify-center'>
            <a className="mr-4 contact__codepen-icon scale-[.6] absolute bottom-3 right-0" href="https://codepen.io/annampawl" target="blank"><Codepen/></a>
                {/* <RgbSlider/> */}
            </div>
            <div className='relative py-40 bg-zinc-100 flex items-center justify-center'>
                <a className="mr-4 contact__codepen-icon scale-[.6] absolute bottom-3 right-0" href="https://codepen.io/annampawl" target="blank"><Codepen/></a>
                <Pantone/>
            </div>
        </div>
        <div>
            <Checkerboard/>
        </div>
    </div>
  );
}


