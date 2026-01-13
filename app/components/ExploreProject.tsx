import Image from "next/image";
import Link from "next/link";

export default function ExploreProject() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <p className="text-sm tracking-widest text-amber-600 font-medium uppercase mb-3">
            Featured Project
          </p>

          <h2 className="text-4xl font-medium text-slate-900 leading-tight mb-6">
            Explore Latest Project <br />
            <span className="text-amber-600">
              Dholera Vrindavan City
            </span>
          </h2>

          <p className="text-slate-600 leading-relaxed mb-6">
            Dholera Vrindavan City is a thoughtfully planned residential plotting
            project located within the Dholera Special Investment Region (SIR).
            Designed for long-term growth and peaceful living, the project
            offers clear-title plots, modern infrastructure, and excellent
            connectivity to upcoming industrial and civic developments.
          </p>

          <ul className="space-y-3 text-slate-700 mb-8">
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

          <div className="flex gap-4">
            <Link
              href="/dholera-plan.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-slate-900 text-white rounded-sm hover:bg-slate-800 transition"
            >
              View Project
            </Link>

            <Link
              href="https://wa.me/919560986669" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 text-slate-800 rounded-sm hover:border-slate-900 hover:text-slate-900 transition"
            >
              Inquire Now
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-[420px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/dholeracity.png"
            alt="Dholera Vrindavan City Project"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
