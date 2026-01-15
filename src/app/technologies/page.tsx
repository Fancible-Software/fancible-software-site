"use client";

import Link from 'next/link';
import React from 'react';
import {
    Code2,
    Server,
    Database,
    Cloud,
    BrainCircuit,
    Workflow,
    Smartphone,
    ArrowRight
} from 'lucide-react';
import TechCard from '@/components/TechCard';

export default function TechnologiesPage() {
    return (
        <main className="pt-32 pb-24 px-6 min-h-screen relative overflow-hidden bg-white selection:bg-accent/20">

            {/* Animated Background Blobs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px] animate-float pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] animate-float-delayed pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in">
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
                        Engineering <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-600 relative inline-block p-2">
                            Excellence
                            <svg className="absolute bottom-0 left-0 w-full h-3 text-accent/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                            </svg>
                        </span>
                    </h1>
                    <p className="text-xl text-secondary leading-relaxed max-w-2xl mx-auto">
                        We leverage a cutting-edge stack to build scalable, high-performance solutions. From distributed systems to AI-driven interfaces, our toolkit is designed for impact.
                    </p>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(200px,auto)]">

                    {/* Core Languages - Amber/Red */}
                    <TechCard
                        title="Core Languages"
                        items={['Python', 'TypeScript', 'Java', 'JavaScript', 'SQL']}
                        icon={Code2}
                        className="md:col-span-2 lg:col-span-2 row-span-1"
                        delay={0.1}
                    />

                    {/* Frontend - Blue */}
                    <TechCard
                        title="Modern Frontend"
                        items={['React', 'Next.js', 'Angular', 'TailwindCSS', 'Framer Motion', 'React Native']}
                        icon={Smartphone}
                        className="md:col-span-1 lg:col-span-1 md:row-span-2"
                        delay={0.2}
                    />

                    {/* Backend - Purple */}
                    <TechCard
                        title="Backend Architectures"
                        items={['FastAPI', 'Spring Boot', 'NestJs', 'Django', 'ExpressJs', 'GraphQL']}
                        icon={Server}
                        className="md:col-span-1 lg:col-span-1"
                        delay={0.3}
                    />

                    {/* AI & ML - Slate/Emerald */}
                    <TechCard
                        title="AI & ML"
                        items={['LangChain', 'Ollama', 'PyTorch', 'PySpark', 'Pandas', 'NumPy', 'RAG Agents']}
                        icon={BrainCircuit}
                        className="md:col-span-2 lg:col-span-2"
                        delay={0.4}
                    />

                    {/* Data & Storage - Teal */}
                    <TechCard
                        title="Data Infrastructure"
                        items={['PostgreSQL', 'Redis', 'CloudNativePG', 'Vector DBs', 'RabbitMQ']}
                        icon={Database}
                        className="md:col-span-1 lg:col-span-1"
                        delay={0.5}
                    />

                    {/* DevOps - Sky/Cyan */}
                    <TechCard
                        title="DevOps & Cloud"
                        items={['AWS', 'Kubernetes (K8s)', 'Docker', 'GitHub Actions', 'Jenkins', 'Cloud Foundry']}
                        icon={Cloud}
                        className="md:col-span-2 lg:col-span-2"
                        delay={0.6}
                    />

                    {/* Architecture - Pink/Rose */}
                    <TechCard
                        title="System Design"
                        items={['Microservices', 'Event-Driven', 'Distributed Systems', 'High Availability']}
                        icon={Workflow}
                        className="md:col-span-1 lg:col-span-1"
                        delay={0.7}
                    />

                </div>

                {/* Call to Action */}
                <div className="mt-32 text-center animate-fade-in opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
                    <h2 className="text-4xl font-bold mb-6 tracking-tight">Ready to Build Your Vision?</h2>
                    <p className="text-xl text-secondary mb-10 max-w-2xl mx-auto">
                        Let's combine these technologies to create software that drives real business growth.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-700 transition-all hover:scale-105 shadow-xl hover:shadow-accent/20 group"
                    >
                        Start a Project
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </main>
    );
}
