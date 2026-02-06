"use client";

import { motion } from "framer-motion";
import { CheckCircle2, FileText, Activity, DollarSign, ShieldCheck, TrendingUp, Users, ClipboardCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Services() {
    const services = [
        {
            id: "rcm",
            title: "Revenue Cycle Management",
            icon: TrendingUp,
            color: "from-cyan-500 to-blue-500",
            desc: "Our end-to-end RCM services optimize your entire billing lifecycle, from patient registration to final payment. We focus on reducing denials and accelerating cash flow.",
            features: ["Patient Registration", "Eligibility Verification", "Coding & Billing", "Denial Management", "Reporting & Analytics"]
        },
        {
            id: "insurance",
            title: "Insurance Verification",
            icon: ShieldCheck,
            color: "from-violet-500 to-purple-500",
            desc: "Stop denials before they happen. Our team verifies patient insurance coverage, benefits, and authorization requirements prior to appointments.",
            features: ["Coverage Verification", "Benefit Analysis", "Prior Authorization", "Co-pay & Deductible Calculation"]
        },
        {
            id: "coding",
            title: "Medical Coding",
            icon: FileText,
            color: "from-emerald-500 to-teal-500",
            desc: "Our certified coders (AAPC/AHIMA) ensure accurate diagnosis (ICD-10) and procedure (CPT/HCPCS) coding to maximize reimbursement.",
            features: ["ICD-10 & CPT Coding", "Chart Audits", "Compliance Reviews", "Specialty-Specific Coding"]
        },
        {
            id: "charge",
            title: "Charge Entry",
            icon: ClipboardCheck,
            color: "from-blue-500 to-indigo-500",
            desc: "We ensure that every billable service is captured and entered accurately into your practice management system, preventing revenue leakage.",
            features: ["Demographic Entry", "Charge Capture Audit", "Code Validation", "Timely Entry"]
        },
        {
            id: "claims",
            title: "Claims Submission",
            icon: Activity,
            color: "from-orange-500 to-red-500",
            desc: "We scrub all claims for errors before submission, ensuring a cleaner first-pass acceptance rate and faster payments from payers.",
            features: ["Electronic Claims Filing", "Paper Claims Processing", "Clearinghouse Management", "Rejection Handling"]
        },
        {
            id: "payment",
            title: "Payment Posting",
            icon: DollarSign,
            color: "from-pink-500 to-rose-500",
            desc: "Accurate and timely posting of ERAs and EOBs to patient accounts, ensuring your financial records are always up-to-date.",
            features: ["ERA/EOB Posting", "Patient Payment Posting", "Denial Posting", "Reconciliation"]
        },
        {
            id: "ar",
            title: "AR Follow-Up",
            icon: Users,
            color: "from-fuchsia-500 to-pink-500",
            desc: "Our dedicated AR team aggressively pursues unpaid claims, contacting payers to resolve issues and secure the payment you earned.",
            features: ["Aging Analysis", "Payer Follow-up", "Appeals Process", "Patient Collections"]
        },
        {
            id: "denials",
            title: "Denial Management",
            icon: CheckCircle2,
            color: "from-rose-500 to-red-600",
            desc: "We don't just accept denials. We analyze the root cause, correct errors, and resubmit claims to recover lost revenue.",
            features: ["Root Cause Analysis", "Appeal Submission", "Prevention Strategies", "Payer Trends Reporting"]
        }
    ];

    return (
        <main className="bg-slate-50 min-h-screen">
            {/* Header */}
            <section className="relative bg-[#0f172a] text-white pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 to-blue-900/30"></div>
                <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[80%] bg-cyan-500/10 blur-[150px] rounded-full"></div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        Our Solutions
                    </motion.h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        Precision-driven revenue cycle management tailored to your needs.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 -mt-10 relative z-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                id={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 overflow-hidden relative"
                            >
                                {/* Hover Gradient Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                                <div className="flex flex-col sm:flex-row items-start gap-6 relative z-10">
                                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${service.color} text-white shrink-0 shadow-lg`}>
                                        <service.icon size={32} />
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-cyan-600 transition-colors">{service.title}</h2>
                                        <p className="text-slate-600 mb-6 leading-relaxed text-sm lg:text-base">{service.desc}</p>

                                        <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                                            <h4 className="text-xs font-bold uppercase text-slate-400 mb-3 tracking-wider">Key Features</h4>
                                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                                                {service.features.map((feature, idx) => (
                                                    <li key={idx} className="flex items-center text-sm text-slate-600">
                                                        <CheckCircle2 size={14} className="text-cyan-500 mr-2 shrink-0" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-white py-20 border-t border-slate-100">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-8">Ready to Optimize Your Revenue Cycle?</h2>
                    <Link href="/contact" className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all transform hover:-translate-y-1">
                        Get a Custom Quote <ArrowRight className="ml-2" />
                    </Link>
                </div>
            </section>
        </main>
    );
}
