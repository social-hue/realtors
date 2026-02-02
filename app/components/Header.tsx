"use client";
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import InquiryModal from './InquiryModal';

export default function Header() {

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      <nav className={`h-16 sticky top-0 left-0 right-0 z-50 transition-all shadow-sm bg-white duration-300 ${scrolled
        ? "bg-white shadow-sm backdrop-blur-sm"
        : "bg-transparent"
        }`}>
        <div className="max-w-7xl mx-auto px-4 flex h-full items-center justify-between">
          <a href="/">    
            <div className="flex items-center">    
              <img className='h-16 w-45 object-cover' src="/3.png" alt="logo" />
            </div>                                                
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-slate-800">
            <a href="/about" className="hover:text-amber-600 transition-colors">About</a>
            <a href="/projects" className="hover:text-amber-600 transition-colors">Projects</a>
            {/* <a href="#gallery" className="hover:text-amber-600 transition-colors">Gallery</a> */}
            {/* <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-2.5 bg-slate-900 text-white rounded-sm hover:bg-slate-800 transition-all duration-300 shadow-lg shadow-slate-900/20"
            >
              Inquire Now
            </button> */}
            <a href="tel:7838697921">
            <button
              className="w-full px-6 py-3 bg-slate-900 text-white rounded-sm hover:bg-slate-800 transition"
            >
              Inquire Now
            </button>
            </a>
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-slate-900"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {open ? <div
          className={`md:hidden fixed left-0 right-0 z-40 bg-white
          transition-all duration-300 ${open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="bg-white px-6 py-6 space-y-4 shadow-md">
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
            <a href="tel:7838697921">
              <button className="w-full px-6 py-3 bg-slate-900 text-white rounded-sm hover:bg-slate-800 transition">
              Inquire Now
              </button>
            </a>
            {/* <button
              onClick={() => {
                setIsModalOpen(true);
                setOpen(false);
              }}
              className="w-full px-6 py-3 bg-slate-900 text-white rounded-sm hover:bg-slate-800 transition"
            >
              Inquire Now
            </button> */} 
          </div>
        </div> : <></>}
      </nav>
      <InquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}