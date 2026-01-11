import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-[#161a23] text-white pt-24 pb-12 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                <div className="col-span-1 md:col-span-1">
                    <Link href="/" className="flex items-center gap-2 mb-8">
                        <div className="w-8 h-8 bg-white flex items-center justify-center rounded-sm">
                            <span className="text-black font-bold text-xl leading-none">F</span>
                        </div>
                        <span className="text-xl font-bold tracking-tight">Fancible</span>
                    </Link>
                    <p className="text-gray-400 text-[15px] leading-relaxed max-w-xs">
                        Accelerating SaaS growth and app development through performance-driven engineering and design for Fancible clients.
                    </p>
                </div>

                <div>
                    <h4 className="font-semibold text-lg mb-6">Capabilities</h4>
                    <ul className="space-y-4 text-gray-400 text-[15px]">
                        <li><Link href="/capabilities#strategy" className="hover:text-white transition-colors">Product Strategy</Link></li>
                        <li><Link href="/capabilities#design" className="hover:text-white transition-colors">UI/UX Design</Link></li>
                        <li><Link href="/capabilities#engineering" className="hover:text-white transition-colors">Full-Stack Eng</Link></li>
                        <li><Link href="/capabilities#growth" className="hover:text-white transition-colors">Growth & Scale</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold text-lg mb-6">Company</h4>
                    <ul className="space-y-4 text-gray-400 text-[15px]">
                        <li><Link href="/our-work" className="hover:text-white transition-colors">Our Work</Link></li>
                        <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                        <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                        <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold text-lg mb-6">Follow Us</h4>
                    <ul className="space-y-4 text-gray-400 text-[15px]">
                        <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Twitter (X)</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto pt-12 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-sm">
                <p>© 2026 Fancible Software. All rights reserved.</p>
                <div className="flex gap-8">
                    <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-white">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
