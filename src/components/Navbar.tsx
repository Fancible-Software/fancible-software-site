"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            setShouldRender(true);
            return;
        }
        const t = setTimeout(() => setShouldRender(false), 200);
        return () => clearTimeout(t);
    }, [isOpen]);

    const navLinks = [
        { name: 'Our Work', href: '/our-work' },
        { name: 'Capabilities', href: '/capabilities' },
        { name: 'Technologies', href: '/technologies' },
        { name: 'Blog', href: '/blog' },
        { name: 'Company', href: '/company' },
        // { name: 'Careers', href: '/careers' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-100 py-1 shadow-sm' : 'bg-transparent py-3'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <Image
                        src="/fancible_logo.png"
                        alt="Fancible"
                        width={70}
                        height={70}
                        className="rounded-sm object-contain group-hover:opacity-90 transition-opacity"
                    />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="relative px-2 text-[15px] font-medium text-foreground hover:text-accent transition-colors"
                            >
                                {link.name}
                                {isActive && (
                                    <svg className="absolute -top-1 -left-2 -right-2 -bottom-1 w-[calc(100%+16px)] h-[calc(100%+8px)] pointer-events-none overflow-visible" viewBox="0 0 431 120" fill="none" preserveAspectRatio="none">
                                        <motion.path
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.5, ease: "easeOut" }}
                                            d="M196.923 120C177.884 120 158.118 119.46 137.764 118.37C59.8733 114.208 13.0307 102.725 2.29237 85.17C-2.0806 78.0135 -0.173568 70.0033 7.81163 62.0028C27.2933 42.4846 80.2813 23.8452 149.55 12.1417C228.191 -1.14535 317.087 -3.61924 399.857 5.17489C401.273 5.32588 402.256 6.30537 402.054 7.3623C401.852 8.42115 400.559 9.16836 399.13 9.00769C215.931 -10.4602 47.4504 28.764 11.9595 64.3199C5.07658 71.2132 3.4102 77.6863 7.00173 83.5594C12.6504 92.8007 37.2037 109.115 138.131 114.51C297.372 123.022 394.361 96.5561 419.833 66.5519C426.758 58.3985 427.736 50.5064 422.662 43.7293C413.747 31.8167 387.09 24.937 351.367 25.388H351.325C349.915 25.388 348.761 24.5421 348.738 23.4833C348.714 22.4147 349.856 21.534 351.284 21.5165C389.484 21.0655 417.171 28.4698 427.177 41.8362C433.152 49.8173 432.096 59.3315 424.204 68.627C410.534 84.7306 378.841 98.6544 334.969 107.828C296.42 115.89 249.435 120 196.923 120Z"
                                            fill="#ea5b0c"
                                        />
                                    </svg>
                                )}
                            </Link>
                        );
                    })}
                    <Link
                        href="/contact"
                        className="relative group flex items-center gap-2 text-[15px] font-semibold text-foreground hover:text-accent transition-colors border-l pl-8 ml-2 border-gray-200"
                    >
                        Contact
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        {pathname === '/contact' && (
                            <svg className="absolute -top-1 left-6 -right-2 -bottom-1 w-[calc(100%-16px)] h-[calc(100%+8px)] pointer-events-none overflow-visible" viewBox="0 0 431 120" fill="none" preserveAspectRatio="none">
                                <motion.path
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    d="M196.923 120C177.884 120 158.118 119.46 137.764 118.37C59.8733 114.208 13.0307 102.725 2.29237 85.17C-2.0806 78.0135 -0.173568 70.0033 7.81163 62.0028C27.2933 42.4846 80.2813 23.8452 149.55 12.1417C228.191 -1.14535 317.087 -3.61924 399.857 5.17489C401.273 5.32588 402.256 6.30537 402.054 7.3623C401.852 8.42115 400.559 9.16836 399.13 9.00769C215.931 -10.4602 47.4504 28.764 11.9595 64.3199C5.07658 71.2132 3.4102 77.6863 7.00173 83.5594C12.6504 92.8007 37.2037 109.115 138.131 114.51C297.372 123.022 394.361 96.5561 419.833 66.5519C426.758 58.3985 427.736 50.5064 422.662 43.7293C413.747 31.8167 387.09 24.937 351.367 25.388H351.325C349.915 25.388 348.761 24.5421 348.738 23.4833C348.714 22.4147 349.856 21.534 351.284 21.5165C389.484 21.0655 417.171 28.4698 427.177 41.8362C433.152 49.8173 432.096 59.3315 424.204 68.627C410.534 84.7306 378.841 98.6544 334.969 107.828C296.42 115.89 249.435 120 196.923 120Z"
                                    fill="#ea5b0c"
                                />
                            </svg>
                        )}
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-foreground"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {shouldRender && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-6 md:hidden shadow-xl"
                >
                    <div className="flex flex-col gap-6">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`relative text-lg font-medium border-b border-gray-50 pb-2 flex items-center justify-between ${isActive ? 'text-accent' : 'text-foreground'
                                        }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                    {isActive && (
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className="w-2 h-2 bg-accent rounded-full"
                                        />
                                    )}
                                </Link>
                            );
                        })}
                        <Link
                            href="/contact"
                            className="text-lg font-bold text-accent flex items-center gap-2"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact Us
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
