import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectRequestModal from './components/ProjectRequestModal';
import CalendlyModal from './components/CalendlyModal';
import { ToastProvider } from './components/Toast';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WorkPage from './pages/WorkPage';
import CaseStudyPage from './pages/CaseStudyPage';
import ServicesOverviewPage from './pages/ServicesOverviewPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import FAQPage from './pages/FAQPage';
import CareerPage from './pages/CareerPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

// Dynamic Title & Scroll to top on route change with Lenis integration
function PageRouteTracker() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }

    const exactTitles = {
      '/': 'Devorica | AI Product Engineering & Modern SaaS Studio',
      '/about': 'About Devorica | Elite AI Engineering & Design Studio',
      '/work': 'Our Projects & Case Studies | Devorica',
      '/services': 'Services & Capabilities | Devorica AI Product Studio',
      '/blog': 'Engineering, Design & AI Product Strategy | Devorica Articles',
      '/career': 'Careers & Engineering Culture | Devorica',
      '/faq': 'Frequently Asked Questions | Devorica',
      '/contact': 'Book a Strategy Call | Devorica',
    };

    if (exactTitles[pathname]) {
      document.title = exactTitles[pathname];
    } else if (pathname.startsWith('/work/')) {
      const slug = pathname.replace('/work/', '');
      const formatted = slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
      document.title = `${formatted} Case Study | Devorica`;
    } else if (pathname.startsWith('/services/')) {
      const slug = pathname.replace('/services/', '');
      const formatted = slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
      document.title = `${formatted} | Devorica Services`;
    } else if (pathname.startsWith('/blog/')) {
      document.title = 'Article | Devorica Blog';
    } else {
      document.title = 'Devorica | AI Product Engineering & Modern SaaS Studio';
    }
  }, [pathname]);

  return null;
}

export default function App() {
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [calendlyModalOpen, setCalendlyModalOpen] = useState(false);
  const { pathname } = useLocation();
  const knownExactPaths = new Set(['/', '/about', '/work', '/services', '/faq', '/blog', '/career', '/contact']);
  const isKnownNestedPath = /^\/(work|services|blog)\//.test(pathname);
  const isNotFoundPath = !knownExactPaths.has(pathname) && !isKnownNestedPath;

  // Initialize Lenis Ultra-Smooth Floating Momentum (50x Deeper Inertia)
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'auto';
    document.body.style.scrollBehavior = 'auto';

    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.1, // 10% interpolation per frame for buttery momentum
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1,
      infinite: false,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
    });

    window.lenis = lenis;
    window.lenisVersion = '1.3.25';

    return () => {
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  // Stop background scroll when modals are open
  useEffect(() => {
    if (projectModalOpen || calendlyModalOpen) {
      window.lenis?.stop();
    } else {
      window.lenis?.start();
    }
  }, [projectModalOpen, calendlyModalOpen]);

  return (
    <ToastProvider>
      <div className="min-h-screen w-full max-w-full flex flex-col bg-white text-[#171717] selection:bg-[#3649F5] selection:text-white font-vietnam relative">
        <PageRouteTracker />

        {/* Global Navigation Header */}
        {!isNotFoundPath && <Navbar onOpenProjectRequest={() => setProjectModalOpen(true)} />}

        {/* Dynamic Route Content */}
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onOpenProjectRequest={() => setProjectModalOpen(true)}
                  onOpenCalendly={() => setCalendlyModalOpen(true)}
                />
              }
            />
            <Route
              path="/about"
              element={
                <AboutPage
                  onOpenProjectRequest={() => setProjectModalOpen(true)}
                  onOpenCalendly={() => setCalendlyModalOpen(true)}
                />
              }
            />
            <Route
              path="/work"
              element={
                <WorkPage
                  onOpenProjectRequest={() => setProjectModalOpen(true)}
                  onOpenCalendly={() => setCalendlyModalOpen(true)}
                />
              }
            />
            <Route
              path="/work/:slug"
              element={
                <CaseStudyPage
                  onOpenProjectRequest={() => setProjectModalOpen(true)}
                  onOpenCalendly={() => setCalendlyModalOpen(true)}
                />
              }
            />
            <Route
              path="/services"
              element={
                <ServicesOverviewPage
                  onOpenProjectRequest={() => setProjectModalOpen(true)}
                  onOpenCalendly={() => setCalendlyModalOpen(true)}
                />
              }
            />
            <Route
              path="/services/:slug"
              element={
                <ServiceDetailPage
                  onOpenProjectRequest={() => setProjectModalOpen(true)}
                  onOpenCalendly={() => setCalendlyModalOpen(true)}
                />
              }
            />
            <Route
              path="/faq"
              element={<FAQPage onOpenCalendly={() => setCalendlyModalOpen(true)} />}
            />
            <Route
              path="/blog"
              element={<BlogPage onOpenCalendly={() => setCalendlyModalOpen(true)} />}
            />
            <Route
              path="/blog/:slug"
              element={<BlogPostPage onOpenCalendly={() => setCalendlyModalOpen(true)} />}
            />
            <Route
              path="/career"
              element={<CareerPage onOpenCalendly={() => setCalendlyModalOpen(true)} />}
            />
            <Route
              path="/contact"
              element={<ContactPage onOpenCalendly={() => setCalendlyModalOpen(true)} />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer onOpenProjectRequest={() => setProjectModalOpen(true)} />

        {/* Global Modals */}
        <ProjectRequestModal
          isOpen={projectModalOpen}
          onClose={() => setProjectModalOpen(false)}
        />
        <CalendlyModal
          isOpen={calendlyModalOpen}
          onClose={() => setCalendlyModalOpen(false)}
        />
      </div>
    </ToastProvider>
  );
}

