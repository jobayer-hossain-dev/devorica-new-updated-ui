import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useScrollReveal, revealVariants } from '../hooks/useScrollReveal';

export const homePageFaqs = [
  {
    q: 'What does an AI product development company do?',
    a: 'It designs, builds, and launches software with AI at the core, including MVPs, SaaS platforms, and operational automation. Devorica handles the full lifecycle: strategy, design, engineering, AI integration, and post-launch support.'
  },
  {
    q: 'What is the difference between an AI product studio and a dev shop?',
    a: 'A dev shop builds what you spec and hands it back. A product studio like Devorica builds and runs its own products, so we think about retention, cost, and growth, and build yours the same way.'
  },
  {
    q: 'How much does it cost to build an AI MVP?',
    a: 'It depends on scope, but most AI MVPs land in a defined range and ship in 2 to 4 weeks. We give you an indicative investment and timeline in a free scoping call before any commitment.'
  },
  {
    q: 'How long does it take to build an AI product?',
    a: 'An AI MVP typically takes 2 to 4 weeks, a full SaaS platform takes 6 to 12 weeks, and an AI automation system goes live in 30 to 60 days. We work in two-week sprints so you see progress continuously.'
  },
  {
    q: 'Do you build custom AI or use off-the-shelf models?',
    a: 'Both, depending on what best fits the problem. We combine foundation models, RAG, and custom logic to get you the best result fast, rather than over-engineering from scratch or shipping a thin wrapper.'
  },
  {
    q: 'Can you work with our existing team and codebase?',
    a: 'Yes. We build products from scratch and also plug senior developers and designers into existing teams to accelerate delivery.'
  },
  {
    q: 'Do you offer support after launch?',
    a: 'Yes, our ongoing Maintenance and Care covers uptime, security, and AI model tuning, both for products we built and products we did not.'
  }
];

export default function FAQSection({ items = homePageFaqs, limit, compact = false }) {
  const { controls, viewportProps } = useScrollReveal(0.18);
  const visibleItems = typeof limit === 'number' ? items.slice(0, limit) : items;

  return (
    <motion.section
      className={`bg-howIt-section px-5 ${compact ? '-mt-2.5 min-h-[600px] py-0 sm:min-h-0' : 'py-12 lg:py-20'}`}
      variants={revealVariants}
      initial="hidden"
      animate={controls}
      {...viewportProps}
    >
      <div className="mx-auto max-w-5xl">
        {/* Section Heading */}
        {compact ? (
          <h2 className="font-switzerMedium text-[32px] leading-[38px] text-mission">FAQ</h2>
        ) : (
          <div className="text-center">
            <p className="mx-auto mb-3 w-fit rounded-md border border-[#E4E6E9] px-4 py-2.5 font-vietnam text-base font-vietnam text-design-desc">
              FAQ
              <span className="ml-2 inline-block h-2 w-2 rounded-full bg-[#3649F5]"></span>
            </p>
            <h2 className="font-switzerMedium text-[32px] leading-[38px] text-mission lg:text-5xl lg:leading-[58px]">
              Have a Question? <br className="hidden lg:block" /> Here's the Answers
            </h2>
          </div>
        )}

        {/* Divide-y Accordion list */}
        <div className="mt-6 lg:mt-12 divide-y divide-[#DADADA] border-[#DADADA]">
          {visibleItems.map((item, idx) => (
            <details
              key={idx}
              className="group lg:py-5 py-4"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-vietnam text-base leading-[24px] font-medium text-mission lg:leading-[24px] lg:text-lg select-none">
                <span>{item.q}</span>
                <span className="text-2xl leading-none text-[#0A0A0A] group-open:rotate-45 transition-transform duration-200 select-none">
                  +
                </span>
              </summary>
              <p className="mt-3 font-vietnam text-sm leading-5 text-design-desc lg:text-base lg:leading-6">
                {item.a}
              </p>
            </details>
          ))}
        </div>

        {/* Read all FAQ's link */}
        <div className="flex items-center gap-4 lg:mt-[44px] mt-5 justify-center">
          <Link
            to="/faq"
            className="lg:text-base text-sm font-switzer font-medium text-design-desc underline"
          >
            Read all FAQ’s
          </Link>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#0A0A0A]"
          >
            <path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path>
          </svg>
        </div>
      </div>
    </motion.section>
  );
}
