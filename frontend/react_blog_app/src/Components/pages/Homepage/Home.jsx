import React, { useEffect, useState } from "react";
import Header from "../../Header/Header";
import Posts from "../../Posts/Posts";
import Sidebar from "../../SIdebar/Sidebar";
import axios from "axios";
import "./Home.css";
import { useLocation } from "react-router";
function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPost();
  }, [search]);
  return (
    <div>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </div>
  );
}

export default Home;
