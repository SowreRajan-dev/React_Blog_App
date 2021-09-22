import React from "react";
import "./Topbar.css";
function Topbar() {
  return (
    <div className="top">
      <div className="top-left">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i class="topIcon fab fa-instagram"></i>
        <i class="topIcon fab fa-pinterest-square"></i>
      </div>
      <div className="top-center">
        <ul className="topList">
          <li className="topListItem">Home</li>
          <li className="topListItem">About</li>
          <li className="topListItem">Contact</li>
          <li className="topListItem">Write</li>
          <li className="topListItem">Logout</li>
        </ul>
      </div>
      <div className="top-right">
        <img src="/Images/userImg.png" alt="" className="topImg" />
        <i class="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}

export default Topbar;
