"use client";

import React from 'react';
import { motion } from 'framer-motion';

const CompanyPage = () => {
    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="pt-24 pb-12 px-6 border-b border-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                        Built for Performance.<br />Driven by People.
                    </h1>
                    <p className="text-xl text-secondary max-w-3xl leading-relaxed">
                        Fancible Software started with a simple belief: that enterprise software should be as intuitive as a consumer app and as powerful as the teams that use it.
                    </p>
                </div>
            </section>

            {/* Mission */}
            <section className="py-16 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-8">Our Mission</h2>
                        <p className="text-lg text-secondary leading-relaxed mb-6">
                            We partner with ambitious SaaS startups and established enterprises to engineer digital products that don't just work—they excel.
                        </p>
                        <p className="text-lg text-secondary leading-relaxed">
                            Our team of specialists in product strategy, UX design, and deep-tech engineering focus on one outcome: high-performance growth.
                        </p>
                    </motion.div>
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { label: "Years Experience", value: "10+" },
                            { label: "Products Built", value: "50+" },
                            { label: "Scale Managed", value: "$2B+" },
                            { label: "Delivery Success", value: "100%" }
                        ].map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="bg-white p-8 rounded-sm shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-50"
                            >
                                <div className="text-4xl font-bold text-accent mb-2">{stat.value}</div>
                                <div className="text-sm font-semibold uppercase tracking-wider text-gray-500">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-16 px-6 border-b border-gray-50">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-6xl font-bold mb-12 text-center"
                    >
                        The Fancible Way
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { title: "Precision first.", desc: "We don't do 'good enough.' Every line of code and every pixel is optimized for performance and scalability." },
                            { title: "Human-centered tech.", desc: "Technology is the means, not the end. We build tools that empower people to do their best work." },
                            { title: "Relentless growth.", desc: "We iterate fast and scale faster. Our process is designed to find product-market fit and exploit it." }
                        ].map((value, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.2 }}
                            >
                                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                                <p className="text-secondary leading-relaxed">
                                    {value.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CompanyPage;
