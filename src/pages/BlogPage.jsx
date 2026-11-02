import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Calendar, ArrowUpRight } from 'lucide-react';
import { blogData } from '../data/blogData';
import CTASection from '../components/CTASection';

export default function BlogPage({ onOpenCalendly }) {
  const featured = blogData[0];
  const others = blogData.slice(1);

  return (
    <div className="w-full pt-28 lg:pt-36">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md border border-[#E4E6E9] bg-white text-xs font-vietnam font-medium text-[#4F4F4F] mb-6">
          <span>Articles & Insights</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#3649F5]"></span>
        </div>

        <h1 className="font-switzerMedium text-4xl sm:text-6xl text-[#0A0A0A] tracking-tight leading-[1.1]">
          Engineering, Design & <br />
          <span className="text-[#3649F5]">AI Product Strategy</span>
        </h1>

        <p className="mt-6 font-vietnam text-base sm:text-lg text-[#555555] max-w-2xl mx-auto leading-relaxed">
          Actionable blueprints, architectural deep dives, and hard-learned lessons from shipping AI products for global startups.
        </p>
      </section>

      {/* Featured Big Card */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
        <Link
          to={`/blog/${featured.slug}`}
          className="group block rounded-3xl bg-[#0B0B0B] text-white overflow-hidden border border-[#222222] shadow-2xl grid grid-cols-1 lg:grid-cols-12 items-center hover:border-[#444444] transition-all"
        >
          <div className="lg:col-span-6 h-full min-h-[350px] relative overflow-hidden bg-neutral-900">
            <img
              src={featured.coverImage}
              alt={featured.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <div className="lg:col-span-6 p-8 sm:p-12 space-y-4">
            <div className="flex items-center gap-3 text-xs font-vietnam text-neutral-400">
              <span className="px-3 py-1 rounded-full bg-[#1C1C1C] border border-[#333333] text-[#3649F5] font-semibold">
                {featured.category}
              </span>
              <span>{featured.date}</span>
              <span>•</span>
              <span>{featured.readTime}</span>
            </div>

            <h2 className="font-switzer font-bold text-2xl sm:text-3xl text-white group-hover:text-[#3649F5] transition-colors leading-snug">
              {featured.title}
            </h2>

            <p className="font-vietnam text-sm sm:text-base text-neutral-300 leading-relaxed">
              {featured.excerpt}
            </p>

            <div className="pt-4 flex items-center gap-3">
              <img
                src={featured.author.avatar}
                alt={featured.author.name}
                className="w-9 h-9 rounded-full object-cover border border-white/20"
              />
              <div>
                <span className="font-switzer font-semibold text-xs text-white block">
                  {featured.author.name}
                </span>
                <span className="font-vietnam text-[11px] text-neutral-400">
                  {featured.author.role}
                </span>
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* Other Articles Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {others.map((article) => (
            <Link
              key={article.id}
              to={`/blog/${article.slug}`}
              className="group bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div className="h-48 overflow-hidden bg-neutral-100 relative">
                <img
                  src={article.coverImage}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-sm text-[11px] font-semibold font-vietnam text-neutral-900">
                  {article.category}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-vietnam text-neutral-400 mb-2">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="font-switzer font-bold text-lg text-neutral-950 group-hover:text-[#3649F5] transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="font-vietnam text-xs sm:text-sm text-neutral-600 mt-2.5 line-clamp-2 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-xs font-semibold font-vietnam text-[#3649F5] flex items-center gap-1">
                    Read Article
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTASection onOpenCalendly={onOpenCalendly} />
    </div>
  );
}

