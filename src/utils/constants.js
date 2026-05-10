// ============================================
// BUILDATHON — Data Constants
// utils/constants.js
// ============================================

export const EVENT = {
  name: 'Buildathon',
  cohort: 'Cohort 04',
  dates: 'June 18–19, 2026',
  location: 'Dallas, Texas',
  duration: '32 hours',
  targetDate: new Date('2026-06-18T09:00:00').getTime(),
};

export const STATS = [
  { number: '1000+', label: 'Builders' },
  { number: '10', label: 'Tracks' },
  { number: 'Reveal Soon', label: 'Prize Money' },
  { number: '32hrs', label: 'Build + Match' },
];

export const TRUST_CELLS = [
  'AI Labs',
  'Founder Teams',
  'GPU Partners',
  'Investors',
  'Web Infra',
  'Dev Tools',
  'Product Teams',
  'Data Stack',
  'Payments',
  'Accelerators',
  'Community',
  'Design Teams',
];

export const TRACKS = [
  {
    num: '01',
    name: 'Frontend & UX',
    desc: 'UI, interaction design, rapid prototyping. Ship something a real user would open.',
    tags: ['Become a Sponsor '],
  },

  {
    num: '02',
    name: 'Agent Orchestration',
    desc: 'Multi-step reasoning, tool calling, agentic workflows. The intelligence layer.',
    tags: ['Become a Sponsor '],
  },

  {
    num: '03',
    name: 'RAG & Retrieval',
    desc: 'Grounding, document parsing, search. Real knowledge, zero hallucinations.',
    tags: ['Become a Sponsor '],
  },

  {
    num: '04',
    name: 'LLM Inference',
    desc: 'Models, APIs, latency. Fast, reliable, production-grade calls at scale.',
    tags: ['Become a Sponsor '],
  },

  {
    num: '05',
    name: 'Memory & Context',
    desc: 'Persistent state, user memory, long-context management across sessions.',
    tags: ['Become a Sponsor '],
  },

  {
    num: '06',
    name: 'Voice & Audio',
    desc: 'Speech-to-text, TTS, voice agents. The next interface layer.',
    tags: ['Become a Sponsor '],
  },

  {
    num: '07',
    name: 'Data Pipelines',
    desc: 'Ingestion, transformation, warehousing. Clean data in, real signal out.',
    tags: ['Become a Sponsor '],
  },

  {
    num: '08',
    name: 'Evals & Testing',
    desc: 'Benchmarking, regression testing, quality loops. Ship with confidence.',
    tags: ['Become a Sponsor '],
  },

  {
    num: '09',
    name: 'Deployment & MLOps',
    desc: 'Containers, serving, monitoring. From notebook to production in 24 hours.',
    tags: ['Become a Sponsor '],
  },

  {
    num: '10',
    name: 'Security & Guardrails',
    desc: "Prompt injection, PII protection, content filtering. AI that doesn't go rogue.",
    tags: ['Become a Sponsor '],
  },
];

export const FAQ_ITEMS = [
  {
    id: 'faq-1',
    question: 'Who is Buildathon for?',
    answer:
      'Builders, engineers, designers, founders, and ambitious students building AI-native products.',
  },

  {
    id: 'faq-2',
    question: 'How long is the event?',
    answer:
      'Buildathon Dallas is a 32-hour build, match, and demo sprint.',
  },

  {
    id: 'faq-3',
    question: 'Can I apply solo?',
    answer:
      'Yes. Solo applicants can match with teams during the event.',
  },
];

export const SPONSORS = [
  { name: 'Lovable' },
  { name: 'Tavily' },
  { name: 'SeedLegals' },
  { name: 'Red Bull' },
  { name: 'Tinyfish' },
];

export const NAV_LINKS = [
  { label: 'About', href: '#what' },
  { label: 'Tracks', href: '#tracks' },
  { label: 'FAQ', href: '#faq' },
];

export const FOOTER_LINKS = {
  Event: [
    { label: 'About', href: '#what' },
    { label: 'Tracks', href: '#tracks' },
    { label: 'FAQ', href: '#faq' },
  ],

  Network: [
    { label: 'Alumni', href: '#' },
    { label: 'Sponsors', href: '#' },
    { label: 'Press kit', href: '#' },
  ],

  Company: [
    { label: 'Manifesto', href: '#' },
    { label: 'Code of conduct', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: '#' },
  ],
};