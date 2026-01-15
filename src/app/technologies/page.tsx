"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Code, Database, Smartphone, Cloud, Cpu, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

// Tech Data Structure matching the "Hub" layout
const techCategories = [
    {
        title: "Frontend Development",
        icon: Code,
        description: "Building responsive, high-performance user interfaces.",
        technologies: [
            { name: "React", slug: "react", subTechs: ["Next.js", "Redux", "TanStack Query", "Zustand"] },
            { name: "Vue.js", slug: "vue", subTechs: ["Nuxt.js", "Pinia", "VueX", "Vite"] },
            { name: "Angular", slug: "angular", subTechs: ["RxJS", "NgRx", "Angular Material"] },
            { name: "TypeScript", slug: "typescript", subTechs: ["Strict Typing", "Interfaces", "Generics"] }
        ]
    },
    {
        title: "Backend Engineering",
        icon: Database,
        description: "Robust server-side architectures for scale.",
        technologies: [
            { name: "Node.js", slug: "nodejs", subTechs: ["Express", "NestJS", "Fastify", "Socket.io"] },
            { name: "Python", slug: "python", subTechs: ["Django", "FastAPI", "Flask", "Celery"] },
            { name: "Go", slug: "golang", subTechs: ["Gin", "Echo", "Goroutines", "gRPC"] },
            { name: "Java", slug: "java", subTechs: ["Spring Boot", "Hibernate", "JVM Tuning"] }
        ]
    },
    {
        title: "Mobile App Development",
        icon: Smartphone,
        description: "Native and cross-platform mobile experiences.",
        technologies: [
            { name: "React Native", slug: "react-native", subTechs: ["Expo", "Reanimated", "Native Base"] },
            { name: "Flutter", slug: "flutter", subTechs: ["Dart", "Bloc", "Riverpod", "Material UI"] },
            { name: "iOS (Swift)", slug: "ios", subTechs: ["SwiftUI", "UIKit", "CoreData", "Combine"] },
            { name: "Android", slug: "android", subTechs: ["Kotlin", "Jetpack Compose", "Coroutines"] }
        ]
    },
    {
        title: "Cloud & DevOps",
        icon: Cloud,
        description: "Scalable infrastructure and automated pipelines.",
        technologies: [
            { name: "AWS", slug: "aws", subTechs: ["EC2", "Lambda", "S3", "CloudFront"] },
            { name: "Google Cloud", slug: "gcp", subTechs: ["Cloud Run", "BigQuery", "App Engine"] },
            { name: "Docker", slug: "docker", subTechs: ["Containerization", "Compose", "Registry"] },
            { name: "Kubernetes", slug: "kubernetes", subTechs: ["EKS", "GKE", "Helm Charts"] }
        ]
    }
];

export default function TechnologiesPage() {
    return (
        <main className="bg-white min-h-screen">
            {/* Hero */}
            <section className="pt-12 pb-12 px-6 border-b border-gray-50">
                <div className="max-w-7xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
                    >
                        Mastering Modern <span className="text-accent">Technologies</span>.
                    </motion.h1>
                    <p className="text-xl text-secondary max-w-3xl leading-relaxed">
                        We leverage a cutting-edge stack to build scalable, high-performance solutions. From frontend finesse to backend robustness, our expertise is deep and wide.
                    </p>
                </div>
            </section>

            {/* Categorized Tech List */}
            <section className="py-12 px-6">
                <div className="max-w-7xl mx-auto space-y-16">
                    {techCategories.map((category, catIdx) => (
                        <div key={category.title}>
                            {/* Category Header */}
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                                    <category.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold">{category.title}</h2>
                                    <p className="text-secondary mt-1">{category.description}</p>
                                </div>
                            </div>

                            {/* Tech Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {category.technologies.map((tech, techIdx) => (
                                    <Link
                                        href={`/technologies/${tech.slug}`}
                                        key={tech.name}
                                        className="group block p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
                                    >
                                        <div className="flex justify-between items-start mb-6">
                                            <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">{tech.name}</h3>
                                            <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-accent group-hover:-rotate-45 transition-all duration-300" />
                                        </div>

                                        <div className="flex flex-wrap gap-2">
                                            {tech.subTechs.map((sub, i) => (
                                                <span key={i} className="text-xs font-semibold px-2 py-1 bg-white border border-gray-200 rounded text-gray-500">
                                                    {sub}
                                                </span>
                                            ))}
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6 bg-[#161a23] text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">
                        Don't see your tech?
                    </h2>
                    <p className="text-xl text-gray-400 mb-12">
                        This is just a snapshot. We are constantly adopting new tools. Let's discuss your specific requirements.
                    </p>
                    <Link href="/contact" className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-black transition-all">
                        Contact Our Engineering Team
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </main>
    );
}
