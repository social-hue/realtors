import React from 'react';
import Image from 'next/image';
import type { Metadata, Viewport } from "next";    
import {
    Building2,
    Globe,
    TrendingUp,
    Cpu,
    Leaf,
    Truck,
    Home,
    Briefcase,
    MapPin,
    Plane,
    Factory,
    Sun,
    Droplets,
    TreePine,
    Shield,
    Zap,
    Wifi,
    TrafficCone,
    Waves
} from 'lucide-react';

// SEO Metadata
export const metadata: Metadata = {
    title: 'About Dholera SIR | India\'s First Greenfield Smart City - Umang Realtors',
    description: 'Discover Dholera Special Investment Region (SIR) — India\'s first planned smart city spanning 920 sq km. Learn about its strategic location, world-class infrastructure, industrial hub, and investment opportunities.',
    keywords: [
        'Dholera SIR',
        'Dholera Smart City',
        'Dholera investment',
        'Dholera Gujarat',
        'DMIC Dholera',
        'Delhi Mumbai Industrial Corridor',
        'smart city India',
        'Dholera infrastructure',
        'Dholera industrial hub',
        'Dholera real estate',
        'greenfield smart city',
        'Dholera Special Investment Region',
        'investment in Dholera',
        'Dholera plots',
        'Gujarat smart city project',
    ],
    authors: [{ name: 'Umang Realtors' }],
    creator: 'Umang Realtors',
    publisher: 'Umang Realtors',
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large' as const,
            'max-snippet': -1,
        },
    },
    openGraph: {
        type: 'website',
        locale: 'en_IN',
        url: 'https://www.umangrealtors.com/about-dholera',
        siteName: 'Umang Realtors',
        title: 'About Dholera SIR | India\'s First Greenfield Smart City',
        description: 'Dholera Special Investment Region is India\'s first and largest planned smart city with world-class infrastructure, strategic location, and massive investment opportunities.',
        images: [
            {
                url: '/hero-dholera.png',
                width: 1200,
                height: 630,
                alt: 'Dholera Smart City - India\'s First Greenfield Smart City',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'About Dholera SIR | India\'s Greenfield Smart City',
        description: 'India\'s first planned smart city spanning 920 sq km. World-class infrastructure, industrial hub, and unmatched investment potential.',
        images: ['/hero-dholera.png'],
        creator: '@UmangRealtors',
    },
    alternates: {
        canonical: 'https://www.umangrealtors.com/about-dholera',
    },
    category: 'Real Estate',
    classification: 'Smart City Information',
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
};

export default function AboutDholeraPage() {
    return (
        <main className="min-h-screen">

            {/* ─── Hero Section ─── */}
            {/* <section className="relative h-[55vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/city-sunset.jpg"
                        alt="Dholera SIR Skyline"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/80" />
                </div>
                <div className="relative z-10 text-center max-w-4xl px-6">
                    <span className="inline-block py-1.5 px-5 border border-amber-400/50 rounded-full text-amber-400 text-xs font-bold tracking-[0.2em] uppercase mb-6 bg-black/30 backdrop-blur-md">
                        India&apos;s First Greenfield Smart City
                    </span>
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
                        Dholera Special <br className="hidden md:block" />Investment Region
                    </h1>
                    <p className="text-base md:text-lg text-slate-200 font-light max-w-2xl mx-auto leading-relaxed">
                        A world-class destination for manufacturing, innovation, and sustainable living — spanning over 920 sq. km.
                    </p>
                </div>
            </section> */}

            {/* ─── Introduction ─── */}
            <section className="py-12 lg:py-20 max-w-6xl mx-6 lg:mx-auto">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center">
                    <div className="w-full lg:w-1/2">
                        <div className="relative rounded-lg overflow-hidden shadow-lg">
                            <Image src="/compressed_airport.webp" alt="Dholera SIR Overview" width={800} height={600} className="w-full h-auto object-cover" />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 space-y-5">
                        <span className="text-amber-600 font-bold uppercase tracking-widest text-xs">Welcome to Dholera</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Introduction to Dholera</h2>
                        <div className="w-16 h-1 bg-amber-500 rounded-full"></div>
                        <p className="text-slate-600 leading-relaxed">
                            Dholera Special Investment Region (SIR) is India&apos;s first and largest planned smart city, located in the Ahmedabad district of Gujarat. Developed under the Delhi–Mumbai Industrial Corridor (DMIC) project, Dholera is envisioned as a world-class manufacturing and investment hub with advanced infrastructure, smart governance, and sustainable urban planning.
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                            Spanning over 920 square kilometers, Dholera SIR represents India&apos;s next generation of urban development, combining industrial growth, residential living, and commercial opportunities in a single integrated region.
                        </p>
                    </div>
                </div>
            </section>

            {/* ─── Strategic Location ─── */}
            <section className="bg-slate-900 py-14 text-white">
                <div className="max-w-6xl mx-6 lg:mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-amber-400 font-bold uppercase tracking-widest text-xs">Location Advantage</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Strategic Location Advantage</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            Dholera enjoys a highly strategic location, making it attractive for industries, businesses, and investors.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {[
                            { title: "~100 km", desc: "From Ahmedabad", icon: <MapPin className="w-7 h-7 text-amber-500" /> },
                            { title: "Gujarat", desc: "Connected to Major Cities", icon: <Globe className="w-7 h-7 text-amber-500" /> },
                            { title: "Ports", desc: "Gulf of Khambhat Proximity", icon: <Waves className="w-7 h-7 text-amber-500" /> },
                            { title: "DMIC", desc: "Delhi–Mumbai Corridor", icon: <TrendingUp className="w-7 h-7 text-amber-500" /> },
                        ].map((item, idx) => (
                            <div key={idx} className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/50 hover:border-amber-500/60 transition-all duration-300 text-center group">
                                <div className="bg-slate-900 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-amber-500/10 transition-colors">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                                <p className="text-slate-400 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <p className="text-center text-slate-400 mt-10 max-w-2xl mx-auto text-sm">
                        This strategic positioning ensures smooth logistics, faster transportation, and easy access to domestic and international markets.
                    </p>
                </div>
            </section>

            {/* ─── Smart Infrastructure & Industrial Hub ─── */}
            <section className="py-14 lg:py-20 max-w-6xl mx-6 lg:mx-auto space-y-20">

                {/* Smart City Infrastructure */}
                <div className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-16 items-center">
                    <div className="w-full lg:w-1/2">
                        <div className="relative h-[380px] md:h-[420px] w-full rounded-lg overflow-hidden shadow-lg">
                            <Image src="/compressed_smart-city.webp" alt="Dholera Smart City Infrastructure" fill className="object-cover" />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 space-y-5">
                        <div className="flex items-center gap-3">
                            <Cpu className="w-5 h-5 text-amber-600" />
                            <span className="text-amber-600 font-bold uppercase tracking-widest text-xs">Smart City</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">World-Class Infrastructure</h2>
                        <p className="text-slate-600 leading-relaxed">
                            Dholera SIR is being developed with state-of-the-art infrastructure, aligned with global smart city standards.
                        </p>
                        <ul className="space-y-3">
                            {[
                                { text: "Underground utility corridors (water, power, gas, ICT)", icon: <Zap className="w-4 h-4 text-amber-500" /> },
                                { text: "24×7 water and electricity supply", icon: <Droplets className="w-4 h-4 text-amber-500" /> },
                                { text: "Smart traffic management systems", icon: <TrafficCone className="w-4 h-4 text-amber-500" /> },
                                { text: "Advanced ICT and fiber-optic connectivity", icon: <Wifi className="w-4 h-4 text-amber-500" /> },
                                { text: "Automated solid waste management", icon: <Shield className="w-4 h-4 text-amber-500" /> },
                                { text: "Flood-resistant and climate-resilient planning", icon: <Leaf className="w-4 h-4 text-amber-500" /> },
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="mt-1 flex-shrink-0">{item.icon}</span>
                                    <span className="text-slate-700">{item.text}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-slate-500 text-sm italic">
                            Every aspect of Dholera&apos;s infrastructure is designed to support efficient urban living and industrial productivity.
                        </p>
                    </div>
                </div>

                {/* Industrial Hub */}
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
                    <div className="w-full lg:w-1/2">
                        <div className="relative h-[380px] md:h-[420px] w-full rounded-lg overflow-hidden shadow-lg">
                            <Image src="/commercial.png" alt="Industrial Hub" fill className="object-cover" />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 space-y-5">
                        <div className="flex items-center gap-3">
                            <Factory className="w-5 h-5 text-amber-600" />
                            <span className="text-amber-600 font-bold uppercase tracking-widest text-xs">Economic Powerhouse</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Industrial &amp; Economic Hub</h2>
                        <p className="text-slate-600 leading-relaxed">
                            Dholera is positioned as a major industrial and manufacturing destination with plug-and-play industrial plots, making it easier for companies to start operations quickly.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {[
                                "Electronics & Semiconductor",
                                "Renewable Energy & Solar",
                                "Heavy Engineering & Auto",
                                "Defense Manufacturing",
                                "Logistics & Warehousing",
                                "Agro-processing Industries"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-2.5 p-3 bg-white rounded-lg border border-slate-100 shadow-sm hover:border-amber-200 transition-colors">
                                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0" />
                                    <span className="text-sm font-medium text-slate-700">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </section>

            {/* ─── Residential & Commercial Development ─── */}
            <section className="">
                <div className="max-w-6xl mx-6 lg:mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-amber-600 font-bold uppercase tracking-widest text-xs">Urban Ecosystem</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">Residential &amp; Commercial Development</h2>
                        <p className="text-slate-600 max-w-3xl mx-auto">
                            Dholera SIR is not just an industrial city — it is a complete urban ecosystem designed to offer a high quality of life for residents and professionals.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Residential Zones */}
                        <div className="bg-slate-50 p-7 rounded-2xl border border-slate-100 transition-all duration-300 group">
                            <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mb-6 transition-colors">
                                <Home className="w-6 h-6 text-amber-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-4">Residential Zones</h3>
                            <ul className="space-y-3">
                                {[
                                    "Well-planned residential neighborhoods",
                                    "Green open spaces and recreational areas",
                                    "Schools, hospitals, and community centers",
                                    "Affordable to premium housing options"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Commercial Zones */}
                        <div className="bg-slate-50 p-7 rounded-2xl border border-slate-100 transition-all duration-300 group">
                            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-6 transition-colors">
                                <Briefcase className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-4">Commercial Zones</h3>
                            <ul className="space-y-3">
                                {[
                                    "Business districts",
                                    "IT parks and office complexes",
                                    "Retail centers, malls, and entertainment hubs",
                                    "Hotels and convention centers"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Connectivity & Transportation ─── */}
            <section className="py-14 max-w-6xl mx-6 lg:mx-auto bg-white">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
                    <div className="w-full lg:w-1/2">
                        <div className="relative h-[380px] md:h-[420px] w-full rounded-lg overflow-hidden shadow-lg">
                            <Image src="/expressway-new.png" alt="Dholera Connectivity" fill className="object-cover" />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 space-y-5">
                        <div className="flex items-center gap-3">
                            <Truck className="w-5 h-5 text-amber-600" />
                            <span className="text-amber-600 font-bold uppercase tracking-widest text-xs">Connectivity</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Connectivity &amp; Transportation</h2>
                        <p className="text-slate-600 leading-relaxed">
                            Dholera SIR boasts excellent connectivity through multiple modes of transport.
                        </p>
                        <ul className="space-y-3">
                            {[
                                { text: "Six-lane expressways and wide internal roads", icon: <Truck className="w-4 h-4 text-amber-500" /> },
                                { text: "Dedicated freight corridors", icon: <Building2 className="w-4 h-4 text-amber-500" /> },
                                { text: "Metro and rapid transit connectivity (planned)", icon: <TrendingUp className="w-4 h-4 text-amber-500" /> },
                                { text: "Proximity to ports and logistics hubs", icon: <Waves className="w-4 h-4 text-amber-500" /> },
                                { text: "International airport connectivity planned nearby", icon: <Plane className="w-4 h-4 text-amber-500" /> },
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="mt-1 flex-shrink-0">{item.icon}</span>
                                    <span className="text-slate-700">{item.text}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-slate-500 text-sm italic">
                            This robust transportation network ensures smooth movement of goods and people.
                        </p>
                    </div>
                </div>
            </section>

            {/* ─── Sustainability & Why Choose Dholera ─── */}
            <section className="pb-14 lg:pb-18 max-w-6xl mx-6 lg:mx-auto">
                <div className="rounded-xl p-6 md:p-10 border border-slate-200 bg-white shadow-sm">
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">

                        {/* Sustainability */}
                        <div className="w-full lg:w-1/2">
                            <div className="flex items-center gap-3 mb-5">
                                <Leaf className="w-5 h-5 text-green-600" />
                                <span className="text-green-700 font-bold uppercase tracking-widest text-xs">Sustainability</span>
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-5">Green Development</h2>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Sustainability is a core pillar of Dholera&apos;s development. Dholera aims to become one of India&apos;s most environmentally responsible cities.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {[
                                    { label: "Solar Power Generation", icon: <Sun className="w-4 h-4 text-green-600" /> },
                                    { label: "Rainwater Harvesting", icon: <Droplets className="w-4 h-4 text-green-600" /> },
                                    { label: "Green Belts & Landscapes", icon: <TreePine className="w-4 h-4 text-green-600" /> },
                                    { label: "Energy-Efficient Buildings", icon: <Zap className="w-4 h-4 text-green-600" /> },
                                    { label: "Smart Carbon Planning", icon: <Leaf className="w-4 h-4 text-green-600" /> },
                                ].map((g, i) => (
                                    <div key={i} className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                                        {g.icon}
                                        {g.label}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="hidden lg:block w-px bg-slate-200 self-stretch" />

                        {/* Why Choose Dholera */}
                        <div className="w-full lg:w-1/2">
                            <div className="flex items-center gap-3 mb-5">
                                <TrendingUp className="w-5 h-5 text-amber-600" />
                                <span className="text-amber-700 font-bold uppercase tracking-widest text-xs">Opportunities</span>
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-5">Why Choose Dholera?</h2>
                            <ul className="space-y-3.5">
                                {[
                                    "India's first planned greenfield smart city",
                                    "Part of a globally significant industrial corridor",
                                    "Government-supported development",
                                    "World-class infrastructure",
                                    "High growth and appreciation potential",
                                    "Ideal for industries, businesses, and residents"
                                ].map((inv, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <span className="text-amber-600 font-bold text-sm mt-0.5">{idx + 1}.</span>
                                        <span className="text-slate-700 font-medium">{inv}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* ─── Investment Opportunities ─── */}
            <section className="bg-slate-900 py-14 text-white">
                <div className="max-w-6xl mx-6 lg:mx-auto">
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
                        <div className="w-full lg:w-1/2">
                            <div className="relative h-[360px] md:h-[400px] w-full rounded-lg overflow-hidden shadow-lg">
                                <Image src="/compressed_investment.webp" alt="Dholera Investment" fill className="object-cover" />
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 space-y-5">
                            <span className="text-amber-400 font-bold uppercase tracking-widest text-xs">Invest Smart</span>
                            <h2 className="text-3xl md:text-4xl font-bold">Investment Opportunities</h2>
                            <p className="text-slate-300 leading-relaxed">
                                Dholera SIR offers attractive opportunities for investors of all types. With government backing, planned infrastructure, and strong future growth potential, Dholera is emerging as a preferred destination for smart investments.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {[
                                    "Industrial Investors",
                                    "Real Estate Developers",
                                    "Commercial Property Investors",
                                    "Long-term Land Investors"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2.5 p-3.5 bg-slate-800/60 rounded-lg border border-slate-700/50 hover:border-amber-500/40 transition-colors">
                                        <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />
                                        <span className="text-sm font-medium text-slate-200">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Closing Statement ─── */}
            <section className="py-14 md:py-18">
                <div className="max-w-4xl mx-6 lg:mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-5 leading-snug">
                        Shaping the Future of Urban &amp; Industrial Development
                    </h2>
                    <p className="text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Dholera Special Investment Region is shaping the future of urban and industrial development in India. With its strategic location, advanced infrastructure, sustainable planning, and strong economic vision, Dholera stands as a landmark project that blends growth, technology, and quality living.
                    </p>
                    <div className="mt-8">
                        <a href="tel:+917303789661">
                            <button className="px-8 py-3.5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all duration-300 font-medium shadow-lg shadow-slate-900/20">
                                Get in Touch
                            </button>
                        </a>
                    </div>
                </div>
            </section>

        </main>
    );
}

// Helper SVG Icon
function CheckCircle({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
    )
}
