"use client";

import { Play, Menu, X, MapPin, ArrowRight, Phone, Mail, Instagram, Linkedin, Facebook, CheckCircle2 } from 'lucide-react';
// import { useEffect, useState } from 'react';
import ExploreProject from './ExploreProject';
import WhyChooseUs from './WhyChooseUs';
import NewsTicker from './NewsTicker';

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-amber-500 selection:text-white">

      <main className="relative h-[75vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-slate-900">                                    
         <video
            className="absolute inset-0 w-full h-full object-cover"   
            src="/vid10.mp4"  
            autoPlay    
            loop        
            muted       
            playsInline 
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 via-slate-900/60 to-transparent" />
        </div>
        {/* Abstract Background Image/Overlay */}
        <div className="relative z-10 text-center max-w-4xl px-6 animate-fade-in-up">
          <span className="inline-block mt-4 py-1 px-3 border border-amber-500/50 rounded-full text-amber-400 text-xs font-bold tracking-[0.2em] uppercase mb-6 bg-amber-900/20 backdrop-blur-sm">
           Real Estate • Trust • Growth
          </span>
          <h1 className="text-4xl md:text-6xl font-medium text-white mb-5">
            Invest in the <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-200 to-amber-500">
              Future of India
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
            Premium industrial and residential land parcels in the heart of Dholera SIR.
            Secure your legacy in the next global economic hub.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a href="/projects">
            <button className="w-fit px-12 py-3 bg-amber-600 text-white font-medium rounded-sm hover:bg-amber-700 transition-all flex items-center justify-center gap-2">
              Explore <ArrowRight className="w-4 h-4" />
            </button>
            </a>
            {/* <a href="/dholera-plan.pdf"
              target="_blank"
              rel="noopener noreferrer">
              <button className="px-8 py-4 bg-transparent border border-slate-600 text-white font-medium rounded-sm hover:bg-white/5 transition-all">
                Download Plan
              </button>
            </a> */}
          </div>

        </div>
      </main>       

      <div className="px-4 flex items-center justify-center">
        <NewsTicker />
      </div>                                                     
      
      <ExploreProject />
      {/* --- 9:16 Video Showcase Section --- */}

      {/* --- Stats Section --- */}
      <section className="bg-slate-900 py-10 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { label: "Sq. Ft. Delivered", value: "2M+" },
            { label: "Happy Investors", value: "100+" },
            { label: "Projects", value: "8" },
            { label: "Appreciation", value: "150%" },
          ].map((stat, idx) => (
            <div key={idx} className="space-y-2">
              <div className="text-3xl md:text-5xl font-serif font-bold text-white">{stat.value}</div>
              <div className="text-sm uppercase tracking-widest text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <WhyChooseUs />
    </div>
  );
};

export default Home;

// export default function Home() {
//   return (
//     <main className="min-h-screen flex items-center justify-center bg-cover bg-[url('/showdown.jpg')] px-6">
//       <div className="max-w-3xl w-full text-center p-10 md:p-14">
        
//         {/* Brand */}
//         <h1 className="text-3xl md:text-4xl font-semibold tracking-wide text-gray-900">
//           Umang Realtors
//         </h1>
//         <p className="mt-2 text-sm uppercase tracking-widest text-gray-500">
//           Real Estate • Trust • Growth
//         </p>

//         {/* Divider */}
//         <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
//         {/* Main Message */}
//         <h2 className="text-2xl md:text-3xl font-medium text-gray-800">
//           We’re Improving Your Experience
//         </h2>
//         <p className="mt-4 text-gray-600 leading-relaxed text-base md:text-lg">
//           Our website is currently undergoing scheduled maintenance.  
//           We’re refining the experience to serve you better with premium real estate offerings, seamless browsing, and enhanced performance.
//         </p>

//         {/* Status */}
//         <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-gray-100 px-6 py-2 text-sm text-gray-700">
//           <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
//           Maintenance in progress
//         </div>

//         {/* CTA */}
//         <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
//           <a
//             href="mailto:info@umangliving.com"
//             className="rounded-xl px-8 py-3 bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition"
//           >
//             Contact Us
//           </a>
//           <a
//             href="tel:+919560986669"
//             className="rounded-xl px-8 py-3 border border-gray-300 text-gray-50 text-sm font-medium hover:text-black hover:bg-gray-50 transition"
//           >
//             Call Now
//           </a>
//         </div>

//         {/* Footer */}
//         <p className="mt-12 text-xs text-white">
//           © {new Date().getFullYear()} Umang Realtors. All rights reserved.
//         </p>
//       </div>
//     </main>
//   );
// }










