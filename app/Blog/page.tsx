import { BlogGrid } from "@/components/blog"

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-[#1B1464] text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center">Blog & Articles</h1>
          <p className="mt-4 text-center text-gray-200 max-w-2xl mx-auto">
            Stay updated with the latest news, tips, and insights about shipping and logistics in Indonesia
          </p>
        </div>
      </div>
      <BlogGrid />
    </main>
  )
}

