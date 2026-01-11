"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';

const ArrowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Home() {
  return (
    <div>
      <Hero />

      {/* Social Proof / Clients Section */}
      <section className="py-12 border-t border-gray-50 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-gray-400 mb-12">
            Trusted by teams at
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale contrast-125">
            <div className="text-2xl font-bold italic tracking-tighter">FINTECH.OS</div>
            <div className="text-2xl font-extrabold tracking-tight">LOGIC</div>
            <div className="text-2xl font-black uppercase">Prisma</div>
            <div className="text-2xl font-serif">Vanguard</div>
            <div className="text-2xl font-mono">CODEBASE</div>
          </div>
        </div>
      </section>

      {/* Capabilities Preview Section */}
      <section className="py-16 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-2xl leading-[1.1]">
              Let’s turn your <span className="relative inline-block">
                potential
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-accent/20"></span>
              </span> into performance.
            </h2>
            <Link href="/capabilities" className="text-lg font-bold group flex items-center gap-2 hover:text-accent transition-colors">
              Our Capabilities
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="group-hover:translate-x-2 transition-transform">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              {
                title: "Product Strategy",
                desc: "We align your product vision with market opportunities and technical feasibility.",
                outcomes: ["Market-Product Fit", "MVP Roadmap", "Growth Strategy"]
              },
              {
                title: "UI/UX Design",
                desc: "Human-centered design systems built for conversion and high-retention SaaS apps.",
                outcomes: ["Unified Design System", "High Fidelity Prototypes", "User Testing"]
              },
              {
                title: "Engineering",
                desc: "Scalable, high-performance web and mobile applications built with Next.js and Cloud Native tech.",
                outcomes: ["Clean Architecture", "Lightning Fast Performance", "API-First"]
              },
              {
                title: "Marketing & Growth",
                desc: "Data-driven performance marketing and optimization to ensure your business scales effectively.",
                outcomes: ["Lead Generation", "Paid Media Strategy", "Conversion Optimization"]
              }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group cursor-default p-8 bg-white rounded-xl border border-gray-50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 mb-6 border border-gray-100 rounded-sm flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-colors">
                  <div className="w-6 h-6 border-2 border-foreground group-hover:border-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 group-hover:text-accent transition-colors">
                  {service.title}
                  <ArrowIcon />
                </h3>
                <p className="text-secondary leading-relaxed mb-8">
                  {service.desc}
                </p>
                <div className="pt-6 border-t border-gray-50 uppercase text-[11px] font-bold tracking-widest text-gray-400 mb-4">
                  Typical Outcomes
                </div>
                <ul className="space-y-3">
                  {service.outcomes.map((o, i) => (
                    <li key={i} className="text-[14px] font-medium flex items-center gap-2">
                      <span className="w-1 h-1 bg-accent rounded-full" />
                      {o}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Work Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-between items-end mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Selected Work</h2>
            <button className="text-lg font-bold group flex items-center gap-2 hover:text-accent transition-colors">
              View All Projects
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="group-hover:translate-x-2 transition-transform">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                client: "FinTech OS",
                title: "Revolutionizing Digital Banking",
                stat: "45% Engagement Boost",
                image: "/airfocus-K_VeavYEfdA-unsplash.jpg"
              },
              {
                client: "Prisma Cloud",
                title: "Visual Data Exploration",
                stat: "3.5x Speed Increase",
                image: "/alesia-kazantceva-XLm6-fPwK5Q-unsplash.jpg"
              }
            ].map((study, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="group relative h-[500px] overflow-hidden rounded-xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                </div>
                <div className="absolute inset-0 z-10 p-12 flex flex-col justify-end">
                  <div className="mb-2 text-white font-bold uppercase tracking-widest text-xs" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>{study.client}</div>
                  <h3 className="text-3xl font-bold text-white mb-6" style={{ textShadow: '0 4px 16px rgba(0,0,0,0.5)' }}>{study.title}</h3>
                  <div className="flex items-center justify-between border-t border-white/20 pt-6">
                    <span className="text-accent font-bold text-lg" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>{study.stat}</span>
                    <span className="text-white font-semibold flex items-center gap-2 group-hover:translate-x-2 transition-transform" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>
                      View Project
                      <ArrowIcon />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-20"
          >
            How We Build
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { step: "01", title: "Strategy", desc: "We define the roadmap, prioritize features, and validate the market fit." },
              { step: "02", title: "Design", desc: "Human-centered UI/UX design focused on performance and retention." },
              { step: "03", title: "Engineering", desc: "High-performance full-stack development with a focus on scale." }
            ].map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative group"
              >
                <div className="text-6xl font-black text-gray-300 mb-8 transition-colors group-hover:text-accent/20">{p.step}</div>
                <h3 className="text-2xl font-bold mb-4">{p.title}</h3>
                <p className="text-secondary leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Marketing / SMB Focus Section */}
      <section className="py-24 px-6 bg-gray-50 border-y border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
                Accelerate your growth with <span className="text-accent">Performance Marketing</span>.
              </h2>
              <p className="text-xl text-secondary mb-12 leading-relaxed">
                We don't just build products; we help them find the right audience. Our digital marketing solutions are tailored for SMBs looking for measurable ROI and sustainable lead generation.
              </p>

              <div className="space-y-6">
                {[
                  { title: "Search Engine Marketing", desc: "Dominate search results with targeted SEM campaigns and SEO optimization." },
                  { title: "Paid Social Ads", desc: "Reach your ideal customers on the platforms they use most with high-conversion creative." },
                  { title: "Lead Generation", desc: "Custom funnels and automated email sequences to turn visitors into loyal customers." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-secondary">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <Link href="/contact" className="inline-flex items-center gap-2 text-lg font-bold text-accent hover:gap-4 transition-all">
                  Get a Free Marketing Audit
                  <ArrowIcon />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square bg-white rounded-3xl p-12 shadow-2xl border border-gray-100 flex flex-col justify-center">
                <div className="mb-8">
                  <div className="text-[11px] font-bold uppercase tracking-widest text-accent mb-2">Sample Performance</div>
                  <div className="text-4xl font-bold tracking-tight">+320% Lead Volume</div>
                </div>
                <div className="space-y-4">
                  {[40, 65, 55, 90, 85].map((h, i) => (
                    <div key={i} className="flex items-end gap-2 h-12">
                      <div className="w-full bg-gray-50 rounded-t-lg" style={{ height: `${h}%` }}>
                        <motion.div
                          initial={{ height: 0 }}
                          whileInView={{ height: '100%' }}
                          transition={{ duration: 1, delay: i * 0.1 }}
                          className="w-full bg-accent rounded-t-lg"
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex justify-between text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                  <span>Week 1</span>
                  <span>Week 2</span>
                  <span>Week 3</span>
                  <span>Week 4</span>
                  <span>Week 5</span>
                </div>
              </div>

              <div className="absolute -top-12 -right-12 w-32 h-32 bg-accent/5 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integrated Contact Form Section */}
      <section className="py-16 px-6 bg-[#161a23] text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">Ready to build?</h2>
            <p className="text-xl text-gray-400 max-w-md leading-relaxed">
              Tell us about your project and we'll get back to you within 24 hours.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 p-12 rounded-xl backdrop-blur-sm border border-white/10 shadow-2xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input type="text" placeholder="Full Name" className="w-full bg-white/10 border border-white/10 px-4 py-4 rounded-sm outline-none focus:border-accent transition-colors text-white" />
                <input type="email" placeholder="Work Email" className="w-full bg-white/10 border border-white/10 px-4 py-4 rounded-sm outline-none focus:border-accent transition-colors text-white" />
              </div>
              <input type="text" placeholder="Company" className="w-full bg-white/10 border border-white/10 px-4 py-4 rounded-sm outline-none focus:border-accent transition-colors text-white" />
              <textarea placeholder="How can we help?" rows={4} className="w-full bg-white/10 border border-white/10 px-4 py-4 rounded-sm outline-none focus:border-accent transition-colors text-white resize-none"></textarea>
              <button className="w-full bg-accent text-white py-5 font-bold text-lg hover:bg-black transition-all flex items-center justify-center gap-4 group shadow-lg hover:shadow-accent/20">
                Send Inquiry
                <ArrowIcon />
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

