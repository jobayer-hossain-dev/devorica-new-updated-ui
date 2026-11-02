import React from 'react';
import ContactSection from '../components/ContactSection';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';

export default function ContactPage({ onOpenCalendly }) {
  return (
    <div className="w-full pt-0">
      <ContactSection onOpenCalendly={onOpenCalendly} />
      <FAQSection limit={4} compact />
      <div className="mt-[148px] lg:mt-0">
        <CTASection onOpenCalendly={onOpenCalendly} />
      </div>
    </div>
  );
}

