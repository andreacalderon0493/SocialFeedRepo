const Post = ({ postObj, title }) => {
  console.log(postObj);
  const handleClick = (e) => {
    console.log(e);
  };
  return (
    <div>
      <h4>{title}</h4>

      <div>
        <div>
          <span>Name</span>
          <span>{postObj.name}</span>
          <div>
            <span>Post</span>
            <span>{postObj.post}</span>
          </div>
          <div>
            <button onClick={handleClick}>Like</button>
            <button onClick={handleClick}>Dislike</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostList;
