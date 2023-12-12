import React, { useState } from "react";

const CreatePostForm = ({}) => {
  const [name, setName] = useState(" ");
  const [post, setPost] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      post,
    };
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex-item">
      <h4>Add Message</h4>
      <div>
        <div>
          <label>Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Post</label>
          <input value={post} onChange={(e) => setPost(e.target.value)} />
        </div>
      </div>
      <button type="submit">Create</button>
    </form>
  );
};

export default CreatePostForm;
