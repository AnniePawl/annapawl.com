import React from "react";
import SnippetCard from "./SnippetCard";
import "./code-snippets.scss";

function DesktopCodeSnippets() {
  return (
    <div className="codeSnippets-container" id="code-snippets">
      <div className="codeSnippets__contents">
        <h1 className="codeSnippets__h1">Code Snippets</h1>
        <p>
          A collection of bite-sized projects I made in pursuit of learning and
          fun.
        </p>

        <div className="codeSnippets__lists">
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
                  href="	https://codepen.io/annampawl/pen/QWQwYYB"
                  target="blank"
                >
                  Random Color Generator
                </a>
              </li>
              <li>Strobe Light Party</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesktopCodeSnippets;
