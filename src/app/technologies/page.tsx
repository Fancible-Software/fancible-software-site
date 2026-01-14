"use client";

import React, { useState, useRef } from 'react';
import {
    Code2,
    Server,
    Database,
    Cloud,
    BrainCircuit,
    Workflow,
    Smartphone
} from 'lucide-react';

const TechCard = ({
    title,
    items,
    icon: Icon,
    className = "",
    delay = 0,
    gradient = "from-gray-900 to-gray-950"
}: {
    title: string,
    items: string[],
    icon: any,
    className?: string,
    delay?: number,
    gradient?: string
}) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
        setOpacity(1);
    };

    const handleBlur = () => {
        setOpacity(0);
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`relative rounded-2xl p-[1px] overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 animate-fade-in-up ${className}`}
            style={{ animationDelay: `${delay}s` }}
        >
            {/* Spotlight Gradient - Border */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 z-10"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.3), transparent 40%)`
                }}
            />

            {/* Card Content */}
            <div className={`relative h-full rounded-2xl p-8 transition-all duration-500 bg-gradient-to-br ${gradient}`}>

                {/* Spotlight Gradient - Inner Background */}
                <div
                    className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 pointer-events-none"
                    style={{
                        opacity,
                        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.1), transparent 40%)`
                    }}
                />

                {/* Background Icon Decoration */}
                <div className="absolute top-0 right-0 p-8 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-12 opacity-10 text-white">
                    <Icon className="w-32 h-32" />
                </div>

                <div className="relative z-10">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 bg-white/10 text-white border border-white/10 backdrop-blur-sm">
                        <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-bold mb-6 text-white tracking-wide">{title}</h3>

                    <div className="flex flex-wrap gap-2">
                        {items.map((item) => (
                            <span
                                key={item}
                                className="px-3 py-1.5 text-sm font-medium rounded-md border transition-all duration-300 bg-white/5 text-white/90 border-white/10 hover:bg-white/15 hover:border-white/20"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

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
                        gradient="from-orange-600 to-red-600"
                        delay={0.1}
                    />

                    {/* Frontend - Blue */}
                    <TechCard
                        title="Modern Frontend"
                        items={['React', 'Next.js', 'Angular', 'TailwindCSS', 'Framer Motion', 'React Native']}
                        icon={Smartphone}
                        className="md:col-span-1 lg:col-span-1 md:row-span-2"
                        gradient="from-blue-600 to-indigo-600"
                        delay={0.2}
                    />

                    {/* Backend - Purple */}
                    <TechCard
                        title="Backend Architectures"
                        items={['FastAPI', 'Spring Boot', 'NestJs', 'Django', 'ExpressJs', 'GraphQL']}
                        icon={Server}
                        className="md:col-span-1 lg:col-span-1"
                        gradient="from-purple-600 to-violet-600"
                        delay={0.3}
                    />

                    {/* AI & ML - Slate/Emerald */}
                    <TechCard
                        title="AI & Machine Learning"
                        items={['LangChain', 'Ollama', 'PyTorch', 'PySpark', 'Pandas', 'NumPy', 'RAG Agents']}
                        icon={BrainCircuit}
                        className="md:col-span-2 lg:col-span-2"
                        gradient="from-slate-800 to-gray-900"
                        delay={0.4}
                    />

                    {/* Data & Storage - Teal */}
                    <TechCard
                        title="Data Infrastructure"
                        items={['PostgreSQL', 'Redis', 'CloudNativePG', 'Vector DBs', 'RabbitMQ']}
                        icon={Database}
                        className="md:col-span-1 lg:col-span-1"
                        gradient="from-teal-600 to-emerald-600"
                        delay={0.5}
                    />

                    {/* DevOps - Sky/Cyan */}
                    <TechCard
                        title="DevOps & Cloud"
                        items={['AWS', 'Kubernetes (K8s)', 'Docker', 'GitHub Actions', 'Jenkins', 'Cloud Foundry']}
                        icon={Cloud}
                        className="md:col-span-2 lg:col-span-2"
                        gradient="from-cyan-600 to-sky-600"
                        delay={0.6}
                    />

                    {/* Architecture - Pink/Rose */}
                    <TechCard
                        title="System Design"
                        items={['Microservices', 'Event-Driven', 'Distributed Systems', 'High Availability']}
                        icon={Workflow}
                        className="md:col-span-1 lg:col-span-1"
                        gradient="from-rose-600 to-pink-600"
                        delay={0.7}
                    />

                </div>
            </div>
        </main>
    );
}
