import Post from "../Post/Post";
const PostList = ({ posts = [] }) => {
  const postItems = posts.map((post, i) => <Post key={i} newPost={post} />);

  return (
    <div className="flex-item">
      <h4>Messages</h4>
      <div>{postItems}</div>
    </div>
  );
};

export default PostList;
