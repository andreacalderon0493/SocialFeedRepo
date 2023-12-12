import React, { useState } from "react";
import "./Post.css";

const Post = ({ postObj, title }) => {
  const [isLike, setIsLike] = useState(false);
  const [isDislike, setIsDisLike] = useState(false);
  const handleClick = (e) => {
    setIsLike(!isLike);
  };
  const handleClicker = (e) => {
    setIsDisLike(!isDislike);
  };
  const btnClass = isLike ? "active-btn" : "";
  const btnClass2 = isDislike ? "active-btn-2" : "";
  return (
    <div>
      <h4>{title}</h4>

      <div>
        <div>
          <span>Name</span>
          <span></span>
          <div>
            <span>Post</span>
            <span></span>
          </div>
          <div>
            <button className={btnClass} onClick={handleClick}>
              Like
            </button>
            <button className={btnClass2} onClick={handleClicker}>
              DisLike
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
