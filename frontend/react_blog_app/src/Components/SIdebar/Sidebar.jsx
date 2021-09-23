import React from "react";
import "./Sidebar.css";
function Sidebar() {
  return (
    <div className="sideBar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className="sidebarAboutImg" src="/Images/aboutmePic.jpg" alt="" />
        <p className="sideBarAboutContent">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto porro
          recusandae reiciendis saepe possimus soluta aperiam nostrum dolores.
          Inventore optio est molestias voluptatem commodi suscipit quas nemo
          aliquid repudiandae repellendus!
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem1">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sideBarIcon fab fa-facebook-square"></i>
          <i className="sideBarIcon fab fa-twitter-square"></i>
          <i class="sideBarIcon fab fa-instagram"></i>
          <i class="sideBarIcon fab fa-pinterest-square"></i>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
