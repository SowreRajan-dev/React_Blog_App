import React, { useContext } from "react";
import "./Topbar.css";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
function Topbar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleLogOut = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="top-left">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-instagram"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
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
          {user && (
            <li className="topListItem" onClick={handleLogOut}>
              LOGOUT
            </li>
          )}
        </ul>
      </div>
      <div className="top-right">
        {user ? (
          <Link className="link" to="/settings">
            <img src={PF + user.profilePic} alt="" className="topImg" />
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
