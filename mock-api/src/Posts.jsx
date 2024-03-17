import { usePosts } from "./PostsProvider";

export default function Posts() {
  const { posts, isLoading, isError, error, setSelectedPost, selectedPost } = usePosts();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
    <ul>
      {posts &&
        posts.map((post) => (
          <li key={post.id}>
            {post.id} | 
            {post.title} | 
            {post.content}
            <button  onClick={() => setSelectedPost(post)}>Select</button>
          </li>
        ))}
    </ul>
    {selectedPost && (
      <div>
        <h2>{selectedPost.title}</h2>
        <p>{selectedPost.content}</p>
      </div>
    )}
    </div>
  );
}
