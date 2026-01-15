"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const faqs = [
    {
        question: "How do you handle project estimation and pricing?",
        answer: "We offer transparent, fixed-price contracts for defined scopes (like MVPs) and time-and-materials for ongoing agile development. We start with a discovery phase to ensure accurate estimates."
    },
    {
        question: "Can you integrate with our existing engineering team?",
        answer: "Absolutely. We often work as an extension of internal teams, adopting your Jira workflows, CI/CD pipelines, and coding standards. We believe in collaboration, not silos."
    },
    {
        question: "What is your typical tech stack?",
        answer: "We specialize in the React ecosystem (Next.js, React Native) backed by Node.js, Python, or Go. For infrastructure, we are heavily certified in AWS and Google Cloud Platform."
    },
    {
        question: "Do you provide post-launch support?",
        answer: "Yes, we offer SLA-based maintenance packages that cover security updates, performance monitoring, and rapid bug fixes. We ensure your product stays healthy after launch."
    },
    {
        question: "How long does it take to build an MVP?",
        answer: "A typical high-quality MVP takes 8-12 weeks. This includes design, development, and QA. We prioritize core features to get you to market fast while maintaining scalability."
    }
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 px-6 bg-white border-t border-gray-50">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold tracking-tight mb-16 text-center"
                >
                    FAQ
                </motion.h2>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border-b border-gray-100 last:border-0 pb-4">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex justify-between items-center py-6 text-left group"
                            >
                                <span className={`text-xl font-bold transition-colors ${openIndex === i ? 'text-accent' : 'text-gray-900 group-hover:text-gray-600'}`}>
                                    {faq.question}
                                </span>
                                <Plus
                                    className={`w-6 h-6 transition-transform duration-300 ${openIndex === i ? 'rotate-45 text-accent' : 'text-gray-400'}`}
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pb-8 text-lg text-secondary leading-relaxed pr-8">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
