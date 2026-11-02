import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useToast } from './Toast';
import { useScrollReveal, revealVariants } from '../hooks/useScrollReveal';

export default function ContactSection({ onOpenCalendly, compact = false }) {
  const { controls, viewportProps } = useScrollReveal(0.15);
  const { showToast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    interest: '',
    budget: '',
    message: ''
  });

  const interestsRow1 = ['SaaS MVP', 'End-to-End Product', 'Product Design'];
  const interestsRow2 = ['Agentic AI Systems', 'Maintenance Care'];

  const budgetsRow1 = ['Less than $5k', '$5k - $10k', '$10k - $20k'];
  const budgetsRow2 = ['$20k - $50k', '$50k+'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.fullName.trim() || !formState.email.trim()) {
      showToast('Please provide your name and email.', 'error');
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      showToast('Thank you! Your project inquiry has been received. Expect a reply within 2 hours.', 'success');
      setFormState({
        fullName: '',
        email: '',
        interest: '',
        budget: '',
        message: ''
      });
    }, 900);
  };

  return (
    <motion.section
      id="contact"
      className={`bg-white px-4 py-12 ${compact ? 'pb-12 lg:py-25' : 'pb-[98px] lg:pb-[192px] lg:pt-25'} sm:py-16`}
      variants={revealVariants}
      initial="hidden"
      animate={controls}
      {...viewportProps}
    >
      <div className="mx-auto grid w-full max-w-7xl gap-4 sm:gap-6 sm:rounded-xl sm:bg-[#F9F9F9] sm:p-6 lg:grid-cols-[580fr_628fr]">
        {/* Left Dark Card */}
        <div className="flex min-w-0 flex-col justify-between gap-8 rounded-xl bg-[#0A0A0A] p-4 sm:gap-10 sm:p-6">
          <div>
            <span className="inline-flex rounded-full bg-[#262626] px-3 py-1 font-vietnam text-xs text-[#F6F6F6]">
              Lets Talk
            </span>
            <h2 className="mt-3 max-w-[358px] font-switzer text-[28px] font-medium leading-[36px] text-[#F6F6F6] sm:mt-4 sm:text-[40px] sm:leading-[48px]">
              Tell us about your project
            </h2>
            <p className="mt-3 max-w-md font-vietnam text-sm leading-[22px] text-[#D2D2D2]">
              Share a few details, and we'll get back to you soon with next steps.
            </p>
          </div>

          {/* Nested Card: Speak directly with the founder */}
          <div className="flex flex-col gap-4 rounded-xl bg-[#262626] p-4 sm:gap-6">
            <h3 className="font-switzer text-lg font-medium leading-7 text-[#F6F6F6] sm:text-xl">
              Speak directly with the founder
            </h3>

            {/* Founder Portrait Photo */}
            <img
              src="/ceo-jobayer.png?v=original"
              alt="Jobayer Hossain, CEO of Devorica"
              className="h-[88px] w-[88px] sm:h-[108px] sm:w-[108px] rounded-md object-cover shrink-0"
              style={{ objectPosition: 'center 20%' }}
            />

            {/* Name & Contact Info Bottom Row */}
            <div className="flex flex-col gap-4 min-[420px]:flex-row min-[420px]:items-end min-[420px]:justify-between">
              <div>
                <p className="font-vietnam text-sm font-medium text-[#F6F6F6]">
                  Jobayer Hossain
                </p>
                <p className="mt-1 font-vietnam text-xs text-[#B7B7B7]">
                  Ceo Of Devorica
                </p>
              </div>

              <div className="min-[420px]:text-right">
                <a
                  href="mailto:contact@devorica.com"
                  className="font-vietnam text-xs text-[#B7B7B7] transition hover:text-[#F6F6F6]"
                >
                  Contact@devorica.com
                </a>
                <button
                  type="button"
                  onClick={onOpenCalendly}
                  className="mt-1 block font-vietnam text-sm font-medium text-[#F6F6F6] underline-offset-4 transition hover:underline cursor-pointer"
                >
                  Book a free 30-min call
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right White Card: Form */}
        <div className="min-w-0 rounded-xl border border-[#EDEDED] bg-white p-4 sm:p-6">
          <form onSubmit={handleSubmit} className="flex min-w-0 flex-col gap-6 sm:gap-8">
            {/* Row 1: Full Name & Email Address */}
            <div className="grid min-w-0 gap-5 sm:grid-cols-2 sm:gap-4">
              <div>
                <label className="font-vietnam text-sm font-medium text-[#4F4F4F] sm:text-base">
                  Full Name:*
                </label>
                <input
                  type="text"
                  required
                  value={formState.fullName}
                  onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                  placeholder=""
                  className="mt-2 h-11 w-full rounded-md border px-4 sm:mt-3 sm:h-12 font-vietnam text-sm text-[#0A0A0A] outline-none transition placeholder:text-[#9A9A9A] focus:bg-white focus:ring-4 border-[#D1D1D1] bg-[#F6F6F6] focus:border-[#3649F5] focus:ring-[#3649F5]/10"
                />
              </div>

              <div>
                <label className="font-vietnam text-sm font-medium text-[#4F4F4F] sm:text-base">
                  Email Address:*
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder=""
                  className="mt-2 h-11 w-full rounded-md border px-4 sm:mt-3 sm:h-12 font-vietnam text-sm text-[#0A0A0A] outline-none transition placeholder:text-[#9A9A9A] focus:bg-white focus:ring-4 border-[#D1D1D1] bg-[#F6F6F6] focus:border-[#3649F5] focus:ring-[#3649F5]/10"
                />
              </div>
            </div>

            {/* Row 2: I'm interested in:* */}
            <fieldset>
              <legend className="font-vietnam text-sm font-medium text-[#4F4F4F] sm:text-base">
                I'm interested in:*
              </legend>
              <div className="mt-2.5 flex flex-wrap gap-2 outline-none sm:mt-3 sm:gap-3">
                {[...interestsRow1, ...interestsRow2].map((item) => {
                  const isSelected = formState.interest === item;
                  return (
                    <button
                      type="button"
                      key={item}
                      onClick={() => setFormState({ ...formState, interest: item })}
                      className={`cursor-pointer rounded-md border px-3 py-1.5 font-vietnam text-[13px] font-medium leading-5 transition focus:outline-none focus-visible:ring-4 focus-visible:ring-[#3649F5]/15 sm:px-6 sm:py-2.5 sm:text-base sm:leading-5 ${
                        isSelected
                          ? 'border-[#3649F5] bg-[#3649F5] text-white shadow-sm'
                          : 'border-[#D1D1D1] bg-white text-[#4F4F4F] hover:border-[#3649F5] hover:text-[#0A0A0A]'
                      }`}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            {/* Row 3: Project Budget:* */}
            <fieldset>
              <legend className="font-vietnam text-sm font-medium text-[#4F4F4F] sm:text-base">
                Project Budget:*
              </legend>
              <div className="mt-2.5 flex flex-wrap gap-2 outline-none sm:mt-3 sm:gap-3">
                {[...budgetsRow1, ...budgetsRow2].map((b) => {
                  const isSelected = formState.budget === b;
                  return (
                    <button
                      type="button"
                      key={b}
                      onClick={() => setFormState({ ...formState, budget: b })}
                      className={`cursor-pointer rounded-md border px-3 py-1.5 font-vietnam text-[13px] font-medium leading-5 transition focus:outline-none focus-visible:ring-4 focus-visible:ring-[#3649F5]/15 sm:px-6 sm:py-2.5 sm:text-base sm:leading-5 ${
                        isSelected
                          ? 'border-[#3649F5] bg-[#3649F5] text-white shadow-sm'
                          : 'border-[#D1D1D1] bg-white text-[#4F4F4F] hover:border-[#3649F5] hover:text-[#0A0A0A]'
                      }`}
                    >
                      {b}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            {/* Row 4: Project Details */}
            <div>
              <label className="font-vietnam text-sm font-medium text-[#4F4F4F] sm:text-base">
                Project Details
              </label>
              <textarea
                rows={4}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                placeholder="Briefly describe your idea, goals, timeline, or current bottleneck..."
                className="mt-2 w-full resize-none rounded-md sm:mt-3 border border-[#D1D1D1] bg-[#F6F6F6] px-4 py-3 font-vietnam text-sm text-[#0A0A0A] outline-none transition placeholder:text-[#9A9A9A] focus:border-[#3649F5] focus:bg-white focus:ring-4 focus:ring-[#3649F5]/10"
              />
            </div>

            {/* Row 5: Submit Info Button */}
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex h-12 w-full cursor-pointer items-center justify-center rounded-md bg-[#3649F5] px-6 font-vietnam text-sm font-medium text-white transition hover:bg-[#2a3ce0] disabled:cursor-not-allowed disabled:opacity-60 sm:w-fit"
            >
              {submitting ? 'Submitting Info...' : 'Submit Info'}
            </button>
          </form>
        </div>
      </div>
    </motion.section>
  );
}
