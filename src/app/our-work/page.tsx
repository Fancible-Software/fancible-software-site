"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const OurWorkPage = () => {
    const caseStudies = [
        {
            client: "FinTech OS",
            title: "Revolutionizing Digital Banking",
            desc: "Built a high-performance dashboard that increased user engagement by 45%.",
            stat: "45% Engagement Boost",
            image: "/amy-hirschi-K0c8ko3e6AA-unsplash.jpg"
        },
        {
            client: "Logic Scale",
            title: "Enterprise Inventory Management",
            desc: "A custom SaaS solution that scaled to handle $2B in annual transactions.",
            stat: "$2B Transacted Yearly",
            image: "/annie-spratt-QckxruozjRg-unsplash.jpg"
        },
        {
            client: "Prisma Cloud",
            title: "Visual Data Exploration",
            desc: "Re-engineered the visual core for 3.5x faster data rendering.",
            stat: "3.5x Speed Increase",
            image: "/cytonn-photography-n95VMLxqM2I-unsplash.jpg"
        },
        {
            client: "Vanguard Apps",
            title: "Mobile Real Estate Platform",
            desc: "Native-feel cross-platform app delivered in 12 weeks for MVP launch.",
            stat: "12-Week MVP Delivery",
            image: "/daria-pimkina-Dj5HnHMtkH0-unsplash.jpg"
        },
        {
            client: "CodeBase",
            title: "Collaborative IDE Platform",
            desc: "Next-gen collaborative tools for remote engineering teams.",
            stat: "15k+ Monthly Active Users",
            image: "/sean-pollock-PhYq704ffdA-unsplash.jpg"
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="pt-32 pb-16 px-6 border-b border-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                        Our Work.
                    </h1>
                    <p className="text-xl text-secondary max-w-3xl leading-relaxed">
                        We partner with ambitious startups and enterprises to build digital products that drive real, measurable performance.
                    </p>
                </div>
            </section>

            {/* Work Grid */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    {caseStudies.map((study, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="group relative h-[600px] overflow-hidden rounded-xl cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500"
                        >
                            <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                                <Image
                                    src={study.image}
                                    alt={study.title}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500" />
                            </div>

                            {/* Overlay with Content */}
                            <div className="absolute inset-0 z-10 p-12 flex flex-col justify-end">
                                <div className="mb-4 text-white/70 font-bold uppercase tracking-widest text-xs" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>
                                    {study.client}
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 group-hover:-translate-y-2 transition-transform duration-500" style={{ textShadow: '0 4px 16px rgba(0,0,0,0.5)' }}>
                                    {study.title}
                                </h2>
                                <p className="text-white/80 max-w-md mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>
                                    {study.desc}
                                </p>
                                <div className="flex items-center justify-between border-t border-white/20 pt-8 mt-4">
                                    <span className="text-accent font-bold text-lg" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>{study.stat}</span>
                                    <span className="text-white font-semibold flex items-center gap-2 group-hover:translate-x-2 transition-transform" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>
                                        View Case Study
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M4.16663 10H15.8333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M10 4.16669L15.8333 10L10 15.8334" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default OurWorkPage;
