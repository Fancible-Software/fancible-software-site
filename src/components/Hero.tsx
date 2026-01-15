"use client";

import React from 'react';

import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative pt-20 pb-16 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10 text-center">
                <div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.1]"
                        style={{ textShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
                    >
                        The <span className="relative inline-block px-2">
                            Performance
                            <svg className="absolute -top-3 -left-6 -right-6 -bottom-3 w-[calc(100%+48px)] h-[calc(100%+24px)] pointer-events-none overflow-visible" viewBox="0 0 431 120" fill="none" preserveAspectRatio="none">
                                <path
                                    className="animate-draw-path"
                                    d="M196.923 120C177.884 120 158.118 119.46 137.764 118.37C59.8733 114.208 13.0307 102.725 2.29237 85.17C-2.0806 78.0135 -0.173568 70.0033 7.81163 62.0028C27.2933 42.4846 80.2813 23.8452 149.55 12.1417C228.191 -1.14535 317.087 -3.61924 399.857 5.17489C401.273 5.32588 402.256 6.30537 402.054 7.3623C401.852 8.42115 400.559 9.16836 399.13 9.00769C215.931 -10.4602 47.4504 28.764 11.9595 64.3199C5.07658 71.2132 3.4102 77.6863 7.00173 83.5594C12.6504 92.8007 37.2037 109.115 138.131 114.51C297.372 123.022 394.361 96.5561 419.833 66.5519C426.758 58.3985 427.736 50.5064 422.662 43.7293C413.747 31.8167 387.09 24.937 351.367 25.388H351.325C349.915 25.388 348.761 24.5421 348.738 23.4833C348.714 22.4147 349.856 21.534 351.284 21.5165C389.484 21.0655 417.171 28.4698 427.177 41.8362C433.152 49.8173 432.096 59.3315 424.204 68.627C410.534 84.7306 378.841 98.6544 334.969 107.828C296.42 115.89 249.435 120 196.923 120Z"
                                    fill="#ea5b0c"
                                    fillOpacity="1"
                                />
                            </svg>
                        </span> <br />
                        Software Agency
                    </motion.h1>

                    <p className="max-w-2xl mx-auto text-secondary text-lg md:text-xl mb-12 leading-relaxed" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
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
                </div>

                {/* Hero Visual */}
                <div className="mt-12 relative max-w-5xl mx-auto animate-fade-in-scale">
                    <div className="relative rounded-xl overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] border border-gray-100">
                        <Image
                            src="/annie-spratt-QckxruozjRg-unsplash.jpg"
                            alt="Engineers"
                            width={1280}
                            height={720}
                            className="w-full h-auto object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-12 -left-12 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />
                    <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
                </div>
            </div>

            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-br from-blue-50/50 to-transparent -z-10" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-gradient-to-tr from-accent/5 to-transparent -z-10" />
        </section>
    );
};

export default Hero;
