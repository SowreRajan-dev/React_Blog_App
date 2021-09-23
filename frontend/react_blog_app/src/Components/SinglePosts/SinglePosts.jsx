import React from "react";
import "./SinglePosts.css";
function SinglePosts() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src="/Images/singlePostImg.jpg" alt="" className="singlePostIng" />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet{" "}
          <div className="singlePostEdit">
            <i className="singlePostIcon fas fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Name</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quis
          amet id non cumque, voluptatum quaerat ex excepturi voluptates
          sapiente obcaecati necessitatibus sed dignissimos reprehenderit
          molestias, quae, aperiam nemo dicta! Illo, ex omnis! Veniam quidem
          recusandae laudantium enim nihil officiis eos pariatur officia earum
          explicabo labore iusto sequi repellendus reiciendis, at qui magnam
          provident consequuntur culpa assumenda. Assumenda, facilis
          dignissimos. Eos saepe, nobis illum molestiae porro dolores dolore
          error in. Qui praesentium totam sunt tempora numquam eveniet
          repellendus corporis maiores quidem. Consequatur, praesentium
          repellendus? Aspernatur laborum eaque provident numquam consequuntur!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quis
          amet id non cumque, voluptatum quaerat ex excepturi voluptates
          sapiente obcaecati necessitatibus sed dignissimos reprehenderit
          molestias, quae, aperiam nemo dicta! Illo, ex omnis! Veniam quidem
          recusandae laudantium enim nihil officiis eos pariatur officia earum
          explicabo labore iusto sequi repellendus reiciendis, at qui magnam
          provident consequuntur culpa assumenda. Assumenda, facilis
          dignissimos. Eos saepe, nobis illum molestiae porro dolores dolore
          error in. Qui praesentium totam sunt tempora numquam eveniet
          repellendus corporis maiores quidem. Consequatur, praesentium
          repellendus? Aspernatur laborum eaque provident numquam consequuntur!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quis
          amet id non cumque, voluptatum quaerat ex excepturi voluptates
          sapiente obcaecati necessitatibus sed dignissimos reprehenderit
          molestias, quae, aperiam nemo dicta! Illo, ex omnis! Veniam quidem
          recusandae laudantium enim nihil officiis eos pariatur officia earum
          explicabo labore iusto sequi repellendus reiciendis, at qui magnam
          provident consequuntur culpa assumenda. Assumenda, facilis
          dignissimos. Eos saepe, nobis illum molestiae porro dolores dolore
          error in. Qui praesentium totam sunt tempora numquam eveniet
          repellendus corporis maiores quidem. Consequatur, praesentium
          repellendus? Aspernatur laborum eaque provident numquam consequuntur!
        </p>
      </div>
    </div>
  );
}

export default SinglePosts;
