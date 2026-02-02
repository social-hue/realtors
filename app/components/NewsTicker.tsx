import React from "react";

export default function NewsTicker() {
  const newsItems = [
    "📞 Call 7303789661 | Schedule Your Site Visit",
    "🎉 FREE Site Visit | From Ahmedabad To Dholera | Travel, Meals & Stay Included",
    // "📆 Launching this New Year"
  ];

  return (
    <>
      <div className="w-full flex items-center gap-4 font-medium bg-white/90 backdrop-blur-sm px-4 py-2 shadow-sm border-1 border-zinc-400 overflow-hidden group">
        {/* Fixed heading */}
        <h3 className="hidden md:block text-lg font-semibold text-gray-800 whitespace-nowrap">
          📢 BREAKING :
        </h3>

        {/* Sliding news container */}
        <div className="w-auto overflow-hidden relative">
          <div className="flex animate-marquee whitespace-nowrap">
            {newsItems.concat(newsItems).map((item, index) => (
              <span
                key={index}
                className="mx-4 text-gray-600 text-md text-semibold whitespace-nowrap"
              >
                {item}
              </span>
            ))}
          </div>
          {/* Gradient fade on right */}
          <div className="absolute top-0 right-0 w-10 h-full bg-gradient-to-l from-white/90 to-transparent pointer-events-none"></div>
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
          animation: marquee 30s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
}