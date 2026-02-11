import React from "react";

export default function NewsTicker() {
  const newsItems = [
    <span key="call">
      <a href="tel:7303789661" className="hover:underline hover:text-blue-600 transition-colors">
        Call 7303789661
      </a>{" "}
      | Schedule Your Site Visit
    </span>,
    "FREE Site Visit | From Ahmedabad To Dholera | Travel, Meals & Stay Included",
    "Exclusive Plots Available for Pre-Booking",
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-5">
      <div className="relative flex items-center bg-white/50 backdrop-blur-md px-5 py-2.5 border border-zinc-600/60 rounded-full shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] overflow-hidden group">

        {/* Subtle Label */}
        <div className="flex items-center gap-2 mr-3 border-r border-zinc-200 pr-3">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-700 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-700"></span>
          </span>
          <span className="text-xs font-bold tracking-[0.15em] uppercase text-zinc-500 whitespace-nowrap">
            Updates
          </span>
        </div>

        {/* Sliding news container */}
        <div className="relative w-full overflow-hidden">
          {/* Edge Fades for Sophistication */}
          <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 bg-gradient-to-l from-white to-transparent z-10"></div>

          <div className="flex animate-marquee whitespace-nowrap">
            {newsItems.concat(newsItems).map((item, index) => (
              <span
                key={index}
                className="mx-5 text-zinc-600 text-sm tracking-wide whitespace-nowrap"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 40s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}