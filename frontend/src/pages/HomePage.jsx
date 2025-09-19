import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch from backend API
    fetch(`${process.env.REACT_APP_API_URL}/posts`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data?.posts) && data?.posts?.length > 0) setPosts(data?.posts)
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">All Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map(post => (
          <div key={post.id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">{post.title}</h3>
            <p className="text-gray-700 line-clamp-3">{post.content}</p>
            <Link
              to={`/posts/${post.id}`}
              className="text-blue-600 mt-3 inline-block hover:underline"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
