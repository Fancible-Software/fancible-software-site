"use client";

import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactPage = () => {
    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="pt-24 pb-16 px-6 border-b border-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                        We Should Talk.
                    </h1>
                    <p className="text-xl text-secondary max-w-3xl leading-relaxed">
                        Ready to accelerate your SaaS performance or launch your next big app? Let’s discuss how we can help you achieve your goals.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">

                    {/* Info Side */}
                    <div>
                        <div className="mb-16">
                            <h3 className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-8">General Inquiries</h3>
                            <div className="space-y-8">
                                <a href="mailto:hello@smithcommerce.com" className="flex items-center gap-4 text-2xl font-bold hover:text-accent transition-colors">
                                    <Mail className="w-8 h-8 text-accent" />
                                    hello@smithco.com
                                </a>
                                <a href="tel:+1234567890" className="flex items-center gap-4 text-2xl font-bold hover:text-accent transition-colors">
                                    <Phone className="w-8 h-8 text-accent" />
                                    +1 (555) 000-1122
                                </a>
                            </div>
                        </div>

                        <div className="mb-16">
                            <h3 className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-8">Our Studio</h3>
                            <div className="flex gap-4">
                                <MapPin className="w-8 h-8 text-accent shrink-0" />
                                <p className="text-2xl font-bold leading-tight">
                                    1234 Innovation Way,<br />
                                    Suite 500, Palo Alto,<br />
                                    CA 94301
                                </p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-8">Stay Connected</h3>
                            <div className="flex gap-8 text-lg font-bold">
                                <a href="#" className="hover:text-accent underline decoration-2 underline-offset-4">LinkedIn</a>
                                <a href="#" className="hover:text-accent underline decoration-2 underline-offset-4">Twitter</a>
                                <a href="#" className="hover:text-accent underline decoration-2 underline-offset-4">Instagram</a>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-gray-50 p-12 rounded-xl shadow-2xl border border-gray-100"
                    >
                        <h3 className="text-2xl font-bold mb-8">Project Inquiry</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Full Name</label>
                                    <input type="text" className="w-full bg-white border border-gray-200 px-4 py-3 rounded-sm focus:ring-2 focus:ring-accent outline-none font-medium" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Work Email</label>
                                    <input type="email" className="w-full bg-white border border-gray-200 px-4 py-3 rounded-sm focus:ring-2 focus:ring-accent outline-none font-medium" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Company Name</label>
                                <input type="text" className="w-full bg-white border border-gray-200 px-4 py-3 rounded-sm focus:ring-2 focus:ring-accent outline-none font-medium" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Service Needed</label>
                                <select className="w-full bg-white border border-gray-200 px-4 py-3 rounded-sm focus:ring-2 focus:ring-accent outline-none font-medium appearance-none">
                                    <option>SaaS App Development</option>
                                    <option>UI/UX Design Systems</option>
                                    <option>Cloud Infrastructure</option>
                                    <option>Product Strategy</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">How can we help?</label>
                                <textarea rows={4} className="w-full bg-white border border-gray-200 px-4 py-3 rounded-sm focus:ring-2 focus:ring-accent outline-none font-medium resize-none"></textarea>
                            </div>

                            <button className="w-full bg-black text-white py-5 font-bold text-lg hover:bg-accent transition-colors flex items-center justify-center gap-4 group mt-8">
                                Submit Inquiry
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
