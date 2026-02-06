"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2, TrendingUp, Users, Clock, ShieldCheck, Activity, FileText, DollarSign, Calendar, Play, Brain, HeartHandshake, FileSearch, UserCog, Send, Handshake, RefreshCw } from "lucide-react";
import { useRef, useState, FormEvent } from "react";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const [email, setEmail] = useState("");

  const handleChecklistSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    const subject = `Checklist Request from ${email}`;
    const body = `Please send the Credentialing Checklist for 2026 to: ${email}`;
    window.location.href = `mailto:sales@gracefinnovationmedicalbilling.com?subject=${subject}&body=${body}`;
  };

  const services = [
    { title: "Revenue Cycle Management", desc: "Optimize your entire billing lifecycle for maximum revenue.", icon: TrendingUp, color: "from-cyan-400 to-blue-500" },
    { title: "Insurance Verification", desc: "Eliminate denials with proactive eligibility checks.", icon: ShieldCheck, color: "from-violet-400 to-fuchsia-500" },
    { title: "Medical Coding", desc: "Certified AAPC coders ensuring 99% accuracy.", icon: FileText, color: "from-emerald-400 to-teal-500" },
    { title: "Claims Submission", desc: "Rapid submission with daily denial monitoring.", icon: Activity, color: "from-orange-400 to-red-500" },
    { title: "Payment Posting", desc: "Automated reconciliation for real-time financial clarity.", icon: DollarSign, color: "from-blue-400 to-indigo-500" },
    { title: "Denials Management", desc: "Aggressive appeal strategies to recover lost revenue.", icon: CheckCircle2, color: "from-pink-400 to-rose-500" }
  ];

  return (
    <main className="overflow-x-hidden bg-slate-50" ref={containerRef}>

      {/* Super Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

        {/* Animated Background Gradients */}
        <div className="absolute inset-0 bg-[#0f172a] z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-cyan-500/20 blur-[120px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-violet-600/30 blur-[120px] rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-[40%] left-[30%] w-[30%] h-[30%] bg-blue-600/20 blur-[100px] rounded-full animate-bounce duration-[10000ms]"></div>
          {/* Grid Pattern overlay */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              The Future of Medical Billing
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
              Revenue Cycle <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400">Excellence</span>
            </h1>

            <p className="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed">
              Grace Finnovation transforms healthcare finances with AI-driven RCM solutions. We reduce denials, accelerate cash flow, and let providers focus on what matters—patient care.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                Get Started <ArrowRight size={20} />
              </Link>
              <Link href="/services" className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-bold text-lg hover:bg-white/10 backdrop-blur-md transition-all flex items-center justify-center gap-2">
                <Play size={20} className="fill-white" /> View Solutions
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-8 text-slate-400 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-cyan-400" /> <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-cyan-400" /> <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-cyan-400" /> <span>99% Clean Claims</span>
              </div>
            </div>
          </motion.div>

          {/* Hero Visual - Floating Glass Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative hidden lg:block h-[600px]"
          >
            {/* Abstract DNA/Data Stream Mockup */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                {/* Main Dashboard Card */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-[20%] left-[10%] w-[80%] h-[60%] glass-dark rounded-2xl p-6 shadow-2xl z-20"
                >
                  <div className="flex justify-between items-center mb-6">
                    <div className="h-4 w-32 bg-slate-700/50 rounded-full"></div>
                    <div className="h-8 w-8 bg-cyan-500/20 rounded-full"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-24 w-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl border border-white/5 relative overflow-hidden">
                      {/* Chart Line */}
                      <svg className="absolute bottom-0 left-0 w-full h-12 text-cyan-400 opacity-50" viewBox="0 0 100 20" preserveAspectRatio="none">
                        <path d="M0 20 L20 15 L40 18 L60 5 L80 10 L100 0 V20 H0 Z" fill="currentColor" />
                      </svg>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="h-16 bg-white/5 rounded-lg"></div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Floating Metric Card 1 */}
                <motion.div
                  animate={{ y: [0, 15, 0], x: [0, -5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute top-[10%] right-[5%] w-48 glass-card bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-xl z-30"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-green-500/20 rounded-lg text-green-400">
                      <DollarSign size={20} />
                    </div>
                    <div className="text-xs text-white/70">Revenue Recovered</div>
                  </div>
                  <div className="text-2xl font-bold text-white">$4.2M+</div>
                </motion.div>

                {/* Floating Metric Card 2 */}
                <motion.div
                  animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute bottom-[20%] left-[0%] w-56 glass-card bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-xl z-30"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-violet-500/20 rounded-lg text-violet-400">
                      <Activity size={20} />
                    </div>
                    <div className="text-xs text-white/70">Claim Acceptance Rate</div>
                  </div>
                  <div className="text-2xl font-bold text-white">99.2%</div>
                  <div className="h-1 w-full bg-slate-700 rounded-full mt-2 overflow-hidden">
                    <div className="h-full w-[99%] bg-violet-400"></div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section with Glass Cards */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[80px] -z-10"></div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-2 block">Our Solutions</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">Comprehensive RCM Suite</h2>
            <p className="max-w-2xl mx-auto text-slate-600">End-to-end billing solutions designed to optimize every touchpoint of your financial cycle.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 overflow-hidden"
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color}`}></div>
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${service.color} text-white mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
                <p className="text-slate-500 mb-6 leading-relaxed">{service.desc}</p>
                <Link href="/services" className="inline-flex items-center text-sm font-bold text-slate-700 group-hover:text-cyan-600 transition-colors">
                  Learn More <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Behavioral Health Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white">
        {/* Abstract Neural Network Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-violet-500/30 blur-[150px] rounded-full"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] bg-cyan-500/30 blur-[150px] rounded-full"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">

            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium mb-6 backdrop-blur-md">
                <Brain size={16} className="text-violet-400" />
                Specialized Expertise
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Specialized Behavioral Health <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">Billing & RCM Services</span>
              </h2>

              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Maximize Your Practice Revenue. Minimize Administrative Burnout.<br /><br />
                In the world of Behavioral Health, a single billing error or a missed authorization can result in weeks of lost revenue. At Grace Finnovation, we understand that mental health and substance abuse billing aren't just "extra" specialties—they are complex fields that require dedicated expertise.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div className="glass-dark p-6 rounded-xl border border-violet-500/20">
                  <div className="w-10 h-10 bg-violet-500/20 rounded-lg flex items-center justify-center text-violet-400 mb-4">
                    <Clock size={20} />
                  </div>
                  <h4 className="font-bold text-lg mb-2">Unit-Based Billing</h4>
                  <p className="text-sm text-slate-400">Ensuring every 15, 30, and 60-minute increment is accounted for.</p>
                </div>
                <div className="glass-dark p-6 rounded-xl border border-violet-500/20">
                  <div className="w-10 h-10 bg-fuchsia-500/20 rounded-lg flex items-center justify-center text-fuchsia-400 mb-4">
                    <HeartHandshake size={20} />
                  </div>
                  <h4 className="font-bold text-lg mb-2">Telehealth Compliance</h4>
                  <p className="text-sm text-slate-400">Expert application of Modifier 95 and POS 10/02 for parity.</p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 space-y-6">
              {[
                {
                  title: "Proactive Authorization Management",
                  desc: "We manage the entire lifecycle of Prior Authorizations for IOP, PHP, and psychological testing, tracking expiration dates and unit limits.",
                  icon: ShieldCheck,
                  color: "text-cyan-400",
                  bg: "bg-cyan-500/10"
                },
                {
                  title: "Expert Coding & Audit Defense",
                  desc: "AAPC-certified experts in behavioral health CPT suite: Psychiatric Diagnostic Evaluations (90791), Therapy (90837), and Crisis Intervention.",
                  icon: FileText,
                  color: "text-violet-400",
                  bg: "bg-violet-500/10"
                },
                {
                  title: "Aggressive Denial Management",
                  desc: "We fight 'carve-out' plan rejections and analyze 'Medical Necessity' denials to recover every dollar.",
                  icon: TrendingUp,
                  color: "text-fuchsia-400",
                  bg: "bg-fuchsia-500/10"
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${item.bg} ${item.color}`}>
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Provider Enrollment & Credentialing Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-2 block">The Foundation of Success</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">Provider Enrollment & Credentialing</h2>
            <p className="text-lg text-slate-600">
              Credentialing is investigative, tedious, and mandatory. Without it, you are essentially practicing for free. Our team accelerates your "In-Network" status.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-20">
            {[
              { title: "Gap Analysis & Audit", icon: FileSearch, desc: "We review licenses to identify missing documentation." },
              { title: "CAQH ProView Setup", icon: UserCog, desc: "We build and maintain your universal provider profile." },
              { title: "Application Submission", icon: Send, desc: "Weekly follow-ups to move your application to the top." },
              { title: "Contract Negotiation", icon: Handshake, desc: "We review fee schedules to ensure competitive rates." },
              { title: "Ongoing Maintenance", icon: RefreshCw, desc: "Monthly 'Expiration Report' for licenses and certifications." }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-all text-center group"
              >
                <div className="w-12 h-12 mx-auto bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <step.icon size={24} />
                </div>
                <h3 className="font-bold text-slate-800 mb-2">{step.title}</h3>
                <p className="text-xs text-slate-500">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-slate-900 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 blur-[100px] rounded-full"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6">Why Choose Our Experts?</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center shrink-0"><CheckCircle2 size={16} /></div>
                  <div>
                    <h4 className="font-bold mb-1">Reduce Onboarding Time</h4>
                    <p className="text-slate-400 text-sm">We slash the 90–150 day industry average with "clean" initial applications.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0"><ShieldCheck size={16} /></div>
                  <div>
                    <h4 className="font-bold mb-1">Avoid "Silent" Denials</h4>
                    <p className="text-slate-400 text-sm">Eliminate location mismatches in payer databases.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0"><Brain size={16} /></div>
                  <div>
                    <h4 className="font-bold mb-1">Specialty-Specific Focus</h4>
                    <p className="text-slate-400 text-sm">From Psychiatrists (DEA) to ABA providers (autism certs), we know the rules.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Lead Magnet Form */}
            <div className="relative z-10 bg-white text-slate-900 p-8 rounded-2xl shadow-2xl">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Credentialing Health Check</h3>
                <p className="text-slate-600 text-sm">
                  "Is your CAQH profile up to date? Are you missing out on Medicaid reimbursements? Enter your email for our Credentialing Checklist for 2026."
                </p>
              </div>
              <form onSubmit={handleChecklistSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="doctor@clinic.com"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition bg-slate-50"
                    required
                  />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition shadow-lg shadow-blue-500/20">
                  Get The Checklist
                </button>
                <p className="text-[10px] text-center text-slate-400">By subscribing, you agree to our Privacy Policy.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Proof Section */}
      <section className="py-20 relative bg-[#0f172a] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Providers Supported", value: "200+" },
              { label: "Clean Claim Rate", value: "99%" },
              { label: "Revenue Increase", value: "25%" },
              { label: "Support Available", value: "24/7" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-center p-6 glass-dark rounded-2xl"
              >
                <div className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 mb-2">{stat.value}</div>
                <div className="text-slate-400 text-sm uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600"></div>
        {/* Decorative rings */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] border-[60px] border-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] border-[40px] border-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Practice?</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Join hundreds of US providers who trust Grace Finnovation with their revenue cycle. Zero hidden fees. 100% transparency.
          </p>
          <Link href="/contact" className="inline-block px-10 py-5 bg-white text-blue-600 font-bold rounded-xl text-lg hover:bg-slate-50 transition shadow-2xl hover:scale-105 transform duration-300">
            Get Your Free Audit
          </Link>
        </div>
      </section>

    </main>
  );
}
