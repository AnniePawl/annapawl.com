import React from 'react';
import './pantone.scss'

export default function Pantone(){
    return(
        <div>
            <div class="color-card md:scale-[1.2]" id="colorCard">
                <div
                    class="color-card__top"
                    id="displayColor"
                    onClick="changeColor()"
                ></div>
                <div class="color-card__bottom">
                    <p id="hexNum">#ecd26b</p>
                    <div class="copy" onClick="copyCode()"></div>
                    <span class="tooltip">copy hex</span>
                </div>
            </div>
        </div>
    )
}