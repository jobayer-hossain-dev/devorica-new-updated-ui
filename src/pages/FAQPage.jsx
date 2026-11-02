import React, { useMemo, useState } from 'react';
import CTASection from '../components/CTASection';
import { faqData } from '../data/faqData';

const categoryLabels = [
  'About Devorica',
  'AI MVP Development',
  'AI Automation & AI Agents',
  'SaaS & Full-Cycle Product Development',
  'Design',
  'Pricing & Working Together',
  'Process, Ownership & Support'
];

const flatten = faqData.flatMap((group) => group.items);
const aboutQuestionLabels = [
  'What does Devorica do?',
  'What makes Devorica different from other development agencies?',
  'Is Devorica an agency or a product studio?',
  'Where is Devorica based, and do you work with international clients?',
  'How experienced is the Devorica team?',
  'What industries does Devorica work in?'
];
const categoryQuestions = {
  'About Devorica': [
    ...flatten.slice(0, 3),
    ...flatten.filter((item) => !flatten.slice(0, 3).includes(item)).slice(0, 3)
  ].map((item, index) => ({ ...item, q: aboutQuestionLabels[index] })),
  'AI MVP Development': flatten.filter((item) => /MVP|AI product|custom AI/i.test(item.q)).slice(0, 3),
  'AI Automation & AI Agents': flatten.filter((item) => /AI|automation|support/i.test(`${item.q} ${item.a}`)).slice(1, 4),
  'SaaS & Full-Cycle Product Development': flatten.filter((item) => /product|team|architecture/i.test(`${item.q} ${item.a}`)).slice(0, 3),
  'Design': flatten.filter((item) => /design|interface|product/i.test(`${item.q} ${item.a}`)).slice(0, 3),
  'Pricing & Working Together': faqData.find((group) => group.category === 'Pricing & Contracts')?.items || [],
  'Process, Ownership & Support': [
    ...(faqData.find((group) => group.category === 'Care & Scalability')?.items || []),
    ...flatten.filter((item) => /existing team|intellectual property/i.test(`${item.q} ${item.a}`))
  ]
};

export default function FAQPage({ onOpenCalendly }) {
  const [activeCategory, setActiveCategory] = useState(categoryLabels[0]);
  const [openIndex, setOpenIndex] = useState(0);
  const items = useMemo(() => categoryQuestions[activeCategory] || [], [activeCategory]);

  return (
    <div className="w-full pt-10 lg:pt-[80px]">
      <section className="px-4 text-center sm:px-6">
        <h1 className="mx-auto max-w-[1050px] font-switzerMedium text-[32px] leading-[1.18] tracking-tight text-[#0A0A0A] sm:text-6xl lg:text-[64px] lg:leading-[1.18]">
          Frequently Asked Questions
        </h1>
        <p className="mx-auto mt-2 max-w-[350px] font-vietnam text-base leading-[21px] text-[#555555] sm:mt-4 sm:max-w-[1080px] sm:leading-7 sm:text-lg">
          Straight answers about how we build AI products, what it costs, how long it takes, and what it&apos;s like to work with us.<br className="hidden sm:block" />
          Can&apos;t find yours? <button type="button" onClick={onOpenCalendly} className="underline underline-offset-2">Book a free strategy call.</button>
        </p>
        <div className="mx-auto mt-5 flex max-w-[326px] flex-col items-stretch justify-center gap-2 sm:mt-10 sm:max-w-[860px] sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          {categoryLabels.map((category) => (
            <button key={category} type="button" onClick={() => { setActiveCategory(category); setOpenIndex(0); }} className={`rounded-[4px] border px-4 py-2.5 font-vietnam text-sm leading-5 transition-colors sm:px-6 sm:py-3 sm:text-lg ${activeCategory === category ? 'border-[#3649F5] bg-[#3649F5] text-white' : 'border-[#D1D1D1] bg-white text-[#0A0A0A] hover:border-[#3649F5]'}`}>
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-[40.5px] max-w-[1024px] px-4 pb-0 pt-0 sm:mt-16 sm:px-6 sm:pt-0 lg:mt-16 lg:pb-4">
        <h2 className="font-switzerMedium text-[26px] leading-8 text-[#0A0A0A] sm:text-[30px] sm:leading-9">{activeCategory}</h2>
        <div className="mt-6 border-t border-[#DADADA] lg:mt-8">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <details key={`${item.q}-${index}`} open={isOpen} className={`border-b border-[#DADADA] ${index === 0 ? 'lg:min-h-[140.7px]' : index === items.length - 1 ? 'lg:min-h-[28px]' : 'lg:min-h-[60.7px]'}`}>
                <summary onClick={(event) => { event.preventDefault(); setOpenIndex(isOpen ? -1 : index); }} className="flex cursor-pointer list-none items-center justify-between gap-5 py-3 font-vietnam text-sm font-medium leading-5 text-[#0A0A0A] sm:py-6 sm:text-lg sm:leading-6 lg:py-0 lg:text-base lg:leading-7">
                  <span>{item.q}</span><span className={`shrink-0 text-lg text-[#777777] transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}>+</span>
                </summary>
                {isOpen && <p className="max-w-4xl pb-6 pr-8 font-vietnam text-sm leading-6 text-[#555555] sm:text-base">{item.a}</p>}
              </details>
            );
          })}
        </div>
      </section>
      <div className="mt-[123.3px] lg:mt-[169.6px]">
        <CTASection onOpenCalendly={onOpenCalendly} />
      </div>
    </div>
  );
}
