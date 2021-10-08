import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

import "./Sidebar.css";
function Sidebar() {
  const [cat, setCat] = useState([]);
  const { user } = useContext(Context);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/category");
      setCat(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sideBar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className="sidebarAboutImg" src="/Images/aboutmePic.jpg" alt="" />
        {user && <p className="sideBarAboutContent">{user.userDescription}</p>}
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cat.map((cat) => (
            <Link to={`/?cat=${cat.name}`} key={cat._id} className="link">
              <li className="sidebarListItem">{cat.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem1">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sideBarIcon fab fa-facebook-square"></i>
          <i className="sideBarIcon fab fa-twitter-square"></i>
          <i className="sideBarIcon fab fa-instagram"></i>
          <i className="sideBarIcon fab fa-pinterest-square"></i>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
