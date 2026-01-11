"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';

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
            <section className="pt-24 pb-12 px-6 border-b border-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                        Build the Future of SaaS.
                    </h1>
                    <p className="text-xl text-secondary max-w-3xl leading-relaxed">
                        We're a team of specialists obsessed with performance. We're looking for ambitious people to join us in building the next generation of digital products.
                    </p>
                </div>
            </section>

            {/* Jobs */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 uppercase tracking-widest text-gray-400">Open Roles</h2>
                    <div className="space-y-4">
                        {jobs.map((job, idx) => (
                            <div key={idx} className="group border-b border-gray-100 py-8 flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-gray-50/50 transition-colors px-4 -mx-4 cursor-pointer">
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
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Join */}
            <section className="py-16 px-6 bg-[#161a23] text-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
                    <div>
                        <h2 className="text-4xl font-bold mb-8">Why Fancible?</h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            We work with the most ambitious companies in the world. Our projects are challenging, high-impact, and rewarding.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div>
                            <h4 className="font-bold mb-2">Remote-First</h4>
                            <p className="text-sm text-gray-400">Work from anywhere in the world. We value outcomes over hours.</p>
                        </div>
                        <div>
                            <h4 className="font-bold mb-2">Fast-Paced</h4>
                            <p className="text-sm text-gray-400">We iterate quickly and scale fast. No bureaucracy, just results.</p>
                        </div>
                        <div>
                            <h4 className="font-bold mb-2">Modern Stack</h4>
                            <p className="text-sm text-gray-400">We use the latest tools and technologies to build high-performance apps.</p>
                        </div>
                        <div>
                            <h4 className="font-bold mb-2">Equity & Growth</h4>
                            <p className="text-sm text-gray-400">Every team member shares in our success with competitive compensation and equity.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CareersPage;
