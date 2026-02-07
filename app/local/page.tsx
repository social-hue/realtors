"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Maximize2, Tag, LocateIcon, FolderKanban, TrendingUp, Ruler } from "lucide-react";
import InquiryModal from "../components/InquiryModal";
import Chart from "../components/Chart";
import Link from "next/link";
import WhyChooseUs from "../components/WhyChooseUs";
import {
    Building2,
    Users,
    Briefcase
} from "lucide-react";

const stats = [
    {
        label: "Sq. Ft. Delivered",
        value: "2M+",
        icon: <Ruler className="w-6 h-6" />,
        description: "Premium spaces"
    },
    {
        label: "Happy Investors",
        value: "100+",
        icon: <Users className="w-6 h-6" />,
        description: "Trust gained"
    },
    {
        label: "Projects",
        value: "8",
        icon: <Building2 className="w-6 h-6" />,
        description: "Completed"
    },
    {
        label: "Appreciation",
        value: "150%",
        icon: <TrendingUp className="w-6 h-6" />,
        description: "ROI Average"
    },
];

const plots = [
    { size: "200 Sq. Yards", price: "₹15.5 Lacs", id: 1, image: "/compressed_airport.webp", location: "Dholera" },
    { size: "350 Sq. Yards", price: "₹26.8 Lacs", id: 2, image: "/compressed_fake.webp", location: "Gujarat" },
    { size: "500 Sq. Yards", price: "₹38.0 Lacs", id: 3, image: "/compressed_plot-lands.webp", location: "Dholna" },
    { size: "800 Sq. Yards", price: "₹61.2 Lacs", id: 4, image: "/dholeracity.png", location: "Dholera" },
    { size: "1000 Sq. Yards", price: "₹75 Lacs", id: 5, image: "/compressed_airport.webp", location: "Gujarat" },
    { size: "1500 Sq. Yards", price: "₹1.1 Cr", id: 6, image: "/compressed_fake.webp", location: "Dholna" },
    { size: "2000 Sq. Yards", price: "₹1.5 Cr", id: 7, image: "/compressed_plot-lands.webp", location: "Dholera" },
];

export default function Local() {
    const [showAll, setShowAll] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const visiblePlots = showAll ? plots : plots.slice(0, 4);

    const texts = ["Real Estate", "In Dholera", "Gujarat"];
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((prev) => (prev + 1) % texts.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (<>
        <main className="min-h-screen bg-neutral-50">

            {/* --- Aesthetic Hero Section --- */}
            <section className="relative h-[75vh] md:h-[65vh] w-full flex items-center justify-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                    <Image
                        src="/landscape.jpg"
                        alt="Premium Investment Landscape"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                {/* Hero Content */}
                <div className="relative z-10 text-center px-6 max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-4 border border-amber-400/50 rounded-full text-amber-400 text-xs font-bold tracking-[0.3em] uppercase mb-4 bg-black/30 backdrop-blur-md">
                            Elite Opportunities
                        </span>
                        <h1 className="text-3xl md:text-5xl font-medium text-white mb-4 leading-tight heading">
                            Investment. Plots. <br />
                            <div className="relative inline-block w-full md:w-auto md:min-w-[400px] h-[1.2em] overflow-hidden align-bottom">
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={texts[textIndex]}
                                        initial={{ y: "-100%", opacity: 0 }}
                                        animate={{ y: "0%", opacity: 1 }}
                                        exit={{ y: "100%", opacity: 0 }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        className="inline-block italic font-light whitespace-normal md:whitespace-nowrap"
                                    >
                                        {texts[textIndex]}
                                    </motion.span>
                                </AnimatePresence>
                            </div>
                        </h1>
                        <p className="text-base md:text-lg text-neutral-200 mb-6 max-w-2xl mx-auto font-light leading-relaxed">
                            Discover unparalleled value in India's most promising landscapes.
                            Secure your future with meticulously planned residential and commercial plots.
                        </p>
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={() => document.getElementById('plots-section')?.scrollIntoView({ behavior: 'smooth' })}
                            className="cursor-pointer group relative inline-flex items-center gap-2 px-7 py-3 bg-amber-600 text-white rounded-lg font-medium overflow-hidden transition-all hover:bg-amber-700"
                        >
                            Explore All
                            <ArrowRight className="w-5 h-5" />
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            {/* --- Available Plot Sizes Section --- */}
            <section id="plots-section" className="py-10 px-6 max-w-7xl mx-auto">
                <div className="text-left mb-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-medium text-neutral-900 mb-3"
                    >
                        Available Plot Sizes <ArrowRight className="inline-block w-6 h-6" />
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-neutral-500 max-w-xl"
                    >
                        Choose from a variety of plot sizes tailored to your investment goals and lifestyle needs.
                    </motion.p>
                </div>

                {/* Card Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <AnimatePresence mode="popLayout">
                        {visiblePlots.map((plot, index) => (
                            <motion.div
                                key={plot.id}
                                layout
                                initial={{ opacity: 0, scale: 1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 border border-neutral-100 flex flex-col h-full"
                            >
                                {/* Image Placeholder */}
                                <div className="relative h-50 bg-neutral-200 overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                                        <Image
                                            src={plot.image}
                                            alt={plot.size}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                            onError={(e) => {
                                                // Fallback for missing images
                                                const target = e.target as HTMLImageElement;
                                                target.src = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000&auto=format&fit=crop";
                                            }}
                                        />
                                    </div>
                                    <div className="absolute top-3 left-3">
                                        <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold text-amber-700 uppercase tracking-widest shadow-sm">
                                            Residential
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-3 flex flex-col flex-grow">
                                    <div className="flex flex-row justify-between">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Maximize2 className="w-4 h-4 text-amber-600" />
                                            <h3 className="text-md font-medium text-neutral-800">{plot.size}</h3>
                                        </div>

                                        <div className="flex items-center gap-2 mb-2">
                                            <Tag className="w-4 h-4 text-emerald-600" />
                                            <p className="text-md font-semibold text-neutral-900">{plot.price}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-between">
                                        <div className="flex items-center gap-2 mb-2">
                                            <LocateIcon className="w-4 h-4 text-amber-600" />
                                            <h3 className="text-md font-medium text-neutral-800">{plot.location}</h3>
                                        </div>

                                        <div className="flex items-center gap-2 mb-2">
                                            <a href="/localite">
                                                <p className="text-md font-semibold text-neutral-800">View More</p>
                                            </a>
                                        </div>
                                    </div>
                                    {/* <div className="mt-auto">
                                        <button
                                            onClick={() => setIsModalOpen(true)}
                                            className="w-full inline-flex items-center justify-center gap-2 px-6 py-2 bg-neutral-900 text-white rounded-md hover:bg-neutral-800 transition-colors duration-300 font-medium group/btn"
                                        >
                                            Inquire Now
                                            <Info className="w-3 h-3 opacity-70 group-hover/btn:translate-x-0.1 transition-transform" />
                                        </button>
                                    </div> */}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Toggle Button */}
                <div className="mt-10 text-center">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="inline-flex items-center gap-2 px-10 py-3 border-1 border-neutral-900 text-sm text-neutral-900 rounded-full cursor-pointer font-medium hover:bg-neutral-900 hover:text-white transition-all duration-300 active:scale-95"
                    >
                        {showAll ? "Show Less" : "Show More"}
                    </button>
                </div>

            </section>

            {/* --- Inquiry Modal Integration --- */}
            <InquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </main>

        <section id="graph-chart" className="py-12 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-8 items-center lg:items-start">
            <div className="w-full lg:w-[60%] animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-medium text-slate-900 leading-tight mb-5">
                    Explore Latest Project <br />
                    <span className="text-amber-600">
                        Dholera Vrindavan City
                    </span>
                </h2>

                <p className="text-slate-600 leading-relaxed mb-5 text-sm md:text-base">
                    Dholera Vrindavan City is a thoughtfully planned residential plotting
                    project located within the Dholera Special Investment Region (SIR).
                    Designed for long-term growth and peaceful living, the project
                    offers clear-title plots, modern infrastructure, and excellent
                    connectivity to upcoming industrial and civic developments.
                </p>

                <ul className="space-y-3 text-slate-700 mb-5">
                    {[
                        "NA & NOC approved residential plots",
                        "Located inside Dholera SIR growth corridor",
                        "Excellent future appreciation potential"
                    ].map((text, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <span className="mt-1.5 w-2 h-2 bg-amber-600 rounded-full flex-shrink-0" />
                            <span className="text-sm md:text-base">{text}</span>
                        </li>
                    ))}
                </ul>

                <div className="flex flex-wrap gap-4">
                    <Link
                        href="/dholera-plan.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-none inline-flex items-center justify-center px-8 py-3 bg-slate-900 text-white rounded-md hover:bg-slate-800 transition shadow-lg shadow-slate-200"
                    >
                        View Project
                    </Link>

                    <Link
                        href="https://wa.me/917838697921"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-none inline-flex items-center justify-center px-8 py-3 border border-slate-300 text-slate-800 rounded-md hover:border-slate-900 hover:text-slate-900 transition"
                    >
                        Inquire Now
                    </Link>
                </div>
            </div>

            <div className="w-full lg:w-[40%] mt-4 md:mt-8 lg:mt-0">
                <div className="bg-white md:p-2 rounded-2xl shadow-xl shadow-slate-100 border border-slate-50">
                    <Chart />
                </div>
            </div>
        </section>

        <section className="bg-stone-50 pt-8 relative overflow-hidden">
            {/* Decorative Background Element - Subtle/Elegant */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-200 to-transparent opacity-50"></div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
                    {stats.map((stat, idx) => (
                        <div
                            key={idx}
                            className={`
                group relative flex flex-col items-center p-2 text-center transition-all duration-300
                /* Add vertical dividers on large screens only */
                ${idx !== stats.length - 1 ? 'lg:border-r border-stone-200' : ''}
           `}        
              >
                            {/* Icon Container with subtle animation on hover */}
                            <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-full bg-white border border-stone-100 shadow-sm text-amber-700 group-hover:scale-110 group-hover:bg-amber-50 group-hover:border-amber-100 transition-all duration-300 ease-out">
                                {stat.icon}
                            </div>

                            {/* Metric Value */}
                            <div className="mb-2">
                                <span className="text-4xl font-serif font-medium text-stone-900 tracking-tight">
                                    {stat.value}
                                </span>
                            </div>

                            {/* Label */}
                            <div className="text-sm font-semibold uppercase tracking-widest text-stone-500 mb-1">
                                {stat.label}
                            </div>

                            {/* Optional: Tiny sub-text for added context/elegance */}
                            <div className="text-xs font-serif italic text-stone-400 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                {stat.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>

        <section>
            <WhyChooseUs />
        </section>

    </>
    );
}