"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Maximize2, Tag, Info } from "lucide-react";
import InquiryModal from "../components/InquiryModal";

const plots = [
    { size: "200 Sq. Yards", price: "₹15.5 Lacs", id: 1, image: "/compressed_airport.webp" },
    { size: "350 Sq. Yards", price: "₹26.8 Lacs", id: 2, image: "/compressed_fake.webp" },
    { size: "500 Sq. Yards", price: "₹38.0 Lacs", id: 3, image: "/compressed_plot-lands.webp" },
    { size: "800 Sq. Yards", price: "₹61.2 Lacs", id: 4, image: "/dholeracity.png" },
    { size: "1000 Sq. Yards", price: "₹75.0 Lacs", id: 5, image: "/compressed_airport.webp" },
    { size: "1500 Sq. Yards", price: "₹1.1 Cr", id: 6, image: "/compressed_fake.webp" },
    { size: "2000 Sq. Yards", price: "₹1.5 Cr", id: 7, image: "/compressed_plot-lands.webp" },
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

    return (
        <main className="min-h-screen bg-neutral-50">
            {/* --- Aesthetic Hero Section --- */}
            <section className="relative h-[65vh] w-full flex items-center justify-center overflow-hidden">
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
                        <h1 className="text-5xl font-medium text-white mb-4 leading-tight heading">
                            Investment. Plots. <br />
                            <div className="relative inline-block min-w-2xl h-[1.2em] overflow-hidden align-bottom">
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={texts[textIndex]}
                                        initial={{ y: "-100%", opacity: 0 }}
                                        animate={{ y: "0%", opacity: 1 }}
                                        exit={{ y: "100%", opacity: 0 }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        className="inline-block italic font-light whitespace-nowrap"
                                    >
                                        {texts[textIndex]}
                                    </motion.span>
                                </AnimatePresence>
                            </div>
                        </h1>
                        <p className="text-lg text-neutral-200 mb-6 max-w-2xl mx-auto font-light leading-relaxed">
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
                                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 border border-neutral-100 flex flex-col h-full"
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
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold text-amber-700 uppercase tracking-widest shadow-sm">
                                            Residential
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-3 flex flex-col flex-grow">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Maximize2 className="w-4 h-4 text-amber-600" />
                                        <h3 className="text-md font-medium text-neutral-800">{plot.size}</h3>
                                    </div>

                                    <div className="flex items-center gap-2 mb-2">
                                        <Tag className="w-4 h-4 text-emerald-600" />
                                        <p className="text-md font-semibold text-neutral-900">{plot.price}</p>
                                    </div>

                                    <div className="mt-auto">
                                        <button
                                            onClick={() => setIsModalOpen(true)}
                                            className="w-full inline-flex items-center justify-center gap-2 px-6 py-2 bg-neutral-900 text-white rounded-md hover:bg-neutral-800 transition-colors duration-300 font-medium group/btn"
                                        >
                                            Inquire Now
                                            <Info className="w-3 h-3 opacity-70 group-hover/btn:translate-x-0.1 transition-transform" />
                                        </button>
                                    </div>
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
    );
}