import React from 'react';

export function LogoMarquee({ showTrustLabel = false }) {
  const logos = [
    { src: '/portfolio/client-bikkhipto.webp', alt: 'Bikkhipto' },
    { src: '/portfolio/client-bayloz.webp', alt: 'Bayloz' },
    { src: '/portfolio/client-easysub.webp', alt: 'EasySub' },
    { src: '/portfolio/client-tr-fashion.webp', alt: 'TR Fashion' },
    { src: '/portfolio/client-triple-minds.webp', alt: 'Triple Minds' },
    { src: '/portfolio/client-adcreva.webp', alt: 'Adcreva' },
  ];

  return (
    <div className={`w-full overflow-hidden bg-white border-y border-[#ECECEC] ${showTrustLabel ? 'h-[147.5px] lg:h-[212px]' : ''}`}>
      {showTrustLabel && (
        <p className="pt-8 text-center font-vietnam text-sm text-[#4F4F4F] sm:pt-4">
          Trusted by 50+ Startups &amp; Growing Businesses
        </p>
      )}
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Gradient fade on edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-16 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent" />

        <div className="relative w-full max-w-full overflow-hidden marquee-group select-none">
          <div className="flex w-max shrink-0">
            {/* Track 1 */}
            <div className="animate-marquee-track flex items-center gap-10 sm:gap-16 pr-10 sm:pr-16 shrink-0 py-6 sm:py-8">
              {[...logos, ...logos].map((logo, idx) => (
                <div
                  key={`m1-${idx}`}
                  className="flex items-center justify-center shrink-0 opacity-85 hover:opacity-100 transition-opacity duration-200"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-7 sm:h-9 w-auto max-w-[140px] sm:max-w-[180px] object-contain select-none"
                  />
                </div>
              ))}
            </div>

            {/* Track 2 (Seamless loop twin) */}
            <div className="animate-marquee-track flex items-center gap-10 sm:gap-16 pr-10 sm:pr-16 shrink-0 py-6 sm:py-8" aria-hidden="true">
              {[...logos, ...logos].map((logo, idx) => (
                <div
                  key={`m2-${idx}`}
                  className="flex items-center justify-center shrink-0 opacity-85 hover:opacity-100 transition-opacity duration-200"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-7 sm:h-9 w-auto max-w-[140px] sm:max-w-[180px] object-contain select-none"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TechStackMarquee() {
  const row1 = [
    { name: 'React', icon: '/homePage/reactIcon.png' },
    { name: 'CSS3', icon: '/homePage/CssIcon.png' },
    { name: 'Netlify', icon: '/homePage/netlify.png' },
    { name: 'Node.js', icon: '/homePage/nodejs.png' },
    { name: 'VS Code', icon: '/homePage/vsCode.png' },
    { name: 'JavaScript', icon: '/homePage/javascript.png' },
    { name: 'Vue.js', icon: '/homePage/vue.png' },
    { name: 'Docker', icon: '/homePage/dockerIcon.png' },
    { name: 'Angular', icon: '/homePage/angular.png' },
    { name: 'TypeScript', icon: '/homePage/ts.png' },
    { name: 'Laravel', icon: '/homePage/laravel.png' },
  ];

  const row2 = [
    { name: 'AWS Cloud', icon: '/homePage/awsDev.png' },
    { name: 'Python', icon: '/homePage/phyton.png' },
    { name: 'MongoDB', icon: '/homePage/mongodb.svg' },
    { name: 'Vite', icon: '/homePage/vite.png' },
    { name: 'Figma', icon: '/homePage/figma.svg' },
    { name: 'PostgreSQL', icon: '/homePage/Group 26.svg' },
    { name: 'MySQL', icon: '/homePage/mySQL.png' },
    { name: 'HTML5', icon: '/homePage/html.png' },
    { name: 'Cloudinary', icon: '/homePage/cloudinary.png' },
    { name: 'Tailwind CSS', icon: '/homePage/Tailwindcss.svg' },
    { name: 'Postman', icon: '/homePage/postman.png' },
  ];

  return (
    <section className="w-full overflow-hidden bg-white py-12 lg:py-20">
      <div className="mb-8 px-4 text-center lg:mb-12">
        <div className="inline-flex items-center gap-2 rounded-md border border-[#E4E6E9] bg-white px-3 py-1.5 font-vietnam text-sm font-medium leading-[20px] text-[#4F4F4F] lg:px-4 lg:py-2.5 lg:text-base lg:leading-[22px]">
          <span>Technologies</span>
          <span className="h-2 w-2 rounded-full bg-[#3649F5]"></span>
        </div>
        <h2 className="mt-3 font-switzer font-medium text-[32px] leading-[38px] text-[#0A0A0A] lg:mt-4 lg:text-[48px] lg:leading-[58px]">
          Battle-Tested Tech. <br className="hidden md:block" /> Built to Scale.
        </h2>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 flex flex-col gap-6 overflow-hidden">
        {/* Left & Right Gradient Shadows */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-16 sm:w-32 bg-gradient-to-r from-white via-white/70 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16 sm:w-32 bg-gradient-to-l from-white via-white/70 to-transparent" />

        {/* Row 1 (moving left) */}
        <div className="relative w-full max-w-full overflow-hidden marquee-group select-none">
          <div className="flex w-max shrink-0">
            {/* Track 1 */}
            <div className="animate-marquee-track flex items-center gap-4 pr-4 shrink-0">
              {[...row1, ...row1].map((item, idx) => (
                <div
                  key={`r1-1-${idx}`}
                  className="flex h-[71px] shrink-0 cursor-pointer items-center justify-center gap-3 rounded-md border border-[#E7E7E7] bg-[#F6F6F6] px-5 py-3 transition-transform duration-300 hover:scale-105 hover:border-[#D0D0D0]"
                >
                  <img src={item.icon} alt={item.name} className="h-8 w-8 object-contain" />
                  <span className="font-vietnam font-medium text-sm text-[#0A0A0A] whitespace-nowrap">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Track 2 (Seamless loop twin) */}
            <div className="animate-marquee-track flex items-center gap-4 pr-4 shrink-0" aria-hidden="true">
              {[...row1, ...row1].map((item, idx) => (
                <div
                  key={`r1-2-${idx}`}
                  className="flex h-[71px] shrink-0 cursor-pointer items-center justify-center gap-3 rounded-md border border-[#E7E7E7] bg-[#F6F6F6] px-5 py-3 transition-transform duration-300 hover:scale-105 hover:border-[#D0D0D0]"
                >
                  <img src={item.icon} alt={item.name} className="h-8 w-8 object-contain" />
                  <span className="font-vietnam font-medium text-sm text-[#0A0A0A] whitespace-nowrap">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 2 (moving right / reverse) */}
        <div className="relative w-full max-w-full overflow-hidden marquee-group select-none">
          <div className="flex w-max shrink-0">
            {/* Track 1 */}
            <div className="animate-marquee-track-reverse flex items-center gap-4 pr-4 shrink-0">
              {[...row2, ...row2].map((item, idx) => (
                <div
                  key={`r2-1-${idx}`}
                  className="flex h-[71px] shrink-0 cursor-pointer items-center justify-center gap-3 rounded-md border border-[#E7E7E7] bg-[#F6F6F6] px-5 py-3 transition-transform duration-300 hover:scale-105 hover:border-[#D0D0D0]"
                >
                  <img src={item.icon} alt={item.name} className="h-8 w-8 object-contain" />
                  <span className="font-vietnam font-medium text-sm text-[#0A0A0A] whitespace-nowrap">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Track 2 (Seamless loop twin) */}
            <div className="animate-marquee-track-reverse flex items-center gap-4 pr-4 shrink-0" aria-hidden="true">
              {[...row2, ...row2].map((item, idx) => (
                <div
                  key={`r2-2-${idx}`}
                  className="flex h-[71px] shrink-0 cursor-pointer items-center justify-center gap-3 rounded-md border border-[#E7E7E7] bg-[#F6F6F6] px-5 py-3 transition-transform duration-300 hover:scale-105 hover:border-[#D0D0D0]"
                >
                  <img src={item.icon} alt={item.name} className="h-8 w-8 object-contain" />
                  <span className="font-vietnam font-medium text-sm text-[#0A0A0A] whitespace-nowrap">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
