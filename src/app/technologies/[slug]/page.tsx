import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle, Zap, Code, Database, Smartphone, Cloud, Server, Shield, Globe, Cpu, Terminal, Layers, Box } from 'lucide-react';

// Enhanced Data Map covering ALL technologies in the list
const techDetails: Record<string, any> = {
    // --- Frontend ---
    react: {
        name: "React Development",
        description: "We build blazing-fast Single Page Applications (SPAs) and dynamic user interfaces used by the world's top companies. From complex dashboards to consumer-facing apps, React is our bread and butter.",
        features: [
            { title: "SPA Development", desc: "Seamless, app-like web experiences that load instantly and perform smoothly." },
            { title: "Next.js Integration", desc: "Leveraging Server-Side Rendering (SSR) for perfect SEO and initial load performance." },
            { title: "State Management", desc: "Robust architectures using Redux Toolkit, Zustand, or TanStack Query." },
            { title: "Component Systems", desc: "Scalable UI kits (Storybook) that ensure consistency across your product." }
        ],
        whyUs: [
            { title: "React Core Team", desc: "Our leads contribute to the open-source React ecosystem." },
            { title: "Performance First", desc: "We obsess over Core Web Vitals and render cycles." },
            { title: "Modern Hooks", desc: "Clean, functional code using the latest React patterns." }
        ]
    },
    vue: {
        name: "Vue.js Development",
        description: "The progressive JavaScript framework for building user interfaces. We love Vue for its simplicity, performance, and flexibility, making it ideal for rapid prototyping and scalable apps alike.",
        features: [
            { title: "Nuxt.js Solutions", desc: "Universal Vue applications with server-side rendering and static site generation." },
            { title: "Composition API", desc: "Scalable logic reuse and cleaner code organization for large enterprise apps." },
            { title: "Pinia State Store", desc: "Type-safe, modular state management that just works." },
            { title: "Migration Services", desc: "Seamless upgrading from Vue 2 to Vue 3 with zero downtime." }
        ],
        whyUs: [
            { title: "Ecosystem Experts", desc: "Deep mastery of the Vue ecosystem (Router, Pinia, Vite)." },
            { title: "Performance", desc: "Tiny bundle sizes and optimized reactivity system." },
            { title: "Developer Experience", desc: "We build codebases that your team will love to maintain." }
        ]
    },
    angular: {
        name: "Angular Engineering",
        description: "Google's robust platform for building web applications. Angular is our choice for large-scale, enterprise-ready applications where structure, strict typing, and stability are paramount.",
        features: [
            { title: "Enterprise Architecture", desc: "Modular micro-frontends and strict architectural patterns." },
            { title: "RxJS Reactive Programming", desc: "Managing complex asynchronous data streams effectively." },
            { title: "NgRx State Management", desc: "Predictable state containers for complex transactional apps." },
            { title: "Angular Universal", desc: "Server-side rendering for improved performance and SEO." }
        ],
        whyUs: [
            { title: "Strict Compliance", desc: "Built for industries requiring high security and stability." },
            { title: "Full-Stack Teams", desc: "Engineers fluent in both Angular and backend logic." },
            { title: "Long-Term Support", desc: "Maintenance strategies for applications built to last a decade." }
        ]
    },
    typescript: {
        name: "TypeScript Ecosystem",
        description: "Type-safe scalability. We enforce strict TypeScript across all our JavaScript projects to eliminate bugs at compile time and enable massive code refactoring with confidence.",
        features: [
            { title: "Strict Typing", desc: "Preventing null pointer exceptions and type mismatches." },
            { title: "Shared Schemas", desc: "Sharing Zod types between Backend and Frontend for end-to-end safety." },
            { title: "Tooling efficiency", desc: "Superior IDE support, auto-completion, and safe refactoring." },
            { title: "Maintainability", desc: "Self-documenting code that is easy for new developers to onboard." }
        ],
        whyUs: [
            { title: "Zero 'any'", desc: "Strict configuration prohibiting 'any' types." },
            { title: "Advanced Patterns", desc: "Expert usage of Generics, Utility Types, and Decorators." },
            { title: "Migration Paths", desc: "Moving massive JS codebases to TS incrementally." }
        ]
    },

    // --- Backend ---
    nodejs: {
        name: "Node.js Development",
        description: "High-concurrency, event-driven backends that power real-time applications. Node.js allows us to build scalable network applications that can handle millions of connections.",
        features: [
            { title: "Microservices", desc: "Decoupled architecture using NestJS or Express for infinite scalability." },
            { title: "Real-Time APIs", desc: "WebSockets and Socket.io integration for instant data syncing." },
            { title: "Serverless Functions", desc: "Deploying lightweight functions on AWS Lambda for cost efficiency." },
            { title: "GraphQL Integration", desc: "Efficient data fetching to reduce network overhead." }
        ],
        whyUs: [
            { title: "High Throughput", desc: "Systems designed to handle 50k+ requests per second." },
            { title: "Full-Stack JS", desc: "Unified codebase sharing types between Front and Back." },
            { title: "Security", desc: "Enterprise-grade auth and data protection practices." }
        ]
    },
    python: {
        name: "Python Engineering",
        description: "The language of AI and Data Science. We use Python to build powerful backends with Django/FastAPI and integrate machine learning models directly into your product.",
        features: [
            { title: "AI/ML Integration", desc: "Embedding PyTorch/TensorFlow models for predictive analytics and NLP." },
            { title: "High-Performance APIs", desc: "Using FastAPI for asynchronous, high-speed REST endpoints." },
            { title: "Data Pipelines", desc: "Automated ETL workflows with Celery and Airflow." },
            { title: "Django Enterprise", desc: "Rapid development of secure, admin-rich business applications." }
        ],
        whyUs: [
            { title: "Data DNA", desc: "Deep experience bridging software engineering and data science." },
            { title: "Clean Code", desc: "Strict PEP-8 adherence and type hinting for maintainability." },
            { title: "Scalable Logic", desc: "Optimized algorithms for computationally heavy tasks." }
        ]
    },
    golang: {
        name: "Golang Development",
        description: "Simplicity and concurrency. We choose Go for high-performance microservices, networking tools, and systems where raw throughput and low latency are non-negotiable.",
        features: [
            { title: "Concurrency", desc: "Goroutines allow handling thousands of concurrent processes efficiently." },
            { title: "Microservices", desc: "Small, compiled binaries that deploy instantly and start fast." },
            { title: "gRPC", desc: "High-performance inter-service communication with Protocol Buffers." },
            { title: "Cloud Native", desc: "The language of Kubernetes and Docker, perfect for infrastructure tools." }
        ],
        whyUs: [
            { title: "System Scale", desc: "Experience building systems handling TBs of data." },
            { title: "Clean Architecture", desc: "Pragmatic design focused on simplicity and readability." },
            { title: "Performance", desc: "Optimization closer to C++ with the ease of Python." }
        ]
    },
    java: {
        name: "Java Engineering",
        description: "The backbone of enterprise software. We build mission-critical, high-availability systems using the reliable Java ecosystem, ensuring stability for large-scale operations.",
        features: [
            { title: "Spring Boot", desc: "Rapid development of production-ready microservices." },
            { title: "Legacy Modernization", desc: "Refactoring monoliths into modular, cloud-ready architectures." },
            { title: "Hibernate / JPA", desc: "Efficient, secure object-relational mapping for complex data models." },
            { title: "Multi-threading", desc: "Expert handling of concurrent processing for high-load systems." }
        ],
        whyUs: [
            { title: "Enterprise Grade", desc: "Decades of combined experience in banking and telecom systems." },
            { title: "Stability", desc: "Code written to run uninterrupted for years." },
            { title: "Security", desc: "Rigorous adherence to OWASP and industry security standards." }
        ]
    },

    // --- Mobile ---
    "react-native": {
        name: "React Native Mobile",
        description: "Write once, run everywhere. We build native iOS and Android apps with a single codebase, delivering 60fps performance without the cost of two separate teams.",
        features: [
            { title: "Cross-Platform", desc: "95% code sharing between iOS and Android." },
            { title: "Native Modules", desc: "Bridging to native Swift/Kotlin when raw metal performance is needed." },
            { title: "OTA Updates", desc: "Pushing bug fixes instantly via CodePush without App Store review." },
            { title: "Offline First", desc: "Robust data sync and local storage for patchy networks." }
        ],
        whyUs: [
            { title: "Native Feel", desc: "We polish animations to be indistinguishable from native." },
            { title: "Fast to Market", desc: "Launch on both stores in half the time." },
            { title: "Web Integration", desc: "Sharing logic between your web and mobile apps." }
        ]
    },
    flutter: {
        name: "Flutter Development",
        description: "Beautiful, natively compiled applications from a single codebase. Flutter allows us to paint pixels on the screen with total control, creating stunning custom UIs.",
        features: [
            { title: "Custom Rendering", desc: "Skia graphics engine for pixel-perfect designs on any screen." },
            { title: "Performance", desc: "Compiled to native ARM machine code for blazing speed." },
            { title: "Multi-Platform", desc: "Target Mobile, Web, and Desktop from one project." },
            { title: "Hot Reload", desc: "Instant feedback loop for rapid UI iteration." }
        ],
        whyUs: [
            { title: "UI Excellence", desc: "Award-winning material designs and custom animations." },
            { title: "Dart Experts", desc: "Optimized efficient code for battery and memory." },
            { title: "Stable Builds", desc: "Robust visual regression testing pipelines." }
        ]
    },
    ios: {
        name: "iOS Development",
        description: "Premium native experiences for the Apple ecosystem. We use Swift and SwiftUI to build apps that feel perfectly at home on iPhone, iPad, and Watch.",
        features: [
            { title: "SwiftUI", desc: "Modern, declarative UI building for rapid, beautiful interfaces." },
            { title: "Core ML", desc: "On-device machine learning for privacy-preserving smart features." },
            { title: "App Clips", desc: "Instant, lightweight app experiences without full installation." },
            { title: "ARKit", desc: "Immersive augmented reality experiences." }
        ],
        whyUs: [
            { title: "Human Interface", desc: "Strict adherence to Apple's design guidelines for acceptance." },
            { title: "Ecosystem", desc: "Deep integration with Siri, Shortcuts, and Widgets." },
            { title: "Performance", desc: "Metal optimization for graphics-intensive tasks." }
        ]
    },
    android: {
        name: "Android Development",
        description: "Reaching the widest global audience. We build robust native Android apps using Kotlin that perform beautifully across the fragmented device landscape.",
        features: [
            { title: "Jetpack Compose", desc: "Modern, native UI toolkit for faster, easier UI development." },
            { title: "Material You", desc: "Adaptive designs that blend seamlessly with the user's OS theme." },
            { title: "Coroutines", desc: "Efficient background processing for smooth UI responsiveness." },
            { title: "Google Play", desc: "Optimization for ASO and diverse form factors (Foldables, Tablets)." }
        ],
        whyUs: [
            { title: "Device Lab", desc: "Testing on hundreds of physical devices to ensure compatibility." },
            { title: "Modern Kotlin", desc: "Using the latest language features for safe, concise code." },
            { title: "Battery Life", desc: "Optimizing background jobs to respect user resources." }
        ]
    },

    // --- Cloud & DevOps ---
    aws: {
        name: "AWS Cloud Solutions",
        description: "Architecting infinite scale. We are an AWS Advanced Partner, helping you migrate, optimize, and build cloud-native infrastructure that is secure, resilient, and cost-effective.",
        features: [
            { title: "Serverless Architecture", desc: "Lambda, API Gateway, and DynamoDB for zero-maintenance apps." },
            { title: "Container Orchestration", desc: "Managing microservices with Amazon EKS (Kubernetes) and ECS." },
            { title: "DevOps Automation", desc: "CI/CD pipelines using CodePipeline and Infrastructure as Code." },
            { title: "FinOps", desc: "Cost optimization strategies to reduce cloud spend." }
        ],
        whyUs: [
            { title: "Certified", desc: "100% of our cloud engineers are AWS certified." },
            { title: "Well-Architected", desc: "Compliance reviews against the 6 pillars of excellence." },
            { title: "Deep Security", desc: "IAM, VPC encryption, and WAF configuration standard." }
        ]
    },
    gcp: {
        name: "Google Cloud Platform",
        description: "Innovate with the power of Google. We specialize in GCP for data-intensive applications, leveraging its superior AI/ML capabilities and Kubernetes roots.",
        features: [
            { title: "GKE Experts", desc: "Best-in-class Kubernetes management on its home platform." },
            { title: "BigQuery Data Warehousing", desc: "Serverless, highly scalable, and cost-effective data analytics." },
            { title: "Vertex AI", desc: "Building, deploying, and scaling ML models faster." },
            { title: "Cloud Run", desc: "Running stateless containers without worrying about infrastructure." }
        ],
        whyUs: [
            { title: "Data Focus", desc: "Ideally suited for analytics and ML-heavy startups." },
            { title: "Global Scale", desc: "Leveraging Google's private fiber network for low latency." },
            { title: "Simplicity", desc: "Developer-friendly tooling and IAM management." }
        ]
    },
    docker: {
        name: "Docker Solutions",
        description: "Build once, run anywhere. We containerize your applications to eliminate 'it works on my machine' issues and streamline your deployment pipeline.",
        features: [
            { title: "Containerization", desc: "Packaging apps with all dependencies for consistent environments." },
            { title: "Docker Compose", desc: "Simplifying local development of multi-container applications." },
            { title: "Image Optimization", desc: "Creating multi-stage builds for tiny, secure production images." },
            { title: "Registry Management", desc: "Secure pipelines for scanning and storing container images." }
        ],
        whyUs: [
            { title: "Standardization", desc: "Unifying dev, test, and prod environments." },
            { title: "Security", desc: "Minimizing attack surfaces with distroless images." },
            { title: "Speed", desc: "Instant onboarding for new developers." }
        ]
    },
    kubernetes: {
        name: "Kubernetes Ops",
        description: "The operating system of the cloud. We tame the complexity of K8s to give you self-healing, auto-scaling, and resilient infrastructure.",
        features: [
            { title: "Cluster Management", desc: "Setup, upgrades, and maintenance of EKS, GKE, or bare metal." },
            { title: "Helm Charts", desc: "Packaging complex applications for repeatable deployments." },
            { title: "GitOps (ArgoCD)", desc: "Automated synchronization of cluster state from Git repositories." },
            { title: "Service Mesh", desc: "Istio/Linkerd for advanced traffic management and observability." }
        ],
        whyUs: [
            { title: "Production Grade", desc: "Running critical workloads with zero downtime strategies." },
            { title: "Observability", desc: "Prometheus/Grafana stacks integrated by default." },
            { title: "Cost Control", desc: "Auto-scaling rules (HPA/VPA) to pay only for what you use." }
        ]
    }
};

const defaultTech = (slug: string) => ({
    name: slug.charAt(0).toUpperCase() + slug.slice(1).replace('-', ' ') + " Services",
    description: `Expert ${slug} development for modern enterprises. We provide end-to-end solutions, from architecture to deployment, ensuring your specific business needs are met with precision code.`,
    features: [
        { title: "Custom Development", desc: "Tailored solutions built from scratch to meet your exact business needs." },
        { title: "Integration", desc: "Seamlessly connecting with your existing stack and third-party tools." },
        { title: "Audit & Optimization", desc: "Deep code audits to improve performance, security, and scalability." },
        { title: "Consulting", desc: "Strategic advice on architecture, tooling, and best practices." }
    ],
    whyUs: [
        { title: "Deep Expertise", desc: `Years of hands-on experience in ${slug} and its ecosystem.` },
        { title: "Business Alignment", desc: "We build what drives value for your company." },
        { title: "Agile Process", desc: "Flexible delivery adapting to your changing needs." }
    ]
});

export default async function TechnologyPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    // Normalize slug to match keys
    const key = slug.toLowerCase();
    const data = techDetails[key] ? techDetails[key] : defaultTech(slug);

    return (
        <main className="bg-white min-h-screen">
            {/* Hero */}
            <section className="pt-8 pb-12 px-6 border-b border-gray-50 relative overflow-hidden bg-white">
                <div className="max-w-7xl mx-auto">
                    {/* Nav Back */}
                    <div className="mb-8 p-1">
                        <Link href="/technologies" className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-accent transition-colors bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200">
                            <ArrowLeft className="w-4 h-4" />
                            All Technologies
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative z-10">
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
                                {data.name} <span className="text-accent block">Experts.</span>
                            </h1>
                            <p className="text-xl text-secondary mb-10 leading-relaxed max-w-lg">
                                {data.description}
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/contact" className="bg-black text-white px-8 py-4 rounded-lg font-bold hover:bg-accent transition-all shadow-lg hover:shadow-accent/20 flex items-center gap-2 group">
                                    Hire {data.name.split(' ')[0]} Team
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link href="#services" className="px-8 py-4 rounded-lg font-bold border border-gray-200 hover:border-black transition-colors">
                                    Explore Services
                                </Link>
                            </div>
                        </div>

                        {/* Abstract Tech Visual */}
                        <div className="relative h-[400px] lg:h-[500px] w-full bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 flex items-center justify-center">
                            <div className="absolute inset-0 bg-dotted-pattern opacity-10" />
                            <div className="w-40 h-40 bg-accent/10 rounded-full flex items-center justify-center blur-3xl absolute top-1/4 left-1/4 animate-pulse" />
                            <div className="w-60 h-60 bg-blue-500/10 rounded-full flex items-center justify-center blur-3xl absolute bottom-1/4 right-1/4 animate-pulse" style={{ animationDelay: '1s' }} />

                            <div className="relative z-10 text-center">
                                <div className="text-9xl font-black text-gray-100 uppercase tracking-tighter select-none">
                                    {slug.slice(0, 3)}
                                </div>
                                <div className="text-sm font-mono text-gray-400 mt-4 tracking-widest uppercase">
                                    High Performance Architecture
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Specialized Services */}
            <section id="services" className="py-16 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-2xl mx-auto mb-20">
                        <h2 className="text-4xl font-bold mb-6">Specialized Capabilities</h2>
                        <p className="text-xl text-secondary">
                            We go beyond basic implementation. Our services cover the entire lifecycle of {data.name} development.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {data.features.map((feature: any, i: number) => (
                            <div key={i} className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                                <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                                    <Zap className="w-7 h-7 text-gray-900 group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                                <p className="text-secondary text-lg leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-16 px-6 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-20">
                        <div className="md:w-1/3">
                            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                                How We <br /><span className="text-accent">Deliver.</span>
                            </h2>
                            <p className="text-lg text-secondary leading-relaxed">
                                Transparent, agile, and results-driven. We follow a proven framework to deliver high-quality software on time, every time.
                            </p>
                            <div className="mt-12">
                                <Link href="/contact" className="text-lg font-bold border-b-2 border-black hover:border-accent hover:text-accent transition-colors pb-1 inline-flex items-center gap-2">
                                    Book a Consultation
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
                            {[
                                { title: "Discovery & Roadmap", desc: "We analyze your requirements, audit existing systems, and define a clear technical roadmap." },
                                { title: "Architecture Design", desc: "Designing scalable, secure, and cost-effective system architecture optimized for your goals." },
                                { title: "Agile Development", desc: "Bi-weekly sprints with regular deliverables, demos, and transparent communication." },
                                { title: "QA & Deployment", desc: " rigorous automated testing followed by zero-downtime deployment pipelines." }
                            ].map((step, i) => (
                                <div key={i} className="relative pl-8 border-l-2 border-gray-100">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-gray-200" />
                                    <div className="text-sm font-bold text-accent uppercase tracking-widest mb-2">Step 0{i + 1}</div>
                                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                    <p className="text-secondary">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Us / Benefits */}
            <section className="py-16 px-6 bg-[#161a23] text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            Why Top Companies <br />Choose Us for {slug}.
                        </h2>
                        <p className="text-xl text-gray-400 leading-relaxed">
                            We don't just write code; we solve business problems. Our engineering culture is built on excellence, ownership, and impact.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Dynamic Why Us content */}
                        {(data.whyUs || [
                            { title: "Top 1% Talent", desc: "Senior engineers with deep expertise in the specific stack." },
                            { title: "Rapid Delivery", desc: "Accelerated development cycles without compromising quality." },
                            { title: "Business Focus", desc: "We build solutions that drive measurable business growth." }
                        ]).map((benefit: any, i: number) => (
                            <div key={i} className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent text-white mb-6 shadow-lg shadow-accent/20">
                                    <CheckCircle className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
