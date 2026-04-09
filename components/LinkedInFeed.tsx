"use client";

import { motion } from "framer-motion";
import { Linkedin, ExternalLink, MessageSquare } from "lucide-react";
import Image from "next/image";

export default function LinkedInFeed() {
    const posts = [
        "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7448048658203246593?collapsed=1",
        "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7446923408887623680?collapsed=1",
        "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7444498100595036160?collapsed=1",
        "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7443294682798997505?collapsed=1",
        "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7442938030270844928?collapsed=1"
    ];

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-4">
                
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 text-sm font-bold mb-4">
                            <Linkedin size={16} /> Latest Insights
                        </div>
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Balakrishnan's Industry Updates</h2>
                        <p className="text-slate-600 text-lg">
                            Expert perspectives on Behavioral Health RCM, AR Recovery, and Healthcare Compliance. Follow for weekly deep-dives.
                        </p>
                    </div>
                    <div>
                        <a 
                            href="https://www.linkedin.com/in/balakrishnan-gunasekaran-222207363/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0a66c2] text-white rounded-xl font-bold hover:bg-[#004182] transition-colors shadow-lg shadow-blue-500/20"
                        >
                            Follow on LinkedIn <ExternalLink size={18} />
                        </a>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    
                    {/* Profile Summary Card */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/4 w-full sticky top-32"
                    >
                        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
                            
                            <div className="text-center mb-8 relative z-10">
                                <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-blue-500/30 bg-slate-800 flex items-center justify-center relative mx-auto mb-4">
                                    <Linkedin size={40} className="text-white opacity-20" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900">Grace Finnovation</h3>
                                    <p className="text-blue-600 text-xs font-medium uppercase tracking-wider">LinkedIn Updates</p>
                                </div>
                            </div>

                            <p className="text-slate-500 text-xs leading-relaxed mb-6 relative z-10 text-center">
                                Join our network for professional industry insights.
                            </p>

                            <div className="space-y-4 mb-8 pt-6 border-t border-slate-50 relative z-10">
                                <div className="flex items-center gap-3 text-sm text-slate-600">
                                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                                        <MessageSquare size={16} className="text-blue-600" />
                                    </div>
                                    <span>Weekly updates</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-slate-600">
                                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                                        <Linkedin size={16} className="text-blue-600" />
                                    </div>
                                    <span>Founder @ Grace Finnovation</span>
                                </div>
                            </div>

                            <p className="text-slate-500 text-xs text-center leading-relaxed">
                                Join 2,000+ healthcare professionals receiving these insights weekly.
                            </p>
                        </div>
                    </motion.div>

                    {/* Feed Area - Grid of Iframes */}
                    <div className="lg:w-3/4 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {posts.map((url, index) => (
                                <motion.div 
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white p-4 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden"
                                >
                                    <div className="relative w-full rounded-2xl overflow-hidden bg-slate-50">
                                        <iframe 
                                            src={url} 
                                            height="600" 
                                            width="100%" 
                                            frameBorder="0" 
                                            allowFullScreen={true} 
                                            title="Embedded post"
                                            className="w-full grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                                        ></iframe>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        
                        <div className="mt-16 text-center">
                            <p className="text-slate-500 mb-6">Want to see more industry insights?</p>
                            <a 
                                href="https://www.linkedin.com/in/balakrishnan-gunasekaran-222207363/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-[#0a66c2] font-bold hover:underline group"
                            >
                                View all posts on my LinkedIn Profile 
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Background elements */}
            <div className="absolute top-[20%] right-[-5%] w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[120px] -z-10"></div>
            <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-cyan-100/30 rounded-full blur-[100px] -z-10"></div>
        </section>
    );
}

function ArrowRight({ size, className }: { size: number; className?: string }) {
    return (
        <svg 
            width={size} 
            height={size} 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className={className}
        >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
        </svg>
    );
}
