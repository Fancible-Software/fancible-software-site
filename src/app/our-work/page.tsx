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
            <section className="pt-12 pb-16 px-6 border-b border-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                        Our <span className="text-accent">Work</span>.
                    </h1>
                    <p className="text-xl text-secondary max-w-3xl leading-relaxed">
                        We partner with ambitious startups and enterprises to build digital products that drive real, measurable performance.
                    </p>
                </div>
            </section>

            {/* Work Grid */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    <SelectedCaseStudyCard
                        client={caseStudies[0].client}
                        title={caseStudies[0].title}
                        desc={caseStudies[0].desc}
                        stat={caseStudies[0].stat}
                        image={caseStudies[0].image}
                        delay={0}
                    />
                    <SelectedCaseStudyCard
                        client={caseStudies[1].client}
                        title={caseStudies[1].title}
                        desc={caseStudies[1].desc}
                        stat={caseStudies[1].stat}
                        image={caseStudies[1].image}
                        delay={0.15}
                    />
                    <SelectedCaseStudyCard
                        client={caseStudies[2].client}
                        title={caseStudies[2].title}
                        desc={caseStudies[2].desc}
                        stat={caseStudies[2].stat}
                        image={caseStudies[2].image}
                        delay={0.3}
                    />
                    <SelectedCaseStudyCard
                        client={caseStudies[3].client}
                        title={caseStudies[3].title}
                        desc={caseStudies[3].desc}
                        stat={caseStudies[3].stat}
                        image={caseStudies[3].image}
                        delay={0.45}
                    />
                    <SelectedCaseStudyCard
                        client={caseStudies[4].client}
                        title={caseStudies[4].title}
                        desc={caseStudies[4].desc}
                        stat={caseStudies[4].stat}
                        image={caseStudies[4].image}
                        delay={0.6}
                    />
                </div>
            </section>
        </div>
    );
};

export default OurWorkPage;
