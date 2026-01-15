"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { motion } from 'framer-motion';

const SelectedCaseStudyCard = dynamic(() => import('@/components/SelectedCaseStudyCard'), {
    ssr: false,
    loading: () => <div className="h-60 bg-muted animate-pulse rounded" />,
});

const OurWorkPage = () => {
    const caseStudies = [
        {
            client: "Tiebreaker AI",
            title: "AI-Native Compliance Automation Platform",
            desc: "Built an intelligent compliance platform that automates audit preparation and streamlines policy management across multiple frameworks.",
            stat: "5x Faster Audit Prep",
            image: "/amy-hirschi-K0c8ko3e6AA-unsplash.jpg",
            link: "https://www.tiebreaker-ai.com/"
        },
        {
            client: "Marswell Foods",
            title: "E-Commerce Platform for Bakery Ingredients",
            desc: "Built a comprehensive digital platform enabling seamless ordering and catalog management for 50+ specialized bakery products and ingredients.",
            stat: "50+ Products Cataloged",
            image: "/annie-spratt-QckxruozjRg-unsplash.jpg",
            link: "https://www.marswellfoods.com/"
        },
        {
            client: "Simsan Fraser Maintenance",
            title: "Landing Website & Custom Billing Software",
            desc: "Delivered a professional landing website showcasing their maintenance services and a customized billing solution to streamline operations across Lower Mainland.",
            stat: "4 Core Services Featured",
            image: "/cytonn-photography-n95VMLxqM2I-unsplash.jpg",
            link: "http://www.simsanfrasermain.com/"
        }
        // {
        //     client: "Vanguard Apps",
        //     title: "Mobile Real Estate Platform",
        //     desc: "Native-feel cross-platform app delivered in 12 weeks for MVP launch.",
        //     stat: "12-Week MVP Delivery",
        //     image: "/daria-pimkina-Dj5HnHMtkH0-unsplash.jpg"
        // },
        // {
        //     client: "CodeBase",
        //     title: "Collaborative IDE Platform",
        //     desc: "Next-gen collaborative tools for remote engineering teams.",
        //     stat: "15k+ Monthly Active Users",
        //     image: "/sean-pollock-PhYq704ffdA-unsplash.jpg"
        // }
    ];

    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="pt-12 pb-16 px-6 border-b border-gray-50">
                <div className="max-w-7xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
                    >
                        Our <span className="text-accent">Work</span>.
                    </motion.h1>
                    <p className="text-xl text-secondary max-w-3xl leading-relaxed">
                        We partner with ambitious startups and enterprises to build digital products that drive real, measurable performance.
                    </p>
                </div>
            </section>

            {/* Work Grid */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    {caseStudies.map((study, index) => (
                        <SelectedCaseStudyCard
                            key={index}
                            client={study.client}
                            title={study.title}
                            desc={study.desc}
                            stat={study.stat}
                            image={study.image}
                            delay={index * 0.15}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default OurWorkPage;
