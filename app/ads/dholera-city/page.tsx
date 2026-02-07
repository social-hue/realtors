"use client";
import { useState } from "react";
import { motion } from "framer-motion";
// import type { Metadata, Viewport } from "next";   
import Image from "next/image";
import { MapPin, Plane, Train, Building2, FileCheck, Shield, Users, Hotel, TrendingUp, Phone, Calendar, MessageCircle, CheckCircle2, ArrowRight, Sparkles, Loader2 } from "lucide-react";

// True ---------------------------------------------------------------------------------------------------------------->  

const fadeInUp = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function DholeraCity() {
    // Email discount form state
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const [discountCode, setDiscountCode] = useState("");
    const [statusMessage, setStatusMessage] = useState("");

    const handleDiscountSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email.trim()) {
            setStatusMessage("Please enter your email address");
            setSubmitStatus("error");
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus("idle");
        setStatusMessage("");

        try {
            const response = await fetch("/api/dholera-discount", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: email.trim() }),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus("success");
                setDiscountCode(data.discountCode);
                setStatusMessage(data.message);
                if (!data.alreadyExists) {
                    setEmail(""); // Clear email only for new submissions
                }
            } else if (response.status === 429) {
                setSubmitStatus("error");
                setStatusMessage(data.message || "Too many requests. Please try again later.");
            } else {
                setSubmitStatus("error");
                setStatusMessage(data.message || "Something went wrong");
            }
        } catch (error) {
            setSubmitStatus("error");
            setStatusMessage("Network error. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen">

            {/* Hero Section */}
            <section className="relative md:py-10 py-8 mb-10">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 md:gap-16 items-center">

                    {/* LEFT — TEXT CONTENT */}
                    <div className="max-w-4xl">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={staggerContainer}
                        >
                            <motion.h1
                                variants={fadeInUp}
                                className="text-3xl font-semibold text-zinc-800 mb-6 leading-snug tracking-wide"
                            >
                                Own Residential Plots in{" "}
                                <span className="">
                                    Dholera Gujarat Smart City
                                </span>{" "}
                                at Just ₹11,000/Sq. Yard
                            </motion.h1>

                            <motion.div variants={fadeInUp} className="space-y-2 text-md text-slate-800 mb-6">
                                <p className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-zinc-800 rounded-full" />
                                    Government-backed development
                                </p>
                                <p className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-zinc-800 rounded-full" />
                                    High future appreciation
                                </p>
                                <p className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-zinc-800 rounded-full" />
                                    Limited inventory available
                                </p>
                            </motion.div>

                            <motion.p variants={fadeInUp} className="text-slate-800 mb-6 text-base md:text-md">
                                Secure your plot in Vrindavan City Dholera before prices move up.
                            </motion.p>

                            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLScCZ4gBORMpf-dEYejXNUaIJ2KhXEAy___O7-jler97Ioe4OA/viewform" target="_blank" rel="noopener noreferrer">
                                    <button className="cursor-pointer group flex items-center bg-orange-500 gap-2 text-white px-6 py-3 rounded-lg font-semibold">
                                        <Phone className="w-5 h-5" />
                                        Get Price & Plot Availability
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </a>      
                                <a href="https://wa.me/917303789661?text=Hello%20I%20am%20interested%20in%20Vrindavan%20City%20Dholera%20Please%20Share%20Details" target="_blank"
                                    rel="noopener noreferrer">
                                    <button className="cursor-pointer flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold">
                                        <MessageCircle className="w-5 h-5" />
                                        Get Details on WhatsApp
                                    </button>
                                </a>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* RIGHT — IMAGE GRID */}
                    <div className="hidden md:block relative max-w-xl">
                        <div className="grid grid-cols-2 gap-3">

                            <div className="relative h-[220px] rounded-2xl overflow-hidden">
                                <Image src="/compressed_plot-lands.webp" alt="Image 1" fill className="object-cover" />
                            </div>

                            <div className="relative h-[240px] mt-8 rounded-2xl overflow-hidden">
                                <Image src="/compressed_investment.webp" alt="Image 2" fill className="object-cover" />
                            </div>

                            <div className="relative h-[240px] -mt-13 rounded-2xl overflow-hidden">
                                <Image src="/compressed_smart-city.webp" alt="Image 3" fill className="object-cover" />
                            </div>

                            <div className="relative h-[220px] rounded-2xl overflow-hidden">
                                <Image src="/compressed_airport.webp" alt="Image 4" fill className="object-cover" />
                            </div>

                        </div>
                    </div>

                </div>
            </section>

            {/* Location Advantages Section */}
            <section className="pb-16 md:pb-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Image */}
                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 0 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">Prime Connectivity</span>
                            <h2 className="text-3xl font-bold text-slate-800 mt-2 mb-6">
                                Location Advantages
                            </h2>

                            <div className="space-y-1">
                                {[
                                    { icon: MapPin, text: "State Highway", distance: "700 mtr", color: "text-zinc-600" },
                                    { icon: Building2, text: "Ahmedabad Dholera Expressway", distance: "800 mtr", color: "text-zinc-600" },
                                    { icon: Train, text: "Monorail Station", distance: "800 mtr", color: "text-zinc-600" },
                                    { icon: Plane, text: "International Airport", distance: "5 km", color: "text-zinc-600" },
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <div className={`p-2 rounded-xl ${item.color}`}>
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-slate-800">{item.text}</p>
                                        </div>
                                        <span className="text-sm font-bold text-slate-600 bg-white px-3 py-1 rounded-full shadow-sm">{item.distance}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 0 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-xl">
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLScCZ4gBORMpf-dEYejXNUaIJ2KhXEAy___O7-jler97Ioe4OA/viewform" rel="noopener noreferrer" target="_blank">
                                    <Image
                                        src="/compressed_new-map.webp"
                                        alt="Dholera Location Connectivity Map"
                                        width={400}
                                        height={400}
                                        className="w-full h-auto"
                                    />
                                </a>
                            </div>
                            {/* Floating Badge */}
                            <div className="absolute -bottom-3 -right-4 bg-zinc-900 text-white p-2 md:p-3 rounded-xl shadow-xl">
                                <p className="md:text-sm text-xs font-medium">Strategic Location</p>
                                <p className="md:text-sm text-xs font-medium">Excellent Connectivity</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Invest Section */}
            <section className="pb-16 md:pb-20 text-slate-900">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Header */}
                    <div className="max-w-3xl mx-auto text-center mb-10">
                        <span className="text-xs tracking-widest uppercase text-slate-500">
                            Smart Investment
                        </span>

                        <h2 className="mt-4 text-3xl md:text-4xl font-semibold leading-tight">
                            Why Investors Choose Dholera ?
                        </h2>

                        <p className="mt-4 text-slate-600 text-base md:text-lg">
                            A thoughtfully planned residential opportunity within India’s first
                            smart city development corridor.
                        </p>
                    </div>

                    {/* Features */}
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            { title: "NA Plots Near Dholera SIR", icon: MapPin },
                            { title: "Plot Sizes: 250 & 500 Sq. Yards", icon: Building2 },
                            { title: "₹11,000 per Sq. Yard", icon: TrendingUp },
                            { title: "Clear Title & Sale Deed", icon: FileCheck },
                            { title: "Ideal for Investment & Residence", icon: Users },
                            { title: "Government-backed Smart City Zone", icon: Shield },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-4 rounded-xl bg-white p-4 border border-slate-100 hover:border-slate-200 transition"
                            >
                                <div className="mt-1">
                                    <item.icon className="w-5 h-5 text-slate-700" />
                                </div>

                                <h3 className="text-base font-medium text-slate-900 leading-snug">
                                    {item.title}
                                </h3>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-10 text-center">
                        <a href="tel:917303789661">
                            <button className="cursor-pointer inline-flex items-center gap-2 rounded-full bg-slate-900 border border-slate-900 px-8 py-3 text-sm font-medium text-slate-900 hover:text-slate-900 hover:bg-white text-white transition">
                                <Phone className="w-4 h-4" />
                                Schedule a Call
                            </button>
                        </a>
                    </div>

                </div>
            </section>

            <section className="pb-12 md:pb-20">
                <div className="relative overflow-hidden">
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: "url('/promo-bg.png')" }}
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/80 to-amber-900/70" />

                    {/* Content */}
                    <div className="relative z-10 px-6 py-14 text-center">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6 shadow-md">
                            <span className="animate-pulse">🔥</span>
                            <span>LIMITED-TIME OFFER</span>
                        </div>

                        {/* Main Heading */}
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                            Get a Flat <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">₹1,00,000</span> Discount
                        </h2>

                        {/* Sub-heading */}
                        <p className="text-lg md:text-xl text-blue-100/90 mb-3 max-w-2xl mx-auto">
                            Book your plot before <strong className="text-amber-300">10th February, 2026</strong> and unlock this exclusive offer!
                        </p>
                        <p className="text-base text-blue-200/70 mb-8 max-w-xl mx-auto">
                            Enter your email address and we&apos;ll send you a discount code.
                        </p>

                        {/* Email Form - Glassmorphism Card */}
                        <div className="max-w-lg mx-auto backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 md:p-8 shadow-2xl">
                            {submitStatus === "success" ? (
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <CheckCircle2 className="w-8 h-8 text-green-400" />
                                    </div>
                                    <p className="text-white font-semibold mb-2">{statusMessage}</p>
                                    <div className="bg-white/20 rounded-lg px-4 py-3 mt-4">
                                        <p className="text-amber-300 text-sm mb-1">Your Discount Code:</p>
                                        <p className="text-2xl font-bold text-white tracking-wider">{discountCode}</p>
                                    </div>
                                    <p className="text-blue-200/60 text-xs mt-4">
                                        Save this code! Use it while booking your plot.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleDiscountSubmit}>
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <input
                                            type="email"
                                            placeholder="Enter your email address"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            disabled={isSubmitting}
                                            className="flex-1 px-5 py-3.5 rounded-xl bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-amber-400 focus:ring-offset-1 focus:ring-offset-transparent shadow-lg text-base disabled:opacity-50 disabled:cursor-not-allowed"
                                        />
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="px-8 py-3.5 bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold rounded-xl shadow-md transition-all duration-300 hover:scale-101 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="h-5 w-5 animate-spin" />
                                                    <span>Sending...</span>
                                                </>
                                            ) : (
                                                <>
                                                    <span>Send</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                    </svg>
                                                </>
                                            )}
                                        </button>
                                    </div>
                                    {submitStatus === "error" && statusMessage && (
                                        <p className="text-red-300 text-sm mt-3 text-center">
                                            ⚠️ {statusMessage}
                                        </p>
                                    )}
                                    <p className="text-xs text-blue-200/60 mt-3">
                                        🔒 We respect your privacy. No spam, ever.
                                    </p>
                                </form>
                            )}
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-10 text-blue-100/80 text-sm">
                            <div className="flex items-center gap-2">
                                <span className="text-green-400">✓</span>
                                <span>Instant Code Delivery</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-green-400">✓</span>
                                <span>No Hidden Charges</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-green-400">✓</span>
                                <span>100% Genuine</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Legal Transparency Section */}
            <section className="pb-16 md:pb-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 0 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            {/* <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">100% Legal & Verified</span> */}
                            <h2 className="text-3xl font-bold text-slate-800 mt-2 mb-3">
                                Worried About Fake or Illegal Dholera Projects ?
                            </h2>
                            <p className="text-slate-600 mb-6 text-md">
                                Most buyers hesitate because of unclear documents. At Vrindavan City Dholera, we focus on legal transparency first.
                            </p>

                            <div className="space-y-2 mb-6">
                                {[
                                    "NA Approved Plots",
                                    "Due-diligence friendly documentation",
                                    "Clear Title & Registered Sale Deed",
                                    "Proper Layout Planning"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                                            <CheckCircle2 className="w-4 h-4 text-white" />
                                        </div>
                                        <span className="text-slate-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <a href="https://wa.me/917303789661" target="_blank"
                                rel="noopener noreferrer">
                                <button className="cursor-pointer group inline-flex items-center gap-1 bg-teal-600 hover:bg-emerald-600 text-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                                    <FileCheck className="w-5 h-5" />
                                    Get Legal Documents
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </a>
                        </motion.div>

                        {/* Image/Illustration */}
                        <motion.div
                            initial={{ opacity: 0, x: 0 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-xl">
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLScCZ4gBORMpf-dEYejXNUaIJ2KhXEAy___O7-jler97Ioe4OA/viewform" rel="noopener noreferrer" target="_blank">
                                    <Image
                                        src="/compressed_fake.webp"
                                        alt="Dholera Plot Layout"
                                        width={600}
                                        height={400}
                                        className="w-full h-auto object-cover"
                                    />
                                </a>
                            </div>
                            {/* Trust Badge */}
                            <div className="absolute -top-4 -left-4 bg-white p-2 md:p-4 rounded-xl shadow-xl border border-slate-100">
                                <div className="flex items-center gap-2">
                                    <Shield className="w-6 h-6 md:w-8 md:h-8 text-emerald-500" />
                                    <div>
                                        <p className="text-xs text-slate-500">Verified</p>
                                        <p className="text-md font-bold text-slate-800">100% Legal</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Dholera Section */}
            <section className="pb-16 md:pb-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="">

                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 0 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="order-1 lg:order-2"
                        >
                            <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">Future of India</span>
                            <h2 className="text-3xl font-bold text-slate-800 mt-2 mb-4">
                                Why Dholera Is India&apos;s Next Big Investment Destination?
                            </h2>
                            <p className="text-slate-600 mb-8 text-md">
                                Dholera is not a regular township. It is a Government-planned Smart City with massive infrastructure investment.
                            </p>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {[
                                    { text: "Strong government focus & funding", icon: Shield },
                                    { text: "Smart City infrastructure planning", icon: Building2 },
                                    { text: "Near Dholera International Airport", icon: Plane },
                                    { text: "Expressway & Freight Corridor connectivity", icon: Train },
                                    { text: "Excellent future appreciation potential", icon: TrendingUp },
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                        <div className="p-2 bg-orange-100 rounded-lg">
                                            <item.icon className="w-5 h-5 text-orange-600" />
                                        </div>
                                        <span className="text-slate-700 font-medium">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLScCZ4gBORMpf-dEYejXNUaIJ2KhXEAy___O7-jler97Ioe4OA/viewform" target="_blank" rel="noopener noreferrer">
                                <button className="cursor-pointer mt-8 group inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300">
                                    <MapPin className="w-5 h-5" />
                                    View Location & Layout
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Site Visit Section */}
            <section className="pb-16 md:pb-20 relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />

                <div className="max-w-7xl mx-auto px-6 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                            <Calendar className="w-4 h-4" />
                            <span>COMPLIMENTARY VISIT</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                            Free Site Visit Available Across India
                        </h2>
                        <p className="text-xl text-slate-600 mb-2">
                            Travel, Meals & Stay Included
                        </p>
                        <p className="text-slate-500 mb-10">
                            We assist serious buyers with complete site visit support so you can inspect the land, location & surroundings confidently.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6 mb-10">
                            {[
                                { title: "Guided Site Visit", desc: "Personal assistance at every step" },
                                { title: "End-to-End Coordination", desc: "Travel & stay arrangements handled" },
                                { title: "Document Clarity", desc: "Clear explanation of plots & documents" },
                            ].map((item, index) => (
                                <div key={index} className="p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl border border-orange-100">
                                    <h3 className="font-semibold text-slate-800 mb-2">{item.title}</h3>
                                    <p className="text-sm text-slate-600">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLScCZ4gBORMpf-dEYejXNUaIJ2KhXEAy___O7-jler97Ioe4OA/viewform" target="_blank" rel="noopener noreferrer">
                            <button className="group inline-flex items-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold shadow-md">
                                <Calendar className="w-5 h-5" />
                                Request Site Visit Details
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Price Appreciation Section */}

            <section className="relative py-12 bg-slate-900 text-white overflow-hidden">

                {/* Soft ambient glow */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/2 left-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/10 blur-[140px]" />
                </div>

                <div className="relative max-w-6xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-center"
                    >
                        <span className="inline-block text-xs tracking-widest uppercase text-amber-400 mb-3">
                            Limited Opportunity
                        </span>

                        <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-4">
                            Prices Rise Quietly <br className="hidden sm:block" />
                            Before They Rise Suddenly
                        </h2>

                        <p className="text-lg text-slate-400 mb-10">
                            Select plots still available at today’s valuation
                        </p>

                        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto mb-10">

                            <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 px-7 py-5">
                                <p className="text-sm text-slate-400 mb-2">Then</p>
                                <p className="text-3xl font-semibold text-white">₹500</p>
                                <p className="text-sm text-slate-400 mt-1">per sq. yard</p>
                            </div>

                            <div className="rounded-2xl bg-amber-500/10 backdrop-blur-md border border-amber-400/20 px-7 py-5">
                                <p className="text-sm text-amber-300 mb-2">Now</p>
                                <p className="text-3xl font-semibold text-white">
                                    ₹11,000 – ₹18,000
                                </p>
                                <p className="text-sm text-amber-300 mt-1">
                                    20× appreciation
                                </p>
                            </div>

                        </div>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLScCZ4gBORMpf-dEYejXNUaIJ2KhXEAy___O7-jler97Ioe4OA/viewform" target="_blank" rel="noopener noreferrer">
                            <button className="inline-flex items-center gap-2 rounded-xl bg-amber-500/90 px-7 py-3.5 text-sm font-medium text-slate-900 transition-all hover:bg-amber-500 cursor-pointer">
                                View Availability
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                            </button>
                        </a>
                    </motion.div>
                </div>

            </section>


            {/* Final CTA Section */}
            <section className="relative py-16 md:py-20 text-slate-900 overflow-hidden">

                {/* Soft background accents */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/3 left-1/4 h-72 w-72 rounded-full bg-blue-200/40 blur-[120px]" />
                    <div className="absolute bottom-1/3 right-1/4 h-72 w-72 rounded-full bg-indigo-200/40 blur-[120px]" />
                </div>

                <div className="relative max-w-4xl mx-auto px-6 text-center">

                    <motion.div
                        initial={{ opacity: 0, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <span className="inline-block text-xs tracking-widest uppercase text-zinc-600 mb-4">
                            Guided Assistance
                        </span>

                        <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-5">
                            We Help You Navigate <br className="hidden sm:block" />
                            Pricing, Documents & Decisions
                        </h2>

                        <p className="text-lg text-slate-600 mb-8">
                            A clear, informed first step towards a secure land investment
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLScCZ4gBORMpf-dEYejXNUaIJ2KhXEAy___O7-jler97Ioe4OA/viewform" target="_blank" rel="noopener noreferrer">
                                <button className="cursor-pointer group inline-flex items-center gap-2 rounded-xl bg-slate-900 px-7 py-3.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-slate-700 hover:shadow-md">
                                    <Phone className="h-4 w-4" />
                                    Check Availability
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                                </button>
                            </a>
                            <a href="https://wa.me/917303789661" target="_blank" rel="noopener noreferrer">
                                <button className="cursor-pointer group inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-3.5 text-sm font-medium text-slate-700 transition-all hover:border-slate-400 hover:bg-slate-50">
                                    <Calendar className="h-4 w-4" />
                                    Request Site Visit
                                </button>
                            </a>
                        </div>
                    </motion.div>
                </div>
                
            </section>

        </div>
    );
}
