import Post from "./Post";

export default function PostsContainer(props) {
  function getPosts(from, to) {
    return props.postsData

      .slice(from, to)
      .reverse()
      .map((post, index) => {
        return (
          <Post
            key={index}
            id={post._id}
            username={post.username}
            text={post.text}
            name={post.user.name}
            surname={post.user.surname}
            updatedTime={post.createdAt}
            image={post.user.image}
            refreshData={props.refreshData}
            userId={post.user._id}
            postImage={post.image}
            currentUserId={props.currentUserId}
          />
        );
      });
  }
  return (
    <div className="d-flex flex-column">
      {getPosts(props.postsData.length - 20, props.postsData.length)}
    </div>
  );
}
