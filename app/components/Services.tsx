import React from 'react';
import Image from 'next/image';
import { Building2, TrendingUp, Search, Layers, ArrowUpRight } from 'lucide-react';

export default function Services() {
    const services = [
        {
            category: "MANAGEMENT",
            title: "Property Management",
            description: "To make an asset work to financial expansion requires planned, flexible property management policies.",
            image: "/skyline-1.png",
            by: "Asset Optimization"
        },
        {
            category: "COMMERCIAL",
            title: "Find a Commercial Property",
            description: "We are becoming the comprehensive leader in commercial real estate services and investments.",
            image: "/commercial.png",
            by: "Market Leaders"
        },
        {
            category: "SALES",
            title: "Market Your Property With Umang Realtors",
            description: "We can help sell your investment properties for market value, through an online auction.",
            image: "/skyline-3.png",
            by: "Expert Sales Team"
        },
        {
            category: "INVESTMENT",
            title: "Find Your Perfect Property",
            description: "Sign up with us to access limited, magnificently curated, off-market property deals.",
            image: "/investment.png",
            by: "Curated Deals"
        },
    ];

    return (
        <section className="py-6 md:py-10 max-w-6xl mx-6 lg:mx-8 xl:mx-auto relative overflow-hidden bg-white" id="services">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-amber-100/50 blur-3xl"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-slate-100/50 blur-3xl"></div>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-amber-600 font-bold tracking-wider uppercase text-sm mb-2 block">
                            Our Expertise
                        </span>
                        <h2 className="
                        text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                            Elevating Real Estate <br />
                            <span className="text-slate-400">Experiences.</span>
                        </h2>
                    </div>
                    <p className="text-slate-500 max-w-md text-base leading-relaxed pb-2">
                        Providing comprehensive solutions for all your real estate needs with a focus on trust and transparency.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-sm overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full group"
                        >
                            {/* Image Section */}
                            <div className="relative h-48 w-full overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Content Section */}
                            <div className="p-4 flex flex-col flex-grow">
                                <span className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-3">
                                    {service.category}
                                </span>

                                <h3 className="text-lg font-serif font-bold text-slate-900 mb-2 leading-tight">
                                    {service.title}
                                </h3>

                                <p className="text-slate-500 text-sm leading-relaxed flex-grow">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
