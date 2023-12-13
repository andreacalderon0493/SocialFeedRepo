import React, { useState } from "react";
import "./Post.css";

const Post = ({ newPost }) => {
  console.log(newPost);
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
    newPost && (
      <div className="post-item">
        <div>
          <div>
            <div>{newPost.name}</div>
            <div>
              <div>{newPost.post}</div>
            </div>
            <div className="flex-button">
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
    )
  );
};

export default Post;
