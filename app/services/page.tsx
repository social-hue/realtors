
import React from 'react';
import { Building2, Briefcase, Gavel, TrendingUp, Handshake } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Services | Umang Realtors',
    description: 'Comprehensive real estate services including Property Management, Commercial Property, Sales, and Investment specific solutions.',
};

const ServicesPage = () => {
    return (
       <section className="py-12 max-w-6xl lg:mx-auto mx-6">
  <div className="py-8 px-6 bg-slate-900 mb-12 rounded-lg text-center">
    <h1 className="text-4xl font-bold text-white mb-4">
      Our Services
    </h1>
    <p className="text-slate-300 max-w-2xl mx-auto">
      Delivering comprehensive real estate solutions tailored to your goals —
      from property management to strategic investments.
    </p>
  </div>

    <div className="grid md:grid-cols-2 gap-10">

      {[
        {
          title: "MANAGEMENT",
          subtitle: "Property Management",
          desc: "To make an asset work toward financial expansion requires planned, flexible property management policies designed to protect value and maximize long-term returns."
        },
        {
          title: "DEVELOPERS",
          subtitle: "Find a Commercial Property",
          desc: "We are becoming a comprehensive leader in commercial real estate services and investments, offering tailored solutions to meet evolving business needs."
        },
        {
          title: "SALES",
          subtitle: "Market Your Property With Umang Realtors",
          desc: "We can help sell your investment properties at market value through strategic marketing and structured online auction processes."
        },
        {
          title: "REAL ESTATE INVESTMENT",
          subtitle: "Find Your Perfect Property",
          desc: "Sign up with us to gain access to limited, magnificently curated, off-market property deals designed for discerning investors."
        }
      ].map((item, index) => (
        <div
          key={index}
          className="group relative bg-white/70 backdrop-blur-xl border border-slate-200 rounded-xl p-10 shadow-sm hover:shadow-lg transition-all duration-400"
        >
          {/* Subtle Accent Line */}
          <div className="absolute top-0 left-10 w-16 h-1 bg-gradient-to-r from-slate-900 to-slate-400 rounded-full"></div>

          <h2 className="text-sm tracking-[0.25em] text-slate-400 font-medium mb-4">
            {item.title}
          </h2>

          <h3 className="text-2xl font-semibold text-slate-900 mb-5 leading-snug">
            {item.subtitle}
          </h3>

          <p className="text-slate-600 leading-relaxed text-[15px]">
            {item.desc}
          </p>

          {/* Hover underline animation */}
          <div className="mt-8 w-10 h-[2px] bg-slate-300 group-hover:w-20 group-hover:bg-slate-900 transition-all duration-500"></div>
        </div>
      ))}

    </div>

  
</section>

    );
};

export default ServicesPage;
