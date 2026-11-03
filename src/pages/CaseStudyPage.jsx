import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, ExternalLink, CheckCircle2, Quote } from 'lucide-react';
import { projectsData } from '../data/projectsData';

function CopyBlock({ title, children, className = '' }) { return <div className={`case-copy ${className}`}><h2>{title}</h2><p>{children}</p></div>; }

export default function CaseStudyPage() {
  const { slug } = useParams();
  const index = projectsData.findIndex((p) => p.slug === slug);
  const project = index !== -1 ? projectsData[index] : projectsData[0];
  if (!project) return <Navigate to="/work" replace />;
  const currentIndex = index !== -1 ? index : 0;
  const next = projectsData[(currentIndex + 1) % projectsData.length];
  const visual = {
    background: project.bannerBg || project.heroImage,
    logo: project.logo || '/devorica-logo.png',
    mockup: project.mockup || project.heroImage
  };
  const gallery = [visual.mockup, visual.background, visual.mockup];
  const cardText = 'We shaped the experience around clear information, fast feedback and a visual system that remains consistent from the first interaction to the final workflow.';

  return <div className="w-full case-study-page">
    <section className="case-hero relative mx-0 overflow-hidden rounded-none bg-[#050505] sm:mx-4 sm:rounded-[28px] lg:mx-3 lg:rounded-[40px]">
      <img src={visual.background} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <img src={visual.mockup} alt={`${project.title} product preview`} className="absolute bottom-0 left-0 z-[1] h-[55%] w-full object-contain object-bottom sm:left-auto sm:right-[5%] sm:h-[690px] sm:w-[44%] sm:-bottom-[10px]" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-t from-black/35 via-transparent to-transparent" />
      <div className="absolute inset-x-0 top-0 z-[3] px-7 pt-[80px] sm:bottom-0 sm:top-auto sm:px-4 sm:pb-[183px] sm:pt-0"><div className="mb-[28px] flex h-[60px] items-center gap-4 sm:mb-[44px]"><img src={visual.logo} alt={`${project.title} logo`} className="h-[60px] w-[253px] object-contain object-left" /></div><h1 className="max-w-[720px] font-switzerMedium text-[32px] leading-[38px] tracking-tight text-white sm:text-6xl sm:leading-[1.1] lg:text-[64px] lg:leading-none">{project.title}: {project.tagline.split(' & ')[0]}</h1><a href={project.liveUrl || '#'} className="mt-10 inline-flex items-center gap-2 rounded-[6px] bg-white px-[33px] py-[17px] font-vietnam text-base text-black transition hover:bg-neutral-100 sm:mt-7 sm:rounded-full sm:border sm:border-white/40 sm:bg-transparent sm:px-5 sm:py-2.5 sm:text-sm sm:text-white sm:hover:bg-white sm:hover:text-black">View Live <ExternalLink className="hidden h-4 w-4 sm:block" /></a></div>
    </section>
    <section className="case-intro mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.6fr_1fr]"><CopyBlock title={`${project.title}: Making the product simple`}>{project.overview}</CopyBlock><div className="grid grid-cols-2 gap-x-6 gap-y-8 self-start border-t border-neutral-200 pt-6 font-vietnam text-sm"><div><span className="block text-xs text-neutral-400">Industry</span><span className="mt-2 block text-neutral-900">{project.category}</span></div><div><span className="block text-xs text-neutral-400">Duration</span><span className="mt-2 block text-neutral-900">{project.timeline}</span></div><div className="col-span-2"><span className="block text-xs text-neutral-400">Service</span><span className="mt-2 block text-neutral-900">{project.services.join(' · ')}</span></div></div></section>
    <section className="case-gallery bg-[#0B0B0B]"> <div className="mx-auto grid h-full max-w-6xl grid-cols-1 gap-5 px-5 py-10 sm:grid-cols-2 lg:grid-cols-3 lg:items-center lg:px-10">{gallery.map((src, i) => <img key={i} src={src} alt="Product interface" className={`w-full rounded-2xl object-cover ${i === 1 ? 'lg:mt-28' : ''}`} />)}</div></section>
    <section className="case-built"><CopyBlock title="How we built this product">We turned a complex product idea into a simple, scalable and usable experience. Research, product strategy and iterative design gave the team a strong foundation for engineering.</CopyBlock></section>
    <section className="case-process"><div className="mx-auto grid max-w-6xl gap-6 px-5 py-16 sm:grid-cols-3 lg:px-10">{['Strategy & Design', 'Development & AI', 'Launch & Support'].map((title, i) => <div key={title} className="case-process-card"><span>0{i + 1}</span><h3>{title}</h3><p>{cardText}</p><CheckCircle2 /></div>)}</div><img src={visual.background} alt="Product banner" className="mx-auto h-[280px] w-[calc(100%-40px)] rounded-2xl object-cover sm:h-[390px] lg:w-[calc(100%-160px)]" /></section>
    <section className="case-challenge"><CopyBlock title="The challenge">{project.challenge} {cardText}</CopyBlock><div className="mx-auto mt-12 grid max-w-5xl gap-4 px-5 sm:grid-cols-3"><div className="case-stat">01<span>Clarity</span></div><div className="case-stat">02<span>Speed</span></div><div className="case-stat">03<span>Confidence</span></div></div></section>
    <section className="case-dashboard"><CopyBlock title="An all-in-one dashboard">Every important signal is grouped into a clean, responsive workspace. Users can see progress, take action and understand results without searching through multiple screens.</CopyBlock><img src={visual.mockup} alt="Dashboard preview" className="mx-auto mt-16 h-[500px] w-[calc(100%-40px)] rounded-2xl object-contain sm:h-[780px]" /></section>
    <section className="case-agent"><CopyBlock title="Type-to-Log AI Agent">The product makes natural language useful. A lightweight AI workflow turns quick inputs into structured actions while keeping the user in control.</CopyBlock></section>
    <section className="case-trackers"><CopyBlock title="Smart Trackers">Progress is easier to maintain when the interface keeps context visible. Flexible trackers, clear status and thoughtful empty states make the whole system feel calm and dependable.</CopyBlock><div className="mx-auto mt-14 grid max-w-5xl gap-5 px-5 sm:grid-cols-3">{['Daily progress', 'Focused insights', 'Helpful reminders'].map((x) => <div className="tracker-card" key={x}><h3>{x}</h3><p>{cardText}</p></div>)}</div></section>
    <section className="case-alerts"><CopyBlock title="Proactive Alerts">The right nudge arrives at the right moment, helping users stay on track without adding noise to the experience.</CopyBlock></section>
    <section className="case-result"><CopyBlock title="Result & Impact">{project.solution} The result is a product that feels simpler, faster and more confident at every touchpoint.</CopyBlock></section>
    <section className="case-more"><div className="mx-auto flex h-full max-w-5xl items-center justify-between px-5"><div><span className="text-xs uppercase tracking-wider text-neutral-500">More Case Study</span><h3 className="mt-2 font-switzerMedium text-3xl text-neutral-900">{next.title}</h3></div><Link to={`/work/${next.slug}`} className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm text-white">View Case Study <ArrowRight className="h-4 w-4" /></Link></div></section>
  </div>;
}
