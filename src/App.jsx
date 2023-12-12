import "./App.css";
import Header from "./components/Header/Header";
import PostList from "./components/Post/Post";
import CreatePostForm from "./components/CreatePostForm/CreatePostForm";
function App() {
  const selectedMessage = {
    name: "Andrea Calderon",
    post: "Hello All! Welcome to my first React App",
  };
  return (
    <div className="App">
      <Header />
      <PostList />
      <CreatePostForm />
    </div>
  );
}

export default App;
