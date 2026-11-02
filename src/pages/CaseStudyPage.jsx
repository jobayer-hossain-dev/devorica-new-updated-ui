import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, Quote, ExternalLink, Calendar, Layers, Users } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import CTASection from '../components/CTASection';
import ContactSection from '../components/ContactSection';

export default function CaseStudyPage({ onOpenProjectRequest, onOpenCalendly }) {
  const { slug } = useParams();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  // Find next project for bottom pagination
  const currentIndex = projectsData.findIndex((p) => p.slug === slug);
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];

  return (
    <div className="w-full pt-28 lg:pt-36">
      {/* Top Breadcrumb */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-8">
        <Link
          to="/work"
          className="inline-flex items-center gap-2 text-xs font-semibold font-vietnam text-neutral-500 hover:text-neutral-900 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Work</span>
        </Link>
      </div>

      {/* Case Study Hero */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md border border-[#E4E6E9] bg-white text-xs font-vietnam font-medium text-[#4F4F4F] mb-4">
          <span>{project.category}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#3649F5]"></span>
        </div>

        <h1 className="font-switzerMedium text-3xl sm:text-5xl lg:text-6xl text-[#0A0A0A] tracking-tight leading-[1.1]">
          {project.title}: {project.tagline}
        </h1>

        {/* Project Meta Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 py-6 border-y border-[#ECECEC]">
          <div>
            <span className="text-xs text-[#888888] font-vietnam block">Client</span>
            <span className="text-sm font-medium font-switzerMedium text-[#0A0A0A] mt-1 block">
              {project.client}
            </span>
          </div>
          <div>
            <span className="text-xs text-[#888888] font-vietnam block">Timeline</span>
            <span className="text-sm font-medium font-switzerMedium text-[#0A0A0A] mt-1 block">
              {project.timeline}
            </span>
          </div>
          <div>
            <span className="text-xs text-[#888888] font-vietnam block">Primary Deliverable</span>
            <span className="text-sm font-medium font-switzerMedium text-[#0A0A0A] mt-1 block">
              {project.services[0]}
            </span>
          </div>
          <div>
            <span className="text-xs text-[#888888] font-vietnam block">Status</span>
            <span className="text-sm font-medium font-switzerMedium text-emerald-600 mt-1 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Live in Production
            </span>
          </div>
        </div>
      </section>

      {/* Hero Visual Image */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 aspect-[16/9] bg-neutral-900">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Metrics Row */}
      <section className="w-full bg-[#0B0B0B] text-white py-14 px-4 sm:px-6 mb-20">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {project.metrics.map((m, idx) => (
            <div key={idx}>
              <span className="font-switzer font-extrabold text-3xl sm:text-5xl text-white block">
                {m.value}
              </span>
              <span className="font-vietnam text-xs sm:text-sm text-neutral-400 mt-1 block">
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Deep Dive Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-20 space-y-16">
        {/* Overview */}
        <div>
          <h2 className="font-switzer font-bold text-2xl sm:text-3xl text-neutral-900 mb-4">
            Project Overview
          </h2>
          <p className="font-vietnam text-base sm:text-lg text-neutral-700 leading-relaxed">
            {project.overview}
          </p>
        </div>

        {/* Challenge vs Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-red-50/50 border border-red-100">
            <h3 className="font-switzer font-bold text-lg text-red-900 mb-3">
              The Critical Challenge
            </h3>
            <p className="font-vietnam text-sm text-red-800 leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-blue-50/50 border border-blue-100">
            <h3 className="font-switzer font-bold text-lg text-blue-900 mb-3">
              Devorica's Engineering Solution
            </h3>
            <p className="font-vietnam text-sm text-blue-800 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Core Features */}
        <div>
          <h2 className="font-switzer font-bold text-2xl text-neutral-900 mb-6">
            Key Architectural Features Shipped
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-[#F9F9FB] border border-neutral-200">
                <CheckCircle2 className="w-5 h-5 text-[#3649F5] shrink-0 mt-0.5" />
                <span className="font-vietnam text-sm text-neutral-800 font-medium">
                  {feat}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div>
          <h2 className="font-switzer font-bold text-xl text-neutral-900 mb-4">
            Technology Stack & Frameworks
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-xl bg-neutral-100 text-neutral-800 text-xs font-semibold font-vietnam border border-neutral-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Testimonial Quote */}
        {project.testimonial && (
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0B0B0B] text-white border border-[#222222] shadow-xl relative overflow-hidden">
            <Quote className="w-10 h-10 text-[#3649F5] mb-4 opacity-70" />
            <p className="font-switzer text-lg sm:text-xl text-neutral-200 leading-relaxed italic">
              "{project.testimonial.quote}"
            </p>
            <div className="mt-6 pt-4 border-t border-[#222222]">
              <h4 className="font-switzer font-bold text-base text-white">
                {project.testimonial.author}
              </h4>
              <p className="text-xs font-vietnam text-neutral-400">
                {project.testimonial.role}
              </p>
            </div>
          </div>
        )}
      </section>

      {/* Next Project Footer Bar */}
      <section className="w-full bg-[#F5F5F7] py-14 px-4 sm:px-6 border-t border-neutral-200">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div>
            <span className="text-xs font-vietnam text-neutral-500 uppercase tracking-wider">
              Next Case Study
            </span>
            <h3 className="font-switzer font-bold text-xl sm:text-2xl text-neutral-900 mt-1">
              {nextProject.title}
            </h3>
          </div>
          <Link
            to={`/work/${nextProject.slug}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0B0B0B] text-white font-vietnam text-sm font-semibold hover:bg-neutral-800 transition-colors"
          >
            <span>View Case Study</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <CTASection onOpenCalendly={onOpenCalendly} />
      <ContactSection onOpenCalendly={onOpenCalendly} />
    </div>
  );
}

