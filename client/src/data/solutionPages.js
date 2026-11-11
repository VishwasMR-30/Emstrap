// Content for every solution page. One template (SolutionPage.jsx) renders all of them.
// Section kinds: 'cards' (grid of cards), 'list' (benefits), 'steps' (numbered journey)

const c = (t, d) => ({ t, d })

const FORM_AGENCY = {
  title: 'Request Specialist Briefing',
  text: 'Connect with our deployment engineering team.',
  fields: [
    ['org', 'Organisation / Agency Name', 'text'],
    ['email', 'Official Email', 'email'],
    ['phone', 'Contact Phone', 'tel'],
    ['needs', 'Operational Needs', 'textarea'],
  ],
}

const FORM_PEOPLE = {
  title: 'Request a Specialist Briefing',
  text: 'Connect with our engineering and deployment team.',
  fields: [
    ['name', 'Your Name', 'text'],
    ['org', 'Organisation / Agency', 'text'],
    ['email', 'Official Work Email', 'email'],
    ['phone', 'Phone Number', 'tel'],
  ],
}

export const solutionPages = {
  'corporate-companies': {
    pageTitle: 'A Safer Workplace Starts With Faster Response.',
    tag: 'FOR CORPORATE COMPANIES',
    subtitle: 'EMSTRAP Shield helps organisations protect employees through integrated emergency response, medical assistance, fire safety and safety management.',
    primary: 'Explore EMSTRAP Shield',
    secondary: 'Request a Corporate Demo',
    audience: ['Employee Safety', 'Emergency Response', 'Fire Safety', 'Safety Management'],
    panel: { title: 'Corporate Shield', text: 'Instant floor marshal coordination and automated EMS dispatch across corporate campuses.' },
    sections: [
      {
        kind: 'cards', label: 'THE CHALLENGE', title: 'Companies need to prepare for workplace emergencies.',
        text: 'From medical emergencies and fire incidents to complex multi-site evacuation, corporate safety demands a coordinated, technology-driven approach.',
        items: [
          c('Employee Emergencies', 'Unpredictable incidents involving staff require an immediate, coordinated response with no room for communication gaps.'),
          c('Medical Incidents', 'Medical emergencies in the workplace need fast action and seamless coordination with ambulance and hospital services.'),
          c('Fire Incidents', 'Fire events demand organized evacuation procedures and rapid coordination with fire services to minimize harm.'),
          c('Emergency Evacuation', 'Multi-floor, multi-site facilities require structured and well-practiced evacuation protocols that workers can execute under pressure.'),
          c('Safety Training Gaps', 'Inadequate emergency training leaves employees unprepared, reducing response effectiveness when it matters most.'),
          c('Incident Reporting', 'Manual or paper-based incident records create accountability gaps and hinder post-incident analysis and compliance.'),
        ],
      },
      {
        kind: 'cards', label: 'HOW EMSTRAP HELPS', title: 'A complete platform for workplace safety and emergency response.',
        text: 'EMSTRAP Shield integrates every layer of corporate emergency preparedness — from daily safety management to live incident response.',
        items: [
          c('Employee SOS', 'One-touch emergency activation for employees to trigger immediate assistance with real-time location sharing.'),
          c('Medical Emergency Support', 'Connect employees directly to ambulance services with location data and priority routing to the nearest hospital.'),
          c('Fire Safety Management', 'Integrated fire incident management with evacuation tracking, headcount tools and fire service coordination.'),
          c('Employee Training', 'Digital safety training programs that ensure every employee is prepared and aware of emergency procedures.'),
          c('Mock Drills', 'Schedule and run structured emergency simulations with automated tracking, real-time monitoring and drill reporting.'),
          c('Safety Management', 'A centralized platform for safety policies, incident records, compliance documentation and operational dashboards.'),
        ],
      },
      {
        kind: 'list', label: 'KEY BENEFITS', title: 'Build a safer and more prepared organization.',
        text: 'EMSTRAP Shield delivers measurable improvements across every dimension of workplace safety and emergency readiness.',
        items: [
          c('Faster Emergency Response', 'Direct digital emergency activation reduces response times and closes critical gaps in coordination.'),
          c('Improved Employee Safety', 'Every employee has direct access to emergency assistance in critical moments, regardless of location.'),
          c('Better Preparedness', 'Regular digital drills and structured training build a safety-ready workforce across all sites.'),
          c('Centralized Safety Management', 'Manage all safety operations, documentation and compliance from one connected platform.'),
          c('Improved Emergency Coordination', 'Connect internal safety teams with external ambulance and emergency services seamlessly.'),
          c('Better Incident Visibility', 'Real-time incident monitoring gives safety managers complete situational awareness across all locations.'),
        ],
      },
      {
        kind: 'steps', label: 'THE EMSTRAP CORPORATE ECOSYSTEM', title: 'A connected safety cycle.',
        items: [
          c('Safety Planning', 'Policies, protocols and responsibilities defined.'),
          c('Employee Training', 'Staff trained through digital programs.'),
          c('Mock Drills', 'Simulations test readiness and identify gaps.'),
          c('Emergency Trigger', 'SOS activated or automated alert fired.'),
          c('Response & Assistance', 'Coordinated internal and external response.'),
          c('Reporting & Improvement', 'Digital records enable continuous improvement.'),
        ],
      },
    ],
    cta: { title: 'Ready to upgrade your emergency response?', text: "Talk to an EMSTRAP specialist about your organisation's specific requirements.", button: 'Schedule Briefing' },
    form: { ...FORM_PEOPLE, label: 'FOR CORPORATE COMPANIES' },
  },

  'hospitals-and-clinics': {
    pageTitle: 'Know Before the Patient Arrives.',
    tag: 'HOSPITALS & CLINICS',
    subtitle: 'EMSTRAP connects incoming ambulances directly with emergency rooms and trauma centers, streaming vital telemetry, patient details, and accurate ETAs so clinical teams can prepare before the patient arrives.',
    primary: 'Get Started',
    secondary: 'Request a Demo',
    audience: ['Trauma Centers', 'Hospitals', 'Emergency Departments', 'Day Care Clinics'],
    panel: {
      title: 'Incoming Patient', badge: 'Priority 1 Trauma Case · CRITICAL',
      rows: [
        ['Ambulance Unit', '#KA01AB1234'], ['Estimated Arrival (ETA)', '6 min (Live GPS)'], ['Alert Sent', '10:24 AM'],
        ['Clinical Condition', 'Road traffic accident - severe thoracic trauma, stabilized'],
        ['BP', '90/60'], ['HR', '118 bpm'], ['SpO2', '92%'], ['Trauma Bay Assigned', 'Bay #02 (Ventilator Ready)'],
      ],
    },
    sections: [
      {
        kind: 'cards', label: 'THE CHALLENGE', title: 'Hospitals need to be prepared before the patient arrives.',
        text: 'Without pre-arrival coordination and real-time clinical telemetry, emergency departments lose vital minutes preparing trauma teams, ICU beds, and diagnostics.',
        items: [
          c('Zero Advance Warning', 'Emergency rooms receive critical arrivals unannounced, leading to chaotic intake and delayed resuscitation.'),
          c('Manual Phone Relays', 'Paramedics struggle to relay complex vitals over noisy phone calls or radios while managing patient care.'),
          c('Unprepared Trauma Bays', 'Operating suites, CT scanners, and ICU beds are allocated only after the ambulance pulls into the bay.'),
          c('Specialist Mobilization Delays', 'On-call surgeons, cardiologists, and anesthesiologists lose the critical golden hour due to late paging.'),
          c('Crowded ER Bottlenecks', 'Lack of predictive ETA forecasting leads to ambulance diversions and overwhelmed triage bays.'),
          c('Missing Pre-Hospital Data', 'Paper handoffs and incomplete field logs hinder clinical decision-making during emergency transfers.'),
        ],
      },
      {
        kind: 'cards', label: 'HOW EMSTRAP HELPS', title: 'A connected emergency ecosystem for hospitals and clinics.',
        text: 'EMSTRAP bridges the gap between field paramedics and emergency clinical teams with real-time pre-arrival integration.',
        items: [
          c('Pre-Arrival Inbound Telemetry', 'Real-time streaming of vitals (ECG, SpO2, BP, pulse) directly from the ambulance into the ER dashboard.'),
          c('Precise Live ETA Tracking', 'Dynamic traffic-aware GPS tracking so the clinical team knows the exact second the ambulance will reach the bay.'),
          c('Advance Bed & Bay Allocation', 'Pre-allocate trauma resuscitation bays, ventilators, and surgical suites before patient arrival.'),
          c('Specialist Pre-Alerting', 'Automated paging of on-call trauma surgeons, cardiologists, and stroke teams based on injury triage score.'),
          c('Direct Paramedic-Physician Link', 'Secure clinical chat, tele-consultation, and treatment advisories between ER consultants and paramedics.'),
          c('Digital Triage & Paperless Handoff', 'Zero-delay digital handoffs that automatically populate hospital EHR with field vitals and intervention logs.'),
        ],
        callout: { tag: 'Network Load Balancing', title: 'Capacity & Resource Optimization', text: 'Multi-facility visibility for hospital networks prevents ER overload, balances intensive care admissions, and reduces emergency diversion rates.' },
      },
      {
        kind: 'cards', label: 'INTEGRATED PRODUCT SUITE', title: 'EMSTRAP Products for Hospitals & Clinics',
        text: 'Connect pre-hospital ambulance operations directly into your hospital emergency department workflow.',
        items: [
          { ...c('EMSTRAP Connect', 'Enterprise emergency call dispatch, interoperable multi-agency communication, and hospital intake registration hub.'), link: '/products/connect', cta: 'Explore Connect' },
          { ...c('EMSTRAP Ride', 'Ambulance dynamic GPS navigation, in-transit clinical vitals streaming, and emergency corridor coordination with traffic police.'), link: '/products/ride', cta: 'Explore Ride' },
          { ...c('EMSTRAP Command', 'Centralized emergency department dashboard, trauma bay allocation, on-call specialist paging, and real-time bed analytics.'), link: '/products/command', cta: 'Explore Command' },
        ],
      },
      {
        kind: 'list', label: 'KEY BENEFITS', title: 'Better preparation. Better outcomes.',
        text: 'Measurable clinical efficiencies that save lives during critical trauma and emergency intake.',
        items: [
          c('Faster Emergency Response', 'Significantly reduce door-to-needle, door-to-CT, and door-to-balloon times for critical patients.'),
          c('Better Trauma Preparedness', 'Surgical suites, resuscitation bays, and emergency blood products prepped before patient arrival.'),
          c('Pre-Arrival Patient Data', 'Physicians review ECG, oxygen levels, and field medical interventions before the patient reaches the doors.'),
          c('Resource Allocation', 'Eliminate bay delays by preparing ventilators, radiology suites, and ICU beds in advance.'),
          c('Seamless Collaboration', 'Direct communication between incoming paramedics and ER triage consultants eliminates miscommunication.'),
          c('Reduced Waiting Times', 'Smooth, rapid patient transfer straight from ambulance stretcher to assigned trauma bed.'),
          c('Improved Survival Rates', 'Maximize golden hour preservation for severe trauma, acute myocardial infarction, and stroke cases.'),
          c('Comprehensive Audit Logs', 'Precise digital timestamps and vitals logs for clinical governance, compliance, and quality benchmarking.'),
        ],
      },
    ],
    cta: { label: 'CLINICAL EXCELLENCE', title: 'Equip Your ER With Pre-Arrival Intelligence.', text: 'Transform incoming emergency transfers and optimize clinical outcomes with EMSTRAP ER coordination platform.', button: 'Request Hospital Briefing' },
    form: {
      title: 'Request Hospital Intake Briefing', text: 'Learn how EMSTRAP accelerates ER telemetry and prepares clinical teams in advance.',
      fields: [['org', 'Hospital / Clinic Name', 'text'], ['email', 'Official Email', 'email'], ['phone', 'Contact Phone', 'tel'], ['needs', 'Trauma / ER Requirements', 'textarea']],
    },
  },

  'educational-campuses': {
    pageTitle: 'A Safer Campus Starts With Preparedness.',
    tag: 'CAMPUS & INSTITUTIONAL SAFETY',
    subtitle: 'EMSTRAP helps schools, colleges, and university campuses respond instantly to medical emergencies, fire incidents, and campus safety threats through a unified coordination platform.',
    primary: 'Get Started',
    secondary: 'Request a Demo',
    audience: ['Universities', 'Colleges', 'K-12 Schools', 'Research Facilities'],
    panel: {
      title: 'Campus Directory & SOS', badge: '24/7 Monitored Grid · Active',
      rows: [
        ['Academic Block', 'Connected'], ['Library Complex', 'Connected'], ['Administration Building', 'Connected'],
        ['Medical Centre', 'Rapid Dispatch'], ['Emergency SOS Network', 'Live Beacons'], ['Campus SOS Response', '< 30 Seconds'],
      ],
    },
    sections: [
      {
        kind: 'cards', label: 'THE CHALLENGES', title: 'Educational institutions need to prepare for multiple emergency scenarios.',
        text: 'Campuses host thousands of students, teachers, and visitors across large geographical footprints, creating acute safety challenges during critical incidents.',
        items: [
          c('Medical Emergencies', 'Sudden cardiac events, asthma attacks, sports injuries, or fainting require swift on-campus first aid and immediate hospital escalation.'),
          c('Fire Incidents', 'Laboratory fires, electrical short circuits, and canteen hazards require rapid alarm dissemination and guided building evacuation.'),
          c('Accidents', 'Campus transport accidents, stairwell falls, and playground trauma require rapid triage and coordinated ambulance access.'),
          c('Evacuations', 'Mass campus dispersals during weather crises or threats face severe bottlenecking without live muster accountability.'),
          c('Campus Safety Incidents', 'Intrusions, physical confrontations, or security breaches demand instant stealth alerting and rapid security guard dispatch.'),
          c('Emergency Communication', 'Delays in reaching wardens, administrators, parents, and local emergency departments cause compounding panic and misinformation.'),
        ],
      },
      {
        kind: 'cards', label: 'HOW EMSTRAP HELPS', title: 'A connected platform for safer educational institutions.',
        text: 'EMSTRAP integrates digital emergency beacons, incident dispatch, campus medical coordination, and local emergency services into a cohesive safety ecosystem.',
        items: [
          c('Campus SOS', 'One-touch distress alerts from student apps, wearable badges, and fixed wall beacons broadcast pinpoint coordinates to campus security.'),
          c('Emergency Coordination', 'Centralized live incident command console providing real-time visibility and instant dispatch to on-duty security personnel.'),
          c('Medical Assistance', 'Instant notification to the campus clinic with emergency vital logs and automated pre-alerting of nearby partnered trauma centers.'),
          c('Fire & Evacuation Preparedness', 'Digital muster point verification, zone-by-zone evacuation routes, and real-time headcounts delivered to local fire brigades.'),
          c('Safety Management', 'Continuous safety auditing, automated emergency drill simulations, warden training registers, and institutional compliance reporting.'),
        ],
      },
      {
        kind: 'list', label: 'KEY BENEFITS', title: 'Build a safer and more prepared campus.',
        text: 'Measurable improvements in emergency response times, campus-wide safety compliance, and peace of mind for staff, students, and parents.',
        items: [
          c('Faster emergency alerts', 'Sub-second digital SOS dissemination reaches campus security guards and medical officers instantly.'),
          c('Better campus preparedness', 'Structured emergency drills, safety audits, and warden training workflows ensure readiness across all departments.'),
          c('Improved responder coordination', 'Synchronized GPS dispatch between campus security, university infirmary, and incoming city ambulances.'),
          c('Better emergency communication', 'Targeted multi-channel alerts prevent rumors and panic while providing clear instructions to faculty and students.'),
          c('Structured safety management', 'Comprehensive post-incident forensic logs, digital records, and analytical safety metrics for regulatory bodies.'),
          c('Safer campus environment', 'A trusted and secure educational atmosphere promoting student wellbeing and peace of mind for families.'),
        ],
      },
      {
        kind: 'steps', label: 'THE EMSTRAP CAMPUS ECOSYSTEM', title: 'From incident to resolution. A connected response.',
        text: 'A continuous, synchronized emergency response workflow tailored for educational campuses.',
        items: [
          c('Emergency Triggered', 'Instant activation via physical beacon, campus hotline, or student mobile safety application.'),
          c('Campus Administration', 'Central control room assesses location, building sector, and nature of the emergency in real-time.'),
          c('Responder Coordination', 'Automated dispatch tasks routed to security guards, floor wardens, and campus medical officers.'),
          c('On-Ground Response', 'Trained response teams arrive at the designated scene within minutes to secure the perimeter and render first aid.'),
          c('Incident Resolved', 'Successful stabilization, hospital handover, or safe evacuation with automated family notification.'),
          c('Review & Insights', 'Automated post-incident response time analytics and safety reports for administrative compliance.'),
        ],
      },
    ],
    cta: { label: 'CAMPUS RESILIENCE', title: 'Protect Your Students & Staff Today.', text: 'Speak with our campus emergency specialists to design a customized safety and crisis response framework for your institution.', button: 'Schedule a Consultation' },
    form: {
      title: 'Request Campus Safety Briefing', text: 'Learn how EMSTRAP can safeguard your institution with real-time response.',
      fields: [['org', 'Institution Name', 'text'], ['email', 'Official Email', 'email'], ['phone', 'Contact Phone', 'tel'], ['needs', 'Campus Size & Needs', 'textarea']],
    },
  },

  'smart-cities': {
    pageTitle: 'Building the Emergency Infrastructure of Smarter Cities.',
    tag: 'FOR SMART CITIES',
    subtitle: 'EMSTRAP connects emergency stakeholders into a unified city-level response ecosystem.',
    primary: 'Partner With EMSTRAP',
    secondary: 'Request a Demo',
    audience: ['Citizens', 'Ambulances', 'Hospitals', 'Police', 'Traffic Management', 'Emergency Control Centres'],
    panel: {
      title: 'Integrated Command and Control Centre', badge: 'Unified Municipal Grid',
      rows: [
        ['Ambulance Tracking', 'Live GPS Mesh'], ['Traffic Cameras', 'Corridor Feeds'], ['Emergency Alerts', 'Multi-Channel'],
        ['Live City Map', 'GIS Layers'], ['Multi-Agency Coordination', '112 / 108 CAD Sync'], ['Citywide Emergency Response', 'Dynamic Green Wave'],
      ],
    },
    sections: [
      {
        kind: 'cards', label: 'CITY CHALLENGES', title: 'Modern cities face complex emergency challenges.',
        text: 'Managing emergencies across a growing urban environment requires better coordination, real-time information and a unified system.',
        items: [
          c('Multiple disconnected emergency systems', 'Different systems across departments.'),
          c('Traffic congestion', 'Delays emergency response.'),
          c('Ambulance delays', 'Difficulty reaching incident locations on time.'),
          c('Fragmented emergency communication', 'Information not shared effectively.'),
          c('Limited city-wide visibility', 'Lack of real-time insights.'),
          c('Multiple agencies working independently', 'Separate operations and limited coordination.'),
        ],
      },
      {
        kind: 'cards', label: 'HOW EMSTRAP HELPS', title: 'A unified city-level response ecosystem.',
        text: 'EMSTRAP connects all key stakeholders into one integrated platform, enabling faster, more coordinated and more effective emergency response.',
        items: [
          c('Citizens', 'Report emergencies and request help.'),
          c('Ambulances', 'Receive and respond to incidents.'),
          c('Hospitals', 'Get notified and prepare for incoming patients.'),
          c('Police', 'Receive incident information and coordinate response.'),
          c('Traffic Management', 'Support emergency movement and route coordination.'),
          c('Emergency Control Centres', 'Monitor and manage city-wide emergency response.'),
        ],
      },
      {
        kind: 'list', label: 'KEY CAPABILITIES', title: 'Integrated tools for smarter city operations.',
        text: 'EMSTRAP provides a range of capabilities to help cities manage emergencies more efficiently.',
        items: [
          c('Emergency monitoring', 'Continuous real-time surveillance of city incidents across all civic wards.'),
          c('Real-time tracking', 'Sub-second live telemetry from every emergency fleet unit across municipal zones.'),
          c('Intelligent dispatch', 'Automated computer-aided dispatch assigns the nearest available first responder.'),
          c('AI-assisted decision support', 'Predictive triage algorithms recommend optimal hospital routing and resource allocation.'),
          c('Emergency route coordination', 'Dynamic green wave signal preemption clears intersections for sirens in transit.'),
          c('Hospital notifications', 'Advance patient vitals and trauma bed allocation before ambulance hospital arrival.'),
          c('Operational analytics', 'Comprehensive city-wide response metrics, heatmaps, and service level KPIs.'),
          c('Multi-agency coordination', 'Interoperable bridge uniting police, municipal ambulances, fire brigades and transit.'),
        ],
      },
      {
        kind: 'list', label: 'KEY BENEFITS', title: 'Towards safer, more resilient and smarter cities.',
        text: 'EMSTRAP helps cities build a connected emergency ecosystem that improves coordination, reduces response time and enhances public safety.',
        items: [
          c('Unified emergency visibility', 'Complete situational awareness with single-pane oversight of all citywide emergency activity.'),
          c('Better agency coordination', 'Synchronized standard operating procedures linking police, fire, health and traffic departments.'),
          c('Faster information sharing', 'Instant incident data distribution across control rooms without telephone relay bottlenecks.'),
          c('Improved emergency mobility', 'Dynamic signal clearing and real-time congestion avoidance reduces sirens transit time up to 50%.'),
          c('Centralized operational intelligence', 'Actionable urban insights to optimize ambulance basing, patrol routes, and civic disaster shelters.'),
          c('Scalable emergency infrastructure', 'Built on cloud-native standards ready to scale across metropolitan regions and smart governance grids.'),
        ],
      },
    ],
    cta: { label: 'SMART CITY RESILIENCE', title: 'Transform City Emergency Coordination Today.', text: 'Partner with EMSTRAP to build a connected, responsive urban emergency response framework for your city.', button: 'Schedule City Consultation' },
    form: { ...FORM_AGENCY },
  },

  'government-agencies': {
    pageTitle: 'Connected Emergency Infrastructure for Public Safety.',
    tag: 'FOR GOVERNMENT AGENCIES',
    subtitle: 'EMSTRAP provides government agencies with technology for coordinating emergency response across departments and regions.',
    primary: 'Partner With EMSTRAP',
    secondary: 'Request a Demo',
    audience: ['Departments', 'Integrated Response', 'Public Safety', 'Scalable Infrastructure'],
    panel: {
      title: 'Integrated Emergency Command Centre', badge: 'Safer Cities Stronger Communities',
      rows: [
        ['Active Incidents', '24'], ['Responders', '52'], ['Avg Response', '8 min'],
        ['Departments Connected', 'Police, Ambulance Services, Hospitals, Traffic Management, Fire & Rescue, Disaster Mgmt'],
        ['Multi-Agency Mesh', '100% Operational'],
      ],
    },
    sections: [
      {
        kind: 'cards', label: 'CHALLENGES', title: 'Government emergency systems involve multiple moving parts.',
        text: 'Coordinating public safety across large regions is complex due to multiple departments, services and system limitations.',
        items: [
          c('Multiple departments', 'Different departments with separate processes.'),
          c('Multiple emergency services', 'Police, ambulances, hospitals, fire services, traffic authorities.'),
          c('Fragmented systems', 'Information not integrated across platforms.'),
          c('Large geographic areas', 'Difficult to manage emergencies across wide regions.'),
          c('High coordination requirements', 'Complex coordination across multiple agencies.'),
          c('Limited centralized visibility', 'No unified view of emergency activity.'),
        ],
      },
      {
        kind: 'cards', label: 'HOW EMSTRAP HELPS', title: 'A unified platform for government emergency coordination.',
        text: 'EMSTRAP helps government agencies connect emergency stakeholders, monitor activity and coordinate response through a unified platform.',
        items: [
          c('Unified Emergency Coordination', 'Connect emergency stakeholders through one platform.'),
          c('Command Centre', 'Centralized monitoring of emergency activity.'),
          c('Multi-Agency Coordination', 'Police, Hospitals, Ambulances, Traffic authorities, Emergency services.'),
          c('Analytics', 'Provide operational insights and reporting.'),
          c('Scalable Infrastructure', 'Designed to support expansion from pilot deployments to larger geographic deployments.'),
        ],
      },
      {
        kind: 'list', label: 'KEY BENEFITS', title: 'Strong public safety through better coordination.',
        text: 'EMSTRAP helps government agencies improve emergency response, coordination and decision-making.',
        items: [
          c('Better public emergency coordination', 'Unified response protocols linking police, ambulances, traffic and municipal authorities.'),
          c('Centralized operational visibility', 'Complete situational awareness with live maps, unit locations and dispatch telemetry.'),
          c('Improved inter-agency communication', 'Eliminate communication delays with automated CAD-to-CAD message and incident syncing.'),
          c('Digital emergency records', 'Immutable, timestamped audit trails of all dispatch decisions and emergency incidents.'),
          c('Scalable infrastructure', 'Modular architecture capable of scaling across cities, districts, and entire state jurisdictions.'),
          c('Data-driven emergency management', 'Predictive analytics and performance reporting to optimize resource deployment and budgets.'),
        ],
      },
      {
        kind: 'steps', label: 'THE BIGGER IMPACT', title: 'Towards safer communities and stronger governance.',
        text: 'EMSTRAP supports government agencies in building more connected, efficient and resilient emergency systems.',
        items: [
          c('Incident Reported', 'From citizens or departments'),
          c('Multi-Agency Response', 'Coordinated through EMSTRAP'),
          c('Real-Time Monitoring', 'Via command centre'),
          c('On-Ground Action', 'Police, ambulance, fire, traffic'),
          c('Incident Resolved', 'Recorded and analyzed'),
          c('Safer Communities', 'More connected and resilient cities'),
        ],
      },
    ],
    cta: { label: 'PUBLIC SECTOR ENGAGEMENT', title: 'Modernize Public Safety for Your Jurisdiction.', text: 'Partner with EMSTRAP to deploy state-level and municipal emergency coordination infrastructure.', button: 'Initiate Agency Discussion' },
    form: { ...FORM_AGENCY },
  },

  'ambulance-providers': {
    pageTitle: 'Move Faster. Respond Smarter.',
    tag: 'FOR AMBULANCE PROVIDERS',
    subtitle: 'EMSTRAP helps ambulance providers receive, manage, prioritize and respond to emergency requests through intelligent dispatch, real-time tracking and connected hospital coordination.',
    primary: 'Get Started',
    secondary: 'Request a Demo',
    audience: ['Ambulance Providers', 'Hospitals', 'Healthcare Networks'],
    panel: { title: 'Ambulance Fleet', text: 'Predictive computer-aided ambulance dispatch with turn-by-turn routing and ER hospital pre-alert.' },
    sections: [
      {
        kind: 'cards', label: 'THE CHALLENGE', title: 'Ambulance operations face real-world challenges every day.',
        text: 'From manual dispatch and traffic delays to gaps in hospital communication, ambulance providers need smarter operational tools.',
        items: [
          c('Manual Request Handling', 'Phone-based emergency intake creates delays and errors in capturing accurate incident information and location data.'),
          c('Ambulance Identification', 'Dispatchers struggle to identify the nearest available ambulance in real time without a live fleet visibility tool.'),
          c('Traffic-Related Delays', 'Ambulances lose critical minutes navigating urban congestion without intelligent route guidance and traffic coordination.'),
          c('Limited Operational Visibility', 'Managers have no real-time view of fleet status, active trips or driver availability across the operation.'),
          c('Hospital Communication Gaps', 'Hospitals receive little or no advance notice of incoming patients, reducing their ability to prepare receiving teams.'),
          c('Limited Analytics', 'Without digital records and operational data, providers cannot measure performance or identify systemic inefficiencies.'),
        ],
      },
      {
        kind: 'cards', label: 'INTEGRATED SOLUTIONS', title: 'A connected platform for smarter ambulance operations.',
        text: 'EMSTRAP integrates every stage of the ambulance emergency lifecycle — from request intake to patient handover and post-incident reporting.',
        items: [
          c('Intelligent Emergency Dispatch', 'Automated emergency intake with smart assignment of the nearest available ambulance based on live fleet data.'),
          c('Real-Time GPS Tracking', 'Live location monitoring of every ambulance in the fleet from a centralized dispatch dashboard.'),
          c('Smart Routing', 'Route optimization and traffic coordination to minimize response times for every active emergency.'),
          c('Hospital Coordination', 'Automatic advance notifications to receiving hospitals with patient status and estimated arrival time.'),
          c('Driver Dashboard', 'Mobile-first driver interface with navigation, job status updates and direct communication tools.'),
          c('Operational Analytics', 'Trip records, response time data and fleet utilization reports to support operational improvement.'),
        ],
      },
      {
        kind: 'list', label: 'PROVEN OUTCOMES', title: 'Built for faster, more efficient emergency response.',
        text: 'EMSTRAP delivers improvements across every dimension of ambulance operations — from first call to final record.',
        items: [
          c('Faster Emergency Coordination', 'Automated dispatch and smart routing significantly reduce time from call to ambulance arrival.'),
          c('Better Ambulance Utilization', 'Live fleet visibility ensures optimal assignment and reduces idle time across operations.'),
          c('Real-Time Fleet Visibility', 'Managers have a complete live view of all ambulances, drivers and active emergencies.'),
          c('Improved Driver Communication', 'Structured digital communication replaces fragmented radio contact for all field personnel.'),
          c('Better Hospital Coordination', 'Advance patient notifications enable hospitals to prepare faster and deliver better care.'),
          c('Digital Operational Records', 'Every trip, dispatch and incident is digitally recorded for compliance and operational review.'),
        ],
      },
      {
        kind: 'steps', label: 'END-TO-END PROCESS', title: 'From request to hospital.', text: 'A unified ambulance journey.',
        items: [
          c('Emergency Request', 'Incident reported and received.'),
          c('Dispatch & Assignment', 'Nearest ambulance assigned.'),
          c('En Route', 'Ambulance navigating to scene.'),
          c('Patient Pickup', 'Patient assessed and secured.'),
          c('Hospital Coordination', 'Medical team pre-notified.'),
          c('Patient Arrival', 'Handover completed, records filed.'),
        ],
      },
    ],
    cta: { title: 'Ready to upgrade your emergency response?', text: "Talk to an EMSTRAP specialist about your organisation's specific requirements.", button: 'Schedule Briefing' },
    form: { ...FORM_PEOPLE, label: 'FOR AMBULANCE PROVIDERS' },
  },

  'traffic-management': {
    pageTitle: 'Clear the Way for Emergency Response.',
    tag: 'FOR TRAFFIC MANAGEMENT',
    subtitle: 'EMSTRAP enables traffic management teams to coordinate with emergency responders and support faster movement of emergency vehicles through live routing and corridor intelligence.',
    primary: 'Get Started',
    secondary: 'Request a Demo',
    audience: ['Traffic Control Centers', 'Smart Cities', 'Emergency Responders', 'Connected Road Networks'],
    panel: { title: 'Green Corridor Ambulance', badge: 'Traffic Management Ops', rows: [['Junction Preemption', 'Active'], ['Delay', '-48%']] },
    sections: [
      {
        kind: 'cards', label: 'THE CHALLENGE', title: 'Traffic management faces real-world challenges.',
        text: 'Emergency response is often delayed due to traffic congestion and lack of real-time coordination. Managing movement across busy roads and intersections can be difficult without a connected system.',
        items: [
          c('Traffic congestion', 'High vehicle density slows down movement.'),
          c('Emergency vehicles stuck at intersections', 'Difficulty in clearing junctions in time.'),
          c('Lack of real-time ambulance visibility', 'Limited visibility of emergency vehicle location.'),
          c('Manual coordination', 'Communication across teams is often manual.'),
          c('Limited emergency route awareness', 'Difficulty identifying the best route in real time.'),
        ],
      },
      {
        kind: 'cards', label: 'HOW EMSTRAP HELPS', title: 'A connected platform for smarter traffic management.',
        text: 'EMSTRAP provides real-time information and tools to help traffic management teams support faster and more efficient emergency movement.',
        items: [
          c('Emergency Vehicle Tracking', 'Identify active emergency vehicles and their locations in real time.'),
          c('Emergency Route Intelligence', 'Understand the route being taken by an emergency vehicle.'),
          c('Traffic Coordination', 'Provide emergency-route information to traffic management teams.'),
          c('Green Corridor Support', 'Support coordinated emergency corridors where infrastructure integration is available.'),
          c('Live Emergency Map', 'Provide a centralized view of active emergencies and responder movement.'),
        ],
      },
      {
        kind: 'list', label: 'KEY BENEFITS', title: 'Support faster and safer emergency movement.',
        text: 'EMSTRAP helps traffic management teams improve situational awareness and coordinate with emergency responders more effectively.',
        items: [
          c('Better emergency route visibility', 'Clear operational view of incoming ambulance corridors.'),
          c('Faster traffic coordination', 'Instant communication between field traffic police and control rooms.'),
          c('Improved emergency vehicle movement', 'Reduce intersection delays and hazardous maneuvers.'),
          c('Better situational awareness', 'Live telemetry of active siren routes across city sectors.'),
          c('Improved collaboration with responders', 'Synchronized standard procedures across police and ambulances.'),
        ],
      },
      {
        kind: 'steps', label: 'A CONNECTED RESPONSE ECOSYSTEM', title: 'From emergency activation to destination.',
        text: 'EMSTRAP works with traffic management teams, ambulance services and other responders to create a faster and more connected emergency journey.',
        items: [
          c('Emergency Activated', 'Incident reported through EMSTRAP'),
          c('Ambulance En Route', 'Real-time vehicle tracking available'),
          c('Traffic Coordination', 'Traffic teams support route clearance'),
          c('Green Corridor Support', 'Enable faster movement where available'),
          c('Ambulance Reaches Destination', 'Patient arrives safely'),
        ],
      },
    ],
    cta: { label: 'TRAFFIC MOBILITY INTEGRATION', title: 'Upgrade Urban Corridor Mobility Today.', text: 'Speak with our intelligent transportation systems team to deploy green corridor preemption.', button: 'Schedule a Consultation' },
    form: { ...FORM_AGENCY },
  },

  'police-departments': {
    pageTitle: 'Connect Every Emergency Response Team.',
    tag: 'FOR POLICE DEPARTMENTS',
    subtitle: 'EMSTRAP helps police departments receive emergency information faster, understand incident locations and coordinate with ambulances, hospitals and other responders.',
    primary: 'Get Started',
    secondary: 'Request a Demo',
    audience: ['Ambulance Services', 'Hospitals', 'Traffic Authorities', 'Emergency Control Rooms'],
    panel: {
      title: 'New Emergency Alert', badge: 'High Priority Incident · Active',
      rows: [
        ['Road Traffic Accident', '1.2 km away • Patrol Unit #04 Dispatched'],
        ['Coordinated Services', 'Police + Ambulance #KA01AB'],
        ['Corridor Clearance', 'Green Wave Active'],
      ],
    },
    sections: [
      {
        kind: 'cards', label: 'THE CHALLENGE', title: 'Police departments face critical operational challenges.',
        text: 'Emergency response becomes difficult when information is delayed, scattered or managed manually.',
        items: [
          c('Delayed incident information', 'Details of an emergency reach the control room late or in pieces, so officers start without the full picture.'),
          c('Fragmented communication', 'Communication gaps between police patrols, ambulance fleets and city hospital control rooms.'),
          c('Limited real-time incident visibility', 'Dispatchers lack live GPS coordinates of field officers and ongoing on-scene developments.'),
          c('Difficulty coordinating multiple responders', 'Simultaneous coordination with fire brigades, medical paramedics, and traffic police causes delays.'),
          c('Manual incident records', 'Manual logging and paper case documents slow down reporting and forensic evidence collation.'),
          c('Lack of unified emergency information', 'No single operational picture shared across police departments, PCR vans, and municipal services.'),
        ],
      },
      {
        kind: 'cards', label: 'HOW EMSTRAP HELPS', title: 'A connected platform for smarter policing.',
        text: 'EMSTRAP provides the tools and information police departments need to respond faster and more effectively.',
        items: [
          c('Real-Time Incident Alerts', 'Receive emergency notifications with relevant incident information.'),
          c('Location Intelligence', 'View incident locations through GPS and map-based interfaces.'),
          c('Responder Coordination', 'Coordinate with ambulances, hospitals, traffic authorities and emergency control rooms.'),
          c('Incident Monitoring', 'Track active emergency cases and response progress.'),
          c('Digital Incident Records', 'Maintain structured emergency records and response information.'),
        ],
      },
      {
        kind: 'list', label: 'KEY BENEFITS', title: 'Support safer cities through better coordination.',
        text: 'EMSTRAP helps police departments improve situational awareness and respond to emergencies more effectively.',
        items: [
          c('Faster awareness of incidents', 'Sub-second dispatch from public 112 calls straight to the mobile patrol terminals.'),
          c('Better field coordination', 'Synchronized tactical assignments between beat officers, traffic units, and emergency medical teams.'),
          c('Improved emergency communication', 'Integrated digital channels replace fragmented radio chatter and incomplete telephone relays.'),
          c('Better situational awareness', 'Live operational heatmaps, caller GPS location, and camera feeds for informed tactical choices.'),
          c('Centralized incident information', 'Unified emergency docket accessible across precinct commanders and field officers in real time.'),
          c('Digital response records', 'Automated timestamps, vehicle telemetry, and resolution notes for courtroom evidence and reporting.'),
        ],
      },
      {
        kind: 'steps', label: 'A CONNECTED EMERGENCY ECOSYSTEM', title: 'From incident to resolution. All responders connected.',
        text: 'EMSTRAP helps police departments work together with ambulances, hospitals and other emergency teams.',
        items: [
          c('Incident Report', 'Emergency information received'),
          c('Police Department', 'View and assess incident'),
          c('Ambulance Services', 'Coordinate and respond'),
          c('Traffic Authorities', 'Support movement and access'),
          c('Hospitals', 'Prepare for arrival'),
          c('Incident Resolution', 'Track and complete response'),
        ],
      },
    ],
    cta: { label: 'LAW ENFORCEMENT READINESS', title: 'Equip Your Patrols With Connected Intelligence.', text: 'Speak with our public safety specialists to evaluate EMSTRAP for your police department or emergency control room.', button: 'Schedule a Demonstration' },
    form: { ...FORM_AGENCY },
  },

  // The original site had no page for this card (it linked to the Corporate page).
  // This page is written from the card's own text so the card finally has its own destination.
  'industrial-manufacturing': {
    pageTitle: 'Faster Response on the Factory Floor.',
    tag: 'FOR INDUSTRIAL & MANUFACTURING',
    subtitle: 'Factory floor automated trauma escalation, hazmat incident protocol synchronization, and rapid industrial emergency response routing.',
    primary: 'Get Started',
    secondary: 'Request a Demo',
    audience: ['Industrial Plants', 'Manufacturing Units', 'Hazmat Sites', 'Warehouses'],
    panel: { title: 'Hazmat & Industrial Trauma Triage', text: 'Automatic escalation from the factory floor to the nearest trauma hospital, with the right response protocol for the incident.' },
    sections: [
      {
        kind: 'cards', label: 'HOW EMSTRAP HELPS', title: 'Emergency response built for industrial sites.',
        text: 'EMSTRAP connects the factory floor to responders and hospitals so serious incidents are escalated without delay.',
        items: [
          c('Trauma Escalation', 'Factory floor automated trauma escalation sends the alert and location to the right responders at once.'),
          c('Hazmat Protocol Synchronization', 'Hazmat incident protocols are synchronized across site teams and external responders.'),
          c('Emergency Routing', 'Rapid industrial emergency response routing guides ambulances to the exact gate and plant section.'),
        ],
      },
      {
        kind: 'list', label: 'KEY BENEFITS', title: 'A safer, better prepared plant.',
        items: [
          c('Faster alerts', 'Incidents reach responders the moment they happen on the floor.'),
          c('Coordinated hazmat response', 'Site teams and outside responders follow the same protocol.'),
          c('Clear access for ambulances', 'Responders reach the right entrance without searching.'),
        ],
      },
    ],
    cta: { label: 'INDUSTRIAL SAFETY', title: 'Protect Your Workforce and Your Plant.', text: 'Speak with an EMSTRAP specialist about emergency response for your industrial site.', button: 'Schedule a Consultation' },
    form: { ...FORM_AGENCY },
  },
}
