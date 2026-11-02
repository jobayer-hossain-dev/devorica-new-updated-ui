import React, { useState } from 'react';
import { Briefcase, ArrowRight, CheckCircle2, Heart, Laptop, Zap, Globe, Sparkles } from 'lucide-react';
import { useToast } from '../components/Toast';
import CTASection from '../components/CTASection';

export default function CareerPage({ onOpenCalendly }) {
  const { showToast } = useToast();
  const [selectedRole, setSelectedRole] = useState(null);

  const openRoles = [
    {
      title: 'Senior Full-Stack AI Engineer',
      type: 'Full-Time · Remote',
      department: 'Engineering',
      location: 'Global Remote',
      salary: '$60k - $95k + Performance Bonus',
      requirements: ['5+ years with React 19, Next.js & TypeScript', 'Experience deploying LLM pipelines (LangChain, vLLM, Pinecone)', 'Deep PostgreSQL schema design & performance tuning']
    },
    {
      title: 'Lead Product Designer (UI/UX)',
      type: 'Full-Time · Remote',
      department: 'Design',
      location: 'Global Remote',
      salary: '$50k - $80k + Equity Share',
      requirements: ['Expert in Figma Auto-Layout, variant components & design tokens', 'Strong portfolio of high-converting SaaS dashboards', 'Experience crafting spatial motion and micro-interactions']
    },
    {
      title: 'Senior DevOps & Cloud Architect',
      type: 'Full-Time · Remote',
      department: 'Infrastructure',
      location: 'Global Remote',
      salary: '$65k - $100k + Equity Share',
      requirements: ['Production mastery of AWS, Docker, Kubernetes & Terraform', 'Zero-downtime CI/CD architecture and Datadog observability', 'SOC-2 and HIPAA compliance experience']
    }
  ];

  const handleApply = (roleTitle) => {
    showToast(`Application link opened for ${roleTitle}! Please send your GitHub/Figma to careers@devorica.com`, 'info');
  };

  return (
    <div className="w-full pt-28 lg:pt-36">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md border border-[#E4E6E9] bg-white text-xs font-vietnam font-medium text-[#4F4F4F] mb-6">
          <span>We're Hiring</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#3649F5]"></span>
        </div>

        <h1 className="font-switzerMedium text-4xl sm:text-6xl text-[#0A0A0A] tracking-tight leading-[1.1]">
          Build the Future of AI Software with Devorica
        </h1>

        <p className="mt-6 font-vietnam text-base sm:text-lg text-[#555555] max-w-2xl mx-auto leading-relaxed">
          Join an autonomous, high-caliber studio that values deep technical craftsmanship, zero bureaucracy, and flexible global freedom.
        </p>
      </section>

      {/* Perks Grid */}
      <section className="w-full bg-[#F9F9FB] px-4 py-16 lg:py-24 border-y border-neutral-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-14">
            <h2 className="font-switzer font-bold text-3xl text-neutral-900">
              Why Engineers Love Working at Devorica
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-white border border-neutral-200 shadow-sm space-y-3">
              <Globe className="w-8 h-8 text-[#3649F5]" />
              <h3 className="font-switzer font-bold text-lg text-neutral-900">100% Remote Freedom</h3>
              <p className="font-vietnam text-sm text-neutral-600 leading-relaxed">
                Work from anywhere in the world. As long as you deliver exceptional code and join async standups, your hours are your own.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-neutral-200 shadow-sm space-y-3">
              <Zap className="w-8 h-8 text-[#3649F5]" />
              <h3 className="font-switzer font-bold text-lg text-neutral-900">Zero Bureaucracy</h3>
              <p className="font-vietnam text-sm text-neutral-600 leading-relaxed">
                No endless meetings or corporate politics. You spend 85% of your time doing real engineering, designing, and shipping.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-neutral-200 shadow-sm space-y-3">
              <Laptop className="w-8 h-8 text-[#3649F5]" />
              <h3 className="font-switzer font-bold text-lg text-neutral-900">Elite Tech & Hardware</h3>
              <p className="font-vietnam text-sm text-neutral-600 leading-relaxed">
                Generous annual tech stipends for high-end Apple hardware, ChatGPT Plus / Claude subscriptions, and ergonomic setups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-20 lg:py-28">
        <div className="max-w-2xl mb-12">
          <span className="text-xs uppercase tracking-widest text-[#3649F5] font-vietnam font-semibold block mb-2">
            Current Openings
          </span>
          <h2 className="font-switzer font-bold text-3xl sm:text-4xl text-neutral-900 tracking-tight">
            Open Positions
          </h2>
        </div>

        <div className="space-y-6">
          {openRoles.map((role, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-[#0B0B0B] text-white border border-[#222222] shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-[#444444] transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#1C1C1C] border border-[#333333] text-[#3649F5] font-vietnam font-semibold">
                    {role.department}
                  </span>
                  <span className="text-xs text-neutral-400 font-vietnam">
                    {role.type}
                  </span>
                </div>
                <h3 className="font-switzer font-bold text-xl sm:text-2xl text-white">
                  {role.title}
                </h3>
                <p className="text-xs font-vietnam text-emerald-400 font-semibold">
                  {role.salary}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {role.requirements.map((req, rIdx) => (
                    <span
                      key={rIdx}
                      className="text-[11px] font-vietnam text-neutral-300 bg-[#161616] px-2.5 py-1 rounded-md border border-[#262626]"
                    >
                      {req}
                    </span>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleApply(role.title)}
                className="px-6 py-3 rounded-xl bg-[#3649F5] hover:bg-blue-600 text-white font-vietnam text-xs sm:text-sm font-semibold transition-all shrink-0 flex items-center justify-center gap-2"
              >
                <span>Apply for Role</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      <CTASection onOpenCalendly={onOpenCalendly} />
    </div>
  );
}

