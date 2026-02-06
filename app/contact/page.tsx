"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState, FormEvent } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        specialty: "General Practice",
        message: ""
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const subject = `New Inquiry from ${formData.name} - ${formData.specialty}`;
        const body = `Name: ${formData.name}%0D%0APhone: ${formData.phone}%0D%0AEmail: ${formData.email}%0D%0ASpecialty: ${formData.specialty}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
        window.location.href = `mailto:sales@gracefinnovationmedicalbilling.com?subject=${subject}&body=${body}`;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <main className="pt-32 bg-slate-50">
            {/* Dark Hero Section */}
            <section className="bg-[#0f172a] relative overflow-hidden -mt-32 pt-48 pb-32 mb-12 rounded-b-[3rem]">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6"
                    >
                        Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Us</span>
                    </motion.h1>
                    <p className="text-xl text-slate-300 max-w-xl mx-auto">
                        Ready to optimize your revenue? We're here to help.
                    </p>
                </div>
            </section>

            <section className="container mx-auto px-4 pb-24 -mt-32 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
                            <h3 className="text-2xl font-bold text-slate-800 mb-6">Get In Touch</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-cyan-500/10 p-3 rounded-lg text-cyan-600">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800">Headquarters</h4>
                                        <p className="text-slate-600">D.No.1288/2, Trichy Road,<br />Race Course, Coimbatore-641018</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-cyan-500/10 p-3 rounded-lg text-cyan-600">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800">Phone</h4>
                                        <a href="tel:+919629991085" className="text-slate-600 hover:text-cyan-600 block transition">+91 9629991085</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-cyan-500/10 p-3 rounded-lg text-cyan-600">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800">Email</h4>
                                        <a href="mailto:sales@gracefinnovationmedicalbilling.com" className="text-slate-600 hover:text-cyan-600 break-all transition">sales@gracefinnovationmedicalbilling.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white p-8 rounded-2xl shadow-2xl border border-slate-100"
                    >
                        <h3 className="text-2xl font-bold text-slate-800 mb-6 font-Heading">Send us a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition text-slate-900"
                                        placeholder="Your Name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition text-slate-900"
                                        placeholder="Phone Number"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition text-slate-900"
                                    placeholder="email@example.com"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Specialty</label>
                                <select
                                    name="specialty"
                                    value={formData.specialty}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition text-slate-900"
                                >
                                    <option>General Practice</option>
                                    <option>Cardiology</option>
                                    <option>Dermatology</option>
                                    <option>Behavioral Health</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                                <textarea
                                    name="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition text-slate-900"
                                    placeholder="How can we help?"
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold py-4 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
