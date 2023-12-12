import React, { useState } from "react";
import "./Post.css";

const Post = ({ postObj, title }) => {
  const [isLike, setIsLike] = useState(false);
  console.log(isLike);
  console.log(postObj);
  const handleClick = (e) => {
    setIsLike(!isLike);
  };
  const btnClass = isLike ? "active-btn" : "";
  const btnClass2 = isLike ? "active-btn-2" : "";
  return (
    <div>
      <h4>{title}</h4>

      <div>
        <div>
          <span>Name</span>
          <span>{postObj.name}</span>
          <div>
            <span>Post</span>
            <span>{postObj.post}</span>
          </div>
          <div>
            <button className={btnClass} onClick={handleClick}>
              Like
            </button>
            <button className={btnClass2} onClick={handleClick}>
              Dislike
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostList;
