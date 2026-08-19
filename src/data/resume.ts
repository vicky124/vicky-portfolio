export const profile = {
  name: 'Vicky Jadhav',
  title: 'Senior Full-Stack Developer / Technical Lead',
  tagline: 'React.js · Node.js · AWS · TypeScript',
  location: 'Pune, Maharashtra, India',
  email: 'jadhavvicky124@gmail.com',
  phone: '+91 8600747531',
  linkedin: 'https://linkedin.com/in/vicky-jadhav',
  github: 'https://github.com/jadhav-vicky',
  summary:
    "Senior Full-Stack Developer / Technical Lead with 9+ years of experience architecting, building, and scaling enterprise web and mobile applications using React.js, Node.js, TypeScript, GraphQL, and AWS. Leading offshore engineering teams through the full software development lifecycle, delivering serverless and microservices platforms for global enterprise clients. AWS Certified Solutions Architect – Professional with deep expertise in API design, cloud architecture, performance optimization, and CI/CD automation. Early adopter of AI-assisted development tools.",
}

export const stats = [
  { label: 'Years of experience', value: '9+' },
  { label: 'Requests handled / day', value: '1M+' },
  { label: 'Engineers mentored', value: '5+' },
  { label: 'Duplicate code eliminated', value: '~40%' },
]

export const skillGroups = [
  {
    title: 'Frontend',
    skills: ['JavaScript', 'TypeScript', 'React.js', 'Vue.js', 'Angular', 'Styled Components', 'Micro Frontends', 'Responsive Web Design'],
  },
  {
    title: 'Backend & APIs',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'Apollo', 'Microservices', 'Serverless Architecture', 'JWT Authentication'],
  },
  {
    title: 'Cloud & Infrastructure (AWS)',
    skills: ['Lambda', 'API Gateway', 'S3', 'DynamoDB', 'RDS', 'Cognito', 'ECS', 'EKS', 'SQS', 'SNS', 'Step Functions', 'CloudWatch', 'KMS', 'IAM', 'CloudFormation', 'AWS CDK', 'Terraform'],
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'DynamoDB', 'Firebase'],
  },
  {
    title: 'DevOps & Tooling',
    skills: ['GitHub', 'Bitbucket', 'CI/CD Pipelines', 'JFrog Artifactory', 'Turborepo', 'Monorepo', 'JIRA', 'Docker', 'Kubernetes'],
  },
  {
    title: 'Testing & QA',
    skills: ['Jest', 'Jasmine', 'Mocha', 'Chai', 'Unit Testing', 'Integration Testing', 'TDD'],
  },
  {
    title: 'AI-Assisted Development',
    skills: ['Copilot', 'Cursor', 'Claude', 'AI-accelerated development', 'Code review & refactoring'],
  },
  {
    title: 'Leadership & Methodology',
    skills: ['Technical Leadership', 'Team Mentoring', 'Architecture Ownership', 'Agile/Scrum', 'Stakeholder Management', 'Code Review Standards'],
  },
]

export type Experience = {
  company: string
  location: string
  role: string
  period: string
  projects: {
    name: string
    client?: string
    role?: string
    team?: string
    period?: string
    stack?: string
    bullets: string[]
  }[]
}

export const experience: Experience[] = [
  {
    company: 'Synechron Technologies Pvt. Ltd.',
    location: 'Pune',
    role: 'Senior Associate / Technical Lead',
    period: 'Apr 2022 – Present',
    projects: [
      {
        name: 'PRISM — Service Job Lifecycle Platform',
        client: 'Asurion',
        role: 'Technical Lead',
        team: '8',
        period: 'Jan 2023 – Present',
        stack: 'Node.js, TypeScript, React.js, GraphQL, AWS Lambda, PostgreSQL, Turborepo, PNPM, JFrog, CI/CD',
        bullets: [
          'Spearheaded offshore architecture, development, and deployment of an enterprise platform managing the complete repair/replacement job lifecycle for mobility devices at scale, serving as the primary technical owner across the delivery pipeline.',
          'Architected end-to-end AWS infrastructure (Lambda, API Gateway, PostgreSQL, Cognito) and defined the CI/CD pipeline strategy, enabling reliable, repeatable deployments across environments.',
          'Designed shared component and library packages within a Turborepo monorepo adopted by 3+ engineering teams, eliminating approximately 40% of duplicated code and standardizing development patterns org-wide.',
          'Built and optimized GraphQL/Node.js APIs handling 1M+ requests/day with p95 latency under 200ms, powering job creation, kitting, technician assignment, delivery, repair, and inventory modules.',
          "Drove team-wide adoption of Copilot, Claude, and Cursor's AI capabilities to streamline engineering workflow — automating unit test generation, accelerating code review with AI-assisted diff analysis, and generating/maintaining technical documentation — reducing manual review effort by an estimated 20-25%.",
          'Defined coding standards, PR review processes, and release cadence; mentored 5+ junior engineers across the full delivery lifecycle.',
        ],
      },
      {
        name: 'FSL — Kitting & Parts Management',
        client: 'Asurion',
        role: 'Senior Developer',
        team: '3',
        period: 'Apr 2022 – Dec 2022',
        stack: 'React.js, TypeScript, Styled Components, Node.js, AWS Lambda, MySQL',
        bullets: [
          'Architected the React.js frontend for a kitting workflow used by multiple enterprise clients to manage appliances and parts, improving page load performance by approximately 35% through optimized rendering and state management.',
          'Built and deployed serverless APIs on AWS Lambda powering UI features and leadership dashboards used by 15+ stakeholders, cutting report generation time from minutes to seconds.',
          'Delivered end-to-end parts kitting, returns processing, technician part tracking, and real-time stock monitoring features, reducing manual reconciliation effort by approximately 50%.',
        ],
      },
    ],
  },
  {
    company: 'Cybage Software Pvt. Ltd.',
    location: 'Pune',
    role: 'Software Developer',
    period: 'Jun 2020 – Mar 2022',
    projects: [
      {
        name: 'TaxAct Assisted Technology',
        client: 'TaxAct',
        team: '6',
        period: 'Jun 2021 – Mar 2022',
        stack: 'React.js',
        bullets: [
          'Developed a booking module for expert-assisted US tax filing, including real-time staff availability checks and call scheduling, supporting thousands of seasonal filers during peak tax season.',
          'Built responsive UI components and integrated REST APIs, writing comprehensive unit tests with Jest and maintaining 90%+ code coverage during high-traffic filing periods.',
        ],
      },
    ],
  },
  {
    company: 'MJB Technology Solutions',
    location: 'Hinjewadi, Pune',
    role: 'Associate Software Developer',
    period: 'Jan 2019 – May 2020',
    projects: [
      {
        name: 'Experience America — Educational Tourism Platform',
        client: 'Experience America US',
        team: '10',
        period: 'Apr 2019 – May 2020',
        stack: 'React.js, React Native',
        bullets: [
          'Built a React web app and React Native hybrid mobile apps to manage tours, events, geofences, and multi-role user assignments; led direct client interaction and Scrum planning as the primary technical point of contact.',
          'Implemented background location tracking and geofencing (Ionic Cordova) alongside group chat with location and document sharing across 3 user types, enabling real-time coordination during international trips.',
        ],
      },
      {
        name: 'Monga StrayField — IoT Monitoring Dashboard',
        client: 'Experience America US',
        team: '4',
        period: 'Jan 2019 – Mar 2019',
        stack: 'Angular',
        bullets: [
          'Built a real-time Angular dashboard visualizing machine parameters with push notifications and alerting, giving operators immediate visibility into equipment status.',
          'Developed REST APIs for web-to-cloud communication, enabling reliable data sync between field devices and the monitoring dashboard.',
        ],
      },
    ],
  },
  {
    company: 'WebWorx India',
    location: 'Pune',
    role: 'Web Developer',
    period: 'Feb 2017 – Dec 2018',
    projects: [
      {
        name: 'Client Web Applications',
        bullets: [
          'Developed responsive web UI screens with Node, Angular, and JavaScript (ES6), integrating RESTful backend services for client web applications.',
          'Built reusable UI components and collaborated with designers to deliver pixel-perfect, cross-browser interfaces, improving page consistency across 5+ modules.',
        ],
      },
    ],
  },
]

export const certifications = [
  { name: 'AWS Certified Solutions Architect – Professional', issuer: 'Amazon Web Services' },
  { name: 'Claude Certified Architect – Foundations', issuer: 'Anthropic' },
]

export const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    grade: 'First Class',
    year: '2017',
    school: 'Modern College of Arts, Science and Commerce, Shivajinagar, Pune',
    university: 'Savitribai Phule Pune University (SPPU)',
  },
  {
    degree: 'Bachelor of Computer Science (BCS)',
    grade: 'First Class',
    year: '2014',
    school: 'New Arts, Commerce and Science College, Parner, Ahilyanagar',
    university: 'Savitribai Phule Pune University (SPPU)',
  },
]
