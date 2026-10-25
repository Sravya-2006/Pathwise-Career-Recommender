/**
 * Recommendation engine
 * Pathway catalogue, synthetic peer records, skill matching and hybrid scoring.
 */

/* Deterministic, transparent research baseline. All peer records are synthetic. */
const MODEL_SKILLS = [
  'Python',
  'SQL',
  'Statistics',
  'Machine Learning',
  'Linear Algebra',
  'Deep Learning',
  'Research Methods',
  'JavaScript',
  'React',
  'Node.js',
  'Distributed Systems',
  'Cloud',
  'Linux',
  'Networking',
  'Java',
  'Communication',
];
const SKILL_GROUPS = {
  Programming: [
    'Python',
    'Java',
    'C',
    'C++',
    'C#',
    'R',
    'Go',
    'Rust',
    'Kotlin',
    'Swift',
    'TypeScript',
    'JavaScript',
    'Data Structures',
    'Algorithms',
    'Object-Oriented Programming',
  ],
  'Data & AI': [
    'SQL',
    'Statistics',
    'Machine Learning',
    'Deep Learning',
    'Linear Algebra',
    'Pandas',
    'NumPy',
    'Scikit-learn',
    'TensorFlow',
    'PyTorch',
    'Natural Language Processing',
    'Computer Vision',
    'Generative AI',
    'Data Visualization',
    'Power BI',
    'Tableau',
    'Excel',
    'Data Cleaning',
  ],
  'Web & mobile': [
    'HTML',
    'CSS',
    'React',
    'Node.js',
    'Angular',
    'Vue.js',
    'Django',
    'Flask',
    'FastAPI',
    'Spring Boot',
    'REST APIs',
    'GraphQL',
    'Flutter',
    'React Native',
    'Android Development',
    'UI/UX Design',
    'Figma',
  ],
  'Cloud & systems': [
    'Cloud',
    'AWS',
    'Azure',
    'Google Cloud',
    'Linux',
    'Networking',
    'Distributed Systems',
    'Docker',
    'Kubernetes',
    'Git',
    'CI/CD',
    'Terraform',
    'Cybersecurity',
    'Database Design',
    'MongoDB',
    'PostgreSQL',
    'MySQL',
    'Software Testing',
  ],
  'Research & professional': [
    'Research Methods',
    'Communication',
    'Technical Writing',
    'Problem Solving',
    'Critical Thinking',
    'Teamwork',
    'Leadership',
    'Project Management',
    'Public Speaking',
    'Time Management',
    'Literature Review',
    'Experimental Design',
    'Academic Writing',
    'Entrepreneurship',
  ],
};
SKILL_GROUPS['Government & business'] = [
  'Quantitative Aptitude',
  'Logical Reasoning',
  'English Comprehension',
  'General Awareness',
  'Tamil',
  'Financial Literacy',
  'Digital Marketing',
];
const SKILLS = Object.values(SKILL_GROUPS).flat();
const PATHS = [
  {
    id: 'data',
    name: 'Data Scientist',
    type: 'Job placement',
    area: 'Data & AI',
    skills: ['Python', 'SQL', 'Statistics', 'Machine Learning'],
    foundation: ['Linear Algebra', 'Distributed Systems'],
    months: 6,
    cost: 25000,
    interest: 'Data & AI',
    icon: '◈',
    desc: 'Turn complex data into decisions that matter.',
    steps: [
      'Build a foundation in statistics and SQL',
      'Create an end-to-end predictive analytics project',
      'Practice case studies and apply to entry-level roles',
    ],
  },
  {
    id: 'ms',
    name: 'M.S. / M.Tech in AI',
    type: 'Higher studies',
    area: 'Research & discovery',
    skills: ['Python', 'Linear Algebra', 'Machine Learning', 'Research Methods'],
    foundation: ['Statistics', 'Deep Learning'],
    months: 24,
    cost: 250000,
    interest: 'Research',
    icon: '⌘',
    desc: 'Go deeper into intelligent systems and original research.',
    steps: [
      'Strengthen mathematics and read three research papers',
      'Check institution-specific eligibility, exams and funding',
      'Build a research proposal and prepare applications',
    ],
  },
  {
    id: 'full',
    name: 'Full-Stack Developer',
    type: 'Job placement',
    area: 'Software & products',
    skills: ['JavaScript', 'React', 'Node.js', 'SQL'],
    foundation: ['Distributed Systems', 'Cloud'],
    months: 6,
    cost: 18000,
    interest: 'Software',
    icon: '⌗',
    desc: 'Build useful products from interface to infrastructure.',
    steps: [
      'Build a responsive frontend and REST API',
      'Ship a tested full-stack project with a database',
      'Prepare coding interviews and a focused portfolio',
    ],
  },
  {
    id: 'mlcert',
    name: 'Applied ML Certification',
    type: 'Certification',
    area: 'Data & AI',
    skills: ['Python', 'Statistics', 'Machine Learning'],
    foundation: ['Linear Algebra', 'SQL'],
    months: 4,
    cost: 15000,
    interest: 'Data & AI',
    icon: '◇',
    desc: 'Build practical ML skills through structured project work.',
    steps: [
      'Review Python and fundamental statistics',
      'Complete a structured ML course and capstone',
      'Validate skills on an unseen dataset and publish results',
    ],
  },
  {
    id: 'cloud',
    name: 'Cloud Engineer',
    type: 'Job placement',
    area: 'Infrastructure',
    skills: ['Cloud', 'Linux', 'Networking', 'Python'],
    foundation: ['Distributed Systems', 'SQL'],
    months: 8,
    cost: 30000,
    interest: 'Infrastructure',
    icon: '☁',
    desc: 'Design and maintain the systems behind modern applications.',
    steps: [
      'Practice Linux, networking and cloud fundamentals',
      'Deploy a monitored application with infrastructure as code',
      'Prepare scenario interviews and entry-level applications',
    ],
  },
  {
    id: 'csms',
    name: 'M.Tech in Computer Science',
    type: 'Higher studies',
    area: 'Software & systems',
    skills: ['Java', 'Linear Algebra', 'Research Methods', 'Distributed Systems'],
    foundation: ['Statistics', 'Linux'],
    months: 24,
    cost: 200000,
    interest: 'Software',
    icon: '⌘',
    desc: 'Develop deeper foundations in algorithms and computing systems.',
    steps: [
      'Review algorithms, mathematics and core CS',
      'Research entrance requirements and funded programmes',
      'Select a systems or computing research specialization',
    ],
  },
  {
    id: 'cloudcert',
    name: 'Cloud Foundations Certification',
    type: 'Certification',
    area: 'Infrastructure',
    skills: ['Linux', 'Networking', 'Cloud'],
    foundation: ['Python', 'Distributed Systems'],
    months: 3,
    cost: 12000,
    interest: 'Infrastructure',
    icon: '◇',
    desc: 'Create a structured starting point for cloud infrastructure.',
    steps: [
      'Learn networking and Linux fundamentals',
      'Build hands-on cloud labs within a spending limit',
      'Review official exam requirements and practice objectives',
    ],
  },
  {
    id: 'research',
    name: 'M.S. in Data Science',
    type: 'Higher studies',
    area: 'Data & research',
    skills: ['Python', 'SQL', 'Statistics', 'Research Methods'],
    foundation: ['Linear Algebra', 'Machine Learning'],
    months: 24,
    cost: 350000,
    interest: 'Research',
    icon: '⌘',
    desc: 'Connect statistical foundations with advanced data research.',
    steps: [
      'Consolidate statistics and computational foundations',
      'Compare programmes, prerequisites and funding',
      'Prepare a reproducible research project and applications',
    ],
  },
];
PATHS.push(
  ...[
    {
      id: 'ssc',
      name: 'SSC Graduate-Level Roles',
      type: 'Government jobs',
      area: 'Public service',
      interest: 'Public service',
      skills: [
        'Quantitative Aptitude',
        'Logical Reasoning',
        'English Comprehension',
        'General Awareness',
      ],
      foundation: ['Time Management', 'Communication'],
      months: 12,
      cost: 15000,
      desc: 'Prepare for graduate-level recruitment examinations administered by SSC.',
      icon: '\u25ce',
      steps: [],
    },
    {
      id: 'tnpsc',
      name: 'Tamil Nadu State Services',
      type: 'Government jobs',
      area: 'Public service',
      interest: 'Public service',
      skills: [
        'General Awareness',
        'Tamil',
        'Logical Reasoning',
        'Quantitative Aptitude',
      ],
      foundation: ['Communication', 'Time Management'],
      months: 12,
      cost: 15000,
      desc: 'Explore state public-service recruitment through TNPSC.',
      icon: '\u25ce',
      steps: [],
    },
    {
      id: 'upsc',
      name: 'Civil Services Preparation',
      type: 'Government jobs',
      area: 'Public service',
      interest: 'Public service',
      skills: [
        'General Awareness',
        'Critical Thinking',
        'Academic Writing',
        'Research Methods',
      ],
      foundation: ['Communication', 'Time Management'],
      months: 18,
      cost: 30000,
      desc: 'Explore a structured preparation route for the UPSC Civil Services Examination.',
      icon: '\u25ce',
      steps: [],
    },
    {
      id: 'startup',
      name: 'Technology Startup Founder',
      type: 'Entrepreneurship',
      area: 'Business & ventures',
      interest: 'Business & ventures',
      skills: [
        'Entrepreneurship',
        'Problem Solving',
        'Communication',
        'Project Management',
      ],
      foundation: ['Leadership', 'Financial Literacy'],
      months: 6,
      cost: 40000,
      desc: 'Validate a customer problem and test a small technology business.',
      icon: '\u2197',
      steps: [],
    },
    {
      id: 'agency',
      name: 'Digital Services Business',
      type: 'Entrepreneurship',
      area: 'Business & ventures',
      interest: 'Business & ventures',
      skills: [
        'Project Management',
        'Communication',
        'Digital Marketing',
        'Financial Literacy',
      ],
      foundation: ['Leadership', 'Entrepreneurship'],
      months: 6,
      cost: 25000,
      desc: 'Build a small service business around a clear customer need.',
      icon: '\u2197',
      steps: [],
    },
    {
      id: 'freedev',
      name: 'Freelance Web Developer',
      type: 'Freelancing',
      area: 'Independent work',
      interest: 'Independent work',
      skills: ['JavaScript', 'React', 'HTML', 'CSS'],
      foundation: ['Communication', 'Project Management'],
      months: 4,
      cost: 10000,
      desc: 'Deliver scoped websites and web applications for clients.',
      icon: '\u2197',
      steps: [],
    },
    {
      id: 'freedata',
      name: 'Freelance Data Analyst',
      type: 'Freelancing',
      area: 'Independent work',
      interest: 'Independent work',
      skills: ['SQL', 'Excel', 'Data Visualization', 'Communication'],
      foundation: ['Statistics', 'Project Management'],
      months: 4,
      cost: 10000,
      desc: 'Turn client datasets into clear reports and useful dashboards.',
      icon: '\u2197',
      steps: [],
    },
  ]
);
const PATH_TYPES = [...new Set(PATHS.map((p) => p.type))];
const INTERESTS = [...new Set(PATHS.map((p) => p.interest))];
for (const p of PATHS)
  for (const s of [...p.skills, ...p.foundation])
    if (!MODEL_SKILLS.includes(s)) MODEL_SKILLS.push(s);
let seed = 418;
function rand() {
  seed = (seed * 1664525 + 1013904223) >>> 0;
  return seed / 4294967296;
}
const PEERS = Array.from({ length: 160 }, (_, i) => {
  const base = PATHS[i % PATHS.length];
  const skills = MODEL_SKILLS.filter(
    (s) => rand() < (base.skills.includes(s) ? 0.88 : 0.12)
  );
  const ratings = {};
  PATHS.forEach((p) => {
    if (rand() < 0.6)
      ratings[p.id] = Math.max(
        1,
        Math.min(
          5,
          1 +
            3 * (p.skills.filter((s) => skills.includes(s)).length / p.skills.length) +
            rand()
        )
      );
  });
  return {
    id: 'SYN-' + String(i + 1).padStart(3, '0'),
    skills,
    cgpa: 6 + rand() * 4,
    interest: base.interest,
    ratings,
  };
});
function cosine(a, b) {
  const shared = a.filter((s) => b.includes(s)).length;
  return a.length && b.length ? shared / Math.sqrt(a.length * b.length) : 0;
}
function recommend(profile, { cold = false, alpha = 0.65 } = {}) {
  profile = {
    ...profile,
    skills: [...new Set(profile.skills.filter((s) => MODEL_SKILLS.includes(s)))],
  };
  return PATHS.map((p) => {
    const match = p.skills.filter((s) => profile.skills.includes(s));
    const fit = cosine(profile.skills, p.skills);
    const goal = profile.goal === 'Explore all' || profile.goal === p.type ? 1 : 0.25;
    const affinity = profile.interest === p.interest ? 1 : 0.35;
    const feasible =
      (profile.budget >= p.cost ? 1 : 0.25) * 0.5 +
      (profile.months >= p.months ? 1 : 0.25) * 0.5;
    const content = 100 * (0.65 * fit + 0.15 * affinity + 0.1 * goal + 0.1 * feasible);
    const neighbors = cold
      ? []
      : PEERS.map((peer) => ({
          peer,
          sim:
            0.8 * cosine(profile.skills, peer.skills) +
            0.1 * (peer.interest === profile.interest ? 1 : 0) +
            0.1 * Math.max(0, 1 - Math.abs(peer.cgpa - profile.cgpa) / 4),
        }))
          .filter((n) => n.sim >= 0.55 && n.peer.ratings[p.id] != null)
          .sort((a, b) => b.sim - a.sim)
          .slice(0, 12);
    const weight = neighbors.reduce((a, n) => a + n.sim, 0);
    const collab = weight
      ? neighbors.reduce((a, n) => a + ((n.sim * n.peer.ratings[p.id]) / 5) * 100, 0) /
        weight
      : null;
    const effective = neighbors.length >= 3 ? alpha : 1;
    const score = effective * content + (1 - effective) * (collab || 0);
    const satisfied = neighbors.filter((n) => n.peer.ratings[p.id] >= 4).length;
    const difficulty =
      p.skills
        .filter((s) => !profile.skills.includes(s))
        .reduce((a, s) => {
          const containing = PEERS.filter((n) => n.skills.includes(s));
          const related = profile.skills.length
            ? Math.max(
                ...profile.skills.map(
                  (k) =>
                    containing.filter((n) => n.skills.includes(k)).length /
                    Math.max(1, containing.length)
                )
              )
            : 0;
          return a + 1 - related;
        }, 0) / p.skills.length;
    return {
      ...p,
      match,
      content,
      collab,
      score,
      alpha: effective,
      neighbors,
      satisfied,
      difficulty,
      missing: p.skills.filter((s) => !profile.skills.includes(s)),
      high: content >= 70 && collab >= 70 && neighbors.length >= 5,
      needsAssessment: score < 55 || profile.skills.length < 2,
    };
  }).sort((a, b) => b.score - a.score);
}
if (typeof module !== 'undefined')
  module.exports = { recommend, PATHS, PEERS, SKILLS, cosine };
