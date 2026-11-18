
function PostCard({ post }) {
  return (
    <article className="post-card">
      <div className="post-author">
        <div className="avatar">
          {post.author.charAt(0)}
        </div>

        <div>
          <h3>{post.author}</h3>
          <span>{post.category}</span>
        </div>
      </div>

      <h2>{post.title}</h2>

      <p>{post.content}</p>
    </article>
  );
}

export default PostCard;
