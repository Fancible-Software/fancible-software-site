"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

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
            <section className="pt-24 pb-12 px-6 border-b border-gray-50">
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
                    {pillars.map((pillar, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.08 }}
                            className="group p-8 rounded-2xl border border-gray-50 shadow-sm hover:shadow-xl transition-all duration-300 bg-white overflow-hidden relative"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-30 transition-opacity">
                                <Image
                                    src={pillar.image}
                                    alt={pillar.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-1 bg-accent" />
                                <h2 className="text-3xl font-bold tracking-tight">{pillar.title}</h2>
                            </div>
                            <p className="text-xl font-medium mb-6 leading-snug">
                                {pillar.tagline}
                            </p>
                            <p className="text-secondary leading-relaxed mb-12">
                                {pillar.desc}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-12 border-t border-gray-100">
                                <div>
                                    <h4 className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-6">Expertise</h4>
                                    <ul className="space-y-4">
                                        {pillar.subItems.map((item, i) => (
                                            <li key={i} className="text-[15px] font-semibold flex items-center gap-2">
                                                <span className="w-1 h-1 bg-black rounded-full" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-6">Typical Outcomes</h4>
                                    <ul className="space-y-4">
                                        {pillar.outcomes.map((item, i) => (
                                            <li key={i} className="text-[15px] text-secondary flex items-center gap-2">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="#ea5b0c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
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
