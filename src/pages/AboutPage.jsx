import React from 'react';
import { teamData } from '../data/teamData';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import ContactSection from '../components/ContactSection';

export default function AboutPage({ onOpenProjectRequest, onOpenCalendly }) {
  const principles = [
    {
      title: 'Innovation',
      icon: '/aboutPage/innovation.png',
      desc: 'We engineer with leading-edge AI models, autonomous agent frameworks, and reactive web architectures — staying months ahead of the technology curve.'
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
    '/images/team-opt-studio.jpg',
    '/images/team-opt-sprint.jpg',
    '/images/team-opt-collab.jpg',
    '/images/team-opt-strategy.jpg',
    '/images/team-brainstorm.jpg',
    '/images/team-workshop.jpg'
  ];

  return (
    <div className="w-full">
      {/* SECTION 0: HERO */}
      <section className="w-full bg-white px-4 pt-32 pb-14 sm:pt-40 sm:pb-20 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md border border-[#E4E6E9] text-xs sm:text-sm font-vietnam font-medium text-[#4F4F4F] mb-6">
            <span>About Us</span>
            <span className="w-2 h-2 rounded-full bg-[#3649F5]" />
          </div>

          <h1 className="font-switzer font-medium text-4xl sm:text-6xl lg:text-7xl text-[#0A0A0A] tracking-tight leading-[1.1]">
            We Build Digital Products That <br />
            <span className="text-[#3649F5]">Perform for Businesses</span> Worldwide.
          </h1>

          <p className="mt-6 font-vietnam text-base sm:text-lg text-[#555555] max-w-2xl mx-auto leading-relaxed">
            Devorica is an applied AI product engineering studio. We combine world-class design systems with battle-tested distributed cloud and machine learning engineering.
          </p>

          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={onOpenCalendly}
              className="flex items-center justify-center gap-2.5 rounded-sm border border-[#D5D5D5] bg-white hover:bg-[#F9F9F9] px-7 py-3.5 text-center font-vietnam text-sm sm:text-base font-medium text-[#0A0A0A] shadow-sm transition-all cursor-pointer"
            >
              <img src="/homePage/gogglemeet.png" alt="" className="w-5 h-4 object-contain" />
              <span>Schedule a Strategy Call</span>
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 1: MISSION */}
      <section className="bg-[#FCFCFB] pt-16 pb-12 lg:py-24 px-4 lg:px-8 border-y border-[#ECECEC]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block px-3 py-1 rounded-md bg-[#3649F5]/10 text-[#3649F5] font-vietnam text-xs font-semibold mb-3">
              Our Vision
            </span>
            <h2 className="font-switzer font-medium text-3xl sm:text-4xl lg:text-5xl text-[#0A0A0A] leading-tight">
              We Don't Just Build Products. <br />
              We Build Businesses.
            </h2>
            <p className="mt-5 font-vietnam text-sm sm:text-base text-[#555555] leading-relaxed">
              Software is only valuable when it moves real metrics — customer acquisition, operational automation, and user retention. Our team bridges the gap between ambitious visionary concepts and scalable, investor-grade production software.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6 pt-6 border-t border-[#E5E5E5]">
              <div>
                <p className="font-switzer font-semibold text-3xl text-[#3649F5]">3-4 Weeks</p>
                <p className="font-vietnam text-xs sm:text-sm text-[#666666] mt-1">Average Time-to-Market</p>
              </div>
              <div>
                <p className="font-switzer font-semibold text-3xl text-[#3649F5]">100%</p>
                <p className="font-vietnam text-xs sm:text-sm text-[#666666] mt-1">Senior Engineering</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-2xl border border-neutral-200 bg-neutral-900">
            <img
              src="/images/agency-team-collaboration.jpg"
              alt="Devorica Team"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: PRINCIPLES */}
      <section className="w-full bg-[#0B0B0B] px-4 py-16 lg:py-24 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md border border-[#333333] text-xs font-vietnam font-medium text-[#B0B0B0] mb-3">
              <span>Core Values</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#3649F5]" />
            </div>
            <h2 className="font-switzer font-medium text-3xl sm:text-5xl text-white">
              The Principles That Guide <br /> Everything We Do
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((pr, idx) => (
              <div
                key={idx}
                className="bg-[#141414] border border-[#2B2B2B] rounded-xl p-6 flex flex-col justify-between hover:border-[#4B4B4B] transition-all"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#222222] flex items-center justify-center mb-5 p-2.5">
                    <img src={pr.icon} alt="" className="w-full h-full object-contain" />
                  </div>
                  <h3 className="font-switzer font-medium text-xl text-white mb-2">
                    {pr.title}
                  </h3>
                  <p className="font-vietnam text-xs sm:text-sm text-[#A0A0A0] leading-relaxed">
                    {pr.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: TEAM MEMBERS */}
      <section className="w-full bg-white px-4 py-16 lg:py-24 border-b border-[#ECECEC]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md border border-[#E4E6E9] text-xs font-vietnam font-medium text-[#4F4F4F] mb-3">
              <span>Leadership & Team</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#3649F5]" />
            </div>
            <h2 className="font-switzer font-medium text-3xl sm:text-5xl text-[#0A0A0A]">
              Meet the Minds Behind Devorica
            </h2>
            <p className="font-vietnam text-sm sm:text-base text-[#555555] mt-3">
              A tight-knit collective of senior architects, product designers, and applied AI researchers who live and breathe high-performance software.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {teamData.map((member, idx) => (
              <div
                key={idx}
                className="bg-[#F8F9FA] rounded-xl overflow-hidden border border-[#ECECEC] shadow-sm hover:shadow-md transition-all group flex flex-col"
              >
                <div className="h-64 sm:h-72 overflow-hidden bg-neutral-100 flex items-center justify-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-switzer font-medium text-lg text-[#0A0A0A] group-hover:text-[#3649F5] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs font-medium text-[#3649F5] font-vietnam mt-0.5">
                      {member.role}
                    </p>
                  </div>
                  <p className="text-xs font-vietnam text-[#777777] mt-3">
                    {member.expertise}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: AGENCY CULTURE GALLERY */}
      <section className="px-4 py-16 lg:py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-switzer font-medium text-2xl sm:text-4xl text-[#0A0A0A] leading-relaxed">
              We're Devorica — an autonomous product studio of senior engineers, AI architects, and designers shipping high-velocity digital platforms worldwide.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {galleryImages.map((img, gIdx) => (
              <div
                key={gIdx}
                className="overflow-hidden rounded-xl h-52 sm:h-72 bg-neutral-200 shadow-md group"
              >
                <img
                  src={img}
                  alt="Devorica Agency Life"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: FAQ */}
      <FAQSection />

      {/* SECTION 6: CTA BANNER */}
      <CTASection onOpenCalendly={onOpenCalendly} onOpenProjectRequest={onOpenProjectRequest} />

      {/* SECTION 7: CONTACT FORM */}
      <ContactSection onOpenCalendly={onOpenCalendly} />
    </div>
  );
}
