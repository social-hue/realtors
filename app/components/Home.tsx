// "use client";

// import { Play, Menu, X, MapPin, ArrowRight, Phone, Mail, Instagram, Linkedin, Facebook, CheckCircle2 } from 'lucide-react';
// // import { useEffect, useState } from 'react';
// import ExploreProject from './ExploreProject';
// import WhyChooseUs from './WhyChooseUs';
// import NewsTicker from './NewsTicker';

// const Home = () => {
//   return (
//     <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-amber-500 selection:text-white">

//       <main className="relative h-[75vh] flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 bg-slate-900">                                    
//          <video
//             className="absolute inset-0 w-full h-full object-cover"   
//             src="/vid10.mp4"  
//             autoPlay    
//             loop        
//             muted       
//             playsInline 
//           />
//           <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 via-slate-900/60 to-transparent" />
//         </div>
//         {/* Abstract Background Image/Overlay */}
//         <div className="relative z-10 text-center max-w-4xl px-6 animate-fade-in-up">
//           <span className="inline-block mt-4 py-1 px-3 border border-amber-500/50 rounded-full text-amber-400 text-xs font-bold tracking-[0.2em] uppercase mb-6 bg-amber-900/20 backdrop-blur-sm">
//            Real Estate • Trust • Growth
//           </span>
//           <h1 className="text-4xl md:text-6xl font-medium text-white mb-5">
//             Invest in the <br />
//             <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-200 to-amber-500">
//               Future of India
//             </span>
//           </h1>
//           <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
//             Premium industrial and residential land parcels in the heart of Dholera SIR.
//             Secure your legacy in the next global economic hub.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
//             <a href="/projects">
//             <button className="w-fit px-12 py-3 bg-amber-600 text-white font-medium rounded-sm hover:bg-amber-700 transition-all flex items-center justify-center gap-2">
//               Explore <ArrowRight className="w-4 h-4" />
//             </button>
//             </a>
//             {/* <a href="/dholera-plan.pdf"
//               target="_blank"
//               rel="noopener noreferrer">
//               <button className="px-8 py-4 bg-transparent border border-slate-600 text-white font-medium rounded-sm hover:bg-white/5 transition-all">
//                 Download Plan
//               </button>
//             </a> */}
//           </div>

//         </div>
//       </main>       

//       <div className="px-4 flex items-center justify-center">
//         <NewsTicker />
//       </div>                                                     

//       <ExploreProject />
//       {/* --- 9:16 Video Showcase Section --- */}

//       {/* --- Stats Section --- */}
//       <section className="bg-slate-900 py-10 border-y border-slate-800">
//         <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
//           {[
//             { label: "Sq. Ft. Delivered", value: "2M+" },
//             { label: "Happy Investors", value: "100+" },
//             { label: "Projects", value: "8" },
//             { label: "Appreciation", value: "150%" },
//           ].map((stat, idx) => (
//             <div key={idx} className="space-y-2">
//               <div className="text-3xl md:text-5xl font-serif font-bold text-white">{stat.value}</div>
//               <div className="text-sm uppercase tracking-widest text-slate-400">{stat.label}</div>
//             </div>
//           ))}
//         </div>
//       </section>

//       <WhyChooseUs />
//     </div>
//   );
// };

// export default Home;

"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Maximize2, Tag, LocateIcon, FolderKanban, TrendingUp, Ruler } from "lucide-react";
// import InquiryModal from "../components/InquiryModal";
// import Chart from "../components/Chart";
import Link from "next/link";
// import WhyChooseUs from "../components/WhyChooseUs";
import {
    Building2,
    Users,
    Briefcase
} from "lucide-react";
import NewsTicker from "../components/NewsTicker";
import Services from "../components/Services";
import { q } from "framer-motion/client";
// import About from "../components/About";
// import FeaturedProject from "../components/FeaturedProject";

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
    const [flipKey, setFlipKey] = useState(0);
    const [isMd, setIsMd] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((prev) => (prev + 1) % texts.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const mq = window.matchMedia("(min-width: 768px)");
        setIsMd(mq.matches);
        const handler = (e: MediaQueryListEvent) => setIsMd(e.matches);
        mq.addEventListener("change", handler);
        return () => mq.removeEventListener("change", handler);
    }, []);

    useEffect(() => {
        if (!isMd) return;
        const flipInterval = setInterval(() => {
            setFlipKey((prev) => prev + 1);
        }, 5000);
        return () => clearInterval(flipInterval);
    }, [isMd]);

    return (
        <>
            <main className="bg-neutral-50 min-h-screen">

                {/* --- Aesthetic Hero Section --- */}
                <section className="relative h-[75vh] md:h-[76vh] w-full flex items-center justify-center overflow-hidden">
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0">
                        <video src="/vid-2.mp4" autoPlay loop muted className="h-full w-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />
                    </div>

                    {/* Hero Content */}
                    <div className="relative z-10 text-center px-6 max-w-5xl">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span
                                className="inline-block py-1 px-4 md:border md:border-amber-400/50 rounded-full text-amber-400 text-xs font-bold tracking-[0.3em] uppercase mb-4 md:bg-black/30 md:backdrop-blur-md"
                                style={{ perspective: "600px" }}
                            >
                                {isMd ? (
                                    "Elite Opportunity in India's First Greenfield Smart City - Dholera".split("").map((char, i) => (
                                        <motion.span
                                            key={`${flipKey}-${i}`}
                                            className="inline-block"
                                            style={{ transformOrigin: "top center" }}
                                            initial={{ opacity: 0, rotateX: -90 }}
                                            animate={{ opacity: 1, rotateX: 0 }}
                                            transition={{
                                                delay: i * 0.03,
                                                duration: 0.4,
                                                ease: [0.25, 0.46, 0.45, 0.94],
                                            }}
                                        >
                                            {char === " " ? "\u00A0" : char}
                                        </motion.span>
                                    ))
                                ) : (
                                    "Elite Opportunity in India's First Greenfield Smart City - Dholera"
                                )}
                            </span>
                            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-4 leading-tight tracking-wider">
                                Umang Realtors <br />
                                {/* <div className="relative inline-block w-full md:w-auto md:min-w-[400px] h-[1.2em] overflow-hidden align-bottom">
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
                            </div> */}
                            </h1>
                            <p className="text-md text-neutral-200 mb-6 max-w-2xl mx-auto font-light leading-relaxed">
                                One of India&apos;s Largest Property Consultants & Brokers <br />
                                <span className="hidden md:block">
                                    Connecting people with the right properties through expertise, technology, and personalized service.
                                </span>
                            </p>
                            <Link href="/projects">
                                <motion.button
                                    whileTap={{ scale: 0.95 }}
                                    className="cursor-pointer group relative inline-flex items-center gap-2 px-7 py-3 bg-amber-600 text-white rounded-lg font-medium overflow-hidden transition-all hover:bg-amber-700"
                                >
                                    Explore
                                    <ArrowRight className="w-5 h-5" />
                                </motion.button>
                            </Link>
                        </motion.div>
                    </div>
                </section>

                <NewsTicker />

                <section id="primary-section" className="pt-10 max-w-6xl mx-6 lg:mx-8 xl:mx-auto flex flex-col lg:flex-row lg:pb-4 lg:gap-10 xl:gap-12 items-center lg:items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                        className="w-full lg:w-[55%] animate-fade-in">
                        <h2 className="font-bold tracking-wider uppercase text-sm text-amber-600 mb-2">
                            Why Choose Us ?<br />
                        </h2>
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                            We are Offering The Best Real Estate Property
                        </h2>
                        <p className="text-slate-600 leading-relaxed mb-5 text-sm md:text-base">
                            Founded in 2010 and headquartered in Delhi, India, Umang Realtors is one of the country’s upcoming independent real estate service providers. We specialize in the sale, purchase, brand leasing, and property investment management of commercial as well as residential properties across selected parts of India.
                        </p>
                        <p className="text-slate-600 leading-relaxed mb-5 text-sm md:text-base">We aim to bring together the best of both worlds to deliver a premium investment experience. Our business strategies are carefully tailored to meet each client’s unique requirements. To address every property need, we are backed by a dedicated team of professionals. From back-end operations and CRM management to comprehensive after-sales support, every process is seamlessly aligned—making Umang Realtors a leading real estate consultant in India.</p>

                    </motion.div>

                    <div className="w-full lg:w-[40%] flex items-center justify-center">
                        {/* MD Layout: Two 4:3 images */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2 }}
                            className="mt-6 hidden md:flex lg:hidden w-full gap-6">
                            <div className="w-1/2 aspect-[4/3] bg-slate-200 rounded-lg overflow-hidden relative">
                                <img src="/compressed_smart-city.webp" alt="akt" className="w-full h-full object-cover" />
                            </div>
                            <div className="w-1/2 aspect-[4/3] bg-slate-200 rounded-lg overflow-hidden relative">
                                <img src="/investment.png" alt="alt" className="w-full h-full object-cover" />
                            </div>
                        </motion.div>

                        {/* Default Layout (Mobile & Large Desktop) */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2 }}
                            className="block md:hidden lg:block relative w-full">
                            <Image
                                src="/blob-4.png"
                                alt="Why Choose Us"
                                width={450}
                                height={450}
                                className="rounded-md w-full h-auto object-cover"
                            />
                        </motion.div>
                    </div>
                </section>

            </main>

            <Services />

            {/* --- Cityscape CTA Section --- */}
            <section className="relative flex justify-center items-center w-full h-[60vh] md:h-[65vh] overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src="/cityscape.jpg"
                        alt="Dholera Cityscape"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40" />
                </div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-24 md:py-32 lg:py-40"
                >
                    <h2
                        className="text-2xl md:text-4xl font-bold text-white leading-snug tracking-wide max-w-5xl"
                    >
                        Real Estate | Commercial Properties | Plots
                        <br />
                        <span className="text-amber-400">in Dholera, India&apos;s Future Smart City</span>
                    </h2>

                    <p className="mt-4 text-neutral-300 text-md md:text-base max-w-xl font-light">
                        Discover premium investment opportunities in India&apos;s first greenfield smart city.
                    </p>

                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="cursor-pointer mt-8 inline-flex items-center gap-2 px-7 py-3 hover:bg-amber-700 text-white border-1 border-white hover:border-amber-700 font-light rounded-md shadow-lg transition-colors duration-300"
                    >
                        <a href="tel:+917303789661">
                            Contact Us

                            <ArrowRight className="w-4 h-4 inline-block ml-1 mb-0.5" />
                        </a>
                    </motion.button>
                </motion.div>
            </section>

        </>
    );
}










