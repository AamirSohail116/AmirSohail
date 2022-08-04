import React from "react";
import "./UIDesign.css";

import { Link } from "react-router-dom";
import { default as images } from "../../Data/UIImages";

function UIDesign() {
  console.log(images);
  return (
    <div className="container">
      <div className="UiDesign">
        <div className="UIDesign-heading">
          <h3>UI/UX</h3>
          <span>view the archieve</span>
        </div>
        <div className="Design">
          <Link to="/" className="Design-cart">
            {images.map((img, i) => (
              <img src={img} alt="" />
            ))}
          </Link>
        </div>
        <button className="btn s-btn">Show more</button>
      </div>
    </div>
  );
}

export default UIDesign;
