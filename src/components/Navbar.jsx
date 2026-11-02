import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, X } from 'lucide-react';

export default function Navbar({ onOpenProjectRequest }) {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 60) {
        setIsScrolled(true);
        if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 8) {
          setIsVisible(false);
          setServicesOpen(false);
        } else if (lastScrollY - currentScrollY > 8) {
          setIsVisible(true);
        }
      } else {
        setIsScrolled(false);
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
    setIsVisible(true);
    setIsScrolled(false);
    setLastScrollY(0);
  }, [location.pathname]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    if (mobileMenuOpen) document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileMenuOpen]);

  const serviceItems = [
    {
      title: 'AI MVP Launch',
      desc: 'From idea to launch-ready product — built fast, validated early, and ready to scale.',
      href: '/services/ai-mvp-development'
    },
    {
      title: 'Full-Cycle Product Development',
      desc: 'We handle strategy, design, and development to deliver reliable, high-performance products.',
      href: '/services/product-development'
    },
    {
      title: 'AI System & Automation',
      desc: 'Intelligent AI agents that automate workflows, decisions, and operations at scale.',
      href: '/services/ai-automation'
    },
    {
      title: 'Dedicated Product Teams',
      desc: 'Skilled engineers and designers embedded seamlessly into your team.',
      href: '/services/dedicated-teams'
    },
    {
      title: 'Maintenance & Care',
      desc: 'Ongoing care that keeps your product reliable and your AI systems sharp.',
      href: '/services/maintenance-care'
    },
    {
      title: 'Product Experience Design',
      desc: 'Intuitive, user-centered design that turns complex ideas into seamless experiences.',
      href: '/services/product-design'
    }
  ];

  return (
    <>
      {/* Desktop Header */}
      <header
        className={`sticky top-0 z-40 hidden w-full py-5 transition-all duration-300 md:block ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.06)]' : 'bg-transparent'
        } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
      >
        {servicesOpen && (
          <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-30 bg-black/[0.08] backdrop-blur-[6px]"
          />
        )}
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-10">
            {/* Logo */}
            <Link to="/" aria-label="Go to Devorica homepage" className="flex items-center">
              <img
                src="/favicon.png"
                alt="Devorica logo"
                className="h-7 w-[23px] object-contain lg:h-[27px] lg:w-[23px]"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav aria-label="Main navigation">
              <ul className="flex items-center gap-8 font-vietnam text-base text-header">
                <li>
                  <Link
                    to="/"
                    className={`font-vietnam transition-colors duration-200 ${
                      location.pathname === '/' ? 'text-blue-600 font-medium' : 'text-header hover:text-blue-600'
                    }`}
                  >
                    Home
                  </Link>
                </li>

                {/* Services Dropdown */}
                <li className="relative" ref={dropdownRef}>
                  <button
                    type="button"
                    onMouseEnter={() => setServicesOpen(true)}
                    className={`flex cursor-pointer items-center gap-2 font-vietnam transition-colors duration-200 ${
                      servicesOpen || location.pathname.startsWith('/services')
                        ? 'text-blue-600 font-medium'
                        : 'text-header hover:text-blue-600'
                    }`}
                    aria-expanded={servicesOpen}
                    aria-label="Services menu"
                  >
                    Services
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        servicesOpen ? 'rotate-180 text-blue-600' : ''
                      }`}
                    />
                  </button>

                  {/* Mega Menu Dropdown */}
                  <div
                    onMouseLeave={() => setServicesOpen(false)}
                    className={`absolute left-0 top-full z-50 w-[860px] max-w-[calc(100vw-2rem)] pt-4 transform-gpu transition-[opacity,transform,filter,visibility] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      servicesOpen
                        ? 'pointer-events-auto translate-y-0 opacity-100 blur-0 visible'
                        : 'pointer-events-none translate-y-2 opacity-0 blur-[2px] invisible'
                    }`}
                  >
                    <div className="mt-2 rounded-3xl border border-services-drop bg-secondary p-4 shadow-[0_22px_60px_rgba(0,0,0,0.16)]">
                      <div className="flex gap-4">
                        <div className="flex-1">
                          <Link to="/services/ai-mvp-development" onClick={() => setServicesOpen(false)} className="block">
                            <div className="dropdown-services cursor-pointer px-4 py-3.5 transition-all duration-300 hover:bg-[#F6F6F6] hover:rounded-[6px]">
                              <h2 className="font-switzer text-base font-medium leading-5 transition-colors duration-200 text-header">
                                AI MVP Launch
                              </h2>
                              <p className="mt-2 font-vietnam text-sm leading-5 text-step-desc">
                                From idea to launch-ready product — built fast, validated early, and ready to scale.
                              </p>
                            </div>
                          </Link>
                          <Link to="/services/product-development" onClick={() => setServicesOpen(false)} className="block">
                            <div className="dropdown-services cursor-pointer px-4 py-3.5 transition-all duration-300 hover:bg-[#F6F6F6] hover:rounded-[6px]">
                              <h2 className="font-switzer text-base font-medium leading-5 transition-colors duration-200 text-header">
                                Full-Cycle Product Development
                              </h2>
                              <p className="mt-2 font-vietnam text-sm leading-5 text-step-desc">
                                We handle strategy, design, and development to deliver reliable, high-performance products.
                              </p>
                            </div>
                          </Link>
                          <Link to="/services/ai-automation" onClick={() => setServicesOpen(false)} className="block">
                            <div className="dropdown-services cursor-pointer px-4 py-3.5 transition-all duration-300 hover:bg-[#F6F6F6] hover:rounded-[6px]">
                              <h2 className="font-switzer text-base font-medium leading-5 transition-colors duration-200 text-header">
                                AI System &amp; Automation
                              </h2>
                              <p className="mt-2 font-vietnam text-sm leading-5 text-step-desc">
                                Intelligent AI agents that automate workflows, decisions, and operations at scale.
                              </p>
                            </div>
                          </Link>
                        </div>

                        <div className="flex-1">
                          <Link to="/services/dedicated-teams" onClick={() => setServicesOpen(false)} className="block">
                            <div className="dropdown-services cursor-pointer px-4 py-3.5 transition-all duration-300 hover:bg-[#F6F6F6] hover:rounded-[6px]">
                              <h2 className="font-switzer text-base font-medium leading-5 transition-colors duration-200 text-header">
                                Dedicated Product Teams
                              </h2>
                              <p className="mt-2 font-vietnam text-sm leading-5 text-step-desc">
                                Skilled engineers and designers embedded seamlessly into your team.
                              </p>
                            </div>
                          </Link>
                          <Link to="/services/maintenance-care" onClick={() => setServicesOpen(false)} className="block">
                            <div className="dropdown-services cursor-pointer px-4 py-3.5 transition-all duration-300 hover:bg-[#F6F6F6] hover:rounded-[6px]">
                              <h2 className="font-switzer text-base font-medium leading-5 transition-colors duration-200 text-header">
                                Maintenance &amp; Care
                              </h2>
                              <p className="mt-2 font-vietnam text-sm leading-5 text-step-desc">
                                Ongoing care that keeps your product reliable and your AI systems sharp.
                              </p>
                            </div>
                          </Link>
                          <Link to="/services/product-design" onClick={() => setServicesOpen(false)} className="block">
                            <div className="dropdown-services cursor-pointer px-4 py-3.5 transition-all duration-300 hover:bg-[#F6F6F6] hover:rounded-[6px]">
                              <h2 className="font-switzer text-base font-medium leading-5 transition-colors duration-200 text-header">
                                Product Experience Design
                              </h2>
                              <p className="mt-2 font-vietnam text-sm leading-5 text-step-desc">
                                Intuitive, user-centered design that turns complex ideas into seamless experiences.
                              </p>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <Link
                    to="/work"
                    className={`font-vietnam transition-colors duration-200 ${
                      location.pathname === '/work' ? 'text-blue-600 font-medium' : 'text-header hover:text-blue-600'
                    }`}
                  >
                    Work
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className={`font-vietnam transition-colors duration-200 ${
                      location.pathname === '/about' ? 'text-blue-600 font-medium' : 'text-header hover:text-blue-600'
                    }`}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className={`font-vietnam transition-colors duration-200 ${
                      location.pathname === '/contact' ? 'text-blue-600 font-medium' : 'text-header hover:text-blue-600'
                    }`}
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className={`font-vietnam transition-colors duration-200 ${
                      location.pathname === '/blog' ? 'text-blue-600 font-medium' : 'text-header hover:text-blue-600'
                    }`}
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 overflow-hidden rounded-[4px] px-7 py-3.5 font-vietnam text-base font-medium text-white transition hover:scale-[1.02] cursor-pointer"
              style={{
                borderRadius: '4px',
                background: 'radial-gradient(83.04% 105.77% at 50.23% -5.77%, #4D5061 0%, rgba(0, 0, 0, 0) 100%), #0A0A0A',
                boxShadow: '3px 2px 12px 0 rgba(255, 255, 255, 0.25) inset, 0 4px 8px 0 rgba(0, 0, 0, 0.22), 0 15px 15px 0 rgba(0, 0, 0, 0.20), 0 33px 20px 0 rgba(0, 0, 0, 0.11), 0 59px 23px 0 rgba(0, 0, 0, 0.03)'
              }}
            >
              <img
                alt="Project request icon"
                className="h-6 w-6"
                src="/homePage/cloud upload.png"
              />
              Project request
            </Link>

            <a
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact Devorica on WhatsApp"
              className="flex items-center justify-center overflow-hidden rounded-[4px] px-4 py-2.5 transition hover:scale-[1.02] cursor-pointer"
              style={{
                borderRadius: '4px',
                background: 'radial-gradient(83.04% 105.77% at 50.23% -5.77%, #4D5061 0%, rgba(0, 0, 0, 0) 100%), #0A0A0A',
                boxShadow: '3px 2px 12px 0 rgba(255, 255, 255, 0.25) inset, 0 4px 8px 0 rgba(0, 0, 0, 0.22), 0 15px 15px 0 rgba(0, 0, 0, 0.20), 0 33px 20px 0 rgba(0, 0, 0, 0.11), 0 59px 23px 0 rgba(0, 0, 0, 0.03)'
              }}
              href="https://wa.me/8801619504428?text=Hello%20Devorica%2C%20I%20want%20to%20discuss%20a%20project."
            >
              <img
                alt="WhatsApp icon"
                className="h-8 w-8"
                src="/homePage/whatsapp.png"
              />
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Sticky Header */}
      <header className="sticky top-0 z-40 w-full overflow-hidden px-4 py-4 text-header transition-all duration-300 md:hidden bg-transparent translate-y-0">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link to="/" aria-label="Go to Devorica homepage">
            <img
              alt="Devorica logo"
              className="h-7 w-auto object-contain"
              src="/favicon.png"
            />
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="cursor-pointer p-2 text-header transition"
            aria-label="Open mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="28" width="28" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"></path>
            </svg>
          </button>
        </div>
      </header>

      {/* Backdrop */}
      {mobileMenuOpen && (
        <button
          type="button"
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 z-40 cursor-pointer bg-black/40 backdrop-blur-sm transition-all duration-300 md:hidden pointer-events-auto opacity-100"
          aria-label="Close backdrop"
        />
      )}

      {/* Mobile Drawer Menu */}
      <aside
        className={`fixed inset-0 z-50 h-[100dvh] w-full transform transition-transform duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        }`}
        aria-label="Mobile menu"
        aria-hidden={!mobileMenuOpen}
      >
        <div className="flex h-full flex-col bg-white">
          <div className="flex shrink-0 items-center justify-between p-6">
            <img
              alt="Devorica logo"
              className="h-7 w-auto object-contain"
              src="/favicon.png"
            />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="cursor-pointer rounded-lg p-2 text-[#555]"
              aria-label="Close mobile menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto pb-6" aria-label="Mobile navigation">
            <ul className="flex flex-col gap-2 px-4">
              <li>
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block rounded-[4px] bg-[#F5F5F7] px-4 py-4 text-[18px] font-medium transition-colors duration-200 ${
                    location.pathname === '/' ? 'text-blue-600' : 'text-[#2B2B2B]'
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block rounded-[4px] bg-[#F5F5F7] px-4 py-4 text-[18px] font-medium transition-colors duration-200 ${
                    location.pathname === '/about' ? 'text-blue-600' : 'text-[#2B2B2B]'
                  }`}
                >
                  About us
                </Link>
              </li>

              <li className="overflow-hidden">
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className={`flex w-full cursor-pointer items-center justify-between rounded-[4px] bg-[#F5F5F7] px-4 py-4 text-[18px] font-medium transition-colors duration-200 ${mobileServicesOpen ? 'text-blue-600' : 'text-[#2B2B2B]'}`}
                  aria-expanded={mobileServicesOpen}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-[18px] h-[18px] transition-transform duration-300 ${
                      mobileServicesOpen ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    mobileServicesOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className={`overflow-hidden space-y-2 ${mobileServicesOpen ? 'py-2' : 'py-0'}`}>
                    {serviceItems.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block rounded-[4px] bg-transparent px-4 py-3 transition hover:bg-[#EFEFEF]"
                      >
                        <h3 className="text-[15px] font-semibold leading-5 transition-colors duration-200 text-[#2B2B2B]">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-[13px] leading-5 text-[#7A7A7A]">
                          {item.desc}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </li>

              <li>
                <Link
                  to="/work"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block rounded-[4px] bg-[#F5F5F7] px-4 py-4 text-[18px] font-medium transition-colors duration-200 ${
                    location.pathname === '/work' ? 'text-blue-600' : 'text-[#2B2B2B]'
                  }`}
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block rounded-[4px] bg-[#F5F5F7] px-4 py-4 text-[18px] font-medium transition-colors duration-200 ${
                    location.pathname === '/contact' ? 'text-blue-600' : 'text-[#2B2B2B]'
                  }`}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block rounded-[4px] bg-[#F5F5F7] px-4 py-4 text-[18px] font-medium transition-colors duration-200 ${
                    location.pathname === '/blog' ? 'text-blue-600' : 'text-[#2B2B2B]'
                  }`}
                >
                  Blog
                </Link>
              </li>
            </ul>

            <div className="mt-4 grid grid-cols-[minmax(0,1fr)_52px] items-stretch gap-2 px-4">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex h-11 min-w-0 items-center justify-center gap-2 overflow-hidden rounded-[4px] px-3 text-white cursor-pointer"
                style={{
                  borderRadius: '4px',
                  background: 'radial-gradient(83.04% 105.77% at 50.23% -5.77%, #4D5061 0%, rgba(0, 0, 0, 0) 100%), #0A0A0A',
                  boxShadow: '3px 2px 12px 0 rgba(255, 255, 255, 0.25) inset, 0 4px 8px 0 rgba(0, 0, 0, 0.22), 0 15px 15px 0 rgba(0, 0, 0, 0.20), 0 33px 20px 0 rgba(0, 0, 0, 0.11), 0 59px 23px 0 rgba(0, 0, 0, 0.03)'
                }}
              >
                <img alt="Project request icon" className="h-5 w-5 shrink-0" src="/homePage/cloud upload.png" />
                <span className="min-w-0 truncate text-sm font-medium">Project Request</span>
              </Link>
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact Devorica on WhatsApp"
                className="flex h-11 w-[52px] items-center justify-center overflow-hidden rounded-[4px] cursor-pointer"
                style={{
                  borderRadius: '4px',
                  background: 'radial-gradient(83.04% 105.77% at 50.23% -5.77%, #4D5061 0%, rgba(0, 0, 0, 0) 100%), #0A0A0A',
                  boxShadow: '3px 2px 12px 0 rgba(255, 255, 255, 0.25) inset, 0 4px 8px 0 rgba(0, 0, 0, 0.22), 0 15px 15px 0 rgba(0, 0, 0, 0.20), 0 33px 20px 0 rgba(0, 0, 0, 0.11), 0 59px 23px 0 rgba(0, 0, 0, 0.03)'
                }}
                href="https://wa.me/8801619504428?text=Hello%20Devorica%2C%20I%20want%20to%20discuss%20a%20project."
              >
                <img alt="WhatsApp icon" className="h-5 w-5" src="/homePage/whatsapp.png" />
              </a>
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
}
