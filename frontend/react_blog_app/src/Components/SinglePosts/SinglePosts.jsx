import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import "./SinglePosts.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
function SinglePosts() {
  const location = useLocation();
  const postId = location.pathname.split("/")[2];
  const PF = "http://localhost:5000/images/";
  const { user } = useContext(Context);
  const [post, setPost] = useState({});
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + postId);

      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [postId]);
  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: {
          username: user.username,
        },
      });
      window.location.replace("/");
    } catch (err) {
      console.log(err);
    }
  };
  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      window.location.reload();
      setUpdateMode(false);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img src={PF + post.photo} alt="" className="singlePostIng postImg" />
        )}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}

            {post.username === user.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon fas fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singlePostIcon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <textarea
            className="singlePostDesc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{desc}</p>
        )}
        {updateMode && (
          <button onClick={handleUpdate} className="singlePostsButton">
            Update
          </button>
        )}
      </div>
    </div>
  );
}

export default SinglePosts;
