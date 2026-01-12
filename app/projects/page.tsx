"use client";
import { Menu, X, MapPin, ArrowRight, Phone, Mail, Instagram, Linkedin, Facebook, CheckCircle2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import "yet-another-react-lightbox/styles.css";
import Gallery from '../components/Gallery';

const DholeraCapitalLanding = () => {

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-amber-500 selection:text-white">
      {/* --- Navigation --- */}

      {/* --- Hero Section --- */}
      <section className="relative h-screen 2xl:h-[70vh] flex items-center justify-center overflow-hidden">

        <div className="absolute inset-0 bg-slate-900">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/vid1.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/60 to-transparent" />
        </div>

        {/* Abstract Background Image/Overlay */}

        <div className="relative z-10 text-center max-w-4xl px-6 animate-fade-in-up">
          <span className="inline-block mt-4 py-1 px-3 border border-amber-500/50 rounded-full text-amber-400 text-xs font-bold tracking-[0.2em] uppercase mb-6 bg-amber-900/20 backdrop-blur-sm">
            India's First Green Smart City
          </span>
          <h1 className="text-4xl md:text-7xl font-medium text-white mb-6">
            Invest in the <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-200 to-amber-500">
              Future of Gujarat
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
            Premium industrial and residential land parcels in the heart of Dholera SIR.
            Secure your legacy in the next global economic hub.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a href="/brochure.pdf"
              target="_blank"
              rel="noopener noreferrer">
              <button className="w-fit px-12 py-3 bg-amber-600 text-white font-medium rounded-sm hover:bg-amber-700 transition-all flex items-center justify-center gap-2">
                Brochure <ArrowRight className="w-4 h-4" />
              </button>
            </a>
            <a href="/dholera-plan.pdf"
              target="_blank"
              rel="noopener noreferrer">
              <button className="px-8 py-3 bg-transparent border border-slate-600 text-white font-medium rounded-sm hover:bg-white/5 transition-all">
                Download Plan
              </button>
            </a>
          </div>
        </div>

      </section>

      <section id="vision" className="mt-8 md:mt-0 md:py-16 bg-white overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-4 items-center max-w-7xl mx-auto px-6">

          {/* Text Content */}
          <div className="space-y-8 md:w-[50%]">
            <h2 className="text-4xl font-medium text-slate-900">
              Vrindavan City <br />
              <span className=" text-3xl text-amber-600 tracking-wider decoration-slate-200">Own The Divine</span>
            </h2>
            <p className="text-slate-600 text-md">
              Experience the rapid development of Dholera SIR firsthand. From wide
              infrastructure corridors to the upcoming international airport,
              witness the birth of a global metropolis.
            </p>

            <ul className="space-y-2 mt-6">
              {[
                "NA, NOC, Title clear with immediate registry",
                "Gated Community Society",
                "Government Approved"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-amber-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* THE 9:16 VIDEO PLACEHOLDER */}
          <div className="flex justify-center">
            <img src="/vrindavancity.jpeg" className='object-cover rounded-md' alt="object" />
          </div>

        </div>
      </section>

      <section id="vision" className="py-12 bg-white overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-8 items-center max-w-7xl mx-auto px-6">

          <div className="flex justify-center">
            <img src="/location.jpeg" className='object-cover rounded-md' alt="object" />
          </div>

          {/* Text Content */}
          <div className="space-y-8 md:w-[45%]">
            <h2 className="text-4xl font-medium text-slate-900">
              Location Advantages
            </h2>
            <p className="text-md">Live steps away from spirituality and serenity. Vrindavan City will host the upcoming ICONIC temple within its gated commmunity, offering a rare blend of luxury living and cultural landmark proximity.</p>
            <ul className="space-y-3 mt-6">
              {[
                "State Highway",
                "Ahmedabad-Dholera Expressway",
                "Monorail Station",
                "International Airport"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-amber-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* THE 9:16 VIDEO PLACEHOLDER */}

        </div>
      </section>

      <section className="max-w-7xl bg-white mx-auto px-6 py-4 pb-12">
        <Gallery />
      </section>

      {/* --- Master Plan / Plot Map Section --- */}
      <section id="master-plan" className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <h2 className="text-4xl font-medium text-slate-900 mb-4">Strategic Master Plan</h2>
            <p className="text-slate-600">
              Our plots are strategically located near the Activation Area and the Expressway,
              ensuring maximum connectivity and value appreciation.
            </p>
          </div>

          {/* THE DESKTOP SIZE PLOT MAP PLACEHOLDER */}
          <div className="pb-3 rounded-lg">
            <div className="relative flex justify-center aspect-video rounded-md group">
              <img src="/dholera-master-plan.png" className='object-cover' alt="object" />
            </div>
            <div className="flex justify-center gap-4 md:gap-8 mt-6">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <span className="w-3 h-3 rounded-full bg-[#e0f0ff]" /> Shyama Sector
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <span className="w-3 h-3 rounded-full bg-[#ededd1]" /> Kalindi Sector
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <span className="w-3 h-3 rounded-full bg-[#fedfbe]" /> Yamuna Sector
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <span className="w-3 h-3 rounded-full bg-[#eddbff]" /> Commercial
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA / Footer --- */}

    </div>
  );
};

export default DholeraCapitalLanding;