import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import CTASection from '../components/CTASection';
import ContactSection from '../components/ContactSection';

export default function WorkPage({ onOpenProjectRequest, onOpenCalendly }) {
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(projectsData.map((p) => p.category))];

  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === filter);

  return (
    <div className="w-full">
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center pt-32 pb-12 sm:pt-40 sm:pb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md border border-[#E4E6E9] text-xs sm:text-sm font-vietnam font-medium text-[#4F4F4F] mb-6">
          <span>Our Portfolio</span>
          <span className="w-2 h-2 rounded-full bg-[#3649F5]" />
        </div>

        <h1 className="font-switzer font-medium text-4xl sm:text-6xl lg:text-7xl text-[#0A0A0A] tracking-tight leading-[1.1]">
          Products Built for Real Users, <br />
          <span className="text-[#3649F5]">Operations, and Scalable</span> Growth
        </h1>

        <p className="mt-6 font-vietnam text-base sm:text-lg text-[#555555] max-w-2xl mx-auto leading-relaxed">
          Explore our recent case studies across healthcare, fintech, edtech, and enterprise AI automation.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8 sm:mt-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-md text-xs sm:text-sm font-vietnam font-medium transition-all cursor-pointer ${
                filter === cat
                  ? 'bg-[#0A0A0A] text-white shadow-sm'
                  : 'bg-[#F3F3F5] text-[#555555] hover:bg-[#E8E8E8]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid matching Zentexx */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl h-[340px] sm:h-[420px] lg:h-[480px] bg-neutral-900 shadow-lg border border-[#EBEBEB]"
            >
              <img
                src={project.heroImage}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-medium text-white font-vietnam border border-white/20">
                  {project.category}
                </span>
              </div>

              {/* Zentexx Floating Pill Overlay */}
              <Link to={`/work/${project.slug}`}>
                <div className="absolute left-3 right-3 bottom-3 flex items-center justify-between bg-white/95 backdrop-blur-sm lg:rounded-xl rounded-md lg:px-5 lg:py-3.5 px-4 py-3 shadow-lg z-10 transition-transform duration-300 group-hover:translate-y-[-2px]">
                  <div>
                    <span className="text-base lg:text-xl font-switzer font-medium text-[#0A0A0A] block">
                      {project.title}
                    </span>
                    <span className="text-xs font-vietnam text-[#666666] line-clamp-1">
                      {project.tagline}
                    </span>
                  </div>
                  <div className="flex items-center justify-center w-8 h-8 lg:w-11 lg:h-11 rounded-full bg-[#EDEDED] group-hover:bg-[#3649F5] transition-colors shrink-0 ml-3">
                    <ArrowUpRight className="text-[#3649F5] group-hover:text-white lg:w-5 lg:h-5 w-4 h-4 transition-colors" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <CTASection onOpenCalendly={onOpenCalendly} />

      {/* Contact Section */}
      <ContactSection onOpenCalendly={onOpenCalendly} />
    </div>
  );
}
