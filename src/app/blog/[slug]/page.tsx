import Image from 'next/image';
import Link from 'next/link';
import { client, urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import { ArrowLeft, ArrowRight } from 'lucide-react';

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

                <hr className="my-16 border-gray-100" />

                <div className="flex flex-col md:flex-row justify-between items-center gap-8 bg-gray-50 p-8 rounded-2xl border border-gray-100">
                    {/* Author Details */}
                    {post.author && (
                        <div className="flex items-center gap-4">
                            {post.author.image && (
                                <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gray-200 border-2 border-white shadow-sm">
                                    <Image
                                        src={urlFor(post.author.image).url()}
                                        alt={post.author.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            )}
                            <div>
                                <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Written by</div>
                                <div className="font-bold text-lg leading-none">{post.author.name}</div>
                            </div>
                        </div>
                    )}

                    {/* CTA */}
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-lg font-bold hover:bg-accent transition-all hover:scale-105 shadow-lg group"
                    >
                        Start a Project
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </article>
        </main>
    );
}
