import React, { useState } from "react";

const CreatePostForm = ({ onNewPost }) => {
  const [name, setName] = useState(" ");
  const [post, setPost] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      post,
    };
    onNewPost(formData);
  };
  const newPost = {
    name,
    post,
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex-item">
        <h4>Add Message</h4>
        <div>
          <label>Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Post</label>
          <textarea
            row="num"
            value={post}
            onChange={(e) => setPost(e.target.value)}
          />
        </div>
      </div>
      <div className=" flex-button button-color">
        <button type="submit">Create</button>
      </div>
    </form>
  );
};

export default CreatePostForm;
