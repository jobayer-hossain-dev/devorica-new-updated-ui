import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useScrollReveal, revealVariants } from '../hooks/useScrollReveal';

export default function PricingSection({ onOpenProjectRequest, onOpenCalendly }) {
  const { controls, viewportProps } = useScrollReveal(0.05);
  const [activeTab, setActiveTab] = useState('Web & Product Development');

  const tabs = [
    'Web & Product Development',
    'AI Automation',
    'Team & Care'
  ];

  const packages = {
    'Web & Product Development': [
      {
        title: 'Launch MVP',
        badge: null,
        ideal: 'Ideal for: early-stage founders and modern brands validating a core product fast',
        price: 'BDT 25k – 40k',
        period: '/ project',
        timeline: 'Typical timeline: 2–3 weeks',
        popular: false,
        features: [
          'Next.js & React mobile-first architecture',
          'High-converting UI/UX design & brand identity',
          'bKash, Nagad, and Card checkout integration',
          'Lead capture & automated notification workflows',
          'Speed optimization, SEO foundation & cloud launch'
        ]
      },
      {
        title: 'Growth Build',
        badge: '🔥 Most Popular',
        ideal: 'Ideal for: scaling businesses, e-commerce brands, and digital subscription portals',
        price: 'BDT 50k – 85k',
        period: '/ project',
        timeline: 'Typical timeline: 3–5 weeks',
        popular: true,
        features: [
          'Full-cycle frontend + robust backend architecture',
          'Customer accounts & admin management dashboard',
          'Instant automated payment verification & digital invoicing',
          'Role-based access control & analytics tracking',
          'PostgreSQL / Redis performance tuning & security audit'
        ]
      },
      {
        title: 'Scale Platform',
        badge: null,
        ideal: 'Ideal for: high-traffic marketplaces, multi-tenant SaaS, or custom enterprise software',
        price: 'BDT 90k – 150k+',
        period: '/ project',
        timeline: 'Typical timeline: 6–8 weeks',
        popular: false,
        features: [
          'Microservices-inspired architecture & Docker deployments',
          'Multi-vendor / multi-currency checkout & payout pipelines',
          '99.99% production uptime SLA & edge caching',
          'Custom AI workflow automation & webhook sync',
          'Dedicated lead architect & priority sprint support'
        ]
      }
    ],
    'AI Automation & Workflows': [
      {
        title: 'Starter AI Integration',
        badge: null,
        ideal: 'Ideal for: automating customer support, content parsing, or basic LLM features',
        price: 'BDT 15k – 25k',
        period: '/ setup',
        timeline: 'Typical timeline: 1–2 weeks',
        popular: false,
        features: [
          'OpenAI / Anthropic / Gemini API pipelines',
          'Custom prompt engineering & context caching',
          'Automated customer inquiry routing & email summaries',
          'Error fallback & API rate-limit resilience'
        ]
      },
      {
        title: 'Agentic Workflows',
        badge: '🔥 High Demand',
        ideal: 'Ideal for: autonomous business logic, RAG databases & document intelligence',
        price: 'BDT 35k – 60k',
        period: '/ setup',
        timeline: 'Typical timeline: 2–4 weeks',
        popular: true,
        features: [
          'Full RAG architecture with vector databases (Pinecone / pgvector)',
          'Multi-step autonomous agent tools & structured output',
          'Internal knowledge-base search & document chat',
          'Fine-tuned latency & token cost optimization'
        ]
      },
      {
        title: 'Enterprise AI Suite',
        badge: null,
        ideal: 'Ideal for: high-volume automation, custom fine-tuning & proprietary workflows',
        price: 'BDT 75k – 120k+',
        period: '/ system',
        timeline: 'Typical timeline: 4–6 weeks',
        popular: false,
        features: [
          'Self-hosted open-source models (Llama 3 / Mistral) or hybrid cloud',
          'Enterprise data privacy & zero-data-retention compliance',
          'Automated asynchronous queue handling & parallel worker pools',
          'Dedicated monitoring dashboard & token billing analytics'
        ]
      }
    ],
    'Dedicated Team & Care': [
      {
        title: 'Maintenance Care',
        badge: null,
        ideal: 'Ideal for: businesses wanting zero-headache uptime, security & stability',
        price: 'BDT 5k – 10k',
        period: '/ month',
        timeline: 'Continuous monthly partnership',
        popular: false,
        features: [
          '24/7 server & database uptime monitoring with alerts',
          'Weekly security patches & package upgrades',
          'Emergency bug fixes & monthly performance tuning',
          'Monthly health & SEO performance report'
        ]
      },
      {
        title: 'Part-Time Dedicated',
        badge: null,
        ideal: 'Ideal for: steady feature iteration and continuous sprint improvements',
        price: 'BDT 25k – 35k',
        period: '/ month (50 hrs)',
        timeline: 'Flexible monthly allocation',
        popular: false,
        features: [
          '1 dedicated senior engineer embedded into your team',
          '50 hours of active feature shipping every month',
          'Direct Slack & WhatsApp async communication',
          'Fast UI refinements & routine backlog cleanup'
        ]
      },
      {
        title: 'Full-Time Engineer',
        badge: '🔥 Most Popular',
        ideal: 'Ideal for: founders needing an elite remote software engineer with zero overhead',
        price: 'BDT 50k – 75k',
        period: '/ month (Full-Time)',
        timeline: 'Full-time 160 hrs/month',
        popular: true,
        features: [
          '1 full-time senior full-stack engineer dedicated to your stack',
          'Works directly in your GitHub repos, linear boards & sprints',
          'Daily standup syncs & 100% intellectual property transfer',
          'No recruitment fees, payroll taxes, or office overhead'
        ]
      }
    ]
  };

  const packageAliases = {
    'AI Automation': 'AI Automation & Workflows',
    'Team & Care': 'Dedicated Team & Care'
  };
  const activePackages = packages[activeTab] || packages[packageAliases[activeTab]] || packages['Web & Product Development'];

  return (
    <motion.section
      id="pricing"
      className="w-full bg-[#0B0B0B] px-4 py-16 lg:pb-[100px] lg:pt-24"
      {...viewportProps}
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          variants={revealVariants}
          initial="hidden"
          animate={controls}
          className="flex flex-col items-center pt-3 text-center lg:pt-0"
        >
          <div className="mt-2 flex items-center gap-2 rounded-[5px] border border-[#3B3B3B] px-4 py-1.5">
            <span className="font-vietnam text-sm text-[#D1D1D1]">Pricing Plans</span>
            <span className="h-2 w-2 rounded-full bg-[#3649F5]"></span>
          </div>
          <h2 className="mt-4 font-switzer text-[32px] leading-[38px] text-[#FFFFFF] font-medium lg:leading-[58px] lg:text-5xl">
            Transparent Pricing.<br />No Hidden Fees.
          </h2>
          <p className="mt-4 font-vietnam text-sm leading-5 text-[#CACACA] lg:text-lg lg:leading-6">
            Predictable, range-based packages tailored for modern founders, startups, <br className="hidden lg:block" />
            and growing enterprises.
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <motion.div
          variants={revealVariants}
          initial="hidden"
          animate={controls}
          transition={{ delay: 0.1 }}
          className="mt-8 lg:mt-10 flex justify-center w-full"
        >
          {/* Mobile Vertical Stacked Tabs (Matches Zentexx Mobile Exactly) */}
          <div className="flex flex-wrap items-center justify-center lg:hidden w-full max-w-full rounded-md border border-[#3B3B3B] bg-[#1C1C1C] px-2 py-2">
            {tabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                    className={`text-center cursor-pointer rounded-sm px-4 py-2 font-vietnam text-sm transition-all duration-300 ${
                    isActive
                      ? 'border border-transparent [background:linear-gradient(#2C2C2C,#2C2C2C)_padding-box,linear-gradient(135deg,#3B3B3B_0%,#FFFFFF_50%,#2C2C2C_100%)_border-box] text-white shadow-md font-medium'
                      : 'border border-transparent text-[#B5B5B5] hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* Desktop Horizontal Tabs */}
          <div className="hidden lg:flex items-center gap-1 rounded-md border border-[#3B3B3B] bg-[#1C1C1C] p-2">
            {tabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`cursor-pointer rounded-sm px-5 py-2.5 font-vietnam text-sm lg:text-base transition-all duration-300 whitespace-nowrap ${
                    isActive
                      ? 'border border-transparent [background:linear-gradient(#2C2C2C,#2C2C2C)_padding-box,linear-gradient(135deg,#3B3B3B_0%,#FFFFFF_50%,#2C2C2C_100%)_border-box] text-white shadow-md font-medium'
                      : 'border border-transparent text-[#B5B5B5] hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Pricing Cards Grid */}
        <motion.div
          variants={revealVariants}
          initial="hidden"
          animate={controls}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-5 lg:mt-[44px] grid grid-cols-1 gap-3 lg:gap-5 md:grid-cols-3"
        >
          {activePackages.map((pkg, idx) => (
            <article
              key={idx}
              className={`relative flex flex-col overflow-hidden rounded-lg border border-[#323232] bg-[#141414] p-5 transition-all duration-300 hover:border-[#4B4B4B] lg:h-[619.3px] lg:p-6 ${
                idx === 0 ? 'h-[474.7px]' : idx === 1 ? 'h-[526.7px]' : 'h-[490.7px]'
              } ${
                pkg.popular ? 'overflow-hidden shadow-[0_0_40px_rgba(54,73,245,0.12)]' : ''
              }`}
            >
              {/* Title & Badge */}
              <div className="flex items-center gap-2">
                <h3 className="font-switzer font-medium text-xl lg:text-2xl text-white">
                  {pkg.title}
                </h3>
                {pkg.badge && (
                  <span className="rounded-full bg-[#39569F] px-2.5 py-1 font-vietnam text-xs text-white">
                    {pkg.badge}
                  </span>
                )}
              </div>

              {/* Ideal for */}
              <p className="mt-3 font-vietnam text-sm leading-relaxed text-[#D1D1D1]">
                {pkg.ideal}
              </p>

              {/* Price Box with glowing radial background if popular */}
              <div
                className={`relative mt-5 overflow-hidden rounded-lg border border-[#323232] bg-[#181818] p-4 lg:p-5 ${
                  pkg.popular
                    ? `border-transparent [background:linear-gradient(#181818,#181818)_padding-box,linear-gradient(135deg,#323232_0%,#FAFCFF_33%,#4D4D4D_66%,#323232_100%)_border-box] before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_at_85%_-10%,rgba(99,149,232,0.76)_0%,rgba(99,149,232,0.32)_25%,rgba(99,149,232,0.16)_42%,rgba(99,149,232,0.10)_55%,transparent_72%)] before:content-['']`
                    : ''
                }`}
              >
                <div className="relative z-10">
                  <span className="font-vietnam text-xs text-[#A0A0A0] lg:text-sm">
                    Estimated Range
                  </span>
                  <div className="mt-1 flex items-baseline gap-2 flex-wrap">
                    <span className="font-switzer font-semibold text-2xl lg:text-[28px] xl:text-3xl text-white tracking-tight whitespace-nowrap">
                      {pkg.price}
                    </span>
                    <p className="font-vietnam text-xs lg:text-sm text-[#B0B0B0] whitespace-nowrap">
                      <span className="text-white">/</span> {pkg.period.replace('/', '').trim()}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={onOpenCalendly}
                    className="mt-4 block w-full rounded-md bg-white px-4 py-2.5 text-center font-vietnam text-xs font-medium text-[#0A0A0A] transition-all duration-300 hover:bg-[#3649F5] hover:text-white cursor-pointer lg:text-sm"
                  >
                    Schedule a Discovery Call
                  </button>
                </div>
              </div>

              {/* Timeline */}
              <p className="mt-4 font-vietnam text-xs lg:text-sm text-[#D1D1D1]">
                {pkg.timeline}
              </p>

              {/* Feature List */}
              <ul className="mt-5 space-y-3 pt-4 border-t border-[#262626] flex-1">
                {pkg.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#3649F5] shrink-0 mt-0.5" />
                    <span className="font-vietnam text-xs lg:text-sm text-[#E7E7E7] leading-relaxed">
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </motion.div>

        <div className="mt-4 flex h-[72.7px] flex-col items-center justify-center text-center lg:mt-6 lg:h-auto">
          <p className="font-vietnam text-sm text-[#F6F6F6] lg:text-base">
            Not sure which option fits? It’s good, but it still has no action.
          </p>
          <button
            type="button"
            onClick={onOpenCalendly}
            className="mt-2 cursor-pointer font-vietnam text-base leading-[22.7px] text-[#F6F6F6] underline transition-colors hover:text-[#3649F5] lg:text-lg lg:leading-[22.7px]"
          >
            Talk to an Expert
          </button>
        </div>

      </div>
    </motion.section>
  );
}
