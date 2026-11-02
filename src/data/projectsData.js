export const projectsData = [
  {
    id: 'bikkhipto',
    slug: 'bikkhipto',
    title: 'Bikkhipto',
    category: 'E-commerce & Brand System',
    tagline: 'High-Conversion Headless E-commerce & Scalable Brand Architecture',
    heroImage: '/portfolio/bikkhipto.jpg',
    overview: 'Bikkhipto is a visually immersive, headless e-commerce experience designed from the ground up for modern consumer trust and accelerated conversion velocity.',
    client: 'Bikkhipto Lifestyle',
    timeline: '6 Weeks',
    services: ['Full-Cycle Product Development', 'Product Experience Design', 'Headless E-commerce'],
    metrics: [
      { label: 'Conversion Lift', value: '+65%' },
      { label: 'Avg Session Time', value: '+2m 15s' },
      { label: 'Cart Abandonment', value: '-22%' },
      { label: 'System Uptime', value: '99.99%' }
    ],
    challenge: 'Bikkhipto was struggling with low conversion rates and high cart drop-off due to a legacy cluttered UI and slow mobile load times.',
    solution: 'We engineered a frictionless, headless Next.js architecture with psychological conversion principles, instant edge caching, and a simplified checkout experience.',
    features: [
      'Sub-second page transitions via Next.js SSR and edge caching',
      'Frictionless 2-step checkout with multiple payment gateways',
      'Automated inventory and courier logistics webhook sync',
      'Micro-animations and lookbook interactions designed for mobile'
    ],
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'PostgreSQL', 'Redis'],
    testimonial: {
      quote: "Devorica completely elevated our digital brand presence. Our sales grew by 65% in the first quarter after the redesign.",
      author: 'Tanvir Hossain',
      role: 'Managing Director, Bikkhipto'
    }
  },
  {
    id: 'bayloz',
    slug: 'bayloz',
    title: 'Bayloz',
    category: 'Fintech & Global Marketplace',
    tagline: 'High-Throughput Global Digital Marketplace Platform with Multi-Currency Checkout',
    heroImage: '/portfolio/bayloz.jpg',
    overview: 'Bayloz is an enterprise-grade digital marketplace built to handle massive transactional volume with zero downtime and sub-second checkout speeds.',
    client: 'Bayloz Global',
    timeline: '8 Weeks',
    services: ['Full-Cycle Product Development', 'Architecture Overhaul', 'Enterprise Security'],
    metrics: [
      { label: 'System Uptime', value: '99.99%' },
      { label: 'Traffic Capacity', value: '10x' },
      { label: 'User Retention', value: '+40%' },
      { label: 'Checkout Steps', value: '-40%' }
    ],
    challenge: 'During rapid global expansion, Bayloz suffered severe platform bottlenecks and slow transaction handling that capped their revenue potential.',
    solution: 'We architected a resilient microservices backend with Redis clustering, bank-grade encryption, and a decoupled product discovery pipeline.',
    features: [
      'Microservices-inspired architecture handling high concurrency flash sales',
      'Multi-currency automated checkout with instant tax calculations',
      'Sub-300ms catalog search and filtration engine',
      'Dockerized continuous deployment with zero-downtime updates'
    ],
    techStack: ['Vue.js', 'Laravel 12', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
    testimonial: {
      quote: "Our flash-sale traffic spiked 10x without a hitch. Devorica's engineering discipline gave us complete peace of mind.",
      author: 'Sabbir Ahmed',
      role: 'Chief Technology Officer, Bayloz'
    }
  },
  {
    id: 'easysub-bd',
    slug: 'easysub-bd',
    title: 'EasySub BD',
    category: 'Fintech & Subscription Rails',
    tagline: 'Automated Digital Subscription & Instant Fulfillment Engine',
    heroImage: '/portfolio/bayloz.jpg',
    overview: 'EasySub BD is an automated subscription platform featuring instant bKash and Nagad payment rails and deterministic sub-4-second license fulfillment.',
    client: 'EasySub BD Ltd.',
    timeline: '6 Weeks',
    services: ['AI MVP Launch', 'Automated Payment Rails', 'High-Speed Storefront'],
    metrics: [
      { label: 'Active Subscribers', value: '25,000+' },
      { label: 'Transaction Speed', value: '3.2s' },
      { label: 'Drop-off Reduction', value: '-60%' },
      { label: 'Fulfillment Automation', value: '99.9%' }
    ],
    challenge: 'Manual payment verification workflows were overwhelming operations and causing order delays of several hours during promotional peaks.',
    solution: 'We engineered an automated webhook verification pipeline connecting bKash and Nagad APIs with instant asynchronous key distribution.',
    features: [
      'Tokenized bKash & Nagad API integrations with auto-reconciliation',
      'Instant sub-4-second automated order fulfillment engine',
      'Resilient PostgreSQL connection pool with background queue workers',
      'Self-service customer subscription management and billing portal'
    ],
    techStack: ['React', 'Laravel 12', 'bKash API', 'Nagad API', 'PostgreSQL', 'Tailwind CSS'],
    testimonial: {
      quote: "Devorica automated 95% of our daily manual tasks. Customers now receive their subscriptions in seconds.",
      author: 'Rashedul Karim',
      role: 'Founder, EasySub BD'
    }
  },
  {
    id: 'fathom-ai',
    slug: 'fathom-ai',
    title: 'Fathom AI',
    category: 'AI Analytics & Intelligence',
    tagline: 'Autonomous Business Intelligence & High-Precision Predictive Analytics',
    heroImage: '/portfolio/fathom.jpg',
    overview: 'Fathom AI is an enterprise-grade analytics engine that empowers operations and strategy teams with instant data extraction, predictive modeling, and sub-second natural language query synthesis.',
    client: 'Fathom Intelligence',
    timeline: '8 Weeks',
    services: ['AI MVP Development', 'AI Automation & Agents', 'Product & UX Design'],
    metrics: [
      { label: 'Forecast Precision', value: '99.4%' },
      { label: 'Query Latency', value: '<350ms' },
      { label: 'Manual Work Saved', value: '75%' },
      { label: 'Data Ingestion Speed', value: '10x' }
    ],
    challenge: 'Legacy enterprise BI tools were plagued by multi-minute query latency, high data pipeline overhead, and poor executive adoption across non-technical stakeholders.',
    solution: 'We engineered an agentic analytics platform powered by vector search, columnar caching, and an intuitive canvas-driven user experience.',
    features: [
      'Autonomous natural language to SQL translation engine',
      'High-throughput columnar data ingestion pipelines',
      'Real-time collaborative dashboards and exportable board reports',
      'SOC-2 Type II compliant encryption and granular RBAC'
    ],
    techStack: ['React', 'Next.js', 'FastAPI', 'Python', 'ClickHouse', 'PostgreSQL', 'Tailwind CSS'],
    testimonial: {
      quote: "Devorica delivered an AI platform that rivals the best Silicon Valley analytics suites. Our executives cannot work without it.",
      author: 'Dr. Nathan Reed',
      role: 'Head of Analytics, Fathom Intelligence'
    }
  },
  {
    id: 'maertens-studio',
    slug: 'maertens-studio',
    title: 'Maertens Studio',
    category: 'Creative Portfolio & WebGL',
    tagline: 'Immersive 3D Spatial Architecture Showcase & Award-Winning Digital Experience',
    heroImage: '/portfolio/studiomaertens.jpg',
    overview: 'Maertens Studio is an award-winning digital showcase that combines brutalist architectural aesthetics, cinematic WebGL interactions, and buttery smooth scroll narratives.',
    client: 'Maertens Architecture',
    timeline: '6 Weeks',
    services: ['Product Experience Design', 'Creative Development', 'WebGL Engineering'],
    metrics: [
      { label: 'Inbound Inquiries', value: '3x' },
      { label: 'Session Duration', value: '4m 12s' },
      { label: 'Industry Recognition', value: 'SOTD Winner' },
      { label: 'Performance Score', value: '98/100' }
    ],
    challenge: 'As a high-end architectural firm, Maertens was losing marquee contracts because their previous website failed to reflect the physical grandeur and spatial elegance of their work.',
    solution: 'We designed and engineered a WebGL-powered spatial showcase blending high-contrast editorial typography with physics-based fluid motion.',
    features: [
      'Interactive WebGL 3D architectural asset viewing and inspection',
      'Cinematic momentum scroll choreography with zero frame drops',
      'Bespoke grid layout with high-contrast architectural typography',
      'Optimized 60FPS mobile interactions and touch responsiveness'
    ],
    techStack: ['WebGL', 'Three.js', 'GSAP', 'Next.js', 'React', 'Tailwind CSS'],
    testimonial: {
      quote: "Our new digital presence instantly transformed how enterprise clients perceive our work. We closed three major commercial projects within months.",
      author: 'Lukas Maertens',
      role: 'Principal Architect, Maertens Studio'
    }
  }
];
