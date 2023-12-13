import "./App.css";
import Header from "./components/Header/Header";
import PostList from "./components/PostList/PostList";
import CreatePostForm from "./components/CreatePostForm/CreatePostForm";
import React, { useState, useEffect } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log("update");
  }, [posts]);

  const handleNewPost = (newPost) => {
    const updatedPosts = [...posts, newPost];
    setPosts(updatedPosts);
  };

  return (
    <div className="App">
      <Header />
      <div className="flex-container">
        <CreatePostForm onNewPost={handleNewPost} />
        <PostList posts={posts} />
      </div>
    </div>
  );
}

export default App;
