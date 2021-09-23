import React from "react";
import "./Post.css";
function Post() {
  return (
    <div className="post">
      <img src="/Images/postImg.jpg" className="postImg" alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem, ipsum dolor sit</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        lorem ipsum amet consectetur adipisicing elit. Delectus sint esse ipsam
        obcaecati eligendi maiores molestias corporis unde. Ducimus beatae rem
        molestias quod voluptate aliquam ex praesentium deserunt aspernatur
        illum.
      </p>
    </div>
  );
}

export default Post;
