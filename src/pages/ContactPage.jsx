import React from 'react';
import ContactSection from '../components/ContactSection';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';

export default function ContactPage({ onOpenCalendly }) {
  return (
    <div className="w-full pt-0">
      <ContactSection compact onOpenCalendly={onOpenCalendly} />
      <div className="contact-faq"><FAQSection limit={4} compact /></div>
      <div className="contact-cta mt-[148px] lg:mt-0">
        <CTASection onOpenCalendly={onOpenCalendly} />
      </div>
    </div>
  );
}

