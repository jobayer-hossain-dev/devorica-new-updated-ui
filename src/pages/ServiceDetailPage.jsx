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
    <div className="w-full">
      {/* Service hero: the reference uses one immersive dark panel for every detail route. */}
      <section className="mx-4 h-[603px] min-h-0 overflow-hidden rounded-b-[40px] rounded-t-[40px] bg-[#050607] text-center text-white lg:mr-[26px] lg:h-[798px] lg:min-h-0" style={{ backgroundImage: 'radial-gradient(80% 65% at 100% 100%, rgba(21,78,128,.72), transparent 58%), radial-gradient(70% 60% at 50% 0%, rgba(19,28,34,.3), transparent 70%)' }}>
        <div className="mx-auto flex min-h-[603px] max-w-7xl -translate-y-11 flex-col items-center justify-center px-4 pb-4 pt-36 sm:px-6 lg:min-h-[798px] lg:translate-y-[24px] lg:px-4 lg:pt-[153px] lg:pb-20">
          <div className="translate-y-0">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#202020] px-5 py-2 font-vietnam text-sm font-medium text-white">
            <span>{service.title}</span>
          </div>

          <h1 className="w-full max-w-none font-switzerMedium text-[32px] leading-[1.18] tracking-tight text-white sm:text-6xl lg:-translate-y-[5px] lg:max-w-none lg:text-[64px] lg:leading-[1.18]">
            {service.heroHeading}
          </h1>

          <p className="mx-auto mt-3 max-h-20 w-full max-w-none overflow-hidden font-vietnam text-base leading-relaxed text-[#F3F3F3] sm:mt-6 sm:max-h-none sm:text-lg lg:-translate-y-3">
            {service.heroDescription}
          </p>

          <button
            type="button"
            onClick={onOpenCalendly}
            className="mx-auto mt-6 flex h-[49px] w-[232px] translate-y-px cursor-pointer items-center justify-center gap-2 rounded-[4px] bg-white px-6 py-3 font-vietnam text-sm font-medium leading-5 text-[#0A0A0A] shadow-[0_2px_8px_rgba(255,255,255,.35)] transition hover:bg-[#F3F3F3] sm:mt-8 sm:h-[57px] sm:w-[253px] sm:px-6 sm:py-4 sm:text-base sm:leading-5 lg:-translate-y-[18px]"
          >
            <img src="/homePage/gogglemeet.png" alt="" className="h-5 w-5 object-contain" />
            <span>Book a Strategy Call</span>
          </button>
          </div>

          <div className="mt-3 w-full translate-y-6 border-t border-white/10 pt-7 sm:mt-24 sm:translate-y-0">
            <p className="font-vietnam text-sm font-medium text-white/70">Trusted by 50+ Startups &amp; Growing Businesses</p>
            <div className="mt-5 flex items-center justify-center gap-8 overflow-hidden opacity-75 grayscale sm:gap-14">
              {['/bikkhipto-logo.webp', '/bayloz-logo.png', '/portfolio/client-fathom.svg', '/portfolio/client-easysub.svg', '/portfolio/client-maertens.svg'].map((src, idx) => (
                <img key={src} src={src} alt={`Trusted client ${idx + 1}`} className="h-7 w-auto max-w-[128px] shrink-0 object-contain" />
              ))}
            </div>
          </div>
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

