import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer({ onOpenProjectRequest }) {
  return (
    <footer className="relative overflow-hidden bg-[#0B0B0B] pb-24 lg:pb-[250px]">
      {/* Huge Background Watermark */}
      <div className="pointer-events-none absolute -bottom-8 left-0 w-full text-center lg:-bottom-[180px] select-none">
        <h2 className="text-[19vw] font-extrabold tracking-widest text-white/5 font-switzer">
          DEVORICA
        </h2>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:pt-20">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-6 lg:gap-12">
          {/* Brand & Mission: 2 cols */}
          <div className="lg:col-span-2">
            <span className="inline-flex items-center gap-2 bg-[#00C9501A] px-[13px] py-[7px] text-[14px] text-[#05DF72] font-vietnam font-medium">
              <span className="h-2 w-2 rounded-full bg-[#00C950]"></span>
              Available for Work
            </span>

            <Link to="/" className="mt-4 flex w-fit items-center" aria-label="Devorica home">
              <img
                src="/devorica-logo.png"
                alt="Devorica logo"
                className="h-8 lg:h-9 w-auto object-contain brightness-200"
              />
            </Link>

            <p className="text-[14px] text-[#C9C9C9] lg:text-[16px] mt-5 font-vietnam leading-relaxed">
              Devorica is an AI product development company building and shipping production-ready AI products, MVPs, and SaaS platforms in weeks — for founders and teams worldwide.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 pt-4 text-[#C9C9C9]">
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Devorica on LinkedIn"
                href="https://www.linkedin.com/company/devorica"
              >
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="h-5 w-5 transition-colors duration-300 hover:text-[#0A66C2]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                </svg>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Devorica on Facebook"
                href="https://www.facebook.com/devoricaofficial"
              >
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="h-5 w-5 transition-colors duration-300 hover:text-[#1877F2]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                </svg>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Devorica on Instagram"
                href="https://www.instagram.com/devoricaofficials"
              >
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="h-5 w-5 transition-colors duration-300 hover:text-[#E4405F]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                </svg>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Devorica on WhatsApp"
                href="https://wa.me/8801619504428?text=Hello%20Devorica%2C%20I%20want%20to%20discuss%20a%20project."
              >
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="h-5 w-5 transition-colors duration-300 hover:text-[#25D366]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links & Solutions: 4 cols */}
          <div className="lg:col-span-4">
            <div className="flex flex-wrap gap-x-8 gap-y-8 sm:gap-x-12 lg:justify-between">
              <div className="w-[calc(50%-16px)] sm:w-[calc(50%-24px)] lg:w-auto">
                <h3 className="mb-4 text-[16px] text-white font-vietnam font-medium">Quick Links</h3>
                <ul className="space-y-3 text-sm text-[#C9C9C9] font-vietnam">
                  <li><Link className="transition-colors duration-300 hover:text-white" to="/work">Case Studies</Link></li>
                  <li><Link className="transition-colors duration-300 hover:text-white" to="/faq">FAQ</Link></li>
                  <li><a className="transition-colors duration-300 hover:text-white" href="/#pricing">Pricing</a></li>
                  <li><Link className="transition-colors duration-300 hover:text-white" to="/career">Careers</Link></li>
                  <li><Link className="transition-colors duration-300 hover:text-white" to="/blog">Blog</Link></li>
                </ul>
              </div>

              <div className="w-[calc(50%-16px)] sm:w-[calc(50%-24px)] lg:w-auto">
                <h3 className="mb-4 text-[16px] text-white font-vietnam font-medium">Solutions</h3>
                <ul className="space-y-3 text-sm text-[#C9C9C9] font-vietnam">
                  <li><Link className="transition-colors duration-300 hover:text-white" to="/services/ai-mvp-development">AI MVP Launch</Link></li>
                  <li><Link className="transition-colors duration-300 hover:text-white" to="/services/product-development">Full-Cycle Product Development</Link></li>
                  <li><Link className="transition-colors duration-300 hover:text-white" to="/services/ai-automation">AI System &amp; Automation</Link></li>
                  <li><Link className="transition-colors duration-300 hover:text-white" to="/services/dedicated-teams">Dedicated Product Teams</Link></li>
                  <li><Link className="transition-colors duration-300 hover:text-white" to="/services/product-design">Product Experience Design</Link></li>
                  <li><Link className="transition-colors duration-300 hover:text-white" to="/services/maintenance-care">Maintenance &amp; Care</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Contact strip */}
        <div className="mt-12 grid grid-cols-1 gap-6 pt-2 text-sm sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#155DFC33]">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="h-5 w-5 text-[#51A2FF]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
              </svg>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm text-[#B2B2B2] font-vietnam">Direct Email</span>
              <a className="text-[15px] text-white transition-colors duration-300 hover:text-[#51A2FF] lg:text-[16px] font-vietnam" href="mailto:support@devorica.com">
                support@devorica.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#05DF7222]">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="h-5 w-5 text-[#05DF72]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
              </svg>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm text-[#B2B2B2] font-vietnam">WhatsApp Support</span>
              <a className="text-[15px] text-white transition-colors duration-300 hover:text-[#05DF72] lg:text-[16px] font-vietnam" target="_blank" rel="noopener noreferrer" href="https://wa.me/8801619504428?text=Hello%20Devorica%2C%20I%20want%20to%20discuss%20a%20project.">
                +880 1619-504428
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5">
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" className="h-5 w-5 text-neutral-300" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm text-[#B2B2B2] font-vietnam">Headquarters</span>
              <span className="text-[15px] text-white lg:text-[16px] font-vietnam">
                Dhaka, Bangladesh · Global Remote
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-0 z-10 w-full px-4 text-center lg:bottom-10">
        <p className="text-[14px] text-[#C9C9C9] lg:text-[16px] font-vietnam">
          © Devorica, 2026. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
