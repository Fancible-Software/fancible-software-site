import React from 'react';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <div>
      <Hero />

      {/* Social Proof / Clients Section */}
      <section className="py-20 border-t border-gray-50">
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

      {/* Capabilities Preview Section (Matching Smith Style) */}
      <section className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-2xl leading-[1.1]">
              Let’s turn your <span className="relative inline-block">
                potential
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-accent/20"></span>
              </span> into performance.
            </h2>
            <button className="text-lg font-bold group flex items-center gap-2 hover:text-accent transition-colors">
              Our Capabilities
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="group-hover:translate-x-2 transition-transform">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

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
                title: "Growth & Scale",
                desc: "Data-driven optimization and analytics to ensure your platform scales with your business.",
                outcomes: ["Analytics Dashboard", "SEO & Speed Audit", "Conversion Optimization"]
              }
            ].map((service, idx) => (
              <div key={idx} className="group cursor-default">
                <div className="w-12 h-12 mb-8 border border-gray-100 rounded-sm flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-colors">
                  <div className="w-6 h-6 border-2 border-foreground group-hover:border-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 group-hover:text-accent transition-colors">
                  {service.title}
                  <ArrowIcon />
                </h3>
                <p className="text-secondary leading-relaxed mb-8">
                  {service.desc}
                </p>
                <div className="pt-8 border-t border-gray-50 uppercase text-[11px] font-bold tracking-widest text-gray-400 mb-4">
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const ArrowIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
    <path d="M4.16663 10H15.8333" stroke="#ea5b0c" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 4.16669L15.8333 10L10 15.8334" stroke="#ea5b0c" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
