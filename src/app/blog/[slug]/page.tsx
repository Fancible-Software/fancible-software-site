import Image from 'next/image';
import Link from 'next/link';
import { client, urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import { ArrowLeft } from 'lucide-react';

export const revalidate = 60;

async function getPost(slug: string) {
    const query = `*[_type == "post" && slug.current == $slug][0] {
    title,
    slug,
    mainImage,
    publishedAt,
    body,
    author->{name, image}
  }`;
    return client.fetch(query, { slug });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        return (
            <main className="pt-12 pb-24 px-6 text-center">
                <h1 className="text-4xl font-bold mb-4">Post not found</h1>
                <Link href="/blog" className="text-accent hover:underline">Return to Blog</Link>
            </main>
        );
    }

    return (
        <main className="pt-12 pb-24 px-6 min-h-screen bg-white">
            <article className="max-w-3xl mx-auto">
                <Link href="/blog" className="inline-flex items-center gap-2 text-secondary hover:text-accent mb-8 transition-colors font-medium">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Blog
                </Link>

                <header className="mb-12">
                    <div className="flex items-center gap-4 text-sm text-secondary mb-6">
                        <time dateTime={post.publishedAt}>
                            {new Date(post.publishedAt).toLocaleDateString('en-US', {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </time>
                        {post.author && (
                            <>
                                <span>•</span>
                                <span>{post.author.name}</span>
                            </>
                        )}
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-balance">
                        {post.title}
                    </h1>

                    {post.mainImage && (
                        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl mb-12">
                            <Image
                                src={urlFor(post.mainImage).url()}
                                alt={post.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    )}
                </header>

                <div className="prose prose-lg prose-slate prose-headings:font-bold prose-headings:tracking-tight prose-a:text-accent prose-img:rounded-xl max-w-none">
                    <PortableText value={post.body} />
                </div>
            </article>
        </main>
    );
}
