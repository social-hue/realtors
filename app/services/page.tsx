import React from "react";
import {
  Building2,
  Briefcase,
  TrendingUp,
  Search,
  Key,
  ShieldCheck,
  Megaphone,
  Home,
} from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Services | Umang Realtors",
  description:
    "Comprehensive real estate services including Property Management, Commercial Property, Sales, and Investment specific solutions.",
};

const ServicesPage = () => {
  return (
    <main>
      {/* ================= Hero / Title Section ================= */}
      <section className="bg-slate-900 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="text-slate-300 text-md max-w-2xl mx-auto leading-relaxed">
            Delivering comprehensive real estate solutions tailored to your
            goals — from property management to strategic investments.
          </p>
        </div>
      </section>

      {/* ================= Property Management ================= */}
      <section className="py-12 bg-white px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="flex items-center gap-3 mb-4">
              <Key className="w-8 h-8 text-amber-600" />
              <h2 className="text-3xl font-medium text-slate-900">
                Property Management
              </h2>
            </div>
            <p className="text-slate-600 text-md mb-4 leading-relaxed">
              We provide complete property management solutions designed to make
              ownership simple and stress-free. From helping you find the right property
              based on your needs, preferences, and budget, to handling documentation
              and coordination, we ensure a smooth and transparent process. Our goal is
              to help you secure the ideal property that aligns perfectly with your lifestyle
              or investment objectives.

            </p>
            <p className="text-slate-600 text-md mb-4 leading-relaxed">
              <span className="font-bold">Investment Monitoring :</span> Your investment receives continuous monitoring and expert guidance. We track market trends and growth opportunities, providing timely strategic advice to help maximize returns and ensure long-term profitability.

            </p>
            <p className="text-slate-500 italic text-sm border-l-4 border-amber-200 pl-4 py-1">
              "We act as a bridge between property owners and tenants, ensuring
              transparency, timely communication, and efficient management."
            </p>
          </div>
          {/* Visual/Icon Placeholder */}
          <div className="order-1 lg:order-2">
            <Image src="/service-image-4.png" alt="Find Property" className="rounded-lg w-full h-auto" width={500} height={500} />
          </div>
        </div>
      </section>

      {/* ================= Find a Commercial Property ================= */}
      <section className="py-8 lg:py-14 bg-slate-50 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Visual/Icon Placeholder */}
          <Image src="/service-image-3.png" alt="Find Property" className="rounded-lg w-full h-auto" width={500} height={500} />


          <div>
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="w-8 h-8 text-amber-600" />
              <h2 className="text-3xl font-medium text-slate-900">
                Find a Commercial Property
              </h2>
            </div>
            <p className="text-slate-600 text-md mb-4 leading-relaxed">
              Finding the right commercial space is crucial for business
              success. At Umang Realtors, we help businesses identify and secure
              properties that match their operational needs, budget, and growth
              plans.
            </p>

            <h3 className="font-semibold text-slate-800 mb-4 uppercase tracking-wide text-sm">
              We Assist With:
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              {[
                "Office spaces",
                "Retail shops and showrooms",
                "Warehouses and industrial units",
                "Commercial plots",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0"></span>
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-600">
              Our team conducts detailed market research, location analysis, and
              price evaluation to ensure you make a smart investment decision.
            </p>
          </div>
        </div>
      </section>

      {/* ================= Market Your Property ================= */}
      <section className="py-8 lg:py-14 bg-white px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-4">
              <Megaphone className="w-8 h-8 text-amber-600" />
              <h2 className="text-3xl font-medium text-slate-900">
                Market Your Property
              </h2>
            </div>
            <p className="text-slate-600 text-md mb-4 leading-relaxed">
              If you’re looking to sell or lease your property, we provide
              strategic marketing solutions to help you get the best value in
              the shortest time.
            </p>

            <h3 className="font-semibold text-slate-800 mb-4 uppercase tracking-wide text-sm">
              Our Marketing Approach Includes:
            </h3>
            <ul className="space-y-3 mb-4">
              {[
                "Professional property listings with high-quality photos",
                "Online and offline promotion",
                "Social media marketing campaigns",
                "Targeted buyer outreach",
                "Site visit coordination and negotiation support",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></span>
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-500 italic text-sm border-l-4 border-amber-200 pl-4 py-1">
              "We leverage our network, digital presence, and industry expertise
              to connect your property with serious buyers and tenants."
            </p>
          </div>
          {/* Visual/Icon Placeholder */}
          <div className="order-1 lg:order-2">
            <Image src="/service-image-2.png" alt="Find Property" className="rounded-lg w-full h-auto" width={500} height={500} />
          </div>
        </div>
      </section>

      <section className="py-8 lg:py-14 bg-slate-50 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Visual/Icon Placeholder */}

          <Image src="/service-image-1.png" alt="Find Property" className="rounded-lg w-full h-auto" width={500} height={500} />

          <div>
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="w-8 h-8 text-amber-600" />
              <h2 className="text-3xl font-medium text-slate-900">
                Find Your Perfect Property
              </h2>
            </div>
            <p className="text-slate-600 text-md mb-4 leading-relaxed">
              Whether you’re searching for your dream home or a profitable investment opportunity, Umang Realtors is here to help you find the perfect match.
            </p>

            <h3 className="font-semibold text-slate-800 mb-4 uppercase tracking-wide text-sm">
              We Assist With:
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
              {[
                "Apartments and villas",
                "Plots and land",
                "Investment properties",
                "Ready-to-move and under-construction projects",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0"></span>
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-600">
              We carefully understand your preferences, budget, and long-term goals before presenting tailored property options. From site visits to paperwork and final registration, we ensure a smooth and transparent buying experience.
            </p>
          </div>
        </div>
      </section>

      {/* ================= Find Your Perfect Property ================= */}
      {/* <section className="py-20 bg-slate-900 text-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-4 bg-white/10 rounded-full mb-6">
            <Search className="w-8 h-8 text-amber-400" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Find Your Perfect Property
          </h2>
          <p className="text-slate-300 text-lg mb-8 leading-relaxed">
            Whether you’re searching for your dream home or a profitable
            investment opportunity, Umang Realtors is here to help you find the
            perfect match.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left mb-12">
            {[
              "Apartments and villas",
              "Plots and land",
              "Investment properties",
              "Ready-to-move projects",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span className="text-slate-200 font-medium">{item}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-slate-400 max-w-2xl mx-auto">
            We carefully understand your preferences, budget, and long-term
            goals before presenting tailored property options. From site visits
            to paperwork and final registration, we ensure a smooth experience.
          </p>
        </div>
      </section> */}
    </main>
  );
};

export default ServicesPage;
