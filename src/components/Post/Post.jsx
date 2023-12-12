const Post = ({ postObj, title }) => {
  console.log(postObj);
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
        </div>
      </div>
    </div>
  );
};

export default PostList;
