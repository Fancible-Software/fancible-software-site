"use client";

import Image from 'next/image';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const CapabilityCard = dynamic(() => import('@/components/CapabilityCard'), { ssr: false, loading: () => <div className="h-40 bg-muted animate-pulse rounded" /> });

const CapabilitiesPage = () => {
    const pillars = [
        {
            title: "Product Strategy",
            tagline: "Bridging the gap between vision and market success.",
            desc: "Our strategic approach ensures your SaaS product isn't just built, but positioned for long-term growth and scalability.",
            subItems: ["MVP Roadmap & Prioritization", "Market & Competitive Analysis", "Monetization Strategy", "GTM Execution"],
            outcomes: ["Clear Product Direction", "Optimized Feature Set", "Lower Time-to-Market"],
            image: "/icons8-team-yTwXpLO5HAA-unsplash.jpg"
        },
        {
            title: "UX/UI Design",
            tagline: "Human-centered design for high-performance SaaS.",
            desc: "We design intuitive, scalable interfaces that reduce friction and drive user retention for complex web and mobile platforms.",
            subItems: ["SaaS Design Systems", "High-Fidelity Prototyping", "User Journey Mapping", "Usability Audit & Optimization"],
            outcomes: ["Unified Visual Language", "Increased User Engagement", "Reduced Support Needs"],
            image: "/kaitlyn-baker-vZJdYl5JVXY-unsplash.jpg"
        },
        {
            title: "Engineering",
            tagline: "Precision engineering for mission-critical apps.",
            desc: "From Next.js frontends to robust cloud-native backends, we build performant, secure, and scalable digital products.",
            subItems: ["Full-Stack Next.js Dev", "API-First Architecture", "Cloud Native (AWS/GCP)", "DevOps & CI/CD Pipelines"],
            outcomes: ["Scalable Infrastructure", "High Page Speed/Performance", "Clean, Maintainable Code"],
            image: "/sean-pollock-PhYq704ffdA-unsplash.jpg"
        },
        {
            title: "Digital Marketing",
            tagline: "High-performance growth for ambitious SMBs.",
            desc: "Expert performance marketing solutions designed to drive leads, increase conversions, and maximize your digital footprint.",
            subItems: ["Search Engine Marketing (SEM)", "Targeted Paid Social Ads", "Data-Driven Content Strategy", "Lead Gen & Email Automation"],
            outcomes: ["Consistent Lead Pipeline", "Positive ROI/Ad Spend", "Increased Brand Authority"],
            image: "/austin-distel-_S7-KX8geL0-unsplash.jpg"
        },
        {
            title: "Growth & Scale",
            tagline: "Sustaining momentum through data-driven insight.",
            desc: "We provide the analytics and performance optimization needed to ensure your application continues to deliver results as you scale.",
            subItems: ["Data & Analytics Setup", "Conversion Rate Optimization", "Retention Monitoring", "Periodic Performance Audits"],
            outcomes: ["Data-Informed Decision Making", "Increased CLV", "Optimized Scaling Costs"],
            image: "/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg"
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="pt-12 pb-12 px-6 border-b border-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                        Capabilities.
                    </h1>
                    <p className="text-xl text-secondary max-w-3xl leading-relaxed">
                        We offer an integrated delivery model that combines strategy, design, and engineering to solve the toughest challenges in SaaS and mobile app development.
                    </p>
                </div>
            </section>

            {/* Pillars Grid */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                    <CapabilityCard
                        title={pillars[0].title}
                        tagline={pillars[0].tagline}
                        desc={pillars[0].desc}
                        subItems={pillars[0].subItems}
                        outcomes={pillars[0].outcomes}
                        image={pillars[0].image}
                        delay={0}
                    />
                    <CapabilityCard
                        title={pillars[1].title}
                        tagline={pillars[1].tagline}
                        desc={pillars[1].desc}
                        subItems={pillars[1].subItems}
                        outcomes={pillars[1].outcomes}
                        image={pillars[1].image}
                        delay={0.08}
                    />
                    <CapabilityCard
                        title={pillars[2].title}
                        tagline={pillars[2].tagline}
                        desc={pillars[2].desc}
                        subItems={pillars[2].subItems}
                        outcomes={pillars[2].outcomes}
                        image={pillars[2].image}
                        delay={0.16}
                    />
                    <CapabilityCard
                        title={pillars[3].title}
                        tagline={pillars[3].tagline}
                        desc={pillars[3].desc}
                        subItems={pillars[3].subItems}
                        outcomes={pillars[3].outcomes}
                        image={pillars[3].image}
                        delay={0.24}
                    />
                    <CapabilityCard
                        title={pillars[4].title}
                        tagline={pillars[4].tagline}
                        desc={pillars[4].desc}
                        subItems={pillars[4].subItems}
                        outcomes={pillars[4].outcomes}
                        image={pillars[4].image}
                        delay={0.32}
                    />
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6 bg-[#161a23] text-white">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-7xl mx-auto text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-12 leading-tight">
                        Ready to build something <br /> high-performing?
                    </h2>
                    <button className="bg-accent text-white px-10 py-5 rounded-sm font-bold text-lg hover:bg-black transition-all group inline-flex items-center gap-3 shadow-lg hover:shadow-accent/20">
                        Start Your Project
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="group-hover:translate-x-2 transition-transform">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </motion.div>
            </section>
        </div>
    );
};

export default CapabilitiesPage;
