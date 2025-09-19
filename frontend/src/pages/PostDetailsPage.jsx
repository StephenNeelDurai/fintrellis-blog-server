import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function PostDetailPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => console.error(err));
  }, [id]);

  const handleDelete = async () => {
    await fetch(`${process.env.REACT_APP_API_URL}/posts/${id}`, { method: "DELETE" });
    navigate("/");
  };

  const handleEdit = async () => {
    navigate(`/posts/${id}/edit`);
  };

  if (!post) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
      <p className="text-gray-700 mb-6">{post.content}</p>
      <div className="space-x-4">

        <button
          onClick={handleEdit}
          className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 w-32"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 w-32"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
