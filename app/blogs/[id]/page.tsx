import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts, blogContent } from '../blogData';

// ─── Static Params ───────────────────────────────────────────────
export async function generateStaticParams() {
    return blogPosts.map((post) => ({ id: post.id }));
}

// ─── Dynamic Metadata ────────────────────────────────────────────
export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>;
}): Promise<Metadata> {
    const { id } = await params;
    const post = blogPosts.find((p) => p.id === id);
    if (!post) return { title: 'Blog Not Found | Umang Realtors' };

    return {
        title: `${post.title} | Umang Realtors Blog`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            images: [post.image],
            type: 'article',
        },
    };
}

// ─── Page Component ──────────────────────────────────────────────
export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const post = blogPosts.find((p) => p.id === id);
    const content = blogContent[id];

    if (!post || !content) notFound();

    const relatedPosts = content.relatedPostIds
        .map((rid) => blogPosts.find((p) => p.id === rid))
        .filter(Boolean);

    return (
        <main className="bg-neutral-50 min-h-screen">
            {/* ═══════════════ Hero Section ═══════════════ */}
            <section className="relative h-[420px] md:h-[460px] overflow-hidden">
                {/* Cover Image */}
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    priority
                    className="object-cover"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-900/30" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end pb-12 px-6">
                    <div className="max-w-3xl mx-auto w-full">
                        {/* Back link */}
                        <Link
                            href="/blogs"
                            className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-amber-400 transition-colors mb-6"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back to Blog
                        </Link>

                        {/* Title */}
                        <h1 className="text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-white leading-tight mb-5">
                            {post.title}
                        </h1>

                        {/* Meta Row */}
                        <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-300">
                            <span className="flex items-center gap-1.5">
                                <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                {post.date}
                            </span>
                            <span className="w-1 h-1 bg-neutral-500 rounded-full" />
                            <span className="flex items-center gap-1.5">
                                <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {post.readTime}
                            </span>
                            <span className="w-1 h-1 bg-neutral-500 rounded-full" />
                            <span className="text-neutral-400">By Umang Realtors</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ Article Body ═══════════════ */}
            <section className="relative">
                {/* Amber accent strip */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500" />

                <div className="max-w-3xl mx-auto px-6 py-14">
                    {/* Intro quote */}
                    <blockquote className="border-l-4 border-amber-500 pl-5 py-2 mb-12 text-lg text-neutral-600 italic leading-relaxed bg-amber-50/50 rounded-r-lg pr-5">
                        {post.excerpt}
                    </blockquote>

                    {/* Sections */}
                    {content.sections.map((section, idx) => (
                        <div key={idx} className="mb-10">
                            <h2 className="text-2xl md:text-[1.65rem] font-bold text-slate-900 mb-4 relative pl-4 before:absolute before:left-0 before:top-1 before:bottom-1 before:w-1 before:bg-amber-500 before:rounded-full">
                                {section.heading}
                            </h2>
                            {section.body.map((paragraph, pIdx) => (
                                <p key={pIdx} className="text-neutral-700 text-[15.5px] leading-[1.85] mb-4">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    ))}

                    {/* ─── Key Takeaways ─── */}
                    <div className="mt-14 mb-6 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-4 md:p-8 shadow-lg">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="flex items-center justify-center w-10 h-10 bg-amber-500/20 rounded-xl">
                                <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white">Key Takeaways</h3>
                        </div>
                        <ul className="space-y-3">
                            {content.keyTakeaways.map((takeaway, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-neutral-300 text-[15px] leading-relaxed">
                                    <span className="mt-1.5 flex-shrink-0 w-2 h-2 bg-amber-500 rounded-full" />
                                    {takeaway}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ═══════════════ Share / Author Bar ═══════════════ */}
            <section className="border-t border-neutral-200">
                <div className="max-w-3xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                    {/* Author */}
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-sm">
                            UR
                        </div>
                        <div>
                            <p className="font-semibold text-slate-900 text-sm">Umang Realtors</p>
                            <p className="text-xs text-neutral-500">Real Estate Experts · Dholera SIR</p>
                        </div>
                    </div>

                    {/* Share */}
                    <div className="flex items-center gap-3">
                        <span className="text-xs text-neutral-500 uppercase tracking-wider font-medium">Share</span>
                        <div className="flex gap-2">
                            {/* Twitter/X */}
                            <a
                                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://www.umangrealtors.com/blogs/${post.id}`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 flex items-center justify-center rounded-full bg-neutral-100 hover:bg-amber-100 text-neutral-600 hover:text-amber-600 transition-colors"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            {/* LinkedIn */}
                            <a
                                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://www.umangrealtors.com/blogs/${post.id}`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 flex items-center justify-center rounded-full bg-neutral-100 hover:bg-amber-100 text-neutral-600 hover:text-amber-600 transition-colors"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                            {/* WhatsApp */}
                            <a
                                href={`https://wa.me/?text=${encodeURIComponent(post.title + ' — ' + `https://www.umangrealtors.com/blogs/${post.id}`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 flex items-center justify-center rounded-full bg-neutral-100 hover:bg-amber-100 text-neutral-600 hover:text-amber-600 transition-colors"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ Related Articles ═══════════════ */}
            {relatedPosts.length > 0 && (
                <section className="bg-white border-t border-neutral-100">
                    <div className="max-w-6xl mx-auto px-6 py-10 md:py-16">
                        {/* Section heading */}
                        <div className="text-center mb-10">
                            <p className="text-sm uppercase tracking-[0.2em] text-amber-500 font-medium mb-2">
                                Continue Reading
                            </p>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                                Related Articles
                            </h2>
                            <div className="mt-4 flex justify-center gap-2">
                                <span className="w-10 h-1 bg-amber-500 rounded-full" />
                                <span className="w-2.5 h-1 bg-amber-500/40 rounded-full" />
                            </div>
                        </div>

                        {/* Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {relatedPosts.map((related) => (
                                <Link
                                    href={`/blogs/${related!.id}`}
                                    key={related!.id}
                                    className="group flex flex-col bg-white rounded-lg shadow-sm border border-neutral-100 overflow-hidden hover:shadow-md transition-all duration-300"
                                >
                                    {/* Image */}
                                    <div className="relative h-48 w-full overflow-hidden">
                                        <Image
                                            src={related!.image}
                                            alt={related!.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-amber-600 uppercase tracking-wide shadow-sm">
                                            {related!.category}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-4 flex flex-col flex-grow">
                                        <div className="flex items-center text-xs text-neutral-500 mb-3 space-x-3">
                                            <span>{related!.date}</span>
                                            <span>&bull;</span>
                                            <span>{related!.readTime}</span>
                                        </div>

                                        <h3 className="text-lg font-bold text-neutral-800 mb-3 group-hover:text-amber-600 transition-colors line-clamp-2">
                                            {related!.title}
                                        </h3>

                                        <p className="text-neutral-600 text-sm leading-relaxed mb-4 line-clamp-3">
                                            {related!.excerpt}
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
            )}

            {/* ═══════════════ CTA Banner ═══════════════ */}
            {/* <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                <div className="max-w-4xl mx-auto px-6 py-16 text-center">
                    <p className="text-sm uppercase tracking-[0.2em] text-amber-400 font-medium mb-3">
                        Ready to Invest?
                    </p>
                    <h2 className="heading text-2xl md:text-3xl font-bold text-white mb-4">
                        Start Your Dholera Investment Journey Today
                    </h2>
                    <p className="text-neutral-400 max-w-xl mx-auto mb-8 text-sm leading-relaxed">
                        Connect with our team of experts to explore premium plots and properties in Dholera SIR. Get personalized guidance tailored to your investment goals.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center px-7 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-colors text-sm shadow-lg shadow-amber-500/20"
                        >
                            Explore Properties
                            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                        <Link
                            href="/blogs"
                            className="inline-flex items-center justify-center px-7 py-3 border border-neutral-600 text-neutral-300 hover:border-amber-500 hover:text-amber-400 font-semibold rounded-lg transition-colors text-sm"
                        >
                            Read More Articles
                        </Link>
                    </div>
                </div>
            </section> */}
        </main>
    );
}
