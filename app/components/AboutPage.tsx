import React from "react";
import Image from "next/image";
import {
  Building2,
  ShieldCheck,
  Users,
  FileText,
  TrendingUp,
  Search,
  Handshake,
  BadgeCheck,
} from "lucide-react";

const services = [
  {
    title: "Strategic Property Investment Advisory",
    description:
      "We provide expert guidance to help you identify high-growth investment opportunities that align with your financial goals.",
    icon: TrendingUp,
  },
  {
    title: "Residential & Commercial Consultation",
    description:
      "Whether buying a home or a commercial space, we offer tailored advice to ensure you make the best choice.",
    icon: Building2,
  },
  {
    title: "Market Research & Price Analysis",
    description:
      "Our in-depth market analysis helps you understand current trends and fair property valuations.",
    icon: Search,
  },
  {
    title: "Property Valuation Guidance",
    description:
      "Get accurate assessments of property value to ensure you get the best deal, whether buying or selling.",
    icon: FileText,
  },
  {
    title: "Negotiation & Deal Structuring",
    description:
      "We handle negotiations and structure deals to protect your interests and maximize value.",
    icon: Handshake,
  },
  {
    title: "End-to-End Transaction Advisory",
    description:
      "From initial search to final paperwork, we guide you through every step of the transaction process.",
    icon: ShieldCheck,
  },
];

const whyChooseUs = [
  "Expert market knowledge",
  "Transparent and ethical practices",
  "Personalized consultation",
  "Strong negotiation skills",
  "Long-term relationship approach",
];

export default function AboutPage() {
  return (
    <main>
      {/* ================= Hero / Founder Section ================= */}

      {/* ================= About Us Section ================= */}
      <section className="bg-neutral-50 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="mb-3 text-sm uppercase tracking-widest text-amber-600">
            About Us
          </p>
          <h2 className="mb-6 text-3xl font-medium text-neutral-800">
            Your Trusted Real Estate Consultants
          </h2>
          <p className="mb-6 text-md leading-relaxed text-neutral-600">
            At Umang Realtors, we are more than property dealers — we are
            professional real estate consultants committed to helping clients make
            smart, confident, and profitable property decisions.
          </p>
          <p className="text-md leading-relaxed text-neutral-600">
            Real estate is one of the most important financial decisions in life.
            Whether you are buying, selling, investing, or leasing, our role is to
            provide expert guidance, in-depth market insights, and strategic
            advice that aligns with your goals.
          </p>
        </div>
      </section>

      {/* ================= Who We Are Section ================= */}
      <section className="max-w-6xl lg:mx-auto mx-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <p className="mb-3 text-sm uppercase tracking-widest text-amber-600">
              Who We Are
            </p>
            <h2 className="mb-6 text-3xl font-medium text-neutral-800">
              Client-Focused & Result-Oriented
            </h2>
            <p className="mb-6 text-md leading-relaxed text-neutral-600">
              Umang Realtors is a client-focused real estate consultancy firm
              dedicated to delivering transparent, research-driven, and
              result-oriented solutions. With strong market knowledge and industry
              experience, we assist individuals, investors, and businesses in
              navigating the complex real estate landscape with clarity and
              confidence.
            </p>
            <p className="text-md font-medium text-amber-700 italic">
              "We believe that the right consultation leads to the right
              investment."
            </p>
          </div>
          {/* Placeholder for an image or graphic if desired, or just keeping the layout balanced */}
          <Image src="/about-image-1.png" className="rounded-lg" alt="About" width={500} height={300} />
        </div>
      </section>

      <section className="pb-10 lg:pb-16">
        <div className="max-w-6xl mx-6 xl:mx-auto ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-100">
              <p className="mb-4 text-sm uppercase tracking-widest text-amber-600 font-semibold">
                Our Mission
              </p>
              <p className="text-md leading-relaxed text-neutral-700">
                To provide honest, data-driven real estate consultancy that
                empowers clients to make informed and profitable property
                decisions.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-100">
              <p className="mb-4 text-sm uppercase tracking-widest text-amber-600 font-semibold">
                Our Vision
              </p>
              <p className="text-md leading-relaxed text-neutral-700">
                To be recognized as a trusted and reliable real estate
                consulting firm known for integrity, professionalism, and
                long-term client relationships.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ================= What We Do Section ================= */}
      <section className="bg-neutral-900 text-white py-16">
        <div className="max-w-6xl mx-6 xl:mx-auto ">
          <div className="text-center mb-10">
            <p className="mb-3 text-sm uppercase tracking-widest text-amber-400">
              What We Do
            </p>
            <h2 className="text-3xl font-medium mb-">
              Professional Real Estate Consultation
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Our approach is analytical, transparent, and tailored to each
              client’s specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-neutral-800 p-8 rounded-lg hover:bg-neutral-700 transition duration-300"
              >
                <service.icon className="w-10 h-10 text-amber-500 mb-4" />
                <h3 className="text-xl font-medium mb-3">{service.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Why Choose Us Section ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-6 xl:mx-auto ">
          <div className=" mb-8">

            <h2 className="text-3xl font-medium text-neutral-800 mb-4">
              Why Choose Umang Realtors?
            </h2>
            <p className="text-neutral-600 text-md">
              At Umang Realtors, we don’t just help you find properties — we help
              you make the right property decisions.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 max-w-6xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                  <BadgeCheck className="w-5 h-5 text-amber-600" />
                </div>
                <span className="text-md text-neutral-700 font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ================= Our Commitments Section ================= */}
      <section className="bg-neutral-50 py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="mb-6 text-3xl font-bold text-neutral-800">
            Our Commitment
          </h2>
          <p className="text-md leading-relaxed italic text-amber-700">
            "We are committed to delivering complete client satisfaction by providing secure investment
            opportunities backed by a 100% assurance of safety and strong potential returns."
          </p>
        </div>
      </section>
    </main>
  );
}
