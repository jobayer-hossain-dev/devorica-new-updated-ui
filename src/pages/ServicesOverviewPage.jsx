import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Layers, Cpu, Users, Wrench, Palette, ArrowUpRight } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { TechStackMarquee } from '../components/Marquee';
import CTASection from '../components/CTASection';
import ContactSection from '../components/ContactSection';

export default function ServicesOverviewPage({ onOpenProjectRequest, onOpenCalendly }) {
  const iconMap = {
    'ai-mvp-development': Sparkles,
    'product-development': Layers,
    'ai-automation': Cpu,
    'dedicated-teams': Users,
    'maintenance-care': Wrench,
    'product-design': Palette
  };

  return (
    <div className="w-full pt-28 lg:pt-36">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-16 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#E4E6E9] bg-white px-3 py-1 text-xs font-medium uppercase tracking-wider text-[#4F4F4F] mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-[#3649F5]"></span>
          <span>OUR CAPABILITIES</span>
        </div>

        <h1 className="font-switzerMedium text-3xl font-medium tracking-tight text-[#0A0A0A] sm:text-5xl lg:text-6xl leading-[1.1]">
          Engineered for Scale, <br />
          <span className="text-[#3649F5]">Designed for Impact.</span>
        </h1>

        <p className="mt-5 font-vietnam text-base sm:text-lg text-[#4A5565] max-w-2xl mx-auto leading-relaxed">
          Design, high-performance engineering, and applied intelligence under one roof. We take complete ownership from napkin sketch to cloud scale.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((srv) => {
            const Icon = iconMap[srv.id] || Sparkles;
            return (
              <div
                key={srv.id}
                className="bg-[#0B0B0B] text-white rounded-2xl p-8 sm:p-10 border border-[#222222] shadow-xl flex flex-col justify-between hover:border-[#3649F5]/50 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#141414] border border-[#2A2A2A] flex items-center justify-center text-[#3649F5] group-hover:bg-[#3649F5] group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-vietnam font-medium px-3 py-1 rounded-full bg-[#141414] border border-[#2A2A2A] text-[#3649F5]">
                      {srv.badge}
                    </span>
                  </div>

                  <h3 className="font-switzerMedium text-2xl font-medium text-white group-hover:text-[#3649F5] transition-colors">
                    {srv.title}
                  </h3>

                  <p className="font-vietnam text-sm text-[#B7B7B7] mt-3 leading-relaxed">
                    {srv.subtitle}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mt-8 pt-6 border-t border-[#1C1C1C]">
                    {srv.metrics.slice(0, 2).map((m, idx) => (
                      <div key={idx}>
                        <span className="font-switzerMedium text-xl font-medium text-white block">
                          {m.value}
                        </span>
                        <span className="font-vietnam text-xs text-[#8E8E93]">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#1C1C1C] flex items-center justify-between">
                  <span className="text-xs font-medium text-[#8E8E93] font-vietnam">
                    Fixed scope from {srv.pricing[0].price}
                  </span>
                  <Link
                    to={`/services/${srv.slug}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#191919] border border-[#2A2A2A] group-hover:bg-[#3649F5] group-hover:border-[#3649F5] text-white text-xs font-medium font-vietnam transition-colors"
                  >
                    <span>View Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <TechStackMarquee />
      <CTASection onOpenCalendly={onOpenCalendly} />
      <ContactSection onOpenCalendly={onOpenCalendly} />
    </div>
  );
}

