import { React, useState, useEffect } from "react";
import "./code-snippets.scss";
import "./color-slider.scss";

function DesktopCodeSnippets() {
  const [rangeVal, setRangeVal] = useState(133);
  const [bkgdClr, setBkgdClr] = useState(`hsl(200,60%, 100%)`);
  console.log(`default bg ${bkgdClr}`);

  useEffect(() => {
    // console.log("value chagned");
    setBkgdClr(`hsl(${rangeVal}, 80%, 90%`);
    console.log(bkgdClr);
  }, [rangeVal]);

  return (
    <div
      className="codeSnippets-container"
      id="code-snippets"
      style={{ backgroundColor: `${bkgdClr}` }}
    >
      <div className="codeSnippets__contents">
        <h1 className="codeSnippets__h1">Code Snippets</h1>
        <p>
          A collection of bite-sized projects I made in pursuit of learning and
          fun
        </p>

        <div className="codeSnippets__lists">
          <div>
            <h3 className="codeSnippets__h3">Just CSS</h3>

            <ul>
              <li>
                <a
                  href="https://codepen.io/annampawl/full/yLvoGQY"
                  target="blank"
                >
                  My Shelf
                </a>
              </li>
              <li>
                <a
                  href="https://codepen.io/annampawl/pen/rNJjbqr"
                  target="blank"
                >
                  Radio
                </a>
              </li>
              <li>
                <a
                  href="https://codepen.io/annampawl/pen/qBxRvQx"
                  target="blank"
                >
                  Laptop
                </a>
              </li>
              <li>
                <a
                  href="https://codepen.io/annampawl/pen/BaYpxBy"
                  target="blank"
                >
                  Pen Holder
                </a>
              </li>
              <li>
                <a href="https://codepen.io/annampawl/pen/jOZmboO">
                  Sewing Station
                </a>
              </li>
              <li>
                <a
                  href="https://codepen.io/annampawl/pen/rNJjowd"
                  target="blank"
                >
                  Book Stack
                </a>
              </li>
              <li>
                <a
                  href="https://codepen.io/annampawl/pen/xxYgMXb"
                  target="blank"
                >
                  Books
                </a>
              </li>
              <li>
                <a
                  href="https://codepen.io/annampawl/pen/BaJqmab"
                  target="blank"
                >
                  Rainbow
                </a>
              </li>
              <li>
                <a
                  href="https://codepen.io/annampawl/pen/vYpbjXz"
                  target="blank"
                >
                  Checkerboard
                </a>
              </li>
              <li>
                <a
                  href="https://codepen.io/annampawl/pen/jOYQQNR"
                  target="blank"
                >
                  Plaid Patterns
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="codeSnippets__h3">CSS & JS</h3>
            <ul>
              <li>
                <a
                  href="https://codepen.io/annampawl/pen/yLKLbaY"
                  target="blank"
                >
                  Digital Clock
                </a>
              </li>
              <li>
                <a
                  href="https://codepen.io/annampawl/pen/jOzPeLJ"
                  target="blank"
                >
                  RGB Sliders
                </a>
              </li>
              <li>
                <a
                  href="	https://codepen.io/annampawl/pen/QWQwYYB"
                  target="blank"
                >
                  Color Generator
                </a>
              </li>
              {/* <li>Strobe Light Party</li> */}
            </ul>
          </div>
        </div>
      </div>

      <input
        className="colorSlider"
        type="range"
        onChange={(event) => setRangeVal(event.target.value)}
        value={rangeVal}
        min="0"
        max="360"
      ></input>
    </div>
  );
}

export default DesktopCodeSnippets;
