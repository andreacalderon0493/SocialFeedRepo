import Post from "./components/Post/Post";

const PostList = ({ posts = [] }) => {
  const postItems = posts.map((post) => <Post key={(title = "Message Us")} />);
  return (
    <div className="post-list">
      <h4>Messages</h4>
      <div>{postItems}</div>
    </div>
  );
};

export default PostList;
