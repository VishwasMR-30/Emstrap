// Content for the four product pages (Connect, Ride, Shield, Command).
const c = (t, d) => ({ t, d })

export const products = {
  connect: {
    pageTitle: 'One Connected Network for Every Emergency',
    tag: 'EMSTRAP CONNECT',
    subtitle: 'A B2G emergency communication and incident-reporting platform connecting citizens, authorities, emergency responders and control rooms.',
    primary: 'Request a Government Demo', primaryHref: '#briefing',
    secondary: 'Explore How It Works', secondaryHref: '#details',
    audience: ['Citizens', 'Hospitals', 'Government', 'Control Room', 'Ambulance', 'Police'],
    panel: {
      title: 'Report. Connect. Coordinate. Respond.', badge: 'LIVE SYNC',
      rows: [
        ['Report', 'Citizens report emergencies with real-time information.'],
        ['Connect', 'Information reaches the right authorities instantly.'],
        ['Coordinate', 'Departments work together on a unified incident.'],
        ['Respond', 'Faster, more efficient emergency response.'],
      ],
    },
    sections: [
      {
        kind: 'steps', label: 'SYNCHRONIZED PHASES', title: 'Report. Connect. Coordinate. Respond.',
        items: [
          c('Report', 'Citizens report emergencies with real-time information.'),
          c('Connect', 'Information reaches the right authorities instantly.'),
          c('Coordinate', 'Departments work together on a unified incident.'),
          c('Respond', 'Faster, more efficient emergency response.'),
        ],
      },
      {
        kind: 'problem', label: 'THE PROBLEM', title: 'Emergency response is often disconnected.',
        text: 'Information comes from multiple sources, leading to delays, duplicate reports and communication gaps between departments.',
        items: [
          'Multiple reports about the same incident', 'Incomplete or unclear information', 'Delays in sharing incident details',
          'Difficulty identifying exact location', 'Communication gaps between departments',
          'Difficulty prioritizing multiple emergencies', 'Limited visibility into ongoing incidents',
        ],
      },
      {
        kind: 'chips', label: 'THE SOLUTION', title: 'From fragmented information to one connected incident.',
        text: 'EMSTRAP Connect brings all emergency reports into a unified ecosystem, helping authorities respond faster and more effectively.',
        items: ['Citizens', 'Government', 'Hospitals', 'Municipal', 'Ambulance', 'Police'],
      },
      {
        kind: 'checks', label: 'PRODUCT OVERVIEW', title: 'A digital communication bridge between citizens and government emergency-response systems.',
        text: 'A citizen can report an emergency with location, description, image and incident details. EMSTRAP Connect processes the report and connects it with the appropriate emergency-response workflow.',
        items: ['Emergency Type', 'Description', 'Location', 'Image', 'Incident Details'],
        rowsTitle: 'New Emergency',
        rows: [['Emergency Type', 'Road Accident'], ['Description', 'Multiple people injured, need immediate ambulance...'], ['Location', '12.9716° N, 77.5946° E'], ['Incident Image', 'Attached']],
      },
      {
        kind: 'cards', label: 'REPORT INFORMATION', title: 'Every report adds to a clearer picture.',
        text: 'Citizens can share key information that helps authorities understand and respond to the incident.',
        items: [c('Location', 'Lat & Longitude'), c('Description', 'Incident details'), c('Image', 'Photos from scene'), c('Details', 'Time, type, etc.')],
      },
      {
        kind: 'cards', label: 'DUPLICATE DETECTION', title: 'One Incident. Multiple Reports.',
        text: 'When multiple people report the same incident, EMSTRAP can identify reports from the same location and associate them with a single incident.',
        items: [
          c('Consolidated Incident #8492', 'Geo-anchored & unified response docket'),
          c('Merged Reports', '5 Citizen Feeds'),
          c('Location Radius', '45m Accuracy'),
          c('Single Dispatch Feed', 'One unified feed for dispatchers'),
        ],
      },
      {
        kind: 'steps', label: 'HOW IT WORKS', title: 'From report to resolution.',
        text: 'A structured 8-step process to ensure faster, smarter and more coordinated emergency response.',
        items: ['Report', 'Locate', 'Identify', 'Analyze', 'Prioritize', 'Connect', 'Coordinate', 'Resolve'].map((t) => c(t, '')),
      },
      {
        kind: 'checks', label: 'LOCATION INTELLIGENCE', title: 'Know where the emergency is happening.',
        text: 'EMSTRAP Connect uses latitude and longitude from emergency reports to identify, organize and visualize incidents geographically.',
        items: ['Identify incident locations', 'Detect nearby active incidents', 'Understand incident patterns', 'Monitor real-time activity'],
      },
      {
        kind: 'cards', label: 'INCIDENT INTELLIGENCE', title: 'Turn emergency reports into actionable information.',
        text: 'Automated triage and data parsing translates emergency reports into structured operational data for emergency responders.',
        items: [
          c('Raw Citizen Report', '"There has been a road accident. Two people appear injured and one person is unconscious." Source: Mobile SOS • GPS Verified'),
          c('AI Ingestion & Parsing', 'Inference confirmed (0.28s)'),
          c('Structured Output', 'Incident Type: Road Accident • Severity: CRITICAL • Assistance: Medical Response Required'),
        ],
      },
      {
        kind: 'checks', label: 'SMART CITIES', title: 'A connected emergency layer for the city.',
        text: "EMSTRAP Connect can become part of a city's broader digital public-safety ecosystem.",
        items: ['Receive citizen emergency reports', 'Monitor incidents across the city', 'Coordinate with departments', 'Centralized view of emergency activity'],
      },
      {
        kind: 'checks', label: 'POLICE DEPARTMENTS', title: 'From citizen report to coordinated response.',
        text: 'An additional digital channel for receiving and managing emergency reports.',
        items: ['Citizen reporting', 'Location-based incidents', 'Incident prioritization', 'Communication with response teams', 'Incident tracking', 'Emergency records and reporting'],
        rowsTitle: 'Active Incidents: 12 Total',
        rows: [['Critical / High / Medium', '3 / 5 / 4'], ['#2041 Road Accident', 'Critical'], ['#2039 Public Disturbance', 'High'], ['#2036 Theft', 'Medium'], ['#2031 Traffic Violation', 'Low']],
      },
      {
        kind: 'chips', label: 'MULTIPLE GOVERNMENT AGENCIES', title: 'One Incident. Every Relevant Agency.',
        text: 'EMSTRAP Connect enables collaboration between different departments around a shared incident.',
        items: ['Control Center', 'Ambulance', 'Police', 'Fire & Rescue', 'Municipal Authority', 'Other Agencies'],
      },
      {
        kind: 'list', label: 'KEY BENEFITS', title: 'A stronger, more coordinated emergency response.',
        items: ['Faster Information Flow', 'Better Incident Visibility', 'Reduced Duplicate Reporting', 'Location-Based Awareness', 'Structured Emergency Information', 'Better Coordination', 'Scalable for Cities'].map((t) => c(t, '')),
      },
      {
        kind: 'chips', label: 'WHO CAN USE EMSTRAP CONNECT?', title: 'Government & Public-Safety Organizations.',
        items: ['Smart City Missions', 'Police Departments', 'Emergency Control Rooms', 'Public-Safety Authorities', 'Government Institutions'],
      },
      {
        kind: 'compare', label: 'A CONNECTED APPROACH', title: 'A simpler, more connected flow.',
        left: { title: 'Traditional Response', items: ['Citizen', 'Phone Call', 'Operator', 'Department', 'Response Team'] },
        right: { title: 'With EMSTRAP Connect', items: ['Citizen', 'EMSTRAP Connect', 'Incident', 'Authority', 'Response'] },
      },
    ],
    cta: {
      label: 'GOVERNMENT BRIEFING', title: 'Connect Your City to a Smarter Emergency Response',
      text: 'Ready to integrate EMSTRAP Connect into your police command, smart city operations, or public safety infrastructure? Schedule an executive briefing.',
      button: 'Request a Government Demo',
    },
    form: {
      label: 'GOVERNMENT BRIEFING', title: 'Request a Government Demo', text: 'For Smart City Missions, Police Headquarters, and Municipal Authorities.',
      fields: [['name', 'Official Name', 'text'], ['org', 'Department / Organization', 'text'], ['email', 'Official Email Address', 'email'], ['phone', 'Contact Phone', 'tel']],
      submit: 'Submit Government Briefing Request',
    },
  },

  ride: {
    pageTitle: "Your Patient Needs a Ride. We'll Help You Find One.",
    tag: 'EMSTRAP RIDE',
    subtitle: 'Book an ambulance for patient transportation, hospital transfers, medical appointments and other healthcare journeys through EMSTRAP Ride.',
    primary: 'Book an Ambulance', primaryHref: '#briefing',
    secondary: 'Partner as an Ambulance Provider', secondaryHref: '#partner',
    audience: ['For Patients', 'Families', 'Hospitals', 'Ambulance Providers'],
    panel: {
      title: 'Move Patients. With Care.',
      text: 'Book an ambulance for patient transportation and connect with available ambulance services for journeys between home, hospitals and healthcare facilities.',
      rows: [['1', 'Book'], ['2', 'Match'], ['3', 'Pickup'], ['4', 'Transport']],
    },
    sections: [
      {
        kind: 'problem', label: 'THE PROBLEM', title: "Finding an ambulance shouldn't become another emergency.",
        text: 'When a patient needs transportation, families often have to:',
        items: ['Search for nearby ambulances', 'Make multiple phone calls', 'Check availability', "Explain the patient's requirements repeatedly", 'Wait for confirmation', 'Coordinate pickup and destination manually'],
        note: 'During a stressful situation, this process can be difficult.',
      },
      {
        kind: 'checks', label: 'PRODUCT OVERVIEW', title: 'A digital ambulance booking and patient transportation platform.',
        text: 'EMSTRAP Ride allows the general public to book an ambulance for patient transportation through a simple digital process.',
        intro: 'A user can provide:',
        items: ['Pickup location', 'Destination', 'Patient transportation requirements', 'Preferred ambulance type', 'Contact information', 'Additional trip details'],
        rowsTitle: 'Book an Ambulance',
        rows: [['Pickup Location', 'Home - Koramangala, Bengaluru'], ['Destination', 'Manipal Hospital, Old Airport Road'], ['Ambulance Type', 'Normal / Oxygen / ICU'], ['Patient Details', 'Elderly patient']],
      },
      {
        kind: 'cards', label: 'WHO CAN USE', title: 'EMSTRAP Ride.',
        text: 'Anyone who needs ambulance transportation for a patient can use EMSTRAP Ride.',
        items: [
          { ...c('Family Members', 'Book an ambulance for a loved one.'), tag: 'Doorstep Pickup' },
          { ...c('Patients', 'Arrange transportation between medical facilities.'), tag: 'Facility Transfer' },
          { ...c('Caregivers', 'Organize patient transportation easily.'), tag: 'Assisted Transit' },
          { ...c('Hospitals', 'Arrange transportation for patients.'), tag: 'Inter-Hospital' },
          { ...c('Healthcare Facilities', 'Coordinate patient transfers and transportation requirements.'), tag: 'Fleet Dispatch' },
        ],
      },
      {
        kind: 'steps', label: 'A SIMPLE 9-STEP PROCESS', title: 'How EMSTRAP Ride Works?',
        items: [
          c('Enter Pickup Location', 'Provide where the patient needs to be picked up.'),
          c('Enter Destination', 'Provide the destination or another facility.'),
          c('Select Ambulance Requirement', 'Choose the appropriate ambulance type based on patient needs.'),
          c('Request an Ambulance', 'Submit the booking request.'),
          c('Ambulance Matching', 'Find an available ambulance.'),
          c('Booking Confirmation', 'Receive trip and ambulance details.'),
          c('Pickup', 'Ambulance arrives at the pickup location.'),
          c('Patient Transportation', 'Patient is transported to the selected destination.'),
          c('Trip Completion', 'Trip is marked as completed.'),
        ],
      },
      {
        kind: 'cards', label: 'TRANSPORT TYPES', title: 'Emergency and non-emergency transport.',
        items: [
          c('Emergency Transportation', 'For situations where immediate medical transportation is required, users can request an ambulance through the platform. For life-threatening emergencies, contact the appropriate emergency number immediately.'),
          { t: 'Non-Emergency Patient Transport', d: 'Useful when a patient needs transportation but is not experiencing an immediate life-threatening emergency.', bullets: ['Hospital discharge', 'Hospital-to-hospital transfer', 'Home-to-hospital transportation', 'Medical appointments', 'Follow-up visits', 'Patient relocation', 'Elderly or mobility-limited transport'] },
        ],
      },
      {
        kind: 'cards', label: 'MATCHING', title: 'Find the right ride for the patient.',
        text: 'An ambulance is not simply another vehicle. Different patients may have different transportation requirements. The matching process can consider:',
        items: [c('Patient Requirement', 'What type of transportation is needed?'), c('Location', 'Where is the patient?'), c('Destination', 'Where does the patient need to go?'), c('Availability', 'Which suitable ambulance is available?'), c('Distance', 'Which available option can serve the request?')],
      },
      {
        kind: 'checks', label: 'TRIP IN PROGRESS', title: 'Follow the trip from booking to destination.',
        items: [c('Ambulance Details', 'Information about the assigned ambulance.'), c('Pickup Location', 'Where the patient will be collected.'), c('Destination', 'Where the patient is being transported.'), c('Trip Status', 'Follow the progress of the booking.'), c('Driver / Crew Information', 'Where applicable.')],
        rowsTitle: 'Trip in Progress',
        rows: [['Vehicle', 'KA 01 AB 1234'], ['Destination', 'Manipal ER'], ['Arrival', 'Arriving in 8 min (2.4 km)'], ['Driver', 'Ramesh Kumar (4.6)']],
      },
      {
        kind: 'checks', label: 'FOR AMBULANCE PROVIDERS', title: 'Receive and manage transportation requests.',
        text: 'EMSTRAP Ride can help ambulance operators and service providers manage their services digitally.',
        items: ['Receive booking requests', 'Manage ambulance availability', 'Accept or reject requests', 'View pickup and destination', 'Manage active trips', 'Update trip status', 'Manage ambulance information', 'Track completed bookings'],
        rowsTitle: 'Provider Dashboard',
        rows: [['New Requests / Active Trips / Completed', '12 / 8 / 25'], ['Home - Indiranagar to Manipal Hospital', 'ICU'], ['Hospital - Home, Koramangala', 'Normal'], ['Care Facility to Victoria Hospital', 'Oxygen']],
      },
      {
        kind: 'checks', label: 'FOR HOSPITALS', title: 'Simplify patient-transfer coordination.',
        text: 'Hospitals can manage patient transportation requests through EMSTRAP Ride.',
        items: [c('Hospital A', 'Patient Transfer Request'), c('EMSTRAP Ride', 'Finds an Available Ambulance'), c('Hospital B', 'Patient Transfer Completed')],
      },
      {
        kind: 'compare', label: 'COMPARISON', title: 'Traditional vs EMSTRAP Ride',
        left: { title: 'Traditional Process', items: ['Need ambulance', 'Search numbers', 'Call provider 1', 'Not available', 'Call provider 2', 'Explain details', 'Wait for confirmation'] },
        right: { title: 'With EMSTRAP Ride', items: ['Need ambulance', 'Enter pickup & destination', 'Select requirements', 'Request ambulance', 'Find available option', 'Confirm booking', 'Patient transport'] },
        note: 'Less searching. Less calling. A more organized booking experience.',
      },
      {
        kind: 'chips', label: 'THE ECOSYSTEM', title: 'Connecting everyone in the patient journey.',
        text: 'EMSTRAP Ride can connect multiple participants in the healthcare ecosystem.',
        items: ['Public Patients & Families', 'Hospitals Healthcare Facilities', 'Ambulance Providers Service Operators'],
        note: 'Ambulance Booking • Patient Pickup • Patient Transport • Destination',
      },
      {
        kind: 'cards', label: 'KEY BENEFITS', title: 'Key Benefits',
        items: [c('For the Public', 'Book ambulance transportation easily.'), c('For Patients', 'Make transportation more organized.'), c('For Families', 'Reduce the stress of arranging transport.'), c('For Hospitals', 'Simplify patient-transfer coordination.'), c('For Ambulance Providers', 'Get structured requests and manage trips digitally.'), c('For Cities', 'Create a more connected ambulance ecosystem.')],
      },
    ],
    cta: {
      label: 'EMSTRAP RIDE', title: 'Reliable Ambulance Transportation, When You Need It.',
      text: 'Book an ambulance for patient transportation, hospital transfers, medical appointments and other healthcare journeys through EMSTRAP Ride.',
      button: 'Partner as an Ambulance Provider', href: '#partner',
    },
    forms: [
      {
        id: 'briefing', solution: 'ride-booking', label: 'PATIENT DISPATCH', title: 'Book an Ambulance', text: 'Emergency & Non-Emergency Transportation Service.',
        fields: [
          ['pickup', 'Pickup Location', 'text'], ['destination', 'Destination Facility', 'text'],
          ['ambulanceType', 'Ambulance Type', 'select', ['Normal (Basic Life Support / Non-Emergency)', 'Oxygen Supported Ambulance', 'ICU / Advance Cardiac Life Support (ACLS)']],
          ['phone', 'Contact Phone', 'tel'],
        ],
        submit: 'Confirm Dispatch Request',
      },
      {
        id: 'partner', solution: 'ride-partner', label: 'FLEET ONBOARDING', title: 'Partner as an Ambulance Provider', text: 'Connect your fleet to the EMSTRAP digital dispatch network.',
        fields: [['org', 'Company / Operator Name', 'text'], ['fleetSize', 'Fleet Size (Number of Ambulances)', 'number'], ['city', 'City / Region of Operation', 'text'], ['phone', 'Contact Phone', 'tel']],
        submit: 'Submit Partnership Request',
      },
    ],
  },

  shield: {
    pageTitle: 'Your People. Your Workplace. One Safety Shield.',
    tag: 'EMSTRAP SHIELD',
    subtitle: 'Complete safety and emergency protection for your organization. Employee emergencies, ambulance assistance, workplace safety, emergency drills and family protection — all in one platform.',
    primary: 'Explore Plans', primaryHref: '#corporate-plans',
    secondary: 'Request a Corporate Demo', secondaryHref: '#briefing',
    audience: ['Employee Emergency', 'SOS', 'Ambulance Coverage', 'Workplace Safety', 'Emergency Drills', 'Family Protection'],
    panel: {
      title: 'Why EMSTRAP Shield?',
      rows: [
        ['Prepare', 'Conduct drills, risk assessments, and first-aid readiness before an emergency.'],
        ['Respond', 'Immediate SOS dispatch, rapid ambulance coordination, and hospital pre-alerts.'],
        ['Learn', 'Post-incident audit logs, response time telemetry, and protocol compliance reports.'],
      ],
    },
    sections: [
      {
        kind: 'cards', label: 'PREVENTION & READINESS', title: 'Why EMSTRAP Shield?',
        text: "Workplace safety doesn't begin when an emergency happens. A truly safe organization needs comprehensive protection:",
        items: [
          c('Prepare', 'Conduct drills, risk assessments, and first-aid readiness before an emergency.'),
          c('Respond', 'Immediate SOS dispatch, rapid ambulance coordination, and hospital pre-alerts.'),
          c('Learn', 'Post-incident audit logs, response time telemetry, and protocol compliance reports.'),
        ],
      },
      {
        kind: 'problem', label: 'THE PROBLEM', title: "Emergencies at work shouldn't turn into delays.",
        text: 'When an emergency strikes in an enterprise or campus, staff often face critical delays:',
        items: ['Searching for nearby ambulances', 'Making multiple phone calls', 'Checking fleet availability', 'Repeating patient condition', 'Waiting endlessly for confirmation', 'Manual campus gate coordination'],
        note: 'During high-stress corporate emergencies, every lost minute risks employee lives and business continuity.',
      },
      {
        kind: 'cards', label: 'EMSTRAP SHIELD', title: 'Everything Your Organization Is Covered For.',
        text: 'A complete safety and emergency ecosystem for your employees, workplace and their families.',
        items: [
          { ...c('Employee SOS & Emergency Response', 'Employees can raise an SOS alert during medical emergencies, accidents or safety incidents.'), bullets: ['Instant SOS alerts', 'Company notifications', 'Ambulance coordination', 'Real-time incident tracking'] },
          { ...c('Ambulance Assistance', 'EMSTRAP coordinates eligible ambulance services for employees as per your selected plan.'), bullets: ['Eligible ambulance coordination', 'Nearest ambulance assignment', 'Real-time tracking and ETA', 'Support with professional ambulance partners'] },
          { ...c('Fire Safety & Evacuation', 'Help your organization stay prepared for fire emergencies with proper equipment, regular inspections and evacuation planning.'), bullets: ['Fire equipment records', 'Emergency exit information', 'Regular inspection tracking', 'Evacuation planning and drill records'] },
          { ...c('First-Aid & Medical Kits', 'Maintain first-aid readiness across your workplaces with proper kit availability, location tracking and inspection management.'), bullets: ['First-aid stations and kit locations', 'Kit availability and status', 'Inspection and expiry tracking', 'Replenishment management'] },
          { ...c('Employee Safety Training & Mock Drills', 'Conduct regular training and drills to build a safer and more prepared workforce.'), bullets: ['First-aid and CPR awareness', 'Fire extinguisher training', 'Evacuation drills', 'Training schedules and attendance', 'Training records and reports'] },
          { ...c('Company Safety Dashboard', 'Get a centralized view of all safety and emergency activities across your organization.'), bullets: ['Employees and safety status', 'Emergency incidents', 'Ambulance activity', 'Inspections and equipment', 'Training and drills', 'Reports and analytics'] },
          { ...c('Family Protection', "Because employee safety doesn't stop at the office. The Complete plan extends eligible emergency service access to up to four registered family members per employee."), bullets: ['Spouse, children and parents', 'Emergency support', 'Ambulance coordination (as per plan)'] },
          { ...c('Safety Reports & Insights', 'Track incidents, identify trends and take corrective actions with detailed reports and insights.'), bullets: ['Incident history and records', 'Corrective actions', 'Safety trend analysis', 'Inspection and drill reports', 'Export and share reports'] },
        ],
      },
      {
        kind: 'plans', id: 'corporate-plans', label: 'EMSTRAP SHIELD', title: 'Three Safety Plans: The Right Level of Support',
        text: "Choose the safety and emergency plan that fits your organization's workforce, facilities, and risk profile.",
        items: [
          { t: 'Silver Shield', sub: 'ESSENTIAL SAFETY', bullets: ['Employee SOS', 'Ambulance service', 'First-aid support'], ideal: 'Startups, small offices, professional firms' },
          { t: 'Gold Shield', sub: 'ENHANCED PROTECTION', bullets: ['Everything in Silver', 'Company dashboard', 'Fire extinguishers'], ideal: 'Growing companies, warehouses, multi-department', featured: true },
          { t: 'Diamond Shield', sub: 'COMPREHENSIVE SOLUTIONS', bullets: ['Everything in Gold', 'Safety drills', 'Training', 'Dedicated ambulance', 'Covers up to 4 family members per employee'], ideal: 'Enterprises, manufacturing, healthcare, multi-site' },
        ],
      },
      {
        kind: 'chips', label: 'CONNECTED SAFETY NETWORK', title: 'EMSTRAP Shield Ecosystem',
        text: 'A connected safety ecosystem for your organization.',
        items: ['Company Dashboard', 'Employees', 'Ambulances', 'Families', 'Safety Mgmt', 'Hospitals'],
      },
    ],
    cta: {
      label: 'EMSTRAP SHIELD', title: 'Complete Safety & Emergency Protection for Your Organization.',
      text: 'Protect your employees, prepare your workplaces and support their families with EMSTRAP Shield.',
      button: 'Request a Corporate Demo',
    },
    form: {
      label: 'CORPORATE SAFETY', title: 'Request a Corporate Demo', text: 'Protect your employees, offices, and industrial facilities.',
      fields: [
        ['org', 'Company / Enterprise Name', 'text'],
        ['employees', 'Total Employee Count', 'select', ['10 - 100 Employees', '100 - 500 Employees', '500 - 2,500 Employees', '2,500+ Enterprise Employees']],
        ['email', 'Corporate Work Email', 'email'], ['phone', 'Contact Phone', 'tel'],
      ],
      submit: 'Schedule Enterprise Consultation',
    },
  },

  command: {
    pageTitle: 'The Command Center Behind Every Connected Journey',
    tag: 'EMSTRAP COMMAND',
    subtitle: 'Manage ambulances, bookings, patient transportation and hospital coordination from one centralized platform.',
    primary: 'Partner With EMSTRAP', primaryHref: '#briefing',
    secondary: 'Request a Demo', secondaryHref: '#briefing',
    audience: ['For Ambulance Providers', 'Hospitals', 'Healthcare Networks'],
    panel: {
      title: 'One Command Center', badge: '10 COORDINATED TOUCHPOINTS',
      text: 'Calls, ambulances, crews, pickups, transport, hospitals, bookings, trips and records in one centralized platform.',
    },
    sections: [
      {
        kind: 'checks', label: 'CENTRALISED COORDINATION', title: 'Why EMSTRAP Command?',
        text: 'Emergency services cannot depend on disconnected phone calls. Ambulance operators and hospitals often have to manage multiple calls, availability, coordination, bookings, trip status and records. When this information is scattered, managing multiple emergencies becomes difficult. EMSTRAP Command brings these operations into one centralized platform.',
        intro: '10 coordinated touchpoints:',
        items: ['Multiple incoming calls', 'Ambulance availability', 'Driver/crew coordination', 'Pickup locations', 'Patient transportation', 'Hospital destinations', 'Booking confirmations', 'Trip status', 'Hospital coordination', 'Records and reports'],
      },
      {
        kind: 'cards', label: 'PARTNER WORKFLOWS', title: 'Built for the Pillars of Emergency Care',
        text: 'Whether you operate an ambulance fleet or manage trauma admissions at a multi-specialty hospital, EMSTRAP Command delivers the operational tools to succeed.',
        items: [
          { tag: 'FLEET DISPATCH', for: 'FOR AMBULANCE PROVIDERS', t: 'Turn ambulance operations into a connected workflow.', d: 'Receive bookings, manage ambulances, coordinate trips, monitor availability and track operations from a single platform.', bullets: ['Receive ambulance bookings', 'Manage ambulance availability', 'Track trips in real time', 'Manage drivers and crew', 'Maintain trip records and reports'] },
          { tag: 'EMERGENCY DEPT', for: 'FOR HOSPITALS', t: 'Prepare for the patient before arrival.', d: 'Receive incoming patient information, manage ambulance requests and coordinate patient transfers from one centralized platform.', bullets: ['View incoming ambulances', 'Manage patient transport requests', 'Coordinate hospital-to-hospital transfers', 'Track expected arrivals', 'Maintain records and reports'] },
        ],
      },
      {
        kind: 'cards', label: 'CENTRALIZED CONTROL', title: 'Unified Operating Architecture',
        text: 'Engineered for zero latency between dispatch call centers, ambulance fleets, and hospital emergency trauma units.',
        items: [
          c('Real-Time Fleet Telemetry', 'Monitor GPS coordinates, vehicle speed, oxygen equipment readiness, driver duty cycles, and real-time transit status in a single pane of glass.'),
          c('Hospital Bed & ER Sync', 'Transmits vital patient triage data to receiving emergency rooms in advance, ensuring critical trauma bays and surgical teams are prepped prior to arrival.'),
          c('Audit-Ready Incident Records', 'Automatically compiles tamper-proof trip records, timestamps, voice recordings, and handover signatures for clinical audits and regulatory compliance.'),
        ],
      },
    ],
    cta: { label: 'JOIN THE HEALTHCARE NETWORK', title: 'The Command Center Behind Every Connected Journey', button: 'Request a Demo' },
    form: {
      label: 'B2B HEALTHCARE ONBOARDING', title: 'Deploy EMSTRAP Command', text: 'For Ambulance Operators, Hospitals, and Healthcare Networks.',
      fields: [
        ['org', 'Organization Name', 'text'],
        ['orgType', 'Organization Type', 'select', ['Hospital / Emergency Department', 'Ambulance Service Provider (Fleet)', 'Healthcare Network (Multi-Facility)', 'Government Emergency Agency']],
        ['email', 'Official Work Email', 'email'], ['phone', 'Contact Phone', 'tel'],
      ],
      submit: 'Schedule Command Center Demo',
    },
  },
}
