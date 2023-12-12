import React, { useState } from "react";

const CreatePostForm = ({}) => {
  const [name, setName] = useState(" ");
  const [post, setPost] = useState("");

  return (
    <form className="flex-item">
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
    </form>
  );
};

export default CreatePostForm;
