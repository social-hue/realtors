import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from './blogData';

export const metadata: Metadata = {
  title: 'Blogs | Umang Realtors',
  description: 'Read the latest real estate insights, market trends, and news about Dholera SIR from Umang Realtors.',
};

export default function BlogsPage() {
  return (
    <main>
      {/* ================= Hero Section ================= */}
      <section className="relative bg-slate-900 py-10 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-slate-500 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-400 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-amber-400 font-medium">
            Insights & Updates
          </p>
          <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
            Our Blog
          </h1>
          <p className="text-md text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Stay informed with the latest news, market trends, and expert opinions on real estate and property investment in Dholera SIR and beyond.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <span className="w-12 h-1 bg-amber-500 rounded-full" />
            <span className="w-3 h-1 bg-amber-500/40 rounded-full" />
            <span className="w-3 h-1 bg-amber-500/20 rounded-full" />
          </div>
        </div>
      </section>

      {/* ================= Blog Cards Section ================= */}
      <section className="bg-neutral-50 py-12">
        <div className="max-w-6xl mx-6 xl:mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link href={`/blogs/${post.id}`} key={post.id} className="group flex flex-col bg-white rounded-lg shadow-sm border border-neutral-100 overflow-hidden hover:shadow-md transition-all duration-300">
                {/* Image Container */}
                <div className="relative h-50 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-amber-600 uppercase tracking-wide shadow-sm">
                    {post.category}
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-4 flex flex-col flex-grow">
                  <div className="flex items-center text-xs text-neutral-500 mb-3 space-x-3">
                    <span>{post.date}</span>
                    <span>&bull;</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-neutral-800 mb-3 group-hover:text-amber-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-neutral-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto pt-4 border-t border-neutral-100 flex items-center text-sm font-semibold text-slate-900 group-hover:text-amber-600 transition-colors">
                    Read Article
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
