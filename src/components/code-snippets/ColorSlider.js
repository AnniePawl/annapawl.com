import React from "react";
import './color-slider.scss';

export default function ColorSlider({ className, rangeVal, setRangeVal }) {
  return (
    <div className={className}>
      <input
        className="colorSlider w-[500px] max-w-6xl px-4"
        type="range"
        onChange={(e) => setRangeVal(e.target.value)}
        value={rangeVal}
        min="0"
        max="360"
      />
    </div>
  );
}
