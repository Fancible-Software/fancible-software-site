"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const CompanyPage = () => {
    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="pt-12 pb-24 px-6 border-b border-gray-50 relative overflow-hidden bg-white">
                <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
                    <Image
                        src="/benjamin-child-GWe0dlVD9e0-unsplash.jpg"
                        alt="Workspace Perspective"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-8xl font-bold tracking-tight mb-8"
                        style={{ textShadow: '0 2px 12px rgba(0,0,0,0.12)' }}
                    >
                        Built for <span className="text-accent">Performance</span>.<br />Driven by <span className="text-accent">People</span>.
                    </motion.h1>
                    <p className="text-xl text-secondary max-w-3xl leading-relaxed" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
                        Fancible Software started with a simple belief: that enterprise software should be as intuitive as a consumer app and as powerful as the teams that use it.
                    </p>
                </div>
            </section>

            {/* Mission */}
            <section className="py-24 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-8">Our Mission</h2>
                        <p className="text-lg text-secondary leading-relaxed mb-6">
                            We partner with ambitious SaaS startups and established enterprises to engineer digital products that don't just work—they excel.
                        </p>
                        <p className="text-lg text-secondary leading-relaxed mb-12">
                            Our team of specialists in product strategy, UX design, and deep-tech engineering focus on one outcome: high-performance growth.
                        </p>

                        <div className="grid grid-cols-2 gap-8">
                            {[
                                { label: "Years Experience", value: "10+" },
                                { label: "Products Built", value: "50+" },
                                { label: "Scale Managed", value: "$2B+" },
                                { label: "Delivery Success", value: "100%" }
                            ].map((stat, idx) => (
                                <div key={idx} className="border-l border-accent/20 pl-6">
                                    <div className="text-4xl font-bold text-accent mb-1">{stat.value}</div>
                                    <div className="text-xs font-bold uppercase tracking-widest text-gray-400">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl"
                    >
                        <Image
                            src="/christina-wocintechchat-com-m-VpcgTEKerEQ-unsplash.jpg"
                            alt="Team Collaboration"
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 px-6 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 -z-10">
                    <Image
                        src="/smartworks-coworking-cW4lLTavU80-unsplash.jpg"
                        alt="Culture Background"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-6xl font-bold mb-20"
                    >
                        The Fancible Way.
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                        {[
                            { title: "Precision first.", desc: "We don't do 'good enough.' Every line of code and every pixel is optimized for performance and scalability." },
                            { title: "Human-centered tech.", desc: "Technology is the means, not the end. We build tools that empower people to do their best work." },
                            { title: "Relentless growth.", desc: "We iterate fast and scale faster. Our process is designed to find product-market fit and exploit it." }
                        ].map((value, idx) => (
                            <motion.div
                                key={`value-card-${idx}`}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.15 }}
                            >
                                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                                <p className="text-xl text-secondary leading-relaxed">
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
