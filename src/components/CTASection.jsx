import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal, ctaBannerVariants } from '../hooks/useScrollReveal';

export default function CTASection({ onOpenCalendly, onOpenProjectRequest }) {
  const { controls, viewportProps } = useScrollReveal(0.15);

  return (
    <motion.section
      className="overflow-hidden px-4 py-10 sm:py-12 lg:py-20 bg-white"
      variants={ctaBannerVariants}
      initial="hidden"
      animate={controls}
      style={{ willChange: 'transform, opacity', transform: 'translateZ(0)' }}
      {...viewportProps}
    >
      <div className="relative mx-auto flex min-h-[420px] max-w-7xl items-center justify-center overflow-hidden rounded-[20px] px-5 py-12 text-center sm:min-h-[460px] sm:px-8 sm:py-16 lg:min-h-[480px] lg:rounded-2xl lg:px-10 lg:py-20" style={{ transform: 'translateZ(0)' }}>
        <picture>
          <source srcSet="/homePage/readySomethings-opt.webp" type="image/webp" />
          <img
            src="/homePage/readySomethings-opt.png"
            alt=""
            className="absolute inset-0 z-0 h-full w-full object-cover object-center"
          />
        </picture>
        <div className="absolute inset-0 z-[1] bg-black/25"></div>

        <div className="relative z-10 mx-auto w-full">
          <h2 className="mx-auto font-switzerMedium text-[30px] leading-[38px] text-white lg:text-[48px] lg:leading-[58px]">
            Ready to Build Something <br className="hidden lg:block" /> Exceptional Together?
          </h2>

          <p className="mx-auto mt-4 font-vietnam text-sm leading-5 text-[#CDCDCD] sm:text-base lg:mt-6 lg:leading-6">
            In a free 30-minute call, we'll review your idea and map the approach — <br className="hidden lg:block" /> timeline and indicative investment included. No obligation.
          </p>

          <div className="mt-6 flex w-full flex-col items-center justify-center gap-3 sm:flex-row lg:mt-8">
            <a
              className="w-full sm:w-auto"
              href="https://wa.me/8801619504428?text=Hello%20Devorica%2C%20I%20want%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-bookCall px-5 py-3 font-vietnam text-sm text-white transition hover:brightness-110 sm:px-6 sm:text-base shadow-[0_4px_16px_rgba(54,73,245,0.4)]">
                <img
                  alt="WhatsApp chat icon"
                  className="h-5 w-auto"
                  src="/homePage/whatsapp.png"
                />
                Chat with the founder
              </span>
            </a>

            <button
              type="button"
              onClick={onOpenCalendly}
              className="flex w-full sm:w-auto cursor-pointer items-center justify-center gap-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 px-5 py-3 font-vietnam text-sm text-white transition sm:px-6 sm:text-base"
            >
              <img src="/homePage/gogglemeet.png" alt="" className="h-4 w-auto" />
              Schedule a Discovery Call
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
