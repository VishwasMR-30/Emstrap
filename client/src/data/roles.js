export const perks = [
  'Top-tier comprehensive health insurance',
  'Modern hardware & equipment budget',
  'Competitive compensation & equity',
  'High-agency mission with lifesaving impact',
]

export const roles = [
  {
    id: 'senior-backend',
    dept: 'Backend Engineering',
    level: 'Senior (4–7 Yrs)',
    location: 'Bengaluru / Hybrid',
    title: 'Senior Backend & Distributed Systems Engineer',
    summary:
      'Scale our high-throughput WebSocket gateway, live ambulance GPS ingestion pipelines, and multi-agency dispatch queues. High-concurrency Go and Node.js expertise required.',
    about:
      "You will own the real-time backbone of EMSTRAP: the services that carry an alert from a citizen's phone to the right ambulance, hospital and control room within a second.",
    responsibilities: [
      'Scale the WebSocket gateway that streams live incident and ambulance updates',
      'Build and maintain GPS ingestion pipelines for ambulance fleets',
      'Design multi-agency dispatch queues with strong delivery guarantees',
      'Track latency and reliability, and lead incident reviews',
    ],
    requirements: [
      '4–7 years building backend systems at scale',
      'Strong Go and Node.js experience with high-concurrency workloads',
      'Solid grasp of distributed systems, queues and caching',
      'Comfort owning production systems, including on-call',
    ],
    tools: ['Go', 'Node.js', 'WebSockets', 'Redis', 'PostgreSQL', 'Docker'],
  },
  {
    id: 'ai-routing',
    dept: 'AI & Spatial Algorithms',
    level: 'Mid–Senior (3–6 Yrs)',
    location: 'Bengaluru (HQ)',
    title: 'AI & Spatial Routing Algorithm Researcher',
    summary:
      'Design dynamic green corridor traffic signal preemption algorithms and automated patient-to-hospital triage models using graph theory, Dijkstra/A*, and geospatial neural networks.',
    about:
      'You will research and ship the algorithms that clear a path for ambulances and match every patient with the right hospital.',
    responsibilities: [
      'Design green corridor signal preemption algorithms',
      'Build patient-to-hospital triage and matching models',
      'Test routing on real and simulated city traffic data',
      'Document results and benchmarks for the engineering team',
    ],
    requirements: [
      '3–6 years in applied machine learning or algorithm design',
      'Strong graph theory skills, including Dijkstra and A*',
      'Experience with geospatial data and routing',
      'Fluent in Python and clear in technical writing',
    ],
    tools: ['Python', 'PyTorch', 'NetworkX', 'PostGIS', 'OpenStreetMap data'],
  },
  {
    id: 'mobile-lead',
    dept: 'Mobile Engineering',
    level: 'Lead (5+ Yrs)',
    location: 'Bengaluru / Remote',
    title: 'Lead Mobile Engineer (Emergency SOS & Telemetry)',
    summary:
      'Lead the architecture of our mission-critical citizen SOS and paramedic mobile applications. Must deliver offline-first sync, background telemetry, and sub-second push notifications.',
    about:
      'You will lead the mobile team that builds the apps people open on the worst day of their lives, and the paramedic apps that keep ambulances connected.',
    responsibilities: [
      'Own the architecture of the citizen SOS and paramedic apps',
      'Deliver offline-first data sync that works on weak networks',
      'Build reliable background location telemetry',
      'Mentor engineers and set quality standards for releases',
    ],
    requirements: [
      '5+ years of mobile development, with apps shipped at scale',
      'Deep knowledge of background execution and battery limits on Android and iOS',
      'Experience designing offline-first sync',
      'Experience leading or mentoring a small team',
    ],
    tools: ['React Native', 'Kotlin', 'Swift', 'SQLite', 'Push notifications', 'WebSockets'],
  },
  {
    id: 'ops-lead',
    dept: 'Healthcare Operations',
    level: 'Lead (4–8 Yrs)',
    location: 'Bengaluru (On-Site)',
    title: 'Emergency Operations & Hospital Network Lead',
    summary:
      'Build and expand relationships with major hospital networks, trauma centers, and municipal 112 emergency services. Oversee deployment training and operational SLAs.',
    about:
      'You will grow the network of hospitals and emergency services that EMSTRAP connects, and make sure every deployment runs smoothly.',
    responsibilities: [
      'Onboard hospital networks, trauma centers and municipal 112 services',
      'Run deployment training for hospital and control-room staff',
      'Own operational SLAs and report on them regularly',
      'Gather field feedback and share it with the product team',
    ],
    requirements: [
      '4–8 years in healthcare operations, EMS or public safety',
      'Strong stakeholder management and negotiation skills',
      'Comfortable working on-site with hospitals and field teams',
      'Clear communicator in English, with local language skills a plus',
    ],
    tools: ['Dispatch dashboards', 'Spreadsheets & BI reports', 'CRM tools'],
  },
  {
    id: 'pm-intern',
    dept: 'Product Management',
    level: '6 Months Internship',
    location: 'Bengaluru (HQ)',
    title: 'Product Management Intern (Emergency Logistics)',
    summary:
      'Work alongside our founding team to analyze field dispatch metrics, interview paramedics and ER directors, and define requirements for next-gen dispatch modules.',
    about:
      'You will work directly with the founding team and learn how emergency dispatch products are researched, defined and shipped.',
    responsibilities: [
      'Analyze field dispatch metrics and spot patterns',
      'Interview paramedics and ER directors about their workflow',
      'Write clear requirements for next-gen dispatch modules',
      'Support sprint planning with engineering',
    ],
    requirements: [
      'Currently studying or recently graduated in any discipline',
      'Analytical mindset and clear writing',
      'Curiosity about healthcare and logistics',
      'Able to work from Bengaluru for 6 months',
    ],
    tools: ['Spreadsheets & basic SQL', 'Figma', 'Issue trackers'],
  },
]
