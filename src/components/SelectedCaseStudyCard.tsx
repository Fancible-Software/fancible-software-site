"use client";

import Image from 'next/image';
import { useInView } from '@/hooks/useInView';
import React from 'react';

type Props = {
  client: string;
  title: string;
  desc: string;
  stat: string;
  image: string;
  delay?: number;
};

export default function SelectedCaseStudyCard({ client, title, desc, stat, image, delay = 0 }: Props) {
  const [ref, isInView] = useInView<HTMLDivElement>({ once: true, threshold: 0.2 });

  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}s`, willChange: 'opacity' }}
      className={`group relative h-[600px] overflow-hidden rounded-xl cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
    >
      <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
        <Image src={image} alt={title} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500" />
      </div>

      {/* Overlay with Content */}
      <div className="absolute inset-0 z-10 p-12 flex flex-col justify-end">
        <div className="mb-4 text-white/70 font-bold uppercase tracking-widest text-xs" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>
          {client}
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 group-hover:-translate-y-2 transition-transform duration-500" style={{ textShadow: '0 4px 16px rgba(0,0,0,0.5)' }}>
          {title}
        </h2>
        <p className="text-white/80 max-w-md mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>
          {desc}
        </p>
        <div className="flex items-center justify-between border-t border-white/20 pt-8 mt-4">
          <span className="text-accent font-bold text-lg" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>{stat}</span>
          <span className="text-white font-semibold flex items-center gap-2 group-hover:translate-x-2 transition-transform" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>
            View Case Study
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4.16663 10H15.8333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10 4.16669L15.8333 10L10 15.8334" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
