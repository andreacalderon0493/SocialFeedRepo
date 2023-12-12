import "./App.css";
import Header from "./components/Header/Header";
import PostList from "./components/Post/Post";
import CreatePostForm from "./components/CreatePostForm/CreatePostForm";
import React, { useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  return (
    <div className="App">
      <Header />
      <div className="flex-container">
        <PostList posts={posts} />
        <CreatePostForm />
      </div>
    </div>
  );
}

export default App;
