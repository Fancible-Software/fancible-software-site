"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const CareersPage = () => {
    const jobs = [
        { title: "Senior Product Designer", location: "Global / Remote", team: "Design" },
        { title: "Full-Stack Engineer (Next.js)", location: "Global / Remote", team: "Engineering" },
        { title: "Product Strategist", location: "London / Hybrid", team: "Strategy" },
        { title: "Growth Marketing Manager", location: "Global / Remote", team: "Growth" },
    ];

    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="pt-12 pb-12 px-6 border-b border-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                        Build the Future of <span className="text-accent">SaaS</span>.
                    </h1>
                    <p className="text-xl text-secondary max-w-3xl leading-relaxed">
                        We're a team of specialists obsessed with performance. We're looking for ambitious people to join us in building the next generation of digital products.
                    </p>
                </div>
            </section>

            {/* Jobs */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl font-bold mb-12 uppercase tracking-widest text-gray-400"
                    >
                        Open Roles
                    </motion.h2>
                    <div className="space-y-4">
                        {jobs.map((job, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="group border-b border-gray-100 py-8 flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-gray-50/50 transition-all duration-300 px-4 -mx-4 cursor-pointer rounded-lg hover:shadow-sm"
                            >
                                <div>
                                    <h3 className="text-2xl font-bold group-hover:text-accent transition-colors mb-2">{job.title}</h3>
                                    <div className="flex gap-4 text-secondary text-sm">
                                        <span>{job.team}</span>
                                        <span>•</span>
                                        <span>{job.location}</span>
                                    </div>
                                </div>
                                <div className="mt-6 md:mt-0 flex items-center gap-2 font-semibold">
                                    Apply Now
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Join */}
            <section className="py-16 px-6 bg-[#161a23] text-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl font-bold mb-8">Why Fancible?</h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            We work with the most ambitious companies in the world. Our projects are challenging, high-impact, and rewarding.
                        </p>
                    </motion.div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {[
                            { title: "Remote-First", desc: "Work from anywhere in the world. We value outcomes over hours." },
                            { title: "Fast-Paced", desc: "We iterate quickly and scale fast. No bureaucracy, just results." },
                            { title: "Modern Stack", desc: "We use the latest tools and technologies to build high-performance apps." },
                            { title: "Equity & Growth", desc: "Every team member shares in our success with competitive compensation and equity." }
                        ].map((benefit, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                            >
                                <h4 className="font-bold mb-2">{benefit.title}</h4>
                                <p className="text-sm text-gray-400">{benefit.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CareersPage;
