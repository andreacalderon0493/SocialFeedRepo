import "./App.css";
import Header from "./components/Header/Header";
import Post from "./components/Post/Post";
import PostList from "./components/Post/Post";

function App() {
  const selectedMessage = {
    name: "Andrea Calderon",
    post: "Hello All! Welcome to my first React App",
  };
  return (
    <div className="App">
      <Header />
      <Post title="Message Us!" />
    </div>
  );
}

export default App;
