import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Play, 
  Pause,
  Check, 
  X, 
  DollarSign, 
  Home as HomeIcon, 
  Building2 
} from 'lucide-react';
import { TechStackMarquee } from '../components/Marquee';
import PricingSection from '../components/PricingSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import CTASection from '../components/CTASection';
import {
  useScrollReveal,
  revealVariants,
  headerVariants,
  gridContainerVariants,
  cardVariants
} from '../hooks/useScrollReveal';

export default function HomePage({ onOpenProjectRequest, onOpenCalendly }) {
  // Scroll reveal controllers matching Zentexx exact scroll timing
  const impactReveal = useScrollReveal(0.05);
  const notDevShopReveal = useScrollReveal(0.05);
  const servicesReveal = useScrollReveal(0.05);
  const projectsReveal = useScrollReveal(0.05);
  const howItWorksReveal = useScrollReveal(0.05);
  const whyDevoricaReveal = useScrollReveal(0.05);
  const comparisonReveal = useScrollReveal(0.05);
  const industryReveal = useScrollReveal(0.05);

  // Live typewriter effect for Hero badge
  const words = ['AI Products', 'AI Agents', 'Dedicated Teams', 'SaaS MVPs'];
  const [wordIdx, setWordIdx] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Video state
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    const currentWord = words[wordIdx];
    const typingSpeed = isDeleting ? 45 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentWord.substring(0, displayedText.length + 1));
        if (displayedText === currentWord) {
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        setDisplayedText(currentWord.substring(0, displayedText.length - 1));
        if (displayedText === '') {
          setIsDeleting(false);
          setWordIdx((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, wordIdx]);

  const heroMarqueeLogos = [
    { name: 'Bikkhipto', src: '/bikkhipto-logo-white.webp' },
    { name: 'Bayloz', src: '/bayloz-logo.png' },
    { name: 'Fathom AI', src: '/portfolio/client-fathom-white.svg' },
    { name: 'EasySub BD', src: '/portfolio/client-easysub-white.svg' },
    { name: 'Maertens Studio', src: '/portfolio/client-maertens-white.svg' }
  ];

  const services = [
    {
      title: 'AI MVP Development',
      badge: '2-4 weeks',
      desc: 'Launch an investor-ready AI MVP in weeks — production-grade code, in front of users and investors fast. Built for funded founders validating an AI-first product.',
      href: '/services/ai-mvp-development',
      linkText: 'Explore AI MVP Development',
      img: '/homePage/EupinenceDashBoard.png',
      reverse: false
    },
    {
      title: 'SaaS Product Development',
      badge: '6-12 weeks',
      desc: 'Full-cycle SaaS — strategy, UX, engineering, AI, and launch — from one senior team that owns the whole lifecycle. Built to scale without breaking.',
      href: '/services/product-development',
      linkText: 'Explore SaaS Development',
      img: '/homePage/mySpendDashboard.png',
      reverse: true
    },
    {
      title: 'AI Automation & Agents',
      badge: '30-60 days',
      desc: 'Custom AI that removes repetitive work: support automation, document and contract processing, and AI agents wired into the tools you already run.',
      href: '/services/ai-automation',
      linkText: 'Explore AI Automation',
      img: '/homePage/Inner.png',
      reverse: false
    },
    {
      title: 'Product & UX Design',
      badge: '1-3 weeks',
      desc: 'High-conversion UI/UX for AI products, SaaS, and mobile apps. Designed for the metric — activation, retention, conversion — not a dribbble shot.',
      href: '/services/product-design',
      linkText: 'Explore Product Design',
      img: '/homePage/MySpendApp.png',
      reverse: true
    },
    {
      title: 'Maintenance & Care',
      badge: 'ongoing',
      desc: 'Post-launch reliability: uptime monitoring, security patching, and AI model tuning by a senior team that knows your stack. Whether we built it or not.',
      href: '/services/maintenance-care',
      linkText: 'Explore Maintenance & Care',
      img: '/homePage/ZenHcareApp.png',
      reverse: false
    }
  ];

  const projects = [
    {
      title: 'Bikkhipto',
      subtitle: '+65% Conversion Lift · Headless E-commerce',
      img: '/portfolio/bikkhipto.jpg',
      href: '/work/bikkhipto',
      colSpan: 'sm:col-span-2'
    },
    {
      title: 'Bayloz',
      subtitle: '99.99% Uptime · Global Marketplace',
      img: '/portfolio/bayloz.jpg',
      href: '/work/bayloz',
      colSpan: 'sm:col-span-1'
    },
    {
      title: 'Fathom AI',
      subtitle: '99.4% Precision · Autonomous Intelligence',
      img: '/portfolio/fathom.jpg',
      href: '/work/fathom-ai',
      colSpan: 'sm:col-span-1'
    },
    {
      title: 'Maertens Studio',
      subtitle: 'Award-Winning · Immersive WebGL Showcase',
      img: '/portfolio/studiomaertens.jpg',
      href: '/work/maertens-studio',
      colSpan: 'sm:col-span-2'
    }
  ];

  const processSteps = [
    {
      title: 'Discover & Align',
      icon: '/homePage/define.png',
      desc: 'We start by understanding your business goals, users, constraints, and success criteria. You receive a defined scope, a prioritised roadmap, and a realistic estimate before development begins.'
    },
    {
      title: 'Define & Design',
      icon: '/homePage/validate.png',
      desc: 'Architecture blueprint, interactive prototypes, and complete technical specifications. We validate product-market assumptions before writing a single line of backend code.'
    },
    {
      title: 'Build & Validate',
      icon: '/homePage/build.png',
      desc: 'Bi-weekly sprint demos, production CI/CD pipelines, automated testing, and active staging environments. You test real features every Friday as they get completed.'
    },
    {
      title: 'Launch & Improve',
      icon: '/homePage/scale.png',
      desc: 'Production deployment, zero-downtime database migrations, analytics instrumentation, and proactive 24/7 care to guarantee high conversion from day one.'
    }
  ];

  const whyCards = [
    {
      title: 'We run our own SaaS products',
      icon: '/homePage/AI.svg',
      desc: 'We build and operate our own platforms in fintech, healthtech, and trading — so we think about your product like owners, not a shop that ships and disappears.'
    },
    {
      title: 'AI-first, not AI-bolted-on',
      icon: '/homePage/build.svg',
      desc: 'We architect AI into the product from day one — LLMs, RAG, agents, and automation designed into the core, not sprinkled on at the end.'
    },
    {
      title: 'Direct access, global delivery',
      icon: '/homePage/outcome.svg',
      desc: 'Work directly with the founder and senior team — boutique responsiveness across North America, Europe, MENA, and APAC.'
    },
    {
      title: 'Senior team only',
      icon: '/homePage/startup.svg',
      desc: 'Every engagement is staffed with senior designers and engineers. No junior work hidden in delivery, no learning curve on your budget.'
    }
  ];

  const industries = [
    { name: 'FinTech', img1: '/homePage/fintech2.png', img2: '/homePage/fintech1.png' },
    { name: 'HealthTech', img1: '/homePage/health2.png', img2: '/homePage/health1.png' },
    { name: 'EdTech', img1: '/homePage/edTech2.png', img2: '/homePage/edtech1.png' },
    { name: 'E-Commerce', img1: '/homePage/eCommerce2.png', img2: '/homePage/eCommerce1.png' },
    { name: 'B2B SaaS', img1: '/homePage/SaaSB2B2.png', img2: '/homePage/SaaSB2B1.png' },
    { name: 'Real Estate', img1: '/homePage/RealEstate2.png', img2: '/homePage/RealEstate1.png' },
    { name: 'AI & Technology', img1: '/homePage/ai2.png', img2: '/homePage/ai1.png' },
    { name: 'Trading Platforms', img1: '/homePage/travel2.png', img2: '/homePage/travel1.png' },
  ];

  return (
    <div className="w-full">
      {/* SECTION 0: HERO BANNER */}
      <section 
        className="overflow-hidden bg-[url('/homePage/bannerMubile.png')] bg-cover bg-center px-4 pb-8 lg:bg-[url('/homePage/banner.png')] lg:px-0 lg:pb-[117px]"
        aria-label="Devorica AI product development hero section"
      >
        <div className="container mx-auto max-w-7xl pt-[60px] text-center sm:pt-16 lg:pt-[148px]">
          <div className="flex flex-col items-center justify-center">
            {/* Typewriter Badge */}
            <div className="mb-4 flex items-center gap-2 rounded-[4px] bg-[#F6F6F6] px-4 py-2 font-vietnam text-base font-normal leading-6 text-[#4F4F4F] lg:mb-[28px]">
              <span>Helping Teams</span>
              <span className="inline-flex items-center text-[#3649F5]">
                <span className="inline-flex min-w-[116px] items-center font-vietnam text-base font-normal leading-6">
                  <span>{displayedText}</span>
                  <span className="ml-0.5 inline-block h-[1em] w-[2px] animate-pulse bg-current align-middle"></span>
                </span>
              </span>
            </div>

            {/* Main H1 Headline */}
            <h1 className="w-full max-w-[980px] text-center font-switzer text-[36px] font-medium leading-[44px] sm:text-[48px] sm:leading-[60px] lg:text-[64px] lg:leading-[76px]">
              <span className="block text-[#0A0A0A]">AI Product Development,</span>
              <span className="block text-[#6B6B6B]">
                Shipped{' '}
                <span className="mx-1 inline-block rounded-[6px] border border-[#4F6BF6] bg-white px-2 text-[#4F6BF6] shadow-[0_0_16px_rgba(79,107,246,0.25)]">
                  In Weeks
                </span>{' '}
                Not Quarters
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-4 max-w-[1152px] font-vietnam text-sm leading-5 text-design-desc sm:text-base sm:leading-7 lg:text-lg lg:leading-6">
              Devorica takes AI products, MVPs, and SaaS platforms from idea to production — fast.{' '}
              <br className="hidden lg:block" />
              A senior team that runs its own SaaS, so we build yours like owners.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 lg:flex-row lg:gap-4">
              {/* Primary Call button with text slide effect */}
              <button
                type="button"
                onClick={onOpenCalendly}
                aria-label="Book a free strategy call with Devorica"
                className="book-call group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-sm bg-bookCall px-6 py-[16px] text-sm font-vietnam font-medium text-white lg:w-auto lg:px-8 lg:text-base cursor-pointer hover:brightness-110 transition-all shadow-[0_4px_20px_rgba(54,73,245,0.3)]"
              >
                <img
                  alt=""
                  aria-hidden="true"
                  className="h-5 w-auto object-contain"
                  src="/homePage/gogglemeet.png"
                />
                <span className="relative inline-block h-5 overflow-hidden leading-5">
                  <span className="block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                    Book a Free Strategy Call
                  </span>
                  <span className="absolute left-0 top-full block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                    Book a Free Strategy Call
                  </span>
                </span>
              </button>

              {/* Secondary View Work button */}
              <Link
                to="/work"
                className="w-full rounded-sm border border-[#ECECEC] bg-[#F6F6F6] px-4 py-3.5 text-center font-vietnam text-sm font-medium text-mission lg:w-auto lg:px-5 lg:text-base transition hover:bg-[#EFEFEF]"
              >
                View Our Work
              </Link>
            </div>
          </div>

          {/* Hero Trusted By Marquee */}
          <div className="mx-auto mt-10 lg:mt-[120px]">
            <p className="mb-4 text-center font-vietnam text-[13px] text-design-desc lg:mb-6 lg:text-lg">
              Trusted by startups, SaaS teams, and growing businesses
            </p>

            <div className="relative mx-auto hidden w-full max-w-[1000px] overflow-hidden lg:block">
              <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent"></div>
              <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent"></div>

              <div className="flex items-center gap-12 w-max shrink-0 animate-marquee">
                {[...heroMarqueeLogos, ...heroMarqueeLogos].map((logo, idx) => (
                  <div key={idx} className="mx-6 flex h-8 w-[110px] shrink-0 items-center justify-center grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100">
                    <img
                      src={logo.src}
                      alt={`${logo.name} logo`}
                      className="h-full w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Continuous Scrolling Marquee */}
            <div className="relative mx-auto block lg:hidden w-full overflow-hidden py-2">
              <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-8 bg-gradient-to-r from-white to-transparent"></div>
              <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-8 bg-gradient-to-l from-white to-transparent"></div>
              <div className="flex items-center gap-8 w-max shrink-0 animate-marquee">
                {[...heroMarqueeLogos, ...heroMarqueeLogos, ...heroMarqueeLogos].map((logo, idx) => (
                  <div key={idx} className="mx-2 flex h-6 w-24 shrink-0 items-center justify-center grayscale opacity-75">
                    <img src={logo.src} alt="" className="h-full w-full object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: OUR IMPACT */}
      <motion.section
        className="bg-white px-4 py-10 sm:px-4 sm:py-20 lg:px-0 lg:py-20"
        initial="hidden"
        animate={impactReveal.controls}
        variants={revealVariants}
        {...impactReveal.viewportProps}
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto flex flex-col lg:items-center justify-start lg:text-center">
            <div className="mb-3 w-fit flex items-center gap-2 rounded-[4px] border border-[#E4E6E9] bg-white lg:px-4 lg:py-2.5 px-3 py-2 font-vietnam text-sm font-medium lg:text-base text-[#4F4F4F]">
              <span>Our Impact</span>
              <span className="h-2 w-2 rounded-full bg-[#3649F5]"></span>
            </div>
            <h2 className="mb-2 lg:mb-4 lg:text-[48px] lg:leading-[58px] text-[32px] leading-[38px] font-switzerMedium text-[#0A0A0A]">
              Built for measurable <br className="hidden lg:block" /> product progress
            </h2>
            <p className="font-vietnam lg:text-lg text-sm lg:leading-6 leading-5 text-[#4F4F4F]">
              We judge our work by what happens after launch: how quickly an idea is validated,{' '}
              <br className="hidden md:block" />
              how reliably the product runs, and how well it holds up as usage grows.
            </p>
          </div>

          <div className="mx-auto mt-6 grid grid-cols-2 gap-2 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-4 justify-items-center">
            <div className="flex flex-col justify-end lg:rounded-[12px] rounded-sm bg-[#F5F5F5] lg:w-[308px] lg:h-[191px] w-full h-[110px] lg:p-4 p-3">
              <div className="lg:text-[56px] lg:leading-[68px] font-switzerMedium text-[26px] leading-[32px] text-[#000000]">
                4 wks
              </div>
              <p className="mt-1 font-vietnam text-[13px] lg:text-base lg:leading-[22px] leading-4 text-[#6D6D6D]">
                Average time to launch <br className="hidden lg:block" /> an AI MVP
              </p>
            </div>

            <div className="flex flex-col justify-end lg:rounded-[12px] rounded-sm bg-[#F5F5F5] lg:w-[308px] lg:h-[191px] w-full h-[110px] lg:p-4 p-3">
              <div className="lg:text-[56px] lg:leading-[68px] font-switzerMedium text-[26px] leading-[32px] text-[#000000]">
                11+
              </div>
              <p className="mt-1 font-vietnam text-[13px] lg:text-base lg:leading-[22px] leading-4 text-[#6D6D6D]">
                AI systems running <br className="hidden lg:block" /> in production
              </p>
            </div>

            <div className="flex flex-col justify-end lg:rounded-[12px] rounded-sm bg-[#F5F5F5] lg:w-[308px] lg:h-[191px] w-full h-[110px] lg:p-4 p-3">
              <div className="lg:text-[56px] lg:leading-[68px] font-switzerMedium text-[26px] leading-[32px] text-[#000000]">
                1M+
              </div>
              <p className="mt-1 font-vietnam text-[13px] lg:text-base lg:leading-[22px] leading-4 text-[#6D6D6D]">
                End users reached <br className="hidden lg:block" /> by products
              </p>
            </div>

            <div className="flex flex-col justify-end lg:rounded-[12px] rounded-sm bg-[#F5F5F5] lg:w-[308px] lg:h-[191px] w-full h-[110px] lg:p-4 p-3">
              <div className="lg:text-[56px] lg:leading-[68px] font-switzerMedium text-[26px] leading-[32px] text-[#000000]">
                3+
              </div>
              <p className="mt-1 font-vietnam text-[13px] lg:text-base lg:leading-[22px] leading-4 text-[#6D6D6D]">
                Years building <br className="hidden lg:block" /> software products
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* SECTION 2: NOT A DEV SHOP. AN AI PRODUCT STUDIO THAT SHIPS */}
      <motion.section
        className="bg-[#F9F9F9] px-4 sm:py-20 lg:px-8 lg:py-20 py-10"
        initial="hidden"
        animate={notDevShopReveal.controls}
        variants={revealVariants}
        {...notDevShopReveal.viewportProps}
      >
        <div className="mx-auto grid w-full max-w-[1280px] items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Left Service Image */}
          <div className="order-2 mx-auto w-full max-w-[616px] lg:order-1">
            <div className="relative aspect-square w-full overflow-hidden rounded-[12px] sm:rounded-[16px]">
              <img
                src="/service.png"
                alt="Devorica AI product development studio"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right Text */}
          <div className="order-1 w-full lg:order-2">
            <h2 className="font-switzer capitalize text-[30px] font-medium leading-[38px] text-[#0A0A0A] sm:text-[38px] sm:leading-[46px] lg:text-[48px] lg:leading-[58px]">
              Not a dev shop. An AI product studio that ships.
            </h2>
            <div className="mt-5 lg:space-y-4 space-y-3 lg:mt-8">
              <p className="font-vietnam text-[14px] font-normal leading-5 text-[#4F4F4F] sm:text-base sm:leading-7 lg:text-lg lg:leading-[25px]">
                Most agencies build exactly what you spec — bugs, dead ends, and all. We don't. Because we build and run our own SaaS in fintech, healthtech, and trading, we care about retention, cost, and what happens after launch. You get one senior, accountable team — no juniors on your budget, no handoffs between vendors.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* SECTION 3: SERVICES (End-to-End alternating layout on Desktop + Mobile) */}
      <motion.section
        className="bg-principles px-4 pt-20 pb-10 lg:px-0 lg:py-[120px]"
        initial="hidden"
        animate={servicesReveal.controls}
        variants={revealVariants}
        {...servicesReveal.viewportProps}
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-center">
            <div className="mb-3 flex items-center rounded-md border border-[#2B2B2B] px-4 py-2.5 font-vietnam text-[16px] text-secondary lg:mb-4">
              <span>Services</span>
              <span className="ml-2 h-2 w-2 rounded-full bg-bookCall"></span>
            </div>
            <h2 className="text-center font-switzer text-[32px] leading-[38px] font-medium text-secondary lg:text-5xl lg:leading-[58px]">
              AI product development <br /> services, end to end.
            </h2>
            <p className="mt-2 text-center font-vietnam text-sm text-research-desc lg:mt-4 lg:text-lg">
              Design, engineering, and applied AI under one <br className="block lg:hidden" /> roof — with an honest timeline for each.
            </p>
          </div>

          {/* DESKTOP ALTERNATING 2-COLUMN SERVICES */}
          <div className="hidden lg:mt-14 lg:block lg:space-y-6">
            {services.map((srv, idx) => (
              <article key={idx} className="grid grid-cols-2 items-stretch gap-6">
                {/* Text Card */}
                <div
                  className={`bg-service-card border-services flex flex-col justify-between rounded-lg border-[0.667px] px-6 py-8 ${
                    srv.reverse ? 'order-2' : 'order-1'
                  }`}
                >
                  <div>
                    <div className="mb-4 flex items-start justify-between gap-10">
                      <h3 className="flex-1 font-switzer text-[40px] leading-[48px] font-medium text-secondary">
                        {srv.title}
                      </h3>
                      <div className="rounded-4xl px-3 py-1.5 font-vietnam text-sm font-medium whitespace-nowrap bg-[#FF7847]/10 text-[#FF7847]">
                        {srv.badge}
                      </div>
                    </div>
                    <p className="text-desc-service font-vietnam text-base leading-6">
                      {srv.desc}
                    </p>
                  </div>

                  <Link
                    to={srv.href}
                    className="group hover-text-see mt-12 flex w-fit cursor-pointer items-center font-vietnam text-secondary transition-colors duration-300"
                  >
                    <span className="relative after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 group-hover:after:w-full">
                      {srv.linkText}
                    </span>
                    <span className="ml-0 flex w-0 items-center justify-center overflow-hidden opacity-0 transition-all duration-300 ease-out group-hover:ml-3 group-hover:w-6 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:-rotate-45 group-hover:opacity-100">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </span>
                  </Link>
                </div>

                {/* Dashboard Image Column */}
                <div
                  className={`group flex aspect-[1.42735] items-center justify-center overflow-hidden ${
                    srv.reverse ? 'order-1' : 'order-2'
                  }`}
                >
                  <img
                    src={srv.img}
                    alt={srv.title}
                    className="h-full w-full object-contain transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-100"
                  />
                </div>
              </article>
            ))}
          </div>

          {/* MOBILE STICKY STACKING SERVICES CARDS */}
          <div className="mt-8 flex flex-col gap-4 lg:hidden">
            {services.map((srv, idx) => (
              <article
                key={idx}
                className="bg-service-card border-services flex flex-col items-start rounded-[4px] border px-3 pb-6"
                style={{ position: 'sticky', top: `${idx * 12}px`, zIndex: idx + 1 }}
              >
                <div className="mt-3 flex w-full justify-center">
                  <img
                    src={srv.img}
                    alt={srv.title}
                    className="mb-4 w-full max-w-xs object-contain"
                  />
                </div>
                <div className="mb-3 rounded-4xl px-3 py-1.5 font-vietnam text-sm bg-saas-btn text-saas-btn">
                  {srv.badge}
                </div>
                <h3 className="mb-[6px] font-switzer text-xl font-medium text-secondary">
                  {srv.title}
                </h3>
                <p className="text-desc-service font-vietnam text-sm">
                  {srv.desc}
                </p>
                <Link
                  to={srv.href}
                  className="mt-4 flex w-fit cursor-pointer items-center gap-2 font-vietnam text-sm text-secondary duration-300 hover:text-see"
                >
                  <span>{srv.linkText}</span>
                  <ArrowRight />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </motion.section>

      {/* SECTION 4: OUR PROJECTS */}
      <motion.section
        className="lg:py-20 py-10 lg:px-0 px-4 bg-white"
        initial="hidden"
        animate={projectsReveal.controls}
        variants={revealVariants}
        {...projectsReveal.viewportProps}
      >
          <div className="text-center lg:mb-[56px] mb-[32px] flex flex-col justify-center items-center">
          <div className="flex items-center font-vietnam w-fit border-[#E4E6E9] gap-2 lg:px-4 lg:py-3 px-3 py-2 rounded-md border text-sm leading-[20px] lg:text-base lg:leading-[20px] text-[#4F4F4F]">
            <span>Our Projects</span>
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          </div>
          <h2 className="lg:text-[48px] mt-2 lg:mt-3 lg:leading-[58px] font-switzerMedium text-[32px] leading-[38px] text-[#0A0A0A]">
            Products built for real users, <br className="hidden md:block" /> operations, and growth
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5">
          {projects.map((proj, pIdx) => (
            <div
              key={pIdx}
              className={`group relative overflow-hidden rounded-[8px] lg:rounded-2xl h-[300px] lg:h-[516px] ${proj.colSpan} bg-neutral-900`}
            >
              <img
                src={proj.img}
                alt={proj.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <Link to={proj.href}>
                <div className="absolute left-3 right-3 bottom-3 bg-white/95 backdrop-blur-sm lg:rounded-xl rounded-[4px] px-4 py-3 flex items-center justify-between z-10 shadow-lg">
                  <div>
                    <p className="text-sm lg:text-xl font-switzerMedium text-[#0A0A0A]">
                      {proj.title}
                    </p>
                    {proj.subtitle && (
                      <p className="text-[11px] lg:text-xs text-[#555555] font-vietnam mt-0.5">
                        {proj.subtitle}
                      </p>
                    )}
                  </div>
                  <div className="lg:w-[48px] w-[28px] lg:h-[48px] h-[28px] rounded-full bg-[#E7E7E7] flex items-center justify-center transition-all duration-300 group-hover:bg-[#3649F5] shrink-0 ml-3">
                    <ArrowUpRight className="lucide lucide-arrow-up-right text-[#3649F5] lg:w-[24px] lg:h-[24px] w-[20px] h-[20px] group-hover:text-white transition-colors" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </motion.section>

      {/* SECTION 5: HOW IT WORKS */}
      <motion.section
        className="bg-white px-4 py-10 lg:px-0 lg:py-20"
        initial="hidden"
        animate={howItWorksReveal.controls}
        variants={revealVariants}
        {...howItWorksReveal.viewportProps}
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto flex flex-col items-center text-center">
            <div className="mb-2 flex items-center gap-2 rounded-[4px] border border-[#E4E6E9] bg-white px-3 py-2 font-vietnam text-sm leading-5 text-[#4F4F4F] lg:mb-3 lg:px-4 lg:py-2.5 lg:text-base lg:leading-[22px]">
              <span>How it Works</span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#4E6DFA]"></span>
            </div>
            <h2 className="font-switzerMedium text-[30px] leading-[38px] text-[#0A0A0A] lg:text-[48px] lg:leading-[58px]">
              A clear process that reduces <br className="hidden md:block" /> risk at every stage
            </h2>
            <p className="mt-3 font-vietnam text-[#4F4F4F] lg:mt-4 lg:text-lg lg:leading-[25px]">
              Each phase ends with something concrete you can review, such as a scope, a prototype,<br className="hidden lg:block" />
              working software, or a live product. Decisions are made on evidence, not assumptions.
            </p>
            <button
              type="button"
              onClick={onOpenCalendly}
              className="mt-4 flex items-center justify-center rounded-[4px] bg-[#0A0A0A] px-8 py-3.5 font-vietnam text-[14px] leading-5 text-white transition hover:bg-[#2A2A2A] lg:mt-6 lg:text-[16px] lg:leading-[22px] cursor-pointer"
            >
              Schedule a Call
            </button>
          </div>

          <div className="mx-auto mt-8 grid grid-cols-1 gap-10 lg:mt-12 lg:grid-cols-[1fr_1.05fr] lg:items-stretch lg:gap-20">
            {/* Left Process Steps */}
            <div className="flex flex-col justify-between gap-6 sm:gap-9 lg:gap-10">
              {processSteps.map((step, sIdx) => (
                <div key={sIdx} className="flex items-start justify-center gap-2 lg:gap-3">
                  <div className="flex shrink-0 items-center justify-center rounded-[3px] border border-[#C2D9FF] bg-[#ECF4FF] p-1">
                    <img
                      src={step.icon}
                      alt=""
                      className="h-6 w-6 object-contain lg:h-8 lg:w-8"
                    />
                  </div>
                  <div>
                    <h3 className="font-switzerMedium text-xl leading-[28px] text-[#0A0A0A] lg:text-2xl lg:leading-[30px]">
                      {step.title}
                    </h3>
                    <p className="mt-2 font-vietnam text-[14px] leading-5 text-[#4F4F4F] lg:text-base lg:leading-6">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Video Showcase */}
            <div className="relative min-h-[300px] w-full overflow-hidden rounded-[12px] bg-neutral-900 lg:min-h-[450px]">
              <video
                ref={videoRef}
                poster="/images/hero-showcase.jpg"
                className="absolute inset-0 h-full w-full cursor-pointer object-cover object-top"
                style={{ objectPosition: 'center 0%' }}
                loop
                playsInline
                preload="metadata"
                onClick={toggleVideo}
                aria-label="Devorica product development process video"
              >
                <source src="/homePage/devorica-showcase.mp4" type="video/mp4" />
                <source src="/homePage/1s_1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <button
                type="button"
                onClick={toggleVideo}
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
                className="absolute left-1/2 top-1/2 z-10 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm transition hover:scale-105 lg:h-16 lg:w-16 cursor-pointer"
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6 text-black fill-current" />
                ) : (
                  <span className="ml-1 h-0 w-0 border-y-[8px] border-l-[12px] border-y-transparent border-l-black"></span>
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* SECTION 6: PRICING */}
      <PricingSection onOpenProjectRequest={onOpenProjectRequest} onOpenCalendly={onOpenCalendly} />

      {/* SECTION 7: TECHNOLOGIES */}
      <TechStackMarquee />

      {/* SECTION 8: WHY COMPANIES BUILD WITH DEVORICA */}
      <motion.section
        className="bg-secondary pt-20 lg:pb-20 pb-10 lg:px-0 px-4"
        initial="hidden"
        animate={whyDevoricaReveal.controls}
        variants={revealVariants}
        {...whyDevoricaReveal.viewportProps}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col justify-center items-center">
            <button className="px-4 py-3 cursor-pointer w-fit bg-secondary border-2 border-[#E7E7E7] rounded-md text-sm lg:text-[16px] mb-4 text-design-desc font-vietnam">
              Why Devorica
              <span className="inline-block w-2 h-2 bg-[#97e5e7] rounded-full ml-2"></span>
            </button>
            <h2 className="lg:text-5xl text-[32px] text-center text-mission font-switzerMedium leading-[38px] lg:leading-[57px]">
              Why companies <br className="hidden lg:block" /> build with Devorica
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 lg:gap-4 mt-8 lg:mt-12">
            {whyCards.map((card, cIdx) => (
              <div
                key={cIdx}
                className="bg-input-from flex flex-col justify-between border border-[#E7E7E7] px-3 lg:px-6 py-4 lg:py-8 rounded-lg lg:w-[632px] lg:h-[320px] h-[240px]"
              >
                <div className="bg-[#0A0A0A] p-2 w-fit rounded-md">
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="w-6 h-6 object-contain brightness-200"
                  />
                </div>
                <div>
                  <h3 className="lg:text-2xl lg:leading-[30px] text-xl leading-[28px] text-mission font-switzerMedium mb-2 lg:mb-3">
                    {card.title}
                  </h3>
                  <p className="text-design-desc font-vietnam text-sm lg:text-base lg:leading-[22px]">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* SECTION 9: COMPARISON MATRIX (DEVORICA VS IN-HOUSE VS AGENCIES) */}
      <motion.div
        id="comparison-matrix-section"
        className="bg-principles pt-12 lg:pt-[120px] px-6 pb-12 lg:pb-20"
        initial="hidden"
        animate={comparisonReveal.controls}
        variants={revealVariants}
        {...comparisonReveal.viewportProps}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center lg:mb-12 mb-6">
            <button className="mx-auto mb-3 w-fit rounded-md border border-[#3B3B3B] px-4 py-2.5 font-vietnam text-base text-[#D1D1D1]">
              Comparison
              <span className="ml-2 inline-block h-2 w-2 rounded-full bg-[#3649F5]"></span>
            </button>
            <h2 className="text-[30px] sm:text-4xl md:text-5xl font-switzer font-medium text-white mb-2 flex flex-col md:flex-row items-center justify-center gap-2 text-center">
              <div className="flex items-center gap-2.5">
                <img
                  src="/brand/devorica-white-logo-tight.png"
                  alt="Devorica"
                  className="h-8 sm:h-10 md:h-12 w-auto object-contain shrink-0"
                />
                <span className="font-switzer font-medium text-white">Vs</span>
              </div>
              <span>In-House vs Agencies</span>
            </h2>
            <p className="text-research-desc lg:mt-4 mt-2 lg:text-[18px] text-sm font-vietnam mx-auto text-center">
              Each option has its place. Here's how they typically compare when <br className="hidden lg:block" /> you need to build or scale a software product.
            </p>
          </div>

          {/* 4-column Comparison Matrix (Smooth Horizontal Scroll on Mobile, Full-Width on Desktop - Exact Zentexx Pattern) */}
          <div className="mt-8 lg:mt-12 overflow-x-auto scroll-smooth pb-3">
            <div className="min-w-[876px] grid grid-cols-4 gap-2 bg-[#121211] p-3 rounded-xl border border-[#2A2A2A]">
            {/* Column 1: Feature Row Labels */}
            <div className="bg-[#151514] rounded-xl border border-[#2A2A2A] overflow-hidden">
              <div className="flex h-[96px] items-center border-b border-[#2A2A2A] px-6 text-2xl font-medium text-white">
                Comparison
              </div>
              <div className="flex min-h-[72px] items-center border-b border-[#2A2A2A] px-6 py-3 text-sm text-white">Cost</div>
              <div className="flex min-h-[72px] items-center border-b border-[#2A2A2A] px-6 py-3 text-sm text-white">Team Quality</div>
              <div className="flex min-h-[72px] items-center border-b border-[#2A2A2A] px-6 py-3 text-sm text-white">Start Time</div>
              <div className="flex min-h-[72px] items-center border-b border-[#2A2A2A] px-6 py-3 text-sm text-white">Turnaround</div>
              <div className="flex min-h-[72px] items-center border-b border-[#2A2A2A] px-6 py-3 text-sm text-white">Skill Coverage</div>
              <div className="flex min-h-[72px] items-center border-b border-[#2A2A2A] px-6 py-3 text-sm text-white">Scalability</div>
              <div className="flex min-h-[72px] items-center border-b border-[#2A2A2A] px-6 py-3 text-sm text-white last:border-b-0">Communication</div>
            </div>

            {/* Column 2: Devorica (Recommended) */}
            <div className="relative bg-[#151514] rounded-xl border overflow-hidden border-[#3649F5] shadow-[0_0_30px_rgba(54,73,245,0.16)_inset,0_0_0_1px_rgba(54,73,245,0.22)]">
              <div className="absolute left-0 right-0 top-0 z-10 flex h-7 items-center justify-center bg-[#3649F5] px-3 text-center font-vietnam text-xs font-medium text-white">
                Recommended
              </div>
              <div className="flex h-[96px] items-center justify-center border-b border-[#2A2A2A] px-4 text-center bg-[linear-gradient(180deg,rgba(54,73,245,0.22)_0%,rgba(21,21,20,0)_100%)] pt-7">
                <img
                  src="/brand/devorica-white-logo-tight.png"
                  alt="Devorica"
                  className="h-9 md:h-10 lg:h-11 w-auto shrink-0 object-contain"
                />
              </div>
              <div className="flex min-h-[72px] items-center justify-center gap-2 border-b border-[#2A2A2A] px-3 py-3 text-center text-sm text-white last:border-b-0">
                <span className="shrink-0 text-[#2CE430] font-bold text-base">$</span>
                <span className="leading-5">Affordable</span>
              </div>
              <div className="flex min-h-[72px] items-center justify-center gap-2 border-b border-[#2A2A2A] px-3 py-3 text-center text-sm text-white last:border-b-0">
                <Check className="w-4 h-4 shrink-0 text-[#2CE430]" />
                <span className="leading-5">Senior-level designers &amp; engineers</span>
              </div>
              <div className="flex min-h-[72px] items-center justify-center gap-2 border-b border-[#2A2A2A] px-3 py-3 text-center text-sm text-white last:border-b-0">
                <Check className="w-4 h-4 shrink-0 text-[#2CE430]" />
                <span className="leading-5">This Week</span>
              </div>
              <div className="flex min-h-[72px] items-center justify-center gap-2 border-b border-[#2A2A2A] px-3 py-3 text-center text-sm text-white last:border-b-0">
                <Check className="w-4 h-4 shrink-0 text-[#2CE430]" />
                <span className="leading-5">Iterate until it’s right</span>
              </div>
              <div className="flex min-h-[72px] items-center justify-center gap-2 border-b border-[#2A2A2A] px-3 py-3 text-center text-sm text-white last:border-b-0">
                <Check className="w-4 h-4 shrink-0 text-[#2CE430]" />
                <span className="leading-5">UI/UX + AI Dev + Cloud + More</span>
              </div>
              <div className="flex min-h-[72px] items-center justify-center gap-2 border-b border-[#2A2A2A] px-3 py-3 text-center text-sm text-white last:border-b-0">
                <Check className="w-4 h-4 shrink-0 text-[#2CE430]" />
                <span className="leading-5">Scale Anytime</span>
              </div>
              <div className="flex min-h-[72px] items-center justify-center gap-2 border-b border-[#2A2A2A] px-3 py-3 text-center text-sm text-white last:border-b-0">
                <span className="leading-5">Direct Access</span>
              </div>
            </div>

            {/* Column 3: In-House */}
            <div className="relative bg-[#151514] rounded-xl border overflow-hidden border-[#2A2A2A]">
              <div className="flex h-[96px] items-center justify-center gap-2 border-b border-[#2A2A2A] px-4 text-center text-2xl font-semibold text-white">
                <HomeIcon className="w-6 h-6 shrink-0 text-white" />
                <span className="leading-none">In-House</span>
              </div>
              <div className="flex min-h-[72px] items-center justify-center gap-2 border-b border-[#2A2A2A] px-3 py-3 text-center text-sm text-white last:border-b-0">
                <span className="shrink-0 text-[#2CE430] font-bold text-base">$$$$</span>
                <span className="leading-5">High Salaries</span>
              </div>
              <div className="flex min-h-[72px] items-center justify-center gap-2 border-b border-[#2A2A2A] px-3 py-3 text-center text-sm text-white last:border-b-0">
                <Check className="w-4 h-4 shrink-0 text-[#2CE430]" />
                <span className="leading-5">Hiring Success</span>
              </div>
              <div className="flex min-h-[72px] items-center justify-center gap-2 border-b border-[#2A2A2A] px-3 py-3 text-center text-sm text-white last:border-b-0">
                <X className="w-4 h-4 shrink-0 text-[#FF2A2A]" />
                <span className="leading-5">Months to hire</span>
              </div>
              <div className="flex min-h-[72px] items-center justify-center gap-2 border-b border-[#2A2A2A] px-3 py-3 text-center text-sm text-white last:border-b-0">
                <X className="w-4 h-4 shrink-0 text-[#FF2A2A]" />
                <span className="leading-5">Slower onboarding</span>
              </div>
              <div className="flex min-h-[72px] items-center justify-center gap-2 border-b border-[#2A2A2A] px-3 py-3 text-center text-sm text-white last:border-b-0">
                <X className="w-4 h-4 shrink-0 text-[#FF2A2A]" />
                <span className="leading-5">Limited to hired skills</span>
              </div>
              <div className="flex min-h-[72px] items-center justify-center gap-2 border-b border-[#2A2A2A] px-3 py-3 text-center text-sm text-white last:border-b-0">
                <X className="w-4 h-4 shrink-0 text-[#FF2A2A]" />
                <span className="leading-5">Difficult to scale down</span>
              </div>
              <div className="flex min-h-[72px] items-center justify-center gap-2 border-b border-[#2A2A2A] px-3 py-3 text-center text-sm text-white last:border-b-0">
                <span className="leading-5">Internal Bottleneck</span>
              </div>
            </div>

            {/* Column 4: Agencies */}
            <div className="relative bg-[#151514] rounded-xl border overflow-hidden border-[#2A2A2A]">
              <div className="flex h-[96px] items-center justify-center gap-2 border-b border-[#2A2A2A] px-4 text-center text-2xl font-semibold text-white">
                <Building2 className="w-6 h-6 shrink-0 text-white" />
                <span className="leading-none">Agencies</span>
              </div>
              <div className="flex min-h-[72px] items-center justify-center gap-2 border-b border-[#2A2A2A] px-3 py-3 text-center text-sm text-white last:border-b-0">
                <span className="shrink-0 text-[#2CE430] font-bold text-base">$$$</span>
                <span className="leading-5">Expensive Fees</span>
              </div>
              <div className="flex min-h-[72px] items-center justify-center gap-2 border-b border-[#2A2A2A] px-3 py-3 text-center text-sm text-white last:border-b-0">
                <span className="leading-5">Quality Varies</span>
              </div>
              <div className="flex min-h-[72px] items-center justify-center gap-2 border-b border-[#2A2A2A] px-3 py-3 text-center text-sm text-white last:border-b-0">
                <Check className="w-4 h-4 shrink-0 text-[#2CE430]" />
                <span className="leading-5">2-4 Weeks</span>
              </div>
              <div className="flex min-h-[72px] items-center justify-center gap-2 border-b border-[#2A2A2A] px-3 py-3 text-center text-sm text-white last:border-b-0">
                <X className="w-4 h-4 shrink-0 text-[#FF2A2A]" />
                <span className="leading-5">Strict Scope Changes</span>
              </div>
              <div className="flex min-h-[72px] items-center justify-center gap-2 border-b border-[#2A2A2A] px-3 py-3 text-center text-sm text-white last:border-b-0">
                <X className="w-4 h-4 shrink-0 text-[#FF2A2A]" />
                <span className="leading-5">Generalists, not specialized</span>
              </div>
              <div className="flex min-h-[72px] items-center justify-center gap-2 border-b border-[#2A2A2A] px-3 py-3 text-center text-sm text-white last:border-b-0">
                <X className="w-4 h-4 shrink-0 text-[#FF2A2A]" />
                <span className="leading-5">High change order fees</span>
              </div>
              <div className="flex min-h-[72px] items-center justify-center gap-2 border-b border-[#2A2A2A] px-3 py-3 text-center text-sm text-white last:border-b-0">
                <span className="leading-5">Account Manager Gate</span>
              </div>
            </div>
          </div>
        </div>

          {/* Winner punchline */}
          <div className="justify-center items-center flex flex-col mt-10 lg:mt-12 text-center">
            <h2 className="text-secondary lg:text-[40px] text-2xl font-switzer mx-auto">
              Winner?
            </h2>
            <p className="text-research-desc lg:text-xl text-sm font-switzer mt-1">
              Easy. Devorica. Every. Single. Time.
            </p>
          </div>
        </div>
      </motion.div>

      {/* SECTION 10: INDUSTRIES WE SERVE */}
      <motion.section
        className="bg-secondary"
        aria-labelledby="where-made-heading"
        initial="hidden"
        animate={industryReveal.controls}
        variants={revealVariants}
        {...industryReveal.viewportProps}
      >
        <div className="mx-auto max-w-7xl px-4 pb-12 pt-18 lg:px-6 lg:pb-20 lg:pt-[120px]">
          <div>
            <p className="mx-auto mb-3 w-fit rounded-md border border-[#E7E7E7] px-4 py-2.5 font-vietnam text-sm lg:text-base text-design-desc">
              Industry
              <span className="ml-2 inline-block h-2 w-2 rounded-full bg-[#3649F5]"></span>
            </p>
            <h2 id="where-made-heading" className="text-center font-switzerMedium text-[30px] leading-[38px] font-medium text-mission md:text-[38px] md:leading-[48px] lg:text-[48px] lg:leading-[58px]">
              AI product development for regulated, <br className="hidden lg:block" /> competitive industries.
            </h2>
            <p className="mt-3 text-center font-vietnam text-sm leading-[22px] text-design-desc lg:mt-4 lg:text-[16px] lg:leading-[26px]">
              We ship in sectors where mistakes are expensive — FinTech, HealthTech, E-Commerce, EdTech, <br className="hidden lg:block" /> Real Estate, and B2B SaaS. Domain experience means fewer wrong turns and compliance handled from day one.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
            {industries.map((ind, iIdx) => (
              <div key={iIdx} className="group flex flex-col items-center">
                <div className="relative h-[150px] w-[150px] lg:h-[150px] lg:w-[200px]">
                  {/* Bottom Card */}
                  <img
                    src={ind.img1}
                    alt={`${ind.name} bottom preview`}
                    className="absolute bottom-2 left-2 object-contain transition-all duration-500 ease-out group-hover:-translate-x-2 group-hover:translate-y-2 group-hover:rotate-[-4deg] sm:left-3 lg:bottom-10 lg:left-1 w-[82px] h-[82px]"
                  />
                  {/* Top Card */}
                  <img
                    src={ind.img2}
                    alt={`${ind.name} top preview`}
                    className="absolute right-2 top-2 object-contain transition-all duration-500 ease-out group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:rotate-[4deg] sm:right-3 sm:top-3 lg:right-15 lg:top-10 w-[82px] h-[82px]"
                  />
                </div>
                <h3 className="text-center text-sm font-medium text-black lg:text-lg font-vietnam mt-2">
                  {ind.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* SECTION 11: FAQ */}
      <FAQSection />

      {/* SECTION 12: CTA BANNER */}
      <CTASection onOpenCalendly={onOpenCalendly} onOpenProjectRequest={onOpenProjectRequest} />

      {/* SECTION 13: CONTACT SECTION */}
      <ContactSection onOpenCalendly={onOpenCalendly} />
    </div>
  );
}
