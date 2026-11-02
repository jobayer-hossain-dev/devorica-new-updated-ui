export const servicesData = [
  {
    id: 'ai-mvp-development',
    slug: 'ai-mvp-development',
    title: 'AI MVP Launch',
    subtitle: 'From idea to launch-ready product — built fast, validated early, and ready to scale.',
    heroHeading: 'AI MVP Development, Investor-Ready in Weeks',
    heroDescription: 'We help ambitious founders and modern companies transform conceptual AI models and product visions into high-velocity, market-tested software with real user traction.',
    badge: 'Fast Track MVP',
    overview: 'Most agencies build exactly what you spec — bugs, delays, and zero strategic pushback included. At Devorica, we act as co-founders and senior product engineers. We validate your AI pipeline early, refine the user experience, and deliver a production-grade MVP in 3-6 weeks.',
    metrics: [
      { value: '3-5 Wks', label: 'Average Delivery Time' },
      { value: '99.4%', label: 'First-Pass Model Accuracy' },
      { value: '10x', label: 'Cost Reduction vs In-House' },
      { value: '$4.2M+', label: 'Raised by Our MVP Clients' }
    ],
    capabilities: [
      {
        title: 'MVP Architecture & Scoping',
        desc: 'Rigorous feature prioritization to ship the core value proposition without feature bloat or technical debt.'
      },
      {
        title: 'Agentic & LLM Integration',
        desc: 'Fine-tuned RAG pipelines, autonomous multi-agent loops, and low-latency inference endpoints.'
      },
      {
        title: 'SaaS Platform Development',
        desc: 'Production-ready React/Next.js frontends, scalable Node/Python APIs, and secure multi-tenant architectures.'
      },
      {
        title: 'Billing, Auth & Analytics',
        desc: 'Seamless Stripe/LemonSqueezy subscriptions, enterprise OAuth/SSO, and PostHog/Mixpanel event tracking.'
      },
      {
        title: 'Modern UI/UX Experience',
        desc: 'High-converting, polished interfaces designed in Figma that look like top Silicon Valley venture-backed products.'
      },
      {
        title: 'Rapid Testing & Iteration',
        desc: 'Automated end-to-end testing, CI/CD pipelines, and observability setup for day-one reliability.'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Discovery & AI Scoping',
        desc: 'We map user journeys, stress-test your AI feasibility, and define the absolute minimum lovable product.'
      },
      {
        step: '02',
        title: 'Interactive UX & Prototyping',
        desc: 'High-fidelity Figma prototypes verified with real stakeholders before writing production code.'
      },
      {
        step: '03',
        title: 'Agile Build & AI Engineering',
        desc: 'Bi-weekly sprint demos with working code, live staging environments, and active client collaboration.'
      },
      {
        step: '04',
        title: 'Deployment & Market Launch',
        desc: 'Cloud deployment, analytics instrumentation, SEO configuration, and post-launch telemetry monitoring.'
      }
    ],
    pricing: [
      {
        name: 'Launch MVP',
        price: '$9,000',
        period: 'per project',
        badge: 'Early Stage',
        popular: false,
        desc: 'Ideal for pre-seed founders wanting a clean, working AI MVP to raise capital or onboard pilot users.',
        features: [
          'Complete UI/UX Design System',
          'Single Core AI Feature Pipeline',
          'Auth & User Management',
          'Stripe Subscription Setup',
          '3-4 Weeks Turnaround',
          'Full Source Code IP Transfer'
        ]
      },
      {
        name: 'Growth SaaS',
        price: '$22,000',
        period: 'per project',
        badge: 'Most Popular',
        popular: true,
        desc: 'For seed-stage startups and funded teams building a comprehensive multi-agent SaaS platform.',
        features: [
          'Full Multi-Tenant SaaS Architecture',
          'Advanced Agentic AI & RAG Engine',
          'Admin Dashboard & Role-based Access',
          'Team Collaboration & Workspaces',
          'End-to-End Automated Testing',
          '6-8 Weeks Delivery + 30 Days Support'
        ]
      },
      {
        name: 'Enterprise Custom',
        price: 'Custom',
        period: 'flexible scope',
        badge: 'Enterprise',
        popular: false,
        desc: 'Tailored architecture, dedicated team pods, custom fine-tuning, and on-premise private deployment.',
        features: [
          'Dedicated Pod (Eng + Designer + PM)',
          'SOC-2 / HIPAA Compliant Pipelines',
          'Proprietary Model Fine-Tuning',
          'Legacy Migration & Integrations',
          'SLA & 24/7 Production Care',
          'Direct Slack Channel with Founders'
        ]
      }
    ],
    faqs: [
      {
        q: 'How much does an AI MVP cost to develop?',
        a: 'Our AI MVP packages start at $9,000 for focused early-stage validation, scaling to $22,000 for full-featured multi-tenant platforms. We operate on transparent, fixed-scope pricing with zero hidden fees.'
      },
      {
        q: 'Is an MVP just a clickable prototype or real software?',
        a: 'We build real, production-ready software. Your MVP comes with scalable backend architecture, active database, authentication, billing, and live AI models ready to charge paying customers.'
      },
      {
        q: 'Can we scale the codebase into our full product later?',
        a: 'Yes, 100%. We write modern, clean TypeScript, React, and modular backend code following industry-standard architecture so your in-house team can easily inherit and scale it.'
      },
      {
        q: 'What AI models and providers do you support?',
        a: 'We work across OpenAI (GPT-4o), Anthropic (Claude 3.5 Sonnet), Google Gemini, DeepSeek, as well as open-source models like Llama 3 via Groq, Together AI, or self-hosted vLLM.'
      }
    ]
  },
  {
    id: 'product-development',
    slug: 'product-development',
    title: 'Full-Cycle Product Development',
    subtitle: 'We handle strategy, design, and development to deliver reliable, high-performance products.',
    heroHeading: 'End-to-End Product Engineering for Scalable SaaS',
    heroDescription: 'From initial architectural blueprints to high-volume cloud infrastructure, our senior engineers build digital products engineered to withstand millions of requests.',
    badge: 'Full-Cycle Engineering',
    overview: 'Scaling a software product requires balancing user experience, code maintainability, and infrastructure resilience. We take complete ownership of your engineering lifecycle, freeing your executive team to focus on sales, marketing, and investor relations.',
    metrics: [
      { value: '99.98%', label: 'Production Uptime' },
      { value: '<120ms', label: 'Average Global API Latency' },
      { value: '500k+', label: 'Active End Users Powered' },
      { value: '100%', label: 'Codebase Ownership' }
    ],
    capabilities: [
      {
        title: 'Full-Stack Web Architecture',
        desc: 'Modern Next.js, React, Node.js, and Python microservices designed for elastic autoscaling.'
      },
      {
        title: 'Database & Data Modeling',
        desc: 'High-throughput PostgreSQL, Redis caching, vector databases (Pinecone/pgvector), and automated migrations.'
      },
      {
        title: 'DevOps & Cloud Infrastructure',
        desc: 'AWS, GCP, and Cloudflare architecture with Terraform infrastructure-as-code and zero-downtime CI/CD.'
      },
      {
        title: 'Enterprise Security & Compliance',
        desc: 'OWASP top-10 defense, encrypted secrets management, role-based access control, and GDPR compliance.'
      },
      {
        title: 'Custom API Ecosystems',
        desc: 'GraphQL and RESTful developer APIs with comprehensive OpenAPI documentation and SDK generation.'
      },
      {
        title: 'Performance Optimization',
        desc: 'Sub-second page loads, asset streaming, code-splitting, and Core Web Vitals perfection.'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Architecture Blueprint',
        desc: 'System architecture diagram, data schemas, API contracts, and non-functional requirements definition.'
      },
      {
        step: '02',
        title: 'Modular Development',
        desc: 'Test-driven development across independent micro-features with continuous peer code reviews.'
      },
      {
        step: '03',
        title: 'Integration & Stress Testing',
        desc: 'Load testing, security penetration scans, and synthetic chaos testing before traffic routing.'
      },
      {
        step: '04',
        title: 'Production Handover & Care',
        desc: 'Monitoring alarms setup with Datadog/Sentry, thorough handover documentation, and team training.'
      }
    ],
    pricing: [
      {
        name: 'Sprint Dedicated',
        price: '$12,000',
        period: 'per month',
        badge: 'Agile Pod',
        popular: true,
        desc: 'A dedicated senior full-stack pod embedded in your roadmap delivering continuous sprint velocity.',
        features: [
          'Senior Full-Stack Engineer + Lead Designer',
          'Weekly Sprint Planning & Async Daily Standups',
          'Unlimited Tasks & Parallel PR Reviews',
          'Direct Slack & GitHub Access',
          'Zero Lock-In (Cancel Anytime)',
          'Complete IP & Documentation'
        ]
      },
      {
        name: 'Full Product Delivery',
        price: '$35,000+',
        period: 'fixed scope',
        badge: 'Turnkey',
        popular: false,
        desc: 'Turnkey delivery of an entire production-scale platform from scratch to global public launch.',
        features: [
          'Complete End-to-End Architecture',
          'Frontend SPA, Backend API, Cloud Infra',
          'Admin Console & Analytics Dashboard',
          'Full QA Automation Suite',
          'SOC-2 Readiness Review',
          '60 Days Post-Launch Warranty'
        ]
      }
    ],
    faqs: [
      {
        q: 'Do we own the intellectual property and code?',
        a: 'Yes, 100%. All source code, Figma design files, database schemas, and intellectual property belong entirely to you from day one.'
      },
      {
        q: 'Can you integrate with our existing backend or database?',
        a: 'Absolutely. We frequently plug into existing enterprise backends, legacy databases, or third-party APIs without requiring complete rewrites.'
      }
    ]
  },
  {
    id: 'ai-automation',
    slug: 'ai-automation',
    title: 'AI System & Automation',
    subtitle: 'Intelligent AI agents that automate workflows, decisions, and operations at scale.',
    heroHeading: 'Autonomous AI Agents Engineered for Complex Business Logic',
    heroDescription: 'Replace brittle rule-based scripts with adaptive, context-aware LLM agents that read documents, extract structured intelligence, and execute multi-step operational workflows.',
    badge: 'Agentic Workflows',
    overview: 'Businesses spend thousands of hours on repetitive knowledge work, data reconciliation, and customer triage. We build intelligent agent systems that communicate across your internal tools (Slack, CRM, ERP, Postgres) with human-in-the-loop safeguards.',
    metrics: [
      { value: '85%', label: 'Reduction in Manual Tasks' },
      { value: '24/7', label: 'Autonomous Execution' },
      { value: '99.8%', label: 'Data Extraction Precision' },
      { value: '<2.5s', label: 'Agent Response Speed' }
    ],
    capabilities: [
      {
        title: 'Multi-Agent Orchestration',
        desc: 'Collaborative agent swarms using LangGraph, CrewAI, and custom stateful agent controllers.'
      },
      {
        title: 'Enterprise Document Intelligence',
        desc: 'Multimodal document parsing for PDFs, invoices, contracts, and scanned forms into structured JSON.'
      },
      {
        title: 'Custom RAG Knowledge Bases',
        desc: 'Hybrid dense/sparse vector search with reranking over private knowledge repositories.'
      },
      {
        title: 'Human-in-the-Loop Guardrails',
        desc: 'Approval workflows and validation checkpoints so critical financial or customer decisions remain verified.'
      },
      {
        title: 'Tool Calling & API Action Execution',
        desc: 'Empowering agents to safely trigger database writes, send notifications, and invoke webhooks.'
      },
      {
        title: 'Observability & Hallucination Defense',
        desc: 'Continuous evals, prompt regression tests, and token cost telemetry with LangSmith.'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Workflow Audit',
        desc: 'We identify manual operational bottlenecks, measure time expenditures, and specify high-ROI automation targets.'
      },
      {
        step: '02',
        title: 'Prompt & Agent Architecture',
        desc: 'Designing structured outputs, tool definitions, error fallback trees, and context retrieval pipelines.'
      },
      {
        step: '03',
        title: 'Sandbox Validation',
        desc: 'Benchmarking agent precision against historical ground-truth test datasets to ensure near-zero hallucinations.'
      },
      {
        step: '04',
        title: 'Production Integration',
        desc: 'Connecting agents to production data feeds, setting rate-limits, and configuring alerting dashboards.'
      }
    ],
    pricing: [
      {
        name: 'Single Workflow Agent',
        price: '$7,500',
        period: 'per workflow',
        badge: 'Focused ROI',
        popular: false,
        desc: 'Automate a single high-impact business workflow (e.g., automated customer onboarding or invoice processing).',
        features: [
          'Custom LLM Pipeline & Tool Calling',
          'Document OCR & Extraction Parser',
          'CRM / Database Read & Write Sync',
          'Human-in-the-Loop Slack Dashboard',
          'Comprehensive Hallucination Testing',
          '2 Weeks Rapid Implementation'
        ]
      },
      {
        name: 'Enterprise Agent Suite',
        price: '$18,000',
        period: 'full system',
        badge: 'Enterprise',
        popular: true,
        desc: 'A full network of collaborating agents orchestrating complex back-office and customer-facing workflows.',
        features: [
          'Multi-Agent System with Shared Memory',
          'Enterprise RAG Knowledge Repository',
          'Role-Based Approval & Audit Logs',
          'Live Telemetry & Cost Monitoring',
          'Custom Prompt Evals Suite',
          '60 Days Dedicated Optimization'
        ]
      }
    ],
    faqs: [
      {
        q: 'How do you prevent AI hallucinations in production?',
        a: 'We use strict schema validation (Pydantic/Zod), multi-step verification prompts, semantic guardrails, and deterministic fallbacks. If confidence drops below threshold, the system automatically routes to a human operator.'
      },
      {
        q: 'Is our sensitive company data used to train public models?',
        a: 'Never. We exclusively use zero-data-retention enterprise API endpoints or deploy self-hosted open-source models inside your private virtual private cloud (VPC).'
      }
    ]
  },
  {
    id: 'dedicated-teams',
    slug: 'dedicated-teams',
    title: 'Dedicated Product Teams',
    subtitle: 'Skilled engineers and designers embedded seamlessly into your team.',
    heroHeading: 'Scale Your Engineering Velocity Without Hiring Overhead',
    heroDescription: 'Skip the 4-month hiring grind and $40k recruiter fees. Get senior, pre-vetted AI engineers, frontend specialists, and product designers working inside your Slack tomorrow.',
    badge: 'Staff Augmentation',
    overview: 'Traditional outsourcing often leads to communication friction, timezone misalignment, and low-quality code. Devorica embeds autonomous, battle-tested talent directly into your agile rituals, speaking fluent English and matching your working hours.',
    metrics: [
      { value: '48 Hrs', label: 'Average Pod Ramp-Up Time' },
      { value: 'Top 1%', label: 'Vetted Senior Engineers' },
      { value: 'Zero', label: 'Recruiting or Severance Fees' },
      { value: '100%', label: 'Timezone Overlap Available' }
    ],
    capabilities: [
      {
        title: 'Senior AI & ML Engineers',
        desc: 'Specialists in PyTorch, LangChain, vector search, fine-tuning, and low-latency API serving.'
      },
      {
        title: 'Full-Stack Web Developers',
        desc: 'Elite TypeScript, React 19, Next.js, Node.js, Python, and PostgreSQL builders.'
      },
      {
        title: 'Product & Systems Designers',
        desc: 'Senior Figma practitioners who build scalable design tokens, micro-interactions, and design systems.'
      },
      {
        title: 'QA & Test Automation Engineers',
        desc: 'Playwright and Cypress architects ensuring zero regressions across all deployment pipelines.'
      },
      {
        title: 'DevOps & Cloud Architects',
        desc: 'Terraform, Docker, Kubernetes, AWS, and Cloudflare specialists keeping systems bulletproof.'
      },
      {
        title: 'Agile Product Managers',
        desc: 'Technical PMs who turn vague business requirements into clear sprint backlogs and shipping cadence.'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Talent Alignment Call',
        desc: 'We analyze your stack, roadmap milestones, culture, and exact skill profiles needed.'
      },
      {
        step: '02',
        title: 'Candidate Introduction',
        desc: 'Review curated profiles and conduct live technical deep dives with matching senior engineers.'
      },
      {
        step: '03',
        title: 'Two-Week Risk-Free Trial',
        desc: 'Your selected engineers start immediately. If not 100% satisfied in 14 days, pay nothing.'
      },
      {
        step: '04',
        title: 'Autonomous Sprint Flow',
        desc: 'Engineers push code daily, join sprint retrospectives, and drive feature velocity.'
      }
    ],
    pricing: [
      {
        name: 'Single Dedicated Senior',
        price: '$5,500',
        period: 'per month',
        badge: 'Individual Pod',
        popular: false,
        desc: 'One full-time senior engineer or designer dedicated 100% to your codebase.',
        features: [
          '160 Hours / Month Full-Time Allocation',
          'Senior Level (5+ Years Experience)',
          'Direct Slack, Jira, GitHub Integration',
          'Daily Standups & Sprint Demos',
          'Immediate Replacement Guarantee',
          'Monthly Rolling Agreement'
        ]
      },
      {
        name: 'Autonomous Pod (3 Roles)',
        price: '$15,000',
        period: 'per month',
        badge: 'High Velocity',
        popular: true,
        desc: 'A complete product shipping squad: 2 Senior Engineers + 1 Product Designer.',
        features: [
          'Full-Time Multi-Disciplinary Shipping Pod',
          'Complete Sprint Ownership & Execution',
          'End-to-End Design & Engineering Velocity',
          'Dedicated Technical Lead Oversight',
          'Direct Communication with Founders',
          'Cancel Anytime with 14-Day Notice'
        ]
      }
    ],
    faqs: [
      {
        q: 'How fast can a dedicated team member start?',
        a: 'We can have matched senior engineers onboarded and opening their first pull request within 48 to 72 hours of contract signing.'
      },
      {
        q: 'What timezones do your engineers work in?',
        a: 'Our engineers accommodate EST, PST, GMT, and CET with a minimum of 4-6 hours of real-time overlap for daily standups and collaborative pairing.'
      }
    ]
  },
  {
    id: 'maintenance-care',
    slug: 'maintenance-care',
    title: 'Maintenance & Care',
    subtitle: 'Ongoing care that keeps your product reliable and your AI systems sharp.',
    heroHeading: 'Proactive Software Maintenance, Security & AI Model Health',
    heroDescription: 'Prevent production downtime, eliminate security vulnerabilities, and ensure your AI pipelines never drift or degrade as usage scales.',
    badge: '24/7 Production Care',
    overview: 'Software products are living ecosystems. Unmonitored dependencies break, cloud bills spiral, and LLM APIs change without warning. Our Maintenance & Care plan provides peace of mind with 24/7 monitoring, security patches, and monthly feature allocations.',
    metrics: [
      { value: '<15 Min', label: 'Critical Incident SLA' },
      { value: '100%', label: 'Dependency Patch Coverage' },
      { value: 'Zero', label: 'Unscheduled Downtime' },
      { value: 'Monthly', label: 'Cost Optimization Audits' }
    ],
    capabilities: [
      {
        title: '24/7 Uptime & Health Monitoring',
        desc: 'Proactive synthetic monitoring, automated ping alerts, and immediate triage before users notice.'
      },
      {
        title: 'Security Audits & Patching',
        desc: 'Weekly dependency upgrades, vulnerability patching (CVEs), and automated security scans.'
      },
      {
        title: 'AI Model Drift & Latency Tuning',
        desc: 'Monitoring prompt success rates, token usage costs, cache hit rates, and model latency.'
      },
      {
        title: 'Database Backup & Performance Tuning',
        desc: 'Continuous point-in-time database backups, slow query optimization, and index maintenance.'
      },
      {
        title: 'Monthly Feature Sprints',
        desc: 'Dedicated developer hours each month for UX improvements, bug squashing, and roadmap additions.'
      },
      {
        title: 'Cloud Cost Optimization',
        desc: 'Eliminating zombie cloud instances, optimizing egress bandwidth, and reducing LLM inference costs.'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Telemetry Baseline',
        desc: 'We install Datadog, Sentry, and custom health check probes to track all vital signs.'
      },
      {
        step: '02',
        title: 'Runbook Creation',
        desc: 'Documenting system failovers, recovery protocols, and emergency escalation paths.'
      },
      {
        step: '03',
        title: 'Continuous Protection',
        desc: 'Automated scans, dependency updates, and continuous background health optimizations.'
      },
      {
        step: '04',
        title: 'Monthly Health Report',
        desc: 'Comprehensive executive summary of uptime, resolved bugs, response metrics, and cost savings.'
      }
    ],
    pricing: [
      {
        name: 'Essential Care',
        price: '$1,800',
        period: 'per month',
        badge: 'Stability',
        popular: false,
        desc: 'For early-stage products needing uptime peace of mind, bug fixes, and security patches.',
        features: [
          '24/7 Server & API Monitoring',
          'Weekly Security & Dependency Updates',
          'Up to 15 Hours of Bug Fixes / Month',
          'Daily Automated Database Backups',
          '1-Hour SLA for Critical Outages',
          'Monthly Health & Cloud Cost Report'
        ]
      },
      {
        name: 'Growth & Feature Pod',
        price: '$4,200',
        period: 'per month',
        badge: 'Active Iteration',
        popular: true,
        desc: 'For growing businesses wanting both 24/7 care and continuous monthly feature velocity.',
        features: [
          '24/7 Real-Time Emergency Response (15m SLA)',
          'Up to 40 Hours of Feature Development / Month',
          'AI Model Drift & Latency Optimizations',
          'Continuous Cloud Cost Audits',
          'Dedicated Senior Engineer Lead',
          'Priority Direct Slack Support'
        ]
      }
    ],
    faqs: [
      {
        q: 'Can unused maintenance hours roll over?',
        a: 'Yes, up to 50% of unused development hours can roll over into the following calendar month.'
      },
      {
        q: 'What happens if a critical outage occurs on a weekend?',
        a: 'Our on-call rotation operates 24/7/365. When a critical production incident fires, an engineer begins remediation within 15 minutes.'
      }
    ]
  },
  {
    id: 'product-design',
    slug: 'product-design',
    title: 'Product Experience Design',
    subtitle: 'Intuitive, user-centered design that turns complex ideas into seamless experiences.',
    heroHeading: 'High-Converting UI/UX Design for Visionary Software',
    heroDescription: 'We craft stunning, intuitive digital products that users love and competitors admire. From complex AI workflows to consumer-grade simplicity.',
    badge: 'Design System & UX',
    overview: 'Great design is not just aesthetics; it is clarity, conversion, and retention. We synthesize complex product requirements into frictionless workflows that turn first-time visitors into loyal evangelists.',
    metrics: [
      { value: '3.4x', label: 'Average Conversion Lift' },
      { value: '100%', label: 'Figma Auto-Layout & Tokens' },
      { value: '40+', label: 'Design Systems Shipped' },
      { value: 'Award', label: 'Winning Aesthetic Standards' }
    ],
    capabilities: [
      {
        title: 'Figma Design Systems & Tokens',
        desc: 'Atomic components, responsive auto-layout, dark/light themes, and seamless developer tokens.'
      },
      {
        title: 'User Research & Wireframing',
        desc: 'Information architecture, user journey maps, and low-fidelity wireframes that clarify intent.'
      },
      {
        title: 'Micro-Interactions & Motion',
        desc: 'Delightful transitions, hover feedback, and spatial animations that make apps feel snappy.'
      },
      {
        title: 'SaaS App Dashboards',
        desc: 'Complex data tables, KPI widgets, charts, and filtering interactions built for power users.'
      },
      {
        title: 'High-Converting Landing Pages',
        desc: 'Marketing pages engineered for storytelling, social proof, and maximum conversion rates.'
      },
      {
        title: 'Clickable Interactive Prototypes',
        desc: 'Realistic Figma prototypes for investor pitches, user interviews, and stakeholder sign-off.'
      }
    ],
    process: [
      {
        step: '01',
        title: 'UX Discovery & Benchmarking',
        desc: 'Competitive teardowns, user persona analysis, and visual inspiration alignment.'
      },
      {
        step: '02',
        title: 'Wireframes & Architecture',
        desc: 'Iterating on user flows and screen layouts before jumping into color and styling.'
      },
      {
        step: '03',
        title: 'High-Fidelity Visual Design',
        desc: 'Polishing typography, color palettes, bespoke icons, and responsive desktop/mobile states.'
      },
      {
        step: '04',
        title: 'Developer Handoff',
        desc: 'Pixel-perfect CSS specs, exported SVG assets, motion timing guides, and QA reviews.'
      }
    ],
    pricing: [
      {
        name: 'Landing Page & Brand',
        price: '$4,500',
        period: 'per design',
        badge: 'Marketing',
        popular: false,
        desc: 'A world-class SaaS landing page designed to double your signup and demo conversion rates.',
        features: [
          'High-Fidelity Figma Files (Desktop & Mobile)',
          'Custom Iconography & 3D/Vector Illustrations',
          'Micro-Interactions & Animation Guide',
          'Component Style Guide & Typography',
          'Unlimited Revision Rounds',
          '7-10 Days Delivery'
        ]
      },
      {
        name: 'Full Product Design System',
        price: '$11,000',
        period: 'complete app',
        badge: 'Complete App',
        popular: true,
        desc: 'End-to-end UX/UI design for your web or mobile app, from login to complex dashboard views.',
        features: [
          'Comprehensive Figma Design System (200+ Components)',
          'Up to 30 Unique Core Application Screens',
          'Interactive Clickable Prototype for Pitching',
          'Developer Handoff Redlines & Token Tokens',
          'User Flow & Journey Architecture Maps',
          '3-4 Weeks Turnaround'
        ]
      }
    ],
    faqs: [
      {
        q: 'What format do you deliver the designs in?',
        a: 'We deliver everything in structured, clean Figma files with full Auto-Layout, variant components, color/type variables, and interactive prototype links.'
      },
      {
        q: 'Do you help the engineering team implement the design?',
        a: 'Yes! We conduct design reviews on frontend pull requests to verify padding, colors, fonts, and animation curves are 100% faithful to the designs.'
      }
    ]
  }
];

