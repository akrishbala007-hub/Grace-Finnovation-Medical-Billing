"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const links = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/70 backdrop-blur-lg border-b border-white/20 shadow-sm py-2" : "bg-transparent py-4"
                }`}
        >
            {/* Top Bar (Hidden on scroll for cleaner look, or kept small) */}
            <div className={`container mx-auto px-4 transition-all duration-300 ${scrolled ? "h-0 opacity-0 overflow-hidden" : "h-auto opacity-100 mb-2"}`}>
                <div className="flex justify-end items-center gap-6 text-xs sm:text-sm font-medium text-slate-300">
                    <a href="tel:+919629991085" className="flex items-center gap-1 hover:text-cyan-400 transition">
                        <Phone size={14} /> <span>+91 9629991085</span>
                    </a>
                    <a href="mailto:sales@gracefinnovationmedicalbilling.com" className="hidden sm:flex items-center gap-1 hover:text-cyan-400 transition">
                        <Mail size={14} /> <span>sales@gracefinnovationmedicalbilling.com</span>
                    </a>
                </div>
            </div>

            {/* Main Nav */}
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
                            G
                        </div>
                        <div className="leading-tight">
                            <h1 className={`text-xl font-bold transition-colors ${scrolled ? "text-slate-800" : "text-white"}`}>Grace Finnovation</h1>
                            <p className={`text-[10px] uppercase tracking-wider ${scrolled ? "text-slate-500" : "text-white/70"}`}>Medical Billing</p>
                        </div>
                    </Link>

                    {/* Desktop Links */}
                    <nav className="hidden md:flex items-center gap-8">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`font-medium transition-colors ${scrolled ? "text-slate-600 hover:text-cyan-600" : "text-white/90 hover:text-cyan-300"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:-translate-y-0.5"
                        >
                            Free Audit
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button onClick={toggleMenu} className={`md:hidden p-2 ${scrolled ? "text-slate-800" : "text-white"}`}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden overflow-hidden bg-white/90 backdrop-blur-xl border-t border-white/20"
                    >
                        <nav className="flex flex-col p-4 space-y-4">
                            {links.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-slate-700 font-medium py-3 border-b border-slate-100 px-4"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                onClick={() => setIsOpen(false)}
                                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-center text-white py-3 rounded-xl font-bold shadow-lg shadow-cyan-500/20"
                            >
                                Get Free Audit
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
