import React from "react";
import { Link } from "react-router-dom";
import "./Post.css";
function Post({ post }) {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="post">
      {post.photo && <img className="postImg" alt="" src={PF + post.photo} />}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((category) => (
            <span className="postCat" key={category._id}>
              {category.name}
            </span>
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
