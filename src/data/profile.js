
export const profile = {
  name: 'Suraj Kumar Singh',
  role: 'Aspiring AI Engineer',
  focus: 'Data Science & Analytics Enthusiast',
  location: 'Bengaluru, India',
  educationLine: 'B.E. CSE · HKBK College of Engineering · VTU · 2024–2028',

  intro:
    'I am a Computer Science Engineering student passionate about data, technology and artificial intelligence. I enjoy building practical projects, exploring new technologies and continuously developing my technical skills.',

  about: [
    'I am pursuing B.E. in Computer Science and Engineering at HKBK College of Engineering, affiliated with Visvesvaraya Technological University.',
    'My interests include Data Analytics, Data Science and Artificial Intelligence. I am developing my foundation through programming, analytics tools, practical projects, certifications and hackathons.',
  ],

  github: 'https://github.com/surajkumarj2007-svg',
  linkedin: 'https://www.linkedin.com/in/suraj-kumar-singh-b79723390/',
  email: 'surajkumarj2007@gmail.com',
  resume: '/resume.pdf',
}

export const skillGroups = [
  {
    label: 'Programming',
    items: ['Python (Basics)', 'Java', 'C', 'JavaScript'],
  },
  {
    label: 'Web Development',
    items: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    label: 'Data Analytics',
    items: ['Excel', 'Power BI', 'DAX', 'SQL', 'Data Visualization', 'KPI Tracking'],
  },
  {
    label: 'Data Science',
    items: ['Pandas', 'NumPy', 'Machine Learning Fundamentals'],
  },
  {
    label: 'Tools',
    items: ['Git', 'GitHub'],
  },
  {
    label: 'Database',
    items: ['SQL', 'DBMS'],
  },
]

export const projects = [
  {
    id: 'instagram-insights',
    index: '01',
    title: 'Instagram Insights',
    subtitle: 'Creator Analytics Dashboard',
    status: 'Completed',
    summary:
      'An interactive Power BI dashboard built using a three-year Instagram performance dataset to explore creator and content performance.',
    points: [
      'Interactive Power BI dashboard.',
      'Three-year Instagram performance dataset.',
      'KPI cards and DAX measures.',
      'Engagement and follower growth analysis.',
      'Top-performing post analysis.',
      'Content-type comparisons.',
      'Date-range and content-type slicers.',
    ],
    tools: ['Power BI', 'DAX', 'Data Visualization'],
    github: null,
  },
  {
    id: 'sakhi-ai',
    index: '02',
    title: 'SakhiAI',
    subtitle: 'Multilingual Financial Inclusion Platform',
    status: 'Hackathon Project',
    summary:
      'An AI-focused platform designed to improve financial awareness and digital payment literacy.',
    points: [
      'UPI Payment Learning Simulator.',
      'ATM and UPI simulations.',
      'AI Financial Mentor.',
      'Voice-to-Form Assistant.',
      'Multilingual support.',
      'Offline functionality for low-connectivity environments.',
    ],
    tools: ['Artificial Intelligence', 'UPI', 'Multilingual Technology'],
    github: null,
  },
]

export const internship = {
  organisation: 'BharatCares',
  program: 'AICTE | IBM SkillsBuild',
  title: 'Data Analytics with AI',
  duration: 'Six weeks',
  detail:
    'Successfully completed a six-week virtual academic internship and IBM SkillsBuild academic component, including learning activities focused on Data Analytics with AI.',
  status: 'Completed',
}

export const certifications = [
  {
    title: 'Digital Skills: Artificial Intelligence',
    issuer: 'Accenture',
  },
  {
    title: 'Generative AI for All',
    issuer: 'Infosys Springboard',
  },
  {
    title: 'Data Analytics with AI',
    issuer: 'IBM SkillsBuild',
  },
]

export const hackathons = [
  {
    title: 'NEXORA',
    detail: 'National-level 36-hour hackathon, HKBK College of Engineering.',
  },
  {
    title: 'Aavishkar Pravah 2.0',
    detail: 'National-level hackathon.',
  },
]

export const education = [
  {
    credential: 'B.E. Computer Science and Engineering',
    school: 'HKBK College of Engineering, Bengaluru',
    meta: 'VTU · 2024–2028 · Pursuing',
  },
  {
    credential: 'Pre-University',
    school: 'New Baldwin International PU College, Bengaluru',
    meta: '92% · 2024',
  },
  {
    credential: 'Class 10, ICSE',
    school: 'Lowry Memorial Higher Secondary School, Bengaluru',
    meta: '83% · 2022',
  },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#internship' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]
