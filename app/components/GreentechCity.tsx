"use client";
             
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    MapPin, Phone, Mail, Download, FileText, CreditCard, HelpCircle,
    ChevronDown, Check, Shield, Building2, TrendingUp, Ruler, Calendar,
    ArrowRight, Star, Landmark, Wallet, BadgeCheck, Clock
} from "lucide-react";                                   
import InquiryModal from "./InquiryModal";

// Project Overview Data
const projectHighlights = [
    { icon: Ruler, label: "Total Area", value: "10+ Acres" },
    { icon: Building2, label: "Plot Sizes", value: "350 Sq. Yards" },
    { icon: TrendingUp, label: "Expected ROI", value: "150%+" },
    { icon: Calendar, label: "Possession", value: "Ready to Build" },
];

const amenities = [
    "24/7 Security & CCTV Surveillance",
    "Wide Internal Roads (40-60 ft)",
    "Underground Electricity",
    "Rainwater Harvesting System",
    "Landscaped Green Zones",
    "Community Center",
    "Children's Play Area",
    "Jogging Track",
    "Street Lighting",
    "Water Supply",
];

const galleryImages = [
    { src: "/compressed_airport.webp", alt: "Dholera International Airport" },
    { src: "/dholeracity.png", alt: "Dholera Smart City" },
    { src: "/compressed_smart-city.webp", alt: "Smart City Infrastructure" },
    { src: "/vrindavancity.jpeg", alt: "Vrindavan City View" },
    { src: "/landscape.jpg", alt: "Project Landscape" },
    { src: "/location.jpeg", alt: "Strategic Location" },
];

const paymentPlans = [
    {
        name: "Full Payment",
        discount: "10% OFF",
        description: "Pay 100% upfront and avail maximum discount",
        benefits: ["Maximum discount", "Priority plot selection", "Free registration assistance"],
        highlight: true,
    },
    {
        name: "Flexi Plan",
        discount: "5% OFF",
        description: "50% booking + 50% within 6 months",
        benefits: ["Flexible payments", "Interest-free installments", "Easy documentation"],
        highlight: false,
    },
    {
        name: "EMI Plan",
        discount: "Bank Tie-ups",
        description: "Pay via bank loan with easy EMI options",
        benefits: ["Partnered with major banks", "Up to 15 year tenure", "Quick loan approval"],
        highlight: false,
    },
];

const faqs = [
    {
        question: "Is the project RERA approved?",
        answer: "Yes, Dholera Vrindavan City is fully RERA approved. All documentation is transparent and legally verified. The RERA registration number is provided upon inquiry."
    },
    {
        question: "What are the plot sizes available?",
        answer: "We offer plots ranging from 200 Sq. Yards to 2000 Sq. Yards. Custom plot sizes can be discussed based on availability and your requirements."
    },
    {
        question: "Is there any construction timeline or deadline?",
        answer: "There is no mandatory construction timeline. You can build whenever you are ready. However, we recommend starting construction within 5 years to maximize your investment."
    },
    {
        question: "What documents are required for booking?",
        answer: "For booking, you need: Aadhar Card, PAN Card, 2 passport-size photographs, and address proof. Additional documents may be required for loan processing."
    },
    {
        question: "Can NRIs invest in this project?",
        answer: "Absolutely! We welcome NRI investors. Special assistance is provided for documentation, power of attorney, and remote transactions."
    },
    {
        question: "What is the appreciation potential?",
        answer: "Based on Dholera SIR's development trajectory and government investments, we project 150-200% appreciation over the next 5-7 years. Past trends in similar zones have shown 10-15% annual growth."
    },
];

const policies = [
    {
        title: "Booking Policy",
        points: [
            "Minimum 10% of plot value as booking amount",
            "Booking amount is adjustable against total price",
            "Allotment letter issued within 7 working days",
            "Plot visit can be arranged before final payment"
        ]
    },
    {
        title: "Cancellation Policy",
        points: [
            "Cancellation within 30 days: 95% refund",
            "Cancellation within 60 days: 90% refund",
            "Cancellation after 60 days: As per terms",
            "Processing time: 30-45 working days"
        ]
    },
    {
        title: "Transfer Policy",
        points: [
            "Plot transfer allowed after full payment",
            "Transfer charges: 2% of plot value",
            "NOC required from the company",
            "New owner verification mandatory"
        ]
    },
];

export default function DholeraProject1() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    return (
        <>
            {/* Blog-Style Header Section */}
            <section className="pt-12 pb-8 bg-white">
                <div className="max-w-6xl lg:mx-auto mx-6">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
                        <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
                        <span>/</span>
                        <Link href="/projects" className="hover:text-amber-600 transition-colors">Projects</Link>
                        <span>/</span>
                        <span className="text-slate-900">Greentech Residency</span>
                    </div>

                    {/* Category & Date */}
                    {/* <div className="flex flex-wrap items-center gap-4 mb-6">
                        <span className="inline-flex items-center gap-2 py-1.5 px-4 bg-amber-100 text-amber-700 text-xs font-bold tracking-wider uppercase rounded-full">
                            <BadgeCheck className="w-3.5 h-3.5" />
                            RERA Approved
                        </span>
                        <span className="text-slate-500 text-sm flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            Updated: January 2026
                        </span>
                    </div> */}

                    {/* Title */}
                    <h1 className="text-3xl md:text-4xl font-medium text-slate-900 mb-6 leading-[1.15]">
                        Greentech Residency
                    </h1>

                    {/* Subtitle / Excerpt */}
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed border-l-4 border-amber-500 pl-5">
                        Premium residential plots offering world-class infrastructure, government-backed development,
                        and unmatched appreciation potential in the heart of Dholera SIR.
                    </p>

                    {/* Author & Actions Row */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-4">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-white font-bold text-lg">
                                UR
                            </div>
                            <div>
                                <div className="font-semibold text-slate-900">Umang Realtors</div>
                                <div className="text-sm text-slate-500">Trusted Real Estate Partner</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <button
                                className="inline-flex items-center gap-2 px-6 py-2.5 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-all text-sm"
                            >
                                <a href="https://wa.me/917303789661">
                                    Book Site Visit
                                </a>
                                <ArrowRight className="w-4 h-4" />
                            </button>
                            <Link
                                href="/dholera-plan.pdf"
                                target="_blank"
                                className="inline-flex items-center gap-2 px-6 py-2.5 border border-slate-300 text-slate-700 rounded-lg font-medium hover:border-slate-900 transition-all text-sm"
                            >
                                <Download className="w-4 h-4" />
                                Brochure
                            </Link>
                        </div>
                    </div>

                </div>
            </section>

            {/* Project Highlights Strip */}
            <section className="bg-slate-900 py-6 border-y border-slate-800">
                <div className="max-w-6xl lg:mx-auto mx-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {projectHighlights.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-4">
                                <div className="p-3 rounded-xl bg-amber-500/10 text-amber-500">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-xs uppercase tracking-wider text-slate-500 mb-1">{item.label}</div>
                                    <div className="text-lg font-semibold text-white">{item.value}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Project Section */}
            <section className="pt-12 md:pt-14">
                <div className="max-w-6xl lg:mx-auto mx-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-4 lg:gap-16 items-center">
                        <div>
                            <span className="text-amber-600 text-sm font-bold uppercase tracking-widest mb-2 block">About The Project</span>
                            <h2 className="text-3xl md:text-4xl font-medium text-slate-900 mb-4 leading-tight">
                                Greentech Residency <br />
                            </h2>

                            <p className="text-slate-600 leading-relaxed mb-6">
                                Positioned in the rapidly transforming growth corridor of Gujarat, this premium residential plotting project near Dholera SIR offers thoughtfully planned plots of approximately 350 sq. yards — ideal for building spacious villas or long-term investment homes. Located close to India’s first Greenfield Smart City, the project benefits from the massive industrial and infrastructural momentum shaping the region into a global manufacturing and technology hub.
                            </p>

                            <p className="text-slate-600 leading-relaxed mb-8">
                                The presence of large-scale industrial clusters, proposed semiconductor fabrication plants, renewable energy parks, and smart utility grids ensures sustained economic activity and employment generation.
                            </p>

                    
                        </div>

                        <div className="relative">
                            <div className="relative rounded-xl overflow-hidden shadow-xl">
                                <Image
                                    src="/greentech-plots.png"
                                    alt="Dholera Master Plan"
                                    width={600}
                                    height={450}
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            {/* <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <span className="text-amber-600 text-sm font-bold uppercase tracking-widest mb-4 block">Gallery</span>
                        <h2 className="text-3xl md:text-4xl font-medium text-slate-900">
                            Explore The Vision
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {galleryImages.map((img, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`relative overflow-hidden rounded-xl group ${idx === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    width={idx === 0 ? 800 : 400}
                                    height={idx === 0 ? 600 : 300}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <span className="text-white font-medium">{img.alt}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* Amenities Section */}
            {/* <section className="py-20 bg-slate-900">
                <div className="max-w-6xl lg:mx-auto mx-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-amber-500 text-sm font-bold uppercase tracking-widest mb-4 block">World-Class Amenities</span>
                            <h2 className="text-3xl md:text-4xl font-medium text-white mb-8 leading-tight">
                                Everything You Need <br />
                                <span className="text-amber-500">For Premium Living</span>
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {amenities.map((amenity, idx) => (
                                    <div key={idx} className="flex items-center gap-3 text-slate-300">
                                        <div className="w-2 h-2 bg-amber-500 rounded-full" />
                                        <span>{amenity}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <Image
                                src="/compressed_smart-city.webp"
                                alt="Smart City Amenities"
                                width={600}
                                height={450}
                                className="rounded-2xl shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section> */}

            {/* Payment Plans Section */}
            {/* <section className="py-20 bg-neutral-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <span className="text-amber-600 text-sm font-bold uppercase tracking-widest mb-4 block">
                            <Wallet className="inline-block w-4 h-4 mr-2" />
                            Payment Options
                        </span>
                        <h2 className="text-3xl md:text-4xl font-medium text-slate-900 mb-4">
                            Flexible Payment Plans
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Choose a payment plan that suits your financial goals. We offer multiple options to make your investment journey smooth and hassle-free.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {paymentPlans.map((plan, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.15 }}
                                className={`relative p-8 rounded-2xl border-2 transition-all duration-300 ${plan.highlight
                                    ? 'bg-slate-900 border-amber-500 text-white shadow-2xl scale-105'
                                    : 'bg-white border-slate-200 hover:border-amber-500/50 hover:shadow-xl'
                                    }`}
                            >
                                {plan.highlight && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                        <span className="bg-amber-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                                            Most Popular
                                        </span>
                                    </div>
                                )}

                                <div className={`text-sm font-bold uppercase tracking-wider mb-3 ${plan.highlight ? 'text-amber-400' : 'text-amber-600'}`}>
                                    {plan.discount}
                                </div>

                                <h3 className={`text-2xl font-semibold mb-3 ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>
                                    {plan.name}
                                </h3>

                                <p className={`mb-6 ${plan.highlight ? 'text-slate-300' : 'text-slate-600'}`}>
                                    {plan.description}
                                </p>

                                <ul className="space-y-3 mb-8">
                                    {plan.benefits.map((benefit, bIdx) => (
                                        <li key={bIdx} className={`flex items-center gap-3 ${plan.highlight ? 'text-slate-200' : 'text-slate-700'}`}>
                                            <Check className={`w-5 h-5 ${plan.highlight ? 'text-amber-400' : 'text-emerald-600'}`} />
                                            <span>{benefit}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className={`w-full py-3 rounded-xl font-semibold transition-all ${plan.highlight
                                        ? 'bg-amber-500 text-white hover:bg-amber-400'
                                        : 'bg-slate-900 text-white hover:bg-slate-800'
                                        }`}
                                >
                                    Get Started
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* Location Section */}
            <section className="py-12 md:py-20 bg-white">
                <div className="max-w-6xl lg:mx-auto mx-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-4 lg:gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="relative rounded-xl overflow-hidden shadow-xl">
                                <Image
                                    src="/greentech-lands.png"
                                    alt="Project Location"
                                    width={600}
                                    height={450}
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <span className="text-amber-600 text-sm font-bold uppercase tracking-widest mb-2 block">
                                <MapPin className="inline-block w-4 h-4 mr-2" />
                                Strategic Location
                            </span>
                            <h2 className="text-3xl md:text-4xl font-medium text-slate-900 mb-4 leading-tight">
                                Seamless Location Connectivity
                            </h2>

                            <div className="space-y-1 mb-4">
                                {[
                                    { label: "Dholera Railway Station", distance: "2.2 km" },
                                    { label: "Dholera Metro Station", distance: "4.6 km" },
                                    { label: "City Square Mall", distance: "2.1 km" },
                                    { label: "Dholera Park Plaza", distance: "0.8 km" },
                                    { label: "Dholera City Hospital", distance: "1.2 km" },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center justify-between p-1">
                                        <span className="text-slate-700 font-medium">{item.label}</span>
                                        <span className="text-amber-600 font-bold">{item.distance}</span>
                                    </div>
                                ))}
                            </div>

                            {/* <Link
                                href="/compressed_new-map.webp"
                                target="_blank"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-all"
                            >
                                <Download className="w-5 h-5" />
                                Download Location Map
                            </Link> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Policies Section */}
            {/* <section className="py-20 bg-neutral-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <span className="text-amber-600 text-sm font-bold uppercase tracking-widest mb-4 block">
                            <Shield className="inline-block w-4 h-4 mr-2" />
                            Transparent Policies
                        </span>
                        <h2 className="text-3xl md:text-4xl font-medium text-slate-900 mb-4">
                            Our Policies
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            We believe in complete transparency. Here are our policies that protect your investment.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {policies.map((policy, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <h3 className="text-xl font-semibold text-slate-900 mb-4">{policy.title}</h3>
                                <ul className="space-y-3">
                                    {policy.points.map((point, pIdx) => (
                                        <li key={pIdx} className="flex items-start gap-3 text-slate-600">
                                            <Check className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* FAQs Section */}
            {/* <section className="py-12 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <span className="text-amber-600 text-sm font-bold uppercase tracking-widest mb-4 block">
                            <HelpCircle className="inline-block w-4 h-4 mr-2" />
                            Have Questions?
                        </span>
                        <h2 className="text-3xl md:text-4xl font-medium text-slate-900 mb-4">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="border border-slate-200 rounded-xl overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                    className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-neutral-50 transition-colors"
                                >
                                    <span className="font-semibold text-slate-900">{faq.question}</span>
                                    <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                                </button>
                                <AnimatePresence>
                                    {openFaq === idx && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-5 pt-0 text-slate-600 leading-relaxed">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* Downloads Section */}
            {/* <section className="py-16 bg-slate-900">
                <div className="max-w-6xl lg:mx-auto mx-6">
                    <div className="text-center mb-12">
                        <span className="text-amber-500 text-sm font-bold uppercase tracking-widest mb-4 block">
                            <FileText className="inline-block w-4 h-4 mr-2" />
                            Resources
                        </span>
                        <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">
                            Download Documents
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            Access all the information you need to make an informed decision.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { name: "Project Brochure", icon: FileText, href: "/dholera-plan.pdf" },
                            { name: "Master Plan", icon: Landmark, href: "/dholera-master-plan.png" },
                            { name: "Location Map", icon: MapPin, href: "/compressed_new-map.webp" },
                            { name: "Price List", icon: CreditCard, href: "#" },
                        ].map((doc, idx) => (
                            <Link
                                key={idx}
                                href={doc.href}
                                target="_blank"
                                className="group flex items-center gap-4 p-6 bg-slate-800/50 border border-slate-700 rounded-xl hover:bg-slate-800 hover:border-amber-500/50 transition-all"
                            >
                                <div className="p-3 rounded-xl bg-amber-500/10 text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-all">
                                    <doc.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-white font-medium">{doc.name}</div>
                                    <div className="text-slate-500 text-sm">Download PDF</div>
                                </div>
                                <Download className="w-5 h-5 text-slate-500 ml-auto group-hover:text-amber-400 transition-colors" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* CTA Section */}
            <section className="py-14 md:py-20 bg-gradient-to-br from-amber-600 to-amber-700">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-medium text-white mb-6 leading-tight">
                        Ready to Secure Your Future?
                    </h2>
                    <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto">
                        Don&apos;t miss this opportunity to invest in India's most promising smart city.
                        Book your plot today and be part of the Dholera success story.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                            className="inline-flex items-center gap-3 px-10 py-4 bg-white text-amber-700 rounded-full font-semibold hover:bg-amber-50 transition-all shadow-xl"
                        >
                            <a href="https://wa.me/917303789661">
                                Schedule Site Visit
                            </a>
                            <ArrowRight className="w-5 h-5" />
                        </button>

                        <Link
                            href="tel:+917303789661"
                            className="inline-flex items-center gap-3 px-10 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all"
                        >
                            <Phone className="w-5 h-5" />
                            Call: +91 73037 89661
                        </Link>
                    </div>
                </div>
            </section>

            {/* Contact Strip */}
            {/* <section className="bg-slate-900 py-8 border-t border-slate-800">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <Clock className="w-5 h-5 text-amber-500" />
                            <span className="text-slate-300">Office Hours: Mon-Sat, 10:00 AM - 7:00 PM</span>
                        </div>
                        <div className="flex items-center gap-6">
                            <Link href="tel:+917303789661" className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors">
                                <Phone className="w-4 h-4" />
                                +91 73037 89661
                            </Link>
                            <Link href="mailto:info@umangrealtors.com" className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors">
                                <Mail className="w-4 h-4" />
                                info@umangrealtors.com
                            </Link>
                        </div>
                    </div>
                </div>
            </section> */}

            <InquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}
