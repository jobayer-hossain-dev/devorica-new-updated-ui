import React from 'react';
import { Laptop, Zap, Globe, BriefcaseBusiness } from 'lucide-react';
import CTASection from '../components/CTASection';
import FAQSection from '../components/FAQSection';

const benefits = [
  ['100% Remote Freedom', 'Work from anywhere in the world. As long as you deliver exceptional work, your hours are your own.', Globe],
  ['Zero Bureaucracy', 'No endless meetings or corporate politics. Spend your time doing real engineering, designing, and shipping.', Zap],
  ['Elite Tech & Hardware', 'Generous annual tech stipends for high-end hardware, AI subscriptions, and ergonomic setups.', Laptop],
  ['On-Time Salary', 'Clear expectations, dependable payment, and a team that respects the work behind every release.', Globe],
  ['Career Growth', 'Work on meaningful products, learn from senior teammates, and grow through real ownership.', Zap],
  ['Great Work Culture', 'A thoughtful, collaborative environment where quality, honesty, and kindness shape the way we work.', Laptop]
];

export default function CareerPage({ onOpenCalendly }) {
  return (
    <div className="career-page w-full">
      <section className="career-hero px-4 pb-0 pt-10 text-center sm:pt-20 lg:h-[849px] lg:pt-[68px]">
        <h1 className="mx-auto max-w-[900px] font-switzerMedium text-[32px] leading-[1.18] tracking-tight text-[#0A0A0A] sm:text-6xl lg:text-[64px] lg:leading-[1.18]">
          Shape Your Future With a<br className="hidden sm:block" /> Growing Tech Team
        </h1>
        <p className="mx-auto mt-3 max-w-[700px] font-vietnam text-sm leading-5 text-[#555555] sm:mt-5 sm:text-lg sm:leading-7">
          Join Devorica and build meaningful digital products alongside skilled designers and developers. Grow your career in a collaborative environment that values innovation, learning, and impact.
        </p>
        <button type="button" disabled className="mx-auto mt-5 block cursor-not-allowed rounded-[4px] bg-[#9B9BFF] px-6 py-3 font-vietnam text-sm font-semibold text-white opacity-90">
          No Open Positions
        </button>
        <div className="mt-9 -mx-4 sm:mt-12 lg:mt-[53px] lg:relative lg:left-1/2 lg:w-screen lg:-translate-x-1/2 lg:mx-0">
          <img src="/images/agency-team-collaboration.jpg" alt="Devorica team members collaborating around a laptop" className="block h-auto w-full max-h-[620px] object-cover" />
        </div>
      </section>

      <section className="min-h-[620px] px-4 py-10 text-center sm:py-16 lg:h-[732px] lg:min-h-0 lg:py-20">
        <div className="mx-auto inline-flex items-center gap-2 rounded-[4px] border border-[#D9DDE5] px-3.5 py-2 font-vietnam text-sm text-[#555555]">
          Available Jobs <span className="h-2 w-2 rounded-full bg-[#3649F5]" />
        </div>
        <h2 className="mx-auto mt-4 max-w-[420px] font-switzerMedium text-3xl leading-[1.2] text-[#0A0A0A] sm:text-4xl">
          Open Positions at Devorica
        </h2>
        <div className="mx-auto mt-8 max-w-5xl rounded-xl border border-[#E1E1E1] bg-[#F9F9FB] px-5 py-12 sm:mt-10 sm:px-8 sm:py-16">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#CFCFCF] text-[#0A0A0A]"><BriefcaseBusiness className="h-7 w-7" /></div>
          <h3 className="mt-6 font-switzerMedium text-2xl text-[#0A0A0A]">No Open Positions Right Now</h3>
          <p className="mx-auto mt-3 max-w-xl font-vietnam text-sm leading-6 text-[#666666]">We don&apos;t have any open positions at the moment, but we&apos;re always growing. Check back soon for new opportunities to join the Devorica team.</p>
        </div>
      </section>

      <section className="h-[1629.3px] w-full overflow-hidden border-y border-neutral-200 bg-[#F9F9FB] px-4 pb-16 pt-[85px] lg:h-[929.3px] lg:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mx-auto mb-12 max-w-xl text-center font-switzerMedium text-3xl text-neutral-900">Our Work Culture and Benefits</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {benefits.map(([title, desc, Icon]) => (
              <div key={title} className="space-y-3 rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
                <Icon className="h-8 w-8 text-[#3649F5]" />
                <h3 className="font-switzerMedium text-lg text-neutral-900">{title}</h3>
                <p className="font-vietnam text-sm leading-relaxed text-neutral-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="h-[1553.3px] w-full overflow-hidden bg-[#0B0B0B] px-4 py-16 text-white md:py-20 lg:h-[1095.3px] lg:px-8 lg:py-[78px]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="inline-flex rounded-md border border-white/15 px-4 py-2 font-vietnam text-sm text-white/70">Value</span>
            <h2 className="mx-auto mt-5 max-w-3xl font-switzerMedium text-3xl leading-tight sm:text-5xl lg:text-5xl lg:leading-[58px]">The Principles That Guide<br className="hidden sm:block" /> Everything We Do</h2>
            <p className="mx-auto mt-5 max-w-3xl font-vietnam text-sm leading-6 text-white/70 sm:text-base">These are the principles that define how we work, how we communicate, and how we measure success. They apply equally to every project, every client, and every member of our team.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['Innovation', '/aboutPage/innovation.png', 'We continuously explore emerging technologies and new approaches to keep our products relevant.'],
              ['Excellence', '/aboutPage/excellence.png', 'We hold every part of our work to a high professional standard, from strategy to delivery.'],
              ['Commitment', '/aboutPage/commitment.png', 'We remain invested in client objectives well beyond delivery through consistency and accountability.'],
              ['Integrity', '/aboutPage/integrity.png', 'We communicate clearly, act honestly, and make decisions that serve our clients and team.']
            ].map(([title, image, description]) => (
              <article key={title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <img src={image} alt={title} className="h-44 w-full rounded-xl object-cover" />
                <h3 className="mt-5 font-switzerMedium text-2xl">{title}</h3>
                <p className="mt-3 font-vietnam text-sm leading-6 text-white/65">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="h-[470px] overflow-hidden bg-white px-4 py-12 lg:h-[673px] lg:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-switzerMedium text-3xl text-[#0A0A0A] sm:text-5xl">Hear From Our Team</h2>
          <div className="mt-12 grid gap-8 rounded-2xl bg-[#F8F9FA] p-6 sm:grid-cols-[220px_1fr] sm:p-10 lg:grid-cols-[260px_1fr]">
            <img src="/images/team-nafis.jpg" alt="Devorica team member" className="h-56 w-full rounded-xl object-cover sm:h-64" />
            <div className="flex flex-col justify-center">
              <p className="font-vietnam text-xl leading-9 text-[#303030] sm:text-2xl">“Devorica is built around vision, execution, and people. Every project gives us the opportunity to solve real business problems with technology and creativity.”</p>
              <h3 className="mt-8 font-switzerMedium text-xl text-[#0A0A0A]">Azmain Hossain</h3>
              <p className="mt-1 font-vietnam text-sm text-[#666666]">CEO &amp; Founder</p>
            </div>
          </div>
        </div>
      </section>

      <section className="h-[850.3px] overflow-hidden px-4 py-12 lg:h-[1124px] lg:px-0 lg:py-[120px]">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="font-vietnam text-sm text-[#666666]">Humans Behind the Screens</span>
            <h2 className="mt-4 font-switzerMedium text-3xl leading-tight text-[#0A0A0A] sm:text-5xl">We&apos;re Devorica, a growing team of designers, developers, and dreamers.</h2>
            <p className="mt-6 max-w-xl font-vietnam text-base leading-7 text-[#555555]">Occasionally we argue over fonts and colors, but we always care about the people and products behind the work.</p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {['team-workshop.jpg', 'team-brainstorm.jpg', 'team-opt-studio.jpg', 'team-opt-strategy.jpg', 'team-opt-sprint.jpg', 'team-opt-collab.jpg'].map((name) => (
              <img key={name} src={`/images/${name}`} alt="Devorica team" className="aspect-square w-full rounded-xl object-cover" />
            ))}
          </div>
        </div>
      </section>

      <div className="career-faq h-[805.3px] overflow-hidden lg:h-[899.3px]">
        <FAQSection limit={6} />
      </div>

      <div className="career-cta"><CTASection onOpenCalendly={onOpenCalendly} /></div>
    </div>
  );
}
