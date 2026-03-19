"use client";
import { Menu, X, MapPin, ArrowRight, Phone, Mail, Instagram, Linkedin, Facebook, CheckCircle2, Youtube } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      setMessage(data.message);
      if (res.ok) setEmail("");
    } catch {
      setMessage("Network error. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-6xl mx-6 lg:mx-8 xl:mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-8">

            {/* Brand */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Umang Realtors</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Empowering investors with premium land parcels in India's first smart city.
                Trust, Transparency, and Tomorrow.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-amber-500 mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
              <ul className="space-y-4 text-slate-300 text-sm">
                <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="/projects" className="hover:text-white transition-colors">Projects</a></li>
                <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="/about-dholera" className="hover:text-white transition-colors">About Dholera</a></li>
                <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-amber-500 mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
              <ul className="space-y-4 text-slate-300 text-sm">
                <li className="flex items-start gap-3">
                    <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                    <div className="flex flex-col">
                      <span className="whitespace-nowrap">+91 7303789661</span>
                      <span className="whitespace-nowrap">+91 93110 46655</span>
                    </div>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4" /> info@umangrealtors.com
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-amber-400">Head Office:</span><br />
                    2319, Gold Wing, Wave One, Noida - 201301
                  </div>
                </li>
                <li className="md:hidden flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <div>
                    B-701, 7th Floor West Gate, By True Value Tower, Nr YMCA Club, SG Highway, Ahmedabad, 380015
                  </div>
                </li>
                <li className="md:hidden flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <div>
                    Near Novotel Hotel, 1305-A, Mondeal Heights, Sarkhej – Gandhinagar Hwy, Ahmedabad, Gujarat 380015
                  </div>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-bold text-amber-500 mb-6 uppercase tracking-wider text-sm">Stay Updated</h4>
              <div >
                <form className="flex gap-2" onSubmit={handleSubmit}>
                  <input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-slate-800 border-none text-white text-sm px-4 py-2 w-full focus:ring-1 focus:ring-amber-500 outline-none rounded-sm"
                  />
                  <button disabled={loading}
                    className="bg-amber-600 px-4 py-2 rounded-sm hover:bg-amber-700 transition-colors">
                    {loading ? (
                      <svg
                        className="h-4 w-4 animate-spin text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        />
                      </svg>
                    ) : (
                      <ArrowRight className="h-4 w-4 text-white" />
                    )}
                  </button>
                </form>
              </div>

              <div className="flex gap-4 mt-8">
                <a target='_blank' href="https://www.facebook.com/profile.php?id=61585655565269">
                  <Facebook className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer transition-colors" />
                </a>
                <a target='_blank' href="https://www.linkedin.com/company/vrindavan-city-dholera-smart-choice-in-real-estate/">
                  <Linkedin className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer transition-colors" />
                </a>
                <a target='_blank' href="https://www.instagram.com/umangrealtorsnoida">
                  <Instagram className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer transition-colors" />
                </a>
                <a target='_blank' href="https://www.youtube.com/@umangrealtors">
                  <Youtube size={22} className="text-slate-400 hover:text-white cursor-pointer transition-colors" />
                </a>
              </div>

            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} Umang SCL Private Ltd. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="/privacy-policy" className="hover:text-slate-300">Privacy Policy</a>
              <a href="/terms-condition" className="hover:text-slate-300">Terms of Service</a>
            </div>
          </div>

        </div>
      </footer>
    </>
  )
}