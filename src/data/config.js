// ─────────────────────────────────────────────────────────────
// Everything in this file is safe to edit. Nothing in /components
// should need to change when you update your info here.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Mary Jane O. Tasan',
  title: 'Full-Stack Developer',
  tagline:
    'Building reliable, user-focused applications and solving real-world problems through code.',
  location: 'Philippines · Open to remote',
  email: 'mjocariza17@gmail.com',
  linkedin: 'https://linkedin.com/in/mary-jane-ocariza-36bb87200',
  github: 'https://github.com/Ocariza23',
  intro:
    "I'm a software developer with experience building and maintaining a real-world remittance system used by banking clients — developing new features, resolving production issues, and integrating APIs and databases that move money between institutions.",
  focus: [
    'Writing clean, maintainable code I can hand off or come back to',
    'Solving problems in systems that already have real users depending on them',
    'Picking up new tools and languages as the work requires it',
    'Working with financial transaction data where accuracy is non-negotiable',
  ],
}

// Ledger panel in the hero — a small stylised feed of message types
// Mary Jane actually works with (ISO 20022), not literal transaction data.
export const ledgerFeed = [
  { code: 'PACS.008', label: 'Customer credit transfer', status: 'processing' },
  { code: 'PACS.002', label: 'Payment status report', status: 'settled' },
  { code: 'CAMT.056', label: 'Payment cancellation request', status: 'settled' },
  { code: 'PACS.009', label: 'Financial institution transfer', status: 'settled' },
]

export const skills = [
  {
    group: 'Frontend',
    items: ['JavaScript', 'React', 'HTML', 'CSS'],
  },
  {
    group: 'Backend',
    items: ['Java', 'C#', '.NET', 'PHP', 'Spring Boot', 'REST APIs'],
  },
  {
    group: 'Enterprise & Application Servers',
    items: ['Apache Tomcat', 'Oracle WebLogic'],
  },
  {
    group: 'Messaging & Caching',
    items: ['Apache Kafka', 'Redis'],
  },
  {
    group: 'Databases',
    items: ['SQL Server', 'MySQL', 'phpMyAdmin'],
  },
  {
    group: 'Testing',
    items: ['JUnit', 'Postman', 'Functional Testing', 'API Testing'],
  },
  {
    group: 'Tools & Practices',
    items: ['Git', 'GitHub', 'Redmine', 'Agile/Scrum'],
  },
]

export const experience = [
  {
    role: 'Full Stack Software Engineer (Web Developer)',
    company: 'NCore Systems',
    period: 'Feb 2023 — Present',
    stack: 'C#/ASP.NET, Java, SQL Server, REST APIs, ISO 20022, XML',
    points: [
      'Own four core workflows — remittance, payment processing, reconciliation, and outward remittance — end to end across a C#/.NET frontend and Java backend, from design through QA and deployment.',
      'Design and build Java REST APIs and ISO 20022 payment messaging (PACS.008, PACS.009, PACS.002, CAMT) so banking platforms can exchange fund-transfer instructions in a standards-compliant format.',
      'Build the C#/ASP.NET frontend for remittance and reconciliation workflows, wiring it to Java backend services to support transactions end to end.',
      'Build XML mapping, validation, and transformation pipelines for interbank integrations with China Bank and LandBank of the Philippines.',
      'Track down and fix defects in legacy banking modules, and tune SQL Server stored procedures to speed up high-volume transaction queries.',
      'Coordinate deployments and requirements with business analysts, QA engineers, and stakeholders across a multi-module banking platform.',
    ],
  },
  {
    role: 'Java Development Engineer Trainee / Team Lead',
    company: 'Innovations Group',
    period: 'Jun 2022 — Jan 2023',
    stack: 'Java, Spring Boot, SQL, REST APIs, Agile',
    points: [
      'Built authentication, authorization, and user-management modules with Java, Spring Boot, and SQL, following secure backend practices in a structured engineering program.',
      'Selected to lead a 6-person trainee team — ran sprint planning, mentored peers on Java/Spring Boot fundamentals, and was the primary point of contact for instructors and senior engineers.',
      "Pushed for stronger code review and testing habits across the team's deliverables.",
    ],
  },
]

// Replace these with your own projects — keep the same shape
// (name, description, tags, github, demo, tone) so the cards keep working.
export const projects = [
  {
    name: 'Grade 3 Math CAI System',
    description:
      'A lesson-delivery and assessment platform built for remote learning, developed with a small team and validated directly with teachers and students.',
    tags: ['PHP', 'Bootstrap', 'XAMPP'],
    github: 'https://github.com/Ocariza23',
    demo: '',
    tone: 'real',
  },
  {
    name: 'Project name',
    description:
      'Short description of what the project does, who it is for, and the problem it solves. Swap this out for one of your own builds.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    github: '',
    demo: '',
    tone: 'placeholder',
  },
  {
    name: 'Project name',
    description:
      'Short description of what the project does, who it is for, and the problem it solves. Swap this out for one of your own builds.',
    tags: ['Java', 'Spring Boot', 'MySQL'],
    github: '',
    demo: '',
    tone: 'placeholder',
  },
  {
    name: 'Project name',
    description:
      'Short description of what the project does, who it is for, and the problem it solves. Swap this out for one of your own builds.',
    tags: ['JavaScript', 'REST API'],
    github: '',
    demo: '',
    tone: 'placeholder',
  },
]

// Edit these numbers as they become true — keep them honest.
export const stats = [
  { value: '4+', label: 'Years of experience' },
  { value: '4', label: 'ISO 20022 message types worked with' },
  { value: '2', label: 'Interbank integrations in progress' },
  { value: '6', label: 'Engineers mentored as a trainee lead' },
]

export const nav = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]
