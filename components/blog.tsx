"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Loader2 } from "lucide-react"

interface BlogPost {
  id: number
  title: string
  image: string
  writer: string
  content: string
  summary: string
  created_at: string
}

export function BlogGrid() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        console.log("APP_URL:", process.env.NEXT_PUBLIC_APP_URL);
        const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/getblog`);
        if (!response.ok) {
          throw new Error("Failed to fetch blog posts")
        }
        const data = await response.json()
        setPosts(data.data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load blog posts")
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <Loader2 className="w-8 h-8 animate-spin text-[#FF6600]" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center text-red-600 py-8">
        <p>{error}</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Link href={"#"} className="block">
              <div className="relative aspect-[16/9]">
              <Image
                src={post.image ? post.image : "/ekspedisi.png"} // Menambahkan fallback '||'
                alt={post.title}
                width={640}
                height={480}
                className="object-cover"
                />
              </div>
            </Link>
            <div className="p-6">
              <Link href={"#"}>
                <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-[#FF6600] transition-colors line-clamp-2">
                  {post.title}
                </h2>
              </Link>
              <div className="text-sm text-gray-600 mb-3">
                by {post.writer} |{" "}
                {new Date(post.created_at).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
              <div className="text-sm text-gray-600 mb-3">
                {post.summary}
              </div>
              <Link href={`/Blog/${post.id}`} className="inline-block mt-4 text-[#FF6600] hover:text-[#ff751a] font-semibold transition-colors">
                Read More →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

