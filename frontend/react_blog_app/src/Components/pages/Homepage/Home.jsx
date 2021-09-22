import React from "react";
import Header from "../../Header/Header";
import Posts from "../../Posts/Posts";
import Sidebar from "../../SIdebar/Sidebar";
import "./Home.css";
function Home() {
  return (
    <div>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </div>
  );
}

export default Home;
