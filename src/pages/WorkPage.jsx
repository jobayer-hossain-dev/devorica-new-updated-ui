import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import ContactSection from '../components/ContactSection';

function ProjectCard({ project, wide }) {
  return (
    <div className={`work-card ${wide ? 'work-card--wide' : 'work-card--narrow'} group relative h-[280px] overflow-hidden rounded-lg bg-neutral-900 lg:h-[516px] lg:rounded-2xl`}>
      <img
        src={project.heroImage}
        alt={project.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      />
      <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between rounded-[4px] bg-white/95 px-3 py-2 backdrop-blur-sm transition-transform duration-300 group-hover:-translate-y-0.5 lg:rounded-[8px] lg:px-4 lg:py-3">
        <span className="text-base font-switzerMedium text-black lg:text-xl">{project.title}</span>
        <Link
          to={`/work/${project.slug}`}
          aria-label={`Open ${project.title} case study`}
          className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#EDEDED] transition-colors group-hover:bg-[#3649F5] lg:h-12 lg:w-12"
        >
          <ArrowUpRight className="h-4 w-4 text-[#3649F5] transition-colors group-hover:text-white lg:h-6 lg:w-6" />
        </Link>
      </div>
    </div>
  );
}

export default function WorkPage({ onOpenCalendly }) {
  // Keep the same four visual compositions as the reference portfolio grid.
  // Project copy/routes remain Devorica-owned, while the image treatment is
  // intentionally identical to the source layouts (large editorial previews).
  const referenceImages = [
    'https://zentexx.com/_next/image?url=%2Fprojects%2FMySpendApp.png&w=3840&q=75',
    'https://zentexx.com/_next/image?url=%2Fprojects%2FFinanceDashBoard.png&w=3840&q=75',
    'https://zentexx.com/_next/image?url=%2Fprojects%2FZenHcareApp.png&w=3840&q=75',
    'https://zentexx.com/_next/image?url=%2Fprojects%2FQuranlinkDashBoard.png&w=3840&q=75',
  ];
  const projects = projectsData.slice(0, 4).map((project, index) => ({
    ...project,
    heroImage: referenceImages[index],
  }));
  const wideCards = new Set([0, 3]);

  return (
    <div className="w-full">
      <section className="mx-auto max-w-7xl h-[1328px] px-4 pb-16 pt-10 sm:px-6 lg:h-[1308px] lg:pb-24 lg:pt-20 lg:pl-0 lg:pr-[10px]">
        <h1 className="mb-8 text-center font-switzer text-[40px] font-medium leading-[48px] text-[#0A0A0A] lg:mb-12 lg:text-5xl">
          Our Projects
        </h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-5">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} wide={wideCards.has(index)} />
          ))}
        </div>
      </section>
      <ContactSection compact onOpenCalendly={onOpenCalendly} />
    </div>
  );
}
