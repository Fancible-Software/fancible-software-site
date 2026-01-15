"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        quote: "Smith Commerce transformed our legacy platform into a high-speed React app. The performance gains were immediate, and our conversion rate jumped by 40%.",
        author: "Sarah Jenkins",
        role: "CTO",
        company: "FinTech OS",
        logo: "FIS"
    },
    {
        quote: "Their team integrated seamlessly with ours. The depth of knowledge in Next.js and cloud infrastructure helped us scale to 100k+ users in months.",
        author: "Michael Chang",
        role: "VP of Engineering",
        company: "Logic Scale",
        logo: "LOGIC"
    },
    {
        quote: "We needed a partner who understood both design and deep tech. Smith delivered a stunning UI backed by rock-solid code. Highly recommended.",
        author: "Elena Rodriguez",
        role: "Product Director",
        company: "Prisma Cloud",
        logo: "PRISMA"
    }
];

const TestimonialsSection = () => {
    return (
        <section className="py-24 px-6 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-2">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                        What our clients say.
                    </h2>
                    <div className="text-lg font-bold border-b border-black pb-1 cursor-pointer hover:text-accent hover:border-accent transition-colors">
                        View all reviews (52)
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="bg-gray-50 p-10 rounded-2xl relative group hover:shadow-xl transition-all duration-300 border border-gray-100"
                        >
                            <Quote className="w-10 h-10 text-accent mb-6" fill="currentColor" fillOpacity={0.2} />

                            <p className="text-lg text-gray-700 leading-relaxed mb-8 font-medium">
                                "{t.quote}"
                            </p>

                            <div className="flex items-center justify-between border-t border-gray-200 pt-6 mt-auto">
                                <div>
                                    <div className="font-bold text-gray-900">{t.author}</div>
                                    <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">{t.role}</div>
                                </div>
                                <div className="font-black text-gray-300 text-xl tracking-tighter group-hover:text-gray-400 transition-colors">
                                    {t.logo}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
