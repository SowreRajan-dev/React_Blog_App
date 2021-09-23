import React from "react";
import "./Topbar.css";
import { Link } from "react-router-dom";
function Topbar() {
  const user = false;
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
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>

          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          {user && <li className="topListItem">LOGOUT</li>}
        </ul>
      </div>
      <div className="top-right">
        {user ? (
          <Link className="link" to="/settings">
            <img src="/Images/userImg.png" alt="" className="topImg" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Topbar;
