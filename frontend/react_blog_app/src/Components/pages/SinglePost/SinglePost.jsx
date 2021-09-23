import React from "react";
import Sidebar from "../../SIdebar/Sidebar";
import SinglePosts from "../../SinglePosts/SinglePosts";
import "./SinglePost.css";
function SinglePost() {
  return (
    <div className="single">
      <SinglePosts />
      <Sidebar />
    </div>
  );
}

export default SinglePost;
