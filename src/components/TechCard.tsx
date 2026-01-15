"use client";

import React, { useState, useRef } from 'react';

const TechCard = ({
    title,
    items,
    icon: Icon,
    className = "",
    delay = 0
}: {
    title: string,
    items: string[],
    icon: any,
    className?: string,
    delay?: number
}) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
        setOpacity(1);
    };

    const handleBlur = () => {
        setOpacity(0);
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`relative rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-1 animate-fade-in-up ${className}`}
            style={{ animationDelay: `${delay}s` }}
        >
            {/* Subtle Spotlight - Grayish */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 z-10"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(0, 0, 0, 0.05), transparent 40%)`
                }}
            />

            {/* Card Content */}
            <div className="relative h-full p-8">

                {/* Background Icon Decoration - Subtle gray */}
                <div className="absolute top-0 right-0 p-8 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-12 opacity-[0.03] text-black">
                    <Icon className="w-32 h-32" />
                </div>

                <div className="relative z-10">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 bg-accent/10 text-accent border border-accent/20">
                        <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-bold mb-6 text-gray-900 tracking-wide">{title}</h3>

                    <div className="flex flex-wrap gap-2">
                        {items.map((item) => (
                            <span
                                key={item}
                                className="px-3 py-1.5 text-sm font-medium rounded-md border transition-all duration-300 bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100 hover:border-gray-300"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechCard;
