export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  tech: string[];
  github: string;
  demoUrl: string;
  theme: 'dark' | 'light';
  color: string;
  features: string[];
  metrics: { label: string; value: string }[];
  image?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
  skills: string[];
}

export interface TechItem {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'realtime' | 'other';
  proficiency: number; // percentage
  experienceYears: number;
}

export const PROJECTS: Project[] = [
  {
    id: 'alcaptrade',
    title: 'ALCapTrade',
    tagline: 'Interactive Trading & Analytics',
    description: 'A modern trading dashboard inspired by professional crypto and fintech platforms. Built with React and TypeScript, the project focuses on real-time market visualization, trading analytics, responsive layouts, and clean dashboard architecture.',
    longDescription: 'A modern trading dashboard inspired by professional crypto and fintech platforms. Built with React and TypeScript, the project focuses on real-time market visualization, trading analytics, responsive layouts, and clean dashboard architecture.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    github: 'https://github.com/11alexandro/ALCapTrade',
    demoUrl: 'https://aicaptrade.vercel.app',
    theme: 'dark',
    color: '#10B981',
    image: '/src/assets/images/ALCapTradeCard.jpeg',
    features: [
      'Interactive trading dashboard',
      'Market analytics and performance tracking',
      'Responsive UI for desktop and mobile',
      'Reusable React components',
      'Modern fintech-inspired user experience'
    ],
    metrics: [
      { label: 'Slippage', value: '< 0.01%' },
      { label: 'Latency', value: 'Low' },
      { label: 'UI Frame Rate', value: '60 FPS' }
    ]
  },
  {
    id: 'algovernance',
    title: 'ALCapital Governance',
    tagline: 'Real-time DAO Voting Systems',
    description: 'A real-time governance dashboard inspired by DAO voting systems. Users can create proposals, cast votes, monitor participation, and track governance activity through live analytics and WebSocket-powered updates.',
    longDescription: 'A real-time governance dashboard inspired by DAO voting systems. Users can create proposals, cast votes, monitor participation, and track governance activity through live analytics and WebSocket-powered updates.',
    tech: ['React', 'TypeScript', 'MongoDB', 'Socket.IO', 'Node.js'],
    github: 'https://github.com/11alexandro/ALCapital-Governance',
    demoUrl: 'https://alcapital-governance-dashboard.vercel.app',
    theme: 'dark',
    color: '#8B5CF6',
    image: '/src/assets/images/ALCapitalGovernanceCard.jpeg',
    features: [
      'Proposal creation and management',
      'Real-time voting updates',
      'Governance analytics dashboard',
      'MongoDB-backed data storage',
      'WebSocket communication with Socket.IO'
    ],
    metrics: [
      { label: 'Treasury TVL', value: '$18.4M' },
      { label: 'Sync Rate', value: '< 50ms' },
      { label: 'Active proposal', value: '#028' }
    ]
  },
  {
    id: 'alcryptoplay',
    title: 'ALCrypto-Pay',
    tagline: 'Freelance Milestone Escrow Payments',
    description: 'A crypto escrow platform designed for freelancers and clients. Users can create jobs, manage escrow transactions, track balances, and simulate secure payment workflows through a modern Web3-inspired interface.',
    longDescription: 'A crypto escrow platform designed for freelancers and clients. Users can create jobs, manage escrow transactions, track balances, and simulate secure payment workflows through a modern Web3-inspired interface.',
    tech: ['React', 'Node.js', 'MongoDB', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/11alexandro/ALCrypto-Pay',
    demoUrl: 'https://aicrypto-pay.vercel.app',
    theme: 'light',
    color: '#3B82F6',
    image: '/src/assets/images/ALCryptoPayCard.jpeg',
    features: [
      'Escrow payment workflow',
      'Pending and withdrawable balance tracking',
      'Job and transaction management',
      'MongoDB data persistence',
      'Responsive user interface'
    ],
    metrics: [
      { label: 'Escrow Volume', value: '$36.2k' },
      { label: 'Core Version', value: 'React 19' },
      { label: 'Confirmation', value: 'Instant' }
    ]
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'exp1',
    role: 'Independent Developer & Designer',
    company: 'Self-Directed Projects',
    period: '2022 - Present',
    location: 'Remote',
    bullets: [
      'Designed and developed multiple startup-style fintech and Web3 projects independently.',
      'Created responsive interfaces and dashboard systems using React, JavaScript, HTML, and CSS.',
      'Applied modern UI/UX principles to improve usability and visual consistency.',
      'Used AI-assisted development workflows to accelerate prototyping and iteration.'
    ],
    skills: ['React', 'TypeScript', 'Node.js', 'Express.js', 'REST APIs', 'Java', 'Git', 'GitHub', 'AI Development Tools', 'Vercel']
  }
];

export const TECH_STACK: TechItem[] = [
  { name: 'React.js', category: 'frontend', proficiency: 82, experienceYears: 2 },
  { name: 'TypeScript', category: 'frontend', proficiency: 75, experienceYears: 1 },
  { name: 'JavaScript (ES6+)', category: 'frontend', proficiency: 85, experienceYears: 2 },
  { name: 'Node.js', category: 'backend', proficiency: 74, experienceYears: 1 },
  { name: 'Express.js', category: 'backend', proficiency: 76, experienceYears: 1 },
  { name: 'REST APIs', category: 'backend', proficiency: 80, experienceYears: 2 },
  { name: 'Tailwind CSS', category: 'frontend', proficiency: 88, experienceYears: 2 },
  { name: 'WebSockets / Socket.io', category: 'realtime', proficiency: 72, experienceYears: 1 },
  { name: 'MongoDB', category: 'database', proficiency: 70, experienceYears: 1 },
  { name: 'Mongoose', category: 'database', proficiency: 68, experienceYears: 1 },
];
