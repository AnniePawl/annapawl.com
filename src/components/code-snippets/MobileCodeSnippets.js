import React from "react";
import "./code-snippets.scss";

function MobileCodeSnippets() {
  return (
    <div className="mobileCodeSnippets-container" id="code-snippets">
      <div className="codeSnippets__lists">
        <h1 className="codeSnippets__h1">Code Snippets</h1>
        <p>
          Click on the links below to see the source code for my little CSS
          animations
        </p>
        <div>
          <h3 className="codeSnippets__h3">Pure CSS</h3>

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
              <a href="https://codepen.io/annampawl/pen/rNJjbqr" target="blank">
                Radio
              </a>
            </li>
            <li>
              <a href="https://codepen.io/annampawl/pen/qBxRvQx" target="blank">
                Laptop
              </a>
            </li>
            <li>
              <a href="https://codepen.io/annampawl/pen/BaYpxBy" target="blank">
                Pen Holder
              </a>
            </li>
            <li>
              <a href="https://codepen.io/annampawl/pen/jOZmboO">
                Sewing Station
              </a>
            </li>
            <li>
              <a href="https://codepen.io/annampawl/pen/rNJjowd" target="blank">
                Book Stack
              </a>
            </li>
            <li>
              <a href="https://codepen.io/annampawl/pen/xxYgMXb" target="blank">
                Books
              </a>
            </li>
            <li>
              <a href="https://codepen.io/annampawl/pen/BaJqmab" target="blank">
                Rainbow
              </a>
            </li>
            <li>
              <a href="https://codepen.io/annampawl/pen/vYpbjXz" target="blank">
                Checkerboard
              </a>
            </li>
            <li>
              <a
                href="https://codepen.io/annampawl/details/jOYQQNR"
                target="blank"
              >
                Plaid Patterns
              </a>
            </li>
          </ul>
        </div>
        {/* <div>
          <h3 className="codeSnippets__h3">CSS & JS</h3>
          <ul>
            <li>Random Color Generator</li>
            <li>Strobe Light Party</li>
            <li>Digital Clock</li>
          </ul>
        </div> */}
      </div>
    </div>
  );
}

export default MobileCodeSnippets;
