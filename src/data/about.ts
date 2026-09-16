export type Role = {
  title: string;
  org: string;
  orgHref?: string;
  location?: string;
  start: string;
  end: string;
  bullets: string[];
};

export type School = {
  degree: string;
  school: string;
  start: string;
  end: string;
  bullets: string[];
};

export type MiscLink = {
  label: string;
  href: string;
  note?: string;
};

export const aboutLinks = {
  email: "mailto:anadi.pandharkar5@gmail.com",
  linkedin: "https://www.linkedin.com/in/anadi-pandharkar-920a582b/",
  github: "https://github.com/anadi2311",
} as const;

export const aboutIntro =
  "Product leader with platform, API/SDK, and infra depth. I teach PM and tech on the product in front of you — this site.";

export const roles: Role[] = [
  {
    title: "Head of Staking Products",
    org: "Obol Labs",
    orgHref: "https://launchpad.obol.org/",
    start: "Jul 2025",
    end: "present",
    bullets: [
      "Own multi-year roadmap across Launchpad, partner APIs/SDKs, and data. Grew TVS ~100× (7k → 800k ETH / ~$3B peak) by hardening shared primitives, not one-off partner builds.",
      "Manage two PMs (Launchpad/FE and Obol Stack agent harness); own data/platform as IC.",
      "Gate mainnet with Legal/Compliance (audits, bug bounties). Zero security exploits on institutional-grade contracts.",
    ],
  },
  {
    title: "Senior Product Manager",
    org: "Obol Labs",
    orgHref: "https://launchpad.obol.org/",
    start: "Oct 2023",
    end: "Jul 2025",
    bullets: [
      "Technical product strategy across protocol and infra: partner APIs/SDKs that abstract smart-contract logic; observability for Charon (Grafana by persona, telemetry, Loki).",
      "Enterprise GTM with operators and exchanges (Coinbase, Galaxy, Bitcoin Suisse, and others); turned integration needs into API/SDK priorities.",
      "AI in product and workflow: RAG agent over Loki for node debugging; institutional node errors down ~10%; infra cost down ~50%.",
    ],
  },
  {
    title: "Product Manager",
    org: "Covalent",
    orgHref: "https://www.covalenthq.com/",
    location: "Vancouver",
    start: "Apr 2021",
    end: "Oct 2023",
    bullets: [
      "Owned Increment end to end: custom APIs and DeFi/NFT dashboards across 150+ chains in ~10 minutes; ~$1M ARR within 6 months.",
      "Priced API SKUs (Stripe) with sales and marketing; took a zero-revenue API stream to $3M ARR in 15 months. Signups +60%, activation +10% from A/B tests.",
      "Ran Grafana on the indexing/API stack and Looker/Snowflake for product analytics; steered reliability and sprint priorities from both.",
    ],
  },
  {
    title: "Blockchain Product Engineer (Consultant)",
    org: "UBC CIC / AWS",
    orgHref: "https://ubccic.ubc.ca/",
    location: "Vancouver",
    start: "Sep 2020",
    end: "Apr 2021",
    bullets: [
      "Built a vaccine supply-chain DApp on AWS Lambda microservices and Amazon QLDB with a private Ethereum backend — helped MCG receive a £50K UK government grant.",
      "Led sprints and backend work comparing private Ethereum vs QLDB costs from prototype through a working system.",
    ],
  },
];

export const education: School[] = [
  {
    degree: "MSc Business Administration",
    school: "University of British Columbia, Vancouver",
    start: "Aug 2018",
    end: "Nov 2020",
    bullets: [
      "Specialized in supply chain management and blockchains (85.6%).",
      "Blockchain Graduate Pathway Scholarship (1 of 120 candidates).",
      "Thesis: Supply Chain Finance Through Blockchain Lens — smart contracts for SCF on Ethereum.",
    ],
  },
  {
    degree: "BE Mechanical Engineering",
    school: "Ujjain Engineering College, India",
    start: "Jun 2012",
    end: "Jun 2016",
    bullets: [
      "Indian Railways Staff Benefit Fund scholarship for undergrad performance.",
      "Central Sector Scholarship Scheme (94th percentile in senior school).",
      "MITACS Scholarship.",
    ],
  },
];

/** Add music, blogs, and articles as you publish them. */
export const misc: MiscLink[] = [
  {
    label: "Thesis (GitHub)",
    href: "https://github.com/anadi2311/Thesis-Supply-Chain-Finance-and-Blockchain",
    note: "Supply chain finance on Ethereum",
  },
  {
    label: "Vaccine distribution prototype",
    href: "https://github.com/UBC-CIC/VaccineDistribution",
    note: "UBC CIC / AWS",
  },
];
