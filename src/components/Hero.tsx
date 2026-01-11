"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
    return (
        <section className="relative pt-20 pb-16 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
                        The <span className="relative inline-block px-2">
                            Performance
                            <svg className="absolute -top-2 -left-4 -right-4 -bottom-2 w-[calc(100%+32px)] h-[calc(100%+16px)] pointer-events-none overflow-visible" viewBox="0 0 200 60" fill="none" preserveAspectRatio="none">
                                <motion.path
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                                    d="M10,30 C10,10 190,10 190,30 C190,50 10,50 10,30"
                                    stroke="#ea5b0c"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </span> <br />
                        Software Agency
                    </h1>

                    <p className="max-w-2xl mx-auto text-secondary text-lg md:text-xl mb-12 leading-relaxed">
                        From architecture to scale, we build high-performing digital products for ambitious SaaS startups and enterprise agencies.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="bg-accent text-white px-8 py-4 rounded-sm font-semibold hover:bg-black transition-colors flex items-center gap-2 group">
                            View Our Work
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="group-hover:translate-x-1 transition-transform">
                                <path d="M4.16663 10H15.8333" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10 4.16669L15.8333 10L10 15.8334" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button className="bg-transparent text-foreground border border-gray-200 px-8 py-4 rounded-sm font-semibold hover:bg-gray-50 transition-colors">
                            How We Help
                        </button>
                    </div>
                </motion.div>

                {/* Hero Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="mt-12 relative max-w-5xl mx-auto"
                >
                    <div className="relative rounded-xl overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-gray-100">
                        <Image
                            src="/hero_saas_dashboard.png"
                            alt="SaaS Dashboard Preview"
                            width={1280}
                            height={720}
                            className="w-full h-auto"
                        />
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-12 -left-12 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />
                    <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
                </motion.div>
            </div>

            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-br from-blue-50/50 to-transparent -z-10" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-gradient-to-tr from-accent/5 to-transparent -z-10" />
        </section>
    );
};

export default Hero;
