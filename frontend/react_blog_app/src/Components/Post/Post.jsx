import React from "react";
import { Link } from "react-router-dom";
import "./Post.css";
function Post({ post }) {
  return (
    <div className="post">
      {post.photo && (
        <img src="/Images/postImg.jpg" className="postImg" alt="" />
      )}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((category) => (
            <span className="postCat">{category.name}</span>
          ))}
        </div>
        <span className="postTitle">
          <Link to={`/post/${post._id}`} className="link">
            {post.title}
          </Link>
        </span>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}

export default Post;
