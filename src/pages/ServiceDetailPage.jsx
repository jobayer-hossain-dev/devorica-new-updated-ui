import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  Video, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  Zap, 
  Layers 
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { TechStackMarquee } from '../components/Marquee';
import CTASection from '../components/CTASection';
import ContactSection from '../components/ContactSection';

export default function ServiceDetailPage({ onOpenProjectRequest, onOpenCalendly }) {
  const { slug } = useParams();
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="w-full pt-28 lg:pt-36">
      {/* Top Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-semibold font-vietnam text-neutral-500 hover:text-neutral-900 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Home</span>
          <span className="text-neutral-300">/</span>
          <span className="text-neutral-800">Services</span>
        </Link>
      </div>

      {/* Service Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-[#E4E6E9] bg-white text-xs sm:text-sm font-vietnam font-medium text-[#4F4F4F] mb-6">
          <span>{service.badge}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#3649F5]"></span>
        </div>

        <h1 className="font-switzerMedium text-4xl sm:text-6xl lg:text-[64px] text-[#0A0A0A] tracking-tight leading-[1.1] max-w-4xl mx-auto">
          {service.heroHeading}
        </h1>

        <p className="mt-6 font-vietnam text-base sm:text-lg text-[#555555] max-w-2xl mx-auto leading-relaxed">
          {service.heroDescription}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={onOpenCalendly}
            className="group relative flex w-full sm:w-auto cursor-pointer items-center justify-center overflow-hidden rounded-[4px] bg-[#3649F5] px-8 py-3.5 font-vietnam text-sm sm:text-base font-medium text-white transition hover:bg-[#2A39D8]"
          >
            <span className="flex items-center gap-2">
              <img src="/homePage/gogglemeet.png" alt="" className="w-4 h-4 object-contain brightness-200" />
              <span>Book Call</span>
            </span>
            <span className="ml-2 h-2 w-2 rounded-full bg-white"></span>
          </button>

          <button
            type="button"
            onClick={onOpenProjectRequest}
            className="devorica-metallic-btn flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-3.5 text-sm sm:text-base font-vietnam font-medium text-white transition cursor-pointer"
          >
            <img src="/homePage/cloud upload.png" alt="" className="h-5 w-5 brightness-150" />
            <span>Project Request</span>
          </button>
        </div>
      </section>

      {/* Service Metrics Banner */}
      <section className="w-full bg-[#0B0B0B] text-white py-14 px-4 sm:px-6 mb-20 border-y border-[#222222]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {service.metrics.map((m, idx) => (
            <div key={idx}>
              <span className="font-switzerMedium text-3xl sm:text-5xl text-white block">
                {m.value}
              </span>
              <span className="font-vietnam text-xs sm:text-sm text-neutral-400 mt-1 block">
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* About the Service / Overview */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-20">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-[#E4E6E9] bg-white text-xs font-vietnam font-medium text-[#4F4F4F] mb-3">
            <span>Why It Matters</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#3649F5]"></span>
          </div>
          <h2 className="font-switzerMedium text-3xl sm:text-4xl text-[#0A0A0A] mt-2">
            Engineered for High-Velocity Execution
          </h2>
        </div>
        <p className="font-vietnam text-base sm:text-lg text-[#555555] leading-relaxed text-center">
          {service.overview}
        </p>
      </section>

      {/* 6 Capabilities Cards (Zentexx Dark Style) */}
      <section className="w-full bg-[#000000] px-4 py-20 lg:py-28 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-14">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-[#333333] text-xs font-vietnam font-medium text-[#B0B0B0] mb-3">
              <span>Capabilities</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#3649F5]"></span>
            </span>
            <h2 className="font-switzerMedium text-3xl sm:text-5xl text-white tracking-tight">
              End-to-End Product Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.capabilities.map((cap, idx) => (
              <div key={idx} className="p-8 rounded-[8px] bg-[#121211] border border-[#2A2A2A] hover:border-[#555555] transition-all space-y-3">
                <div className="w-10 h-10 rounded-[4px] bg-[#1E1E1E] text-[#3649F5] flex items-center justify-center font-switzerMedium text-sm border border-[#333333]">
                  0{idx + 1}
                </div>
                <h3 className="font-switzerMedium text-lg text-white">
                  {cap.title}
                </h3>
                <p className="font-vietnam text-xs sm:text-sm text-[#A0A0A0] leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step Process */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20 lg:py-28">
        <div className="max-w-2xl mb-14">
          <span className="text-xs uppercase tracking-widest text-neutral-400 font-vietnam font-semibold block mb-2">
            Process
          </span>
          <h2 className="font-switzer font-bold text-3xl sm:text-4xl text-neutral-900 tracking-tight">
            How We Execute Your Roadmap
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.process.map((step) => (
            <div key={step.step} className="p-8 rounded-2xl bg-[#0B0B0B] text-white border border-[#222222] shadow-xl flex flex-col justify-between">
              <div>
                <span className="font-switzer font-extrabold text-3xl text-[#3649F5] block mb-4">
                  {step.step}
                </span>
                <h3 className="font-switzer font-bold text-lg text-white mb-2">
                  {step.title}
                </h3>
                <p className="font-vietnam text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <TechStackMarquee />

      {/* Service-Specific Pricing Packages */}
      <section className="w-full bg-[#0B0B0B] text-white px-4 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest text-[#3649F5] font-vietnam font-semibold block mb-2">
              Fixed-Scope Pricing
            </span>
            <h2 className="font-switzer font-bold text-3xl sm:text-5xl text-white tracking-tight">
              Transparent Packages for {service.title}
            </h2>
            <p className="font-vietnam text-sm sm:text-base text-neutral-400 mt-3">
              Clear commitments, guaranteed deliverables, and zero hidden costs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.pricing.map((tier, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-8 flex flex-col justify-between border ${
                  tier.popular
                    ? 'bg-[#151515] border-[#3649F5] shadow-2xl shadow-[#3649F5]/20 ring-1 ring-[#3649F5]'
                    : 'bg-[#121211] border-[#2A2A2A]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-switzer font-bold text-xl text-white">{tier.name}</h3>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#222] text-neutral-300 font-vietnam">
                      {tier.badge}
                    </span>
                  </div>

                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="font-switzer text-4xl font-extrabold text-white">
                      {tier.price}
                    </span>
                    <span className="font-vietnam text-xs text-neutral-400">/{tier.period}</span>
                  </div>

                  <p className="mt-4 font-vietnam text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {tier.desc}
                  </p>

                  <div className="mt-8 pt-6 border-t border-[#222222] space-y-3">
                    {tier.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#3649F5] shrink-0 mt-0.5" />
                        <span className="font-vietnam text-xs text-neutral-200">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <button
                    type="button"
                    onClick={onOpenCalendly}
                    className={`w-full py-3.5 rounded-xl font-vietnam text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
                      tier.popular
                        ? 'bg-[#3649F5] hover:bg-blue-600 text-white shadow-lg'
                        : 'bg-[#222222] hover:bg-[#333333] text-white border border-[#3A3A3A]'
                    }`}
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service-Specific FAQs (Zentexx bg-[#F6F6F6] Style) */}
      <section className="w-full bg-[#F6F6F6] px-4 py-16 lg:py-24 border-y border-[#EAEAEA]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md border border-[#DCDCDC] bg-white text-xs font-vietnam font-medium text-[#4F4F4F] mb-3">
              <span>FAQ</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#3649F5]"></span>
            </div>
            <h2 className="font-switzerMedium text-3xl sm:text-4xl text-[#0A0A0A]">
              Have a Question? Here's the Answers
            </h2>
          </div>
          <div className="space-y-4">
            {service.faqs.map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-[6px] border border-[#DADADA] p-5 sm:p-6 transition-all duration-200">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-vietnam text-base sm:text-lg font-medium text-[#0A0A0A]">
                  <span>{faq.q}</span>
                  <span className="text-2xl font-light text-[#888888] group-open:rotate-45 group-open:text-[#3649F5] transition-transform shrink-0">
                    +
                  </span>
                </summary>
                <div className="mt-4 font-vietnam text-sm sm:text-base leading-relaxed text-[#555555] pr-6 pt-3 border-t border-[#F0F0F0]">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection onOpenCalendly={onOpenCalendly} />
      <ContactSection onOpenCalendly={onOpenCalendly} />
    </div>
  );
}

