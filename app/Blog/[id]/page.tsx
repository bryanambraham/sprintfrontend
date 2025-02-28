"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface BlogPost {
  id: number;
  title: string;
  image: string;
  writer: string;
  content: string;
  created_at: string;
}

const BlogDetail = () => {
  const { id } = useParams(); // Ambil ID dari URL
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (id) {
      const fetchPost = async () => {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/getblog/${id}`);
          if (!response.ok) {
            throw new Error("Failed to fetch blog post");
          }
          const data = await response.json();
          setPost(data);
        } catch (err) {
          setError(err instanceof Error ? err.message : "Failed to load blog post");
        } finally {
          setLoading(false);
        }
      };

      fetchPost();
    }
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!post) return <p>Blog post not found</p>;

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-gray-500">by {post.writer} | {new Date(post.created_at).toLocaleDateString("en-US")}</p>
      <img src={post.image || "/default-image.jpg"} alt={post.title} className="w-full h-auto mt-4 rounded-lg" />
      <p className="mt-6">{post.content}</p>
    </div>
  );
};

export default BlogDetail;
