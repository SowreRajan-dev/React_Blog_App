import React from "react";
import "./Header.css";
function Header() {
  return (
    <div>
      <div className="header">
        <div className="headerTitles">
          <span className="headerTitleLg"> Blog </span>
        </div>
        <img src="/Images/bgImg.jpg" className="headerImg" alt="" />
      </div>
    </div>
  );
}

export default Header;
