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
import NewsTicker from "../components/NewsTicker";
import Services from "../components/Services";
import About from "../components/About";
import FeaturedProject from "../components/FeaturedProject";

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
        <main className="bg-neutral-50 min-h-screen">

            {/* --- Aesthetic Hero Section --- */}
            <section className="relative h-[75vh] md:h-[76vh] w-full flex items-center justify-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                    <video src="/vid-3.mp4" autoPlay loop muted className="h-full w-full object-cover" />

                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
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
                        <h1 className="text-4xl md:text-6xl font-medium text-white mb-4 leading-tight tracking-wider heading">
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
                        <p className="text-md lg:text-lg text-neutral-200 mb-6 max-w-2xl mx-auto font-light leading-relaxed">
                            One of India&apos;s Largest Property Consultants & Brokers <br />
                            Connecting people with the right properties through expertise, technology, and personalized service.
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
                        
            <section className="pt-10 max-w-6xl mx-6 lg:mx-8 xl:mx-auto flex flex-col lg:flex-row lg:pb-4 lg:gap-10 xl:gap-12 items-center lg:items-start">
                <div className="w-full lg:w-[55%] animate-fade-in">
                    <h2 className="font-bold tracking-wider uppercase text-sm text-amber-600 mb-2">
                        Why Choose Us ?<br />
                    </h2>
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">
                        We are Offering The Best Real Estate Property
                    </h2>
                    <p className="text-slate-600 leading-relaxed mb-5 text-sm md:text-base">
                        Founded in 2010 and headquartered in Delhi, India, Umang Realtors is one of the country’s upcoming independent real estate service providers. We specialize in the sale, purchase, brand leasing, and property investment management of commercial as well as residential properties across selected parts of India.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-5 text-sm md:text-base">We aim to bring together the best of both worlds to deliver a premium investment experience. Our business strategies are carefully tailored to meet each client’s unique requirements. To address every property need, we are backed by a dedicated team of professionals. From back-end operations and CRM management to comprehensive after-sales support, every process is seamlessly aligned—making Umang Realtors a leading real estate consultant in India.</p>
                   
                </div>

                <div className="w-full lg:w-[40%] flex items-center justify-center">
                    <Image
                        src="/blob-4.png"
                        alt="Why Choose Us"
                        width={450}
                        height={450}
                        className="rounded-md"
                    />
                </div>
            </section>

        </main>     

        <Services />

            {/* <InquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> */}

        {/* <About /> */}
        <section id="about-founder" className="pt-4 pb-12 lg:pb-0 lg:pt-12 max-w-6xl mx-6 lg:mx-8 xl:mx-auto flex flex-col gap-8 md:flex-row justify-between">
            <div className="w-full  lg:w-[40%]">
                <Image src="/blob-9.png" alt="Why Choose Us" width={360} height={240} className="" />
            </div>
            <div className="w-full lg:w-[60%]">
                <div className="mt-6 lg:mt-12">
                    <h6 className="text-sm font-bold leading-tight text-amber-600 mb-1">About Founder</h6>
                    <h2 className="text-3xl font-bold leading-tight text-slate-900 mb-2">Sanjay Bhardwaj</h2>
                    <p className="text-slate-600">Sanjay is recognized as one of the simple personalities who initiated international standards of event design, hospitality management, wedding creation, and event logistics management, with an eye on investment-based real estate, and has played a pivotal role in managing client services, sales, and communications.</p>
                </div>
            </div>
        </section>


        {/* <section>
            <WhyChooseUs />
        </section> */}

    </>
    );
}