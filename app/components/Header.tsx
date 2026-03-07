"use client";
import { Menu, X, ChevronDown } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import InquiryModal from './InquiryModal';

export default function Header() {

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProjectsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`h-17 sticky top-0 left-0 right-0 z-50 transition-all shadow-sm bg-white duration-300 ${scrolled
        ? "bg-white shadow-sm backdrop-blur-sm"
        : "bg-transparent"
        }`}>
        <div className="max-w-7xl mx-auto px-4 flex h-full items-center justify-between">
          <a href="/">
            <div className="flex items-center">
              <img className='h-16 w-45 object-cover' src="/3.png" alt="logo" />
            </div>
          </a>
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide text-slate-800">
            <a href="/" className="hover:text-amber-600 transition-colors">Home</a>
            <a href="/about" className="hover:text-amber-600 transition-colors">About</a>
            <a href="/about-dholera" className="hover:text-amber-600 transition-colors">Dholera</a>
            <a href="/services" className="hover:text-amber-600 transition-colors">Services</a>
              <div className="relative group" ref={dropdownRef}>
              <button
                onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                className="cursor-pointer flex items-center gap-1 hover:text-amber-600 transition-colors focus:outline-none"
              >
                Projects <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isProjectsOpen ? 'rotate-180' : ''}`} />
              </button>
              <div
                className={`absolute left-0 mt-6 bg-white shadow-xl rounded-md overflow-hidden transition-all duration-300 transform origin-top-left border-t-4 border-amber-500
                ${isProjectsOpen ? 'opacity-100 visible' : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible'}
                `}
              >
                <a href="/projects/vrindavan-city" className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-amber-600 border-b border-slate-100">
                  Vrindavan City (Kavaan)
                </a>
                <a href="/projects/elysian" className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-amber-600 border-b border-slate-100">
                  Elysian By Singla
                </a>
                <a href="/projects/greentech-residency" className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-amber-600">
                  GreenTech Residency (Nestoria)
                </a>
                <a href="/projects/expressview" className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-amber-600">
                  Expressview By Kavvan
                </a>
              </div>
            </div>
            <a href="/our-team" className="hover:text-amber-600 transition-colors">Our Team</a>
            <a href="/blogs" className="hover:text-amber-600 transition-colors">Blogs</a>
          
            {/* <a href="#gallery" className="hover:text-amber-600 transition-colors">Gallery</a> */}
            {/* <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-2.5 bg-slate-900 text-white rounded-sm hover:bg-slate-800 transition-all duration-300 shadow-lg shadow-slate-900/20"
            >
              Inquire Now
            </button> */}
            <a href="tel:+917303789661">
              <button
                className="w-full px-6 py-3 bg-slate-900 text-white rounded-sm hover:bg-slate-800 transition"
              >
                Inquire Now
              </button>
            </a>
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-slate-900 cursor-pointer"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {open ? <div
          className={`lg:hidden fixed left-0 right-0 z-40 bg-white
          transition-all duration-300 ${open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="bg-white px-6 py-6 space-y-4 shadow-md h-screen overflow-y-auto pb-20">
            <a
              href="/"
              onClick={() => setOpen(false)}
              className="block text-slate-700 font-medium hover:text-amber-600"
            >
              Home
            </a>
            <a
              href="/about"
              onClick={() => setOpen(false)}
              className="block text-slate-700 font-medium hover:text-amber-600"
            >
              About
            </a>
            <a
              href="/about-dholera"
              onClick={() => setOpen(false)}
              className="block text-slate-700 font-medium hover:text-amber-600"
            >
              About Dholera
            </a>
            <a
              href="/services"
              onClick={() => setOpen(false)}
              className="block text-slate-700 font-medium hover:text-amber-600"
            >
              Services
            </a>

            <div className="border-t border-slate-100 pt-4 mt-2">
              <span className="block text-slate-400 text-xs font-bold uppercase tracking-widest mb-3">Projects</span>
              <a
                href="/projects/vrindavan-city"
                onClick={() => setOpen(false)}
                className="block py-2 text-slate-700 font-medium hover:text-amber-600 pl-4 border-l-2 border-transparent hover:border-amber-500"
              >
                Vrindavan City
              </a>
              <a
                href="/projects/elysian"
                onClick={() => setOpen(false)}
                className="block py-2 text-slate-700 font-medium hover:text-amber-600 pl-4 border-l-2 border-transparent hover:border-amber-500"
              >
                Elysian By Singla
              </a>
              <a
                href="/projects/greentech-residency"
                onClick={() => setOpen(false)}
                className="block py-2 text-slate-700 font-medium hover:text-amber-600 pl-4 border-l-2 border-transparent hover:border-amber-500"
              >
                GreenTech Residency
              </a>
              <a
                href="/projects/expressview"
                onClick={() => setOpen(false)}
                className="block py-2 text-slate-700 font-medium hover:text-amber-600 pl-4 border-l-2 border-transparent hover:border-amber-500"
              >
                Expressview By Kavvan
              </a>
            </div>

            <a
              href="/our-team"
              onClick={() => setOpen(false)}
              className="block text-slate-700 font-medium hover:text-amber-600"
            >
              Our Team
            </a>
            <a
              href="/blogs"
              onClick={() => setOpen(false)}
              className="block text-slate-700 font-medium hover:text-amber-600"
            >
              Blogs
            </a>

         

            <a href="tel:7838697921">
              <button className="w-full px-6 py-3 bg-slate-900 text-white rounded-sm hover:bg-slate-800 transition mt-4">
                Inquire Now
              </button>
            </a>
          </div>
        </div> : <></>}
      </nav >
      <InquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}