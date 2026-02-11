import React from 'react';
import Image from 'next/image';
import { ArrowRight, Download, Calendar } from 'lucide-react';

export default function FeaturedProject() {
    return (
        <section className="pt-8 md:pt-0 max-w-6xl bg-white mx-6 lg:mx-auto relative overflow-hidden">

            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -z-10 rounded-l-[5rem]" />

            <div className="max-w-6xl mx-auto md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center md:gap-16 lg:gap-24">

                    {/* Left Content */}
                    <div className="w-full lg:w-1/2 space-y-6 animate-fade-in-up">

                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="h-px w-12 bg-amber-500"></span>
                                <span className="text-amber-600 font-bold tracking-widest text-xs uppercase">Featured Project</span>
                            </div>

                            <h2 className="text-4xl font-bold text-slate-900 leading-[1.1]">
                                Vrindavan
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-600"> City.</span>
                            </h2>

                            <p className="text-slate-600 leading-relaxed mb-6">
                                Dholera Vrindavan City is a thoughtfully planned residential plotting
                                project located within the Dholera Special Investment Region (SIR).
                                Designed for long-term growth and peaceful living, the project
                                offers clear-title plots, modern infrastructure, and excellent
                                connectivity to upcoming industrial and civic developments.
                            </p>

                            <ul className="space-y-2 text-slate-700 mb-6">
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-amber-600 rounded-full" />
                                    NA & NOC approved residential plots
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-amber-600 rounded-full" />
                                    Located inside Dholera SIR growth corridor
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-amber-600 rounded-full" />
                                    Excellent future appreciation potential
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-5">
                            <button className="cursor-pointer group relative px-5 py-3.5 md:py-2 bg-slate-900 text-white text-sm overflow-hidden rounded-full transition-all hover:bg-slate-800 hover:shadow-lg flex items-center justify-center">
                                <span className="relative z-10 flex items-center gap-3">
                                    View Master Plan <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </button>

                            <button className="cursor-pointer text-sm group px-6 py-3.5 md:py-2 bg-white border border-amber-600 text-amber-600 rounded-full  transition-all hover:border-amber-500 hover:text-amber-600 flex items-center justify-center gap-2">
                                Schedule Visit
                            </button>
                        </div>

                        <div className="grid grid-cols-3 gap-8 pt-4 border-t border-slate-100">
                            <div>
                                <h4 className="text-3xl font-bold text-slate-900 mb-1">360<span className="text-amber-500 text-xl"> +</span></h4>
                                <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">Plots Sold</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-slate-900 mb-1">120<span className="text-amber-500 text-xl"> %</span></h4>
                                <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">Growth</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-slate-900 mb-1">800<span className="text-amber-500 text-xl"> mtr</span></h4>
                                <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">Airport</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Images - Aesthetic Alignment */}
                    <div className="w-full lg:w-1/2 relative h-[500px] lg:h-[600px] flex items-center justify-end">

                        {/* Decorative Elements */}
                        {/* <div className="absolute top-1/4 right-10 w-72 h-72 bg-amber-100/50 rounded-full blur-3xl -z-10"></div>
                        <div className="absolute bottom-10 left-10 w-64 h-64 bg-slate-200/50 rounded-full blur-3xl -z-10"></div> */}

                        {/* Main Primary Image */}
                        <div className="relative z-20 w-[60%] h-[70%] shadow-xl rounded-2xl overflow-hidden group">
                            <div className="absolute inset-0 group-hover:bg-black/0 transition-colors duration-500 z-10"></div>
                            <Image
                                src="/dholera-vertical.png"
                                alt="Vrindavan City Perspective"
                                fill
                                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        {/* Secondary Overlapping Image */}
                        <div className="absolute bottom-12 left-0 z-30 w-[50%] h-[50%] shadow-2xl shadow-slate-200 overflow-hidden rounded-2xl border-4 border-white transform translate-x-4 translate-y-4 group hover:-translate-y-2 transition-transform duration-500">
                            <Image
                                src="/dia.png"
                                alt="Vrindavan City Detail"
                                fill
                                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute top-[20%] -left-0 md:-left-8 z-40 bg-white/90 backdrop-blur-md p-3 pr-6 rounded-r-2xl shadow-lg border-l-4 border-amber-500 animate-fade-in-right">
                            <div className="flex flex-col">
                                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Status</span>
                                <span className="text-sm font-bold text-slate-900 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                    Selling Fast
                                </span>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
