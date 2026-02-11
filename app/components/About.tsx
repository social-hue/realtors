import Image from "next/image";

export default function About() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      {/* background ambient gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">

          {/* IMAGE BLOCK */}
          <div className="relative flex justify-center md:justify-start">
            {/* polygon / illustration */}
            <div className="absolute -inset-8 -z-10">
              <div className="h-full w-full rounded-full bg-gradient-to-tr from-blue-600/30 via-indigo-500/20 to-purple-600/30 blur-2xl" />
            </div>

            <div className="relative">
              {/* decorative ring */}
              <div className="absolute -inset-4 rounded-full border border-white/10" />

              {/* image */}
              <div className="relative h-[320px] w-[320px] overflow-hidden rounded-full bg-slate-900 shadow-2xl ring-1 ring-white/10">
                <Image
                  src="/about-founder.png"
                  alt="About portrait"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* TEXT BLOCK */}
          <div className="text-left">
            <p className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-slate-300 backdrop-blur">
              About Us
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
              Building experiences that feel
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                {" "}human, elegant & timeless
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300">
              We believe modern digital products should be simple, intentional, 
              and visually refined. Our focus is on creating experiences that feel 
              effortless to use, while still carrying a strong sense of identity 
              and trust.
            </p>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-400">
              With a design-first mindset and deep technical execution, we craft 
              interfaces that scale beautifully — from concept to production.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="rounded-xl bg-white px-6 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-200">
                Learn More
              </button>
              <button className="rounded-xl border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/5">
                Contact Us
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
