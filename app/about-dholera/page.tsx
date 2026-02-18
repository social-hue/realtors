
import React from 'react';
import Image from 'next/image';
import { Building2, Globe, TrendingUp, Cpu, Leaf, Truck, Home, Briefcase } from 'lucide-react';

const AboutDholera = () => {
    return (
        <main className="bg-slate-50 min-h-screen">

            {/* Hero Section */}
            {/* <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
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
                <div className="relative z-10 text-center max-w-4xl px-6 animate-fade-in-up">
                    <span className="inline-block py-1 px-4 border border-amber-400/50 rounded-full text-amber-400 text-xs font-bold tracking-[0.2em] uppercase mb-6 bg-black/30 backdrop-blur-md">
                        India's First Greenfield Smart City
                    </span>
                    <h1 className="text-4xl md:text-5xl font-medium text-white mb-6 leading-tight">
                        Dholera Special Investment Region (SIR)
                    </h1>
                    <p className="text-lg md:text-xl text-slate-200 font-light max-w-2xl mx-auto">
                        A world-class destination for manufacturing, innovation, and sustainable living.
                    </p>
                </div>
            </section> */}

            {/* Introduction */}
            <section className="py-8 lg:py-16 max-w-6xl mx-6 lg:mx-auto">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                    <div className="w-full lg:w-1/2">
                        <div className="relative rounded-xl overflow-hidden shadow-2xl">
                            <Image src="/compressed_airport.webp" alt="Dholera Master Plan" width={800} height={600} className="w-full h-auto object-cover" />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Introduction to Dholera</h2>
                        <div className="w-20 h-1 bg-amber-500 rounded-full"></div>
                        <p className="text-slate-600 leading-relaxed text-md">
                            Dholera Special Investment Region (SIR) is India’s first and largest planned smart city, located in the Ahmedabad district of Gujarat. Developed under the Delhi–Mumbai Industrial Corridor (DMIC) project, Dholera is envisioned as a world-class manufacturing and investment hub with advanced infrastructure, smart governance, and sustainable urban planning.
                        </p>
                        <p className="text-slate-600 leading-relaxed text-md">
                            Spanning over 920 square kilometers, Dholera SIR represents India’s next generation of urban development, combining industrial growth, residential living, and commercial opportunities in a single integrated region.
                        </p>
                    </div>
                </div>
            </section>

            {/* Strategic Location */}
            {/* <section className="bg-slate-900 py-12 text-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-medium mb-4">Strategic Location Advantage</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">Connecting Dholera to the world through robust logistics and transportation networks.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "100 km", desc: "From Ahmedabad", icon: <Globe className="w-8 h-8 text-amber-500" /> },
                            { title: "Gujarat", desc: "Connected to Major Cities", icon: <Building2 className="w-8 h-8 text-amber-500" /> },
                            { title: "Ports", desc: "Proximity to Gulf of Khambhat", icon: <Truck className="w-8 h-8 text-amber-500" /> },
                            { title: "DMIC", desc: "On Delhi-Mumbai Corridor", icon: <TrendingUp className="w-8 h-8 text-amber-500" /> },
                        ].map((item, idx) => (
                            <div key={idx} className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 hover:border-amber-500 transition-colors text-center group">
                                <div className="bg-slate-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-500/10 transition-colors">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-slate-400 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* Smart Infrastructure & Industrial Hub */}
            <section className="py-10 max-w-6xl mx-6 lg:mx-auto space-y-20">

                {/* Infrastructure */}
                <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-16 items-center">
                    <div className="w-full lg:w-1/2">
                        <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-xl">
                            <Image src="/dholera-vertical.png" alt="Smart Infrastructure" fill className="object-cover" />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 space-y-6">
                        <div className="flex items-center gap-3">
                            <Cpu className="w-6 h-6 text-amber-600" />
                            <span className="text-amber-600 font-bold uppercase tracking-widest text-sm">Smart City</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">World-Class Infrastructure</h2>
                        <p className="text-slate-600 leading-relaxed">
                            Dholera SIR is being developed with state-of-the-art infrastructure aligned with global standards.
                        </p>
                        <ul className="space-y-2">
                            {[
                                "Underground utility corridors (water, power, gas, ICT)",
                                "24×7 water and electricity supply",
                                "Smart traffic management systems",
                                "Advanced ICT and fiber-optic connectivity",
                                "Automated solid waste management",
                                "Flood-resistant and climate-resilient planning"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="w-2 h-2 mt-2 bg-amber-500 rounded-full flex-shrink-0" />
                                    <span className="text-slate-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Industrial Hub */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
                    <div className="w-full lg:w-1/2">
                        <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-xl">
                            <Image src="/commercial.png" alt="Industrial Hub" fill className="object-cover" />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 space-y-6">
                        <div className="flex items-center gap-3">
                            <Building2 className="w-6 h-6 text-amber-600" />
                            <span className="text-amber-600 font-bold uppercase tracking-widest text-sm">Economic Powerhouse</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Industrial & Economic Hub</h2>
                        <p className="text-slate-600 leading-relaxed">
                            Dholera is positioned as a major industrial and manufacturing destination with plug-and-play industrial plots.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                            {[
                                "Electronics & Semiconductor",
                                "Renewable Energy & Solar",
                                "Heavy Engineering & Auto",
                                "Defense Manufacturing",
                                "Logistics & Warehousing",
                                "Agro-processing Industries"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-2 p-3 bg-white rounded-lg border border-slate-100 shadow-sm">
                                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                                    <span className="text-sm font-medium text-slate-700">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </section>

            {/* Residential and Commercial Development */}
            <section className="py-16">
                <div className="max-w-6xl mx-6 lg:mx-auto">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Residential and Commercial Development</h2>
                        <p className="text-slate-600 max-w-3xl mx-auto text-md">
                            Dholera SIR is not just an industrial city—it is a complete urban ecosystem designed to offer a high quality of life for residents and professionals.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                        {/* Residential Zones */}
                        <div className="bg-slate-50 p-6 rounded-xl shadow-sm border border-slate-100 hover:border-amber-300 transition-all duration-300 group">
                            <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-200 transition-colors">
                                <Home className="w-8 h-8 text-amber-600" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-800 mb-4">Residential Zones</h3>
                            <ul className="space-y-3">
                                {[
                                    "Well-planned residential neighborhoods",
                                    "Green open spaces and recreational areas",
                                    "Schools, hospitals, and community centers",
                                    "Affordable to premium housing options"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                        <span className="text-slate-700 text-md">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Commercial Zones */}
                        <div className="bg-slate-50 p-6 rounded-xl shadow-sm border border-slate-100 hover:border-blue-300 transition-all duration-300 group">
                            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                                <Briefcase className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-800 mb-4">Commercial Zones</h3>
                            <ul className="space-y-3">
                                {[
                                    "Business districts",
                                    "IT parks and office complexes",
                                    "Retail centers, malls, and entertainment hubs",
                                    "Hotels and convention centers"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                                        <span className="text-slate-700 text-md">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pb-18 max-w-6xl mx-6 lg:mx-auto">
                <div className="rounded-3xl p-4 md:p-8 border border-slate-200">

                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">

                        {/* Sustainability */}
                        <div className="w-full lg:w-1/2">
                            <div className="flex items-center gap-3 mb-6">
                                <Leaf className="w-6 h-6 text-green-600" />
                                <span className="text-green-700 font-bold uppercase tracking-widest text-sm">
                                    Sustainability
                                </span>
                            </div>

                            <h2 className="text-3xl font-bold text-slate-900 mb-6">
                                Green Development
                            </h2>

                            <p className="text-slate-700 mb-6 leading-relaxed">
                                Sustainability is a core pillar. Dholera aims to become one of India’s
                                most environmentally responsible cities through large-scale solar power,
                                energy-efficient buildings, and reduced carbon footprint.
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                {["Solar Power", "Rainwater Harvesting", "Green Belts", "Smart Planning"].map((g, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-2 text-sm text-slate-700 font-medium"
                                    >
                                        <CheckCircle className="w-4 h-4 text-green-600" />
                                        {g}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="hidden md:block w-px bg-slate-200 self-stretch" />

                        {/* Why Choose Dholera */}
                        <div className="w-full lg:w-1/2">
                            <div className="flex items-center gap-3 mb-6">
                                <TrendingUp className="w-6 h-6 text-amber-600" />
                                <span className="text-amber-700 font-bold uppercase tracking-widest text-sm">
                                    Opportunities
                                </span>
                            </div>

                            <h2 className="text-3xl font-bold text-slate-900 mb-6">
                                Why Choose Dholera?
                            </h2>

                            <ul className="space-y-4">
                                {[
                                    "India’s first planned greenfield smart city",
                                    "Part of a globally significant industrial corridor",
                                    "Government-supported development",
                                    "World-class infrastructure",
                                    "High growth and appreciation potential",
                                    "Ideal for industries, businesses, and residents"
                                ].map((inv, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <span className="text-amber-600 font-bold text-sm">
                                            {idx + 1}.
                                        </span>
                                        <span className="text-slate-700 font-medium">
                                            {inv}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </section>


        </main>
    );
};

// Helper Icon
function CheckCircle({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
    )
}

export default AboutDholera;
