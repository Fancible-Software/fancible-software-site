"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Activity, ShoppingBag, CreditCard, Box, Zap, MonitorPlay, Plane } from 'lucide-react';

const industries = [
    {
        id: 'finance',
        label: 'Finance',
        icon: CreditCard,
        title: 'Finance Hub',
        desc: 'We build secure, high-frequency trading platforms and banking solutions that process millions in transactions with zero downtime. Our fintech expertise ensures compliance and performance.',
        services: ['Banking Platforms', 'Trading Algorithms', 'Secure Payment Gateways', 'Blockchain Integration'],
        image: '/austin-distel-_S7-KX8geL0-unsplash.jpg'
    },
    {
        id: 'healthcare',
        label: 'Healthcare',
        icon: Activity,
        title: 'HealthTech Solutions',
        desc: 'Empowering medical providers with HIPAA-compliant telemedicine apps and patient management systems. We bridge the gap between patient care and digital efficiency.',
        services: ['Telemedicine Apps', 'EHR/EMR Integration', 'Medical IoT', 'Patient Portals'],
        image: '/kaitlyn-baker-vZJdYl5JVXY-unsplash.jpg'
    },
    {
        id: 'ecommerce',
        label: 'eCommerce',
        icon: ShoppingBag,
        title: 'Global Commerce',
        desc: 'Scalable headless commerce solutions designed for high-volume retail. We create seamless shopping experiences that drive conversion and retention.',
        services: ['Headless Commerce', 'Custom Checkout Flows', 'Inventory Management', 'Loyalty Systems'],
        image: '/amy-hirschi-K0c8ko3e6AA-unsplash.jpg'
    },
    {
        id: 'logistics',
        label: 'Logistics',
        icon: Box,
        title: 'Smart Logistics',
        desc: 'Optimizing supply chains with real-time tracking and AI-driven route planning. We help logistics companies reduce costs and improve delivery times.',
        services: ['Fleet Management', 'Route Optimization', 'Warehouse Automation', 'Last-Mile Delivery'],
        image: '/cytonn-photography-n95VMLxqM2I-unsplash.jpg'
    },
];

const IndustriesSection = () => {
    const [activeTab, setActiveTab] = useState(industries[0]);

    return (
        <section className="py-24 px-6 bg-white border-t border-gray-50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                        Industries We Serve.
                    </h2>
                    <p className="text-xl text-secondary max-w-2xl">
                        Deep domain expertise across key sectors. We don't just write code; we understand your business challenges.
                    </p>
                </motion.div>

                {/* Tabs */}
                <div className="flex flex-wrap gap-4 mb-12 border-b border-gray-100 pb-4">
                    {industries.map((ind) => (
                        <button
                            key={ind.id}
                            onClick={() => setActiveTab(ind)}
                            className={`px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 border ${activeTab.id === ind.id
                                    ? 'bg-black text-white border-black'
                                    : 'bg-white text-gray-400 border-gray-200 hover:border-gray-400 hover:text-gray-600'
                                }`}
                        >
                            {ind.label}
                        </button>
                    ))}
                </div>

                {/* Content Hub */}
                <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 min-h-[500px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center h-full"
                        >
                            {/* Left Content */}
                            <div className="flex flex-col h-full justify-center">
                                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-8">
                                    <activeTab.icon className="w-6 h-6 text-accent" />
                                </div>
                                <h3 className="text-3xl md:text-5xl font-bold mb-6">{activeTab.title}</h3>
                                <p className="text-lg text-secondary leading-relaxed mb-10">
                                    {activeTab.desc}
                                </p>
                                <ul className="space-y-4">
                                    {activeTab.services.map((service, idx) => (
                                        <li key={idx} className="flex items-center gap-3 font-medium">
                                            <div className="w-6 h-px bg-accent" />
                                            {service}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-10">
                                    <a href="#" className="inline-flex items-center gap-2 font-bold text-accent hover:gap-4 transition-all">
                                        Explore {activeTab.label} Solutions
                                        <ArrowRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>

                            {/* Right Image */}
                            <div className="relative h-[400px] lg:h-full w-full rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src={activeTab.image}
                                    alt={activeTab.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default IndustriesSection;
