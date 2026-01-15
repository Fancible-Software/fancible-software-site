import { client } from "@/lib/sanity";
import BlogCard from "@/components/BlogCard";
import * as motion from "framer-motion/client";

export const revalidate = 60; // Revalidate every 60 seconds

async function getPosts() {
    const query = `*[_type == "post"] | order(publishedAt desc) {
    title,
    slug,
    mainImage,
    publishedAt,
    excerpt
  }`;
    return client.fetch(query);
}

export default async function BlogPage() {
    const posts = await getPosts();

    return (
        <main className="pt-12 pb-24 px-6 min-h-screen bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-bold mb-6 tracking-tight"
                    >
                        Our <span className="text-accent">Insights</span>
                    </motion.h1>
                    <p className="text-xl text-secondary leading-relaxed">
                        Latest thoughts on engineering, product strategy, and digital growth.
                    </p>
                </div>

                {posts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {posts.map((post: any, index: number) => (
                            <BlogCard key={post.slug.current} post={post} index={index} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-gray-50 rounded-3xl border border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-400 mb-2">No posts found</h3>
                        <p className="text-secondary">Check back soon for updates!</p>
                    </div>
                )}
            </div>
        </main>
    );
}
