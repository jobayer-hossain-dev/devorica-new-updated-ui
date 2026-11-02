import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Calendar, ArrowUpRight } from 'lucide-react';
import { blogData } from '../data/blogData';

export default function BlogPage({ onOpenCalendly }) {
  const featured = blogData[0];
  const others = blogData.slice(1);
  const referenceBlogImages = [
    'https://zentexx.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdeouaqmod%2Fimage%2Fupload%2Fv1764400249%2Fts4fwmlont7spmknujpf.png&w=3840&q=75',
    'https://zentexx.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdeouaqmod%2Fimage%2Fupload%2Fv1759905318%2Fydy6doiujfv7f4vnvnr.png&w=3840&q=75',
    'https://zentexx.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdeouaqmod%2Fimage%2Fupload%2Fv1758369214%2Frk4w5lmu60njfqpot2jw.png&w=3840&q=75',
    'https://zentexx.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdeouaqmod%2Fimage%2Fupload%2Fv1756709612%2Fqrmr9olkq5a94yd3gs2k.png&w=3840&q=75',
  ];

  return (
    <div className="w-full">
      <section className="mx-auto max-w-6xl h-[282.4px] px-5 pb-[53.5px] pt-[48px] text-center sm:px-6 lg:h-[381.58px] lg:pb-[53.5px] lg:pt-[48px]">
        <div className="mb-6 inline-flex items-center gap-2 font-vietnam text-xs font-semibold text-[#3649F5]">
          <span>Articles &amp; Insights</span>
        </div>

        <h1 className="mx-auto max-w-[1024px] font-switzerMedium text-[32px] leading-[1.16] tracking-tight text-[#0A0A0A] sm:text-6xl lg:text-[72px] lg:leading-[1.07]">
          Engineering, Design & <br />
          <span className="text-[#3649F5]">AI Product Strategy</span>
        </h1>

        <p className="mt-3 font-vietnam text-base sm:mt-6 sm:text-lg text-[#555555] max-w-2xl mx-auto leading-relaxed">
          Actionable blueprints, architectural deep dives, and hard-learned lessons from shipping AI products for global startups.
        </p>
      </section>

      {/* Featured Big Card */}
      <section className="mx-auto mb-0 max-w-7xl px-5 sm:px-8 lg:pr-[42px]">
        <Link
          to={`/blog/${featured.slug}`}
          className="group grid h-[612.71px] min-h-0 grid-cols-1 items-center overflow-hidden rounded-[16px] border border-[#DCDCDC] bg-white text-[#0A0A0A] shadow-sm transition-all hover:shadow-xl lg:h-[532.02px] lg:min-h-0 lg:grid-cols-12"
        >
          <div className="relative h-[255px] min-h-0 overflow-hidden bg-neutral-900 lg:col-span-6 lg:h-full lg:min-h-0">
            <img
              src="https://zentexx.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdeouaqmod%2Fimage%2Fupload%2Fv1764400251%2Fgrck3pvggkah2rg0xkdx.png&w=3840&q=75"
              alt={featured.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <div className="space-y-4 p-7 sm:p-12 lg:col-span-6">
            <div className="flex items-center gap-3 text-xs font-vietnam text-neutral-500">
              <span className="font-semibold text-[#5B45F5]">{featured.author.name}</span>
              <span>•</span>
              <span>{featured.date}</span>
            </div>

            <h2 className="font-switzer text-2xl font-bold leading-snug text-neutral-950 transition-colors group-hover:text-[#3649F5] sm:text-3xl">
              {featured.title}
            </h2>

            <p className="font-vietnam text-sm leading-relaxed text-neutral-600 sm:text-base">
              {featured.excerpt}
            </p>

            <div className="pt-4 flex items-center gap-3">
              <img
                src={featured.author.avatar}
                alt={featured.author.name}
                className="w-9 h-9 rounded-full object-cover border border-white/20"
              />
              <div>
                  <span className="block font-switzer text-xs font-semibold text-neutral-950">
                  {featured.author.name}
                </span>
                  <span className="font-vietnam text-[11px] text-neutral-500">
                  {featured.author.role}
                </span>
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* Other Articles Grid */}
      <section className="mx-auto h-[2058.13px] max-w-6xl px-4 pb-24 sm:px-6 lg:h-[860.71px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {others.map((article, articleIndex) => (
            <Link
              key={article.id}
              to={`/blog/${article.slug}`}
              className="group bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div className="h-48 overflow-hidden bg-neutral-100 relative">
                <img
                  src={referenceBlogImages[articleIndex + 1] || article.coverImage}
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
    </div>
  );
}

