"use client";

import React from 'react';
import Link from 'next/link';
import {
    Code2,
    Server,
    BrainCircuit,
    ArrowRight
} from 'lucide-react';
import { motion } from 'motion/react';
import TechCard from './TechCard';

export default function HomeTechnologies() {
    return (
        <section className="py-24 px-6 bg-white border-y border-gray-50 relative overflow-hidden">

            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/3 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
                >
                    <div>
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                            Our <span className="text-accent">Technologies</span>
                        </h2>
                        <p className="text-xl text-secondary max-w-xl leading-relaxed">
                            We choose the right tools for the job. Our stack is optimized for speed, scalability, and developer experience.
                        </p>
                    </div>

                    <Link href="/technologies" className="text-lg font-bold group flex items-center gap-2 hover:text-accent transition-colors">
                        View All Technologies
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </Link>
                </motion.div>

                {/* Selected Tech Grid (Compact Version) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* Core Languages - Highlight */}
                    <TechCard
                        title="Core Stack"
                        items={['Python', 'TypeScript', 'Node.js', 'Go', 'React']}
                        icon={Code2}
                        className="md:col-span-2 lg:col-span-1 row-span-1"
                        delay={0}
                    />

                    {/* AI & ML - Highlight */}
                    <TechCard
                        title="AI & Machine Learning"
                        items={['LangChain', 'Ollama', 'PyTorch', 'RAG Agents']}
                        icon={BrainCircuit}
                        className="md:col-span-1 lg:col-span-1"
                        delay={0.1}
                    />

                    {/* Infrastructure - Highlight */}
                    <TechCard
                        title="Cloud Infrastructure"
                        items={['AWS', 'Kubernetes', 'Docker', 'PostgreSQL']}
                        icon={Server}
                        className="md:col-span-1 lg:col-span-1"
                        delay={0.2}
                    />

                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link href="/technologies" className="btn-primary inline-flex items-center gap-2 font-bold text-accent">
                        View Full Tech Stack <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

            </div>
        </section>
    );
}
