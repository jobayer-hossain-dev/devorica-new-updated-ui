import React from 'react';
import ContactSection from '../components/ContactSection';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';

export default function ContactPage({ onOpenCalendly }) {
  return (
    <div className="w-full pt-28 lg:pt-36">
      <ContactSection onOpenCalendly={onOpenCalendly} />
      <FAQSection limit={4} categoryFilter="Pricing & Contracts" />
      <CTASection onOpenCalendly={onOpenCalendly} />
    </div>
  );
}

