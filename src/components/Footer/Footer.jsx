import React from "react";
import ArrowUpwardSharpIcon from "@mui/icons-material/ArrowUpwardSharp";

import "./Footer.css";

function Footer() {
  return (
    <div className="container">
      <div className="footer">
        <div>
          <ArrowUpwardSharpIcon style={{ color: "#000" }} />
        </div>
        <span>Aamir SohailKhan</span>
      </div>
    </div>
  );
}

export default Footer;
