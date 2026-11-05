import type { IconName } from "@/components/icon";
import type { Seo } from "@/lib/seo";

export const audience =
  "Owners and leadership teams of small and mid-sized businesses that want results, not reports.";

export const timeline =
  '2 to 4 weeks for an assessment and plan; 6 to 12 weeks for build and rollout. [PLACEHOLDER: confirm standard timelines]';

export const serviceFaqs = [
  {
    q: "Do we need to sign up for everything?",
    a: "No. Most clients start with one service or a gap check.",
  },
  {
    q: "Do you work with our existing tools?",
    a: "Yes. We are tool-agnostic and build on what you have when it makes sense.",
  },
  {
    q: "How do we start?",
    a: "Book a discovery call. We will scope a first step within a week.",
  },
];

export type Offering = {
  id: string;
  title: string;
  icon: IconName;
  problem: string;
  help: string[];
  outcome: string;
  scenario: string;
  hubHelp: string;
};

export type Practice = {
  slug: string;
  title: string;
  promise: string;
  home: string;
  seo: Seo;
  offerings: Offering[];
};

export const practices: Practice[] = [
  {
    slug: "strategy-and-growth",
    title: "Strategy and Growth",
    promise: "Grow with a plan your whole team can run.",
    home: "plan, market, sell and price for growth.",
    seo: {
      title: "Strategy and Growth Consulting | Kenton Global Group",
      description:
        "Strategy and Growth consulting: Strategy and Operations, Marketing and Growth, Go-to-Market and Sales Enablement, Ecommerce and Channel Growth, Pricing and Packaging. Plans, builds and rollout from Kenton Global Group.",
      keywords:
        "strategy and growth consulting, strategy and operations, marketing and growth, go-to-market and sales enablement, ecommerce and channel growth",
    },
    offerings: [
      {
        id: "strategy-and-operations",
        title: "Strategy and Operations",
        icon: "compass",
        problem: "Growth stalls when the plan lives in one head and the daily work runs on habit.",
        help: [
          "Business strategy and growth planning",
          "Operating model design",
          "Operational efficiency and cost review",
          "Process improvement",
          "Key performance indicator frameworks",
          "Fractional operations leadership",
        ],
        outcome: "Growth plan, operating model map, scorecard of key measures, 90-day action plan",
        scenario:
          "A regional distributor wants to grow without adding chaos. We map how work flows today, set a short list of measures and build a 90-day plan the leadership team owns.",
        hubHelp:
          "business strategy and growth planning, operating model design, operational efficiency and cost review, process improvement, key performance indicator frameworks, fractional operations leadership",
      },
      {
        id: "marketing-and-growth",
        title: "Marketing and Growth",
        icon: "megaphone",
        problem: "Marketing spend goes out, but no one can say what brings customers in.",
        help: [
          "Marketing strategy",
          "Content and campaigns",
          "Search and paid media planning",
          "Marketing automation",
          "Analytics and attribution",
        ],
        outcome: "Marketing plan, channel mix, campaign calendar, reporting dashboard",
        scenario:
          "A service company runs ads in five places with no tracking. We cut to the channels that work, set up tracking and build a monthly campaign rhythm.",
        hubHelp:
          "marketing strategy, content and campaigns, search and paid media planning, marketing automation, analytics and attribution",
      },
      {
        id: "go-to-market-and-sales-enablement",
        title: "Go-to-Market and Sales Enablement",
        icon: "route",
        problem: "New offers launch without a clear buyer, message or sales process.",
        help: [
          "Go-to-market planning",
          "Ideal customer and segment work",
          "Sales process design",
          "Sales playbooks and training",
          "Customer relationship management set-up",
        ],
        outcome: "Go-to-market plan, ideal customer profile, sales playbook, configured pipeline",
        scenario:
          "A firm launching a new service line needs a sales motion. We define the buyer, write the playbook and set up the pipeline so every lead is tracked.",
        hubHelp:
          "go-to-market planning, ideal customer and segment work, sales process design, sales playbooks and training, customer relationship management set-up",
      },
      {
        id: "ecommerce-and-channel-growth",
        title: "Ecommerce and Channel Growth",
        icon: "store",
        problem: "Online sales and partner channels grow by accident instead of by design.",
        help: [
          "Online store strategy",
          "Marketplace channels",
          "Distributor and partner channels",
          "Ecommerce operations",
        ],
        outcome: "Channel strategy, marketplace launch plan, partner program outline, operations checklist",
        scenario:
          "A consumer brand sells only through its own store. We plan a marketplace launch and a partner program, and tighten fulfillment to handle both.",
        hubHelp:
          "online store strategy, marketplace channels, distributor and partner channels, ecommerce operations",
      },
      {
        id: "pricing-and-packaging",
        title: "Pricing and Packaging",
        icon: "tags",
        problem: "Prices were set years ago and margins quietly shrink.",
        help: ["Pricing review", "Packaging and tiers", "Margin analysis", "Price change rollout"],
        outcome: "Pricing model, tier and package design, margin report, rollout and customer message plan",
        scenario:
          "A software reseller sells one flat plan. We design three clear tiers, test margins and plan a calm rollout to existing customers.",
        hubHelp: "pricing review, packaging and tiers, margin analysis, price change rollout",
      },
    ],
  },
  {
    slug: "brand-and-customer",
    title: "Brand and Customer",
    promise: "Build a brand people remember and an experience they come back to.",
    home: "launch and build brands customers remember.",
    seo: {
      title: "Brand and Customer Consulting | Kenton Global Group",
      description:
        "Brand and Customer consulting: Brand Launching and Brand Building, Customer Experience. Plans, builds and rollout from Kenton Global Group.",
      keywords: "brand and customer consulting, brand launching and brand building, customer experience",
    },
    offerings: [
      {
        id: "brand-launching-and-building",
        title: "Brand Launching and Brand Building",
        icon: "palette",
        problem: "A new business, product or relaunch needs a brand that looks and sounds ready from day one.",
        help: [
          "Brand strategy and positioning",
          "Naming and identity",
          "Brand launch plan",
          "Brand guidelines",
          "Brand refresh",
          "Website and digital presence",
        ],
        outcome: "Positioning statement, identity system, brand guidelines, launch plan, website direction",
        scenario:
          "A new home services company needs a brand before opening. We set the position, build the identity and run a launch plan across web, search and social.",
        hubHelp:
          "brand strategy and positioning, naming and identity, brand launch plan, brand guidelines, brand refresh, website and digital presence",
      },
      {
        id: "customer-experience",
        title: "Customer Experience",
        icon: "heart",
        problem: "Customers drop off between first contact and repeat purchase, and no one owns the journey.",
        help: [
          "Customer journey mapping",
          "Service design",
          "Feedback and voice-of-customer programs",
          "Support automation",
        ],
        outcome: "Journey map, service blueprint, feedback program, support automation plan",
        scenario:
          "A multi-location business hears mixed reviews. We map the journey, fix the weak handoffs and set up a simple feedback loop with automated follow-up.",
        hubHelp:
          "customer journey mapping, service design, feedback and voice-of-customer programs, support automation",
      },
    ],
  },
  {
    slug: "operations-and-people",
    title: "Operations and People",
    promise: "Make the work flow, the cash move and the team stronger.",
    home: "streamline workflows, cash and teams.",
    seo: {
      title: "Operations and People Consulting | Kenton Global Group",
      description:
        "Operations and People consulting: Workflow Design and Automation, Finance and Cash Operations, Talent and Organization Design, Mergers and Integrations. Plans, builds and rollout from Kenton Global Group.",
      keywords:
        "operations and people consulting, workflow design and automation, finance and cash operations, talent and organization design, mergers and integrations",
    },
    offerings: [
      {
        id: "workflow-design-and-automation",
        title: "Workflow Design and Automation",
        icon: "workflow",
        problem: "Work moves by email, spreadsheets and memory, so things get dropped.",
        help: [
          "Workflow mapping",
          "Process redesign",
          "Automation build for routine tasks, approvals and handoffs",
          "Standard operating procedure writing",
          "Tool consolidation",
        ],
        outcome: "Current and future workflow maps, automation build, standard operating procedures, tool plan",
        scenario:
          "An office team re-keys the same order into three systems. We redesign the flow, automate the handoffs and write the procedures so it sticks.",
        hubHelp:
          "workflow mapping, process redesign, automation build for routine tasks, approvals and handoffs, standard operating procedure writing, tool consolidation",
      },
      {
        id: "finance-and-cash-operations",
        title: "Finance and Cash Operations",
        icon: "landmark",
        problem: "Cash is tight even when sales look good, and month-end takes too long.",
        help: [
          "Cash flow forecasting",
          "Billing and collections process",
          "Close process improvement",
          "Budget and planning",
          "Fractional finance support",
        ],
        outcome: "Cash forecast model, order-to-cash process map, close checklist, budget template",
        scenario:
          "A growing contractor waits too long to get paid. We tighten billing, set a collections rhythm and build a weekly cash forecast.",
        hubHelp:
          "cash flow forecasting, billing and collections process, close process improvement, budget and planning, fractional finance support",
      },
      {
        id: "talent-and-organization-design",
        title: "Talent and Organization Design",
        icon: "users",
        problem: "Roles are unclear, hiring is slow and change does not stick.",
        help: [
          "Organization structure",
          "Roles and responsibilities",
          "Hiring process design",
          "Training programs",
          "Change management and adoption",
        ],
        outcome: "Organization chart, role definitions, hiring process, training plan, change plan",
        scenario:
          "A company that doubled in size has no clear owners. We define the structure and roles, then build a hiring and training process to support it.",
        hubHelp:
          "organization structure, roles and responsibilities, hiring process design, training programs, change management and adoption",
      },
      {
        id: "mergers-and-integrations",
        title: "Mergers and Integrations",
        icon: "merge",
        problem: "Deals look good on paper, then integration stalls in operations and systems.",
        help: [
          "Pre-deal operations review",
          "Integration planning",
          "Systems and process integration",
          "First-100-days plan",
        ],
        outcome: "Operations review, integration roadmap, systems plan, first-100-days plan",
        scenario:
          "A buyer is adding a smaller competitor. We review operations before close and run a 100-day plan to combine teams, systems and customers.",
        hubHelp:
          "pre-deal operations review, integration planning, systems and process integration, first-100-days plan",
      },
    ],
  },
  {
    slug: "technology-and-intelligence",
    title: "Technology and Intelligence",
    promise: "Put modern technology and AI to work on real business problems.",
    home: "modernize systems and put AI to work.",
    seo: {
      title: "Technology and Intelligence Consulting | Kenton Global Group",
      description:
        "Technology and Intelligence consulting: Artificial Intelligence and Agentic Automation, Digital Transformation, Enterprise Resource Planning and Systems Selection, Data and Analytics, Cybersecurity and Risk. Plans, builds and rollout from Kenton Global Group.",
      keywords:
        "technology and intelligence consulting, artificial intelligence and agentic automation, digital transformation, enterprise resource planning and systems selection, data and analytics",
    },
    offerings: [
      {
        id: "ai-and-agentic-automation",
        title: "Artificial Intelligence and Agentic Automation",
        icon: "bot",
        problem: "Teams hear about AI every day but do not know where it pays off or how to use it safely.",
        help: [
          "Readiness review",
          "Use-case selection",
          "Agent design and build",
          "Assistant rollout",
          "Governance and human approval",
          "Ongoing agent support",
        ],
        outcome: "Readiness report, ranked use cases, working agents, governance rules, training",
        scenario:
          "A back office spends hours on intake and status emails. We build an agent that drafts the work and routes it to a person for approval.",
        hubHelp:
          "readiness review, use-case selection, agent design and build, assistant rollout, governance and human approval, ongoing agent support",
      },
      {
        id: "digital-transformation",
        title: "Digital Transformation",
        icon: "cpu",
        problem: "Old systems and disconnected tools slow every team down.",
        help: [
          "Technology roadmap",
          "Systems modernization",
          "Cloud move",
          "Integration of existing tools",
          "Digital adoption",
        ],
        outcome: "Technology roadmap, modernization plan, integration design, adoption plan",
        scenario:
          "A manufacturer runs on aging on-site software. We build a phased roadmap to the cloud and connect the tools teams already use.",
        hubHelp:
          "technology roadmap, systems modernization, cloud move, integration of existing tools, digital adoption",
      },
      {
        id: "erp-and-systems-selection",
        title: "Enterprise Resource Planning and Systems Selection",
        icon: "boxes",
        problem: "Choosing a core system is costly and hard to undo.",
        help: [
          "Requirements gathering",
          "Vendor shortlist and selection",
          "Implementation oversight",
          "Customer relationship management selection",
          "Data migration planning",
        ],
        outcome: "Requirements document, vendor scorecard, selection memo, implementation and migration plan",
        scenario:
          "A distributor outgrew its accounting package. We gather requirements, run demos with a scorecard and oversee the rollout.",
        hubHelp:
          "requirements gathering, vendor shortlist and selection, implementation oversight, customer relationship management selection, data migration planning",
      },
      {
        id: "data-and-analytics",
        title: "Data and Analytics",
        icon: "chart",
        problem: "Leaders make big calls without clean, timely numbers.",
        help: ["Data foundations", "Reporting and dashboards", "Data quality clean-up", "Forecasting"],
        outcome: "Data model, dashboard set, data quality rules, forecast model",
        scenario:
          "A multi-unit operator builds reports by hand each Monday. We connect the sources and deliver live dashboards and a simple forecast.",
        hubHelp: "data foundations, reporting and dashboards, data quality clean-up, forecasting",
      },
      {
        id: "cybersecurity-and-risk",
        title: "Cybersecurity and Risk",
        icon: "shield-check",
        problem:
          "Security and compliance gaps grow quietly until a customer, insurer or incident exposes them.",
        help: [
          "Security posture review",
          "Policies and controls",
          "Vendor risk",
          "Incident readiness",
          "AI risk and data rules",
        ],
        outcome: "Posture review, policy set, vendor risk register, incident playbook, AI data rules",
        scenario:
          "A supplier to larger customers faces a security questionnaire. We assess the gaps, write the policies and prepare an incident playbook.",
        hubHelp: "security posture review, policies and controls, vendor risk, incident readiness, ai risk and data rules",
      },
    ],
  },
];

export function practiceHref(slug: string) {
  return `/services/${slug}/`;
}

export function offeringHref(practiceSlug: string, id: string) {
  return `/services/${practiceSlug}/#${id}`;
}

export const homeProblems: { icon: IconName; text: string }[] = [
  { icon: "line", text: "Growth has stalled and the next step is unclear." },
  { icon: "clock", text: "Teams spend hours on manual work that software could handle." },
  { icon: "unplug", text: "Systems do not talk to each other, so numbers do not match." },
  { icon: "palette", text: "The brand no longer fits the business you have become." },
  { icon: "bot", text: "Everyone talks about AI, but no one knows where to start safely." },
  { icon: "wallet", text: "Cash is tight even when sales look strong." },
];

export const homeSteps = [
  { n: "01", title: "Discover", text: "we listen, review and find the real gaps." },
  { n: "02", title: "Design", text: "we build a clear plan with priorities and owners." },
  { n: "03", title: "Deliver", text: "we build, automate and launch alongside your team." },
  { n: "04", title: "Sustain", text: "we measure, tune and train so results last." },
];

export const engagementModels = [
  "Assessment",
  "Fixed-scope project",
  "Embedded team",
  "Ongoing or fractional support",
];

export const homeExamples = [
  {
    label: "Manufacturing",
    text: "order entry is re-keyed three times. We redesign the workflow and automate the handoffs.",
  },
  {
    label: "Hospitality",
    text: "a multi-unit group lacks consistent numbers. We connect sources into one weekly dashboard.",
  },
  {
    label: "Professional Services",
    text: "client intake takes days. An AI agent drafts intake and routes it for approval.",
  },
];

export const homeInsights = [
  {
    title: "Where AI agents pay off first in a small business",
    href: "/insights/#ai-agents-first",
  },
  {
    title: "Five signs your workflows need a redesign",
    href: "/insights/#workflow-signs",
  },
  {
    title: "Brand launch checklist for a new product line",
    href: "/insights/#brand-launch-checklist",
  },
];

export type Industry = {
  slug: string;
  title: string;
  nav: string;
  icon: IconName;
  who: string;
  hub: string;
  problems: string[];
  bundle: { label: string; href: string }[];
  scenario: string;
  assessment: { label: string; href: string };
  seo: Seo;
};

export const industries: Industry[] = [
  {
    slug: "manufacturing",
    title: "Consulting for manufacturing",
    nav: "Manufacturing",
    icon: "factory",
    who: "Job shops, fabrication, distribution and supply chain.",
    hub: "Job shops, fabrication, distribution and supply chain.",
    problems: [
      "Order entry and scheduling done by hand",
      "Disconnected shop floor and office systems",
      "Margins squeezed by material and labor costs",
      "Hard to find and train skilled people",
    ],
    bundle: [
      { label: "Workflow Design and Automation", href: offeringHref("operations-and-people", "workflow-design-and-automation") },
      { label: "ERP and Systems Selection", href: offeringHref("technology-and-intelligence", "erp-and-systems-selection") },
      { label: "Pricing and Packaging", href: offeringHref("strategy-and-growth", "pricing-and-packaging") },
      { label: "Data and Analytics", href: offeringHref("technology-and-intelligence", "data-and-analytics") },
    ],
    scenario:
      "A fabrication shop quotes jobs from spreadsheets. We build a quoting workflow tied to real costs and connect it to scheduling.",
    assessment: { label: "Workflow and Automation Check", href: "/assessments/#workflow" },
    seo: {
      title: "Manufacturing Consulting | Kenton Global Group",
      description:
        "Consulting for manufacturing: operations, technology, AI and growth support built for job shops, fabrication, distribution and supply chain.",
      keywords:
        "manufacturing consulting, manufacturing automation, manufacturing technology, manufacturing operations",
    },
  },
  {
    slug: "restaurants-and-hospitality",
    title: "Consulting for restaurants and hospitality",
    nav: "Restaurants and Hospitality",
    icon: "utensils",
    who: "Single locations and multi-unit groups.",
    hub: "Single locations and multi-unit groups.",
    problems: [
      "Thin margins and rising food and labor costs",
      "Inconsistent numbers across locations",
      "Guest reviews and loyalty hard to manage",
      "Staff turnover and training",
    ],
    bundle: [
      { label: "Customer Experience", href: offeringHref("brand-and-customer", "customer-experience") },
      { label: "Finance and Cash Operations", href: offeringHref("operations-and-people", "finance-and-cash-operations") },
      { label: "Brand Launching and Brand Building", href: offeringHref("brand-and-customer", "brand-launching-and-building") },
      { label: "Data and Analytics", href: offeringHref("technology-and-intelligence", "data-and-analytics") },
    ],
    scenario:
      "A multi-unit group reports sales by hand each week. We connect point-of-sale and labor data into one dashboard and set up automated review replies for approval.",
    assessment: { label: "Business Gap Check", href: "/assessments/#business-gap" },
    seo: {
      title: "Restaurants and Hospitality Consulting | Kenton Global Group",
      description:
        "Consulting for restaurants and hospitality: operations, technology, AI and growth support built for single locations and multi-unit groups.",
      keywords:
        "restaurants and hospitality consulting, restaurants and hospitality automation, restaurants and hospitality technology, restaurants and hospitality operations",
    },
  },
  {
    slug: "professional-services",
    title: "Consulting for professional services",
    nav: "Professional Services",
    icon: "briefcase",
    who: "Accounting and legal practices, agencies and engineering firms.",
    hub: "Accounting and legal practices, agencies and engineering firms.",
    problems: [
      "Slow client intake and onboarding",
      "Billable time lost to admin",
      "Uneven pipeline and pricing",
      "Knowledge stuck in a few people",
    ],
    bundle: [
      { label: "AI and Agentic Automation", href: offeringHref("technology-and-intelligence", "ai-and-agentic-automation") },
      { label: "Go-to-Market and Sales Enablement", href: offeringHref("strategy-and-growth", "go-to-market-and-sales-enablement") },
      { label: "Pricing and Packaging", href: offeringHref("strategy-and-growth", "pricing-and-packaging") },
      { label: "Talent and Organization Design", href: offeringHref("operations-and-people", "talent-and-organization-design") },
    ],
    scenario:
      "An agency spends days on proposals. An AI agent drafts proposals from a template and past scope, and a partner reviews and sends.",
    assessment: { label: "AI Readiness Check", href: "/assessments/#ai-readiness" },
    seo: {
      title: "Professional Services Consulting | Kenton Global Group",
      description:
        "Consulting for professional services: operations, technology, AI and growth support built for accounting and legal practices, agencies and engineering firms.",
      keywords:
        "professional services consulting, professional services automation, professional services technology, professional services operations",
    },
  },
  {
    slug: "defense-adjacent-and-government-suppliers",
    title: "Consulting for defense-adjacent and government suppliers",
    nav: "Defense-Adjacent and Government Suppliers",
    icon: "shield",
    who: "Compliance readiness, cybersecurity requirements and contracting operations.",
    hub: "Compliance readiness, cybersecurity requirements and contracting operations.",
    problems: [
      "Growing cybersecurity and compliance requirements",
      "Complex contracting and documentation",
      "Supply chain visibility",
      "Systems not built for audits",
    ],
    bundle: [
      { label: "Cybersecurity and Risk", href: offeringHref("technology-and-intelligence", "cybersecurity-and-risk") },
      { label: "ERP and Systems Selection", href: offeringHref("technology-and-intelligence", "erp-and-systems-selection") },
      { label: "Workflow Design and Automation", href: offeringHref("operations-and-people", "workflow-design-and-automation") },
      { label: "Data and Analytics", href: offeringHref("technology-and-intelligence", "data-and-analytics") },
    ],
    scenario:
      "A parts supplier must meet new security requirements to keep a contract. We assess gaps, write policies and plan the controls.",
    assessment: { label: "Cybersecurity Basics Check", href: "/assessments/#cybersecurity" },
    seo: {
      title: "Defense-Adjacent and Government Suppliers Consulting | Kenton Global Group",
      description:
        "Consulting for defense-adjacent and government suppliers: operations, technology, AI and growth support built for compliance readiness, cybersecurity requirements and contracting operations.",
      keywords:
        "defense-adjacent and government suppliers consulting, defense-adjacent and government suppliers automation, defense-adjacent and government suppliers technology, defense-adjacent and government suppliers operations",
    },
  },
];

export const assessments = [
  {
    id: "business-gap",
    title: "Business Gap Check",
    icon: "search" as IconName,
    text: "Find where strategy, operations, sales and cash are leaking.",
  },
  {
    id: "ai-readiness",
    title: "AI Readiness Check",
    icon: "bot" as IconName,
    text: "See if your data, tools and team are ready for AI and agents.",
  },
  {
    id: "workflow",
    title: "Workflow and Automation Check",
    icon: "workflow" as IconName,
    text: "Spot manual work and handoffs ready to automate.",
  },
  {
    id: "brand-marketing",
    title: "Brand and Marketing Check",
    icon: "megaphone" as IconName,
    text: "Test how clear, consistent and effective your brand and marketing are.",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity Basics Check",
    icon: "shield-check" as IconName,
    text: "Check the security basics customers and insurers expect.",
  },
  {
    id: "systems-fit",
    title: "Systems and ERP Fit Check",
    icon: "boxes" as IconName,
    text: "Learn whether your core systems still fit the business.",
  },
];

export const formNeeds = [
  ...practices.flatMap((group) => group.offerings.map((item) => item.title)),
  "AI and agents",
  "Not sure",
];

export const pages = {
  home: {
    title: "Kenton Global Group | Business and Technology Consulting",
    description:
      "Kenton Global Group helps businesses grow, run better and put AI to work. Strategy, brand, operations, digital transformation and agentic automation.",
    keywords:
      "business consulting, digital transformation, AI consulting, agentic automation, operations consulting, Kentucky consulting firm",
    h1: "Growth, operations and AI, built to work together",
    sub: "Kenton Global Group is a business and technology consulting firm. We find the gaps holding your business back, then fix them, from brand launch to working automation.",
  },
  services: {
    title: "Consulting Services | Kenton Global Group",
    description:
      "Sixteen consulting services across strategy, brand, operations and technology, including AI agents, digital transformation, ERP selection and cybersecurity.",
    keywords:
      "consulting services, business strategy, workflow automation, ERP selection, brand launch, cybersecurity consulting",
    h1: "Consulting services for every stage of growth",
  },
  ai: {
    title: "AI and Agentic Automation Consulting | Kenton Global Group",
    description:
      "Practical AI consulting: readiness, use cases, AI agent design and build, governance with human approval, data foundations and training.",
    keywords: "AI consulting, agentic AI, AI agents for business, AI readiness, AI governance, automation",
    h1: "Artificial intelligence and agents that do real work",
  },
  industries: {
    title: "Industries We Serve | Kenton Global Group",
    description:
      "Consulting packs for manufacturing, restaurants and hospitality, professional services, and defense-adjacent and government suppliers.",
    keywords:
      "industry consulting, manufacturing consulting, hospitality consulting, professional services consulting, government supplier compliance",
    h1: "Industry know-how for the problems you face every day",
  },
  assessments: {
    title: "Free Business Gap Checks and AI Readiness Assessments | Kenton Global Group",
    description:
      "Take a free gap check: business, AI readiness, workflow, brand and marketing, cybersecurity and systems fit. Get a score and next steps.",
    keywords: "business assessment, AI readiness assessment, gap analysis, cybersecurity assessment, workflow assessment",
    h1: "Find the gaps. Then fix them.",
  },
  approach: {
    title: "Our Approach | Kenton Global Group",
    description:
      "How we work: discover, design, deliver, sustain. Flexible engagement models from one-time assessments to fractional support.",
    keywords: "consulting approach, engagement models, fractional consulting, consulting process",
    h1: "A clear method from first call to lasting results",
  },
  insights: {
    title: "Insights on AI, Operations and Growth | Kenton Global Group",
    description:
      "Practical insights on AI agents, workflow design, brand launches and business growth from Kenton Global Group.",
    keywords: "AI insights, business consulting insights, workflow automation tips, brand launch checklist",
    h1: "Insights",
  },
  about: {
    title: "About Kenton Global Group | Business and Technology Consulting",
    description:
      "Kenton Global Group is a Kentucky-based business and technology consulting firm helping businesses grow, run better and use AI well.",
    keywords: "about Kenton Global Group, Kentucky consulting firm, business and technology consulting, consulting firm values",
    h1: "About Kenton Global Group",
  },
  contact: {
    title: "Contact and Book a Discovery Call | Kenton Global Group",
    description:
      "Book a free discovery call with Kenton Global Group. Tell us what is holding your business back and we will suggest a first step.",
    keywords: "book a consultation, contact consulting firm, discovery call, business consulting Kentucky",
    h1: "Let's find your next gain",
  },
  privacy: {
    title: "Privacy Policy | Kenton Global Group",
    description: "How Kenton Global Group collects, uses and protects your information.",
    keywords: "privacy policy, data protection, cookies",
    h1: "Privacy Policy",
  },
  terms: {
    title: "Terms of Use, Accessibility and AI Use | Kenton Global Group",
    description: "Terms of use for the Kenton Global Group website, plus our accessibility and AI use statements.",
    keywords: "terms of use, accessibility statement, AI use statement",
    h1: "Terms of Use",
  },
  notFound: {
    title: "Page Not Found | Kenton Global Group",
    description: "The page you are looking for could not be found.",
    keywords: "404",
    h1: "We couldn't find that page",
  },
} satisfies Record<string, Seo & { h1: string; sub?: string }>;
