"use client";
import { Menu, X, MapPin, ArrowRight, Phone, Mail, Instagram, Linkedin, Facebook, CheckCircle2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import "yet-another-react-lightbox/styles.css";
import Gallery from '../components/Gallery';

const DholeraCapitalLanding = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-amber-500 selection:text-white">
      {/* --- Navigation --- */}

      {/* --- Hero Section --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">

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

        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white shadow-sm backdrop-blur-sm"
          : "bg-transparent"
          }`}>
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-slate-900 flex items-center justify-center rounded-sm">
                <span className="text-amber-500 font-serif font-bold text-xl">U</span>
              </div>
              <span className="text-2xl font-bold leading-relaxed text-slate-900">
                Umang <span className="text-amber-600">Capital</span>
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-slate-800">
              <a href="/about" className="hover:text-amber-600 transition-colors">About</a>
              <a href="/projects" className="hover:text-amber-600 transition-colors">Projects</a>
              {/* <a href="#gallery" className="hover:text-amber-600 transition-colors">Gallery</a> */}
              <button className="px-6 py-2.5 bg-slate-900 text-white rounded-sm hover:bg-slate-800 transition-all duration-300 shadow-lg shadow-slate-900/20">
                Inquire Now
              </button>
            </div>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-900"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
          </div>
          <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[50vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="h-screen bg-white px-6 py-6 space-y-4 shadow-md">
          <a
            href="/about"
            onClick={() => setOpen(false)}
            className="block text-slate-700 font-medium hover:text-amber-600"
          >
            About
          </a>
          <a
            href="/projects"
            onClick={() => setOpen(false)}
            className="block text-slate-700 font-medium hover:text-amber-600"
          >
            Projects
          </a>
          {/* <a
            href="#gallery"
            onClick={() => setOpen(false)}
            className="block text-slate-700 font-medium hover:text-amber-600"
          >
            Gallery
          </a> */}
          <button className="w-full px-6 py-3 bg-slate-900 text-white rounded-sm hover:bg-slate-800 transition">
            Inquire Now
          </button>
        </div>
      </div>
        </nav>

        {/* Abstract Background Image/Overlay */}

        <div className="relative z-10 text-center max-w-4xl px-6 animate-fade-in-up">
          <span className="inline-block mt-4 py-1 px-3 border border-amber-500/50 rounded-full text-amber-400 text-xs font-bold tracking-[0.2em] uppercase mb-6 bg-amber-900/20 backdrop-blur-sm">
            India's First Smart City
          </span>
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6">
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
            <a href="https://wa.me/919560986669?text=Hello%20I%20am%20interested%20in%20Dholera%20Vrindavan%20City%20Project" target="_blank" rel="noopener noreferrer">
            <button className="w-fit px-12 py-4 bg-amber-600 text-white font-medium rounded-sm hover:bg-amber-700 transition-all flex items-center justify-center gap-2">
              Contact Us <ArrowRight className="w-4 h-4" />
            </button>
            </a>
            <a href="/dholera-plan.pdf"
              target="_blank"
              rel="noopener noreferrer">
              <button className="px-8 py-4 bg-transparent border border-slate-600 text-white font-medium rounded-sm hover:bg-white/5 transition-all">
                Download Plan
              </button>
            </a>
          </div>
        </div>

      </section>

      <section id="vision" className="py-16 bg-white overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-4 items-center max-w-7xl mx-auto px-6">

            {/* Text Content */}
            <div className="space-y-8 w-[50%]">
              <h2 className="text-4xl font-bold text-slate-900">
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
            <div className="space-y-8 w-[45%]">
              <h2 className="text-4xl font-bold text-slate-900">
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Strategic Master Plan</h2>
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
            <div className="flex justify-center gap-8 mt-6">
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
      <footer className="bg-slate-900 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

            {/* Brand */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Umang Capital</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Empowering investors with premium land parcels in India's first smart city.
                Trust, Transparency, and Tomorrow.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-amber-500 mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
              <ul className="space-y-4 text-slate-300 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About Project</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Legal Status</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Payment Plans</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog & News</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-amber-500 mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
              <ul className="space-y-4 text-slate-300 text-sm">
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4" /> +91 98765 43210
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4" /> sales@dholeracapital.com
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="w-4 h-4" /> TP-1, Dholera SIR, Gujarat
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-bold text-amber-500 mb-6 uppercase tracking-wider text-sm">Stay Updated</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-slate-800 border-none text-white text-sm px-4 py-2 w-full focus:ring-1 focus:ring-amber-500 outline-none rounded-sm"
                />
                <button className="bg-amber-600 px-4 py-2 rounded-sm hover:bg-amber-700 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="flex gap-4 mt-8">
                <Instagram className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer transition-colors" />
                <Linkedin className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer transition-colors" />
                <Facebook className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} Dholera Capital. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-slate-300">Privacy Policy</a>
              <a href="#" className="hover:text-slate-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DholeraCapitalLanding;