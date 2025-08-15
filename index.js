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

///////////////////////////////  Serverless Computnig ///////////////////////////////
const Serverless_Computing = [
  {
    question: "What is AWS Lambda?",
    answers: [
      {
        text: "A server-based application management tool",
        correct: false,
      },
      {
        text: "An event-driven serverless computing platform by Amazon",
        correct: true,
      },
      {
        text: "A database engine used in AWS",
        correct: false,
      },
      {
        text: "A virtual server for background tasks",
        correct: false,
      },
    ],
  },
  {
    question: "Which of the following is true about AWS Lambda?",
    answers: [
      {
        text: "You need to manage infrastructure manually",
        correct: false,
      },
      {
        text: "You pay for the server uptime regardless of usage",
        correct: false,
      },
      {
        text: "It runs code in response to AWS service events",
        correct: true,
      },
      {
        text: "It can only be triggered by manual inputs",
        correct: false,
      },
    ],
  },
  {
    question: "Which language is NOT supported by AWS Lambda?",
    answers: [
      { text: "Java", correct: false },
      { text: "Go", correct: false },
      { text: "Swift", correct: true },
      { text: "C#", correct: false },
    ],
  },
  {
    question: "Which AWS service can trigger an AWS Lambda function?",
    answers: [
      { text: "Amazon S3", correct: true },
      { text: "Amazon Kindle", correct: false },
      { text: "Amazon Prime", correct: false },
      { text: "Amazon Fire", correct: false },
    ],
  },
  {
    question: "What is a Lambda Layer in AWS Lambda?",
    answers: [
      {
        text: "A security layer for API protection",
        correct: false,
      },
      {
        text: "A feature to handle HTTP requests",
        correct: false,
      },
      {
        text: "A distribution mechanism for libraries and dependencies",
        correct: true,
      },
      {
        text: "A separate virtual server for logging",
        correct: false,
      },
    ],
  },
  {
    question: "Which AWS service allows custom logging in Lambda?",
    answers: [
      { text: "Log stream", correct: true },
      { text: "Log writer", correct: false },
      { text: "StreamLog", correct: false },
      { text: "AWS Logger", correct: false },
    ],
  },
  {
    question: "Which cloud provider offers Cloud Functions?",
    answers: [
      { text: "Amazon", correct: false },
      { text: "Google Cloud", correct: true },
      { text: "Microsoft", correct: false },
      { text: "Oracle", correct: false },
    ],
  },
  {
    question:
      "What is the primary trigger mechanism for Google Cloud Functions?",
    answers: [
      { text: "Command Line Interface", correct: false },
      { text: "Google Play Events", correct: false },
      { text: "Cloud Infrastructure Events", correct: true },
      { text: "Google Maps", correct: false },
    ],
  },
  {
    question:
      "Which of these is NOT an event provider for Google Cloud Functions?",
    answers: [
      { text: "Cloud Pub/Sub", correct: false },
      { text: "Firebase", correct: false },
      { text: "Google Compute Engine", correct: false },
      { text: "Amazon S3", correct: true },
    ],
  },
  {
    question: "What best describes a 'Trigger' in Google Cloud Functions?",
    answers: [
      { text: "The programming language used in the function", correct: false },
      {
        text: "An event and its associated data causing function execution",
        correct: true,
      },
      {
        text: "The error message returned from a failed function",
        correct: false,
      },
      { text: "A signal to start a Google Virtual Machine", correct: false },
    ],
  },
  {
    question: "Which model does Google Cloud Functions follow?",
    answers: [
      { text: "Stateful execution", correct: false },
      { text: "Persistent instance hosting", correct: false },
      { text: "Stateless execution", correct: true },
      { text: "Synchronous only functions", correct: false },
    ],
  },
  {
    question:
      "Which of the following is a key characteristic of Google Cloud Functions?",
    answers: [
      { text: "Supports running containers directly", correct: false },
      {
        text: "Executes code in a fully managed environment",
        correct: true,
      },
      { text: "Requires manual server provisioning", correct: false },
      { text: "Can run on on-premises infrastructure", correct: false },
    ],
  },
  {
    question:
      "Azure Functions use which configuration file to manage settings?",
    answers: [
      { text: "settings.json", correct: false },
      { text: "function.config", correct: false },
      { text: "function.json", correct: true },
      { text: "azure.conf", correct: false },
    ],
  },
  {
    question: "Which is NOT a language supported by Azure Functions?",
    answers: [
      { text: "PowerShell", correct: false },
      { text: "JavaScript", correct: false },
      { text: "Ruby", correct: true },
      { text: "Python", correct: false },
    ],
  },
  {
    question: "What are the pricing models available in Azure Functions?",
    answers: [
      { text: "Subscription only", correct: false },
      {
        text: "Consumption, Premium, and App Service plans",
        correct: true,
      },
      { text: "Hourly Billing only", correct: false },
      { text: "Trial mode and Enterprise mode", correct: false },
    ],
  },
  {
    question: "Which is NOT a use case of Azure Functions?",
    answers: [
      { text: "Building serverless APIs", correct: false },
      { text: "Streaming IoT data", correct: false },
      { text: "Operating system virtualization", correct: true },
      { text: "Big data and machine learning pipelines", correct: false },
    ],
  },
  {
    question: "What is the main advantage of Azure Functions?",
    answers: [
      { text: "Manual server configuration", correct: false },
      { text: "Complete control over networking stack", correct: false },
      { text: "Focus on logic; rest is managed by Azure", correct: true },
      { text: "Provision dedicated VMs", correct: false },
    ],
  },
  {
    question: "What type of tasks is AWS Lambda best suited for?",
    answers: [
      { text: "Long-running batch jobs", correct: false },
      { text: "Front-end development", correct: false },
      { text: "Event-based background tasks", correct: true },
      { text: "Virtual machine deployment", correct: false },
    ],
  },
  {
    question:
      "Which of the following services can directly invoke a Google Cloud Function?",
    answers: [
      { text: "Cloud Storage", correct: true },
      { text: "Google Maps", correct: false },
      { text: "Google Chrome", correct: false },
      { text: "Amazon RDS", correct: false },
    ],
  },
  {
    question: "Which cloud platform offers serverless computing?",
    answers: [
      { text: "Amazon AWS", correct: false },
      { text: "Microsoft Azure", correct: false },
      { text: "Google Cloud", correct: false },
      { text: "All of the above", correct: true },
    ],
  },
];
//////////////////////////////  Sustainable Cloud Computing and 5G Network  /////////////////////////////////
const Sustainable_Cloud_Computing_and_5G = [
  {
    question: "What is the primary focus of sustainable cloud computing?",
    answers: [
      { text: "Maximizing profit of cloud service providers", correct: false },
      { text: "Minimizing data transfer times", correct: false },
      {
        text: "Minimizing energy consumption and carbon footprints",
        correct: true,
      },
      { text: "Improving user interface design", correct: false },
    ],
  },
  {
    question: "Which cloud layer includes Software as a Service (SaaS)?",
    answers: [
      { text: "Cooling Manager", correct: false },
      { text: "Cloud Architecture", correct: true },
      { text: "Virtualization Layer", correct: false },
      { text: "Application Model", correct: false },
    ],
  },
  {
    question:
      "Which of the following contributes the most to energy consumption in a cloud datacenter?",
    answers: [
      { text: "Storage", correct: false },
      { text: "Network", correct: false },
      { text: "Processor", correct: true },
      { text: "Cooling", correct: false },
    ],
  },
  {
    question:
      "Thermal-aware scheduling aims to minimize which of the following?",
    answers: [
      { text: "Data loss", correct: false },
      { text: "Heat transfer efficiency", correct: false },
      { text: "Hotspots and thermal gradients", correct: true },
      { text: "Service pricing", correct: false },
    ],
  },
  {
    question:
      "What is a key challenge of using renewable energy in cloud datacenters?",
    answers: [
      { text: "Low bandwidth", correct: false },
      { text: "Unpredictability and high capital cost", correct: true },
      { text: "Low user demand", correct: false },
      { text: "Slow migration techniques", correct: false },
    ],
  },
  {
    question:
      "Which of the following is NOT a goal of reliability in cloud services?",
    answers: [
      { text: "Secure VM migration", correct: false },
      { text: "Maximizing service delay", correct: true },
      { text: "Point-to-point encrypted communication", correct: false },
      { text: "Reducing SLA violations", correct: false },
    ],
  },
  {
    question:
      "What is the expected energy consumption of Cloud Data Centers by 2030?",
    answers: [
      { text: "500 TWh", correct: false },
      { text: "1200 TWh", correct: false },
      { text: "8000 TWh", correct: true },
      { text: "10000 TWh", correct: false },
    ],
  },
  {
    question: "What does DVFS stand for in cloud computing?",
    answers: [
      { text: "Data Visualization and Frequency Scaling", correct: false },
      { text: "Dynamic Voltage and Frequency Scaling", correct: true },
      { text: "Distributed Virtual File System", correct: false },
      { text: "Digital Voltage Fallback Simulation", correct: false },
    ],
  },
  {
    question:
      "Which technology enables workload migration across geographically distributed datacenters?",
    answers: [
      { text: "Heat mapping", correct: false },
      { text: "Data compression", correct: false },
      { text: "Virtual Machine (VM) technology", correct: true },
      { text: "Packet switching", correct: false },
    ],
  },
  {
    question:
      "Which scheduling mechanism in thermal-aware scheduling is based on prediction?",
    answers: [
      { text: "Proactive", correct: true },
      { text: "Reactive", correct: false },
      { text: "Hybrid", correct: false },
      { text: "Dynamic", correct: false },
    ],
  },
  {
    question: "What does PUE stand for in cloud datacenters?",
    answers: [
      { text: "Power Utilization Efficiency", correct: false },
      { text: "Power Usage Effectiveness", correct: true },
      { text: "Performance Under Energy", correct: false },
      { text: "Power Unit Efficiency", correct: false },
    ],
  },
  {
    question:
      "What is one implication of frequently turning servers on and off?",
    answers: [
      { text: "Improved processing speed", correct: false },
      { text: "Increased reliability", correct: false },
      { text: "Decreased reliability of server components", correct: true },
      { text: "Better energy saving", correct: false },
    ],
  },
  {
    question:
      "Which model focuses on analyzing and merging applications to improve resource utilization?",
    answers: [
      { text: "Cooling Manager", correct: false },
      { text: "Application Model", correct: false },
      { text: "Capacity Planning", correct: true },
      { text: "Reliability Manager", correct: false },
    ],
  },
  {
    question:
      "Waste heat in cloud datacenters can be reused through which technique?",
    answers: [
      { text: "Air cooling", correct: false },
      { text: "Liquid nitrogen cooling", correct: false },
      { text: "Vapor-absorption based cooling", correct: true },
      { text: "Electro-thermal recycling", correct: false },
    ],
  },
  {
    question: "Which generation introduced mobile broadband?",
    answers: [
      { text: "1G", correct: false },
      { text: "2G", correct: false },
      { text: "3G", correct: false },
      { text: "4G LTE", correct: true },
    ],
  },
  {
    question: "What does eMBB stand for in the context of 5G?",
    answers: [
      { text: "Enhanced Multimedia Broadcasting", correct: false },
      { text: "Enhanced Mobile Broadband", correct: true },
      { text: "Efficient Mobile Bitrate Balancing", correct: false },
      { text: "Embedded Mobile Buffer Bandwidth", correct: false },
    ],
  },
  {
    question:
      "Which 5G feature is targeted for applications like autonomous vehicles and telehealth?",
    answers: [
      { text: "mMTC", correct: false },
      { text: "URLLC", correct: true },
      { text: "eMBB", correct: false },
      { text: "LTE-A", correct: false },
    ],
  },
  {
    question: "What is the main benefit of edge computing in 5G networks?",
    answers: [
      { text: "Increased cost", correct: false },
      { text: "Higher latency", correct: false },
      { text: "Bringing cloud capabilities closer to users", correct: true },
      { text: "Reducing mobile data", correct: false },
    ],
  },
  {
    question:
      "Which of the following applications benefits most from edge computing in 5G?",
    answers: [
      { text: "Cloud backup", correct: false },
      { text: "Augmented Reality", correct: true },
      { text: "Simple text messaging", correct: false },
      { text: "Spreadsheet editing", correct: false },
    ],
  },
  {
    question:
      "Which of the following is NOT an application of edge computing in 5G?",
    answers: [
      { text: "Emergency response systems", correct: false },
      { text: "Smart cities", correct: false },
      { text: "Manual fax machines", correct: true },
      { text: "Factories of the future", correct: false },
    ],
  },
];
///////////////////////////////  Cyber Physical System  //////////////////////////////////////
const Cyber_Physical_Systems = [
  {
    question: "What does a Cyber-Physical System (CPS) primarily involve?",
    answers: [
      {
        text: "Integration of electrical and chemical processes",
        correct: false,
      },
      {
        text: "Integration of computation with physical processes",
        correct: true,
      },
      { text: "Purely software-based systems", correct: false },
      { text: "Only mechanical systems with sensors", correct: false },
    ],
  },
  {
    question: "Who coined the term 'Cyber-Physical Systems'?",
    answers: [
      { text: "Mark Zuckerberg", correct: false },
      { text: "Elon Musk", correct: false },
      { text: "Helen Gill", correct: true },
      { text: "Tim Berners-Lee", correct: false },
    ],
  },
  {
    question: "In CPS, feedback loops are used for:",
    answers: [
      { text: "Separating cyber and physical domains", correct: false },
      { text: "Monitoring temperature only", correct: false },
      {
        text: "Physical processes affecting computations and vice versa",
        correct: true,
      },
      { text: "Uploading data to the cloud", correct: false },
    ],
  },
  {
    question: "Which of the following is NOT a typical application of CPS?",
    answers: [
      { text: "Medical monitoring systems", correct: false },
      { text: "Autonomous automobile systems", correct: false },
      { text: "Text message broadcasting", correct: true },
      { text: "Smart grid", correct: false },
    ],
  },
  {
    question: "CPS combines engineering models from which disciplines?",
    answers: [
      { text: "Only mechanical and civil engineering", correct: false },
      { text: "Only computer science", correct: false },
      { text: "All engineering fields with computer science", correct: true },
      { text: "Only biomedical engineering", correct: false },
    ],
  },
  {
    question: "Which one of these is a feature of CPS?",
    answers: [
      { text: "Operates only on a fixed scale", correct: false },
      { text: "Exhibits multiple behavioral modalities", correct: true },
      { text: "Does not depend on context", correct: false },
      { text: "Only functions in isolation", correct: false },
    ],
  },
  {
    question: "Which of the following does CPS architecture *not* involve?",
    answers: [
      { text: "Cybernetics", correct: false },
      { text: "Mechatronics", correct: false },
      { text: "Design and process science", correct: false },
      { text: "Purely traditional mechanics", correct: true },
    ],
  },
  {
    question: "What role does cloud computing play in CPS?",
    answers: [
      { text: "Acts as a standalone computing model", correct: false },
      {
        text: "Provides a flexible platform for realizing CPS goals",
        correct: true,
      },
      { text: "Disables interaction between components", correct: false },
      { text: "Limits scalability", correct: false },
    ],
  },
  {
    question: "What does CPCC stand for?",
    answers: [
      { text: "Cyber Physical Core Control", correct: false },
      { text: "Cyber Physical Cloud Computing", correct: true },
      { text: "Central Power Control Circuit", correct: false },
      { text: "Cloud Performance Computing Center", correct: false },
    ],
  },
  {
    question: "Which is NOT a benefit of CPCC?",
    answers: [
      { text: "Modular composition", correct: false },
      { text: "Efficient use of resources", correct: false },
      { text: "Increased latency", correct: true },
      { text: "Rapid development", correct: false },
    ],
  },
  {
    question: "Which of the following best defines Spatial Data?",
    answers: [
      { text: "Text-based data stored in databases", correct: false },
      {
        text: "Data with a geographical or location-based context",
        correct: true,
      },
      { text: "Financial transactional data", correct: false },
      { text: "Audio-visual data from sensors", correct: false },
    ],
  },
  {
    question: "Which of these is a feature of Spatial Cloud Computing?",
    answers: [
      { text: "Does not support spatiotemporal data", correct: false },
      { text: "Supports shared resource pooling", correct: true },
      { text: "Provides only static data analytics", correct: false },
      { text: "Works only on private clouds", correct: false },
    ],
  },
  {
    question:
      "Which service helps with indexing trajectory data in Traj-Cloud?",
    answers: [
      { text: "Trajectory Map-Matching Service", correct: false },
      { text: "Trajectory Indexing Service", correct: true },
      { text: "Trajectory Recovery Service", correct: false },
      { text: "Trajectory Visualization Module", correct: false },
    ],
  },
  {
    question:
      "Which component is used for trajectory query service in Traj-Cloud?",
    answers: [
      { text: "Cloud Storage", correct: false },
      { text: "Google Compute Engine and Cloud SQL", correct: true },
      { text: "Firebase Database", correct: false },
      { text: "Google Drive API", correct: false },
    ],
  },
  {
    question: "In mobility trace analysis, what is the main challenge?",
    answers: [
      { text: "Data collection from roads", correct: false },
      { text: "Providing location-aware services", correct: true },
      { text: "Maintaining database backups", correct: false },
      { text: "Extracting audio files", correct: false },
    ],
  },
  {
    question: "Which simulator is used to test fog models in IoHT?",
    answers: [
      { text: "FogSim++", correct: false },
      { text: "FogTest", correct: false },
      { text: "iFogSim", correct: true },
      { text: "EdgeSim", correct: false },
    ],
  },
  {
    question: "What is the primary purpose of Fog-Edge Computing in IoHT?",
    answers: [
      { text: "Increase cloud load", correct: false },
      { text: "Reduce latency and network usage", correct: true },
      { text: "Add more servers to cloud", correct: false },
      { text: "Improve display quality of health devices", correct: false },
    ],
  },
  {
    question: "Which GCP component is used for map-matching in Traj-Cloud?",
    answers: [
      { text: "Cloud SQL", correct: false },
      { text: "Firebase", correct: false },
      { text: "Google Compute Engine", correct: true },
      { text: "Cloud Functions", correct: false },
    ],
  },
  {
    question:
      "What is the key aspect of intelligent transportation systems (ITS)?",
    answers: [
      { text: "Installing more GPS devices", correct: false },
      { text: "Efficient mobility analytics", correct: true },
      { text: "Monitoring road cameras", correct: false },
      { text: "Using drones", correct: false },
    ],
  },
  {
    question:
      "Which of the following describes Dew Computing in the context of IoHT?",
    answers: [
      { text: "A cooling technology for cloud servers", correct: false },
      { text: "Computing on water-purification systems", correct: false },
      {
        text: "Computing at a very localized level like wearables",
        correct: true,
      },
      { text: "Backup servers for cloud outages", correct: false },
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
    } else if (selectedValue === "ManagingData") {
      Questions = ManagingData;
    } else if (selectedValue === "OpenStack") {
      Questions = OpenStack;
    } else if (selectedValue === "ResourceManagement2") {
      Questions = ResourceManagement2;
    } else if (selectedValue === "Cloud_Security") {
      Questions = Cloud_Security;
    } else if (selectedValue === "Cloudmarketplace") {
      Questions = Cloudmarketplace;
    } else if (selectedValue === "MCC") {
      Questions = MCC;
    } else if (selectedValue === "GIS_Docker") {
      Questions = GIS_Docker;
    } else if (selectedValue === "Green_Sensor_Cloud") {
      Questions = Green_Sensor_Cloud;
    } else if (selectedValue === "Cloud_Federation") {
      Questions = Cloud_Federation;
    } else if (selectedValue === "Container_Docker_Kubernetes") {
      Questions = Container_Docker_Kubernetes;
    } else if (selectedValue === "Docker_Dew_Serverless") {
      Questions = Docker_Dew_Serverless;
    } else if (selectedValue === "Serverless_Computing") {
      Questions = Serverless_Computing;
    } else if (selectedValue === "Sustainable_Cloud_Computing_and_5G") {
      Questions = Sustainable_Cloud_Computing_and_5G;
    } else if (selectedValue === "Cyber_Physical_Systems") {
      Questions = Cyber_Physical_Systems;
    } else if (selectedValue === "Signal_and_System") {
      Questions = Signal_and - System;
    } else if (selectedValue === "Digital_ELectronics") {
      Questions = Digital_Electronics;
    } else if (selectedValue === "Microprocessor_and_Microcontroller") {
      Questions = Microprocessor_and_Microcontroller;
    } else if (selectedValue === "Arduino") {
      Questions = Arduino;
    } else if (selectedValue === "Sensors") {
      Questions = Sensors;
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
