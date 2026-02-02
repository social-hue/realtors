"use client";

import { ShieldCheck, Building2, Users, FileText } from "lucide-react";

const features = [
  {
    title: "Complete Transparency",
    description:
      "No hidden charges, no misleading promises. Every detail is clearly communicated, so you can make informed decisions with confidence.",
    icon: ShieldCheck,
  },
  {
    title: "Curated Properties Only",
    description:
      "We carefully shortlist properties based on quality, location, and long-term value, ensuring you invest in what truly matters.",
    icon: Building2,
  },
  {
    title: "Client-First Approach",
    description:
      "Your needs guide our recommendations. We focus on understanding your goals before suggesting any property.",
    icon: Users,
  },
  {
    title: "End-to-End Assistance",
    description:
      "From site visits to documentation and final handover, we support you at every step of the journey.",
    icon: FileText,
  },
];

export default function WhyChooseUs() {
  return (

    <section className="relative bg-[#fafafa] py-12">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-sm uppercase font-medium tracking-widest text-amber-600">
            Why Choose Us
          </p>
          <h2 className="text-4xl font-medium leading-tight text-slate-900">
            Built on trust, guided by integrity, <br />
            focused on long-term value.
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {features.map((item, index) => (
            <div
              key={index}
              className="group transition-all duration-300"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-neutral-200 text-neutral-800">
                <item.icon size={22} strokeWidth={1.5} />     
              </div>

              <h3 className="mb-3 text-xl font-normal text-neutral-900">
                {item.title}
              </h3>

              <p className="text-sm leading-relaxed text-neutral-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
