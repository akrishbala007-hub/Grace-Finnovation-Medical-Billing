import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, ArrowUpRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative bg-[#0f172a] text-white pt-20 pb-10 overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#06b6d4] opacity-10 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8b5cf6] opacity-10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 bg-gradient-to-br from-[#06b6d4] to-[#3b82f6] rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-cyan-500/20">
                                G
                            </div>
                            <div className="leading-tight">
                                <span className="text-xl font-bold block">Grace Finnovation</span>
                                <span className="text-xs text-slate-400">Medical Billing</span>
                            </div>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed mb-8">
                            Empowering healthcare providers with next-gen RCM solutions. We combine AI-driven efficiency with human expertise to maximize your revenue.
                        </p>
                        <div className="flex gap-4">
                            {/* Only LinkedIn Profile */}
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#06b6d4] hover:border-[#06b6d4] transition-all duration-300 group">
                                <Linkedin size={18} className="text-slate-400 group-hover:text-white transition-colors" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
                        <ul className="space-y-4">
                            {[
                                { name: "Home", link: "/" },
                                { name: "About Us", link: "/about" },
                                { name: "Our Services", link: "/services" },
                                { name: "Contact Support", link: "/contact" },
                                { name: "Terms of Service", link: "/terms" }
                            ].map((item, i) => (
                                <li key={i}>
                                    <Link href={item.link} className="text-slate-400 hover:text-[#06b6d4] transition-colors text-sm flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#06b6d4] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Our Expertise</h3>
                        <ul className="space-y-4">
                            {[
                                { name: "Revenue Cycle Mgmt", link: "/services#rcm" },
                                { name: "Medical Coding", link: "/services#coding" },
                                { name: "Insurance Verification", link: "/services#insurance" },
                                { name: "Denial Management", link: "/services#denials" },
                                { name: "AR Recovery", link: "/services#ar" }
                            ].map((item, i) => (
                                <li key={i}>
                                    <Link href={item.link} className="text-slate-400 hover:text-[#06b6d4] transition-colors text-sm flex items-center justify-between group">
                                        {item.name}
                                        <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Contact Us</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4 group">
                                <div className="w-10 h-10 rounded-full bg-[#06b6d4]/10 flex items-center justify-center shrink-0 group-hover:bg-[#06b6d4] transition-colors duration-300">
                                    <MapPin size={18} className="text-[#06b6d4] group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <h4 className="text-white text-sm font-semibold mb-1">Headquarters</h4>
                                    <p className="text-slate-400 text-sm">D.No.1288/2, Trichy Road,<br />Race Course, Coimbatore-641018</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 group">
                                <div className="w-10 h-10 rounded-full bg-[#06b6d4]/10 flex items-center justify-center shrink-0 group-hover:bg-[#06b6d4] transition-colors duration-300">
                                    <Phone size={18} className="text-[#06b6d4] group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <h4 className="text-white text-sm font-semibold mb-1">Phone</h4>
                                    <p className="text-slate-400 text-sm">+91 9629991085</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 group">
                                <div className="w-10 h-10 rounded-full bg-[#06b6d4]/10 flex items-center justify-center shrink-0 group-hover:bg-[#06b6d4] transition-colors duration-300">
                                    <Mail size={18} className="text-[#06b6d4] group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <h4 className="text-white text-sm font-semibold mb-1">Email</h4>
                                    <p className="text-slate-400 text-sm break-all">sales@gracefinnovationmedicalbilling.com</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} Grace Finnovation. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="/terms" className="text-slate-500 hover:text-white text-sm transition-colors">Terms of Service</Link>
                        <Link href="/privacy" className="text-slate-500 hover:text-white text-sm transition-colors">Privacy Policy</Link>
                        <Link href="/cookies" className="text-slate-500 hover:text-white text-sm transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
