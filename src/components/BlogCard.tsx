"use client";

import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface BlogPost {
    title: string;
    slug: { current: string };
    mainImage: any;
    publishedAt: string;
    excerpt: string;
}

export default function BlogCard({ post, index }: { post: BlogPost; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group flex flex-col h-full bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
            <div className="relative h-60 w-full overflow-hidden">
                {post.mainImage ? (
                    <Image
                        src={urlFor(post.mainImage).url()}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
                        No Image
                    </div>
                )}
                <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full text-accent shadow-sm">
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                        })}
                    </span>
                </div>
            </div>

            <div className="flex flex-col flex-grow p-8">
                <h3 className="text-2xl font-bold mb-4 leading-tight group-hover:text-accent transition-colors">
                    <Link href={`/blog/${post.slug.current}`} className="hover:underline decoration-accent/30 underline-offset-4">
                        {post.title}
                    </Link>
                </h3>
                <p className="text-secondary mb-6 line-clamp-3 flex-grow">
                    {post.excerpt}
                </p>

                <Link
                    href={`/blog/${post.slug.current}`}
                    className="inline-flex items-center gap-2 font-bold text-accent group/btn"
                >
                    Read Article
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
            </div>
        </motion.div>
    );
}
