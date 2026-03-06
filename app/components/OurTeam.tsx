"use client";
import { User, Briefcase, TrendingUp, Users, Megaphone, BarChart3 } from "lucide-react";
import Image from "next/image";

const teamMembers = [
    {
        name: "Varsha Jaiswal",
        designation: "Associate Director",
        bio: "As Associate Director, she oversees overall management and administrative operations, ensuring smooth coordination across departments. She plays a key role in strategic planning, operational efficiency, and organizational growth.",
        icon: Briefcase,
        accent: "from-slate-300 to-slate-300",
        highlights: ["Strategic Planning", "Operations Management", "Organizational Growth"],
        image: "/varsha.jpeg",
    },
    {
        name: "Apurva Rai",
        designation: "Asst. Director Sales",
        bio: "As Assistant Director, she manages social media platforms while leading sales initiatives. Her expertise in audience engagement and lead conversion contributes significantly to business expansion.",
        icon: Megaphone,
        accent: "from-slate-300 to-slate-300",
        highlights: ["Social Media", "Lead Conversion", "Business Expansion"],
        image: "/apurva.jpeg",
    },
    {
        name: "Shakil Ahmad",
        designation: "Head of Digital Marketing & Real Estate Sales",
        bio: "As Digital Marketing Head and Real Estate Sales Expert, he drives strategic marketing campaigns while leading high-performing sales initiatives. ",
        icon: TrendingUp,
        accent: "from-slate-300 to-slate-300",
        highlights: ["Digital Marketing", "Sales Strategy", "Brand Visibility"],
        image: "/shakil.jpeg",
    }
];

export default function OurTeam() {
    return (
        <main>
            <section className="max-w-6xl mx-6 xl:mx-auto py-8 md:py-14">
                <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
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
                            A vision in trust, <br /> clarity, and long-term value.
                        </h1>
                        <p className="mb-4 text-md leading-relaxed text-neutral-600">
                            Founded by Mr. Sanjay Bhardwaj, a professional deeply rooted in the
                            local real estate landscape, the company was created to redefine
                            property transactions through transparency, trust, and informed
                            decision-making. Guided by the belief that real estate is about
                            shaping futures - not just buying or selling - his focus has always
                            been on honest guidance and long-term relationships.
                        </p>
                        <p className="text-md leading-relaxed text-neutral-600">
                            With a grounded personality and experience in international-standard
                            event design, hospitality management, and investment-driven real
                            estate, Mr. Bhardwaj plays a pivotal role in client service, sales,
                            and communications, ensuring every interaction reflects
                            professionalism, clarity, and care.
                        </p>
                    </div>
                </div>
            </section>
            {/* ================= Hero Section ================= */}
            <section className="relative bg-slate-900 py-10 overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-72 h-72 bg-slate-500 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-400 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
                </div>

                <div className="relative max-w-4xl mx-auto px-6 text-center">
                    <p className="mb-4 text-sm uppercase tracking-[0.25em] text-amber-400 font-medium">
                        The People Behind Our Vision
                    </p>
                    <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
                        Meet Our Team
                    </h1>
                    <p className="text-md text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                        A dedicated group of professionals committed to delivering excellence
                        in real estate consulting. Together, we bring expertise, integrity, and
                        passion to every client relationship.
                    </p>
                    <div className="mt-8 flex justify-center gap-3">
                        <span className="w-12 h-1 bg-amber-500 rounded-full" />
                        <span className="w-3 h-1 bg-amber-500/40 rounded-full" />
                        <span className="w-3 h-1 bg-amber-500/20 rounded-full" />
                    </div>
                </div>
            </section>


            {/* ================= Team Cards Section ================= */}
            <section className="bg-neutral-50 py-8 md:py-16">
                <div className="max-w-6xl mx-6 xl:mx-auto">
                

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className=" bg-white rounded-lg overflow-hidden shadow-sm border border-neutral-100 hover:shadow-md transition-all duration-300"
                            >
                                {/* Image / Avatar Area */}
                                <div className={`relative h-50 bg-gradient-to-br ${member.accent} flex items-center justify-center`}>
                                    {/* Decorative pattern */}
                                    <div className="absolute inset-0 opacity-10">
                                        <svg className="w-full h-full" viewBox="0 0 400 300" fill="none">
                                            <circle cx="50" cy="50" r="80" stroke="black" strokeWidth="0.5" />
                                            <circle cx="350" cy="250" r="120" stroke="black" strokeWidth="0.5" />
                                            <circle cx="200" cy="150" r="160" stroke="black" strokeWidth="0.3" />
                                        </svg>
                                    </div>
                                    <div className="overflow-hidden relative w-38 h-38 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                                        <Image src={member.image} alt={member.name} className="rounded-full" width={500} height={500} />
                                    </div>
                                    {/* Name overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent p-3 pb-2">
                                        <h3 className="text-lg font-bold text-white">{member.name}</h3>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <member.icon className="w-4 h-4 text-amber-600 flex-shrink-0" />
                                        <span className="text-sm font-semibold text-amber-700 uppercase tracking-wide">
                                            {member.designation}
                                        </span>
                                    </div>
                                    <p className="text-neutral-600 text-sm leading-relaxed">
                                        {member.bio}
                                    </p>

                                    {/* Skill Tags */}

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= Values Strip ================= */}
            <section className="bg-slate-900 py-14">
                <div className="max-w-6xl mx-6 xl:mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="space-y-3">
                            <div className="w-12 h-12 mx-auto rounded-full bg-amber-500/10 flex items-center justify-center">
                                <Users className="w-6 h-6 text-amber-400" />
                            </div>
                            <h3 className="text-lg font-semibold text-white">Collaborative</h3>
                            <p className="text-neutral-400 text-sm">
                                We work as one team to deliver seamless experiences for every client.
                            </p>
                        </div>
                        <div className="space-y-3">
                            <div className="w-12 h-12 mx-auto rounded-full bg-amber-500/10 flex items-center justify-center">
                                <BarChart3 className="w-6 h-6 text-amber-400" />
                            </div>
                            <h3 className="text-lg font-semibold text-white">Data-Driven</h3>
                            <p className="text-neutral-400 text-sm">
                                Every strategy is backed by deep market research and analytics.
                            </p>
                        </div>
                        <div className="space-y-3">
                            <div className="w-12 h-12 mx-auto rounded-full bg-amber-500/10 flex items-center justify-center">
                                <Briefcase className="w-6 h-6 text-amber-400" />
                            </div>
                            <h3 className="text-lg font-semibold text-white">Professional</h3>
                            <p className="text-neutral-400 text-sm">
                                Integrity and professionalism are at the core of everything we do.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= CTA Section ================= */}
            <section className="bg-white py-16">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-neutral-800 mb-4">
                        Want to Work With Us?
                    </h2>
                    <p className="text-neutral-600 mb-8 leading-relaxed">
                        Our team is ready to help you navigate your real estate journey.
                        Whether you&apos;re looking to invest, buy, or explore opportunities in
                        Dholera SIR, we&apos;re just a call away.
                    </p>
                    <a href="tel:+917303789661">
                        <button className="cursor-pointer px-8 py-3.5 bg-slate-900 text-white rounded-sm hover:bg-slate-800 transition-all duration-300 shadow-lg shadow-slate-900/20 font-medium tracking-wide">
                            Get in Touch
                        </button>
                    </a>
                </div>
            </section>
        </main>
    );
}
