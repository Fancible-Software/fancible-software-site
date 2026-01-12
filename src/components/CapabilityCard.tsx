"use client";

import Image from 'next/image';
import { motion } from 'motion/react';
import React from 'react';

type Props = {
  title: string;
  tagline?: string;
  desc: string;
  subItems?: string[];
  outcomes?: string[];
  image: string;
  delay?: number;
};

export default function CapabilityCard({ title, tagline, desc, subItems = [], outcomes = [], image, delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="group p-8 rounded-2xl border border-gray-50 shadow-sm hover:shadow-xl transition-all duration-300 bg-white overflow-hidden relative"
    >
      <div className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-30 transition-opacity">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="flex items-center gap-4 mb-8">
        {image && (
          <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
            <Image src={image} alt={`${title} icon`} width={64} height={64} className="object-cover" />
          </div>
        )}
        <div className="flex-1">
          <div className="w-16 h-1 bg-accent mb-2" />
          <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
        </div>
      </div>
      {tagline && <p className="text-xl font-medium mb-6 leading-snug">{tagline}</p>}
      <p className="text-secondary leading-relaxed mb-12">{desc}</p>

      <div className="pt-12 border-t border-gray-100">
        <div>
          <h4 className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-6">Typical Outcomes</h4>
          <ul className="space-y-4">
            {outcomes.map((item, i) => (
              <li key={i} className="text-[15px] text-secondary flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="#ea5b0c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
