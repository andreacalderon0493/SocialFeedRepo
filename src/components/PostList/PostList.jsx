const PostList = ({}) => {
  const posts = [];
  const postItems = posts.map((post) => <div>{post}</div>);
  return (
    <div>
      <h4>Messages</h4>
      <div>{postItems}</div>
    </div>
  );
};

export default PostList;
