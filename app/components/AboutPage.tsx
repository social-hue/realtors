import Image from "next/image";
import { Building2, ShieldCheck, Users, FileText } from "lucide-react";

const services = [
  {
    title: "Residential & Commercial Sales",
    description:
      "We assist buyers and sellers with carefully evaluated residential and commercial properties, ensuring clarity and fair value.",
    icon: Building2,
  },
  {
    title: "Property Investment Advisory",
    description:
      "Strategic guidance for investors focused on long-term appreciation, location growth, and risk-aware decision making.",
    icon: ShieldCheck,
  },
  {
    title: "Client Representation",
    description:
      "We represent your interests with integrity, whether negotiating prices, reviewing documentation, or coordinating site visits.",
    icon: Users,
  },
  {
    title: "End-to-End Support",
    description:
      "From discovery to final possession, we manage the entire process so you can move forward with confidence.",
    icon: FileText,
  },
];

export default function AboutPage() {
  return (
    <main className="mt-12">
      {/* ================= Founder Section ================= */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Founder Image */}
          <div className="relative h-[380px] w-full overflow-hidden rounded-lg">
            <Image
              src="/new_one.png"
              alt="Founder portrait"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Founder Content */}
          <div>
            <p className="mb-3 text-sm uppercase tracking-widest text-amber-600">
              About the Founder
            </p>
            <h1 className="mb-6 text-3xl font-medium leading-tight text-neutral-800">
              A vision rooted in trust, <br /> clarity, and long-term value.
            </h1>
            <p className="mb-4 text-md leading-relaxed text-neutral-600">
            Founded by Mr. Sanjay Bhardwaj, a professional deeply rooted in the local real estate landscape, the company was created to redefine property transactions through transparency, trust, and informed decision-making. Guided by the belief that real estate is about shaping futures - not just buying or selling - his focus has always been on honest guidance and long-term relationships.
            </p>
            <p className="text-md leading-relaxed text-neutral-600">
            With a grounded personality and experience in international-standard event design, hospitality management, and investment-driven real estate, Mr. Bhardwaj plays a pivotal role in client service, sales, and communications, ensuring every interaction reflects professionalism, clarity, and care.
            </p>
          </div>
          
        </div>
      </section>

      {/* ================= Mission Section ================= */}
      <section className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-12 text-center">
          <p className="mb-3 text-sm uppercase tracking-widest text-amber-600">
            Our Mission
          </p>
          <h2 className="mb-6 text-3xl font-medium leading-tight text-neutral-800">
            To make real estate decisions simpler, safer, and more meaningful.
          </h2>
          <p className="mx-auto max-w-3xl text-md leading-relaxed text-neutral-600">
            Our mission is to guide clients through one of life’s most important
            decisions with clarity and confidence. We aim to remove complexity,
            eliminate misinformation, and ensure every client feels informed and
            supported at every stage of their journey.
          </p>
        </div>
      </section>

      {/* ================= Services Section ================= */}
      <section className="mx-auto max-w-7xl px-6 py-12 mb-8">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-sm uppercase tracking-widest text-amber-600">
            What We Do
          </p>
          <h2 className="text-3xl font-medium text-neutral-800">
            Thoughtful services built around your goals.                                                                                                                                     
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-xl bg-white transition-all duration-300"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-neutral-200 text-neutral-800">
                <service.icon size={22} strokeWidth={1.5} />
              </div>
              <h3 className="mb-3 text-lg font-normal text-neutral-900">
                {service.title}
              </h3>
              <p className="text-md leading-relaxed text-neutral-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
