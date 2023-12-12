import Post from "./components/Post/Post";

const PostList = ({}) => {
  const posts = [];
  const postItems = posts.map((post) => <Post key={posts} />);
  return (
    <div className="post-list">
      <h4>Messages</h4>
      <div>{postItems}</div>
    </div>
  );
};

export default PostList;
