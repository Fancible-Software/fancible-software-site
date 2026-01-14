"use client";

import Image from 'next/image';
import { useInView } from '@/hooks/useInView';
import React from 'react';

type Props = {
  client: string;
  title: string;
  stat: string;
  image: string;
  delay?: number;
};

export default function SelectedWorkCard({ client, title, stat, image, delay = 0 }: Props) {
  const [ref, isInView] = useInView<HTMLDivElement>({ once: true });

  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}s` }}
      className={`group relative h-[500px] overflow-hidden rounded-xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
    >
      <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
        <Image src={image} alt={title} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
      </div>
      <div className="absolute inset-0 z-10 p-12 flex flex-col justify-end">
        <div className="mb-2 text-white font-bold uppercase tracking-widest text-xs" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>{client}</div>
        <h3 className="text-3xl font-bold text-white mb-6" style={{ textShadow: '0 4px 16px rgba(0,0,0,0.5)' }}>{title}</h3>
        <div className="flex items-center justify-between border-t border-white/20 pt-6">
          <span className="text-accent font-bold text-lg" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>{stat}</span>
          <span className="text-white font-semibold flex items-center gap-2 group-hover:translate-x-2 transition-transform" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>
            View Project
          </span>
        </div>
      </div>
    </div>
  );
}
