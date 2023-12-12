import "./App.css";
import Header from "./components/Header/Header";
import PostList from "./components/Post/Post";

function App() {
  const selectedMessage = {
    name: "Andrea Calderon",
    post: "Hello All! Welcome to my first React App",
  };
  return (
    <div className="App">
      <Header />
      <PostList />
    </div>
  );
}

export default App;
