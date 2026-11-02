import React, { useState } from 'react';
import { Search, Plus } from 'lucide-react';
import { faqData } from '../data/faqData';
import CTASection from '../components/CTASection';

export default function FAQPage({ onOpenCalendly }) {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...faqData.map((c) => c.category)];

  const filteredCategories = faqData.map((cat) => {
    const matchingItems = cat.items.filter(
      (item) =>
        item.q.toLowerCase().includes(search.toLowerCase()) ||
        item.a.toLowerCase().includes(search.toLowerCase())
    );
    return { ...cat, items: matchingItems };
  }).filter((cat) => {
    if (activeCategory !== 'All' && cat.category !== activeCategory) return false;
    return cat.items.length > 0;
  });

  return (
    <div className="w-full pt-28 lg:pt-36">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md border border-[#E4E6E9] bg-white text-xs font-vietnam font-medium text-[#4F4F4F] mb-6">
          <span>Knowledge Base</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#3649F5]"></span>
        </div>

        <h1 className="font-switzerMedium text-4xl sm:text-6xl text-[#0A0A0A] tracking-tight leading-[1.1]">
          Frequently Asked Questions
        </h1>

        <p className="mt-4 font-vietnam text-base sm:text-lg text-[#555555] max-w-xl mx-auto">
          Everything you need to know about our engineering standards, timelines, contracts, and IP ownership.
        </p>

        {/* Search input */}
        <div className="max-w-xl mx-auto mt-8 relative">
          <Search className="w-5 h-5 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search questions by keyword (e.g. cost, models, IP, timeline)..."
            className="w-full pl-12 pr-4 py-3.5 rounded-[4px] border border-[#D1D1D1] bg-[#F6F6F6] focus:bg-white focus:outline-none focus:border-[#3649F5] text-sm font-vietnam transition-colors shadow-sm"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={`px-4 py-2 rounded-[4px] text-xs font-vietnam font-medium transition-all cursor-pointer ${
                activeCategory === c
                  ? 'bg-[#0A0A0A] text-white shadow-sm'
                  : 'bg-[#F3F3F5] text-[#555555] hover:bg-[#E8E8E8]'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Accordion Categories */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-24 space-y-12">
        {filteredCategories.length === 0 ? (
          <div className="text-center py-12 text-neutral-500 font-vietnam">
            No matching questions found for "{search}".
          </div>
        ) : (
          filteredCategories.map((group) => (
            <div key={group.category} className="space-y-4">
              <h2 className="font-switzer font-bold text-xl text-neutral-900 border-b border-neutral-200 pb-2">
                {group.category}
              </h2>
              <div className="divide-y divide-neutral-200 bg-[#F9F9FB] rounded-2xl border border-neutral-200 p-6 sm:p-8">
                {group.items.map((item, idx) => (
                  <details key={idx} className="group py-4 first:pt-0 last:pb-0">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-vietnam text-base font-medium text-neutral-900">
                      <span>{item.q}</span>
                      <span className="text-2xl font-light text-neutral-400 group-open:rotate-45 group-open:text-[#3649F5] transition-transform shrink-0">
                        +
                      </span>
                    </summary>
                    <div className="mt-3 font-vietnam text-sm leading-relaxed text-neutral-600 pr-6">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))
        )}
      </section>

      <CTASection onOpenCalendly={onOpenCalendly} />
    </div>
  );
}

