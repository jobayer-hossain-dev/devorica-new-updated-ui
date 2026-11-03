import React from 'react';
import { teamData } from '../data/teamData';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import ContactSection from '../components/ContactSection';
import { LogoMarquee } from '../components/Marquee';

export default function AboutPage({ onOpenProjectRequest, onOpenCalendly }) {
  const principles = [
    {
      title: 'Innovation',
      icon: '/aboutPage/innovation.png',
      desc: 'We engineer with leading-edge AI models, autonomous agent frameworks, and reactive web architectures to stay months ahead of the technology curve.'
    },
    {
      title: 'Excellence',
      icon: '/aboutPage/excellence.png',
      desc: 'We refuse to ship approximate designs or fragile implementations. Every margin, state transition, and backend query is rigorously polished.'
    },
    {
      title: 'Commitment',
      icon: '/aboutPage/commitment.png',
      desc: 'Having launched and operated our own SaaS products, we treat your capital, deadlines, and success criteria with true co-founder urgency.'
    },
    {
      title: 'Integrity',
      icon: '/aboutPage/integrity.png',
      desc: 'Radical transparency: upfront milestone pricing, zero hidden hours, daily async updates, and direct access to senior engineers.'
    }
  ];

  const galleryImages = [
    '/aboutPage/IMR02103.jpg',
    '/aboutPage/magic.jpeg',
    '/aboutPage/IMR02309.jpg',
    '/aboutPage/IMR02253.jpg',
    '/aboutPage/fotballMatch.jpg',
    '/aboutPage/DSC00694.JPG'
  ];
  const galleryRows = [
    [galleryImages[0], galleryImages[1]],
    [galleryImages[2], galleryImages[3]],
    [galleryImages[4], galleryImages[5]]
  ];

  const aboutTeam = [
    ['Azmain Hossain', 'CEO & Founder', '/aboutPage/final/azmain.png'],
    ['Safayet Ahmad', 'CMO', '/aboutPage/Shafayet.png'],
    ['Abid Hossain', 'Co-Founder', '/aboutPage/final/abid.png'],
    ['Mamun Riyad', 'COO', '/aboutPage/Riyad1.png'],
    ['Arif', 'CRO', '/aboutPage/final/arif.png'],
    ['Tanvir Hasan', 'Team Lead', '/aboutPage/final/tanvire.png'],
    ['Rasibul Islam', 'Full Stack Developer', '/aboutPage/final/rasibull.png'],
    ['Sajid Abdullah', 'Full Stack Developer', '/aboutPage/final/sajid.png'],
    ['Mohammad Atiq Ullah', 'MERN Stack Developer', '/aboutPage/final/atiq.png'],
    ['Hasan Ali', 'AI Application Developer', '/aboutPage/final/hasan.png'],
    ['Rakib Hossen', 'MERN Stack Developer', '/aboutPage/final/rakib.png'],
    ['Wahedul Islam', 'Full Stack Developer', '/aboutPage/final/wahid.png'],
    ['Mohammed Fahim', 'Front-End Developer', '/aboutPage/final/fahim.png'],
    ['Sohailul Alam', 'Digital Marketing Specialist', '/aboutPage/final/sohail.png'],
    ['Naim Uddin', 'UI/UX Designer', '/aboutPage/final/naim.png'],
    ['Yasin Howlader', 'UI/UX Designer', '/aboutPage/final/yeasin.png'],
    ['Shahriar Hossain', 'Senior Visualizer', '/aboutPage/final/shahriar.png'],
    ['Abdur Rahat Tarek', 'Social Media Manager', '/aboutPage/final/rahat.png'],
    ['Mohammad AL Amin', 'Video Editor & Motion Designer', '/aboutPage/final/alamin.png'],
    ['Toasin Jawad', 'Visualizer', '/aboutPage/final/jawd.png']
  ];

  return (
    <div className="w-full">
      {/* SECTION 0: HERO */}
      <section className="w-full bg-white px-6 pb-2 pt-16 text-center sm:pb-6 sm:pt-40 h-[412.583px] lg:h-[471.333px] lg:pt-[120px]">
        <div className="mx-auto max-w-none">
          <div className="mb-[7px] inline-flex items-center gap-2 rounded-full border border-[#E4E6E9] px-4 py-3 text-xs font-vietnam font-medium text-[#4F4F4F] sm:mb-3 sm:py-2 sm:text-sm">
            <span>About Us</span>
            <span className="w-2 h-2 rounded-full bg-[#3649F5]" />
          </div>

          <h1 className="font-switzer font-medium text-[32px] leading-[1.18] sm:text-6xl lg:text-[64px] lg:leading-[1.18] text-[#0A0A0A] tracking-tight">
            We Build Digital Products That <br />
            Perform for Businesses Worldwide.
          </h1>

          <p className="mx-auto mt-4 max-w-3xl font-vietnam text-sm leading-5 text-[#555555] sm:mt-5 sm:text-lg sm:leading-relaxed">
            Devorica is a full cycle digital product agency that partners with ambitious companies to design, build, and scale products.
          </p>

          <div className="mt-4 flex justify-center sm:mt-5">
            <button
              type="button"
              onClick={onOpenCalendly}
              className="flex items-center justify-center gap-2.5 rounded-sm bg-[#3649F5] px-7 py-3 text-center font-vietnam text-sm font-medium text-white shadow-[0_4px_16px_rgba(54,73,245,0.3)] transition-all hover:bg-[#2a3ce0] cursor-pointer sm:py-3.5 sm:text-base"
            >
              <img src="/homePage/gogglemeet.png" alt="" className="w-5 h-4 object-contain" />
              <span>Book a Strategy Call</span>
            </button>
          </div>
        </div>
      </section>

      <LogoMarquee showTrustLabel />

      {/* SECTION 1: MISSION */}
      <section className="border-y border-[#ECECEC] bg-white px-4 pb-12 pt-16 h-[773.333px] lg:h-[810px] lg:px-0 lg:py-0">
        <div className="mx-auto grid max-w-none grid-cols-1 items-center gap-10 lg:grid-cols-[610px_minmax(0,1fr)] lg:gap-[180.8px]">
          <div className="lg:order-2">
            <span className="inline-block px-3 py-1 rounded-md bg-[#3649F5]/10 text-[#3649F5] font-vietnam text-xs font-semibold mb-3">
              Our Mission
            </span>
            <h2 className="font-switzer font-medium text-3xl sm:text-4xl lg:text-5xl text-[#0A0A0A] leading-tight">
              We Don&apos;t Just Build <br />
              Products. We Build <br />
              Businesses.
            </h2>
            <p className="mt-5 font-vietnam text-sm sm:text-base text-[#555555] leading-relaxed">
              Devorica is a product engineering and UX design company for startups and B2B SaaS teams. We move fast, think strategically, and stay invested in your outcomes rather than just your deliverables.
            </p>
          </div>

          <div className="order-1 overflow-hidden bg-neutral-900 lg:h-[610px] lg:w-[610px]">
            <img
              src="/saasMvpPage/team.png"
              alt="Devorica Team"
              loading="lazy"
              decoding="async"
              className="aspect-square h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12 h-[545.333px] sm:py-16 lg:h-[636.333px] lg:px-0 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-start lg:items-center lg:text-center">
            <div className="mb-3 inline-flex w-fit items-center gap-2 rounded-[4px] border border-[#E4E6E9] bg-white px-3 py-2 font-vietnam text-sm font-medium text-[#4F4F4F] lg:px-4 lg:py-2.5 lg:text-base">
              Our Impact
              <span className="h-2 w-2 rounded-full bg-[#3649F5]" />
            </div>
            <h2 className="mb-2 font-switzerMedium text-[32px] leading-[38px] text-[#0A0A0A] lg:mb-4 lg:text-[48px] lg:leading-[58px]">
              Built for measurable <br className="hidden lg:block" /> product progress
            </h2>
            <p className="font-vietnam text-sm leading-5 text-[#4F4F4F] lg:text-lg lg:leading-6">
              We judge our work by what happens after launch: how quickly an idea is validated, <br className="hidden lg:block" /> how reliably the product runs, and how well it holds up as usage grows.
            </p>
          </div>
          <div className="mx-auto mt-6 grid grid-cols-2 gap-2 lg:mt-12 lg:grid-cols-4 lg:gap-4">
            {[
              ['4 wks', 'Average time to launch an AI MVP'],
              ['11+', 'AI systems running in production'],
              ['1M+', 'End users reached by products'],
              ['3+', 'Years building software products'],
            ].map(([value, label]) => (
              <div key={value} className="flex h-[120px] flex-col justify-end rounded-sm bg-[#F5F5F5] p-3 lg:h-[191px] lg:rounded-[12px] lg:p-4">
                <div className="font-switzerMedium text-[26px] leading-[32px] text-black lg:text-[56px] lg:leading-[68px]">{value}</div>
                <p className="mt-1 font-vietnam text-[13px] leading-4 text-[#6D6D6D] lg:text-base lg:leading-[22px]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: PRINCIPLES */}
      <section className="w-full bg-[#0B0B0B] px-4 py-16 h-[1553.333px] text-white lg:h-[1095.333px] lg:px-8 lg:py-[78px]">
        <div className="max-w-7xl mx-auto">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md border border-[#333333] text-xs font-vietnam font-medium text-[#B0B0B0] mb-3">
              <span>Core Values</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#3649F5]" />
            </div>
            <h2 className="font-switzer font-medium text-3xl sm:text-5xl text-white">
              The Principles That Guide <br /> Everything We Do
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-[56px] lg:grid-cols-2 lg:gap-6">
            {principles.map((pr, idx) => (
              <div
                key={idx}
                className="flex h-[283px] flex-col justify-between overflow-hidden rounded-xl border border-[#2B2B2B] bg-[#141414] p-6 transition-all hover:border-[#4B4B4B] lg:h-[311px]"
              >
                <div>
                  <div className="mb-5 flex h-[60px] w-[60px] items-center justify-center">
                    <img src={pr.icon} alt={pr.title} className="h-full w-full object-contain" />
                  </div>
                  <h3 className="mb-2 font-switzer text-xl font-medium text-white lg:text-2xl lg:leading-[30px]">
                    {pr.title}
                  </h3>
                  <p className="font-vietnam text-xs leading-relaxed text-[#A0A0A0] sm:text-sm lg:text-base lg:leading-6">
                    {pr.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: TEAM MEMBERS */}
      <section className="w-full border-b border-[#ECECEC] bg-white px-4 py-16 h-[3039.927px] lg:h-[2686.375px] lg:py-[120px]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 grid max-w-none gap-8 text-left lg:grid-cols-2 lg:gap-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md border border-[#E4E6E9] text-xs font-vietnam font-medium text-[#4F4F4F] mb-3">
              <span>Leadership & Team</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#3649F5]" />
            </div>
            <h2 className="font-switzer font-medium text-3xl text-[#0A0A0A] sm:text-5xl lg:text-[48px] lg:leading-[58px]">
              Meet the Minds<br className="hidden lg:block" /> Behind Devorica
            </h2>
            <p className="mt-3 font-vietnam text-sm text-[#555555] sm:text-base lg:pt-[64px]">
              A tight-knit collective of senior architects, product designers, and applied AI researchers who live and breathe high-performance software.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-4">
            {aboutTeam.map(([name, role, image], idx) => (
              <div
                key={idx}
                className="group flex h-[249.34px] flex-col overflow-hidden rounded-xl border border-[#ECECEC] bg-[#F8F9FA] p-2 shadow-sm transition-all hover:shadow-md lg:h-[424.406px] lg:p-[10px]"
              >
                <div className="h-[177.84px] overflow-hidden rounded-lg bg-neutral-100 sm:h-72 lg:h-[312.4px]">
                  <img
                    src={image}
                    alt={name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-0">
                  <div>
                    <h3 className="font-switzer font-medium text-lg text-[#0A0A0A] transition-colors group-hover:text-[#3649F5]">
                      {name}
                    </h3>
                    <p className="mt-0.5 text-[10px] font-medium text-[#3649F5] font-vietnam lg:text-xs">
                      {role}
                    </p>
                  </div>
                  <p className="mt-2 text-[10px] leading-3 font-vietnam text-[#777777] lg:mt-3 lg:text-xs lg:leading-normal">
                    Product design, engineering &amp; delivery
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: AGENCY CULTURE GALLERY */}
      <section className="bg-[#FAFAFA] px-4 py-16 h-[850.333px] lg:h-[1124px] lg:py-[120px]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-switzer font-medium text-2xl sm:text-4xl text-[#0A0A0A] leading-relaxed">
              We are Devorica, an autonomous product studio of senior engineers, AI architects, and designers shipping high-velocity digital platforms worldwide.
            </h2>
          </div>

          <div className="flex flex-col gap-2 sm:gap-6">
            {galleryRows.map((row, rowIdx) => (
              <div key={rowIdx} className={`grid h-[173px] gap-2 ${rowIdx === 0 ? 'grid-cols-[247.646px_102.354px]' : rowIdx === 1 ? 'grid-cols-2' : 'grid-cols-[140px_210px]'} lg:h-72 lg:grid-cols-2 lg:gap-6`}>
                {row.map((img, gIdx) => (
                  <div key={gIdx} className="group h-full overflow-hidden rounded-xl bg-neutral-200 shadow-md">
                    <img src={img} alt="Devorica Agency Life" loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: FAQ */}
      <div className="h-[878px] overflow-hidden lg:min-h-[959px]"><FAQSection /></div>

      {/* SECTION 6: CTA BANNER */}
      <div className="h-[500px] overflow-hidden lg:h-auto"><CTASection onOpenCalendly={onOpenCalendly} onOpenProjectRequest={onOpenProjectRequest} /></div>

      {/* SECTION 7: CONTACT FORM */}
      <ContactSection compact onOpenCalendly={onOpenCalendly} />
    </div>
  );
}
