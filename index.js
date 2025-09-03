////////////////////////////////////////////  H  T   M   L  /////////////////////////////////////////////////

const Paper1 = [
  {
    question:
      "Which of the following statements about the National Film Awards is correct?",
    answers: [
      { text: "They were initially called National Awards", correct: false },
      {
        text: "They started in 1954 for films released in 1953",
        correct: true,
      },
      { text: "They are administered by CBFC", correct: false },
      { text: "They have only one section – Feature Films", correct: false },
    ],
  },
  {
    question: "Who administers the National Film Awards in India?",
    answers: [
      { text: "Central Board of Film Certification", correct: false },
      { text: "Ministry of Culture", correct: false },
      { text: "Directorate of Film Festivals", correct: true },
      { text: "National School of Drama", correct: false },
    ],
  },
  {
    question:
      "The Directorate of Film Festivals functions under which ministry?",
    answers: [
      { text: "Ministry of Culture", correct: false },
      { text: "Ministry of Information and Broadcasting", correct: true },
      { text: "Ministry of Tourism", correct: false },
      { text: "Ministry of Education", correct: false },
    ],
  },
  {
    question:
      "Which of the following is NOT a section of the National Film Awards?",
    answers: [
      { text: "Feature Films", correct: false },
      { text: "Non-Feature Films", correct: false },
      { text: "Best Writing on Cinema", correct: false },
      { text: "International Films", correct: true },
    ],
  },
  {
    question:
      "BlueBird satellite, to be launched by ISRO, is developed by which company?",
    answers: [
      { text: "SpaceX", correct: false },
      { text: "AST SpaceMobile", correct: true },
      { text: "OneWeb", correct: false },
      { text: "Amazon Kuiper", correct: false },
    ],
  },
  {
    question: "What is the primary purpose of the BlueBird satellite?",
    answers: [
      { text: "Weather forecasting", correct: false },
      { text: "Direct-to-device mobile broadband services", correct: true },
      { text: "Earth observation", correct: false },
      { text: "Military surveillance", correct: false },
    ],
  },
  {
    question: "The Gaganyaan mission aims to achieve which of the following?",
    answers: [
      { text: "India's first Moon landing", correct: false },
      { text: "India's first Mars mission", correct: false },
      { text: "India's first human spaceflight", correct: true },
      { text: "India's first reusable launch vehicle", correct: false },
    ],
  },
  {
    question:
      "NISAR mission is a collaboration between ISRO and which space agency?",
    answers: [
      { text: "NASA", correct: true },
      { text: "ESA", correct: false },
      { text: "Roscosmos", correct: false },
      { text: "JAXA", correct: false },
    ],
  },
  {
    question: "What was the cause of PSLV-C61/EOS-09 mission failure?",
    answers: [
      { text: "Malfunction in the payload", correct: false },
      { text: "Anomaly in the third stage of the rocket", correct: true },
      { text: "Failure of ground communication systems", correct: false },
      { text: "Fuel leakage in the second stage", correct: false },
    ],
  },
  {
    question: "Which of the following orbits is associated with EOS-09?",
    answers: [
      { text: "Geostationary Orbit", correct: false },
      { text: "Sun-Synchronous Polar Orbit", correct: true },
      { text: "Medium Earth Orbit", correct: false },
      { text: "Highly Elliptical Orbit", correct: false },
    ],
  },
  {
    question:
      "The India-Middle East-Europe Economic Corridor (IMEC) was announced during which summit?",
    answers: [
      { text: "BRICS Summit 2023", correct: false },
      { text: "G20 Summit 2023", correct: true },
      { text: "ASEAN Summit 2023", correct: false },
      { text: "WTO Ministerial 2023", correct: false },
    ],
  },
  {
    question:
      "Which of the following infrastructure components are included in IMEC?",
    answers: [
      {
        text: "Electricity cables, hydrogen pipelines, and high-speed data cables",
        correct: true,
      },
      { text: "Only roads and railways", correct: false },
      { text: "Only sea ports and airports", correct: false },
      { text: "Nuclear power transmission lines", correct: false },
    ],
  },
  {
    question: "Which of the following countries is NOT a member of IMEC?",
    answers: [
      { text: "India", correct: false },
      { text: "United States", correct: false },
      { text: "Saudi Arabia", correct: false },
      { text: "China", correct: true },
    ],
  },
  {
    question: "Which of the following ports is part of IMEC?",
    answers: [
      { text: "Port of Shanghai", correct: false },
      { text: "Port of Haifa", correct: true },
      { text: "Chabahar Port", correct: false },
      { text: "Hambantota Port", correct: false },
    ],
  },
  {
    question: "Digital sovereignty refers to:",
    answers: [
      { text: "Control over political boundaries", correct: false },
      {
        text: "Control over digital infrastructure and data policies",
        correct: true,
      },
      { text: "Control over oil and gas reserves", correct: false },
      { text: "Control over land reforms", correct: false },
    ],
  },
  {
    question:
      "Which of the following concessions did India make in its FTA with the UK?",
    answers: [
      { text: "Mandatory source code disclosure", correct: false },
      { text: "Prohibition on demanding source code access", correct: true },
      { text: "Ban on open government data", correct: false },
      { text: "Unrestricted data localisation", correct: false },
    ],
  },
  {
    question:
      "Which global initiative on mangrove conservation was launched at COP27?",
    answers: [
      { text: "Mangrove Action Plan", correct: false },
      { text: "Mangrove Alliance for Climate", correct: true },
      { text: "Blue Carbon Pact", correct: false },
      { text: "Global Coastal Initiative", correct: false },
    ],
  },
  {
    question: "Which state in India has the largest mangrove forest?",
    answers: [
      { text: "Odisha", correct: false },
      { text: "Gujarat", correct: false },
      { text: "West Bengal", correct: true },
      { text: "Tamil Nadu", correct: false },
    ],
  },
  {
    question: "Which of the following is NOT a threat to mangroves?",
    answers: [
      { text: "Urbanisation", correct: false },
      { text: "Shrimp farming", correct: false },
      { text: "Invasive species", correct: false },
      { text: "Mangrove afforestation programmes", correct: true },
    ],
  },
  {
    question:
      "The legal basis for Special Intensive Revision (SIR) of electoral rolls is provided under which Act?",
    answers: [
      { text: "Representation of the People Act, 1950", correct: true },
      { text: "Representation of the People Act, 1951", correct: false },
      { text: "Delimitation Act, 2002", correct: false },
      { text: "Citizenship Act, 1955", correct: false },
    ],
  },
];
const Cluster_Utility_Computing = [
  {
    question: "What is Cluster Computing?",
    answers: [
      {
        text: "A type of distributed computing system using interconnected standalone computers",
        correct: true,
      },
      {
        text: "A centralized computing system relying on a single mainframe",
        correct: false,
      },
      {
        text: "A cloud-based resource sharing model",
        correct: false,
      },
      {
        text: "A model that only uses one high-performance computer",
        correct: false,
      },
    ],
  },
  {
    question: "Which of the following is NOT a type of cluster?",
    answers: [
      { text: "High Availability Cluster", correct: false },
      { text: "Load Balancing Cluster", correct: false },
      { text: "Data Warehouse Cluster", correct: true },
      { text: "Parallel/Distributed Processing Cluster", correct: false },
    ],
  },
  {
    question: "What is the main goal of deploying cluster computing?",
    answers: [
      { text: "To reduce the number of processors in use", correct: false },
      {
        text: "To improve speed and reliability cost-effectively",
        correct: true,
      },
      { text: "To create a backup of data", correct: false },
      { text: "To disconnect distributed systems", correct: false },
    ],
  },
  {
    question: "What are the basic components of a cluster system?",
    answers: [
      { text: "One single powerful server", correct: false },
      {
        text: "Multiple standalone computers, interconnects, middleware, and applications",
        correct: true,
      },
      { text: "Only middleware and OS", correct: false },
      { text: "Only client-server architecture", correct: false },
    ],
  },
  {
    question:
      "Which of the following is NOT an operational benefit of clustering?",
    answers: [
      { text: "High performance", correct: false },
      { text: "Reduced network connectivity", correct: true },
      { text: "Scalability", correct: false },
      { text: "System availability", correct: false },
    ],
  },
  {
    question:
      "Utility computing is a concept implemented by which computing model?",
    answers: [
      { text: "Grid computing", correct: false },
      { text: "Cloud computing", correct: true },
      { text: "Cluster computing", correct: false },
      { text: "Edge computing", correct: false },
    ],
  },
  {
    question: "What is a key advantage of utility computing?",
    answers: [
      { text: "High initial investment", correct: false },
      { text: "No virtualization", correct: false },
      { text: "Low or no initial cost and pay-per-use model", correct: true },
      { text: "Limited scalability", correct: false },
    ],
  },
  {
    question:
      "Which of the following is a common pricing model in utility computing?",
    answers: [
      { text: "Freeware model", correct: false },
      { text: "Subscription model", correct: true },
      { text: "One-time purchase", correct: false },
      { text: "Permanent license", correct: false },
    ],
  },
  {
    question:
      "Which of the following is a risk associated with utility computing?",
    answers: [
      { text: "Improved uptime", correct: false },
      { text: "Data security concerns", correct: true },
      { text: "No vendor support", correct: false },
      { text: "No usage monitoring", correct: false },
    ],
  },
  {
    question: "What does utility computing primarily solve?",
    answers: [
      { text: "Code redundancy", correct: false },
      { text: "Resource utilization problems", correct: true },
      { text: "User interface issues", correct: false },
      { text: "Power supply issues", correct: false },
    ],
  },
  {
    question:
      "What is a characteristic of the communication network in clusters?",
    answers: [
      { text: "High latency", correct: false },
      { text: "Low latency protocols", correct: true },
      { text: "Disconnected links", correct: false },
      { text: "Unreliable switches", correct: false },
    ],
  },
  {
    question: "Cluster computing systems are typically:",
    answers: [
      { text: "Tightly coupled like SMPs", correct: false },
      {
        text: "Loosely coupled systems with interconnected nodes",
        correct: true,
      },
      { text: "Monolithic and centralized", correct: false },
      { text: "Used only for storage", correct: false },
    ],
  },
  {
    question: "Which component ensures fault tolerance in cluster systems?",
    answers: [
      { text: "Disk-RAID and redundancy mechanisms", correct: true },
      { text: "Single thread handling", correct: false },
      { text: "Limited application layer", correct: false },
      { text: "Non-redundant processors", correct: false },
    ],
  },
  {
    question:
      "What does the 'pay-as-you-go' model in utility computing refer to?",
    answers: [
      { text: "Paying a fixed monthly rate", correct: false },
      { text: "Paying for exact usage only", correct: true },
      { text: "Lifetime free usage", correct: false },
      { text: "Annual payment", correct: false },
    ],
  },
  {
    question:
      "Which of the following is NOT typically part of utility computing services?",
    answers: [
      { text: "Web service delivery", correct: false },
      { text: "Software as a Service (SaaS)", correct: false },
      { text: "Free software without any charges", correct: true },
      { text: "Outsourcing infrastructure management", correct: false },
    ],
  },
  {
    question:
      "What enables utility computing to provide large-scale resources?",
    answers: [
      { text: "Virtualization", correct: true },
      { text: "Manual deployment", correct: false },
      { text: "Hardware-only expansion", correct: false },
      { text: "Offline access", correct: false },
    ],
  },
  {
    question: "Which benefit is common to both cluster and utility computing?",
    answers: [
      { text: "Redundancy and scalability", correct: true },
      { text: "High latency processing", correct: false },
      { text: "Low resource usage", correct: false },
      { text: "Manual provisioning", correct: false },
    ],
  },
  {
    question: "What kind of environment is targeted by utility computing?",
    answers: [
      { text: "Only academic use", correct: false },
      { text: "Flexible, on-demand computing environments", correct: true },
      { text: "Offline desktop solutions", correct: false },
      { text: "Gaming systems", correct: false },
    ],
  },
  {
    question: "Which is a characteristic of cluster nodes?",
    answers: [
      {
        text: "They are not independently functioning systems",
        correct: false,
      },
      { text: "They are standalone computers working together", correct: true },
      { text: "They must use the same OS always", correct: false },
      { text: "They can’t scale with more nodes", correct: false },
    ],
  },
  {
    question: "How is system availability enhanced in cluster computing?",
    answers: [
      { text: "Through a single point of failure", correct: false },
      { text: "By using redundant systems and applications", correct: true },
      { text: "By reducing the number of nodes", correct: false },
      { text: "By limiting user access", correct: false },
    ],
  },
];

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////  Weekly Compilation  ///////////////////////////////////////////////////////////////
const Paper2 = [
  {
    question:
      "Who developed the ULPGM (UAV-Launched Precision Guided Munition)?",
    answers: [
      { text: "ISRO", correct: false },
      { text: "DRDO", correct: true },
      { text: "HAL", correct: false },
      { text: "BEML", correct: false },
    ],
  },
  {
    question:
      "Which edition of Startup20 was launched in Johannesburg under South Africa’s G20 Presidency?",
    answers: [
      { text: "First", correct: false },
      { text: "Second", correct: false },
      { text: "Third", correct: true },
      { text: "Fourth", correct: false },
    ],
  },
  {
    question: "NavIC is India’s own navigation system covering:",
    answers: [
      { text: "Entire world", correct: false },
      { text: "Only Indian landmass", correct: false },
      { text: "India and 1,500 km around its borders", correct: true },
      { text: "Asia-Pacific region", correct: false },
    ],
  },
  {
    question: "Which country is testing AI-based Dynamic Targeting satellites?",
    answers: [
      { text: "Russia", correct: false },
      { text: "USA (NASA)", correct: true },
      { text: "India (ISRO)", correct: false },
      { text: "China (CNSA)", correct: false },
    ],
  },
  {
    question: "Which body governs the Coconut Development Board in India?",
    answers: [
      { text: "Ministry of Commerce", correct: false },
      { text: "Ministry of Agriculture and Farmers Welfare", correct: true },
      { text: "Ministry of Food Processing Industries", correct: false },
      { text: "Ministry of Environment", correct: false },
    ],
  },
  {
    question: "E3 countries in the Iran nuclear talks include:",
    answers: [
      { text: "France, Germany, UK", correct: true },
      { text: "USA, France, Germany", correct: false },
      { text: "Russia, China, UK", correct: false },
      { text: "France, UK, USA", correct: false },
    ],
  },
  {
    question:
      "Which NGO supported the revival of the Chudasidh Adavad sacred grove?",
    answers: [
      { text: "SEWA", correct: false },
      { text: "KRAPAVIS", correct: true },
      { text: "Van Suraksha", correct: false },
      { text: "Tarun Bharat Sangh", correct: false },
    ],
  },
  {
    question:
      "Which festival is associated with the Chola dynasty and Shaivism?",
    answers: [
      { text: "Aadi Thiruvathirai", correct: true },
      { text: "Pongal", correct: false },
      { text: "Karthigai Deepam", correct: false },
      { text: "Navaratri", correct: false },
    ],
  },
  {
    question: "Divya Deshmukh recently became India’s:",
    answers: [
      { text: "First female International Master", correct: false },
      { text: "First female Grandmaster", correct: false },
      { text: "First woman to win FIDE Women’s World Cup", correct: true },
      { text: "First woman to win Candidates Tournament", correct: false },
    ],
  },
  {
    question:
      "Golden Jackal (Canis aureus) is listed under which Schedule of the Wildlife Protection Act, 1972?",
    answers: [
      { text: "Schedule II", correct: false },
      { text: "Schedule I", correct: true },
      { text: "Schedule III", correct: false },
      { text: "Schedule IV", correct: false },
    ],
  },
  {
    question: "Which of the following are features of ULPGM-V3?",
    answers: [
      { text: "Passive homing with IIR seeker", correct: true },
      { text: "Fire-and-forget capability", correct: true },
      { text: "Liquid propulsion system", correct: false },
      { text: "Range of 10 km", correct: false },
    ],
  },
  {
    question: "Which statements about Startup20 are correct?",
    answers: [
      { text: "It was launched during India’s G20 Presidency", correct: true },
      { text: "It focuses on MSMEs and startups", correct: true },
      { text: "It is an official G20 engagement group", correct: true },
      { text: "It started in 2018", correct: false },
    ],
  },
  {
    question: "Which of the following services are provided by NavIC?",
    answers: [
      { text: "Standard Positioning Service (SPS)", correct: true },
      { text: "Restricted Service (RS)", correct: true },
      { text: "Satellite Phone Service", correct: false },
      { text: "Marine Navigation Service", correct: false },
    ],
  },
  {
    question: "Dynamic Targeting satellites by NASA use AI for:",
    answers: [
      { text: "Scanning real-time areas", correct: true },
      { text: "Filtering cloudy images", correct: true },
      { text: "Launching rockets autonomously", correct: false },
      { text: "Repairing other satellites", correct: false },
    ],
  },
  {
    question: "Which factors are causing coconut oil price rise?",
    answers: [
      { text: "El Niño-induced drought", correct: true },
      { text: "Use of coconut oil for biodiesel", correct: true },
      { text: "Increased sugarcane production", correct: false },
      { text: "Aging plantations", correct: true },
    ],
  },
  {
    question: "Features of the JCPOA include:",
    answers: [
      { text: "Limiting Iran’s nuclear program", correct: true },
      { text: "Sanctions relief for Iran", correct: true },
      { text: "Automatic sanctions under Snapback mechanism", correct: true },
      { text: "Signed only by E3 countries", correct: false },
    ],
  },
  {
    question: "Which of the following are sacred groves in India?",
    answers: [
      { text: "Chudasidh Adavad", correct: true },
      { text: "Law Kyntang", correct: true },
      { text: "Devrai", correct: true },
      { text: "Kanha", correct: false },
    ],
  },
  {
    question:
      "Which statements about Kala Utsav – Artists in Residence are correct?",
    answers: [
      { text: "Started in 2013", correct: true },
      { text: "Held at Rashtrapati Bhavan", correct: true },
      { text: "Focuses only on modern art", correct: false },
      { text: "Promotes folk and tribal art forms", correct: true },
    ],
  },
  {
    question: "Maritime Amrit Kaal Vision (MAKV) includes:",
    answers: [
      { text: "Reducing port turnaround time", correct: true },
      { text: "Bills of Lading Bill, 2025", correct: true },
      { text: "Prohibition on FDI in shipping", correct: false },
      { text: "Creating Maritime Development Fund", correct: true },
    ],
  },
  {
    question:
      "Which statements about International Big Cat Alliance (IBCA) are correct?",
    answers: [
      { text: "Launched by India", correct: true },
      { text: "Focuses on 7 big cats", correct: true },
      {
        text: "Membership restricted to countries with all seven cats",
        correct: false,
      },
      { text: "Headquarters in India", correct: true },
    ],
  },
  {
    question:
      "With reference to the Pralay missile, consider the following statements:\n\n1. It is a surface-to-surface missile using solid fuel.\n2. It follows a quasi-ballistic trajectory.\n3. It was jointly developed with Israel.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1 and 2 only", correct: true },
      { text: "1 and 3 only", correct: false },
      { text: "2 and 3 only", correct: false },
      { text: "1, 2 and 3", correct: false },
    ],
  },
  {
    question:
      "With reference to the Chola dynasty’s Kudavolai system, consider the following:\n\n1. It involved random selection of officials by drawing names from a pot.\n2. Candidates had to meet strict eligibility criteria.\n3. Women were allowed to contest.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1 and 2 only", correct: true },
      { text: "2 and 3 only", correct: false },
      { text: "1 and 3 only", correct: false },
      { text: "1, 2 and 3", correct: false },
    ],
  },
  {
    question:
      "With reference to NavIC, consider the following statements:\n\n1. It uses only Geostationary satellites.\n2. It provides two types of services – SPS and RS.\n3. It covers India and 1,500 km beyond its borders.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1 and 2 only", correct: false },
      { text: "2 and 3 only", correct: true },
      { text: "1 and 3 only", correct: false },
      { text: "1, 2 and 3", correct: false },
    ],
  },
  {
    question:
      "With reference to NISAR satellite, consider the following statements:\n\n1. It is an ISRO-NASA collaboration.\n2. It uses dual-frequency SAR for Earth observation.\n3. It will be launched by PSLV.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1 and 2 only", correct: true },
      { text: "2 and 3 only", correct: false },
      { text: "1 and 3 only", correct: false },
      { text: "1, 2 and 3", correct: false },
    ],
  },
  {
    question:
      "With reference to India’s Climate Finance Taxonomy, consider the following:\n\n1. It is a framework to define climate-aligned economic activities.\n2. It was released by the Ministry of Finance.\n3. It is a legally binding document.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1 and 2 only", correct: true },
      { text: "2 and 3 only", correct: false },
      { text: "1 and 3 only", correct: false },
      { text: "1, 2 and 3", correct: false },
    ],
  },
  {
    question:
      "With reference to Glacial Lake Outburst Floods (GLOFs), consider the following:\n\n1. Moraine-dammed lakes are highly susceptible to failure.\n2. ISRO’s Glacial Lake Atlas maps vulnerable lakes.\n3. Earthquakes and avalanches can trigger GLOFs.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1 and 2 only", correct: false },
      { text: "2 and 3 only", correct: false },
      { text: "1 and 3 only", correct: false },
      { text: "1, 2 and 3", correct: true },
    ],
  },
  {
    question:
      "With reference to IBCA, consider the following:\n\n1. It was launched in 2023.\n2. Its model is similar to the International Solar Alliance.\n3. Membership is restricted to Asian countries only.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1 and 2 only", correct: true },
      { text: "2 and 3 only", correct: false },
      { text: "1 and 3 only", correct: false },
      { text: "1, 2 and 3", correct: false },
    ],
  },
  {
    question:
      "With reference to the Environment Protection (Management of Contaminated Sites) Rules, 2025, consider the following:\n\n1. They were notified under the Environment Protection Act, 1986.\n2. Polluters will bear the remediation cost.\n3. There is no provision for criminal liability.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1 and 2 only", correct: true },
      { text: "2 and 3 only", correct: false },
      { text: "1 and 3 only", correct: false },
      { text: "1, 2 and 3", correct: false },
    ],
  },
  {
    question:
      "With reference to RBI’s new rule on AIFs, consider the following:\n\n1. Banks can invest up to 10% of an AIF scheme individually.\n2. All regulated entities combined can invest up to 20% in a single AIF scheme.\n3. AIFs are regulated by RBI.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1 and 2 only", correct: true },
      { text: "2 and 3 only", correct: false },
      { text: "1 and 3 only", correct: false },
      { text: "1, 2 and 3", correct: false },
    ],
  },
  {
    question:
      "With reference to the proposal for recognition of Palestine by France, consider the following:\n\n1. France will become the first G7 country to recognize Palestine.\n2. India recognized Palestine as a state in 1988.\n3. Full UN membership for Palestine requires UNSC approval.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1 and 2 only", correct: false },
      { text: "2 and 3 only", correct: false },
      { text: "1 and 3 only", correct: false },
      { text: "1, 2 and 3", correct: true },
    ],
  },
];

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////  4 August 2025  ////////////////////////////////////////
const Paper3 = [
  {
    question:
      "Mithun (Bos frontalis), recently in the news, is primarily found in:",
    answers: [
      { text: "Western Ghats", correct: false },
      { text: "Eastern Himalayas", correct: false },
      { text: "Tropical rainforest regions of Northeast India", correct: true },
      { text: "Indo-Gangetic plains", correct: false },
    ],
  },
  {
    question:
      "Which country recently started producing and plans to deploy the Oreshnik hypersonic missile?",
    answers: [
      { text: "United States", correct: false },
      { text: "China", correct: false },
      { text: "Russia", correct: true },
      { text: "North Korea", correct: false },
    ],
  },
  {
    question:
      "INS Satpura, recently in news, belongs to which class of Indian Navy ships?",
    answers: [
      { text: "Talwar-class", correct: false },
      { text: "Shivalik-class", correct: true },
      { text: "Kolkata-class", correct: false },
      { text: "Delhi-class", correct: false },
    ],
  },
  {
    question:
      "The Red Panda is considered an indicator species for the health of which ecosystem?",
    answers: [
      { text: "Western Ghats", correct: false },
      { text: "Eastern Himalayan forests", correct: true },
      { text: "Sundarbans mangroves", correct: false },
      { text: "Arid Thar Desert", correct: false },
    ],
  },
  {
    question:
      "Which of the following countries is NOT a member of the Indo-Burma Ramsar Regional Initiative (IBRRI)?",
    answers: [
      { text: "Cambodia", correct: false },
      { text: "Thailand", correct: false },
      { text: "India", correct: true },
      { text: "Vietnam", correct: false },
    ],
  },
  {
    question:
      "The SEED scheme is primarily targeted at the welfare of which communities?",
    answers: [
      { text: "Scheduled Tribes", correct: false },
      { text: "Denotified, Nomadic, and Semi-Nomadic Tribes", correct: true },
      { text: "Scheduled Castes", correct: false },
      { text: "Other Backward Classes", correct: false },
    ],
  },
  {
    question:
      "Which Indian region has recorded the world’s highest bird mortality rate due to wind farms?",
    answers: [
      { text: "Western Ghats", correct: false },
      { text: "Thar Desert", correct: true },
      { text: "Kutch region", correct: false },
      { text: "Eastern Coastal Plains", correct: false },
    ],
  },
  {
    question: "Which of the following best describes a biosimilar?",
    answers: [
      { text: "A generic version of a chemical drug", correct: false },
      { text: "A chemically identical copy of a biologic", correct: false },
      {
        text: "A biologic-like drug requiring safety and efficacy testing",
        correct: true,
      },
      { text: "A synthetic hormone", correct: false },
    ],
  },
  {
    question:
      "Which Indian festival is associated with honoring the arrival of Mithun (Gayal) on Earth?",
    answers: [
      { text: "Losar", correct: false },
      { text: "Soulung", correct: true },
      { text: "Chapchar Kut", correct: false },
      { text: "Wangala", correct: false },
    ],
  },
  {
    question: "The SE2000 engine, being developed by ISRO, is a:",
    answers: [
      { text: "Full cryogenic engine", correct: false },
      { text: "Solid rocket booster", correct: false },
      { text: "Semi-cryogenic engine using LOX and kerosene", correct: true },
      { text: "Hybrid engine using solid and liquid fuel", correct: false },
    ],
  },
  {
    question: "Which of the following statements about Red Panda are correct?",
    answers: [
      {
        text: "It is classified as Endangered on IUCN Red List",
        correct: true,
      },
      { text: "It is arboreal and mostly herbivorous", correct: true },
      { text: "It naturally occurs in Western Ghats", correct: false },
      {
        text: "It is an indicator species for Himalayan ecosystems",
        correct: true,
      },
    ],
  },
  {
    question: "Which of the following are features of the Oreshnik missile?",
    answers: [
      { text: "Hypersonic speed up to Mach 10", correct: true },
      {
        text: "Can carry both nuclear and conventional warheads",
        correct: true,
      },
      { text: "Range of about 500 km", correct: false },
      { text: "Uses MIRV technology", correct: true },
    ],
  },
  {
    question:
      "Consider the following cultural practices and their states. Which pairs are correctly matched?",
    answers: [
      { text: "Nangarni Spardha – Maharashtra", correct: true },
      { text: "Kambala – Karnataka", correct: true },
      { text: "Maramadi – Kerala", correct: true },
      { text: "Soulung – Mizoram", correct: false },
    ],
  },
  {
    question:
      "Which of the following statements about the SEED scheme are correct?",
    answers: [
      { text: "Provides free coaching for competitive exams", correct: true },
      { text: "Offers health insurance and housing support", correct: true },
      { text: "Targets SC and ST communities exclusively", correct: false },
      {
        text: "Launched by Ministry of Social Justice & Empowerment",
        correct: true,
      },
    ],
  },
  {
    question:
      "Which of the following are true about the semi-cryogenic upgrade of ISRO’s LVM3 rocket?",
    answers: [
      { text: "Uses LOX and kerosene as propellants", correct: true },
      { text: "Will increase payload capacity", correct: true },
      { text: "Both propellants are cryogenic", correct: false },
      { text: "Expected to be operational by 2027", correct: true },
    ],
  },
  {
    question: `With reference to the Indo-Burma Ramsar Regional Initiative (IBRRI), consider the following statements:

1. It is a Ramsar Convention initiative for wetland cooperation among five Southeast Asian countries.
2. India and Bangladesh are members of IBRRI.
3. The Secretariat is hosted by the IUCN Asia Office in Bangkok.
4. Its 2025–2030 Strategic Plan aims to reverse wetland loss and promote cross-border cooperation.

Which of the above statements is/are correct?`,
    answers: [
      { text: "A. 1, 2 and 3 only", correct: false },
      { text: "B. 3 and 4 only", correct: false },
      { text: "C. 1, 3 and 4 only", correct: true },
      { text: "D. 1, 2, 3 and 4", correct: false },
    ],
  },
  {
    question: `With reference to Mithun (Bos frontalis), consider the following statements:

1. It is a semi-domesticated bovine species primarily found in Northeast India.
2. It is classified as Endangered on the IUCN Red List.
3. It is the state animal of Arunachal Pradesh and Nagaland.
4. It has been included under the Wildlife Protection Act, 1972.

Which of the above statements is/are correct?`,
    answers: [
      { text: "A. 1, 2 and 3 only", correct: false },
      { text: "B. 1 and 3 only", correct: true },
      { text: "C. 2, 3 and 4 only", correct: false },
      { text: "D. 1, 2, 3 and 4", correct: false },
    ],
  },
  {
    question: `With reference to wind energy projects in India, consider the following statements:

1. The Thar Desert is part of the Central Asian Flyway for migratory birds.
2. Onshore wind energy projects in India require mandatory Environmental Impact Assessments (EIAs).
3. AVISTEP tool for bird sensitivity mapping is developed by BirdLife International.

Which of the above statements is/are correct?`,
    answers: [
      { text: "A. 1 and 2 only", correct: false },
      { text: "B. 1 and 3 only", correct: true },
      { text: "C. 2 and 3 only", correct: false },
      { text: "D. 1, 2 and 3", correct: false },
    ],
  },
  {
    question: `With reference to biosimilars, consider the following statements:

1. They are identical chemical copies of biologic drugs.
2. They require extensive testing unlike generics.
3. Relaxing norms for biosimilars can improve affordability without compromising safety.

Which of the above statements is/are correct?`,
    answers: [
      { text: "A. 1 and 2 only", correct: false },
      { text: "B. 2 and 3 only", correct: true },
      { text: "C. 1 and 3 only", correct: false },
      { text: "D. All three", correct: false },
    ],
  },
  {
    question: `With reference to ISRO’s LVM3 semi-cryogenic upgrade, consider the following statements:

1. The new engine SE2000 uses LOX and kerosene.
2. Both propellants in the engine are cryogenic.
3. The upgrade will increase payload capacity and reduce cost.

Which of the above statements is/are correct?`,
    answers: [
      { text: "A. 1 and 2 only", correct: false },
      { text: "B. 1 and 3 only", correct: true },
      { text: "C. 2 and 3 only", correct: false },
      { text: "D. All three", correct: false },
    ],
  },
];

////////////////////////////////////////////  5 August 2025 //////////////////////////////////////
const Paper4 = [
  // ---------- 10 Single Correct Questions ----------
  {
    question:
      "Which species was recently reintroduced in the Zeliang Community Reserve, Nagaland?",
    answers: [
      { text: "Indian Star Tortoise", correct: false },
      { text: "Asian Giant Tortoise", correct: true },
      { text: "Olive Ridley Turtle", correct: false },
      { text: "Aldabra Tortoise", correct: false },
    ],
  },
  {
    question:
      "What is the IUCN status of the Asian Giant Tortoise (Manouria emys)?",
    answers: [
      { text: "Vulnerable", correct: false },
      { text: "Endangered", correct: false },
      { text: "Critically Endangered", correct: true },
      { text: "Near Threatened", correct: false },
    ],
  },
  {
    question:
      "India’s largest share of edible oil imports is constituted by which oil?",
    answers: [
      { text: "Soybean Oil", correct: false },
      { text: "Sunflower Oil", correct: false },
      { text: "Palm Oil", correct: true },
      { text: "Groundnut Oil", correct: false },
    ],
  },
  {
    question:
      "Which country has the highest share in global palm oil production?",
    answers: [
      { text: "Malaysia", correct: false },
      { text: "Indonesia", correct: true },
      { text: "Thailand", correct: false },
      { text: "India", correct: false },
    ],
  },
  {
    question:
      "What is the primary reason for the projected decline in palm oil exports from Indonesia and Malaysia?",
    answers: [
      { text: "Low global demand", correct: false },
      { text: "Aging trees and low replanting rates", correct: true },
      { text: "Trade sanctions", correct: false },
      { text: "Ban on palm oil cultivation", correct: false },
    ],
  },
  {
    question:
      "Which scheme was launched in India to boost domestic palm oil production?",
    answers: [
      { text: "NMEO-OP", correct: true },
      { text: "PM-KUSUM", correct: false },
      { text: "RKVY", correct: false },
      { text: "National Oil Mission", correct: false },
    ],
  },
  {
    question:
      "Which branch of the Indian Armed Forces has the highest percentage of women personnel?",
    answers: [
      { text: "Indian Army", correct: false },
      { text: "Indian Navy", correct: false },
      { text: "Indian Air Force", correct: true },
      { text: "Indian Coast Guard", correct: false },
    ],
  },
  {
    question:
      "Which fighter jet is planned to replace MiG-21 in the Indian Air Force?",
    answers: [
      { text: "Rafale", correct: false },
      { text: "LCA Tejas Mk1A", correct: true },
      { text: "Jaguar", correct: false },
      { text: "Su-30MKI", correct: false },
    ],
  },
  {
    question:
      "Under the Battery Waste Management Rules, 2022, which principle mandates manufacturers to take responsibility for end-of-life batteries?",
    answers: [
      { text: "Polluter Pays Principle", correct: false },
      { text: "Extended Producer Responsibility (EPR)", correct: true },
      { text: "Circular Economy Rule", correct: false },
      { text: "Precautionary Principle", correct: false },
    ],
  },
  {
    question:
      "Which mineral is NOT commonly recovered from lithium-ion battery recycling?",
    answers: [
      { text: "Cobalt", correct: false },
      { text: "Nickel", correct: false },
      { text: "Bauxite", correct: true },
      { text: "Lithium", correct: false },
    ],
  },

  // ---------- 5 Multiple Correct Questions ----------
  {
    question:
      "Which of the following are features of the Asian Giant Tortoise?",
    answers: [
      { text: "Builds above-ground nests using leaf litter", correct: true },
      { text: "Largest tortoise in mainland Asia", correct: true },
      { text: "Exclusively freshwater habitat", correct: false },
      { text: "Plays a role in seed dispersal", correct: true },
    ],
  },
  {
    question: "Which of the following are major uses of palm oil?",
    answers: [
      { text: "Cooking oil and processed food", correct: true },
      { text: "Biodiesel production", correct: true },
      { text: "Making cement", correct: false },
      { text: "Cosmetics and cleaning products", correct: true },
    ],
  },
  {
    question:
      "Which of the following steps have been taken to enhance women's participation in the Armed Forces?",
    answers: [
      {
        text: "Permanent Commission for women in multiple branches",
        correct: true,
      },
      { text: "Women inducted as Agniveers", correct: true },
      { text: "All submarine postings open to women", correct: false },
      { text: "Induction through NDA", correct: true },
    ],
  },
  {
    question:
      "Which of the following fighter aircraft belong to 4th generation?",
    answers: [
      { text: "Rafale", correct: true },
      { text: "MiG-29", correct: true },
      { text: "Tejas Mk-1", correct: true },
      { text: "AMCA", correct: false },
    ],
  },
  {
    question:
      "Which of the following are objectives of the National Mission on Edible Oils – Oil Palm (NMEO-OP)?",
    answers: [
      { text: "Expand oil palm cultivation area", correct: true },
      { text: "Provide viability price to farmers", correct: true },
      { text: "Reduce import dependency", correct: true },
      { text: "Replace all other edible oils with palm oil", correct: false },
    ],
  },

  // ---------- 5 UPSC-type Statement Questions ----------
  {
    question: `With reference to the Asian Giant Tortoise, consider the following statements:

1. It is listed under Appendix I of CITES.
2. It is the only tortoise species that builds above-ground nests using leaf litter.
3. It plays an important role in forest regeneration.

Which of the above statements is/are correct?`,
    answers: [
      { text: "A. 1 and 2 only", correct: false },
      { text: "B. 2 and 3 only", correct: true },
      { text: "C. 1 and 3 only", correct: false },
      { text: "D. 1, 2 and 3", correct: false },
    ],
  },
  {
    question: `With reference to global palm oil trade, consider the following statements:

1. Indonesia and Malaysia account for more than 80% of the world’s palm oil production.
2. Palm oil is used as a major feedstock for biodiesel in Southeast Asia.
3. The oil palm tree is native to Southeast Asia.

Which of the above statements is/are correct?`,
    answers: [
      { text: "A. 1 and 2 only", correct: true },
      { text: "B. 2 and 3 only", correct: false },
      { text: "C. 1 and 3 only", correct: false },
      { text: "D. 1, 2 and 3", correct: false },
    ],
  },
  {
    question: `With reference to women in the Indian Armed Forces, consider the following statements:

1. Women have been granted Permanent Commission in all roles across Army, Navy, and Air Force.
2. The Indian Air Force has the highest percentage of women personnel among the three services.
3. Women can apply as Agniveers under the same standards as men.

Which of the above statements is/are correct?`,
    answers: [
      { text: "A. 1 and 2 only", correct: false },
      { text: "B. 2 and 3 only", correct: true },
      { text: "C. 1 and 3 only", correct: false },
      { text: "D. 1, 2 and 3", correct: false },
    ],
  },
  {
    question: `With reference to Battery Waste Management Rules, 2022, consider the following statements:

1. The rules aim to implement Extended Producer Responsibility for battery recycling.
2. The EPR floor price ensures economic viability for genuine recyclers.
3. India currently recycles all its used lithium-ion batteries efficiently.

Which of the above statements is/are correct?`,
    answers: [
      { text: "A. 1 and 2 only", correct: true },
      { text: "B. 2 and 3 only", correct: false },
      { text: "C. 1 and 3 only", correct: false },
      { text: "D. 1, 2 and 3", correct: false },
    ],
  },
  {
    question: `With reference to India’s fighter jet modernization plans, consider the following statements:

1. LCA Tejas Mk1A is planned to replace MiG-21 aircraft.
2. AMCA is India’s first fifth-generation fighter aircraft under development.
3. Rafale belongs to the fifth-generation fighter category.

Which of the above statements is/are correct?`,
    answers: [
      { text: "A. 1 and 2 only", correct: true },
      { text: "B. 2 and 3 only", correct: false },
      { text: "C. 1 and 3 only", correct: false },
      { text: "D. 1, 2 and 3", correct: false },
    ],
  },
];

/////////////////////////////////////  6 August 2025  ///////////////////////////////////////////
const Paper5 = [
  // 1–10: Single Correct Type
  {
    question: "What defines a cloudburst?",
    answers: [
      { text: "Rainfall over 50 mm per hour", correct: false },
      { text: "Rainfall over a large plain area", correct: false },
      {
        text: "More than 100 mm of rain in an hour over a small area",
        correct: true,
      },
      { text: "Hailstorm and heavy rain combined", correct: false },
    ],
  },
  {
    question: "Which region is most prone to cloudbursts in India?",
    answers: [
      { text: "Western Ghats", correct: false },
      { text: "Himalayan region", correct: true },
      { text: "Deccan Plateau", correct: false },
      { text: "Thar Desert", correct: false },
    ],
  },
  {
    question: "Which among the following is NOT a stage of money laundering?",
    answers: [
      { text: "Layering", correct: false },
      { text: "Placement", correct: false },
      { text: "Collection", correct: true },
      { text: "Integration", correct: false },
    ],
  },
  {
    question: "What does DTAA primarily help in?",
    answers: [
      { text: "Double investment by investors", correct: false },
      { text: "Avoiding tax evasion in one’s home country", correct: true },
      { text: "Avoiding black money", correct: false },
      { text: "Discouraging NRIs from investing", correct: false },
    ],
  },
  {
    question: "What is the role of IRDAI in India?",
    answers: [
      { text: "Regulates stock market", correct: false },
      { text: "Regulates mutual funds", correct: false },
      { text: "Regulates and promotes the insurance industry", correct: true },
      { text: "Regulates banking sector", correct: false },
    ],
  },
  {
    question: "Which type of insurance does IRDAI NOT regulate?",
    answers: [
      { text: "Health Insurance", correct: false },
      { text: "Reinsurance", correct: false },
      { text: "Travel Insurance", correct: false },
      { text: "None of the above", correct: true },
    ],
  },
  {
    question: "AUM stands for?",
    answers: [
      { text: "Average Unit Management", correct: false },
      { text: "Asset Under Management", correct: true },
      { text: "Amount Utilised Monthly", correct: false },
      { text: "Annual Unit Measure", correct: false },
    ],
  },
  {
    question: "Which of the following affects AUM?",
    answers: [
      { text: "Only investor redemptions", correct: false },
      { text: "Only market performance", correct: false },
      { text: "Market changes, inflows, and redemptions", correct: true },
      { text: "Government policy only", correct: false },
    ],
  },
  {
    question: "The IRDA Act was passed in which year?",
    answers: [
      { text: "2000", correct: false },
      { text: "2002", correct: false },
      { text: "1999", correct: true },
      { text: "1991", correct: false },
    ],
  },
  {
    question: "Who has the burden of proof under the PMLA?",
    answers: [
      { text: "Government", correct: false },
      { text: "Investigating Agency", correct: false },
      { text: "Accused", correct: true },
      { text: "Court", correct: false },
    ],
  },

  // 11–15: Multiple Correct Type
  {
    question: "Which of the following are effects of cloudbursts?",
    answers: [
      { text: "Flash floods", correct: true },
      { text: "Landslides", correct: true },
      { text: "Global warming", correct: false },
      { text: "Infrastructure damage", correct: true },
    ],
  },
  {
    question: "Which of the following are true about the IRDAI?",
    answers: [
      { text: "It is headquartered in Hyderabad", correct: true },
      { text: "It regulates mutual funds", correct: false },
      { text: "It regulates reinsurance companies", correct: true },
      {
        text: "It functions under the Ministry of Home Affairs",
        correct: false,
      },
    ],
  },
  {
    question: "Which of the following best describe the term Laundromat?",
    answers: [
      { text: "A place where clothes are washed", correct: false },
      { text: "A setup to clean illegal money", correct: true },
      { text: "A financial structure to hide the money trail", correct: true },
      { text: "An act passed by Parliament", correct: false },
    ],
  },
  {
    question:
      "Which of the following contribute to frequent cloudbursts in the Himalayas?",
    answers: [
      { text: "Steep terrain", correct: true },
      { text: "Deforestation", correct: true },
      { text: "Unplanned development", correct: true },
      { text: "High-speed winds from the east", correct: false },
    ],
  },
  {
    question: "Which of the following are included in India's mutual fund AUM?",
    answers: [
      { text: "Bonds", correct: true },
      { text: "Gold deposits", correct: false },
      { text: "Stocks", correct: true },
      { text: "Cash", correct: true },
    ],
  },

  // 16–20: Statement Type MCQs
  {
    question:
      "With reference to cloudbursts in the Himalayas, consider the following statements:\n\n1. They usually cover areas exceeding 100 sq. km.\n2. The orographic effect plays a role in triggering cloudbursts.\n3. Human development in fragile zones can worsen the impact.\n\nWhich of the statements given above is/are correct?",
    answers: [
      { text: "A. 1 and 2 only", correct: false },
      { text: "B. 2 and 3 only", correct: true },
      { text: "C. 1 and 3 only", correct: false },
      { text: "D. 1, 2 and 3", correct: false },
    ],
  },
  {
    question:
      "With reference to Money Laundering, consider the following statements:\n\n1. The accused must prove their innocence under PMLA.\n2. FIR is mandatory before action can be taken under PMLA.\n3. DTAA helps track illegal overseas transactions.\n\nWhich of the statements given above is/are correct?",
    answers: [
      { text: "A. 1 and 2 only", correct: false },
      { text: "B. 2 and 3 only", correct: false },
      { text: "C. 1 and 3 only", correct: true },
      { text: "D. 1, 2 and 3", correct: false },
    ],
  },
  {
    question:
      "With reference to the IRDAI, consider the following statements:\n\n1. It regulates only life insurance companies.\n2. It was established under an Act of Parliament.\n3. It promotes insurance in rural areas.\n4. It has power to regulate insurance agents.\n\nWhich of the above statements are correct?",
    answers: [
      { text: "A. 1, 2 and 3 only", correct: false },
      { text: "B. 2, 3 and 4 only", correct: true },
      { text: "C. 1 and 4 only", correct: false },
      { text: "D. 2 and 3 only", correct: false },
    ],
  },
  {
    question:
      "Consider the following statements about AUM (Assets Under Management):\n\n1. It refers to the assets owned by mutual fund companies.\n2. It can increase due to market gains and reinvestments.\n3. It always leads to lower expense ratios.\n\nWhich of the statements given above is/are correct?",
    answers: [
      { text: "A. 1 only", correct: false },
      { text: "B. 2 only", correct: true },
      { text: "C. 3 only", correct: false },
      { text: "D. 1, 2 and 3", correct: false },
    ],
  },
  {
    question:
      "With reference to the Philippines and India's recent ties, consider the following statements:\n\n1. The Philippines has purchased the BrahMos missile from India.\n2. Mount Apo is the highest peak of the Philippines located in Luzon.\n3. The Philippines is a democracy and a strategic player in the Indo-Pacific region.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "A. 1 and 2 only", correct: false },
      { text: "B. 2 and 3 only", correct: false },
      { text: "C. 1 and 3 only", correct: true },
      { text: "D. 1, 2 and 3", correct: false },
    ],
  },
];

//////////////////////////  7 August 2025  //////////////////////////////////////
const Paper6 = [
  // --- 1 to 10: Single correct answer type ---
  {
    question:
      "Which of the following best explains why cloudbursts occur in the Himalayas?",
    answers: [
      { text: "High temperature in the plains", correct: false },
      { text: "Steep slopes pushing moist air upward rapidly", correct: true },
      { text: "Presence of deserts nearby", correct: false },
      { text: "Cold ocean currents", correct: false },
    ],
  },
  {
    question: "The IUCN status of the Red-eared Slider Turtle is:",
    answers: [
      { text: "Endangered", correct: false },
      { text: "Vulnerable", correct: false },
      { text: "Critically Endangered", correct: false },
      { text: "Least Concern", correct: true },
    ],
  },
  {
    question: "Biochar is produced through:",
    answers: [
      { text: "Combustion of fossil fuels", correct: false },
      { text: "Pyrolysis of biomass in absence of oxygen", correct: true },
      { text: "Chemical fertilizer reaction", correct: false },
      { text: "Solar heating of manure", correct: false },
    ],
  },
  {
    question: "Which body regulates the insurance sector in India?",
    answers: [
      { text: "SEBI", correct: false },
      { text: "RBI", correct: false },
      { text: "IRDAI", correct: true },
      { text: "FSSAI", correct: false },
    ],
  },
  {
    question:
      "Under which ministry does the Coconut Development Board operate?",
    answers: [
      { text: "Ministry of Commerce and Industry", correct: false },
      { text: "Ministry of Agriculture and Farmers Welfare", correct: true },
      { text: "Ministry of Food Processing", correct: false },
      { text: "Ministry of Rural Development", correct: false },
    ],
  },
  {
    question: "Which port in India is proposed as a transshipment hub?",
    answers: [
      { text: "Chennai", correct: false },
      { text: "Galathea Bay, Great Nicobar", correct: true },
      { text: "Haldia", correct: false },
      { text: "Paradeep", correct: false },
    ],
  },
  {
    question:
      "Which of the following missions replaced Sugamya Bharat Abhiyan?",
    answers: [
      { text: "Smart Cities Mission", correct: false },
      { text: "SIPDA", correct: true },
      { text: "Swachh Bharat Abhiyan", correct: false },
      { text: "UDAN", correct: false },
    ],
  },
  {
    question: "What is the purpose of the Green Tug Transition Programme?",
    answers: [
      {
        text: "Replace diesel tugs with electric ones by 2025",
        correct: false,
      },
      { text: "Promote solar-powered ports", correct: false },
      {
        text: "Replace conventional tugs with green fuel-based tugs by 2040",
        correct: true,
      },
      { text: "Subsidize electric fishing boats", correct: false },
    ],
  },
  {
    question:
      "Which state is NOT among the top three coconut producing states in India?",
    answers: [
      { text: "Karnataka", correct: false },
      { text: "Tamil Nadu", correct: false },
      { text: "Kerala", correct: false },
      { text: "Maharashtra", correct: true },
    ],
  },
  {
    question:
      "Which organ of the UN relates to the Convention on the Rights of Persons with Disabilities?",
    answers: [
      { text: "UNDP", correct: false },
      { text: "UNESCO", correct: false },
      { text: "UNCRPD", correct: true },
      { text: "WHO", correct: false },
    ],
  },

  // --- 11 to 15: Multiple correct answer type ---
  {
    question: "Which of the following are benefits of biochar?",
    answers: [
      { text: "Improves soil health", correct: true },
      { text: "Releases carbon dioxide", correct: false },
      { text: "Helps wastewater treatment", correct: true },
      { text: "Increases fertilizer use", correct: false },
    ],
  },
  {
    question: "Which by-products are produced during biochar generation?",
    answers: [
      { text: "Syngas", correct: true },
      { text: "Bio-oil", correct: true },
      { text: "Coal ash", correct: false },
      { text: "Natural gas", correct: false },
    ],
  },
  {
    question:
      "Which of the following statements about the Red-eared Slider Turtle are correct?",
    answers: [
      { text: "It is an invasive alien species", correct: true },
      { text: "It is native to India", correct: false },
      {
        text: "It is commonly found in brackish water habitats",
        correct: true,
      },
      { text: "It has a red strip behind the eyes", correct: true },
    ],
  },
  {
    question:
      "Which of the following factors have led to rising coconut oil prices?",
    answers: [
      { text: "Diversion to biofuel", correct: true },
      { text: "Ban on coconut oil exports from India", correct: false },
      { text: "Drought in major producing countries", correct: true },
      { text: "India becoming largest producer", correct: false },
    ],
  },
  {
    question:
      "Which of the following are features of the Merchant Shipping Bill, 2024?",
    answers: [
      { text: "Promotes green shipping", correct: true },
      { text: "Replaces the Merchant Shipping Act, 1958", correct: true },
      { text: "Focuses on ship-breaking regulation", correct: false },
      { text: "Aligns with international conventions", correct: true },
    ],
  },

  // --- 16 to 20: UPSC Statement-based questions ---
  {
    question:
      "With reference to Biochar, consider the following statements:\n\n1. It is made through pyrolysis of biomass in the presence of oxygen.\n2. It helps reduce emissions of greenhouse gases such as methane and N₂O.\n3. It has potential use in concrete and wastewater treatment.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "A. 1 and 2 only", correct: false },
      { text: "B. 2 and 3 only", correct: true },
      { text: "C. 1 and 3 only", correct: false },
      { text: "D. 1, 2 and 3", correct: false },
    ],
  },
  {
    question:
      "With reference to the Sugamya Bharat Abhiyan, consider the following statements:\n\n1. It aims for accessibility in transport, ICT, and built infrastructure.\n2. It is implemented by the Ministry of Housing and Urban Affairs.\n3. It was launched in 2015.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "A. 1 and 2 only", correct: false },
      { text: "B. 1 and 3 only", correct: true },
      { text: "C. 2 and 3 only", correct: false },
      { text: "D. 1, 2 and 3", correct: false },
    ],
  },
  {
    question:
      "With reference to Coconut Oil in India, consider the following statements:\n\n1. India is the largest coconut producer in the world.\n2. Coconut oil is used in both edible and industrial applications.\n3. The Coconut Development Board is under the Ministry of Agriculture.\n4. Use in biofuel has increased global demand.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "A. 1, 2 and 3 only", correct: false },
      { text: "B. 2, 3 and 4 only", correct: true },
      { text: "C. 1 and 4 only", correct: false },
      { text: "D. 1, 2, 3 and 4", correct: false },
    ],
  },
  {
    question:
      "With reference to the Maritime Sector of India, consider the following statements:\n\n1. India is the 16th largest maritime nation.\n2. The Green Tug Transition Programme replaces diesel tugs with green ones.\n3. Merchant Shipping Bill, 2024, aligns India’s laws with global standards.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "A. 1 and 2 only", correct: false },
      { text: "B. 2 and 3 only", correct: false },
      { text: "C. 1, 2 and 3", correct: true },
      { text: "D. 1 only", correct: false },
    ],
  },
  {
    question:
      "With reference to Red-eared Slider Turtles, consider the following statements:\n\n1. It is native to India and commonly found in rivers like Ganga.\n2. It is listed among the world’s top 100 invasive species.\n3. It competes with native species and threatens biodiversity.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "A. 1 and 2 only", correct: false },
      { text: "B. 2 and 3 only", correct: true },
      { text: "C. 1 and 3 only", correct: false },
      { text: "D. 1, 2 and 3", correct: false },
    ],
  },
];

/////////////////////////////////  8 August 2025  //////////////////////////////////////
const Paper7 = [
  // 1–10: Single Correct
  {
    question:
      "Which contaminant in groundwater is primarily responsible for 'Blue Baby Syndrome' in infants?",
    answers: [
      { text: "Arsenic", correct: false },
      { text: "Fluoride", correct: false },
      { text: "Nitrates", correct: true },
      { text: "Lead", correct: false },
    ],
  },
  {
    question:
      "Haemophilia A is caused by the deficiency of which clotting factor?",
    answers: [
      { text: "Factor VIII", correct: true },
      { text: "Factor IX", correct: false },
      { text: "Factor V", correct: false },
      { text: "Fibrinogen", correct: false },
    ],
  },
  {
    question:
      "Which Indian state is NOT listed as a major hotspot for groundwater arsenic contamination?",
    answers: [
      { text: "Bihar", correct: false },
      { text: "Assam", correct: false },
      { text: "Rajasthan", correct: true },
      { text: "West Bengal", correct: false },
    ],
  },
  {
    question: "The term 'Goldilocks Economy' refers to:",
    answers: [
      { text: "High growth, high inflation", correct: false },
      { text: "Moderate growth, low inflation", correct: true },
      { text: "Low growth, deflation", correct: false },
      { text: "Stagflation", correct: false },
    ],
  },
  {
    question:
      "Which body functions under the Ministry of Development of North Eastern Region (DoNER)?",
    answers: [
      { text: "North Eastern Council (NEC)", correct: true },
      { text: "NITI Aayog", correct: false },
      { text: "Inter-State Council", correct: false },
      { text: "Zonal Councils", correct: false },
    ],
  },
  {
    question: "Fluoride levels above the WHO limit primarily cause:",
    answers: [
      { text: "Skeletal fluorosis", correct: true },
      { text: "Kidney damage", correct: false },
      { text: "Blue Baby Syndrome", correct: false },
      { text: "Cholera", correct: false },
    ],
  },
  {
    question:
      "Which mineral contaminant in Punjab's Malwa region is linked to kidney toxicity?",
    answers: [
      { text: "Lead", correct: false },
      { text: "Uranium", correct: true },
      { text: "Chromium", correct: false },
      { text: "Fluoride", correct: false },
    ],
  },
  {
    question: "The NEC was established in which year?",
    answers: [
      { text: "1965", correct: false },
      { text: "1971", correct: true },
      { text: "1980", correct: false },
      { text: "2002", correct: false },
    ],
  },
  {
    question: "In the Indian context, the CFPI refers to:",
    answers: [
      { text: "Consumer Food Price Index", correct: true },
      { text: "Central Fiscal Price Indicator", correct: false },
      { text: "Commodity and Fuel Price Index", correct: false },
      { text: "Consumer Fuel Price Index", correct: false },
    ],
  },
  {
    question: "Which state was added to the NEC in 2002?",
    answers: [
      { text: "Sikkim", correct: true },
      { text: "Arunachal Pradesh", correct: false },
      { text: "Nagaland", correct: false },
      { text: "Tripura", correct: false },
    ],
  },

  // 11–15: Multiple Correct
  {
    question:
      "Which of the following are heavy metals known to contaminate groundwater in India?",
    answers: [
      { text: "Lead", correct: true },
      { text: "Mercury", correct: true },
      { text: "Chromium", correct: true },
      { text: "Calcium", correct: false },
    ],
  },
  {
    question:
      "Which of the following are health impacts of arsenic contamination in groundwater?",
    answers: [
      { text: "Skin lesions", correct: true },
      { text: "Liver cancer", correct: true },
      { text: "Blue Baby Syndrome", correct: false },
      { text: "Gangrene", correct: true },
    ],
  },
  {
    question:
      "Which are the common reasons for underdiagnosis of haemophilia cases in India?",
    answers: [
      { text: "Lack of awareness", correct: true },
      { text: "Limited diagnostic centres", correct: true },
      { text: "Free availability of clotting factors", correct: false },
      { text: "Social stigma", correct: true },
    ],
  },
  {
    question:
      "Which of the following are objectives of the North Eastern Council?",
    answers: [
      { text: "Balanced development of NER", correct: true },
      { text: "Act as a regional planning body", correct: true },
      { text: "Adjudicate inter-state disputes", correct: false },
      { text: "Coordinate between Centre and States", correct: true },
    ],
  },
  {
    question:
      "Which of the following are challenges to maintaining a Goldilocks Economy in India?",
    answers: [
      { text: "High food inflation", correct: true },
      { text: "Stagnant real wages", correct: true },
      { text: "Rising income inequality", correct: true },
      { text: "Surplus fiscal space", correct: false },
    ],
  },

  // 16–20: Statement-based with options A–D
  {
    question:
      "With reference to groundwater contamination in India, consider the following statements:\n\n1. Over-extraction of groundwater can mobilize geogenic contaminants like fluoride and arsenic.\n2. The Water (Prevention and Control of Pollution) Act, 1974 directly covers groundwater protection.\n3. Nitrate contamination is primarily due to industrial effluents.\n4. Pathogens from sewage leaks can cause cholera and hepatitis.\n\nWhich of the statements given above are correct?",
    answers: [
      { text: "A. 1 and 4 only", correct: true },
      { text: "B. 1, 2 and 4 only", correct: false },
      { text: "C. 2 and 3 only", correct: false },
      { text: "D. 1, 3 and 4 only", correct: false },
    ],
  },
  {
    question:
      "With reference to haemophilia management in India, consider the following statements:\n\n1. Prophylaxis aims to prevent bleeding episodes before they occur.\n2. Most patients in India receive prophylactic treatment.\n3. Factor IX deficiency causes Haemophilia A.\n4. Non-factor therapies can be administered subcutaneously.\n\nWhich of the statements given above are correct?",
    answers: [
      { text: "A. 1 and 4 only", correct: true },
      { text: "B. 1, 2 and 4 only", correct: false },
      { text: "C. 2, 3 and 4 only", correct: false },
      { text: "D. 1 and 2 only", correct: false },
    ],
  },
  {
    question:
      "With reference to the Goldilocks Economy in India, consider the following statements:\n\n1. It is characterized by moderate GDP growth and low inflation.\n2. Recent data shows CFPI often higher than CPI, affecting low-income households more.\n3. Real wage growth in India has been consistently above 10% since 2020.\n4. High public debt can limit welfare spending.\n\nWhich of the statements given above are correct?",
    answers: [
      { text: "A. 1, 2 and 4 only", correct: true },
      { text: "B. 1, 3 and 4 only", correct: false },
      { text: "C. 2 and 3 only", correct: false },
      { text: "D. 1, 2 and 3 only", correct: false },
    ],
  },
  {
    question:
      "With reference to the North Eastern Council (NEC), consider the following statements:\n\n1. It is a constitutional body under Article 263.\n2. It includes Governors and Chief Ministers of member states.\n3. Sikkim became a member in 2002.\n4. The Home Minister of India is an ex-officio member.\n\nWhich of the statements given above are correct?",
    answers: [
      { text: "A. 2 and 3 only", correct: true },
      { text: "B. 1, 2 and 3 only", correct: false },
      { text: "C. 1 and 4 only", correct: false },
      { text: "D. 2, 3 and 4 only", correct: false },
    ],
  },
  {
    question:
      "With reference to uranium contamination in India’s groundwater, consider the following statements:\n\n1. The WHO safe limit for uranium in drinking water is 30 µg/L.\n2. Uranium contamination has been reported in Punjab, Rajasthan, and Andhra Pradesh.\n3. The primary health impact of uranium is kidney toxicity.\n4. Uranium contamination is primarily caused by sewage infiltration.\n\nWhich of the statements given above are correct?",
    answers: [
      { text: "A. 1, 2 and 3 only", correct: true },
      { text: "B. 1 and 3 only", correct: false },
      { text: "C. 2, 3 and 4 only", correct: false },
      { text: "D. 1, 2 and 4 only", correct: false },
    ],
  },
];

///////////////////////////////// 9 August 2025 //////////////////////////////////////
const Paper8 = [
  // 1-10: Single correct type
  {
    question:
      "Which organization developed the bio-fortified potatoes aimed at increasing iron content?",
    answers: [
      { text: "Indian Council of Agricultural Research", correct: false },
      { text: "International Potato Center (CIP), Peru", correct: true },
      { text: "Food and Agriculture Organization", correct: false },
      { text: "International Crops Research Institute", correct: false },
    ],
  },
  {
    question:
      "Which Indian state will host the CIP research centre for bio-fortified potatoes?",
    answers: [
      { text: "Bihar", correct: false },
      { text: "Uttar Pradesh", correct: true },
      { text: "Punjab", correct: false },
      { text: "Haryana", correct: false },
    ],
  },
  {
    question:
      "Which Central American country recently allowed indefinite presidential re-election?",
    answers: [
      { text: "Guatemala", correct: false },
      { text: "Honduras", correct: false },
      { text: "El Salvador", correct: true },
      { text: "Costa Rica", correct: false },
    ],
  },
  {
    question:
      "The AI-based Agromet Advisory Service is jointly launched by ICRISAT and which Indian organisation?",
    answers: [
      { text: "ICAR", correct: true },
      { text: "ISRO", correct: false },
      { text: "NABARD", correct: false },
      { text: "FICCI", correct: false },
    ],
  },
  {
    question:
      "Which biosphere reserve was the pilot site for the Rhisotope Project?",
    answers: [
      { text: "Nilgiri Biosphere Reserve", correct: false },
      { text: "Waterberg Biosphere Reserve", correct: true },
      { text: "Khangchendzonga Biosphere Reserve", correct: false },
      { text: "Agasthyamalai Biosphere Reserve", correct: false },
    ],
  },
  {
    question:
      "The 'Apna Ghar' initiative was launched for the welfare of which group?",
    answers: [
      { text: "Migrant labourers", correct: false },
      { text: "Truck drivers", correct: true },
      { text: "Construction workers", correct: false },
      { text: "Fishermen", correct: false },
    ],
  },
  {
    question:
      "Which ministry oversees the Investor Education and Protection Fund Authority (IEPFA)?",
    answers: [
      { text: "Ministry of Finance", correct: false },
      { text: "Ministry of Corporate Affairs", correct: true },
      { text: "Ministry of Commerce", correct: false },
      { text: "Ministry of Law & Justice", correct: false },
    ],
  },
  {
    question: "The Alpine musk deer is classified under which IUCN category?",
    answers: [
      { text: "Vulnerable", correct: false },
      { text: "Endangered", correct: true },
      { text: "Critically Endangered", correct: false },
      { text: "Near Threatened", correct: false },
    ],
  },
  {
    question: "The Kopili River is a tributary of which river?",
    answers: [
      { text: "Ganga", correct: false },
      { text: "Yamuna", correct: false },
      { text: "Brahmaputra", correct: true },
      { text: "Meghna", correct: false },
    ],
  },
  {
    question:
      "Which Indian government mission supports the AI-based Agromet Advisory Service?",
    answers: [
      { text: "Digital India Mission", correct: false },
      { text: "Monsoon Mission III", correct: true },
      { text: "National AI Mission", correct: false },
      { text: "Krishi Unnati Mission", correct: false },
    ],
  },

  // 11-15: Multiple correct type
  {
    question: "Which of the following are biofortification methods?",
    answers: [
      { text: "Traditional breeding", correct: true },
      { text: "Fertilizer techniques", correct: true },
      { text: "Genetic engineering", correct: true },
      { text: "Industrial food fortification after harvest", correct: false },
    ],
  },
  {
    question: "Which of the following are features of the Rhisotope Project?",
    answers: [
      { text: "Uses radioactive isotopes in rhino horns", correct: true },
      { text: "Harms rhinos physically", correct: false },
      { text: "Makes horns detectable at borders", correct: true },
      { text: "Reduces black-market demand", correct: true },
    ],
  },
  {
    question:
      "Which are key tools or platforms in the AI-based Agromet Advisory Service?",
    answers: [
      { text: "iSAT", correct: true },
      { text: "AI-powered WhatsApp bots", correct: true },
      { text: "Blockchain verification", correct: false },
      { text: "Mobile apps", correct: true },
    ],
  },
  {
    question:
      "Which of the following are major threats to the Alpine musk deer?",
    answers: [
      { text: "Poaching for musk glands", correct: true },
      { text: "Habitat loss", correct: true },
      { text: "Overgrazing by livestock", correct: false },
      { text: "Air pollution", correct: false },
    ],
  },
  {
    question: "Which features are included in the 'Apna Ghar' initiative?",
    answers: [
      { text: "Dormitories", correct: true },
      { text: "Restaurants/Dhabas", correct: true },
      { text: "Clean toilets", correct: true },
      { text: "Luxury hotel rooms", correct: false },
    ],
  },

  // 16-20: Statement-based type
  {
    question: `With reference to bio-fortified potatoes, consider the following statements:
1. They are developed using harmful genetic modification.
2. They are aimed at combating iron deficiency.
3. CIP is setting up a research centre in Uttar Pradesh.
4. Their yield is lower than traditional varieties.
Which of the above statements is/are correct?`,
    answers: [
      { text: "1 and 4 only", correct: false },
      { text: "2 and 3 only", correct: true },
      { text: "1, 2, and 3 only", correct: false },
      { text: "2, 3, and 4 only", correct: false },
    ],
  },
  {
    question: `With reference to El Salvador, consider the following statements:
1. It is the only Central American country without a Caribbean coast.
2. Its capital is San Salvador.
3. The Lempa River is its most important river.
4. It shares borders with Honduras, Guatemala, and Nicaragua.
Which of the above statements is/are correct?`,
    answers: [
      { text: "1, 2, and 3 only", correct: true },
      { text: "1 and 2 only", correct: false },
      { text: "2, 3, and 4 only", correct: false },
      { text: "All four statements", correct: false },
    ],
  },
  {
    question: `With reference to the Kopili River, consider the following statements:
1. It flows only through Assam.
2. It is a tributary of the Brahmaputra.
3. It originates in Meghalaya.
4. It has been declared as National Waterway-57.
Which of the above statements is/are correct?`,
    answers: [
      { text: "2, 3, and 4 only", correct: true },
      { text: "1 and 2 only", correct: false },
      { text: "2 and 4 only", correct: false },
      { text: "All four statements", correct: false },
    ],
  },
  {
    question: `With reference to the Investor Education and Protection Fund Authority (IEPFA), consider the following statements:
1. It was established in 2016.
2. It operates under the Ministry of Finance.
3. It manages unclaimed dividends and matured deposits.
4. It runs the Niveshak Didi initiative for financial literacy.
Which of the above statements is/are correct?`,
    answers: [
      { text: "1, 3, and 4 only", correct: true },
      { text: "1, 2, and 3 only", correct: false },
      { text: "1 and 4 only", correct: false },
      { text: "All four statements", correct: false },
    ],
  },
  {
    question: `With reference to industrial accidents in India, consider the following statements:
1. Most accidents are considered unavoidable Acts of God.
2. Many occur due to lack of safety approvals and equipment.
3. SMEs are often involved in major chemical accidents.
4. South Korea and Singapore have laws holding top executives criminally liable.
Which of the above statements is/are correct?`,
    answers: [
      { text: "2, 3, and 4 only", correct: true },
      { text: "1 and 2 only", correct: false },
      { text: "1, 2, and 3 only", correct: false },
      { text: "All four statements", correct: false },
    ],
  },
];

/////////////////////////////////  10 August 2025  //////////////////////////////////////
const Paper9 = [
  // -------- First 10: Single Correct --------
  {
    question: "Which is the State tree of Tamil Nadu?",
    answers: [
      { text: "Neem", correct: false },
      { text: "Palmyra", correct: true },
      { text: "Coconut", correct: false },
      { text: "Peepal", correct: false },
    ],
  },
  {
    question:
      "Pathaneer, extracted from Palmyra trees in Tamil Nadu, is primarily used for:",
    answers: [
      { text: "Fermentation into toddy", correct: false },
      { text: "Sweet products like jaggery and candy", correct: true },
      { text: "Biofuel production", correct: false },
      { text: "Animal feed", correct: false },
    ],
  },
  {
    question: "Which district is famous for Udangudi Panangkarupatti?",
    answers: [
      { text: "Thoothukudi", correct: true },
      { text: "Erode", correct: false },
      { text: "Kanchipuram", correct: false },
      { text: "Madurai", correct: false },
    ],
  },
  {
    question:
      "Which unique soil type in Udangudi contributes to the distinct flavor of its palm jaggery?",
    answers: [
      { text: "Alluvial soil", correct: false },
      { text: "Red sand dune soil", correct: true },
      { text: "Black cotton soil", correct: false },
      { text: "Laterite soil", correct: false },
    ],
  },
  {
    question: "The 'Master of Roster' principle in the High Courts means:",
    answers: [
      { text: "All judges can choose their cases", correct: false },
      { text: "The Chief Justice allocates judicial work", correct: true },
      { text: "The President assigns cases", correct: false },
      { text: "The Supreme Court assigns cases", correct: false },
    ],
  },
  {
    question:
      "Which UN body created the Intergovernmental Negotiating Committee (INC) on plastic pollution?",
    answers: [
      { text: "UN General Assembly", correct: false },
      { text: "United Nations Environment Programme", correct: true },
      { text: "World Trade Organization", correct: false },
      { text: "UNESCO", correct: false },
    ],
  },
  {
    question:
      "Which resolution led to the creation of the INC for a global plastic treaty?",
    answers: [
      { text: "UNEA Resolution 5/14", correct: true },
      { text: "Basel Resolution 3/21", correct: false },
      { text: "CBD COP-15", correct: false },
      { text: "UNGA Resolution 74/25", correct: false },
    ],
  },
  {
    question:
      "Which country is NOT part of India's like-minded group in INC negotiations?",
    answers: [
      { text: "Saudi Arabia", correct: false },
      { text: "Russia", correct: false },
      { text: "Japan", correct: true },
      { text: "China", correct: false },
    ],
  },
  {
    question:
      "Which sector reports the highest number of unreported industrial accidents in India?",
    answers: [
      { text: "Formal registered factories", correct: false },
      { text: "Informal/unregistered sector", correct: true },
      { text: "IT and services sector", correct: false },
      { text: "Public sector units", correct: false },
    ],
  },
  {
    question:
      "Which safety measure is often missing in industrial units leading to accidents?",
    answers: [
      { text: "Fire Safety No-Objection Certificate", correct: true },
      { text: "Internet facilities", correct: false },
      { text: "Solar power backup", correct: false },
      { text: "GPS tracking", correct: false },
    ],
  },

  // -------- Next 5: Multiple Correct --------
  {
    question: "Which of the following are products made from Pathaneer?",
    answers: [
      { text: "Palm jaggery (karupatti)", correct: true },
      { text: "Palm candy (panangkarkandu)", correct: true },
      { text: "Coconut oil", correct: false },
      { text: "Refined white sugar", correct: false },
    ],
  },
  {
    question:
      "Which of the following factors contribute to Udangudi Panangkarupatti's uniqueness?",
    answers: [
      { text: "Red sand dune soil", correct: true },
      { text: "Low groundwater moisture", correct: true },
      { text: "Use of triple super phosphate", correct: false },
      { text: "Dry climate", correct: true },
    ],
  },
  {
    question: "Which of the following are key debates in INC negotiations?",
    answers: [
      { text: "Production controls on plastics", correct: true },
      { text: "Global financing for waste management", correct: true },
      { text: "Space debris management", correct: false },
      { text: "Equity for developing countries", correct: true },
    ],
  },
  {
    question:
      "Which of the following are common causes of industrial accidents in India?",
    answers: [
      { text: "Lack of training for workers", correct: true },
      { text: "Permit-to-work systems in place", correct: false },
      { text: "Blocked fire exits", correct: true },
      { text: "Functional firefighting equipment", correct: false },
    ],
  },
  {
    question:
      "Which of the following are suggested solutions to improve industrial safety?",
    answers: [
      { text: "Corporate manslaughter laws", correct: true },
      { text: "Weaker safety audits", correct: false },
      { text: "Digital risk reporting", correct: true },
      { text: "Whistleblower protection", correct: true },
    ],
  },

  // -------- Last 5: Statement-based like IMEC --------
  {
    question: `With reference to Palmyra-based products in Tamil Nadu, consider the following statements:\n
1. Fermentation of Pathaneer into toddy is prohibited in Tamil Nadu.\n
2. Palm jaggery and palm candy are made without industrial chemicals.\n
3. Palmyra is the State tree of Tamil Nadu.\n
Which of the above statements is/are correct?`,
    answers: [
      { text: "1, 2, and 3", correct: true },
      { text: "1 and 2 only", correct: false },
      { text: "2 and 3 only", correct: false },
      { text: "1 and 3 only", correct: false },
    ],
  },
  {
    question: `With reference to Udangudi Panangkarupatti, consider the following statements:\n
1. It is made from the sap of the coconut tree.\n
2. No chemical additives like triple super phosphate are used in its production.\n
3. It has received a Geographical Indication (GI) tag.\n
Which of the above statements is/are correct?`,
    answers: [
      { text: "2 and 3 only", correct: true },
      { text: "1 and 2 only", correct: false },
      { text: "1 and 3 only", correct: false },
      { text: "All three", correct: false },
    ],
  },
  {
    question: `With reference to the “Master of Roster” principle, consider the following statements:\n
1. The Chief Justice of a High Court decides which judge hears which case.\n
2. The Supreme Court has administrative superintendence over High Courts.\n
3. It was upheld in Tirupati Balaji Developers v. State of Bihar (2004).\n
Which of the above statements is/are correct?`,
    answers: [
      { text: "1 and 3 only", correct: true },
      { text: "1, 2, and 3", correct: false },
      { text: "2 and 3 only", correct: false },
      { text: "1 only", correct: false },
    ],
  },
  {
    question: `With reference to the Intergovernmental Negotiating Committee (INC) on plastic pollution, consider the following statements:\n
1. It was created under UNEA Resolution 5/14.\n
2. Its goal is to create a legally binding treaty covering the lifecycle of plastics.\n
3. India supports strict production caps on plastics.\n
Which of the above statements is/are correct?`,
    answers: [
      { text: "1 and 2 only", correct: true },
      { text: "2 and 3 only", correct: false },
      { text: "1 and 3 only", correct: false },
      { text: "All three", correct: false },
    ],
  },
  {
    question: `With reference to industrial accidents in India, consider the following statements:\n
1. Most major chemical accidents occur in large multinational corporations.\n
2. Lack of fire safety approvals is a common cause of industrial mishaps.\n
3. India currently has corporate manslaughter laws holding top management criminally liable.\n
Which of the above statements is/are correct?`,
    answers: [
      { text: "2 only", correct: true },
      { text: "1 and 2 only", correct: false },
      { text: "2 and 3 only", correct: false },
      { text: "All three", correct: false },
    ],
  },
];

//////////////////////////////  11 August 2025  //////////////////////////////
const Paper10 = [
  {
    question:
      "Which national park is the only natural habitat of the Asiatic lion?",
    answers: [
      { text: "Kaziranga National Park", correct: false },
      { text: "Gir National Park", correct: true },
      { text: "Jim Corbett National Park", correct: false },
      { text: "Kuno National Park", correct: false },
    ],
  },
  {
    question: "In which year was the Gir National Park established?",
    answers: [
      { text: "1955", correct: false },
      { text: "1965", correct: true },
      { text: "1972", correct: false },
      { text: "1980", correct: false },
    ],
  },
  {
    question: "What is the current IUCN status (2025) of the Asiatic lion?",
    answers: [
      { text: "Endangered", correct: false },
      { text: "Critically Endangered", correct: false },
      { text: "Vulnerable", correct: true },
      { text: "Near Threatened", correct: false },
    ],
  },
  {
    question:
      "Headquarters of the International Big Cat Alliance (IBCA) is located in:",
    answers: [
      { text: "New Delhi, India", correct: true },
      { text: "Bangkok, Thailand", correct: false },
      { text: "Nairobi, Kenya", correct: false },
      { text: "Geneva, Switzerland", correct: false },
    ],
  },
  {
    question: "Which country is NOT a formal member of IBCA as of 2025?",
    answers: [
      { text: "India", correct: false },
      { text: "Bhutan", correct: false },
      { text: "Somalia", correct: false },
      { text: "Japan", correct: true },
    ],
  },
  {
    question: "ASEAN was founded in which year?",
    answers: [
      { text: "1965", correct: false },
      { text: "1967", correct: true },
      { text: "1970", correct: false },
      { text: "1972", correct: false },
    ],
  },
  {
    question: "Which of the following is the headquarters of ASEAN?",
    answers: [
      { text: "Hanoi, Vietnam", correct: false },
      { text: "Jakarta, Indonesia", correct: true },
      { text: "Kuala Lumpur, Malaysia", correct: false },
      { text: "Bangkok, Thailand", correct: false },
    ],
  },
  {
    question:
      "Under which Act was the Central Pollution Control Board (CPCB) established?",
    answers: [
      { text: "Environment Protection Act, 1986", correct: false },
      { text: "Water Act, 1974", correct: true },
      { text: "Air Act, 1981", correct: false },
      { text: "Wildlife Protection Act, 1972", correct: false },
    ],
  },
  {
    question: "Kaleshwaram Lift Irrigation Project is located on which river?",
    answers: [
      { text: "Krishna", correct: false },
      { text: "Godavari", correct: true },
      { text: "Mahanadi", correct: false },
      { text: "Narmada", correct: false },
    ],
  },
  {
    question:
      "Which wildlife sanctuary acts as an extension habitat for Asiatic lions beyond Gir?",
    answers: [
      { text: "Girnar Wildlife Sanctuary", correct: true },
      { text: "Sariska Wildlife Sanctuary", correct: false },
      { text: "Bannerghatta Wildlife Sanctuary", correct: false },
      { text: "Periyar Wildlife Sanctuary", correct: false },
    ],
  },
  {
    question: "Which of the following are among the 7 big cats under IBCA?",
    answers: [
      { text: "Tiger", correct: true },
      { text: "Jaguar", correct: true },
      { text: "Cheetah", correct: true },
      { text: "Lynx", correct: false },
    ],
  },
  {
    question: "Which of the following are current ASEAN members?",
    answers: [
      { text: "Cambodia", correct: true },
      { text: "Laos", correct: true },
      { text: "India", correct: false },
      { text: "Myanmar", correct: true },
    ],
  },
  {
    question:
      "Which pollutants are covered under Environment Protection (Management of Contaminated Sites) Rules, 2025?",
    answers: [
      { text: "Chemical spills from factories", correct: true },
      { text: "Groundwater contamination by hazardous waste", correct: true },
      { text: "Radioactive waste", correct: false },
      { text: "Marine oil pollution", correct: false },
    ],
  },
  {
    question: "Which are key objectives of the International Big Cat Alliance?",
    answers: [
      { text: "Stop illegal wildlife trade", correct: true },
      { text: "Mobilize funds for conservation", correct: true },
      { text: "Promote fossil fuel exports", correct: false },
      { text: "Address climate change impact on habitats", correct: true },
    ],
  },
  {
    question:
      "Which of the following are barrages under the Kaleshwaram Lift Irrigation Project?",
    answers: [
      { text: "Medigadda", correct: true },
      { text: "Sundilla", correct: true },
      { text: "Annaram", correct: true },
      { text: "Tehri", correct: false },
    ],
  },
  {
    question:
      "With reference to the International Big Cat Alliance (IBCA), consider the following statements:\n\n1. It is an India-led initiative for conservation of seven big cat species.\n2. Membership is open only to countries having all seven species.\n3. As of 2025, India and 11 other countries are formal members.\n4. It was launched in April 2023 on the 50th anniversary of Project Tiger.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1, 3, and 4 only", correct: true },
      { text: "1, 2, and 3 only", correct: false },
      { text: "2 and 4 only", correct: false },
      { text: "1, 2, 3, and 4", correct: false },
    ],
  },
  {
    question:
      "With reference to ASEAN, consider the following statements:\n\n1. It was founded in 1967 with the Bangkok Declaration.\n2. Its headquarters is in Jakarta, Indonesia.\n3. India is a founding member of ASEAN.\n4. Decision-making is based on consultation and consensus.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1, 2, and 4 only", correct: true },
      { text: "1, 2, and 3 only", correct: false },
      { text: "2 and 4 only", correct: false },
      { text: "1, 3, and 4 only", correct: false },
    ],
  },
  {
    question:
      "With reference to the Environment Protection (Management of Contaminated Sites) Rules, 2025, consider the following statements:\n\n1. They are notified under the Environment Protection Act, 1986.\n2. Polluters are liable for remediation costs.\n3. Radioactive waste is included under these rules.\n4. Marine oil pollution is covered under these rules.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1 and 2 only", correct: true },
      { text: "1, 2, and 3 only", correct: false },
      { text: "2 and 4 only", correct: false },
      { text: "1, 2, 3, and 4", correct: false },
    ],
  },
  {
    question:
      "With reference to the Kaleshwaram Lift Irrigation Project (KLIP), consider the following statements:\n\n1. It is located at the confluence of the Krishna and Godavari rivers.\n2. It is designed to lift water from the Godavari for irrigation, drinking, and industrial purposes in Telangana.\n3. It has four main barrages including Medigadda and Sundilla.\n4. The project covers parts of 13 districts in Telangana.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "2, 3, and 4 only", correct: true },
      { text: "1, 2, and 3 only", correct: false },
      { text: "1 and 4 only", correct: false },
      { text: "All of the above", correct: false },
    ],
  },
  {
    question:
      "With reference to the Girnar Wildlife Sanctuary, consider the following statements:\n\n1. It was established in 2008 in Gujarat.\n2. It serves as an extension habitat for Asiatic lions.\n3. It is part of the Gir National Park.\n4. It is home to species such as leopards and chinkara.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1, 2, and 4 only", correct: true },
      { text: "1, 2, and 3 only", correct: false },
      { text: "2 and 4 only", correct: false },
      { text: "All of the above", correct: false },
    ],
  },
];

//////////////////////////////////  12 August 2025  ////////////////////////////
const Paper11 = [
  {
    question: "Rabies is caused by which type of virus?",
    answers: [
      { text: "DNA virus", correct: false },
      { text: "RNA virus", correct: true },
      { text: "Retrovirus", correct: false },
      { text: "Bacteriophage", correct: false },
    ],
  },
  {
    question:
      "Which continent is free from rabies cases in humans and animals?",
    answers: [
      { text: "Africa", correct: false },
      { text: "Asia", correct: false },
      { text: "Antarctica", correct: true },
      { text: "Europe", correct: false },
    ],
  },
  {
    question: "The most cost-effective strategy for rabies prevention is:",
    answers: [
      { text: "Human vaccination", correct: false },
      { text: "Quarantine of infected persons", correct: false },
      { text: "Dog vaccination", correct: true },
      { text: "Import bans on animals", correct: false },
    ],
  },
  {
    question:
      "India’s target year for achieving 20% ethanol blending (E20) in petrol is:",
    answers: [
      { text: "2030", correct: false },
      { text: "2025-26", correct: true },
      { text: "2027-28", correct: false },
      { text: "2024-25", correct: false },
    ],
  },
  {
    question:
      "Which of the following is NOT used as a feedstock for ethanol production in India?",
    answers: [
      { text: "C-heavy molasses", correct: false },
      { text: "Broken rice", correct: false },
      { text: "Maize", correct: false },
      { text: "Wheat imported from Russia", correct: true },
    ],
  },
  {
    question:
      "Vehicles meeting BS 2 norms (since 2001) in India can safely handle ethanol blending up to:",
    answers: [
      { text: "E20", correct: false },
      { text: "E15", correct: true },
      { text: "E10", correct: false },
      { text: "E5", correct: false },
    ],
  },
  {
    question:
      "Section 498-A of the IPC, now Section 85 of the BNS, was introduced in:",
    answers: [
      { text: "1980", correct: false },
      { text: "1983", correct: true },
      { text: "1992", correct: false },
      { text: "1975", correct: false },
    ],
  },
  {
    question:
      "Under Section 498-A, the maximum imprisonment term prescribed is:",
    answers: [
      { text: "5 years", correct: false },
      { text: "3 years", correct: true },
      { text: "7 years", correct: false },
      { text: "1 year", correct: false },
    ],
  },
  {
    question: "The Piprahwa relics are believed to be linked to:",
    answers: [
      { text: "Guru Nanak", correct: false },
      { text: "Lord Buddha", correct: true },
      { text: "Adi Shankaracharya", correct: false },
      { text: "Lord Mahavira", correct: false },
    ],
  },
  {
    question:
      "Piprahwa, the site of the relics’ excavation, is located in present-day:",
    answers: [
      { text: "Bihar", correct: false },
      { text: "Uttar Pradesh", correct: true },
      { text: "Madhya Pradesh", correct: false },
      { text: "Odisha", correct: false },
    ],
  },
  {
    question:
      "Which of the following are early symptoms of rabies? (Multiple correct)",
    answers: [
      { text: "Fever", correct: true },
      { text: "Pain and tingling at the bite site", correct: true },
      { text: "Hallucinations", correct: false },
      { text: "Aggression", correct: false },
    ],
  },
  {
    question:
      "Which of the following are government-stated benefits of ethanol blending? (Multiple correct)",
    answers: [
      { text: "Lower carbon emissions", correct: true },
      { text: "Reduced crude oil import bill", correct: true },
      { text: "Complete elimination of air pollution", correct: false },
      { text: "Increase in fossil fuel dependency", correct: false },
    ],
  },
  {
    question:
      "Which of the following are cited concerns with ethanol-blended fuel in India? (Multiple correct)",
    answers: [
      { text: "Lower vehicle mileage", correct: true },
      { text: "Corrosion in fuel systems", correct: true },
      { text: "High ethanol production cost", correct: false },
      { text: "Compatibility issues with older vehicles", correct: true },
    ],
  },
  {
    question:
      "Which of the following were measures taken to repatriate the Piprahwa relics? (Multiple correct)",
    answers: [
      { text: "Coordination between ministries", correct: true },
      { text: "Involvement of private sector", correct: true },
      {
        text: "Auction purchase by the Indian government directly",
        correct: false,
      },
      { text: "UNESCO intervention", correct: false },
    ],
  },
  {
    question:
      "Which of the following legal provisions address cruelty against married women? (Multiple correct)",
    answers: [
      { text: "Section 498-A of IPC", correct: true },
      { text: "Section 85 of BNS", correct: true },
      { text: "Section 375 of IPC", correct: false },
      { text: "Section 304-B of IPC", correct: true },
    ],
  },
  {
    question:
      "With reference to Rabies, consider the following statements:\n\n1. It is caused by a DNA virus belonging to the Rhabdoviridae family.\n2. Post-Exposure Prophylaxis (PEP) is nearly 100% effective if administered promptly.\n\nWhich of the statements given above is/are correct?",
    answers: [
      { text: "1 only", correct: false },
      { text: "2 only", correct: true },
      { text: "Both 1 and 2", correct: false },
      { text: "Neither 1 nor 2", correct: false },
    ],
  },
  {
    question:
      "With reference to ethanol-blended fuel in India, consider the following statements:\n\n1. Broken rice and C-heavy molasses are among the feedstocks used for ethanol production.\n2. Vehicles meeting BS 2 norms can handle E20 blending safely.\n\nWhich of the statements given above is/are correct?",
    answers: [
      { text: "1 only", correct: true },
      { text: "2 only", correct: false },
      { text: "Both 1 and 2", correct: false },
      { text: "Neither 1 nor 2", correct: false },
    ],
  },
  {
    question:
      "With reference to Section 498-A of IPC (now Section 85 of BNS), consider the following statements:\n\n1. It was introduced in 1983.\n2. It prescribes imprisonment up to 5 years.\n\nWhich of the statements given above is/are correct?",
    answers: [
      { text: "1 only", correct: true },
      { text: "2 only", correct: false },
      { text: "Both 1 and 2", correct: false },
      { text: "Neither 1 nor 2", correct: false },
    ],
  },
  {
    question:
      "With reference to the Piprahwa relics, consider the following statements:\n\n1. They are linked to Lord Buddha or his early disciples.\n2. They were excavated in present-day Bihar.\n\nWhich of the statements given above is/are correct?",
    answers: [
      { text: "1 only", correct: true },
      { text: "2 only", correct: false },
      { text: "Both 1 and 2", correct: false },
      { text: "Neither 1 nor 2", correct: false },
    ],
  },
  {
    question:
      "With reference to the Supreme Court ruling on Section 498-A, consider the following statements:\n\n1. It mandates a two-month 'cool-off' period before arrest.\n2. The case leading to the ruling originated in the Allahabad High Court.\n3. The ruling has nationwide applicability.\n\nWhich of the statements given above is/are correct?",
    answers: [
      { text: "1 and 2 only", correct: false },
      { text: "2 and 3 only", correct: false },
      { text: "1, 2 and 3", correct: true },
      { text: "1 and 3 only", correct: false },
    ],
  },
];

///////////////////////////  13 August 2025  ////////////////////////////////////////
const Paper12 = [
  {
    question:
      "Which of the following cities will host two of the newly approved semiconductor plants under the India Semiconductor Mission?",
    answers: [
      { text: "Mohali", correct: false },
      { text: "Bhubaneswar", correct: true },
      { text: "Dholera", correct: false },
      { text: "Noida", correct: false },
    ],
  },
  {
    question:
      "Silicon carbide chips are preferred for applications like electric vehicles because they:",
    answers: [
      { text: "Are cheaper to produce", correct: false },
      { text: "Are more flexible", correct: false },
      {
        text: "Can operate in high-temperature and high-voltage conditions",
        correct: true,
      },
      { text: "Require no cooling systems", correct: false },
    ],
  },
  {
    question: "Operation Flood was launched in 1970 by which organisation?",
    answers: [
      { text: "National Dairy Development Board", correct: true },
      { text: "Food Corporation of India", correct: false },
      { text: "Amul Federation", correct: false },
      { text: "Ministry of Agriculture", correct: false },
    ],
  },
  {
    question:
      "Which missile used in Operation Sindoor is an Indo-Russian supersonic cruise missile?",
    answers: [
      { text: "Astra Mk-1", correct: false },
      { text: "SCALP", correct: false },
      { text: "BrahMos", correct: true },
      { text: "Rampage", correct: false },
    ],
  },
  {
    question: "Low Earth Orbit (LEO) satellites typically have a latency of:",
    answers: [
      { text: "~600 ms", correct: false },
      { text: "~20–40 ms", correct: true },
      { text: "~150 ms", correct: false },
      { text: "~1 ms", correct: false },
    ],
  },
  {
    question: "Which state is the top milk producer in India?",
    answers: [
      { text: "Gujarat", correct: false },
      { text: "Rajasthan", correct: true },
      { text: "Uttar Pradesh", correct: false },
      { text: "Madhya Pradesh", correct: false },
    ],
  },
  {
    question:
      "Which indigenous beyond-visual-range air-to-air missile was used in Operation Sindoor?",
    answers: [
      { text: "R-37", correct: false },
      { text: "Astra Mk-1", correct: true },
      { text: "Crystal Maze", correct: false },
      { text: "Rampage", correct: false },
    ],
  },
  {
    question: "The Rashtriya Gokul Mission focuses on:",
    answers: [
      { text: "Improving exotic cattle breeds", correct: false },
      { text: "Improving indigenous cattle breeds", correct: true },
      { text: "Banning unregulated dairies", correct: false },
      { text: "Importing high-yield foreign breeds", correct: false },
    ],
  },
  {
    question:
      "Which orbit type provides constant coverage over the same area but suffers from high latency?",
    answers: [
      { text: "LEO", correct: false },
      { text: "MEO", correct: false },
      { text: "GEO", correct: true },
      { text: "HEO", correct: false },
    ],
  },
  {
    question:
      "Which country is currently the largest supplier of semiconductors to India?",
    answers: [
      { text: "Taiwan", correct: false },
      { text: "Japan", correct: false },
      { text: "China", correct: true },
      { text: "South Korea", correct: false },
    ],
  },
  {
    question:
      "Which of the following are key challenges in India's semiconductor ambitions?",
    answers: [
      { text: "Lack of indigenous design and R&D", correct: true },
      { text: "High investment and long gestation period", correct: true },
      { text: "Surplus of skilled semiconductor engineers", correct: false },
      { text: "Dependence on imports for critical components", correct: true },
    ],
  },
  {
    question: "Which of the following were phases of Operation Flood?",
    answers: [
      { text: "Phase I (1970–1980)", correct: true },
      { text: "Phase II (1981–1985)", correct: true },
      { text: "Phase III (1985–1996)", correct: true },
      { text: "Phase IV (2000–2010)", correct: false },
    ],
  },
  {
    question: "Which of the following are civilian uses of satellite internet?",
    answers: [
      { text: "Disaster relief communications", correct: true },
      { text: "Telemedicine", correct: true },
      { text: "Missile guidance systems", correct: false },
      { text: "Precision agriculture", correct: true },
    ],
  },
  {
    question: "Which of the following missiles are of Israeli origin?",
    answers: [
      { text: "Rampage", correct: true },
      { text: "Crystal Maze", correct: true },
      { text: "SCALP", correct: false },
      { text: "BrahMos", correct: false },
    ],
  },
  {
    question:
      "Which measures can help strengthen India's semiconductor ecosystem?",
    answers: [
      { text: "Increase R&D funding", correct: true },
      { text: "Develop skilled workforce", correct: true },
      { text: "Rely exclusively on Chinese suppliers", correct: false },
      { text: "Build semiconductor clusters", correct: true },
    ],
  },

  {
    question: `With reference to the India Semiconductor Mission (ISM), consider the following statements:\n
1. It aims to make India self-reliant in semiconductor manufacturing.\n
2. Only silicon-based semiconductor manufacturing units are eligible for incentives.\n
Which of the statements given above is/are correct?`,
    answers: [
      { text: "1 only", correct: true },
      { text: "2 only", correct: false },
      { text: "Both 1 and 2", correct: false },
      { text: "Neither 1 nor 2", correct: false },
    ],
  },
  {
    question: `With reference to Operation Flood, consider the following statements:\n
1. It was implemented by the National Dairy Development Board.\n
2. Phase II linked 18 milksheds to major cities.\n
3. It was funded initially through sale of donated milk powder and butter oil from the EU.\n
Which of the statements given above is/are correct?`,
    answers: [
      { text: "1 and 3 only", correct: true },
      { text: "2 and 3 only", correct: false },
      { text: "1 and 2 only", correct: false },
      { text: "1, 2 and 3", correct: false },
    ],
  },
  {
    question: `With reference to India's recent missile capabilities, consider the following statements:\n
1. BrahMos is an Indo-Russian supersonic cruise missile.\n
2. Astra Mk-1 is an indigenous beyond-visual-range air-to-air missile.\n
3. SCALP is a hypersonic ballistic missile.\n
4. R-37 is a very long-range air-to-air missile.\n
Which of the statements given above are correct?`,
    answers: [
      { text: "1, 2 and 4 only", correct: true },
      { text: "1, 2 and 3 only", correct: false },
      { text: "1, 3 and 4 only", correct: false },
      { text: "1, 2, 3 and 4", correct: false },
    ],
  },
  {
    question: `With reference to satellite internet technology, consider the following statements:\n
1. LEO satellites generally have lower latency than GEO satellites.\n
2. A single GEO satellite can cover almost one-third of Earth’s surface.\n
3. Satellite internet can have both civilian and military uses.\n
Which of the statements given above are correct?`,
    answers: [
      { text: "1 only", correct: false },
      { text: "2 only", correct: false },
      { text: "3 only", correct: false },
      { text: "1, 2 and 3", correct: true },
    ],
  },
  {
    question: `With reference to the Rashtriya Gokul Mission, consider the following statements:\n
1. It focuses on development and conservation of indigenous bovine breeds.\n
2. It aims to improve milk productivity using scientific methods.\n
3. It primarily targets large commercial dairy corporations.\n
Which of the statements given above is/are correct?`,
    answers: [
      { text: "1 and 2 only", correct: true },
      { text: "2 and 3 only", correct: false },
      { text: "1 and 3 only", correct: false },
      { text: "1, 2 and 3", correct: false },
    ],
  },
];

//////////////////////////////  14 August 2025   //////////////////////////////
const Paper13 = [
  {
    question:
      "Under the Forest Rights Act (FRA), 2006, which body is the primary authority for initiating claims over forest land?",
    answers: [
      { text: "State Forest Department", correct: false },
      { text: "District Collector", correct: false },
      { text: "Gram Sabha", correct: true },
      { text: "Ministry of Tribal Affairs", correct: false },
    ],
  },
  {
    question:
      "Which of the following is India’s highest peacetime gallantry award?",
    answers: [
      { text: "Kirti Chakra", correct: false },
      { text: "Param Vir Chakra", correct: false },
      { text: "Ashoka Chakra", correct: true },
      { text: "Shaurya Chakra", correct: false },
    ],
  },
  {
    question:
      "PixxelSpace India-led consortium is associated with which type of satellite project?",
    answers: [
      { text: "Navigation satellites", correct: false },
      { text: "Earth Observation satellites", correct: true },
      { text: "Communication satellites", correct: false },
      { text: "Weather satellites only", correct: false },
    ],
  },
  {
    question:
      "In the Gallantry Awards system, the 'Vir Chakra' is awarded during:",
    answers: [
      { text: "Wartime", correct: true },
      { text: "Peacetime", correct: false },
      { text: "Only for civilians", correct: false },
      { text: "Sports achievements", correct: false },
    ],
  },
  {
    question:
      "Which ministry is the nodal agency for implementing the Forest Rights Act (FRA), 2006?",
    answers: [
      {
        text: "Ministry of Environment, Forest and Climate Change",
        correct: false,
      },
      { text: "Ministry of Panchayati Raj", correct: false },
      { text: "Ministry of Tribal Affairs", correct: true },
      { text: "Ministry of Rural Development", correct: false },
    ],
  },
  {
    question:
      "The Democratic Republic of Congo (DRC) is the world's largest producer of which critical mineral?",
    answers: [
      { text: "Lithium", correct: false },
      { text: "Cobalt", correct: true },
      { text: "Nickel", correct: false },
      { text: "Rare Earth Elements", correct: false },
    ],
  },
  {
    question:
      "Under FRA, the maximum forest land that can be granted to an individual for cultivation is:",
    answers: [
      { text: "2 hectares", correct: false },
      { text: "4 hectares", correct: true },
      { text: "5 hectares", correct: false },
      { text: "10 hectares", correct: false },
    ],
  },
  {
    question:
      "Which African countries have recently banned the export of unprocessed lithium?",
    answers: [
      { text: "Zimbabwe and Namibia", correct: true },
      { text: "DRC and Botswana", correct: false },
      { text: "Namibia and Zambia", correct: false },
      { text: "Zimbabwe and South Africa", correct: false },
    ],
  },
  {
    question: "The Shaurya Chakra is awarded for acts of gallantry:",
    answers: [
      { text: "Only in the face of the enemy", correct: false },
      { text: "Not in the face of the enemy", correct: true },
      { text: "Only to military personnel", correct: false },
      { text: "For sports bravery", correct: false },
    ],
  },
  {
    question:
      "The current parental annual income limit for eligibility under SC/ST/OBC/DNT scholarships is:",
    answers: [
      { text: "₹1.5 lakh", correct: false },
      { text: "₹2 lakh", correct: false },
      { text: "₹2.5 lakh", correct: true },
      { text: "₹3 lakh", correct: false },
    ],
  },
  {
    question:
      "Which of the following are recognised as Minor Forest Produce (MFP) under FRA, 2006?",
    answers: [
      { text: "Bamboo", correct: true },
      { text: "Honey", correct: true },
      { text: "Lac", correct: true },
      { text: "Teak timber", correct: false },
    ],
  },
  {
    question: "Applications of Earth Observation (EO) satellites include:",
    answers: [
      { text: "Climate change monitoring", correct: true },
      { text: "Disaster management", correct: true },
      { text: "Urban planning", correct: true },
      { text: "Space tourism", correct: false },
    ],
  },
  {
    question: "Challenges in implementing the Forest Rights Act (FRA) include:",
    answers: [
      { text: "Delayed processing of claims", correct: true },
      { text: "Lack of documentary evidence", correct: true },
      { text: "Conflicts with wildlife laws", correct: true },
      { text: "No involvement of Gram Sabha", correct: false },
    ],
  },
  {
    question:
      "Recent resistance to Chinese mining dominance in Africa includes:",
    answers: [
      { text: "Renegotiation of mining contracts", correct: true },
      { text: "Bans on export of raw minerals", correct: true },
      { text: "Increased tax exemptions to Chinese firms", correct: false },
      { text: "Protests against environmental damage", correct: true },
    ],
  },
  {
    question: "Peacetime gallantry awards in India include:",
    answers: [
      { text: "Ashoka Chakra", correct: true },
      { text: "Kirti Chakra", correct: true },
      { text: "Shaurya Chakra", correct: true },
      { text: "Vir Chakra", correct: false },
    ],
  },
  {
    question:
      "With reference to the Forest Rights Act (FRA), 2006, consider the following statements:\n\n1. It recognises both individual and community rights of forest dwellers.\n2. Gram Sabha is the primary authority to initiate claims.\n3. Bamboo is excluded from the definition of Minor Forest Produce.\n4. FRA provides protection from eviction before rights are recognised.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1, 2 and 4 only", correct: true },
      { text: "1, 3 and 4 only", correct: false },
      { text: "2 and 3 only", correct: false },
      { text: "1, 2, 3 and 4", correct: false },
    ],
  },
  {
    question:
      "With reference to India's first private EO satellite constellation, consider the following statements:\n\n1. It is being developed under a PPP model facilitated by IN-SPACe.\n2. PixxelSpace India is the lead partner.\n3. The project will completely eliminate the need for foreign EO data.\n4. It will provide Analysis Ready Data and Value-Added Services for multiple sectors.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1, 2 and 4 only", correct: true },
      { text: "1, 3 and 4 only", correct: false },
      { text: "2 and 3 only", correct: false },
      { text: "1, 2, 3 and 4", correct: false },
    ],
  },
  {
    question:
      "With reference to recent mining developments in Africa, consider the following statements:\n\n1. DRC accounts for around 80% of the world's cobalt production.\n2. Zimbabwe and Namibia have banned the export of unprocessed lithium.\n3. The Sicomines deal involved mining rights in exchange for infrastructure.\n4. These policy measures have reduced environmental protests.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1, 2 and 3 only", correct: true },
      { text: "1 and 3 only", correct: false },
      { text: "2, 3 and 4 only", correct: false },
      { text: "1, 2, 3 and 4", correct: false },
    ],
  },
  {
    question:
      "With reference to Gallantry Awards in India, consider the following statements:\n\n1. Ashoka Chakra Class I, II, and III were renamed as Ashoka Chakra, Kirti Chakra, and Shaurya Chakra respectively in 1967.\n2. All gallantry awards were instituted in 1950.\n3. Civilians are eligible for certain peacetime awards.\n4. Param Vir Chakra is the highest wartime award.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1, 3 and 4 only", correct: true },
      { text: "1, 2 and 3 only", correct: false },
      { text: "2, 3 and 4 only", correct: false },
      { text: "1, 2, 3 and 4", correct: false },
    ],
  },
  {
    question:
      "With reference to SC/ST/OBC/DNT scholarships, consider the following statements:\n\n1. The current parental annual income limit is ₹2.5 lakh.\n2. These scholarships are funded under a 60:40 Centre-State ratio for all states.\n3. For SC students, pre-matric scholarships can be given from Class I to X in certain cases.\n4. Parliamentary Committees have recommended lowering the income ceiling.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1 and 3 only", correct: false },
      { text: "1, 2 and 3 only", correct: true },
      { text: "2 and 4 only", correct: false },
      { text: "1, 2, 3 and 4", correct: false },
    ],
  },
];

///////////////////////////////  15 August 2025 ///////////////////////////////
const Paper14 = [
  {
    question:
      "Water hyacinth (Eichhornia crassipes), an invasive species in India, was originally introduced during which period?",
    answers: [
      { text: "Portuguese period", correct: false },
      { text: "British colonial period", correct: true },
      { text: "Post-independence era", correct: false },
      { text: "Mughal period", correct: false },
    ],
  },
  {
    question:
      "Which Indian lake, a Ramsar site, is most affected by water hyacinth invasion?",
    answers: [
      { text: "Chilika Lake", correct: false },
      { text: "Vembanad Lake", correct: true },
      { text: "Loktak Lake", correct: false },
      { text: "Sambhar Lake", correct: false },
    ],
  },
  {
    question:
      "Which Indian state first enacted a Freedom of Religion Act (anti-conversion law)?",
    answers: [
      { text: "Madhya Pradesh", correct: false },
      { text: "Odisha", correct: true },
      { text: "Uttar Pradesh", correct: false },
      { text: "Arunachal Pradesh", correct: false },
    ],
  },
  {
    question:
      "Which Article of the Indian Constitution guarantees freedom of conscience and the right to profess, practice, and propagate religion?",
    answers: [
      { text: "Article 19", correct: false },
      { text: "Article 21", correct: false },
      { text: "Article 25", correct: true },
      { text: "Article 30", correct: false },
    ],
  },
  {
    question:
      "The Supreme Court ruling in Rev. Stainislaus vs. State of Madhya Pradesh (1977) held that:",
    answers: [
      {
        text: "Right to propagate includes right to convert others",
        correct: false,
      },
      {
        text: "Anti-conversion laws of states are unconstitutional",
        correct: false,
      },
      {
        text: "Propagating religion does not include converting others by force or fraud",
        correct: true,
      },
      { text: "Marriage conversions are always valid", correct: false },
    ],
  },
  {
    question: "A cloudburst is defined as rainfall exceeding:",
    answers: [
      { text: "50 mm per hour in 10 sq km", correct: false },
      { text: "100 mm per hour in 20–30 sq km", correct: true },
      { text: "150 mm per hour in 100 sq km", correct: false },
      { text: "200 mm per hour in 50 sq km", correct: false },
    ],
  },
  {
    question:
      "Special Intensive Revision (SIR) of electoral rolls is conducted under which law?",
    answers: [
      { text: "Representation of the People Act, 1950", correct: true },
      { text: "Representation of the People Act, 1951", correct: false },
      { text: "Citizenship Act, 1955", correct: false },
      { text: "Election Symbols Order, 1968", correct: false },
    ],
  },
  {
    question:
      "Which Article of the Constitution empowers the Election Commission of India with plenary powers over elections?",
    answers: [
      { text: "Article 21", correct: false },
      { text: "Article 324", correct: true },
      { text: "Article 326", correct: false },
      { text: "Article 14", correct: false },
    ],
  },
  {
    question:
      "Currently, the parental income ceiling for SC/ST/OBC/DNT pre-matric and post-matric scholarships is:",
    answers: [
      { text: "₹1.5 lakh", correct: false },
      { text: "₹2.5 lakh", correct: true },
      { text: "₹3.5 lakh", correct: false },
      { text: "₹4.5 lakh", correct: false },
    ],
  },
  {
    question:
      "For SC students, pre-matric scholarships can begin from Class I if:",
    answers: [
      { text: "They belong to Below Poverty Line families", correct: false },
      {
        text: "Parents are engaged in unclean or hazardous occupations",
        correct: true,
      },
      { text: "They live in Scheduled Areas only", correct: false },
      { text: "They belong to notified minority communities", correct: false },
    ],
  },
  {
    question: "Water hyacinth causes which of the following problems?",
    answers: [
      { text: "Blocks irrigation channels", correct: true },
      { text: "Reduces oxygen in water bodies", correct: true },
      { text: "Releases methane when decomposed", correct: true },
      { text: "Improves biodiversity", correct: false },
    ],
  },
  {
    question: "Features of state anti-conversion laws generally include:",
    answers: [
      { text: "Ban on conversion by force or allurement", correct: true },
      {
        text: "Extra punishment if victim is SC/ST, woman, or minor",
        correct: true,
      },
      {
        text: "Prior permission or intimation to District Magistrate",
        correct: true,
      },
      { text: "Complete ban on voluntary conversion", correct: false },
    ],
  },
  {
    question: "Cloudbursts are associated with:",
    answers: [
      { text: "Steep slopes of Himalayas", correct: true },
      { text: "Orographic lifting of moist air", correct: true },
      { text: "Areas exceeding 100 sq km", correct: false },
      { text: "Climate change increasing intensity", correct: true },
    ],
  },
  {
    question: "Criticism of Special Intensive Revision (SIR) includes:",
    answers: [
      { text: "Shift of burden of proof to citizens", correct: true },
      {
        text: "Risk of exclusion of poor without birth certificates",
        correct: true,
      },
      { text: "Arbitrary cut-off year (2003)", correct: true },
      { text: "No scope for judicial oversight", correct: false },
    ],
  },
  {
    question:
      "Recommendations of Parliamentary Committees on SC/ST/OBC/DNT scholarships include:",
    answers: [
      { text: "Doubling the income limit", correct: true },
      { text: "Starting pre-matric scholarships from Class V", correct: true },
      {
        text: "Reducing coverage of hazardous occupation families",
        correct: false,
      },
      { text: "Raising limit for top-class scholarships", correct: true },
    ],
  },
  {
    question:
      "With reference to water hyacinth invasion, consider the following statements:\n\n1. It was introduced during Portuguese rule in India.\n2. It crowds out native aquatic plants and reduces biodiversity.\n3. Its decomposition releases methane, a greenhouse gas more harmful than CO₂.\n4. It has no economic use in India.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "2 and 3 only", correct: true },
      { text: "1, 2 and 4 only", correct: false },
      { text: "1, 3 and 4 only", correct: false },
      { text: "2, 3 and 4 only", correct: false },
    ],
  },
  {
    question:
      "With reference to anti-conversion laws in India, consider the following statements:\n\n1. Odisha was the first state to enact a Freedom of Religion Act in 1967.\n2. Article 25 protects the right to propagate but not to forcibly convert others.\n3. Supreme Court in Rev. Stainislaus (1977) upheld state anti-conversion laws.\n4. Article 30 provides minorities the right to propagate religion.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1, 2 and 3 only", correct: true },
      { text: "1, 2 and 4 only", correct: false },
      { text: "2, 3 and 4 only", correct: false },
      { text: "1, 2, 3 and 4", correct: false },
    ],
  },
  {
    question:
      "With reference to cloudbursts, consider the following statements:\n\n1. They are defined as rainfall exceeding 100 mm per hour over a small area of 20–30 sq km.\n2. The Himalayas are particularly prone due to steep slopes and orographic uplift.\n3. They occur mostly during winter months of November–December.\n4. NDMP 2019 suggests risk mapping and safer infrastructure to reduce impact.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1, 2 and 4 only", correct: true },
      { text: "1 and 3 only", correct: false },
      { text: "2 and 3 only", correct: false },
      { text: "1, 2, 3 and 4", correct: false },
    ],
  },
  {
    question:
      "With reference to Special Intensive Revision (SIR) of electoral rolls, consider the following statements:\n\n1. It is conducted under the Representation of the People Act, 1950.\n2. The ECI derives its power from Article 324 of the Constitution.\n3. Bihar last conducted an SIR in 2003.\n4. It always requires Supreme Court approval before being conducted.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1, 2 and 3 only", correct: true },
      { text: "2, 3 and 4 only", correct: false },
      { text: "1 and 4 only", correct: false },
      { text: "1, 2, 3 and 4", correct: false },
    ],
  },
  {
    question:
      "With reference to SC/ST/OBC/DNT scholarships, consider the following statements:\n\n1. The current income ceiling is ₹2.5 lakh annually.\n2. Funding is shared between Centre and States in a 60:40 ratio, except NE states where it is 90:10.\n3. Parliamentary Committees have recommended lowering the income ceiling.\n4. For SCs, pre-matric scholarships can begin from Class I if parents are engaged in hazardous occupations.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1, 2 and 4 only", correct: true },
      { text: "1, 3 and 4 only", correct: false },
      { text: "2 and 3 only", correct: false },
      { text: "1, 2, 3 and 4", correct: false },
    ],
  },
];

//////////////////////////////  16 August 2025  /////////////////////////////////
const Paper15 = [
  {
    question:
      "The S-400 Triumf air defense system has been developed by which country?",
    answers: [
      { text: "USA", correct: false },
      { text: "Russia", correct: true },
      { text: "Israel", correct: false },
      { text: "India", correct: false },
    ],
  },
  {
    question: "Which is the only active diamond mine in India?",
    answers: [
      { text: "Golconda Mines", correct: false },
      { text: "Majhgawan, Panna", correct: true },
      { text: "Argyle Mines", correct: false },
      { text: "Jwaneng Mine", correct: false },
    ],
  },
  {
    question:
      "Which Article of the Indian Constitution provides for the creation of the GST Council?",
    answers: [
      { text: "Article 370", correct: false },
      { text: "Article 279A", correct: true },
      { text: "Article 110", correct: false },
      { text: "Article 323B", correct: false },
    ],
  },
  {
    question: "Which country is the largest producer of diamonds by volume?",
    answers: [
      { text: "South Africa", correct: false },
      { text: "Russia", correct: true },
      { text: "Australia", correct: false },
      { text: "Canada", correct: false },
    ],
  },
  {
    question:
      "The GST was introduced in India through which Constitutional Amendment?",
    answers: [
      { text: "97th Amendment", correct: false },
      { text: "101st Amendment", correct: true },
      { text: "73rd Amendment", correct: false },
      { text: "108th Amendment", correct: false },
    ],
  },
  {
    question:
      "The Kimberley Process (2003) is associated with which commodity?",
    answers: [
      { text: "Oil", correct: false },
      { text: "Diamonds", correct: true },
      { text: "Gold", correct: false },
      { text: "Uranium", correct: false },
    ],
  },
  {
    question: "Which radar is part of the S-400 Triumf system?",
    answers: [
      { text: "Phalcon Radar", correct: false },
      { text: "91N6E Big Bird Acquisition Radar", correct: true },
      { text: "Swordfish Radar", correct: false },
      { text: "Green Pine Radar", correct: false },
    ],
  },
  {
    question:
      "Which Indian city is known as the world’s largest diamond cutting and polishing hub?",
    answers: [
      { text: "Mumbai", correct: false },
      { text: "Hyderabad", correct: false },
      { text: "Surat", correct: true },
      { text: "Jaipur", correct: false },
    ],
  },
  {
    question: "The GST Appellate Tribunal is generally headed by:",
    answers: [
      { text: "Union Finance Minister", correct: false },
      {
        text: "Former Supreme Court Judge or CJ of a High Court",
        correct: true,
      },
      { text: "Comptroller and Auditor General", correct: false },
      { text: "Governor of RBI", correct: false },
    ],
  },
  {
    question:
      "Which state had the highest Total Fertility Rate (TFR) as per SRS 2021?",
    answers: [
      { text: "West Bengal", correct: false },
      { text: "Delhi", correct: false },
      { text: "Bihar", correct: true },
      { text: "Kerala", correct: false },
    ],
  },

  {
    question: "Which of the following are components of the S-400 system?",
    answers: [
      { text: "Command and Control Centre", correct: true },
      { text: "Radar Systems", correct: true },
      { text: "Nuclear Submarines", correct: false },
      { text: "Missile Launch Vehicles", correct: true },
    ],
  },
  {
    question:
      "Which of the following countries are leading producers of diamonds?",
    answers: [
      { text: "Russia", correct: true },
      { text: "Botswana", correct: true },
      { text: "Australia", correct: true },
      { text: "Nepal", correct: false },
    ],
  },
  {
    question: "Which of the following types of GST are levied in India?",
    answers: [
      { text: "Central GST (CGST)", correct: true },
      { text: "State GST (SGST)", correct: true },
      { text: "Integrated GST (IGST)", correct: true },
      { text: "Federal GST (FGST)", correct: false },
    ],
  },
  {
    question:
      "Which of the following are challenges of the S-400 deal for India?",
    answers: [
      { text: "High operational cost", correct: true },
      { text: "Integration issues with indigenous systems", correct: true },
      { text: "Dependency on Russia", correct: true },
      { text: "Lack of multi-target capability", correct: false },
    ],
  },
  {
    question:
      "Which of the following measures can help address demographic challenges in India?",
    answers: [
      { text: "Conducting Census on time", correct: true },
      { text: "Providing incentives for small families", correct: true },
      { text: "Alienating border communities", correct: false },
      {
        text: "Improving health, education, and women empowerment",
        correct: true,
      },
    ],
  },
  {
    question:
      "With reference to the S-400 Triumf system, consider the following statements:\n\n1. It can engage up to 80 targets simultaneously.\n2. Its radar has a detection range of 600 km.\n3. It includes four types of missiles for layered defense.\n4. It is manufactured under the Make in India initiative.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1, 2 and 3 only", correct: true },
      { text: "1, 2 and 4 only", correct: false },
      { text: "2 and 4 only", correct: false },
      { text: "1, 3 and 4 only", correct: false },
    ],
  },
  {
    question:
      "With reference to Diamonds, consider the following statements:\n\n1. Diamonds are pure carbon arranged in a crystalline lattice.\n2. India is currently one of the world’s largest producers of raw diamonds.\n3. Jwaneng mine in Botswana is the richest by value.\n4. India’s Surat is the world’s largest hub for diamond cutting and polishing.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1, 3 and 4 only", correct: true },
      { text: "1, 2 and 3 only", correct: false },
      { text: "2 and 4 only", correct: false },
      { text: "1, 2, 3 and 4", correct: false },
    ],
  },
  {
    question:
      "With reference to GST in India, consider the following statements:\n\n1. It replaced multiple indirect taxes like VAT and Service Tax.\n2. The GST Council is chaired by the Union Finance Minister.\n3. GST is divided into 0%, 5%, 12%, 18% and 28% slabs.\n4. GST was introduced through the 97th Amendment to the Constitution.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1, 2 and 3 only", correct: true },
      { text: "1 and 4 only", correct: false },
      { text: "2 and 4 only", correct: false },
      { text: "1, 2, 3 and 4", correct: false },
    ],
  },
  {
    question:
      "With reference to Demographic Challenges in India, consider the following statements:\n\n1. India’s TFR as per SRS 2021 is around 2.0.\n2. Bihar has the lowest fertility rate in India.\n3. Kerala and Tamil Nadu are facing ageing population concerns.\n4. Census 2027 will provide updated demographic data.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1, 3 and 4 only", correct: true },
      { text: "1 and 2 only", correct: false },
      { text: "2 and 4 only", correct: false },
      { text: "1, 2, 3 and 4", correct: false },
    ],
  },
  {
    question:
      "With reference to GST Appellate Tribunal, consider the following statements:\n\n1. It is the forum of second appeal in GST laws.\n2. It will ensure uniform redressal of GST disputes across India.\n3. It can only be headed by the Union Finance Minister.\n4. Appeals against State GST Authority orders lie before this tribunal.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1, 2 and 4 only", correct: true },
      { text: "1 and 3 only", correct: false },
      { text: "2 and 3 only", correct: false },
      { text: "1, 2, 3 and 4", correct: false },
    ],
  },
];

///////////////////////////////  17 August 2025 //////////////////////////////////////
const Paper16 = [
  {
    question: "Which bacterium has the ability to degrade PET plastic?",
    answers: [
      { text: "Escherichia coli", correct: false },
      { text: "Ideonella sakaiensis", correct: true },
      { text: "Clostridium botulinum", correct: false },
      { text: "Bacillus anthracis", correct: false },
    ],
  },
  {
    question: "In which country was Ideonella sakaiensis discovered?",
    answers: [
      { text: "China", correct: false },
      { text: "India", correct: false },
      { text: "Japan", correct: true },
      { text: "South Korea", correct: false },
    ],
  },
  {
    question: "The Gaur (Bos gaurus) belongs to which IUCN category?",
    answers: [
      { text: "Endangered", correct: false },
      { text: "Vulnerable", correct: true },
      { text: "Critically Endangered", correct: false },
      { text: "Near Threatened", correct: false },
    ],
  },
  {
    question:
      "Which Indian state’s Palamau Tiger Reserve was recently in news for Gaur decline?",
    answers: [
      { text: "Chhattisgarh", correct: false },
      { text: "Jharkhand", correct: true },
      { text: "Odisha", correct: false },
      { text: "Madhya Pradesh", correct: false },
    ],
  },
  {
    question: "The Kodali Karuppur Silk Sari originated in which state?",
    answers: [
      { text: "Andhra Pradesh", correct: false },
      { text: "Kerala", correct: false },
      { text: "Tamil Nadu", correct: true },
      { text: "Maharashtra", correct: false },
    ],
  },
  {
    question: "Which ruler patronised the Kodali Karuppur Silk Sari tradition?",
    answers: [
      { text: "Tipu Sultan", correct: false },
      { text: "Serfoji Raja Bhonsle of Thanjavur", correct: true },
      { text: "Krishnadevaraya", correct: false },
      { text: "Raja Raja Chola", correct: false },
    ],
  },
  {
    question: "The Smooth-coated Otter belongs to which genus?",
    answers: [
      { text: "Lutra", correct: false },
      { text: "Lutrogale", correct: true },
      { text: "Mustela", correct: false },
      { text: "Panthera", correct: false },
    ],
  },
  {
    question: "What is the IUCN status of Smooth-coated Otter?",
    answers: [
      { text: "Critically Endangered", correct: false },
      { text: "Vulnerable", correct: true },
      { text: "Endangered", correct: false },
      { text: "Least Concern", correct: false },
    ],
  },
  {
    question: "Which of the following best describes PET plastic?",
    answers: [
      { text: "Polyethylene terephthalate", correct: true },
      { text: "Polyvinyl chloride", correct: false },
      { text: "Polystyrene", correct: false },
      { text: "Polypropylene", correct: false },
    ],
  },
  {
    question:
      "Which of the following is the largest wild cattle species in the world?",
    answers: [
      { text: "African Buffalo", correct: false },
      { text: "Gaur (Indian Bison)", correct: true },
      { text: "Yak", correct: false },
      { text: "Wild Ox", correct: false },
    ],
  },

  // ---------- Multiple Correct (Q11–Q15) ----------
  {
    question:
      "Which of the following statements are correct about Ideonella sakaiensis?",
    answers: [
      { text: "It is Gram-negative", correct: true },
      { text: "It is spore-forming", correct: false },
      { text: "It has monotrichous flagellum", correct: true },
      { text: "It was found in PET-contaminated soil", correct: true },
    ],
  },
  {
    question: "Which of the following are threats to Gaur populations?",
    answers: [
      { text: "Habitat loss due to deforestation", correct: true },
      { text: "Diseases from domestic cattle", correct: true },
      { text: "Marine pollution", correct: false },
      { text: "Human disturbance and hunting", correct: true },
    ],
  },
  {
    question:
      "Which of the following are features of Kodali Karuppur Silk Sari?",
    answers: [
      { text: "Hand painting", correct: true },
      { text: "Block printing", correct: true },
      { text: "Brocade weaving", correct: true },
      { text: "Machine embroidery", correct: false },
    ],
  },
  {
    question: "Which habitats are preferred by Smooth-coated Otters?",
    answers: [
      { text: "Mangrove forests", correct: true },
      { text: "Freshwater wetlands", correct: true },
      { text: "Peat swamp forests", correct: true },
      { text: "Dry desert scrublands", correct: false },
    ],
  },
  {
    question: "Which conservation statuses correctly apply?",
    answers: [
      { text: "Gaur – Schedule I, WPA 1972", correct: true },
      { text: "Gaur – CITES Appendix I", correct: true },
      { text: "Smooth-coated Otter – IUCN Vulnerable", correct: true },
      { text: "Kodali Karuppur Silk Sari – GI Tag protected", correct: false },
    ],
  },

  // ---------- Statement-based (Q16–Q20) ----------
  {
    question:
      "With reference to Ideonella sakaiensis, consider the following statements:\n\n1. It is a Gram-positive, spore-forming bacterium found in marine sediments.\n2. It degrades PET plastic into environmentally safe compounds.\n3. Its natural habitat includes moist, oxygen-rich soil with plastic waste.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1 and 2 only", correct: false },
      { text: "2 and 3 only", correct: true },
      { text: "1 and 3 only", correct: false },
      { text: "1, 2 and 3", correct: false },
    ],
  },
  {
    question:
      "With reference to the Gaur (Indian Bison), consider the following statements:\n\n1. It is the largest wild cattle species and prey for tigers.\n2. It is listed as Vulnerable under IUCN Red List and Schedule I under WPA 1972.\n3. Its natural habitat is restricted to dry scrub forests of the Thar Desert.\n4. It is susceptible to diseases from domestic cattle.\n\nWhich of the above statements are correct?",
    answers: [
      { text: "1, 2 and 4 only", correct: true },
      { text: "1 and 3 only", correct: false },
      { text: "2 and 4 only", correct: false },
      { text: "1, 2, 3 and 4", correct: false },
    ],
  },
  {
    question:
      "With reference to Kodali Karuppur Silk Sari, consider the following statements:\n\n1. It originated in Tamil Nadu and was patronised by Maratha rulers of Thanjavur.\n2. It currently enjoys protection under the GI Tag.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1 only", correct: true },
      { text: "2 only", correct: false },
      { text: "Both 1 and 2", correct: false },
      { text: "Neither 1 nor 2", correct: false },
    ],
  },
  {
    question:
      "With reference to Smooth-coated Otter, consider the following statements:\n\n1. It is the largest otter species in Southeast Asia.\n2. A small population of it survives in Iraq.\n3. It is listed as Endangered in IUCN Red List.\n\nWhich of the above statements are correct?",
    answers: [
      { text: "1 and 2 only", correct: true },
      { text: "2 and 3 only", correct: false },
      { text: "1 and 3 only", correct: false },
      { text: "1, 2 and 3", correct: false },
    ],
  },
  {
    question:
      "With reference to PET plastic, consider the following statements:\n\n1. It is made by condensation polymerization of ethylene glycol and terephthalic acid.\n2. It is lightweight, transparent, and strong.\n3. It is used in bottles, containers, and clothing fibers.\n4. It is a thermosetting plastic.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1, 2 and 3 only", correct: true },
      { text: "1 and 4 only", correct: false },
      { text: "2 and 4 only", correct: false },
      { text: "1, 2, 3 and 4", correct: false },
    ],
  },
];
////////////////////////////// 18 August 2025  ////////////////////////////////
const Paper17 = [
  // ---------- Single Correct (10) ----------
  {
    question: "Which is the highest mountain peak in Namibia?",
    answers: [
      { text: "Mount Kilimanjaro", correct: false },
      { text: "Mount Cameroon", correct: false },
      { text: "Brandberg (Mount Brand)", correct: true },
      { text: "Drakensberg", correct: false },
    ],
  },
  {
    question: "The Namib Desert is significant because:",
    answers: [
      { text: "It is the youngest desert in Africa", correct: false },
      { text: "It is one of the oldest deserts in the world", correct: true },
      { text: "It is located entirely within South Africa", correct: false },
      { text: "It is the wettest desert in the world", correct: false },
    ],
  },
  {
    question:
      "Which river forms the boundary between Namibia and South Africa?",
    answers: [
      { text: "Okavango River", correct: false },
      { text: "Orange River", correct: true },
      { text: "Kunene River", correct: false },
      { text: "Zambezi River", correct: false },
    ],
  },
  {
    question:
      "Namibia recently became the first African country to adopt which Indian digital platform?",
    answers: [
      { text: "Aadhaar", correct: false },
      { text: "UPI", correct: true },
      { text: "BHIM App", correct: false },
      { text: "DigiLocker", correct: false },
    ],
  },
  {
    question: "Which desert extends into Namibia, Botswana, and South Africa?",
    answers: [
      { text: "Sahara Desert", correct: false },
      { text: "Kalahari Desert", correct: true },
      { text: "Gobi Desert", correct: false },
      { text: "Atacama Desert", correct: false },
    ],
  },
  {
    question:
      "Which of the following minerals is Namibia a top global producer of?",
    answers: [
      { text: "Platinum", correct: false },
      { text: "Uranium", correct: true },
      { text: "Lithium", correct: false },
      { text: "Cobalt", correct: false },
    ],
  },
  {
    question:
      "Which Indian leader led the UN peacekeeping operations during Namibia’s independence?",
    answers: [
      { text: "Gen. Kodandera Cariappa", correct: false },
      { text: "Lt. Gen. Diwan Prem Chand", correct: true },
      { text: "Gen. S. F. Rodrigues", correct: false },
      { text: "Gen. V. K. Singh", correct: false },
    ],
  },
  {
    question:
      "Which national park in Assam is the only habitat of feral horses in India?",
    answers: [
      { text: "Kaziranga National Park", correct: false },
      { text: "Dibru-Saikhowa National Park", correct: true },
      { text: "Manas National Park", correct: false },
      { text: "Orang National Park", correct: false },
    ],
  },
  {
    question:
      "Which invasive plant species is threatening the grasslands of Dibru-Saikhowa National Park?",
    answers: [
      { text: "Chromolaena odorata", correct: true },
      { text: "Prosopis juliflora", correct: false },
      { text: "Lantana camara", correct: false },
      { text: "Opuntia", correct: false },
    ],
  },
  {
    question:
      "Honour killings in India are currently dealt with under which legal framework?",
    answers: [
      { text: "Special Marriage Act", correct: false },
      { text: "Indian Penal Code provisions on murder", correct: true },
      { text: "A dedicated Honour Killing Act", correct: false },
      { text: "Dowry Prohibition Act", correct: false },
    ],
  },

  // ---------- Multiple Correct (5) ----------
  {
    question: "Which rivers form part of Namibia’s perennial river system?",
    answers: [
      { text: "Zambezi", correct: true },
      { text: "Orange", correct: true },
      { text: "Thames", correct: false },
      { text: "Kunene", correct: true },
    ],
  },
  {
    question:
      "Which of the following MoUs were signed between India and Namibia in 2025?",
    answers: [
      { text: "Health cooperation", correct: true },
      { text: "Entrepreneurship development", correct: true },
      { text: "Space exploration", correct: false },
      { text: "Maritime security", correct: false },
    ],
  },
  {
    question:
      "Which initiatives highlight India’s innovation ecosystem for patents?",
    answers: [
      { text: "Atal Innovation Mission", correct: true },
      { text: "KAPILA", correct: true },
      { text: "National Food Security Mission", correct: false },
      { text: "Digital India Initiative", correct: true },
    ],
  },
  {
    question:
      "Which invasive species are altering Dibru-Saikhowa’s grasslands?",
    answers: [
      { text: "Chromolaena odorata", correct: true },
      { text: "Mikania micrantha", correct: true },
      { text: "Parthenium hysterophorus", correct: true },
      { text: "Prosopis cineraria", correct: false },
    ],
  },
  {
    question: "Supreme Court rulings on honour killings include:",
    answers: [
      { text: "Lata Singh vs State of UP (2006)", correct: true },
      { text: "Shakti Vahini Case (2018)", correct: true },
      { text: "Kesavananda Bharati vs State of Kerala (1973)", correct: false },
      { text: "Arumugam Servai vs State of Tamil Nadu (2011)", correct: true },
    ],
  },

  // ---------- Statement Based (5) ----------
  {
    question:
      "With reference to India’s engagement with Namibia, consider the following statements:\n\n1. Namibia became the first African country to adopt India’s UPI.\n2. India hosted SWAPO’s first diplomatic office in New Delhi.\n3. In July 2025, India signed a uranium supply agreement with Namibia.\n4. Namibia joined the Global Biofuel Alliance and CDRI.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1, 2 and 4 only", correct: true },
      { text: "1 and 2 only", correct: false },
      { text: "2, 3 and 4 only", correct: false },
      { text: "1, 2, 3 and 4", correct: false },
    ],
  },
  {
    question:
      "With reference to India’s patent landscape, consider the following statements:\n\n1. Indian-origin filings surpassed foreign filings in 2023.\n2. Educational institutions are now the largest contributors of patents.\n3. Average patent approval time has reduced to 2–3 years.\n4. India’s R&D spending is higher than China’s.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1, 2 and 3 only", correct: true },
      { text: "2 and 4 only", correct: false },
      { text: "1 and 4 only", correct: false },
      { text: "1, 2, 3 and 4", correct: false },
    ],
  },
  {
    question:
      "With reference to Honour Killings in India, consider the following statements:\n\n1. Honour killing is explicitly defined under the Indian Penal Code.\n2. Khap Panchayats have been known to enforce punishments for inter-caste marriages.\n3. The Supreme Court in Shakti Vahini case (2018) directed protection measures for couples at risk.\n4. The Prohibition of Unlawful Assembly Bill, 2011 became law to curb honour killings.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "2 and 3 only", correct: true },
      { text: "1 and 2 only", correct: false },
      { text: "1, 2 and 4 only", correct: false },
      { text: "2, 3 and 4 only", correct: false },
    ],
  },
  {
    question:
      "With reference to Dibru-Saikhowa National Park (DSNP), consider the following statements:\n\n1. It is located in Eastern Assam and bounded by the Brahmaputra and Dibru rivers.\n2. It is the only habitat of feral horses in India.\n3. It is dominated by alpine forests.\n4. Grasslands in DSNP have been declining due to invasive species and flooding.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1, 2 and 4 only", correct: true },
      { text: "1 and 2 only", correct: false },
      { text: "2, 3 and 4 only", correct: false },
      { text: "1, 3 and 4 only", correct: false },
    ],
  },
  {
    question:
      "With reference to Namibia’s geographical and economic features, consider the following statements:\n\n1. The Tropic of Capricorn passes through Namibia.\n2. Namibia is bordered by the Indian Ocean to the east.\n3. Namibia’s natural resources include diamonds, uranium, and copper.\n4. Namibia shares its southern border with South Africa.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1, 3 and 4 only", correct: true },
      { text: "1, 2 and 3 only", correct: false },
      { text: "2 and 3 only", correct: false },
      { text: "1, 2, 3 and 4", correct: false },
    ],
  },
];
//////////////////////////  19 August 2025  //////////////////////////
const Paper18 = [
  {
    question: "The SWAYAM Portal was launched in 2017 by which Ministry?",
    answers: [
      { text: "Ministry of Science and Technology", correct: false },
      { text: "Ministry of Education", correct: true },
      { text: "Ministry of Skill Development", correct: false },
      { text: "Ministry of Electronics and IT", correct: false },
    ],
  },
  {
    question:
      "Ambergris, recently in news, is primarily associated with which marine species?",
    answers: [
      { text: "Blue Whale", correct: false },
      { text: "Sperm Whale", correct: true },
      { text: "Fin Whale", correct: false },
      { text: "Humpback Whale", correct: false },
    ],
  },
  {
    question:
      "Halman Apricot, recently exported for the first time, is a specialty of which region?",
    answers: [
      { text: "Kashmir Valley", correct: false },
      { text: "Ladakh", correct: true },
      { text: "Himachal Pradesh", correct: false },
      { text: "Uttarakhand", correct: false },
    ],
  },
  {
    question: "Which Indian state is the largest producer of almonds?",
    answers: [
      { text: "Himachal Pradesh", correct: false },
      { text: "Jammu & Kashmir", correct: true },
      { text: "Uttarakhand", correct: false },
      { text: "Arunachal Pradesh", correct: false },
    ],
  },
  {
    question:
      "Mt. Elbrus, the highest peak in Europe, is located in which country?",
    answers: [
      { text: "Italy", correct: false },
      { text: "Russia", correct: true },
      { text: "France", correct: false },
      { text: "Turkey", correct: false },
    ],
  },
  {
    question: "Jellyfish belong to which phylum?",
    answers: [
      { text: "Echinodermata", correct: false },
      { text: "Cnidaria", correct: true },
      { text: "Mollusca", correct: false },
      { text: "Arthropoda", correct: false },
    ],
  },
  {
    question:
      "India’s sovereign rating was recently upgraded by S&P from BBB- to:",
    answers: [
      { text: "A", correct: false },
      { text: "BBB", correct: true },
      { text: "BB", correct: false },
      { text: "BBB+", correct: false },
    ],
  },
  {
    question:
      "India’s first Sustainable Aviation Fuel (SAF) plant is being set up by IOC at:",
    answers: [
      { text: "Mathura", correct: false },
      { text: "Panipat", correct: true },
      { text: "Paradip", correct: false },
      { text: "Haldia", correct: false },
    ],
  },
  {
    question: "Ejiao, banned in Africa, is a gelatin derived from:",
    answers: [
      { text: "Camel bones", correct: false },
      { text: "Donkey skin", correct: true },
      { text: "Rhino horn", correct: false },
      { text: "Elephant tusk", correct: false },
    ],
  },
  {
    question:
      "The 'One Nation One Ration Card' scheme is primarily associated with:",
    answers: [
      { text: "PDS portability across India", correct: true },
      { text: "Single GST return filing", correct: false },
      { text: "Single voter ID across states", correct: false },
      { text: "Single banking account portability", correct: false },
    ],
  },
  {
    question: "Which of the following are features of the SWAYAM Portal?",
    answers: [
      { text: "Video lectures", correct: true },
      { text: "Downloadable material", correct: true },
      { text: "AI-based doubt solving only in English", correct: false },
      { text: "Self-assessment quizzes", correct: true },
    ],
  },
  {
    question: "Which are correct uses of Ambergris?",
    answers: [
      { text: "Perfume industry", correct: true },
      { text: "Traditional medicine", correct: true },
      { text: "Fertilizer manufacturing", correct: false },
      { text: "Culinary spice (historical)", correct: true },
    ],
  },
  {
    question:
      "Which of the following are challenges in exporting Halman Apricots?",
    answers: [
      { text: "Short shelf life", correct: true },
      { text: "Transport issues from Ladakh", correct: true },
      { text: "No nutritional value", correct: false },
      { text: "Lack of branding & GI tag", correct: true },
    ],
  },
  {
    question: "Which are causes of jellyfish blooms?",
    answers: [
      { text: "Global warming", correct: true },
      { text: "Overfishing", correct: true },
      { text: "Marine pollution", correct: true },
      { text: "High salinity tolerance", correct: false },
    ],
  },
  {
    question:
      "Which of the following are advantages of Sustainable Aviation Fuel (SAF)?",
    answers: [
      { text: "Can be used in existing aircraft engines", correct: true },
      { text: "Reduces GHG emissions significantly", correct: true },
      { text: "Costs less than ATF", correct: false },
      { text: "Helps in energy security", correct: true },
    ],
  },
  {
    question:
      "With reference to Ambergris, consider the following statements:\n1. It is produced in the digestive system of sperm whales.\n2. It is banned under India’s Wildlife Protection Act, 1972.\n3. It is referred to as 'floating gold'.\n4. It is commonly used as livestock feed in India.\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1, 2 and 3 only", correct: true },
      { text: "1, 2 and 4 only", correct: false },
      { text: "2 and 4 only", correct: false },
      { text: "1, 3 and 4 only", correct: false },
    ],
  },
  {
    question:
      "With reference to Halman Apricot, consider the following statements:\n1. It is cultivated mainly in Ladakh.\n2. It has high Vitamin C and E content.\n3. It has been promoted under the ODOP scheme.\n4. It has a very long shelf life without cold storage.\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1, 2 and 3 only", correct: true },
      { text: "1, 2 and 4 only", correct: false },
      { text: "2 and 4 only", correct: false },
      { text: "1, 3 and 4 only", correct: false },
    ],
  },
  {
    question:
      "With reference to Mt. Elbrus, consider the following statements:\n1. It is located in the Caucasus Mountains of Russia.\n2. It is one of the Seven Summits.\n3. It is an inactive volcano.\n4. It has frequent eruptions in the 20th century.\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1, 2 and 3 only", correct: true },
      { text: "1 and 4 only", correct: false },
      { text: "2 and 4 only", correct: false },
      { text: "1, 3 and 4 only", correct: false },
    ],
  },
  {
    question:
      "With reference to India’s recent S&P sovereign rating upgrade, consider the following statements:\n1. India’s rating was upgraded from BBB- to BBB.\n2. This was India’s first upgrade in nearly 20 years.\n3. BBB is the highest investment grade rating.\n4. Further upgrades need fiscal deficit reduction below 6% of GDP.\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1, 2 and 4 only", correct: true },
      { text: "1, 2 and 3 only", correct: false },
      { text: "2 and 4 only", correct: false },
      { text: "1, 3 and 4 only", correct: false },
    ],
  },
  {
    question:
      "With reference to India’s first Sustainable Aviation Fuel (SAF) plant, consider the following statements:\n1. It is being set up by Indian Oil Corporation at Panipat.\n2. Used Cooking Oil is one of its feedstocks.\n3. SAF can be blended with conventional jet fuel up to 50%.\n4. It has already achieved 10% blending in domestic flights in 2025.\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1, 2 and 3 only", correct: true },
      { text: "1, 2 and 4 only", correct: false },
      { text: "2 and 3 only", correct: false },
      { text: "1, 3 and 4 only", correct: false },
    ],
  },
];
/////////////////////////// 20 August 2025 /////////////////////////
const Paper19 = [
  {
    question:
      "Which of the following regions in India is NOT a habitat of the Saltwater Crocodile?",
    answers: [
      { text: "Sundarbans (West Bengal)", correct: false },
      { text: "Bhitarkanika National Park (Odisha)", correct: false },
      { text: "Andaman & Nicobar Islands", correct: false },
      { text: "Pulicat Lake (Tamil Nadu)", correct: true },
    ],
  },
  {
    question:
      "Which of the following animals is listed in Schedule I of the Wildlife Protection Act, 1972?",
    answers: [
      { text: "Gharial", correct: true },
      { text: "Nilgai", correct: false },
      { text: "Chinkara", correct: false },
      { text: "Blackbuck", correct: false },
    ],
  },
  {
    question:
      "Which river sanctuary is the best place to see gharials in their natural habitat?",
    answers: [
      { text: "Bhitarkanika", correct: false },
      { text: "Chambal River", correct: true },
      { text: "Pulicat Lake", correct: false },
      { text: "Deepor Beel", correct: false },
    ],
  },
  {
    question:
      "Primary Amoebic Meningoencephalitis (PAM) is caused by which organism?",
    answers: [
      { text: "Acanthamoeba", correct: false },
      { text: "Naegleria fowleri", correct: true },
      { text: "Plasmodium vivax", correct: false },
      { text: "Entamoeba histolytica", correct: false },
    ],
  },
  {
    question: "The infection of PAM primarily spreads through:",
    answers: [
      { text: "Drinking contaminated water", correct: false },
      { text: "Entry through the nose while swimming", correct: true },
      { text: "Mosquito bite", correct: false },
      { text: "Consumption of raw fish", correct: false },
    ],
  },
  {
    question:
      "As per FY 2024–25, what is the private sector share in India’s total defence production?",
    answers: [
      { text: "14%", correct: false },
      { text: "19%", correct: false },
      { text: "22.56%", correct: true },
      { text: "30%", correct: false },
    ],
  },
  {
    question: "Section 152 of Bharatiya Nyaya Sanhita primarily deals with:",
    answers: [
      { text: "Crimes against women", correct: false },
      { text: "Reframed Sedition law", correct: true },
      { text: "Digital frauds", correct: false },
      { text: "Economic offences", correct: false },
    ],
  },
  {
    question:
      "Who is popularly known as the 'Father of the Indian Green Revolution'?",
    answers: [
      { text: "Dr. Norman Borlaug", correct: false },
      { text: "Dr. M. S. Swaminathan", correct: true },
      { text: "Verghese Kurien", correct: false },
      { text: "C. Subramaniam", correct: false },
    ],
  },
  {
    question:
      "Which high-yielding variety of rice was developed under Dr. M. S. Swaminathan’s guidance?",
    answers: [
      { text: "Sonora 64", correct: false },
      { text: "Pusa Basmati", correct: true },
      { text: "IR-8", correct: false },
      { text: "Sharbati Sonora", correct: false },
    ],
  },
  {
    question: "Which award was Dr. M. S. Swaminathan the first to receive?",
    answers: [
      { text: "Padma Vibhushan", correct: false },
      { text: "World Food Prize", correct: true },
      { text: "Ramon Magsaysay Award", correct: false },
      { text: "UNESCO Gandhi Prize", correct: false },
    ],
  },
  {
    question: "Which of the following are native crocodile species of India?",
    answers: [
      { text: "Saltwater Crocodile", correct: true },
      { text: "Mugger Crocodile", correct: true },
      { text: "American Crocodile", correct: false },
      { text: "Gharial", correct: true },
    ],
  },
  {
    question: "Which of the following diseases are caused by amoeba species?",
    answers: [
      { text: "Primary Amoebic Meningoencephalitis (PAM)", correct: true },
      { text: "Granulomatous Amoebic Encephalitis (GAE)", correct: true },
      { text: "Kala-azar", correct: false },
      { text: "Dysentery (Entamoeba histolytica)", correct: true },
    ],
  },
  {
    question:
      "Which of the following were contributions of Dr. M. S. Swaminathan?",
    answers: [
      { text: "Introduction of semi-dwarf wheat varieties", correct: true },
      { text: "Recommendation of MSP = cost + 50% margin", correct: true },
      { text: "Development of Operation Flood", correct: false },
      { text: "Advocacy of Evergreen Revolution", correct: true },
    ],
  },
  {
    question:
      "Which of the following statements about India’s defence sector are correct?",
    answers: [
      {
        text: "Private sector participation started after 2016–17",
        correct: true,
      },
      { text: "Private sector share exceeded 25% in 2024–25", correct: false },
      { text: "DPSUs still dominate the majority share", correct: true },
      {
        text: "India’s defence production more than tripled in a decade",
        correct: true,
      },
    ],
  },
  {
    question:
      "Which of the following awards were conferred on Dr. M. S. Swaminathan?",
    answers: [
      { text: "Ramon Magsaysay Award", correct: true },
      { text: "World Food Prize", correct: true },
      { text: "Bharat Ratna", correct: false },
      { text: "Padma Vibhushan", correct: true },
    ],
  },
  {
    question:
      "With reference to the Saltwater Crocodile (Crocodylus porosus), consider the following statements:\n1. It is the largest living reptile species.\n2. It can travel long distances over oceans.\n3. It is listed as Least Concern on the IUCN Red List.\n4. In India, it is confined only to Sundarbans.\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1, 2 and 3 only", correct: true },
      { text: "1, 2 and 4 only", correct: false },
      { text: "2 and 4 only", correct: false },
      { text: "1, 3 and 4 only", correct: false },
    ],
  },
  {
    question:
      "With reference to Primary Amoebic Meningoencephalitis (PAM), consider the following statements:\n1. It is caused by Naegleria fowleri.\n2. Infection occurs by drinking contaminated water.\n3. The disease is highly fatal with >95% mortality.\nWhich of the statements given above are correct?",
    answers: [
      { text: "1 and 2 only", correct: false },
      { text: "2 and 3 only", correct: false },
      { text: "1 and 3 only", correct: true },
      { text: "1, 2 and 3", correct: false },
    ],
  },
  {
    question:
      "With reference to India’s defence production, consider the following statements:\n1. FY 2024–25 saw India’s highest-ever defence production value.\n2. Private sector share in defence production has remained below 25% since 2016–17.\n3. Defence Public Sector Undertakings (DPSUs) contribute more than half of production.\nWhich of the above statements are correct?",
    answers: [
      { text: "1 and 2 only", correct: false },
      { text: "2 and 3 only", correct: false },
      { text: "1, 2 and 3", correct: true },
      { text: "1 and 3 only", correct: false },
    ],
  },
  {
    question:
      "With reference to Section 152 of Bharatiya Nyaya Sanhita (BNS), consider the following statements:\n1. It replaces IPC Section 124A dealing with sedition.\n2. It uses terms like secession and rebellion instead of disaffection.\n3. It is cognisable and non-bailable.\nWhich of the statements given above are correct?",
    answers: [
      { text: "1 and 2 only", correct: false },
      { text: "2 and 3 only", correct: false },
      { text: "1, 2 and 3", correct: true },
      { text: "1 and 3 only", correct: false },
    ],
  },
  {
    question:
      "With reference to the contributions of Dr. M. S. Swaminathan, consider the following statements:\n1. He introduced semi-dwarf wheat and rice varieties in India.\n2. He recommended MSP should be cost + 50% margin.\n3. He developed Operation Flood and White Revolution.\n4. He advocated for an Evergreen Revolution.\nWhich of the above statements are correct?",
    answers: [
      { text: "1, 2 and 3 only", correct: false },
      { text: "1, 2 and 4 only", correct: true },
      { text: "2 and 3 only", correct: false },
      { text: "1, 3 and 4 only", correct: false },
    ],
  },
];
///////////////////////// 21 August 2025 /////////////////////////
const Paper20 = [
  {
    question: "Agni-V missile is classified as:",
    answers: [
      { text: "Short-Range Ballistic Missile (SRBM)", correct: false },
      { text: "Intermediate-Range Ballistic Missile (IRBM)", correct: false },
      { text: "Intercontinental Ballistic Missile (ICBM)", correct: true },
      { text: "Cruise Missile", correct: false },
    ],
  },
  {
    question: "The Agni-Prime missile is unique because it:",
    answers: [
      { text: "Uses liquid fuel stages", correct: false },
      { text: "Can target moving ships", correct: true },
      { text: "Has a range above 10,000 km", correct: false },
      { text: "Is nuclear-submarine launched", correct: false },
    ],
  },
  {
    question: "Pulikkali or Tiger Dance is associated with which Indian state?",
    answers: [
      { text: "Karnataka", correct: false },
      { text: "Tamil Nadu", correct: false },
      { text: "Kerala", correct: true },
      { text: "Andhra Pradesh", correct: false },
    ],
  },
  {
    question: "The Vallamkali event, often linked with Onam, refers to:",
    answers: [
      { text: "A classical dance", correct: false },
      { text: "A snake boat race", correct: true },
      { text: "A puppet show", correct: false },
      { text: "A harvest ritual", correct: false },
    ],
  },
  {
    question: "The International Solar Alliance (ISA) was launched in:",
    answers: [
      { text: "2005 at COP11 in Montreal", correct: false },
      { text: "2015 at COP21 in Paris", correct: true },
      { text: "2018 at COP24 in Katowice", correct: false },
      { text: "2020 at COP26 in Glasgow", correct: false },
    ],
  },
  {
    question:
      "Headquarters of the International Solar Alliance (ISA) is located in:",
    answers: [
      { text: "New Delhi", correct: false },
      { text: "Paris", correct: false },
      { text: "Gurugram", correct: true },
      { text: "Geneva", correct: false },
    ],
  },
  {
    question:
      "Which treaty led to the establishment of the International Criminal Court (ICC)?",
    answers: [
      { text: "Geneva Convention", correct: false },
      { text: "Rome Statute", correct: true },
      { text: "Vienna Convention", correct: false },
      { text: "Hague Protocol", correct: false },
    ],
  },
  {
    question: "The ICC is headquartered at:",
    answers: [
      { text: "New York", correct: false },
      { text: "The Hague", correct: true },
      { text: "Brussels", correct: false },
      { text: "Vienna", correct: false },
    ],
  },
  {
    question:
      "Which of the following is NOT covered under the jurisdiction of the ICC?",
    answers: [
      { text: "War crimes", correct: false },
      { text: "Genocide", correct: false },
      { text: "Crimes against humanity", correct: false },
      { text: "Maritime piracy", correct: true },
    ],
  },
  {
    question: "Which festival is associated with the legend of King Mahabali?",
    answers: [
      { text: "Pongal", correct: false },
      { text: "Onam", correct: true },
      { text: "Bihu", correct: false },
      { text: "Makar Sankranti", correct: false },
    ],
  },
  {
    question:
      "Which of the following Agni missiles are two-stage, solid-fuelled systems?",
    answers: [
      { text: "Agni-II", correct: true },
      { text: "Agni-III", correct: true },
      { text: "Agni-IV", correct: true },
      { text: "Agni-I", correct: false },
    ],
  },
  {
    question: "Pulikkali folk performance involves:",
    answers: [
      { text: "Body painting with tiger stripes", correct: true },
      { text: "Accompaniment with percussion instruments", correct: true },
      { text: "Graceful women-only dances", correct: false },
      { text: "Origin during British colonial period", correct: false },
    ],
  },
  {
    question: "Objectives of the International Solar Alliance include:",
    answers: [
      { text: "Deployment of 1000 GW solar capacity", correct: true },
      { text: "Mobilization of USD 1 trillion investment", correct: true },
      { text: "Reduction of 1000 million tonnes CO2 annually", correct: true },
      { text: "Promotion of nuclear energy", correct: false },
    ],
  },
  {
    question: "Which countries are NOT members of ICC?",
    answers: [
      { text: "India", correct: true },
      { text: "United States", correct: true },
      { text: "Russia", correct: true },
      { text: "France", correct: false },
    ],
  },
  {
    question: "Key initiatives under ISA include:",
    answers: [
      { text: "One Sun, One World, One Grid (OSOWOG)", correct: true },
      { text: "Solar Fellowship Programme", correct: true },
      {
        text: "Solar Technology Application Resource Centre (STAR C)",
        correct: true,
      },
      { text: "Blue Dot Network", correct: false },
    ],
  },
  {
    question:
      "With reference to the Agni-V missile, consider the following statements:\n\n1. It is a three-stage, solid-fuel ICBM.\n2. Its range is about 5,000–5,500 km.\n3. It follows a low-altitude cruise trajectory.\n4. It is capable of carrying nuclear warheads.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1, 2 and 4 only", correct: true },
      { text: "1 and 3 only", correct: false },
      { text: "2 and 3 only", correct: false },
      { text: "All four", correct: false },
    ],
  },
  {
    question:
      "With reference to Onam festival, consider the following statements:\n\n1. It marks the beginning of the Malayalam month of Chingam.\n2. Vallamkali is a snake boat race associated with Onam.\n3. It is celebrated in memory of King Mahabali.\n4. Pulikkali is performed by women groups only.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1, 2 and 3 only", correct: true },
      { text: "2 and 4 only", correct: false },
      { text: "1 and 3 only", correct: false },
      { text: "All four", correct: false },
    ],
  },
  {
    question:
      "With reference to the International Solar Alliance (ISA), consider the following statements:\n\n1. It was jointly launched by India and France at COP21 in 2015.\n2. Its headquarters is at Gurugram, India.\n3. Membership is open only to tropical countries.\n4. OSOWOG aims to connect regional solar grids.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1, 2 and 4 only", correct: true },
      { text: "1 and 3 only", correct: false },
      { text: "2, 3 and 4 only", correct: false },
      { text: "All four", correct: false },
    ],
  },
  {
    question:
      "With reference to the International Criminal Court (ICC), consider the following statements:\n\n1. It was established by the Rome Statute in 2002.\n2. It prosecutes individuals, not states.\n3. India, China and USA are members of ICC.\n4. UN Security Council can refer cases to ICC.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1, 2 and 4 only", correct: true },
      { text: "1 and 3 only", correct: false },
      { text: "2 and 3 only", correct: false },
      { text: "All four", correct: false },
    ],
  },
  {
    question:
      "With reference to Ballistic vs Cruise missiles, consider the following statements:\n\n1. Ballistic missiles are rocket-propelled and follow a parabolic trajectory.\n2. Cruise missiles are usually jet-powered and terrain hugging.\n3. Agni-V is an intercontinental ballistic missile.\n4. BrahMos is a medium-range supersonic cruise missile.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1, 2, 3 and 4", correct: true },
      { text: "1 and 3 only", correct: false },
      { text: "2 and 4 only", correct: false },
      { text: "1, 2 and 4 only", correct: false },
    ],
  },
];
//////////////////////////////  22 August 2025 /////////////////////////
const Paper21 = [
  {
    question:
      "The Lion-Tailed Macaque (Macaca silenus) is endemic to which region?",
    answers: [
      { text: "Eastern Himalayas", correct: false },
      { text: "Western Ghats", correct: true },
      { text: "Andaman & Nicobar Islands", correct: false },
      { text: "Aravalli Hills", correct: false },
    ],
  },
  {
    question:
      "Which of the following best describes the conservation status of Lion-Tailed Macaque?",
    answers: [
      { text: "Vulnerable (IUCN)", correct: false },
      { text: "Endangered (IUCN) and Schedule I WPA, 1972", correct: true },
      { text: "Critically Endangered (IUCN)", correct: false },
      { text: "Near Threatened (IUCN)", correct: false },
    ],
  },
  {
    question:
      "Dal Lake, often called the 'Jewel in the crown of Kashmir', is located in:",
    answers: [
      { text: "Leh", correct: false },
      { text: "Gulmarg", correct: false },
      { text: "Srinagar", correct: true },
      { text: "Pulwama", correct: false },
    ],
  },
  {
    question: "Which of the following features is unique to Dal Lake?",
    answers: [
      { text: "Floating gardens known as Raad", correct: true },
      { text: "Presence of mangroves", correct: false },
      { text: "Black-necked cranes breeding", correct: false },
      { text: "Hot water springs", correct: false },
    ],
  },
  {
    question: "Khelo India programme was launched in which year?",
    answers: [
      { text: "2014", correct: false },
      { text: "2017", correct: true },
      { text: "2018", correct: false },
      { text: "2019", correct: false },
    ],
  },
  {
    question:
      "Which article of the Constitution allows one person to be appointed as Governor for two or more states?",
    answers: [
      { text: "Article 153", correct: true },
      { text: "Article 161", correct: false },
      { text: "Article 356", correct: false },
      { text: "Article 164", correct: false },
    ],
  },
  {
    question:
      "The National Organ and Tissue Transplant Organisation (NOTTO) works under which Ministry?",
    answers: [
      { text: "Ministry of Social Justice", correct: false },
      { text: "Ministry of Health and Family Welfare", correct: true },
      { text: "Ministry of AYUSH", correct: false },
      { text: "Ministry of Home Affairs", correct: false },
    ],
  },
  {
    question:
      "Which constitutional Article provides the Governor with the power to grant pardons and reprieves?",
    answers: [
      { text: "Article 153", correct: false },
      { text: "Article 161", correct: true },
      { text: "Article 200", correct: false },
      { text: "Article 356", correct: false },
    ],
  },
  {
    question:
      "Which organization in India maintains the National Registry of Organ and Tissue Donation?",
    answers: [
      { text: "Indian Council of Medical Research", correct: false },
      {
        text: "National Organ and Tissue Transplant Organisation (NOTTO)",
        correct: true,
      },
      { text: "National Health Mission", correct: false },
      { text: "Medical Council of India", correct: false },
    ],
  },
  {
    question:
      "Which of the following Mughal gardens is located around Dal Lake?",
    answers: [
      { text: "Rock Garden", correct: false },
      { text: "Shalimar Bagh", correct: true },
      { text: "Lodhi Garden", correct: false },
      { text: "Mughal Sarai", correct: false },
    ],
  },
  {
    question: "Which of the following are threats to the Lion-Tailed Macaque?",
    answers: [
      { text: "Habitat loss due to deforestation", correct: true },
      { text: "Inbreeding due to fragmented populations", correct: true },
      { text: "Illegal international trade", correct: true },
      { text: "Volcanic eruptions", correct: false },
    ],
  },
  {
    question:
      "Which of the following are features of the Khelo India programme?",
    answers: [
      {
        text: "Financial assistance of ₹5 lakh per annum for 8 years to athletes",
        correct: true,
      },
      {
        text: "Promotion of indigenous sports like Kalaripayattu and Mallakhamb",
        correct: true,
      },
      { text: "Exclusively for Olympic sports only", correct: false },
      { text: "Organizing Youth, University and Winter Games", correct: true },
    ],
  },
  {
    question:
      "Which of the following statements regarding the Governor are correct?",
    answers: [
      { text: "Appointed by the President of India", correct: true },
      {
        text: "Holds office during the pleasure of the President",
        correct: true,
      },
      {
        text: "Cannot reserve bills for President’s consideration",
        correct: false,
      },
      {
        text: "Can act with discretion in certain cases like hung assembly",
        correct: true,
      },
    ],
  },
  {
    question: "Which of the following functions are performed by NOTTO?",
    answers: [
      { text: "Maintains National Registry of Organ Donation", correct: true },
      { text: "Acts as apex body for organ allocation", correct: true },
      { text: "Promotes awareness about organ donation", correct: true },
      { text: "Issues Aadhaar cards", correct: false },
    ],
  },
  {
    question: "Which of the following are concerns related to Dal Lake?",
    answers: [
      { text: "Encroachment", correct: true },
      { text: "Invasive weeds", correct: true },
      { text: "Volcanic ash deposition", correct: false },
      { text: "Unregulated tourism", correct: true },
    ],
  },
  {
    question:
      "With reference to the Lion-Tailed Macaque, consider the following statements:\n\n1. It is found in the Western Ghats only.\n2. It is listed under Schedule I of the Wildlife Protection Act, 1972.\n3. It is strictly nocturnal.\n4. It plays a role in seed dispersal.\n\nWhich of the statements given above is/are correct?",
    answers: [
      { text: "1, 2 and 4 only", correct: true },
      { text: "1, 3 and 4 only", correct: false },
      { text: "2 and 3 only", correct: false },
      { text: "1, 2, 3 and 4", correct: false },
    ],
  },
  {
    question:
      "With reference to Dal Lake, consider the following statements:\n\n1. It is the largest lake in Jammu & Kashmir.\n2. It is famous for floating gardens locally called Raad.\n3. It completely dries up in summers.\n4. It is divided into basins like Gagribal and Bod Dal.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1, 2 and 4 only", correct: true },
      { text: "2 and 3 only", correct: false },
      { text: "1 and 3 only", correct: false },
      { text: "2 and 4 only", correct: false },
    ],
  },
  {
    question:
      "With reference to the Khelo India initiative, consider the following statements:\n\n1. It was launched in 2017 to promote grassroots sports.\n2. It includes Youth Games, University Games, and Winter Games.\n3. Only Olympic sports are allowed under its competitions.\n4. The scheme also provides scholarships to young athletes.\n\nWhich of the statements given above is/are correct?",
    answers: [
      { text: "1, 2 and 4 only", correct: true },
      { text: "2 and 3 only", correct: false },
      { text: "1 and 3 only", correct: false },
      { text: "1, 2, 3 and 4", correct: false },
    ],
  },
  {
    question:
      "With reference to the powers of the Governor, consider the following statements:\n\n1. The Governor has a fixed tenure of 5 years and cannot be removed earlier.\n2. The Governor can reserve bills for the consideration of the President.\n3. One person can serve as Governor of two states simultaneously.\n4. The Governor always acts independently without aid and advice of the Council of Ministers.\n\nWhich of the statements given above is/are correct?",
    answers: [
      { text: "2 and 3 only", correct: true },
      { text: "1 and 2 only", correct: false },
      { text: "1, 2 and 3 only", correct: false },
      { text: "2, 3 and 4 only", correct: false },
    ],
  },
  {
    question:
      "With reference to the National Organ and Tissue Transplant Organisation (NOTTO), consider the following statements:\n\n1. It was created under the Transplantation of Human Organs and Tissues (Amendment) Act, 2011.\n2. It functions under the Ministry of Health and Family Welfare.\n3. It manages organ allocation through its National Human Organ Network.\n4. It issues organ donor cards through Aadhaar.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1, 2 and 3 only", correct: true },
      { text: "2 and 4 only", correct: false },
      { text: "1 and 4 only", correct: false },
      { text: "1, 2, 3 and 4", correct: false },
    ],
  },
];
////////////////////////  23 August 2025  ///////////////////////
const Paper22 = [
  // -------- First 10: Single Correct --------
  {
    question:
      "Which of the following states accounts for the largest share of India’s jute production?",
    answers: [
      { text: "Assam", correct: false },
      { text: "West Bengal", correct: true },
      { text: "Bihar", correct: false },
      { text: "Odisha", correct: false },
    ],
  },
  {
    question: "Jute is commonly known as:",
    answers: [
      { text: "White fibre", correct: false },
      { text: "Golden fibre", correct: true },
      { text: "Silver fibre", correct: false },
      { text: "Eco fibre", correct: false },
    ],
  },
  {
    question:
      "The headquarters of Jute Corporation of India (JCI) is located in:",
    answers: [
      { text: "New Delhi", correct: false },
      { text: "Patna", correct: false },
      { text: "Kolkata", correct: true },
      { text: "Guwahati", correct: false },
    ],
  },
  {
    question: "Lipulekh Pass connects Uttarakhand with which region?",
    answers: [
      { text: "Nepal", correct: false },
      { text: "Bhutan", correct: false },
      { text: "Tibet Autonomous Region of China", correct: true },
      { text: "Ladakh", correct: false },
    ],
  },
  {
    question: "Which pilgrimage is associated with Lipulekh Pass?",
    answers: [
      { text: "Amarnath Yatra", correct: false },
      { text: "Kailash Mansarovar Yatra", correct: true },
      { text: "Char Dham Yatra", correct: false },
      { text: "Vaishno Devi Yatra", correct: false },
    ],
  },
  {
    question:
      "The Shanghai Cooperation Organisation (SCO) was formally established in:",
    answers: [
      { text: "1996", correct: false },
      { text: "2001", correct: true },
      { text: "2005", correct: false },
      { text: "2010", correct: false },
    ],
  },
  {
    question:
      "The headquarters of the Regional Anti-Terrorist Structure (RATS) of the SCO is located in:",
    answers: [
      { text: "Moscow", correct: false },
      { text: "Beijing", correct: false },
      { text: "Tashkent", correct: true },
      { text: "Astana", correct: false },
    ],
  },
  {
    question:
      "Which of the following is the southernmost point of India, located in Great Nicobar?",
    answers: [
      { text: "Campbell Bay", correct: false },
      { text: "Indira Point", correct: true },
      { text: "Port Blair", correct: false },
      { text: "Car Nicobar", correct: false },
    ],
  },
  {
    question:
      "Which tribe, classified as a PVTG, lives in Great Nicobar Island?",
    answers: [
      { text: "Onge", correct: false },
      { text: "Jarawa", correct: false },
      { text: "Shompen", correct: true },
      { text: "Sentinelese", correct: false },
    ],
  },
  {
    question:
      "The Supreme Court’s 2025 stray dog order was stayed because it contradicted:",
    answers: [
      { text: "Prevention of Cruelty to Animals Act", correct: false },
      { text: "Animal Birth Control (ABC) Rules, 2023", correct: true },
      { text: "Wildlife Protection Act, 1972", correct: false },
      { text: "Indian Penal Code provisions", correct: false },
    ],
  },

  // -------- Next 5: Multiple Correct --------
  {
    question:
      "Which of the following are required conditions for jute cultivation?",
    answers: [
      { text: "High rainfall (150–250 cm)", correct: true },
      { text: "Well-drained alluvial soil", correct: true },
      { text: "Cold climate with frost", correct: false },
      { text: "Warm temperatures (25–35°C)", correct: true },
    ],
  },
  {
    question:
      "Which of the following are functions of the Jute Corporation of India?",
    answers: [
      { text: "Implementing MSP for jute", correct: true },
      { text: "Promoting sustainable jute practices", correct: true },
      { text: "Issuing fertilizer subsidies", correct: false },
      { text: "Procurement and marketing of raw jute", correct: true },
    ],
  },
  {
    question:
      "Which of the following Himalayan passes are used for trade with Tibet/China?",
    answers: [
      { text: "Lipulekh Pass", correct: true },
      { text: "Shipki La", correct: true },
      { text: "Rohtang Pass", correct: false },
      { text: "Nathu La", correct: true },
    ],
  },
  {
    question: "Which of the following are correct about SCO membership?",
    answers: [
      { text: "India and Pakistan joined in 2017", correct: true },
      { text: "Iran became a member in 2023", correct: true },
      { text: "Belarus joined as 10th member in 2024", correct: true },
      { text: "Japan is a founding member", correct: false },
    ],
  },
  {
    question:
      "Which of the following are concerns about the Great Nicobar Island project?",
    answers: [
      { text: "Threat to Leatherback turtle habitat", correct: true },
      { text: "Risk to Shompen tribe livelihood", correct: true },
      { text: "Earthquake-prone seismic zone", correct: true },
      { text: "Proximity to Gulf of Aden", correct: false },
    ],
  },

  // -------- Last 5: Statement-based --------
  {
    question:
      "With reference to Jute cultivation in India, consider the following statements:\n\n1. India is the largest producer of raw jute in the world.\n2. Bangladesh accounts for the largest share of global jute exports.\n3. Jute is primarily grown in West Bengal, Assam, and Bihar.\n4. Jute requires cold and dry climate for its growth.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1, 2 and 3 only", correct: true },
      { text: "1, 3 and 4 only", correct: false },
      { text: "2 and 4 only", correct: false },
      { text: "1, 2, 3 and 4", correct: false },
    ],
  },
  {
    question:
      "With reference to Lipulekh Pass, consider the following statements:\n\n1. It is located in Uttarakhand.\n2. It lies near the trijunction of India–Nepal–China.\n3. It is a route for Kailash Mansarovar Yatra.\n4. It was reopened for trade in 2025.\n\nWhich of the statements given above are correct?",
    answers: [
      { text: "1, 2, 3 and 4", correct: true },
      { text: "1, 2 and 3 only", correct: false },
      { text: "2 and 4 only", correct: false },
      { text: "1 and 3 only", correct: false },
    ],
  },
  {
    question:
      "With reference to the Shanghai Cooperation Organisation (SCO), consider the following statements:\n\n1. SCO originated from the Shanghai Five in 1996.\n2. Its Regional Anti-Terrorist Structure (RATS) is headquartered in Moscow.\n3. India and Pakistan became members in 2017.\n4. Belarus became the 10th full member in 2024.\n\nWhich of the statements given above are correct?",
    answers: [
      { text: "1, 3 and 4 only", correct: true },
      { text: "2 and 3 only", correct: false },
      { text: "1, 2 and 3 only", correct: false },
      { text: "1, 2, 3 and 4", correct: false },
    ],
  },
  {
    question:
      "With reference to the Great Nicobar Island project, consider the following statements:\n\n1. The project includes an International Container Terminal and a Greenfield Airport.\n2. Galathea Bay is an important nesting site for the Leatherback turtle.\n3. The Shompen tribe of Great Nicobar is classified as PVTG.\n4. Great Nicobar lies north of the Ten Degree Channel.\n\nWhich of the statements given above are correct?",
    answers: [
      { text: "1, 2 and 3 only", correct: true },
      { text: "1, 2 and 4 only", correct: false },
      { text: "2 and 3 only", correct: false },
      { text: "1, 3 and 4 only", correct: false },
    ],
  },
  {
    question:
      "With reference to the Supreme Court’s 2025 stray dog judgment, consider the following statements:\n\n1. The Court initially directed all stray dogs in Delhi to be confined in shelters.\n2. The order was criticized for being unscientific and unconstitutional.\n3. It contradicted India’s policy of Animal Birth Control (ABC).\n4. Later, the Court stayed its earlier order.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1, 2, 3 and 4", correct: true },
      { text: "1, 2 and 3 only", correct: false },
      { text: "2 and 3 only", correct: false },
      { text: "1 and 4 only", correct: false },
    ],
  },
];
////////////////////////////  24 August 2025 /////////////////////////
const Paper23 = [
  {
    question: "INS Aridhaman belongs to which class of submarines?",
    answers: [
      { text: "Kilo-class", correct: false },
      { text: "Arihant-class", correct: true },
      { text: "Scorpene-class", correct: false },
      { text: "Shishumar-class", correct: false },
    ],
  },
  {
    question: "What is the primary role of SSBN submarines like INS Arihant?",
    answers: [
      { text: "Anti-submarine warfare", correct: false },
      { text: "Ballistic missile deterrence", correct: true },
      { text: "Surface combat support", correct: false },
      { text: "Mine-laying", correct: false },
    ],
  },
  {
    question:
      "Which sonar system on INS Aridhaman combines multiple sonar functions?",
    answers: [
      { text: "USHUS", correct: false },
      { text: "Panchendriya", correct: true },
      { text: "Arihant-Nav", correct: false },
      { text: "DRDO Aqua", correct: false },
    ],
  },
  {
    question: "India’s indigenous SSN project was approved by:",
    answers: [
      { text: "Union Cabinet", correct: false },
      { text: "Cabinet Committee on Security", correct: true },
      { text: "NITI Aayog", correct: false },
      { text: "Ministry of Defence alone", correct: false },
    ],
  },
  {
    question:
      "Which of the following missiles has the longest range among India’s K-series?",
    answers: [
      { text: "K-3", correct: false },
      { text: "K-4", correct: false },
      { text: "K-5", correct: false },
      { text: "K-6", correct: true },
    ],
  },
  {
    question:
      "The K-6 submarine-launched ballistic missile is being developed by:",
    answers: [
      { text: "ISRO", correct: false },
      { text: "DRDO", correct: true },
      { text: "HAL", correct: false },
      { text: "BEL", correct: false },
    ],
  },
  {
    question: "Which navigation system is India’s indigenous GPS alternative?",
    answers: [
      { text: "BeiDou", correct: false },
      { text: "Galileo", correct: false },
      { text: "NavIC", correct: true },
      { text: "GLONASS", correct: false },
    ],
  },
  {
    question:
      "NavIC provides coverage over India and up to how many kilometers beyond its borders?",
    answers: [
      { text: "500 km", correct: false },
      { text: "1000 km", correct: false },
      { text: "1500 km", correct: true },
      { text: "3000 km", correct: false },
    ],
  },
  {
    question:
      "Which projection was designed for sailors to chart straight-line courses?",
    answers: [
      { text: "Equal Earth Projection", correct: false },
      { text: "Gall-Peters Projection", correct: false },
      { text: "Mercator Projection", correct: true },
      { text: "Orthographic Projection", correct: false },
    ],
  },
  {
    question: "Which organisation has endorsed the 'Correct the Map' campaign?",
    answers: [
      { text: "United Nations", correct: false },
      { text: "African Union", correct: true },
      { text: "World Bank", correct: false },
      { text: "European Union", correct: false },
    ],
  },
  {
    question: "Which of the following are Arihant-class submarines?",
    answers: [
      { text: "INS Arihant", correct: true },
      { text: "INS Arighaat", correct: true },
      { text: "INS Chakra", correct: false },
      { text: "INS Aridhaman", correct: true },
    ],
  },
  {
    question:
      "Which of the following are correct about SSNs (Nuclear Attack Submarines)?",
    answers: [
      { text: "They are nuclear-powered", correct: true },
      { text: "They carry nuclear ballistic missiles", correct: false },
      {
        text: "They are mainly used for hunting enemy ships/submarines",
        correct: true,
      },
      { text: "They form part of India’s nuclear triad", correct: false },
    ],
  },
  {
    question: "Which of the following are features of K-6 missile?",
    answers: [
      { text: "Hypersonic speed (~Mach 7.5)", correct: true },
      { text: "Range of 8,000 km", correct: true },
      { text: "MIRV capability", correct: true },
      { text: "Air-to-air missile system", correct: false },
    ],
  },
  {
    question: "Which orbits are used in NavIC?",
    answers: [
      { text: "Geostationary Orbit (GEO)", correct: true },
      { text: "Geosynchronous Orbit (GSO)", correct: true },
      { text: "Polar Orbit", correct: false },
      { text: "Molniya Orbit", correct: false },
    ],
  },
  {
    question: "Which are alternatives to the Mercator projection?",
    answers: [
      { text: "Equal Earth Projection", correct: true },
      { text: "Gall-Peters Projection", correct: true },
      { text: "Orthographic Projection", correct: true },
      { text: "Equirectangular Projection", correct: false },
    ],
  },
  {
    question:
      "With reference to INS Aridhaman, consider the following statements:\n\n1. It is India’s first nuclear-powered submarine.\n2. It is part of the Arihant-class SSBNs.\n3. It can carry K-4 nuclear missiles.\n4. It is under construction at Mazagon Dock Shipbuilders, Mumbai.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "2 and 3 only", correct: true },
      { text: "1 and 4 only", correct: false },
      { text: "1, 2 and 3 only", correct: false },
      { text: "2, 3 and 4 only", correct: false },
    ],
  },
  {
    question:
      "With reference to SSNs (Nuclear Attack Submarines), consider the following statements:\n\n1. They are part of India’s nuclear triad.\n2. They are designed mainly for tactical warfare.\n3. India has leased SSNs from Russia in the past.\n4. The first indigenous SSN is expected by 2036–37.\n\nWhich of the statements given above are correct?",
    answers: [
      { text: "2, 3 and 4 only", correct: true },
      { text: "1, 2 and 3 only", correct: false },
      { text: "1, 3 and 4 only", correct: false },
      { text: "1, 2, 3 and 4", correct: false },
    ],
  },
  {
    question:
      "With reference to the K-6 missile, consider the following statements:\n\n1. It is being developed by DRDO.\n2. It has a range of about 8,000 km.\n3. It is designed for the S-5 class SSBNs.\n4. It uses cryogenic liquid fuel.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1, 2 and 3 only", correct: true },
      { text: "1 and 4 only", correct: false },
      { text: "2 and 4 only", correct: false },
      { text: "1, 2, 3 and 4", correct: false },
    ],
  },
  {
    question:
      "With reference to NavIC, consider the following statements:\n\n1. It is India’s regional navigation satellite system.\n2. It provides coverage up to 1500 km beyond India’s borders.\n3. It currently has only 4 satellites providing full real-time navigation data.\n4. It is designed to provide global coverage.\n\nWhich of the statements given above are correct?",
    answers: [
      { text: "1, 2 and 3 only", correct: true },
      { text: "1 and 4 only", correct: false },
      { text: "2 and 4 only", correct: false },
      { text: "1, 2, 3 and 4", correct: false },
    ],
  },
  {
    question:
      "With reference to the Mercator Projection, consider the following statements:\n\n1. It accurately preserves the relative area of landmasses.\n2. It was designed for navigation by sailors.\n3. It exaggerates the size of regions near the poles.\n4. The African Union has endorsed replacing it with alternatives like Equal Earth Projection.\n\nWhich of the statements given above are correct?",
    answers: [
      { text: "2, 3 and 4 only", correct: true },
      { text: "1 and 2 only", correct: false },
      { text: "1, 3 and 4 only", correct: false },
      { text: "1, 2, 3 and 4", correct: false },
    ],
  },
];
////////////////////////////  25 August 2025 /////////////////////////
const Paper24 = [
  {
    question: "Shipki La Pass is located in which Indian state?",
    answers: [
      { text: "Sikkim", correct: false },
      { text: "Himachal Pradesh", correct: true },
      { text: "Arunachal Pradesh", correct: false },
      { text: "Uttarakhand", correct: false },
    ],
  },
  {
    question:
      "Which two regions were historically connected through Shipki La Pass?",
    answers: [
      { text: "Ladakh and Xinjiang", correct: false },
      { text: "Bushahr (India) and Guge (Tibet)", correct: true },
      { text: "Nepal and Tibet", correct: false },
      { text: "Sikkim and Bhutan", correct: false },
    ],
  },
  {
    question:
      "The International Big Cat Alliance (IBCA) was launched in which year?",
    answers: [
      { text: "2010", correct: false },
      { text: "2015", correct: false },
      { text: "2019", correct: false },
      { text: "2023", correct: true },
    ],
  },
  {
    question:
      "Which of the following is NOT among the seven big cats under IBCA?",
    answers: [
      { text: "Tiger", correct: false },
      { text: "Lion", correct: false },
      { text: "Jaguar", correct: false },
      { text: "Caracal", correct: true },
    ],
  },
  {
    question:
      "The headquarters of International Big Cat Alliance (IBCA) is located in:",
    answers: [
      { text: "Geneva", correct: false },
      { text: "Nairobi", correct: false },
      { text: "New Delhi", correct: true },
      { text: "Paris", correct: false },
    ],
  },
  {
    question:
      "Which DRDO system integrates QRSAM, VSHORADS, and Directed Energy Weapons?",
    answers: [
      { text: "Agni-V", correct: false },
      { text: "Prithvi Defence System", correct: false },
      { text: "Integrated Air Defence Weapon System (IADWS)", correct: true },
      { text: "Akash Missile System", correct: false },
    ],
  },
  {
    question: "The Gaganyaan Mission will use which launch vehicle?",
    answers: [
      { text: "PSLV", correct: false },
      { text: "Human-rated LVM3", correct: true },
      { text: "GSLV Mk II", correct: false },
      { text: "SSLV", correct: false },
    ],
  },
  {
    question:
      "Which decoy system is used on Rafale jets of the Indian Air Force?",
    answers: [
      { text: "BriteCloud", correct: false },
      { text: "Nulka", correct: false },
      { text: "X-Guard Fibre-Optic Towed Decoy", correct: true },
      { text: "Prithvi Defence Decoy", correct: false },
    ],
  },
  {
    question: "The 130th Constitutional Amendment Bill is related to:",
    answers: [
      { text: "Right to Education", correct: false },
      { text: "Disqualification of Ministers upon detention", correct: true },
      { text: "Introduction of GST", correct: false },
      { text: "Reservation for Women", correct: false },
    ],
  },
  {
    question:
      "Which state’s tourism is expected to benefit from reopening Shipki La Pass?",
    answers: [
      { text: "Arunachal Pradesh", correct: false },
      { text: "Himachal Pradesh", correct: true },
      { text: "Sikkim", correct: false },
      { text: "Jammu & Kashmir", correct: false },
    ],
  },
  {
    question: "Which of the following were historically traded via Shipki La?",
    answers: [
      { text: "Wool from Tibet", correct: true },
      { text: "Grains from India", correct: true },
      { text: "Crude oil", correct: false },
      { text: "Precious stones like turquoise", correct: true },
    ],
  },
  {
    question: "Which of the following are objectives of IBCA?",
    answers: [
      { text: "Stop illegal wildlife trade", correct: true },
      { text: "Promote nuclear disarmament", correct: false },
      { text: "Protect big cat habitats", correct: true },
      { text: "Address climate change impacts", correct: true },
    ],
  },
  {
    question:
      "Which of the following are part of DRDO’s Integrated Air Defence Weapon System?",
    answers: [
      { text: "QRSAM", correct: true },
      { text: "VSHORADS", correct: true },
      { text: "Directed Energy Weapon", correct: true },
      { text: "BrahMos Missile", correct: false },
    ],
  },
  {
    question:
      "Which of the following are key technologies required for Gaganyaan?",
    answers: [
      { text: "Crew Module", correct: true },
      { text: "Service Module", correct: true },
      { text: "Crew Escape System", correct: true },
      { text: "Cryogenic Upper Stage only", correct: false },
    ],
  },
  {
    question:
      "Which of the following are examples of deception systems in warfare?",
    answers: [
      { text: "X-Guard", correct: true },
      { text: "BriteCloud", correct: true },
      { text: "Nulka", correct: true },
      { text: "INS Vikrant", correct: false },
    ],
  },
  {
    question:
      "With reference to Shipki La Pass, consider the following statements:\n\n1. It is located in Himachal Pradesh on the India-China border.\n2. It historically connected Bushahr in India with Guge in Tibet.\n3. It is currently open for both tourism and cross-border trade.\n4. Wool from Tibet and grains from India were exchanged via this pass.\n\nWhich of the above statements are correct?",
    answers: [
      { text: "1, 2 and 3 only", correct: false },
      { text: "2, 3 and 4 only", correct: false },
      { text: "1, 2 and 4 only", correct: true },
      { text: "1, 2, 3 and 4", correct: false },
    ],
  },
  {
    question:
      "With reference to the International Big Cat Alliance (IBCA), consider the following statements:\n\n1. It was launched in 2023 on the 50th anniversary of Project Tiger.\n2. Only range countries with big cats can join.\n3. Its headquarters is located in India.\n4. India is home to 5 of the 7 big cats.\n\nWhich of the above statements are correct?",
    answers: [
      { text: "1, 2 and 3 only", correct: false },
      { text: "1, 3 and 4 only", correct: true },
      { text: "2 and 4 only", correct: false },
      { text: "1, 2, 3 and 4", correct: false },
    ],
  },
  {
    question:
      "With reference to DRDO’s Integrated Air Defence Weapon System (IADWS), consider the following statements:\n\n1. It integrates QRSAM, VSHORADS, and Directed Energy Weapons.\n2. It is controlled by a Centralised Command and Control Centre.\n3. It was jointly developed with Israel.\n4. It aims to protect critical facilities from aerial threats.\n\nWhich of the above statements are correct?",
    answers: [
      { text: "1, 2 and 3 only", correct: false },
      { text: "1, 2 and 4 only", correct: true },
      { text: "2 and 4 only", correct: false },
      { text: "1, 3 and 4 only", correct: false },
    ],
  },
  {
    question:
      "With reference to India’s Gaganyaan Mission, consider the following statements:\n\n1. It aims to send a three-member crew to Low Earth Orbit for three days.\n2. It will use a human-rated version of the LVM3 rocket.\n3. The Orbital Module consists of a Crew Module and a Service Module.\n4. Vyommitra is the name of the humanoid used in unmanned missions.\n\nWhich of the above statements are correct?",
    answers: [
      { text: "1, 2 and 3 only", correct: false },
      { text: "1, 2, 3 and 4", correct: true },
      { text: "2 and 4 only", correct: false },
      { text: "1 and 3 only", correct: false },
    ],
  },
  {
    question:
      "With reference to deception systems in modern warfare, consider the following statements:\n\n1. The X-Guard decoy system is used on Rafale aircraft.\n2. BriteCloud is indigenously developed in India.\n3. The Nulka system is a naval decoy developed by Australia and the U.S.\n4. India has sought land-based decoys for T-90 tanks.\n\nWhich of the above statements are correct?",
    answers: [
      { text: "1 and 3 only", correct: false },
      { text: "1, 3 and 4 only", correct: true },
      { text: "2 and 4 only", correct: false },
      { text: "1, 2, 3 and 4", correct: false },
    ],
  },
];
///////////////////////  26 August 2025 /////////////////////////
const Paper25 = [
  {
    question:
      "Which of the following ecosystems are known as Blue Carbon Ecosystems?",
    answers: [
      { text: "Mangroves, Salt Marshes, Seagrass Meadows", correct: true },
      { text: "Tropical Rainforests", correct: false },
      { text: "Coral Reefs", correct: false },
      { text: "Desert Shrubs", correct: false },
    ],
  },
  {
    question:
      "Blue carbon ecosystems cover about 2% of ocean area but absorb approximately how much of the ocean’s total carbon?",
    answers: [
      { text: "10%", correct: false },
      { text: "25%", correct: false },
      { text: "50%", correct: true },
      { text: "75%", correct: false },
    ],
  },
  {
    question: "Huntington’s Disease is caused due to mutation in which gene?",
    answers: [
      { text: "HTT gene", correct: true },
      { text: "BRCA1 gene", correct: false },
      { text: "TP53 gene", correct: false },
      { text: "APOE gene", correct: false },
    ],
  },
  {
    question: "Which of the following best describes 'Blue Carbon'?",
    answers: [
      { text: "Carbon stored in terrestrial forests", correct: false },
      { text: "Carbon stored in petroleum and natural gas", correct: false },
      {
        text: "Carbon stored in coastal ecosystems like mangroves and seagrasses",
        correct: true,
      },
      { text: "Carbon released from burning coal", correct: false },
    ],
  },
  {
    question:
      "Which statutory body was established under the Tobacco Board Act, 1975?",
    answers: [
      { text: "Tea Board", correct: false },
      { text: "Rubber Board", correct: false },
      { text: "Coffee Board", correct: false },
      { text: "Tobacco Board", correct: true },
    ],
  },
  {
    question: "World No Tobacco Day is observed on:",
    answers: [
      { text: "1st May", correct: false },
      { text: "31st May", correct: true },
      { text: "1st June", correct: false },
      { text: "15th August", correct: false },
    ],
  },
  {
    question:
      "Which Indian organization is implementing wastewater surveillance in multiple cities?",
    answers: [
      { text: "NITI Aayog", correct: false },
      { text: "Indian Council of Medical Research (ICMR)", correct: true },
      { text: "Central Pollution Control Board", correct: false },
      { text: "National Centre for Disease Control", correct: false },
    ],
  },
  {
    question: "The CEREBO device developed by ICMR is primarily used for:",
    answers: [
      { text: "Treatment of brain injury", correct: false },
      { text: "Diagnosis of traumatic brain injury", correct: true },
      { text: "Gene therapy for rare diseases", correct: false },
      { text: "Detecting Alzheimer's disease", correct: false },
    ],
  },
  {
    question: "The Indian Navy’s Project 17A pertains to:",
    answers: [
      { text: "Nuclear submarines", correct: false },
      { text: "Aircraft carriers", correct: false },
      { text: "Stealth guided-missile frigates", correct: true },
      { text: "Coastal patrol vessels", correct: false },
    ],
  },
  {
    question:
      "Which shipbuilder constructed the guided-missile frigate INS Himgiri?",
    answers: [
      { text: "Mazagon Dock Shipbuilders Ltd. (MDL)", correct: false },
      { text: "Garden Reach Shipbuilders & Engineers (GRSE)", correct: true },
      { text: "Hindustan Shipyard", correct: false },
      { text: "Cochin Shipyard Ltd.", correct: false },
    ],
  },
  {
    question:
      "Which of the following are considered methods of Carbon Capture and Sequestration (CCS)?",
    answers: [
      {
        text: "Spreading finely ground basalt rock on farmlands",
        correct: true,
      },
      { text: "Increasing alkalinity of oceans by adding lime", correct: true },
      { text: "Injecting captured CO2 into abandoned mines", correct: true },
      { text: "Planting only eucalyptus trees", correct: false },
    ],
  },
  {
    question:
      "Which of the following are effects of tobacco use as highlighted in recent reports?",
    answers: [
      { text: "Increased cancer risk", correct: true },
      { text: "Economic burden on GDP", correct: true },
      { text: "Improved soil fertility", correct: false },
      {
        text: "Non-communicable diseases like heart and lung diseases",
        correct: true,
      },
    ],
  },
  {
    question: "Which are examples of tertiary wastewater treatment methods?",
    answers: [
      { text: "Reverse Osmosis (RO)", correct: true },
      { text: "Ion-exchange method", correct: true },
      { text: "Activated sludge process", correct: false },
      { text: "Chemical oxidation", correct: true },
    ],
  },
  {
    question:
      "Which features are associated with the Nilgiri-class frigates under Project 17A?",
    answers: [
      { text: "Stealth technology", correct: true },
      { text: "Supersonic BrahMos missiles", correct: true },
      { text: "Nuclear propulsion", correct: false },
      { text: "Modular construction techniques", correct: true },
    ],
  },
  {
    question: "Which statements are correct about Huntington’s Disease?",
    answers: [
      { text: "It is progressive and incurable", correct: true },
      { text: "It is caused by HTT gene mutation", correct: true },
      {
        text: "Both parents must carry the gene for inheritance",
        correct: false,
      },
      { text: "It affects both motor and cognitive functions", correct: true },
    ],
  },
  {
    question:
      "With reference to Blue Carbon Ecosystems, consider the following statements:\n\n1. They include mangroves, salt marshes, and seagrass meadows.\n2. They cover nearly 20% of ocean area.\n3. They absorb around 50% of carbon captured by oceans.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1 and 3 only", correct: true },
      { text: "1 and 2 only", correct: false },
      { text: "2 and 3 only", correct: false },
      { text: "1, 2 and 3", correct: false },
    ],
  },
  {
    question:
      "With reference to Tobacco control in India, consider the following statements:\n\n1. The COTPA Act, 2003, directly provides taxation provisions for tobacco products.\n2. India mandates pictorial health warnings on 85% of tobacco packaging.\n3. The PECA Act, 2019, bans e-cigarettes in India.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1 and 2 only", correct: false },
      { text: "2 and 3 only", correct: true },
      { text: "1 and 3 only", correct: false },
      { text: "1, 2 and 3", correct: false },
    ],
  },
  {
    question:
      "With reference to Wastewater-Based Epidemiology (WBE), consider the following statements:\n\n1. It can detect pathogens from both symptomatic and asymptomatic individuals.\n2. It provides infection trend data often before clinical cases are reported.\n3. It is being expanded by ICMR across 50 cities in India.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1 and 2 only", correct: false },
      { text: "2 and 3 only", correct: false },
      { text: "1 and 3 only", correct: false },
      { text: "1, 2 and 3", correct: true },
    ],
  },
  {
    question:
      "With reference to the CEREBO device, consider the following statements:\n\n1. It uses near-infrared spectroscopy and machine learning.\n2. It is radiation-free and safe for pregnant women.\n3. It is used for treatment of traumatic brain injury.\n4. It was developed with collaboration of AIIMS Bhopal and NIMHANS.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1, 2 and 4 only", correct: true },
      { text: "1 and 3 only", correct: false },
      { text: "2 and 3 only", correct: false },
      { text: "1, 2, 3 and 4", correct: false },
    ],
  },
  {
    question:
      "With reference to Project 17A frigates, consider the following statements:\n\n1. They are capable of multi-dimensional warfare (air, surface, sub-surface).\n2. They are the first Indian naval project to use modular construction.\n3. All ships under Project 17A are being built only at Mazagon Dock Shipbuilders Ltd.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1 and 2 only", correct: true },
      { text: "1 only", correct: false },
      { text: "2 and 3 only", correct: false },
      { text: "1, 2 and 3", correct: false },
    ],
  },
];
///////////////////////////// 27 August 2025  /////////////////////////
const Paper26 = [
  {
    question:
      "Which state is associated with the Kuttiyadi Coconut, recently proposed for a GI tag?",
    answers: [
      { text: "Kerala", correct: true },
      { text: "Karnataka", correct: false },
      { text: "Tamil Nadu", correct: false },
      { text: "Andhra Pradesh", correct: false },
    ],
  },
  {
    question:
      "The Geographical Indications of Goods (Registration and Protection) Act, 1999 was enacted to comply with which international agreement?",
    answers: [
      { text: "ILO Convention", correct: false },
      { text: "WTO-TRIPS Agreement", correct: true },
      { text: "UNCTAD Charter", correct: false },
      { text: "IMF Articles of Agreement", correct: false },
    ],
  },
  {
    question: "Which organization administers GI tags in India?",
    answers: [
      { text: "NITI Aayog", correct: false },
      { text: "DPIIT under Ministry of Commerce", correct: true },
      { text: "APEDA", correct: false },
      { text: "Ministry of Agriculture", correct: false },
    ],
  },
  {
    question:
      "Which of the following states is the largest producer of coconuts in India?",
    answers: [
      { text: "Kerala", correct: false },
      { text: "Karnataka", correct: true },
      { text: "Tamil Nadu", correct: false },
      { text: "Andhra Pradesh", correct: false },
    ],
  },
  {
    question:
      "Which statutory body promotes coconut farming and industry in India?",
    answers: [
      { text: "National Horticulture Board", correct: false },
      { text: "Coconut Development Board", correct: true },
      {
        text: "Agricultural and Processed Food Export Development Authority",
        correct: false,
      },
      { text: "ICAR", correct: false },
    ],
  },
  {
    question:
      "Salwa Judum, declared unconstitutional in 2011, was primarily associated with which state?",
    answers: [
      { text: "Jharkhand", correct: false },
      { text: "Odisha", correct: false },
      { text: "Chhattisgarh", correct: true },
      { text: "Bihar", correct: false },
    ],
  },
  {
    question: "The 'SAMADHAN Doctrine' is associated with:",
    answers: [
      { text: "Counter-terrorism operations in J&K", correct: false },
      { text: "Countering Left Wing Extremism", correct: true },
      { text: "Blue Economy Policy", correct: false },
      { text: "Doubling Farmer Income", correct: false },
    ],
  },
  {
    question: "The LCA Tejas aircraft is primarily manufactured by:",
    answers: [
      { text: "ISRO", correct: false },
      { text: "HAL", correct: true },
      { text: "BHEL", correct: false },
      { text: "Bharat Dynamics Limited", correct: false },
    ],
  },
  {
    question:
      "Which of the following is India’s indigenous 5th generation stealth fighter project?",
    answers: [
      { text: "LCA Tejas Mk-1A", correct: false },
      { text: "Advanced Medium Combat Aircraft (AMCA)", correct: true },
      { text: "MiG-29 Upgrade", correct: false },
      { text: "Sukhoi Su-30MKI", correct: false },
    ],
  },
  {
    question:
      "India recently suspended 11% import duty on which raw material till September 2025?",
    answers: [
      { text: "Jute", correct: false },
      { text: "Cotton", correct: true },
      { text: "Sugarcane", correct: false },
      { text: "Rubber", correct: false },
    ],
  },
  {
    question:
      "Which of the following are top coconut producing states in India?",
    answers: [
      { text: "Karnataka", correct: true },
      { text: "Kerala", correct: true },
      { text: "Tamil Nadu", correct: true },
      { text: "Punjab", correct: false },
    ],
  },
  {
    question:
      "Consider the following features of LCA Tejas: Which are correct?",
    answers: [
      {
        text: "It is the lightest supersonic fighter in its class",
        correct: true,
      },
      { text: "It has air-to-air refueling capability", correct: true },
      { text: "It is powered by an indigenous jet engine", correct: false },
      { text: "It has a maximum speed of Mach 1.8", correct: true },
    ],
  },
  {
    question:
      "Which of the following minerals make the DRC geopolitically significant?",
    answers: [
      { text: "Cobalt", correct: true },
      { text: "Coltan", correct: true },
      { text: "Lithium", correct: false },
      { text: "Copper", correct: true },
    ],
  },
  {
    question:
      "Consider the following about Cotton in India. Which are correct?",
    answers: [
      { text: "India is the largest cotton producer by area", correct: true },
      { text: "Nearly two-thirds of India’s cotton is rainfed", correct: true },
      { text: "Gujarat is the largest producing state", correct: true },
      { text: "Cotton is not grown in Southern India", correct: false },
    ],
  },
  {
    question:
      "Which of the following were reasons behind rising coconut oil prices in India?",
    answers: [
      { text: "Drought in Philippines and Indonesia", correct: true },
      { text: "Diversion to biodiesel production", correct: true },
      { text: "Export restrictions from Indonesia", correct: true },
      { text: "Excess domestic production", correct: false },
    ],
  },
  {
    question:
      "With reference to the Salwa Judum verdict (2011), consider the following statements:\n\n1. It was a state-supported vigilante movement in Chhattisgarh.\n2. The Supreme Court upheld its continuation.\n3. Recruitment of tribal youth as SPOs was held unconstitutional.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1 and 2 only", correct: false },
      { text: "1 and 3 only", correct: true },
      { text: "2 and 3 only", correct: false },
      { text: "All three", correct: false },
    ],
  },
  {
    question:
      "With reference to Left Wing Extremism (LWE) in India, consider the following statements:\n\n1. It originated in Naxalbari, West Bengal in 1967.\n2. SAMADHAN doctrine is a strategy to counter it.\n3. The Bastariya Battalion recruits only tribal youth of Odisha.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1 and 2 only", correct: true },
      { text: "2 and 3 only", correct: false },
      { text: "1 and 3 only", correct: false },
      { text: "1, 2 and 3", correct: false },
    ],
  },
  {
    question:
      "With reference to the LCA Tejas, consider the following statements:\n\n1. It was developed by ADA under DRDO.\n2. It is powered by GE F404 engines.\n3. Tejas Mk-1A has AESA radar and BVR missile capability.\n4. It is India’s first 5th generation stealth fighter.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1, 2 and 3 only", correct: true },
      { text: "2 and 4 only", correct: false },
      { text: "1, 3 and 4 only", correct: false },
      { text: "All four", correct: false },
    ],
  },
  {
    question:
      "With reference to cotton cultivation in India, consider the following statements:\n\n1. India grows all four major species of cotton.\n2. The recently launched Mission for Cotton Productivity is under the Ministry of Textiles.\n3. Bt cotton was first introduced in India in 2002.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1 and 2 only", correct: false },
      { text: "2 and 3 only", correct: false },
      { text: "1, 2 and 3", correct: true },
      { text: "1 and 3 only", correct: false },
    ],
  },
  {
    question:
      "With reference to the Democratic Republic of Congo (DRC), consider the following statements:\n\n1. It is the largest producer of cobalt in the world.\n2. Coltan from the DRC is widely used in electronics.\n3. China has significant control over its mining sector.\n4. The DRC is part of the Congo Basin.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1, 2 and 3 only", correct: false },
      { text: "2, 3 and 4 only", correct: false },
      { text: "1, 2, 3 and 4", correct: true },
      { text: "1 and 4 only", correct: false },
    ],
  },
];
/////////////////////////  28 August 2025 /////////////////////////
const Paper27 = [
  {
    question:
      "Which country accounts for nearly 70% of the world’s cobalt production?",
    answers: [
      { text: "Kazakhstan", correct: false },
      { text: "Argentina", correct: false },
      { text: "The Democratic Republic of Congo", correct: true },
      { text: "Botswana", correct: false },
    ],
  },
  {
    question:
      "Which of the following minerals from DRC is widely used in smartphones and laptops?",
    answers: [
      { text: "Coltan (Tantalum & Niobium)", correct: true },
      { text: "Lithium", correct: false },
      { text: "Bauxite", correct: false },
      { text: "Graphite", correct: false },
    ],
  },
  {
    question:
      "The Belt and Road Initiative (BRI) has enabled which country to dominate DRC’s mining sector?",
    answers: [
      { text: "USA", correct: false },
      { text: "France", correct: false },
      { text: "China", correct: true },
      { text: "India", correct: false },
    ],
  },
  {
    question:
      "Pradhan Mantri Jan Dhan Yojana (PMJDY) was launched in which year?",
    answers: [
      { text: "2012", correct: false },
      { text: "2014", correct: true },
      { text: "2016", correct: false },
      { text: "2018", correct: false },
    ],
  },
  {
    question:
      "Which of the following organizations implements the Honey Mission?",
    answers: [
      { text: "ICAR", correct: false },
      { text: "Khadi and Village Industries Commission (KVIC)", correct: true },
      { text: "NABARD", correct: false },
      { text: "Ministry of Agriculture", correct: false },
    ],
  },
  {
    question: "The New World Screwworm is scientifically known as:",
    answers: [
      { text: "Anopheles stephensi", correct: false },
      { text: "Cochliomyia hominivorax", correct: true },
      { text: "Glossina morsitans", correct: false },
      { text: "Culex quinquefasciatus", correct: false },
    ],
  },
  {
    question:
      "Which technique eradicated New World Screwworm in the U.S. during the 1960s?",
    answers: [
      { text: "Gene Editing", correct: false },
      { text: "Sterile Insect Technique (SIT)", correct: true },
      { text: "Chemical Fumigation", correct: false },
      { text: "Biopesticides", correct: false },
    ],
  },
  {
    question: "Which state is among the top honey-producing states in India?",
    answers: [
      { text: "Uttar Pradesh", correct: true },
      { text: "Punjab", correct: false },
      { text: "Kerala", correct: false },
      { text: "Maharashtra", correct: false },
    ],
  },
  {
    question: "Which of the following was a major achievement of PMJDY?",
    answers: [
      { text: "Only 40% account ownership", correct: false },
      {
        text: "Direct Benefit Transfers (DBT) to beneficiaries",
        correct: true,
      },
      { text: "Providing only agricultural loans", correct: false },
      { text: "Exclusive scheme for women only", correct: false },
    ],
  },
  {
    question:
      "Which armed group is NOT associated with instability in the DRC?",
    answers: [
      { text: "M23", correct: false },
      { text: "Allied Democratic Forces (ADF)", correct: false },
      { text: "Mai-Mai militias", correct: false },
      { text: "Taliban", correct: true },
    ],
  },
  {
    question: "Which of the following are major exports/minerals of the DRC?",
    answers: [
      { text: "Cobalt", correct: true },
      { text: "Gold", correct: true },
      { text: "Diamonds", correct: true },
      { text: "Rice", correct: false },
    ],
  },
  {
    question: "Which of the following are objectives of PMJDY?",
    answers: [
      { text: "Universal banking access", correct: true },
      { text: "Financial literacy promotion", correct: true },
      { text: "Providing free ration", correct: false },
      { text: "Insurance and pension facilities", correct: true },
    ],
  },
  {
    question:
      "Which of the following statements about Honey Mission are correct?",
    answers: [
      { text: "Launched in 2017", correct: true },
      { text: "Implemented by Ministry of MSME through KVIC", correct: true },
      { text: "Focused only on urban entrepreneurship", correct: false },
      { text: "Supports beekeeping training", correct: true },
    ],
  },
  {
    question:
      "Which countries have been accused of exploiting DRC’s mineral wealth?",
    answers: [
      { text: "Rwanda", correct: true },
      { text: "Uganda", correct: true },
      { text: "Burundi", correct: true },
      { text: "Japan", correct: false },
    ],
  },
  {
    question:
      "Which of the following contributed to the re-emergence of New World Screwworm?",
    answers: [
      { text: "Movement of infected cattle across borders", correct: true },
      { text: "Reduced effectiveness of sterile strains", correct: true },
      { text: "Improved veterinary surveillance", correct: false },
      { text: "Weak border monitoring", correct: true },
    ],
  },
  {
    question:
      "With reference to PMJDY, consider the following statements:\n\n1. It was launched in 2014.\n2. Over half the accounts are held by women.\n3. It provides only credit facilities, not insurance.\n4. It helped in quick money transfer during COVID-19.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1, 2 and 4 only", correct: true },
      { text: "1 and 3 only", correct: false },
      { text: "2 and 3 only", correct: false },
      { text: "All four", correct: false },
    ],
  },
  {
    question:
      "With reference to the Democratic Republic of Congo (DRC), consider the following statements:\n\n1. It is the world’s largest cobalt producer.\n2. China has invested heavily in its mining sector.\n3. DRC is not part of the Congo Basin.\n4. Rebel groups often profit from illegal mining.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1, 2 and 4 only", correct: true },
      { text: "1 and 3 only", correct: false },
      { text: "2, 3 and 4 only", correct: false },
      { text: "All four", correct: false },
    ],
  },
  {
    question:
      "With reference to the Honey Mission, consider the following statements:\n\n1. It was launched by the Ministry of Agriculture.\n2. It aims at enhancing rural incomes through beekeeping.\n3. India is among the top 10 exporters of honey.\n4. It provides skill training for beekeepers.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "2, 3 and 4 only", correct: true },
      { text: "1 and 2 only", correct: false },
      { text: "1, 2, 3 and 4", correct: false },
      { text: "3 and 4 only", correct: false },
    ],
  },
  {
    question:
      "With reference to New World Screwworm, consider the following statements:\n\n1. It is a parasitic fly that lays eggs in wounds of warm-blooded animals.\n2. It was eradicated from the U.S. using the Sterile Insect Technique.\n3. Recent outbreaks have been reported in Central America.\n4. It spreads primarily through contaminated water.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1, 2 and 3 only", correct: true },
      { text: "1 and 4 only", correct: false },
      { text: "2, 3 and 4 only", correct: false },
      { text: "All four", correct: false },
    ],
  },
  {
    question:
      "With reference to financial inclusion in India, consider the following statements:\n\n1. PMJDY has helped India achieve near-universal banking access.\n2. The World Bank has recognized PMJDY as a model program.\n3. Financial literacy remains a challenge under PMJDY.\n4. Only urban households were covered under the scheme.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1, 2 and 3 only", correct: true },
      { text: "1 and 4 only", correct: false },
      { text: "2 and 4 only", correct: false },
      { text: "All four", correct: false },
    ],
  },
];
////////////////////////// 29 August 2025 /////////////////////////
const Paper28 = [
  {
    question:
      "India’s second spaceport is being developed at Kulasekarapattinam in Tamil Nadu. Its main purpose is:",
    answers: [
      { text: "Launching heavy communication satellites", correct: false },
      { text: "Launching small satellites using SSLV", correct: true },
      { text: "Testing nuclear-capable missiles", correct: false },
      { text: "Space tourism programs", correct: false },
    ],
  },
  {
    question:
      "From Kulasekarapattinam, rockets can launch directly southward. This advantage avoids:",
    answers: [
      { text: "Crossing Sri Lanka airspace", correct: true },
      { text: "Crossing Bay of Bengal", correct: false },
      { text: "Crossing Arabian Sea", correct: false },
      { text: "Crossing Himalayas", correct: false },
    ],
  },
  {
    question:
      "The Small Satellite Launch Vehicle (SSLV) developed by ISRO can carry satellites up to:",
    answers: [
      { text: "200 kg into Low Earth Orbit", correct: false },
      { text: "500 kg into Low Earth Orbit", correct: true },
      { text: "2,000 kg into Geostationary Orbit", correct: false },
      { text: "10,000 kg into Medium Earth Orbit", correct: false },
    ],
  },
  {
    question:
      "The Tungabhadra River is a major tributary of which Indian river?",
    answers: [
      { text: "Krishna", correct: true },
      { text: "Godavari", correct: false },
      { text: "Cauvery", correct: false },
      { text: "Mahanadi", correct: false },
    ],
  },
  {
    question:
      "The Pranhita River, the largest tributary of the Godavari, is formed by the confluence of:",
    answers: [
      { text: "Gandak and Ghaghara", correct: false },
      { text: "Wardha and Wainganga", correct: true },
      { text: "Bhima and Tungabhadra", correct: false },
      { text: "Musi and Manjira", correct: false },
    ],
  },
  {
    question:
      "The Index of Industrial Production (IIP) in India is compiled and released by:",
    answers: [
      { text: "Reserve Bank of India", correct: false },
      { text: "National Statistical Office under MoSPI", correct: true },
      { text: "NITI Aayog", correct: false },
      { text: "Finance Commission", correct: false },
    ],
  },
  {
    question:
      "The current base year for calculating the Index of Industrial Production (IIP) is:",
    answers: [
      { text: "2004-05", correct: false },
      { text: "2011-12", correct: true },
      { text: "2017-18", correct: false },
      { text: "2022-23", correct: false },
    ],
  },
  {
    question:
      "Which river is popularly known as the ‘Dakshin Ganga’ due to its cultural and religious significance?",
    answers: [
      { text: "Krishna", correct: false },
      { text: "Godavari", correct: true },
      { text: "Cauvery", correct: false },
      { text: "Narmada", correct: false },
    ],
  },
  {
    question: "India’s demographic dividend refers to:",
    answers: [
      {
        text: "Economic growth potential due to a large working-age population",
        correct: true,
      },
      {
        text: "Increase in agricultural output due to fertile soil",
        correct: false,
      },
      { text: "Migration-led population growth", correct: false },
      { text: "Decline in dependency ratio due to ageing", correct: false },
    ],
  },
  {
    question: "The Tehri Hydropower Complex is located on which river?",
    answers: [
      { text: "Alaknanda", correct: false },
      { text: "Bhagirathi", correct: true },
      { text: "Mandakini", correct: false },
      { text: "Dhauliganga", correct: false },
    ],
  },
  {
    question:
      "Which of the following are tributaries of the Brahmaputra River?",
    answers: [
      { text: "Dibang", correct: true },
      { text: "Kameng", correct: true },
      { text: "Lohit", correct: true },
      { text: "Ghaghara", correct: false },
    ],
  },
  {
    question:
      "Which of the following statements correctly describe the features of SSLV?",
    answers: [
      { text: "Low cost and quick turnaround time", correct: true },
      { text: "Designed for small satellites (<500 kg)", correct: true },
      { text: "Primarily used for geostationary satellites", correct: false },
      { text: "Requires minimal infrastructure", correct: true },
    ],
  },
  {
    question: "Which are the major tributaries of the Krishna River?",
    answers: [
      { text: "Tungabhadra", correct: true },
      { text: "Bhima", correct: true },
      { text: "Pranhita", correct: false },
      { text: "Musi", correct: true },
    ],
  },
  {
    question:
      "Which of the following are responsibilities of the Ministry of Statistics and Programme Implementation (MoSPI)?",
    answers: [
      { text: "Compiling CPI and IIP", correct: true },
      { text: "Monitoring MPLADS", correct: true },
      { text: "Supervising RBI monetary policy", correct: false },
      { text: "Implementing the Twenty Point Programme", correct: true },
    ],
  },
  {
    question:
      "Which of the following are considered limitations of the Index of Industrial Production (IIP)?",
    answers: [
      { text: "It excludes the services sector", correct: true },
      {
        text: "It does not reflect the entire economic picture",
        correct: true,
      },
      { text: "It measures only monetary value of output", correct: false },
      { text: "It is released every five years", correct: false },
    ],
  },
  {
    question:
      "With reference to the Small Satellite Launch Vehicle (SSLV), consider the following statements:\n\n1. SSLV can carry up to 500 kg into Low Earth Orbit.\n2. It requires minimal launch infrastructure compared to PSLV and GSLV.\n3. SSLV is primarily designed to place satellites into geostationary orbit.\n4. SSLV offers quick and on-demand launches.\n\nWhich of the statements given above is/are correct?",
    answers: [
      { text: "1, 2 and 4 only", correct: true },
      { text: "1 and 3 only", correct: false },
      { text: "2 and 3 only", correct: false },
      { text: "1, 2, 3 and 4", correct: false },
    ],
  },
  {
    question:
      "With reference to the Godavari River system, consider the following statements:\n\n1. It originates from Trimbakeshwar in Maharashtra.\n2. Pranhita is its largest tributary.\n3. The Kumbh Mela is celebrated on its banks at Nashik.\n4. The Godavari directly feeds Kolleru Lake.\n\nWhich of the statements given above is/are correct?",
    answers: [
      { text: "1, 2 and 3 only", correct: true },
      { text: "2 and 4 only", correct: false },
      { text: "1 and 4 only", correct: false },
      { text: "1, 2, 3 and 4", correct: false },
    ],
  },
  {
    question:
      "With reference to India’s demographic dividend, consider the following statements:\n\n1. It refers to economic potential when the working-age population is larger than dependents.\n2. In India, more than 60% of the population is below 35 years of age.\n3. Without skills and jobs, demographic dividend may become a liability.\n4. India’s median age is higher than that of Europe and USA.\n\nWhich of the statements given above is/are correct?",
    answers: [
      { text: "1, 2 and 3 only", correct: true },
      { text: "2 and 4 only", correct: false },
      { text: "1, 3 and 4 only", correct: false },
      { text: "1, 2, 3 and 4", correct: false },
    ],
  },
  {
    question:
      "With reference to the Index of Industrial Production (IIP), consider the following statements:\n\n1. It is a quantum index measured in physical terms.\n2. It is compiled monthly by the NSO under MoSPI.\n3. The base year is 2011-12, soon to be revised to 2022-23.\n4. It covers mining, manufacturing, electricity, and services.\n\nWhich of the statements given above is/are correct?",
    answers: [
      { text: "1, 2 and 3 only", correct: true },
      { text: "2 and 4 only", correct: false },
      { text: "1 and 4 only", correct: false },
      { text: "1, 2, 3 and 4", correct: false },
    ],
  },
  {
    question:
      "With reference to MoSPI (Ministry of Statistics and Programme Implementation), consider the following statements:\n\n1. It compiles GDP, CPI, and IIP data.\n2. The National Statistical Commission (NSC) is a constitutional body under MoSPI.\n3. It monitors MPLADS and the Twenty Point Programme.\n4. It supervises national surveys like HCES and ASSSE.\n\nWhich of the statements given above is/are correct?",
    answers: [
      { text: "1, 3 and 4 only", correct: true },
      { text: "2 and 3 only", correct: false },
      { text: "1 and 2 only", correct: false },
      { text: "1, 2, 3 and 4", correct: false },
    ],
  },
];
//////////////////////// 30 August 2025 /////////////////////////
const Paper29 = [
  {
    question:
      "Which of the following correctly defines Foreign Direct Investment (FDI) in India?",
    answers: [
      {
        text: "Investment by an Indian resident in Indian companies",
        correct: false,
      },
      {
        text: "Investment by a foreign resident owning ≥10% in a listed Indian company",
        correct: true,
      },
      { text: "Short-term portfolio investment by FIIs", correct: false },
      { text: "Government grants to Indian firms", correct: false },
    ],
  },
  {
    question: "Which of the following sectors are prohibited for FDI in India?",
    answers: [
      { text: "Lottery and Gambling", correct: true },
      { text: "Telecom and Airports", correct: false },
      { text: "Oil & Gas exploration", correct: false },
      { text: "Coal mining", correct: false },
    ],
  },
  {
    question:
      "Which global financial institution publishes the Global Financial Stability Report?",
    answers: [
      { text: "World Bank", correct: false },
      { text: "International Monetary Fund", correct: true },
      { text: "OECD", correct: false },
      { text: "European Central Bank", correct: false },
    ],
  },
  {
    question:
      "Where is the headquarters of the International Monetary Fund (IMF) located?",
    answers: [
      { text: "New York", correct: false },
      { text: "Geneva", correct: false },
      { text: "Washington D.C.", correct: true },
      { text: "Paris", correct: false },
    ],
  },
  {
    question:
      "The rediscovery of Crocothemis erythraea dragonfly in India was confirmed in:",
    answers: [
      { text: "Eastern Himalayas", correct: false },
      { text: "Southern Western Ghats", correct: true },
      { text: "Sundarbans", correct: false },
      { text: "Nilgiris", correct: false },
    ],
  },
  {
    question: "Dragonflies are considered bioindicators because:",
    answers: [
      { text: "They feed on crops", correct: false },
      {
        text: "Their larvae require clean freshwater ecosystems",
        correct: true,
      },
      { text: "They survive only in deserts", correct: false },
      { text: "They live only in saltwater ecosystems", correct: false },
    ],
  },
  {
    question: "Which country initiated the Joint Crediting Mechanism (JCM)?",
    answers: [
      { text: "India", correct: false },
      { text: "Japan", correct: true },
      { text: "Germany", correct: false },
      { text: "United States", correct: false },
    ],
  },
  {
    question:
      "Which article of the Paris Agreement allows bilateral carbon trading between countries?",
    answers: [
      { text: "Article 4", correct: false },
      { text: "Article 6.2", correct: true },
      { text: "Article 7", correct: false },
      { text: "Article 12", correct: false },
    ],
  },
  {
    question: "India’s current crude oil import dependence is approximately:",
    answers: [
      { text: "45%", correct: false },
      { text: "65%", correct: false },
      { text: "85%", correct: true },
      { text: "100%", correct: false },
    ],
  },
  {
    question: "The SATAT scheme of the Government of India is related to:",
    answers: [
      { text: "Solar rooftop expansion", correct: false },
      { text: "Compressed Biogas production", correct: true },
      { text: "Wind energy development", correct: false },
      { text: "Nuclear energy generation", correct: false },
    ],
  },
  {
    question: "Which of the following are reports published by the IMF?",
    answers: [
      { text: "World Economic Outlook (WEO)", correct: true },
      { text: "Global Financial Stability Report (GFSR)", correct: true },
      { text: "Fiscal Monitor", correct: true },
      { text: "Human Development Report", correct: false },
    ],
  },
  {
    question:
      "Which organisms are considered bioindicators of environmental quality?",
    answers: [
      { text: "Lichens (air quality)", correct: true },
      { text: "Frogs & Amphibians (water quality)", correct: true },
      { text: "Earthworms (soil fertility)", correct: true },
      { text: "Cows (greenhouse gases)", correct: false },
    ],
  },
  {
    question:
      "Which of the following are India’s updated NDC commitments under the Paris Agreement?",
    answers: [
      { text: "Reduce emission intensity by 45% by 2030", correct: true },
      { text: "50% of power capacity from non-fossil sources", correct: true },
      {
        text: "Create carbon sink of 2.5–3 billion tonnes CO₂ eq.",
        correct: true,
      },
      { text: "100% renewable energy by 2030", correct: false },
    ],
  },
  {
    question:
      "Which are the five pillars of India’s Energy Sovereignty strategy?",
    answers: [
      { text: "Coal gasification", correct: true },
      { text: "Biofuels", correct: true },
      { text: "Nuclear energy", correct: true },
      { text: "Green Hydrogen", correct: true },
      { text: "Pumped Hydro storage", correct: true },
    ],
  },
  {
    question:
      "Which of the following are reasons for falling Net FDI in India?",
    answers: [
      { text: "Rising outward FDI by Indian companies", correct: true },
      { text: "Liberalised ODI rules", correct: true },
      { text: "Repatriation by foreign firms", correct: true },
      { text: "Excessive government borrowing", correct: false },
    ],
  },
  {
    question:
      "With reference to Foreign Direct Investment (FDI) in India, consider the following statements:\n\n1. Investment under the Automatic Route requires prior government approval.\n2. Agriculture, coal mining, and airports are sectors where 100% FDI is allowed under the Automatic Route.\n3. Net FDI equals Gross FDI minus outward investment and repatriation.\n\nWhich of the statements given above is/are correct?",
    answers: [
      { text: "2 and 3 only", correct: true },
      { text: "1 and 2 only", correct: false },
      { text: "1, 2 and 3", correct: false },
      { text: "3 only", correct: false },
    ],
  },
  {
    question:
      "With reference to the International Monetary Fund (IMF), consider the following statements:\n\n1. India is a founding member of the IMF.\n2. IMF publishes the World Economic Outlook and Fiscal Monitor reports.\n3. The IMF was established in 1944 at Bretton Woods and began operations in 1947.\n4. The headquarters of IMF is located in New York.\n\nWhich of the statements given above is/are correct?",
    answers: [
      { text: "1, 2 and 3 only", correct: true },
      { text: "1 and 4 only", correct: false },
      { text: "2 and 4 only", correct: false },
      { text: "1, 2, 3 and 4", correct: false },
    ],
  },
  {
    question:
      "With reference to the rediscovery of Crocothemis erythraea in India, consider the following statements:\n\n1. It belongs to the order Odonata.\n2. It was earlier misidentified as Crocothemis servilia.\n3. It colonised southern India during the Pleistocene Ice Age.\n4. It is found only in desert regions of Rajasthan.\n\nWhich of the statements given above is/are correct?",
    answers: [
      { text: "1, 2 and 3 only", correct: true },
      { text: "2 and 4 only", correct: false },
      { text: "1 and 4 only", correct: false },
      { text: "1, 2, 3 and 4", correct: false },
    ],
  },
  {
    question:
      "With reference to the India–Japan Joint Crediting Mechanism (JCM), consider the following statements:\n\n1. It allows Japan to claim carbon credits for emission reductions achieved in India.\n2. It is linked to Article 6.2 of the Paris Agreement on bilateral carbon trading.\n3. The National Designated Authority (NDA) is the nodal agency in India for approving projects.\n4. JCM projects will not contribute to India’s NDC targets.\n\nWhich of the statements given above is/are correct?",
    answers: [
      { text: "1, 2 and 3 only", correct: true },
      { text: "2 and 4 only", correct: false },
      { text: "1, 3 and 4 only", correct: false },
      { text: "1, 2, 3 and 4", correct: false },
    ],
  },
  {
    question:
      "With reference to India’s Energy Sovereignty strategy, consider the following statements:\n\n1. India imports around 85% of its crude oil and over 50% of its natural gas.\n2. Green Hydrogen target is 5 million metric tonnes per year by 2030.\n3. The SATAT scheme relates to nuclear energy expansion.\n4. Pumped Hydro storage is considered a backbone for renewable-heavy power grids.\n\nWhich of the statements given above is/are correct?",
    answers: [
      { text: "1, 2 and 4 only", correct: true },
      { text: "2 and 3 only", correct: false },
      { text: "1 and 3 only", correct: false },
      { text: "1, 2, 3 and 4", correct: false },
    ],
  },
];
/////////////////////  //// 31 August 2025 /////////////////////////
const Paper30 = [
  {
    question:
      "The Burmese python, recently in news, is listed as which category in the IUCN Red List?",
    answers: [
      { text: "Endangered", correct: false },
      { text: "Vulnerable", correct: true },
      { text: "Critically Endangered", correct: false },
      { text: "Least Concern", correct: false },
    ],
  },
  {
    question:
      "Which US state is facing ecological issues due to invasive Burmese pythons?",
    answers: [
      { text: "Texas", correct: false },
      { text: "California", correct: false },
      { text: "Florida", correct: true },
      { text: "Arizona", correct: false },
    ],
  },
  {
    question: "Glanders disease primarily affects which group of animals?",
    answers: [
      { text: "Cattle", correct: false },
      { text: "Equines (horses, mules, donkeys)", correct: true },
      { text: "Sheep and goats", correct: false },
      { text: "Poultry", correct: false },
    ],
  },
  {
    question: "Which bacterium causes Glanders?",
    answers: [
      { text: "Bacillus anthracis", correct: false },
      { text: "Burkholderia mallei", correct: true },
      { text: "Clostridium tetani", correct: false },
      { text: "Mycobacterium bovis", correct: false },
    ],
  },
  {
    question:
      "Exercise Bright Star is hosted by which country along with the USA?",
    answers: [
      { text: "Qatar", correct: false },
      { text: "Egypt", correct: true },
      { text: "Saudi Arabia", correct: false },
      { text: "Oman", correct: false },
    ],
  },
  {
    question: "The NARI 2025 Index on Women’s Safety was released by:",
    answers: [
      { text: "Ministry of Women & Child Development", correct: false },
      { text: "National Commission for Women (NCW)", correct: true },
      { text: "NITI Aayog", correct: false },
      { text: "Ministry of Home Affairs", correct: false },
    ],
  },
  {
    question:
      "Which Indian city ranked among the safest in the NARI 2025 Index?",
    answers: [
      { text: "Delhi", correct: false },
      { text: "Mumbai", correct: true },
      { text: "Patna", correct: false },
      { text: "Jaipur", correct: false },
    ],
  },
  {
    question: "The Matsya Shakti Project is implemented by which institution?",
    answers: [
      {
        text: "ICAR–Central Marine Fisheries Research Institute (CMFRI)",
        correct: true,
      },
      { text: "National Fisheries Development Board", correct: false },
      { text: "Ministry of Jal Shakti", correct: false },
      { text: "NITI Aayog", correct: false },
    ],
  },
  {
    question:
      "The Export Promotion Mission (2025–31) is being led by which department?",
    answers: [
      { text: "Department of Economic Affairs", correct: false },
      { text: "Department of Commerce", correct: true },
      { text: "Department of Expenditure", correct: false },
      { text: "Department of MSME", correct: false },
    ],
  },
  {
    question:
      "Which of the following is a sub-scheme under the Export Promotion Mission?",
    answers: [
      { text: "Niryat Protsahan", correct: true },
      { text: "Krishi Udaan", correct: false },
      { text: "PM Krishi Sampada", correct: false },
      { text: "RAMP Scheme", correct: false },
    ],
  },
  {
    question: "Which of the following are natural habitats of Burmese python?",
    answers: [
      { text: "Grasslands", correct: true },
      { text: "Rainforests", correct: true },
      { text: "Mangrove forests", correct: true },
      { text: "Arctic tundra", correct: false },
    ],
  },
  {
    question: "Consider the following about Glanders disease:",
    answers: [
      { text: "It is zoonotic (can affect humans).", correct: true },
      { text: "It is caused by a virus.", correct: false },
      { text: "It is notifiable under Indian law.", correct: true },
      {
        text: "Treatment of infected animals is the preferred approach.",
        correct: false,
      },
    ],
  },
  {
    question: "Which of the following are features of Exercise Bright Star?",
    answers: [
      { text: "Live firing exercises", correct: true },
      { text: "Command Post Exercises", correct: true },
      { text: "Expert exchanges on cyber & space", correct: true },
      { text: "Only bilateral format with India and Egypt", correct: false },
    ],
  },
  {
    question:
      "Which of the following cities were ranked safest under NARI 2025?",
    answers: [
      { text: "Kohima", correct: true },
      { text: "Visakhapatnam", correct: true },
      { text: "Patna", correct: false },
      { text: "Bhubaneswar", correct: true },
    ],
  },
  {
    question: "Which of the following are components of the PM VIKAS scheme?",
    answers: [
      { text: "Seekho aur Kamao", correct: true },
      { text: "USTTAD", correct: true },
      { text: "Nai Roshni", correct: true },
      { text: "Make in India", correct: false },
    ],
  },
  {
    question:
      "With reference to the Burmese python, consider the following statements:\n\n1. It is a non-venomous snake that kills its prey by constriction.\n2. It is native to South and Southeast Asia but invasive in Florida, USA.\n3. It is listed as Endangered in the IUCN Red List.\n4. It can remain underwater for up to 30 minutes.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1, 2 and 4 only", correct: true },
      { text: "1 and 3 only", correct: false },
      { text: "2 and 3 only", correct: false },
      { text: "1, 2, 3 and 4", correct: false },
    ],
  },
  {
    question:
      "With reference to Glanders disease, consider the following statements:\n\n1. It is caused by Burkholderia mallei bacterium.\n2. It is a WOAH-listed disease and must be reported internationally.\n3. India has declared it notifiable under the PCICDA Act, 2009.\n4. Vaccination is the most effective eradication strategy.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1, 2 and 3 only", correct: true },
      { text: "1 and 4 only", correct: false },
      { text: "2, 3 and 4 only", correct: false },
      { text: "1, 2, 3 and 4", correct: false },
    ],
  },
  {
    question:
      "With reference to Exercise Bright Star, consider the following statements:\n\n1. It is a biennial multilateral military exercise hosted by Egypt and the USA.\n2. India participated in it for the first time in 2023.\n3. The exercise focuses only on naval drills.\n4. It strengthens India’s defence diplomacy in the Middle East.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1, 2 and 4 only", correct: true },
      { text: "1 and 3 only", correct: false },
      { text: "2, 3 and 4 only", correct: false },
      { text: "1, 2, 3 and 4", correct: false },
    ],
  },
  {
    question:
      "With reference to the NARI 2025 Index, consider the following statements:\n\n1. It was released by the National Commission for Women (NCW).\n2. It surveyed women in 31 Indian cities.\n3. Delhi ranked among the safest cities in the Index.\n4. The national safety score was 65%.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1, 2 and 4 only", correct: true },
      { text: "1 and 3 only", correct: false },
      { text: "2, 3 and 4 only", correct: false },
      { text: "1, 2, 3 and 4", correct: false },
    ],
  },
  {
    question:
      "With reference to the Export Promotion Mission (EPM), consider the following statements:\n\n1. It was announced in the Union Budget 2025–26.\n2. It will be implemented for 10 years.\n3. It has two sub-schemes: Niryat Protsahan and Niryat Disha.\n4. It is jointly driven by the Ministries of Commerce, MSME, and Finance.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1, 3 and 4 only", correct: true },
      { text: "1 and 2 only", correct: false },
      { text: "2 and 3 only", correct: false },
      { text: "1, 2, 3 and 4", correct: false },
    ],
  },
];
//////////////////////////// 1 September 2025 /////////////////////////////
const Paper31 = [
  {
    question:
      "Indian Rosewood (Dalbergia latifolia) is commonly referred to as:",
    answers: [
      { text: "Ivory of the Forests", correct: true },
      { text: "Green Gold", correct: false },
      { text: "Timber of Kings", correct: false },
      { text: "Living Fossil", correct: false },
    ],
  },
  {
    question:
      "Which Indian state has the lowest density of Rosewood according to the 2019–2025 IWST study?",
    answers: [
      { text: "Kerala", correct: false },
      { text: "Karnataka", correct: false },
      { text: "Tamil Nadu", correct: true },
      { text: "Andhra Pradesh", correct: false },
    ],
  },
  {
    question:
      "Dalbergia latifolia (Malabar Rosewood) is listed as which category in the IUCN Red List?",
    answers: [
      { text: "Least Concern", correct: false },
      { text: "Endangered", correct: false },
      { text: "Critically Endangered", correct: false },
      { text: "Vulnerable", correct: true },
    ],
  },
  {
    question: "Rosewood trade is regulated under which CITES Appendix?",
    answers: [
      { text: "Appendix I", correct: false },
      { text: "Appendix II", correct: true },
      { text: "Appendix III", correct: false },
      { text: "Not listed", correct: false },
    ],
  },
  {
    question:
      "Red Sanders (Pterocarpus santalinus) is primarily found in which region?",
    answers: [
      { text: "Himalayan foothills", correct: false },
      { text: "Rayalaseema region of Andhra Pradesh", correct: true },
      { text: "Western Ghats of Kerala", correct: false },
      { text: "Thar Desert of Rajasthan", correct: false },
    ],
  },
  {
    question: "Which NGO from India won the Ramon Magsaysay Award 2025?",
    answers: [
      { text: "Teach for India", correct: false },
      { text: "Pratham", correct: false },
      { text: "Educate Girls", correct: true },
      { text: "Akshaya Patra", correct: false },
    ],
  },
  {
    question: "The Ramon Magsaysay Award is often referred to as:",
    answers: [
      { text: "Asia’s Nobel Prize", correct: true },
      { text: "Asia’s Booker Prize", correct: false },
      { text: "Asia’s Oscar", correct: false },
      { text: "Asia’s Pulitzer", correct: false },
    ],
  },
  {
    question: "Which year did the CITES treaty come into force?",
    answers: [
      { text: "1963", correct: false },
      { text: "1971", correct: false },
      { text: "1975", correct: true },
      { text: "1982", correct: false },
    ],
  },
  {
    question:
      "Which award was given to ISRO in 2014 for its peaceful use of space technology?",
    answers: [
      {
        text: "Indira Gandhi Prize for Peace, Disarmament and Development",
        correct: true,
      },
      { text: "Gandhi Peace Prize", correct: false },
      { text: "Ramon Magsaysay Award", correct: false },
      {
        text: "Jawaharlal Nehru Prize for International Understanding",
        correct: false,
      },
    ],
  },
  {
    question: "Killer Whales (Orcas) belong to which family?",
    answers: [
      { text: "Balaenidae", correct: false },
      { text: "Delphinidae", correct: true },
      { text: "Physeteridae", correct: false },
      { text: "Eschrichtiidae", correct: false },
    ],
  },
  {
    question: "Which of the following are nitrogen-fixing plants?",
    answers: [
      { text: "Alfalfa", correct: true },
      { text: "Chickpea", correct: true },
      { text: "Clover", correct: true },
      { text: "Spinach", correct: false },
    ],
  },
  {
    question:
      "Which of the following are Indian recipients of the Ramon Magsaysay Award?",
    answers: [
      { text: "Vinoba Bhave", correct: true },
      { text: "Aruna Roy", correct: true },
      { text: "Arvind Kejriwal", correct: true },
      { text: "Abdul Kalam", correct: false },
    ],
  },
  {
    question: "Which of the following are ecological roles of Rosewood trees?",
    answers: [
      { text: "Carbon sequestration", correct: true },
      { text: "Soil nitrogen fixation", correct: true },
      { text: "Support as keystone species", correct: true },
      { text: "Glacial formation", correct: false },
    ],
  },
  {
    question: "Major threats to Red Sanders include:",
    answers: [
      { text: "Illegal smuggling", correct: true },
      { text: "Overexploitation", correct: true },
      { text: "Habitat loss", correct: true },
      { text: "Glacial melting", correct: false },
    ],
  },
  {
    question:
      "Which of the following are features of the Pradhan Mantri Viksit Bharat Rozgar Yojana (PMVBRY)?",
    answers: [
      { text: "Direct Benefit Transfer to workers", correct: true },
      { text: "Incentives for first-time employees", correct: true },
      { text: "Focus on manufacturing sector", correct: true },
      { text: "Implemented in 1995", correct: false },
    ],
  },
  {
    question:
      "With reference to Rosewood (Dalbergia species), consider the following statements:\n\n1. Dalbergia latifolia is listed as Vulnerable on the IUCN Red List.\n2. Rosewood is included in CITES Appendix II.\n3. Dalbergia sissoo is classified as Endangered.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1 and 2 only", correct: true },
      { text: "2 and 3 only", correct: false },
      { text: "1 and 3 only", correct: false },
      { text: "1, 2 and 3", correct: false },
    ],
  },
  {
    question:
      "With reference to Red Sanders, consider the following statements:\n\n1. It is endemic to South India.\n2. It is found in tropical rainforests.\n3. It is listed in CITES Appendix II.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1 and 2 only", correct: false },
      { text: "1 and 3 only", correct: true },
      { text: "2 and 3 only", correct: false },
      { text: "1, 2 and 3", correct: false },
    ],
  },
  {
    question:
      "With reference to Killer Whales (Orcas), consider the following statements:\n\n1. Orcas belong to the dolphin family.\n2. They live in matrilineal pods.\n3. They are listed as Endangered on the IUCN Red List.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1 and 2 only", correct: true },
      { text: "2 and 3 only", correct: false },
      { text: "1 and 3 only", correct: false },
      { text: "1, 2 and 3", correct: false },
    ],
  },
  {
    question:
      "With reference to the Ramon Magsaysay Award, consider the following statements:\n\n1. It was instituted in 1958 in memory of a Philippine President.\n2. It is awarded annually in Manila, Philippines.\n3. Only individuals, not organisations, are eligible.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1 and 2 only", correct: true },
      { text: "2 and 3 only", correct: false },
      { text: "1 and 3 only", correct: false },
      { text: "1, 2 and 3", correct: false },
    ],
  },
  {
    question:
      "With reference to India’s federal design, consider the following statements:\n\n1. Article 1 of the Constitution describes India as a ‘Union of States’.\n2. Parliament can convert a State into a Union Territory permanently under Article 3.\n3. Federalism is a part of the Basic Structure Doctrine.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1 and 2 only", correct: false },
      { text: "1 and 3 only", correct: true },
      { text: "2 and 3 only", correct: false },
      { text: "1, 2 and 3", correct: false },
    ],
  },
];
///////////////////////////// 2 September 2025 /////////////////////////////
const Paper32 = [
  {
    question: "Which country recently joined SCO as a full member in 2025?",
    answers: [
      { text: "Iran", correct: false },
      { text: "Belarus", correct: true },
      { text: "Laos", correct: false },
      { text: "Afghanistan", correct: false },
    ],
  },
  {
    question:
      "The Regional Anti-Terrorist Structure (RATS) of the SCO is headquartered in:",
    answers: [
      { text: "Beijing", correct: false },
      { text: "Tashkent", correct: true },
      { text: "Moscow", correct: false },
      { text: "New Delhi", correct: false },
    ],
  },
  {
    question:
      "India opposes the Belt and Road Initiative (BRI) primarily because:",
    answers: [
      { text: "It excludes India", correct: false },
      { text: "It promotes U.S. dominance", correct: false },
      { text: "It passes through Pakistan-occupied Kashmir", correct: true },
      { text: "It violates WTO rules", correct: false },
    ],
  },
  {
    question: "E20 fuel refers to:",
    answers: [
      { text: "20% ethanol mixed with diesel", correct: false },
      { text: "20% ethanol mixed with petrol", correct: true },
      { text: "20% methanol blended fuel", correct: false },
      { text: "20% hydrogen fuel mix", correct: false },
    ],
  },
  {
    question: "The Adi Vaani app was launched by:",
    answers: [
      { text: "Ministry of Home Affairs", correct: false },
      { text: "Ministry of Tribal Affairs", correct: true },
      { text: "NITI Aayog", correct: false },
      { text: "Ministry of Culture", correct: false },
    ],
  },
  {
    question: "Which tribal language is written in the Ol Chiki script?",
    answers: [
      { text: "Santali", correct: true },
      { text: "Gondi", correct: false },
      { text: "Bhili", correct: false },
      { text: "Kui", correct: false },
    ],
  },
  {
    question: "The 2014 Pramati case judgment dealt with:",
    answers: [
      { text: "Right to Free Speech", correct: false },
      { text: "Applicability of RTE to minority schools", correct: true },
      { text: "Reservation in promotions", correct: false },
      { text: "Right to Internet Access", correct: false },
    ],
  },
  {
    question:
      "Which constitutional article gives minorities the right to establish and administer educational institutions?",
    answers: [
      { text: "Article 21A", correct: false },
      { text: "Article 29", correct: false },
      { text: "Article 30(1)", correct: true },
      { text: "Article 350B", correct: false },
    ],
  },
  {
    question: "CEREBO, a brain diagnostic tool, works on which technology?",
    answers: [
      { text: "X-ray Imaging", correct: false },
      { text: "Near-Infrared Spectroscopy", correct: true },
      { text: "Ultrasound", correct: false },
      { text: "Gamma Rays", correct: false },
    ],
  },
  {
    question: "Which organisation collaborated in the development of CEREBO?",
    answers: [
      { text: "DRDO", correct: false },
      { text: "ICMR", correct: true },
      { text: "BARC", correct: false },
      { text: "ISRO", correct: false },
    ],
  },
  {
    question: "Which of the following are full members of the SCO in 2025?",
    answers: [
      { text: "India", correct: true },
      { text: "Russia", correct: true },
      { text: "Belarus", correct: true },
      { text: "Laos", correct: false },
    ],
  },
  {
    question:
      "Which of the following are advantages of Ethanol Blending in petrol?",
    answers: [
      { text: "Reduces crude oil imports", correct: true },
      { text: "Lowers carbon emissions", correct: true },
      { text: "Increases mileage of old vehicles", correct: false },
      { text: "Supports sugarcane farmers’ income", correct: true },
    ],
  },
  {
    question: "Which languages were included in Phase-1 of Adi Vaani App?",
    answers: [
      { text: "Gondi", correct: true },
      { text: "Mundari", correct: true },
      { text: "Santali", correct: true },
      { text: "Konkani", correct: false },
    ],
  },
  {
    question:
      "Which of the following are recognised minority communities under the National Commission for Minorities Act, 1992?",
    answers: [
      { text: "Muslims", correct: true },
      { text: "Jains", correct: true },
      { text: "Sikhs", correct: true },
      { text: "Anglo-Indians", correct: false },
    ],
  },
  {
    question: "Which institutions collaborated in developing CEREBO?",
    answers: [
      { text: "AIIMS Bhopal", correct: true },
      { text: "NIMHANS Bengaluru", correct: true },
      { text: "ICMR", correct: true },
      { text: "IIT Bombay", correct: false },
    ],
  },
  {
    question:
      "With reference to the Shanghai Cooperation Organisation (SCO), consider the following statements:\n\n1. It was founded in 2001 out of the Shanghai Five grouping.\n2. Its Regional Anti-Terrorist Structure (RATS) is based in Moscow.\n3. India opposes the Belt and Road Initiative due to the China–Pakistan Economic Corridor.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1 and 3 only", correct: true },
      { text: "1 and 2 only", correct: false },
      { text: "2 and 3 only", correct: false },
      { text: "1, 2 and 3", correct: false },
    ],
  },
  {
    question:
      "With reference to E20 petrol, consider the following statements:\n\n1. It refers to 20% ethanol blended with petrol.\n2. It reduces India’s crude import dependence.\n3. It increases fuel efficiency in all vehicles.\n4. Supreme Court recently refused to interfere with its rollout.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1, 2 and 4 only", correct: true },
      { text: "1 and 2 only", correct: false },
      { text: "2, 3 and 4 only", correct: false },
      { text: "1, 2, 3 and 4", correct: false },
    ],
  },
  {
    question:
      "With reference to Adi Vaani App, consider the following statements:\n\n1. It was launched by the Ministry of Tribal Affairs.\n2. It aims to translate tribal languages into Hindi and English.\n3. It supports the objectives of NEP 2020 and UNESCO’s Decade of Indigenous Languages.\n4. It was initially launched with only two languages.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1, 2 and 3 only", correct: true },
      { text: "1 and 4 only", correct: false },
      { text: "2 and 4 only", correct: false },
      { text: "1, 2, 3 and 4", correct: false },
    ],
  },
  {
    question:
      "With reference to Minority Educational Institutions in India, consider the following statements:\n\n1. Article 30(1) grants minorities the right to establish and administer educational institutions.\n2. The Pramati case (2014) exempted minority schools from RTE obligations.\n3. Minority status is determined at the national level only.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1 and 2 only", correct: true },
      { text: "2 and 3 only", correct: false },
      { text: "1 and 3 only", correct: false },
      { text: "1, 2 and 3", correct: false },
    ],
  },
  {
    question:
      "With reference to CEREBO, consider the following statements:\n\n1. It is a portable diagnostic device for Traumatic Brain Injuries (TBIs).\n2. It uses Near-Infrared Spectroscopy and Machine Learning.\n3. It can detect intracranial bleeding and edema within a minute.\n4. It requires advanced infrastructure like MRI to function.\n\nWhich of the above statements is/are correct?",
    answers: [
      { text: "1, 2 and 3 only", correct: true },
      { text: "1 and 2 only", correct: false },
      { text: "2, 3 and 4 only", correct: false },
      { text: "1, 2, 3 and 4", correct: false },
    ],
  },
];

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const progressBar = document.getElementsByClassName("progress-bar")[0];
const timerElement = document.getElementById("timer");

let currentQuestionIndex = 0;
let score = 0;
let Questions = [];
let n = 0;
let incrementValue = 0;
let count = 0;
let accuracy = 0;
let imgUrl;
var img = document.createElement("img");

let timer;
let timeLeft = 300; // 5 minutes in seconds

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("ee1").addEventListener("change", function () {
    selectedValue = this.value;

    if (selectedValue === "Paper1") {
      Questions = Paper1;
    } else if (selectedValue === "Paper2") {
      Questions = Paper2;
    } else if (selectedValue === "Paper3") {
      Questions = Paper3;
    } else if (selectedValue === "Paper4") {
      Questions = Paper4;
    } else if (selectedValue === "Paper5") {
      Questions = Paper5;
    } else if (selectedValue === "Paper6") {
      Questions = Paper6;
    } else if (selectedValue === "Paper7") {
      Questions = Paper7;
    } else if (selectedValue === "Paper8") {
      Questions = Paper8;
    } else if (selectedValue === "Paper9") {
      Questions = Paper9;
    } else if (selectedValue === "Paper10") {
      Questions = Paper10;
    } else if (selectedValue === "Paper11") {
      Questions = Paper11;
    } else if (selectedValue === "Paper12") {
      Questions = Paper12;
    } else if (selectedValue === "Paper13") {
      Questions = Paper13;
    } else if (selectedValue === "Paper14") {
      Questions = Paper14;
    } else if (selectedValue === "Paper15") {
      Questions = Paper15;
    } else if (selectedValue === "Paper16") {
      Questions = Paper16;
    } else if (selectedValue === "Paper17") {
      Questions = Paper17;
    } else if (selectedValue === "Paper18") {
      Questions = Paper18;
    } else if (selectedValue === "Paper19") {
      Questions = Paper19;
    } else if (selectedValue === "Paper20") {
      Questions = Paper20;
    } else if (selectedValue === "Paper21") {
      Questions = Paper21;
    } else if (selectedValue === "Paper22") {
      Questions = Paper22;
    } else if (selectedValue === "Paper23") {
      Questions = Paper23;
    } else if (selectedValue === "Paper24") {
      Questions = Paper24;
    } else if (selectedValue === "Paper25") {
      Questions = Paper25;
    } else if (selectedValue === "Paper26") {
      Questions = Paper26;
    } else if (selectedValue === "Paper27") {
      Questions = Paper27;
    } else if (selectedValue === "Paper28") {
      Questions = Paper28;
    } else if (selectedValue === "Paper29") {
      Questions = Paper29;
    } else if (selectedValue === "Paper30") {
      Questions = Paper30;
    } else if (selectedValue === "Paper31") {
      Questions = Paper31;
    } else if (selectedValue === "Paper32") {
      Questions = Paper32;
    } else if (selectedValue === "VLSI") {
      Questions = VLSI;
    } else if (selectedValue === "Power_Electronics") {
      Questions = Power_Electronics;
    } else if (selectedValue === "Control_System") {
      Questions = Control_System;
    } else if (selectedValue === "Circuit_Thoery") {
      Questions = Circuit_Thoery;
    } else if (selectedValue === "Angular") {
      Questions = Angular;
    } else if (selectedValue === "MaterialUI") {
      Questions = MaterialUI;
    } else if (selectedValue === "PHP") {
      Questions = PHP;
    } else if (selectedValue === "Analog_Electronics") {
      Questions = Analog_Electronics;
    } else if (selectedValue === "Embedded_System") {
      Questions = Embedded_Systems;
    } else if (selectedValue === "Communication_System") {
      Questions = Communication_Systems;
    } else if (selectedValue === "Microwave_Engineering") {
      Questions = Microwave_Engineering;
    } else if (selectedValue === "Wireless_Communications") {
      Questions = Wireless_Communications;
    } else if (selectedValue === "Optical_Communications") {
      Questions = Optical_Communication;
    } else if (selectedValue === "Mobile_Communications") {
      Questions = Mobile_Communication;
    } else if (selectedValue === "Satellite_Communications") {
      Questions = Satellite_Communication;
    } else if (selectedValue === "Radar_and_Nevigation") {
      Questions = Radar_and_Navigation;
    } else if (selectedValue === "Fluid_Mechanics") {
      Questions = Fluid_Mechanics;
    } else if (selectedValue === "Surveying") {
      Questions = Surveying;
    } else if (selectedValue === "Building_Material") {
      Questions = Building_Materials;
    } else if (selectedValue === "Structural_Analysis1") {
      Questions = Structural_Analysis1;
    } else if (selectedValue === "Concrete_Technology") {
      Questions = Concrete_Technology;
    } else if (selectedValue === "Soil_Mechanics") {
      Questions = Soil_Mechanics;
    } else if (selectedValue === "Irrigation_Engineering") {
      Questions = Irrigation_Engineering;
    }

    if (Questions.length > 0) {
      n = Questions.length;
      incrementValue = 100 / n;
      console.log(`Number of questions for ${selectedValue}: ${n}`);
      progressBar.style.setProperty("--width", 0);
      startQuiz();
      resetTimer();
    } else {
      console.log(`No questions found for ${selectedValue}`);
    }
  });
});

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  count = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
  resetTimer();
}

function showQuestion() {
  resetState();
  let currentQuestion = Questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
    count++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  accuracy = (count / n) * 100;
  if (accuracy <= 30) {
    imgUrl = "./public/SAD.png";
  }
  if (accuracy > 30 && accuracy <= 70) {
    imgUrl = "./public/moderate.png";
  }
  if (accuracy > 70) {
    imgUrl = "./public/happy.png";
  }
  img.src = imgUrl;
  img.alt = "Description of the image";
  img.style.width = "120px";
  img.style.height = "auto";
  img.style.alignItems = "center";

  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `Your accuracy: ${accuracy}%<br>Total Score: ${score} out of ${n}!`;
  questionElement.appendChild(img);
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
  clearInterval(timer);
}

function handleNextButton() {
  currentQuestionIndex++;

  const computedStyle = getComputedStyle(progressBar);
  const width = parseFloat(computedStyle.getPropertyValue("--width")) || 0;
  progressBar.style.setProperty("--width", width + incrementValue);

  if (currentQuestionIndex < n) {
    showQuestion();
    //resetTimer();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < n) {
    handleNextButton();
  } else {
    startQuiz();
    progressBar.style.setProperty("--width", 0);
  }
  //resetTimer();
});
function resetTimer() {
  clearInterval(timer);
  timeLeft = 0;
  updateTimerDisplay();
  startTimer();
  document.getElementById("toggle-icon").className = "fas fa-pause";
}
let timerInterval = null;
let isRunning = false;
timeLeft = 0;
timerElement = document.getElementById("timer");

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerElement.innerHTML = `Time: ${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function startTimer() {
  if (timerInterval) return;
  timerInterval = setInterval(() => {
    timeLeft++;
    updateTimerDisplay();
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function toggleTimer() {
  if (isRunning) {
    pauseTimer();
    document.getElementById("toggle-icon").className = "fas fa-play";
  } else {
    startTimer();
    document.getElementById("toggle-icon").className = "fas fa-pause";
  }
  isRunning = !isRunning;
}

updateTimerDisplay(); // initialize display if needed

document.getElementById("signUpBtn").onclick = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const userCred = await auth.createUserWithEmailAndPassword(email, password);
  storeUser(userCred.user.uid);
};

document.getElementById("signInBtn").onclick = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  await auth.signInWithEmailAndPassword(email, password);
};

auth.onAuthStateChanged(async (user) => {
  if (user) {
    const paid = await hasUserPaid(user.uid);
    if (paid) {
      showFullContent();
    } else {
      document.getElementById("payment-section").style.display = "block";
    }
  }
});

document.getElementById("payBtn").onclick = () => {
  const user = auth.currentUser;
  if (user) makePayment(user);
};

function showFullContent() {
  document.getElementById("auth-section").style.display = "none";
  document.getElementById("payment-section").style.display = "none";
  document.getElementById("content-section").style.display = "block";
}
