"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Users, Target, Heart, Award, ArrowRight } from "lucide-react";

export default function About() {
    return (
        <main className="pt-32 bg-slate-50">
            {/* Hero */}
            <section className="relative py-20 overflow-hidden bg-[#0f172a] text-white -mt-32 pt-48 pb-24 rounded-b-[3rem]">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Grace Finnovation</span>
                    </motion.h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        We are a premier medical billing company dedicated to empowering healthcare providers with efficient, transparent, and result-oriented revenue cycle management solutions.
                    </p>
                </div>
            </section>

            {/* Story / Misc */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2">
                            <div className="relative">
                                <div className="absolute inset-0 bg-cyan-500 rounded-2xl rotate-3 opacity-10"></div>
                                <div className="relative bg-white p-8 rounded-2xl border border-slate-100 shadow-xl">
                                    <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Journey</h3>
                                    <p className="text-slate-600 mb-4 leading-relaxed">
                                        Founded with a vision to streamline the complex world of medical billing, Grace Finnovation (GFMB) has grown into a trusted partner for medical practices across the United States.
                                    </p>
                                    <p className="text-slate-600 leading-relaxed">
                                        Our team of over 115 certified professionals works tirelessly to ensure that our clients—ranging from small clinics to large hospitals—receive every dollar they've earned. We combine cutting-edge technology with deep industry expertise to deliver a 99% clean claim rate.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    { title: "Our Mission", desc: "To provide error-free billing solutions that maximize revenue.", icon: Target },
                                    { title: "Our Vision", desc: "To be the global leader in healthcare revenue cycle management.", icon: Users },
                                    { title: "Our Values", desc: "Integrity, Accuracy, and Client-Centricity.", icon: Heart },
                                    { title: "Excellence", desc: "Committed to continuous improvement and compliance.", icon: Award }
                                ].map((item, i) => (
                                    <div key={i} className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:border-cyan-100 transition group">
                                        <item.icon className="text-cyan-500 mb-4 group-hover:scale-110 transition-transform" size={32} />
                                        <h4 className="font-bold text-slate-800 mb-2">{item.title}</h4>
                                        <p className="text-sm text-slate-500">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Meet Our Managing Director Section */}
            <section className="py-24 bg-white relative overflow-hidden text-left">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16">

                        {/* Image Column */}
                        <div className="lg:w-1/3 text-center relative">
                            <div className="relative inline-block">
                                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-white shadow-2xl overflow-hidden relative z-10 mx-auto bg-slate-200">
                                    <Image
                                        src="/images/md-profile.jpeg"
                                        alt="MD Lawrence"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                {/* Decorative Elements */}
                                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500 rounded-full blur-[40px] opacity-50 -z-0 translate-x-1/2 -translate-y-1/4"></div>
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-600 rounded-full blur-[50px] opacity-40 -z-0 -translate-x-1/2 translate-y-1/4"></div>

                                <div className="bg-white absolute -bottom-6 left-1/2 -translate-x-1/2 z-20 px-6 py-2 rounded-full shadow-xl border border-slate-100 flex items-center gap-2 whitespace-nowrap">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                    <span className="text-sm font-bold text-slate-700">15+ Years Experience</span>
                                </div>
                            </div>
                        </div>

                        {/* Content Column */}
                        <div className="lg:w-2/3">
                            <span className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-2 block">Leadership</span>
                            <h2 className="text-4xl font-bold text-slate-900 mb-2">Meet Our Managing Director</h2>
                            <h3 className="text-xl text-slate-500 font-medium mb-6">MD Lawrence <span className="text-slate-300">|</span> Founder & Managing Director</h3>

                            <div className="prose prose-lg text-slate-600 mb-8 leading-relaxed">
                                <p>
                                    With over a decade and a half of dedicated experience in the Medical Billing and Revenue Cycle Management (RCM) industry, MD Lawrence has established a reputation for driving financial excellence for healthcare providers across the United States. His career is built on a simple yet powerful philosophy: <span className="italic font-medium text-slate-800">"Clinicians should focus on healing, while we focus on the health of their practice."</span>
                                </p>
                                <p>
                                    Lawrence’s journey in medical billing began 15 years ago, navigating the transition from paper-based systems to the highly complex, digital-first landscape of today. Throughout his tenure, he has overseen the successful management of multi-specialty portfolios, consistently delivering a <strong className="text-cyan-700">98% clean claim rate</strong> and significantly reducing aged accounts receivable for his clients.
                                </p>
                                <p>
                                    While his experience spans all major medical specialties, Lawrence has become a recognized authority in the nuances of <strong>Behavioral Health and Mental Health billing</strong>. He recognized early on that the unique unit-based billing and authorization challenges of this field required a "specialist’s touch."
                                </p>
                            </div>

                            {/* Quote & Signature */}
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 relative mb-8">
                                <div className="text-4xl text-cyan-200 absolute top-4 left-4 font-serif">"</div>
                                <p className="italic text-slate-700 relative z-10 mb-4 pl-4 border-l-2 border-cyan-400">
                                    The landscape of healthcare reimbursement is constantly shifting. My goal is to ensure that our partners aren't just reacting to these changes, but are positioned to thrive. We bring 15 years of hard-earned lessons, technological innovation, and a commitment to integrity to every claim we process.
                                </p>

                                <div className="flex justify-end mt-4">
                                    {/* Signature Graphic Placeholder */}
                                    <div className="text-2xl text-slate-500 font-serif italic pr-4 rotate-[-2deg]">
                                        MD Lawrence
                                    </div>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-700 text-white rounded-full font-bold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:-translate-y-1 transition-all transform">
                                Schedule a Strategy Call with MD Lawrence <ArrowRight size={20} />
                            </Link>

                        </div>
                    </div>
                </div>
            </section>

            {/* Team CTA */}
            <section className="py-20 bg-[#003366] text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6">Meet Our Team of Experts</h2>
                    <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
                        Our certified coders and billing specialists are ready to help you optimize your practice's financial health.
                    </p>
                    <Link href="/contact" className="px-8 py-3 bg-cyan-500 text-white rounded-full font-bold hover:bg-cyan-400 transition shadow-lg shadow-cyan-500/30">
                        Get in Touch
                    </Link>
                </div>
            </section>
        </main>
    );
}
