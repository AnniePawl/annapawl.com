import React from 'react';
import './rgbslider.scss'

export default function RgbSlider(){
    return(
        <div className=''>
            <div className='sliders w-full flex flex-col'>
                <input className='input2' type='range' id='rangeRed' value='5' min='0' max='255'></input>
                <input className='input2' type='range' id='rangeGreen' value='171' min='0' max='255'></input>
                <input className='input2' type='range' id='rangeBlue' value='133' min='0' max='255'></input>
                <span className='text-white' id='rgbValue'></span>
            </div>
        </div>
    )
}