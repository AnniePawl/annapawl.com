import React from "react";
import "./embroidery.scss";

function MobileEmbroidery() {
  return (
    <div className="mobile-embroidery-container" id="embroidery">
      <div className="mobile-embroider-content">
        <h1>Embroidery</h1>
        <p> Most of my embroidery jokes are sew-sew</p>
        <p>
          Check out my needlework{" "}
          <a href="https://www.instagram.com/feltthing/" target="blank">
            <b>@feltthing</b>
          </a>
        </p>
      </div>

      <div className="e-threads">
        <div className="e-thread"></div>
        <div className="e-thread"></div>
        <div className="e-thread"></div>
        <div className="e-thread"></div>
        <div className="e-thread"></div>
      </div>
    </div>
  );
}

export default MobileEmbroidery;
