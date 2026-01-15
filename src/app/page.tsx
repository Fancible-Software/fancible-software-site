"use client";

import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { motion } from 'motion/react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Hero from '@/components/Hero';

const ArrowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CapabilityCard = dynamic(() => import('@/components/CapabilityCard'), { ssr: false, loading: () => <div className="h-40 bg-muted animate-pulse rounded" /> });
const HomeTechnologies = dynamic(() => import('@/components/HomeTechnologies'), { ssr: false, loading: () => <div className="h-60 bg-muted animate-pulse rounded" /> });
const SelectedWorkCard = dynamic(() => import('@/components/SelectedWorkCard'), { ssr: false, loading: () => <div className="h-60 bg-muted animate-pulse rounded" /> });
const TestimonialsSection = dynamic(() => import('@/components/TestimonialsSection'), { ssr: false });
const IndustriesSection = dynamic(() => import('@/components/IndustriesSection'), { ssr: false });
const FAQSection = dynamic(() => import('@/components/FAQSection'), { ssr: false });

const pillars = [
  {
    title: "Product Strategy",
    tagline: "Bridging the gap between vision and market success.",
    desc: "Our strategic approach ensures your SaaS product isn't just built, but positioned for long-term growth and scalability.",
    subItems: ["MVP Roadmap & Prioritization", "Market & Competitive Analysis", "Monetization Strategy", "GTM Execution"],
    outcomes: ["Clear Product Direction", "Optimized Feature Set", "Lower Time-to-Market"],
    image: "/icons8-team-yTwXpLO5HAA-unsplash.jpg",
  },
  {
    title: "UX/UI Design",
    tagline: "Human-centered design for high-performance SaaS.",
    desc: "We design intuitive, scalable interfaces that reduce friction and drive user retention for complex web and mobile platforms.",
    subItems: ["SaaS Design Systems", "High-Fidelity Prototyping", "User Journey Mapping", "Usability Audit & Optimization"],
    outcomes: ["Unified Visual Language", "Increased User Engagement", "Reduced Support Needs"],
    image: "/kaitlyn-baker-vZJdYl5JVXY-unsplash.jpg",
  },
  {
    title: "Engineering",
    tagline: "Precision engineering for mission-critical apps.",
    desc: "From Next.js frontends to robust cloud-native backends, we build performant, secure, and scalable digital products.",
    subItems: ["Full-Stack Next.js Dev", "API-First Architecture", "Cloud Native (AWS/GCP)", "DevOps & CI/CD Pipelines"],
    outcomes: ["Scalable Infrastructure", "High Page Speed/Performance", "Clean, Maintainable Code"],
    image: "/sean-pollock-PhYq704ffdA-unsplash.jpg",
  },
  {
    title: "Digital Marketing",
    tagline: "High-performance growth for ambitious SMBs.",
    desc: "Expert performance marketing solutions designed to drive leads, increase conversions, and maximize your digital footprint.",
    subItems: ["Search Engine Marketing (SEM)", "Targeted Paid Social Ads", "Data-Driven Content Strategy", "Lead Gen & Email Automation"],
    outcomes: ["Consistent Lead Pipeline", "Positive ROI/Ad Spend", "Increased Brand Authority"],
    image: "/austin-distel-_S7-KX8geL0-unsplash.jpg",
  },
];

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

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Capabilities Preview Section */}
      <section className="py-16 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
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
            <CapabilityCard
              title={pillars[0].title}
              tagline={pillars[0].tagline}
              desc={pillars[0].desc}
              subItems={pillars[0].subItems}
              outcomes={pillars[0].outcomes}
              image={pillars[0].image}
              delay={0}
            />
            <CapabilityCard
              title={pillars[1].title}
              tagline={pillars[1].tagline}
              desc={pillars[1].desc}
              subItems={pillars[1].subItems}
              outcomes={pillars[1].outcomes}
              image={pillars[1].image}
              delay={0.08}
            />
            <CapabilityCard
              title={pillars[2].title}
              tagline={pillars[2].tagline}
              desc={pillars[2].desc}
              subItems={pillars[2].subItems}
              outcomes={pillars[2].outcomes}
              image={pillars[2].image}
              delay={0.16}
            />
            <CapabilityCard
              title={pillars[3].title}
              tagline={pillars[3].tagline}
              desc={pillars[3].desc}
              subItems={pillars[3].subItems}
              outcomes={pillars[3].outcomes}
              image={pillars[3].image}
              delay={0.24}
            />
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <IndustriesSection />

      {/* Technologies Section */}
      <HomeTechnologies />

      {/* Selected Work Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
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
            <SelectedWorkCard
              client="FinTech OS"
              title="Revolutionizing Digital Banking"
              stat="45% Engagement Boost"
              image="/airfocus-K_VeavYEfdA-unsplash.jpg"
              delay={0}
            />
            <SelectedWorkCard
              client="Prisma Cloud"
              title="Visual Data Exploration"
              stat="3.5x Speed Increase"
              image="/alesia-kazantceva-XLm6-fPwK5Q-unsplash.jpg"
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
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
                key={`process-step-${i}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
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

      {/* FAQ Section */}
      <FAQSection />

      {/* Digital Marketing / SMB Focus Section */}
      <section className="py-24 px-6 bg-gray-50 border-y border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
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
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square bg-white rounded-3xl p-10 shadow-xl border border-gray-100 flex flex-col h-full relative overflow-hidden">
                <div className="mb-8 z-10">
                  <div className="text-[11px] font-bold uppercase tracking-widest text-[#ea5b0c] mb-2">Sample Performance</div>
                  <div className="text-4xl font-bold tracking-tight text-gray-900">+320% Lead Volume</div>
                </div>

                <div className="flex-1 w-full h-full min-h-[240px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={[
                        { name: 'Week 0', value: 0 },
                        { name: 'Week 1', value: 10 },
                        { name: 'Week 2', value: 30 },
                        { name: 'Week 3', value: 60 },
                        { name: 'Week 4', value: 140 },
                        { name: 'Week 5', value: 320 },
                      ]}
                      margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#ea5b0c" stopOpacity={0.2} />
                          <stop offset="95%" stopColor="#ea5b0c" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                      <XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#9ca3af', fontSize: 10, fontWeight: 'bold', letterSpacing: '0.05em' }}
                        tickFormatter={(value) => value.toUpperCase()}
                        dy={10}
                      />
                      <Tooltip
                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                        cursor={{ stroke: '#ea5b0c', strokeWidth: 1, strokeDasharray: '4 4' }}
                      />
                      <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#ea5b0c"
                        strokeWidth={4}
                        fillOpacity={1}
                        fill="url(#colorValue)"
                        activeDot={{ r: 6, strokeWidth: 0, fill: '#ea5b0c' }}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
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
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">Ready to build?</h2>
            <p className="text-xl text-gray-400 max-w-md leading-relaxed">
              Tell us about your project and we'll get back to you within 24 hours.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
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

