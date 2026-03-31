export type CareerPath = {
  id: string;
  title: string;
  description: string;
  duration: string;
  exams: string[];
  qualifications: string[];
  skills: string[];
  outcomes: string[];
  icon: string;
  imageUrl: string;
  salaryRange?: string;
  scholarships?: string[];
  growthData?: { year: number; salary: number }[];
  studyAbroad?: { country: string; university: string; course: string }[];
};

export type Stream = {
  id: string;
  title: string;
  description: string;
  paths: CareerPath[];
  subjects?: string[];
  category: "Science" | "Commerce" | "Humanities" | "Arts" | "Vocational";
};

export const after10thStreams: Stream[] = [
  {
    id: "science_mpc",
    title: "Science (MPC / PCM)",
    category: "Science",
    description: "Maths, Physics, Chemistry. The gateway to Engineering, Architecture, Aviation, Defence, and Data Science.",
    subjects: ["Mathematics", "Physics", "Chemistry", "English", "Computer Science / Physical Education"],
    paths: [
      {
        id: "engineering",
        title: "Engineering (B.Tech / B.E.)",
        description: "Design, build, and maintain complex systems, software, and infrastructure.",
        icon: "Cpu",
        imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
        duration: "4 Years",
        qualifications: ["10+2 with Physics, Chemistry, Maths (PCM)", "Minimum 55-60% aggregate"],
        exams: ["JEE Main", "JEE Advanced (for IITs)", "BITSAT", "State CETs (EAPCET, MHT-CET, etc.)"],
        skills: ["Mathematics", "Programming", "Problem Solving", "Analytical Thinking"],
        outcomes: ["Software Engineer", "Robotics Engineer", "AI/ML Expert", "Civil Engineer", "Mechanical Engineer"],
        salaryRange: "₹5.0L - ₹15.0L+ PA",
        scholarships: ["AICTE Pragati Scholarship for Girls", "National Scholarship Portal (NSP) - Merit-cum-Means", "State-specific E-Pass/Fee Reimbursement (e.g., Telangana/AP)", "FAME Scholarship"],
        growthData: [{year: 0, salary: 5}, {year: 2, salary: 8}, {year: 5, salary: 12}, {year: 10, salary: 20}]
      },
      {
        id: "architecture",
        title: "Architecture (B.Arch)",
        description: "Plan and design buildings, urban spaces, and landscapes.",
        icon: "Building",
        imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80",
        duration: "5 Years",
        qualifications: ["10+2 with PCM", "Minimum 50% marks"],
        exams: ["NATA", "JEE Paper 2"],
        skills: ["Spatial Reasoning", "Creativity", "Mathematics", "Design Software (AutoCAD)"],
        outcomes: ["Architect", "Urban Planner", "Interior Designer", "Landscape Architect", "Project Manager"],
        salaryRange: "₹4.0L - ₹10.0L PA",
        growthData: [{year: 0, salary: 4}, {year: 2, salary: 6}, {year: 5, salary: 10}, {year: 10, salary: 18}]
      },
      {
        id: "aviation",
        title: "Aviation (Commercial Pilot)",
        description: "Fly commercial aircraft globally. Requires rigorous flight training and medical fitness.",
        icon: "Plane",
        imageUrl: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=800&q=80",
        duration: "1.5 - 2 Years (Flight Training)",
        qualifications: ["10+2 with Physics and Maths", "Class 1 Medical Fitness"],
        exams: ["DGCA Exams", "Flight School Entrance"],
        skills: ["Quick Decision Making", "Spatial Awareness", "Communication", "Technical Aptitude"],
        outcomes: ["Commercial Pilot", "Flight Instructor", "Aviation Consultant", "Air Traffic Controller"],
        salaryRange: "₹15.0L - ₹30.0L+ PA",
        growthData: [{year: 0, salary: 15}, {year: 2, salary: 25}, {year: 5, salary: 45}, {year: 10, salary: 80}]
      },
      {
        id: "defence",
        title: "Defence (NDA)",
        description: "Join the Army, Navy, or Air Force as a Commissioned Officer immediately after 12th.",
        icon: "Shield",
        imageUrl: "https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=800&q=80",
        duration: "3 Years (NDA) + 1 Year (Academy)",
        qualifications: ["10+2 (PCM preferred for Navy/Air Force)", "Unmarried", "Strict Physical Standards"],
        exams: ["UPSC NDA Exam", "SSB Interview", "Medical Test"],
        skills: ["Leadership", "Physical Fitness", "Discipline", "Strategic Thinking"],
        outcomes: ["Army Officer", "Navy Officer", "Air Force Officer", "Strategic Planner", "Defence Consultant"],
        salaryRange: "₹10.0L - ₹15.0L PA (plus perks)",
        growthData: [{year: 0, salary: 10}, {year: 2, salary: 12}, {year: 5, salary: 15}, {year: 10, salary: 22}]
      },
      {
        id: "pure_sciences",
        title: "Pure Sciences & Research",
        description: "Deep dive into fundamental sciences through integrated BS-MS programs.",
        icon: "FlaskConical",
        imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9d39d6627?auto=format&fit=crop&w=800&q=80",
        duration: "3 - 5 Years (B.Sc / BS-MS)",
        qualifications: ["10+2 with Science (PCM/PCB)"],
        exams: ["IISER IAT", "NEST", "CUET", "Merit-based"],
        skills: ["Research Methodology", "Data Analysis", "Critical Thinking", "Patience"],
        outcomes: ["Scientist", "Research Fellow", "University Professor", "Lab Manager", "Data Analyst"],
        salaryRange: "₹6.0L - ₹12.0L PA",
        growthData: [{year: 0, salary: 6}, {year: 2, salary: 9}, {year: 5, salary: 14}, {year: 10, salary: 25}]
      },
      {
        id: "merchant_navy",
        title: "Merchant Navy",
        description: "Join the commercial fleet of ships. High-seas adventure with excellent pay and global travel.",
        icon: "Anchor",
        imageUrl: "https://images.unsplash.com/photo-1544945582-3b466d874eac?auto=format&fit=crop&w=800&q=80",
        duration: "3 - 4 Years (B.Sc Nautical Science / B.E. Marine Engineering)",
        qualifications: ["10+2 with PCM", "Minimum 60% marks", "Strict Medical & Eyesight standards"],
        exams: ["IMU-CET"],
        skills: ["Navigation", "Mechanical Aptitude", "Leadership", "Resilience"],
        outcomes: ["Deck Officer", "Marine Engineer", "Captain", "Port Manager", "Logistics Specialist"],
        salaryRange: "₹6.0L - ₹25.0L+ PA (Tax-free in many cases)",
        growthData: [{year: 0, salary: 6}, {year: 2, salary: 12}, {year: 5, salary: 25}, {year: 10, salary: 50}]
      },
      {
        id: "statistics_math",
        title: "Statistics & Mathematics",
        description: "Advanced study of numbers and data. Ideal for those aiming for ISI or high-end analytics.",
        icon: "Sigma",
        imageUrl: "https://images.unsplash.com/photo-1509228468518-180dd48a5791?auto=format&fit=crop&w=800&q=80",
        duration: "3 Years (B.Stat / B.Math)",
        qualifications: ["10+2 with Mathematics"],
        exams: ["ISI Entrance", "CMI Entrance", "CUET"],
        skills: ["Mathematical Logic", "Statistical Modeling", "Programming", "Abstract Reasoning"],
        outcomes: ["Statistician", "Actuary", "Data Analyst", "Econometrician", "Financial Researcher"],
        salaryRange: "₹8.0L - ₹25.0L+ PA",
        growthData: [{year: 0, salary: 8}, {year: 2, salary: 14}, {year: 5, salary: 25}, {year: 10, salary: 45}]
      },
      {
        id: "ai_data_science",
        title: "AI & Data Science",
        description: "New-age careers focusing on machine learning, big data, and artificial intelligence.",
        icon: "Code",
        imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80",
        duration: "3 - 4 Years (B.Tech AI / B.Sc Data Science)",
        qualifications: ["10+2 with PCM"],
        exams: ["JEE Main", "State CETs", "CUET"],
        skills: ["Python/R", "Statistics", "Machine Learning", "Data Visualization"],
        outcomes: ["Data Scientist", "AI Engineer", "Machine Learning Engineer", "Business Intelligence Analyst", "Data Architect"],
        salaryRange: "₹8.0L - ₹20.0L+ PA",
        growthData: [{year: 0, salary: 8}, {year: 2, salary: 15}, {year: 5, salary: 28}, {year: 10, salary: 55}]
      }
    ]
  },
  {
    id: "science_bipc",
    title: "Science (BiPC / PCB)",
    category: "Science",
    description: "Biology, Physics, Chemistry. The path to Medicine, Pharmacy, Agriculture, and Allied Health.",
    subjects: ["Biology", "Physics", "Chemistry", "English", "Psychology / Physical Education"],
    paths: [
      {
        id: "medicine",
        title: "Medicine (MBBS / BDS)",
        description: "Become a doctor or dentist. Requires immense dedication and long years of study.",
        icon: "Stethoscope",
        imageUrl: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80",
        duration: "5.5 Years (incl. 1-year internship)",
        qualifications: ["10+2 with Physics, Chemistry, Biology (PCB)", "Minimum 50% aggregate"],
        exams: ["NEET UG"],
        skills: ["Empathy", "Stamina", "Scientific Knowledge", "Decision Making"],
        outcomes: ["Physician", "Surgeon", "Dentist", "Medical Researcher", "Hospital Administrator"],
        salaryRange: "₹8.0L - ₹20.0L PA",
        growthData: [{year: 0, salary: 8}, {year: 2, salary: 12}, {year: 5, salary: 22}, {year: 10, salary: 45}],
        scholarships: ["National Scholarship Portal (NSP)", "State-specific Merit Scholarships", "Dr. Ambedkar Central Sector Scheme", "Central Sector Scheme of Scholarship for College and University Students"]
      },
      {
        id: "pharmacy",
        title: "Pharmacy (B.Pharm)",
        description: "Study the science of drugs, their development, and clinical uses.",
        icon: "Pill",
        imageUrl: "https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?auto=format&fit=crop&w=800&q=80",
        duration: "4 Years",
        qualifications: ["10+2 with PCB or PCM"],
        exams: ["State EAPCET / CETs", "Institute Entrances"],
        skills: ["Chemistry Knowledge", "Attention to Detail", "Research", "Regulatory Knowledge"],
        outcomes: ["Pharmacist", "Drug Inspector", "Pharma Researcher", "Clinical Research Associate", "Quality Control Analyst"],
        salaryRange: "₹3.0L - ₹8.0L PA",
        growthData: [{year: 0, salary: 3}, {year: 2, salary: 4.5}, {year: 5, salary: 7}, {year: 10, salary: 12}],
        scholarships: ["GPAT Scholarship (for PG)", "AICTE PG Scholarship", "National Scholarship Portal (NSP)"]
      },
      {
        id: "allied_health",
        title: "Allied Health & Nursing",
        description: "Crucial healthcare roles supporting doctors, including Physiotherapy and Lab Tech.",
        icon: "Activity",
        imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
        duration: "3 - 4.5 Years",
        qualifications: ["10+2 with PCB"],
        exams: ["NEET UG", "Institute Entrances", "Merit-based"],
        skills: ["Patient Care", "Technical Equipment Operation", "Empathy", "Stamina"],
        outcomes: ["Nurse", "Physiotherapist", "Medical Lab Technician", "Radiologist Assistant", "Occupational Therapist"],
        salaryRange: "₹3.0L - ₹8.0L PA (High international demand)",
        growthData: [{year: 0, salary: 3}, {year: 2, salary: 5}, {year: 5, salary: 9}, {year: 10, salary: 16}]
      },
      {
        id: "nursing",
        title: "B.Sc Nursing",
        description: "Professional healthcare role focusing on patient care, recovery, and health promotion.",
        icon: "HeartPulse",
        imageUrl: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80",
        duration: "4 Years",
        qualifications: ["10+2 with PCB", "Minimum 45-50% marks"],
        exams: ["AIIMS Nursing", "State Nursing Entrances", "NEET (for some colleges)"],
        skills: ["Patient Care", "Medical Knowledge", "Empathy", "Critical Thinking"],
        outcomes: ["Registered Nurse", "Nurse Educator", "Hospital Administrator", "Public Health Nurse", "Clinical Nurse Specialist"],
        salaryRange: "₹3.0L - ₹7.0L PA (High global demand)",
        growthData: [{year: 0, salary: 3}, {year: 2, salary: 4.5}, {year: 5, salary: 8}, {year: 10, salary: 15}]
      },
      {
        id: "psychology_science",
        title: "Psychology (B.Sc)",
        description: "Scientific study of the human mind and behavior from a clinical and research perspective.",
        icon: "Brain",
        imageUrl: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80",
        duration: "3 Years",
        qualifications: ["10+2 with Science (preferred)"],
        exams: ["CUET", "Merit-based"],
        skills: ["Observation", "Analytical Thinking", "Empathy", "Research Methodology"],
        outcomes: ["Clinical Psychologist", "Counselor", "HR Specialist", "User Researcher", "Behavioral Therapist"],
        salaryRange: "₹3.5L - ₹9.0L PA",
        growthData: [{year: 0, salary: 3.5}, {year: 2, salary: 5}, {year: 5, salary: 10}, {year: 10, salary: 18}]
      },
      {
        id: "agriculture_vet",
        title: "Agriculture & Veterinary",
        description: "Focus on animal health, crop science, and agricultural technology.",
        icon: "Leaf",
        imageUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
        duration: "4 - 5 Years (B.Sc Agri / B.V.Sc)",
        qualifications: ["10+2 with PCB or PCMB"],
        exams: ["State Agri/Vet Entrances", "ICAR AIEEA"],
        skills: ["Love for Animals/Nature", "Scientific Research", "Field Work", "Patience"],
        outcomes: ["Agricultural Officer", "Veterinarian", "Agro-researcher", "Farm Manager", "Food Safety Inspector"],
        salaryRange: "₹4.0L - ₹10.0L PA",
        growthData: [{year: 0, salary: 4}, {year: 2, salary: 6}, {year: 5, salary: 11}, {year: 10, salary: 20}]
      }
    ]
  },
  {
    id: "science_pcmb",
    title: "Science (PCMB)",
    category: "Science",
    description: "Physics, Chemistry, Maths, Biology. The 'General Science' stream that keeps both Engineering and Medical options open.",
    subjects: ["Mathematics", "Biology", "Physics", "Chemistry", "English", "Vernacular Language"],
    paths: [
      {
        id: "biotechnology",
        title: "Biotechnology & Bioinformatics",
        description: "Combine biology with technology to develop products in healthcare, agriculture, and environment.",
        icon: "Dna",
        imageUrl: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=800&q=80",
        duration: "3 - 4 Years (B.Sc / B.Tech)",
        qualifications: ["10+2 with PCMB or PCB"],
        exams: ["JEE Main", "CUET", "State CETs", "GAT-B"],
        skills: ["Laboratory Techniques", "Data Analysis", "Biological Research", "Genetics"],
        outcomes: ["Biotechnologist", "Bioinformatics Analyst", "Geneticist", "Quality Control Officer", "R&D Scientist"],
        salaryRange: "₹4.0L - ₹12.0L PA",
        growthData: [{year: 0, salary: 4}, {year: 2, salary: 7}, {year: 5, salary: 14}, {year: 10, salary: 28}]
      },
      {
        id: "food_tech",
        title: "Food Technology",
        description: "Study the science of food processing, preservation, and safety.",
        icon: "UtensilsCrossed",
        imageUrl: "https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?auto=format&fit=crop&w=800&q=80",
        duration: "4 Years (B.Tech)",
        qualifications: ["10+2 with PCMB or PCM"],
        exams: ["JEE Main", "ICAR AIEEA", "State CETs"],
        skills: ["Food Chemistry", "Microbiology", "Quality Assurance", "Process Engineering"],
        outcomes: ["Food Scientist", "Quality Manager", "Product Developer", "Food Inspector", "Production Supervisor"],
        salaryRange: "₹3.5L - ₹9.0L PA",
        growthData: [{year: 0, salary: 3.5}, {year: 2, salary: 5.5}, {year: 5, salary: 10}, {year: 10, salary: 18}]
      },
      {
        id: "forensic_science",
        title: "Forensic Science",
        description: "Apply scientific principles to criminal investigations and legal problems.",
        icon: "Fingerprint",
        imageUrl: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=800&q=80",
        duration: "3 Years (B.Sc)",
        qualifications: ["10+2 with Science (PCM/PCB/PCMB)"],
        exams: ["CUET", "NFSU Entrance (AIFSET)", "Merit-based"],
        skills: ["Analytical Thinking", "Attention to Detail", "Evidence Collection", "Laboratory Skills"],
        outcomes: ["Forensic Scientist", "Crime Scene Investigator", "Toxicologist", "Cyber Forensic Expert", "Fingerprint Analyst"],
        salaryRange: "₹3.0L - ₹8.0L PA",
        growthData: [{year: 0, salary: 3}, {year: 2, salary: 4.5}, {year: 5, salary: 8}, {year: 10, salary: 15}]
      }
    ]
  },
  {
    id: "commerce",
    title: "Commerce (MEC / CEC)",
    category: "Commerce",
    description: "Maths/Civics, Economics, Commerce. Leads to CA, Management, Finance, and Corporate Law.",
    subjects: ["Accountancy", "Business Studies", "Economics", "Mathematics / Informatics Practices", "English"],
    paths: [
      {
        id: "professional_accounting",
        title: "Professional Accounting (CA / CS / CMA)",
        description: "Elite financial and compliance roles. Highly respected and rigorous certification process.",
        icon: "Calculator",
        imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
        duration: "3 - 5 Years (incl. articleship)",
        qualifications: ["10+2 (Any stream, Commerce preferred)"],
        exams: ["ICAI (CA Foundation)", "ICSI (CSEET)", "ICMAI"],
        skills: ["Number Crunching", "Taxation Laws", "Auditing", "Ethics"],
        outcomes: ["Chartered Accountant (CA)", "Company Secretary (CS)", "Cost Accountant"],
        salaryRange: "₹7.0L - ₹18.0L+ PA",
        growthData: [{year: 0, salary: 7}, {year: 2, salary: 12}, {year: 5, salary: 25}, {year: 10, salary: 45}]
      },
      {
        id: "management",
        title: "Business Management (BBA / IPM)",
        description: "Learn to run businesses, manage teams, and drive corporate strategy.",
        icon: "Briefcase",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        duration: "3 Years (BBA) or 5 Years (Integrated IPM)",
        qualifications: ["10+2 (Any stream)"],
        exams: ["IPMAT (IIM Indore/Rohtak)", "JIPMAT", "CUET", "Merit"],
        skills: ["Leadership", "Communication", "Strategic Thinking", "Networking"],
        outcomes: ["Business Manager", "Marketing Executive", "HR Manager", "Entrepreneur"],
        salaryRange: "₹5.0L - ₹12.0L+ PA",
        growthData: [{year: 0, salary: 5}, {year: 2, salary: 9}, {year: 5, salary: 18}, {year: 10, salary: 35}]
      },
      {
        id: "actuarial_science",
        title: "Actuarial Science",
        description: "Assess financial risks using math and statistics. One of the highest-paying professions globally.",
        icon: "Percent",
        imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
        duration: "3 Years (Degree) + Professional Exams",
        qualifications: ["10+2 with Mathematics", "High proficiency in numbers"],
        exams: ["ACET (IAI)", "IFoA (UK)"],
        skills: ["Risk Assessment", "Advanced Mathematics", "Statistics", "Financial Logic"],
        outcomes: ["Actuary", "Risk Manager", "Investment Consultant"],
        salaryRange: "₹10.0L - ₹30.0L+ PA",
        growthData: [{year: 0, salary: 10}, {year: 2, salary: 18}, {year: 5, salary: 35}, {year: 10, salary: 65}]
      },
      {
        id: "finance_economics",
        title: "Finance & Economics",
        description: "Analyze markets, manage investments, and understand global economic trends.",
        icon: "TrendingUp",
        imageUrl: "https://images.unsplash.com/photo-1611974714024-46202e33bc36?auto=format&fit=crop&w=800&q=80",
        duration: "3 Years (B.Com Hons / B.Econ)",
        qualifications: ["10+2 (Commerce with Maths preferred)"],
        exams: ["CUET", "Merit-based"],
        skills: ["Data Analysis", "Financial Modeling", "Risk Assessment", "Mathematics"],
        outcomes: ["Banker", "Financial Analyst", "Actuarial Scientist", "Investment Banker"],
        salaryRange: "₹4.0L - ₹10.0L PA",
        growthData: [{year: 0, salary: 4}, {year: 2, salary: 7}, {year: 5, salary: 14}, {year: 10, salary: 25}]
      },
      {
        id: "it_commerce",
        title: "IT from Commerce (BCA)",
        description: "Bridge business and technology by learning software development and IT management.",
        icon: "Monitor",
        imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
        duration: "3 Years",
        qualifications: ["10+2 (Any stream, Maths often preferred)"],
        exams: ["CUET", "College Entrances", "Merit"],
        skills: ["Programming", "Database Management", "System Analysis", "Logic"],
        outcomes: ["Software Developer", "IT Consultant", "Systems Analyst"],
        salaryRange: "₹4.0L - ₹10.0L PA",
        growthData: [{year: 0, salary: 4}, {year: 2, salary: 6.5}, {year: 5, salary: 12}, {year: 10, salary: 22}]
      }
    ]
  },
  {
    id: "arts_humanities",
    title: "Arts & Humanities (HEC)",
    category: "Humanities",
    description: "History, Economics, Civics. Ideal for Law, Civil Services, Design, Media, and Psychology.",
    subjects: ["History", "Political Science", "Geography", "Sociology / Psychology", "English"],
    paths: [
      {
        id: "law",
        title: "Law (Integrated BA-LLB)",
        description: "Advocate for justice, manage corporate legalities, or become a judge.",
        icon: "Scale",
        imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
        duration: "5 Years (Integrated)",
        qualifications: ["10+2 (Any stream)"],
        exams: ["CLAT", "AILET", "LSAT-India"],
        skills: ["Debating", "Critical Reading", "Logical Reasoning", "Public Speaking"],
        outcomes: ["Corporate Lawyer", "Advocate", "Legal Advisor", "Judge"],
        salaryRange: "₹6.0L - ₹15.0L+ PA",
        growthData: [{year: 0, salary: 6}, {year: 2, salary: 10}, {year: 5, salary: 20}, {year: 10, salary: 40}]
      },
      {
        id: "design",
        title: "Design & Creative (B.Des / BFA)",
        description: "Create visual concepts, fashion, products, and user interfaces.",
        icon: "PenTool",
        imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
        duration: "3 - 4 Years",
        qualifications: ["10+2 (Any stream)"],
        exams: ["NID DAT", "NIFT Entrance", "UCEED", "Portfolio Review"],
        skills: ["Creativity", "Visual Communication", "Empathy", "Design Software"],
        outcomes: ["Fashion Designer", "UI/UX Designer", "Product Designer", "Animator"],
        salaryRange: "₹5.0L - ₹12.0L PA",
        growthData: [{year: 0, salary: 5}, {year: 2, salary: 9}, {year: 5, salary: 18}, {year: 10, salary: 35}]
      },
      {
        id: "media_journalism",
        title: "Media & Journalism (BJMC)",
        description: "Report news, create digital content, and manage public relations.",
        icon: "Mic",
        imageUrl: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=800&q=80",
        duration: "3 Years",
        qualifications: ["10+2 (Any stream)"],
        exams: ["CUET", "College Entrances (e.g., XIC-OET, IIMC)"],
        skills: ["Writing", "Public Speaking", "Storytelling", "Digital Literacy"],
        outcomes: ["Journalist", "Digital Content Creator", "PR Specialist", "Media Planner"],
        salaryRange: "₹4.0L - ₹9.0L PA",
        growthData: [{year: 0, salary: 4}, {year: 2, salary: 6}, {year: 5, salary: 11}, {year: 10, salary: 20}]
      },
      {
        id: "hospitality",
        title: "Hospitality & Hotel Management",
        description: "Manage hotels, resorts, and global events in a booming travel industry.",
        icon: "Utensils",
        imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        duration: "3 - 4 Years (B.Sc Hotel Management / BHM)",
        qualifications: ["10+2 (Any stream)"],
        exams: ["NCHMCT JEE", "Institute Exams"],
        skills: ["Customer Service", "Communication", "Crisis Management", "Multitasking"],
        outcomes: ["Hotel Manager", "Chef", "Event Planner", "Travel Consultant"],
        salaryRange: "₹4.0L - ₹10.0L PA",
        growthData: [{year: 0, salary: 4}, {year: 2, salary: 6}, {year: 5, salary: 11}, {year: 10, salary: 20}]
      },
      {
        id: "psychology_arts",
        title: "Psychology (B.A.)",
        description: "Explore human behavior, mental health, and social dynamics from a liberal arts perspective.",
        icon: "BrainCircuit",
        imageUrl: "https://images.unsplash.com/photo-1526232761682-d26e4f9c60e4?auto=format&fit=crop&w=800&q=80",
        duration: "3 Years",
        qualifications: ["10+2 (Any stream)"],
        exams: ["CUET", "Merit-based"],
        skills: ["Active Listening", "Critical Thinking", "Communication", "Empathy"],
        outcomes: ["Counselor", "Social Worker", "HR Professional", "User Researcher"],
        salaryRange: "₹3.0L - ₹8.0L PA",
        growthData: [{year: 0, salary: 3}, {year: 2, salary: 4.5}, {year: 5, salary: 8}, {year: 10, salary: 15}]
      },
      {
        id: "liberal_arts",
        title: "Liberal Arts",
        description: "Interdisciplinary study across humanities, sciences, and arts. Focuses on 'learning how to learn'.",
        icon: "Library",
        imageUrl: "https://images.unsplash.com/photo-1491841573634-28140fc7ced7?auto=format&fit=crop&w=800&q=80",
        duration: "3 - 4 Years",
        qualifications: ["10+2 (Any stream)"],
        exams: ["CUET", "Aptitude Tests (Ashoka, Flame, etc.)"],
        skills: ["Critical Thinking", "Writing", "Interdisciplinary Research", "Adaptability"],
        outcomes: ["Policy Analyst", "Consultant", "Creative Director", "Academic"],
        salaryRange: "₹5.0L - ₹15.0L PA",
        growthData: [{year: 0, salary: 5}, {year: 2, salary: 9}, {year: 5, salary: 18}, {year: 10, salary: 35}]
      },
      {
        id: "humanities_social",
        title: "Humanities & Social Sciences",
        description: "Study human society, culture, and behavior. Great foundation for civil services.",
        icon: "Globe",
        imageUrl: "https://images.unsplash.com/photo-1523050335392-9bc567597280?auto=format&fit=crop&w=800&q=80",
        duration: "3 Years (BA Hons)",
        qualifications: ["10+2 (Any stream)"],
        exams: ["CUET", "Merit-based"],
        skills: ["Research", "Writing", "Critical Thinking", "Empathy"],
        outcomes: ["Teacher/Professor", "Civil Services (UPSC)", "Researcher", "Social Worker"],
        salaryRange: "₹3.5L - ₹8.0L PA",
        growthData: [{year: 0, salary: 3.5}, {year: 2, salary: 5}, {year: 5, salary: 9}, {year: 10, salary: 16}]
      }
    ]
  },
  {
    id: "fine_arts",
    title: "Fine Arts & Design",
    category: "Arts",
    description: "Focus on creativity, aesthetics, and visual communication. Ideal for artists and designers.",
    subjects: ["Painting", "Sculpture", "Applied Art", "Art History", "English"],
    paths: [
      {
        id: "visual_arts",
        title: "Visual Arts (BFA)",
        description: "Specialized training in painting, sculpture, printmaking, or photography.",
        icon: "Palette",
        imageUrl: "https://images.unsplash.com/photo-1460661419201-fd4ce18a802f?auto=format&fit=crop&w=800&q=80",
        duration: "4 Years",
        qualifications: ["10+2 (Any stream)"],
        exams: ["College Specific Entrance", "Portfolio Review", "Merit"],
        skills: ["Drawing", "Color Theory", "Creativity", "Artistic Expression"],
        outcomes: ["Professional Artist", "Art Director", "Illustrator", "Art Teacher"],
        salaryRange: "₹3.0L - ₹10.0L PA",
        growthData: [{year: 0, salary: 3}, {year: 2, salary: 5}, {year: 5, salary: 10}, {year: 10, salary: 18}]
      },
      {
        id: "animation_vfx",
        title: "Animation & VFX",
        description: "Create digital characters, environments, and visual effects for films and games.",
        icon: "Gamepad2",
        imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
        duration: "3 Years (B.Sc / B.Voc)",
        qualifications: ["10+2 (Any stream)"],
        exams: ["Merit-based", "Aptitude Tests"],
        skills: ["3D Modeling", "Character Animation", "Storyboarding", "Digital Sculpting"],
        outcomes: ["Animator", "VFX Artist", "Game Designer", "Motion Graphics Artist"],
        salaryRange: "₹4.0L - ₹15.0L PA",
        growthData: [{year: 0, salary: 4}, {year: 2, salary: 7}, {year: 5, salary: 14}, {year: 10, salary: 28}]
      }
    ]
  },
  {
    id: "vocational",
    title: "Vocational & Technical (Early Job Entry)",
    category: "Vocational",
    description: "Skill-based courses designed for immediate employment after 10th grade.",
    subjects: ["Trade-specific practicals", "Basic Mathematics", "Communication Skills"],
    paths: [
      {
        id: "paramedical_voc",
        title: "Vocational Paramedical (MLT/Nursing)",
        description: "Direct entry into healthcare support roles like Medical Lab Tech or Assistant Nursing.",
        icon: "Activity",
        imageUrl: "https://images.unsplash.com/photo-1579154234431-30146296305d?auto=format&fit=crop&w=800&q=80",
        duration: "2 Years",
        qualifications: ["10th Pass"],
        exams: ["State Vocational Board Exams"],
        skills: ["Sample Collection", "Basic Nursing", "Lab Equipment Handling", "Patient Care"],
        outcomes: ["Lab Technician", "Nursing Assistant", "Health Worker"],
        salaryRange: "₹1.8L - ₹3.6L PA",
        growthData: [{year: 0, salary: 1.8}, {year: 2, salary: 2.5}, {year: 5, salary: 4.5}, {year: 10, salary: 8}]
      },
      {
        id: "office_management",
        title: "Office Management & Secretarial Practice",
        description: "Learn administrative skills, accounting, and office operations for corporate roles.",
        icon: "ClipboardList",
        imageUrl: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
        duration: "2 Years",
        qualifications: ["10th Pass"],
        exams: ["State Vocational Board Exams"],
        skills: ["Typing", "Tally/Accounting", "Communication", "Office Software"],
        outcomes: ["Office Assistant", "Data Entry Operator", "Junior Accountant"],
        salaryRange: "₹1.5L - ₹3.0L PA",
        growthData: [{year: 0, salary: 1.5}, {year: 2, salary: 2.2}, {year: 5, salary: 4}, {year: 10, salary: 7}]
      },
      {
        id: "polytechnic",
        title: "Polytechnic Diploma",
        description: "3-year engineering diplomas. Can lead to jobs or lateral entry directly into 2nd year B.Tech.",
        icon: "Building",
        imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
        duration: "3 Years",
        qualifications: ["10th Pass"],
        exams: ["State Polytechnic Entrance (e.g., POLYCET)"],
        skills: ["Technical Drawing", "Practical Engineering", "Machine Operation"],
        outcomes: ["Junior Engineer", "Technician", "Lateral Entry to B.Tech"],
        salaryRange: "₹2.4L - ₹4.8L PA",
        growthData: [{year: 0, salary: 2.4}, {year: 2, salary: 3.5}, {year: 5, salary: 6}, {year: 10, salary: 10}]
      },
      {
        id: "iti",
        title: "ITI (Industrial Training Institute)",
        description: "Short-term trades focusing on hands-on industrial skills.",
        icon: "Wrench",
        imageUrl: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
        duration: "6 Months - 2 Years",
        qualifications: ["10th Pass"],
        exams: ["Merit-based", "State ITI Entrance"],
        skills: ["Manual Dexterity", "Tool Operation", "Safety Protocols"],
        outcomes: ["Electrician", "Fitter", "Mechanic", "Computer Operator (COPA)"],
        salaryRange: "₹1.8L - ₹3.6L PA",
        growthData: [{year: 0, salary: 1.8}, {year: 2, salary: 2.5}, {year: 5, salary: 4}, {year: 10, salary: 7}]
      },
      {
        id: "skill_india",
        title: "NSDC / Skill India Certificates",
        description: "Short-term certifications for immediate entry into retail, healthcare, or digital roles.",
        icon: "Award",
        imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
        duration: "3 - 12 Months",
        qualifications: ["10th Pass"],
        exams: ["Direct Admission / Basic Aptitude"],
        skills: ["Customer Service", "Basic Digital Literacy", "Trade-specific skills"],
        outcomes: ["Digital Marketer (Entry)", "Healthcare Assistant (GDA)", "Retail Associate", "Beauty/Wellness Expert"],
        salaryRange: "₹1.5L - ₹3.0L PA",
        growthData: [{year: 0, salary: 1.5}, {year: 2, salary: 2.5}, {year: 5, salary: 4.5}, {year: 10, salary: 8}]
      }
    ]
  }
];

export const after12thStreams: Stream[] = [
  {
    id: "eng_tech",
    title: "Engineering & Technology",
    category: "Science",
    description: "For students who completed 12th with PCM. Focuses on technical innovation and problem-solving.",
    paths: [
      {
        id: "btech_cs",
        title: "Computer Science & AI",
        description: "Software development, machine learning, and cybersecurity.",
        icon: "Code",
        imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
        duration: "4 Years",
        qualifications: ["12th with PCM"],
        exams: ["JEE Main", "JEE Advanced", "BITSAT", "VITEEE"],
        skills: ["Logic", "Coding", "Maths"],
        outcomes: ["Software Engineer", "AI Specialist", "Data Scientist", "Cybersecurity Analyst", "Cloud Architect"],
        salaryRange: "₹6.0L - ₹25.0L PA",
        growthData: [{year: 0, salary: 6}, {year: 2, salary: 12}, {year: 5, salary: 25}, {year: 10, salary: 50}],
        studyAbroad: [
          { country: "USA", university: "MIT", course: "MS in Computer Science" },
          { country: "Germany", university: "TU Munich", course: "MSc in Informatics" }
        ]
      },
      {
        id: "btech_mech",
        title: "Mechanical Engineering",
        description: "Design and manufacturing of mechanical systems and machinery.",
        icon: "Wrench",
        imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
        duration: "4 Years",
        qualifications: ["12th with PCM"],
        exams: ["JEE Main", "State CETs"],
        skills: ["Thermodynamics", "CAD", "Manufacturing"],
        outcomes: ["Mechanical Engineer", "Automotive Engineer", "Robotics Engineer", "Manufacturing Engineer", "Aerospace Engineer"],
        salaryRange: "₹4.0L - ₹12.0L PA",
        growthData: [{year: 0, salary: 4}, {year: 2, salary: 7}, {year: 5, salary: 14}, {year: 10, salary: 25}],
        studyAbroad: [
          { country: "Germany", university: "RWTH Aachen", course: "MSc in Mechanical Engineering" },
          { country: "USA", university: "Stanford University", course: "MS in Mechanical Engineering" }
        ]
      },
      {
        id: "btech_civil",
        title: "Civil Engineering",
        description: "Planning, designing, and constructing infrastructure like buildings and bridges.",
        icon: "Building",
        imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
        duration: "4 Years",
        qualifications: ["12th with PCM"],
        exams: ["JEE Main", "State CETs"],
        skills: ["Structural Analysis", "Surveying", "Project Management"],
        outcomes: ["Civil Engineer", "Structural Engineer", "Urban Planner", "Construction Manager", "Environmental Engineer"],
        salaryRange: "₹3.5L - ₹10.0L PA",
        growthData: [{year: 0, salary: 3.5}, {year: 2, salary: 6}, {year: 5, salary: 11}, {year: 10, salary: 20}],
        studyAbroad: [
          { country: "Switzerland", university: "ETH Zurich", course: "MSc in Civil Engineering" },
          { country: "UK", university: "Imperial College London", course: "MSc in Structural Engineering" }
        ]
      },
      {
        id: "btech_elec",
        title: "Electrical Engineering",
        description: "Study and application of electricity, electronics, and electromagnetism.",
        icon: "Zap",
        imageUrl: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=80",
        duration: "4 Years",
        qualifications: ["12th with PCM"],
        exams: ["JEE Main", "State CETs"],
        skills: ["Circuit Design", "Power Systems", "Control Systems"],
        outcomes: ["Electrical Engineer", "Power Systems Engineer", "Control Systems Engineer", "Renewable Energy Engineer", "Embedded Systems Engineer"],
        salaryRange: "₹4.5L - ₹14.0L PA",
        growthData: [{year: 0, salary: 4.5}, {year: 2, salary: 8}, {year: 5, salary: 16}, {year: 10, salary: 30}],
        studyAbroad: [
          { country: "USA", university: "UC Berkeley", course: "MS in Electrical Engineering" },
          { country: "Canada", university: "University of Toronto", course: "MASc in Electrical and Computer Engineering" }
        ]
      },
      {
        id: "btech_ece",
        title: "Electronics & Communication",
        description: "Focus on electronic circuits, communication systems, and embedded devices.",
        icon: "Radio",
        imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
        duration: "4 Years",
        qualifications: ["12th with PCM"],
        exams: ["JEE Main", "State CETs"],
        skills: ["Embedded Systems", "Signal Processing", "Communication Protocols"],
        outcomes: ["Electronics Engineer", "Embedded Systems Engineer", "Telecommunications Engineer", "VLSI Design Engineer", "Network Engineer"],
        salaryRange: "₹5.0L - ₹16.0L PA",
        growthData: [{year: 0, salary: 5}, {year: 2, salary: 9}, {year: 5, salary: 18}, {year: 10, salary: 35}],
        studyAbroad: [
          { country: "USA", university: "Georgia Tech", course: "MS in Electrical and Computer Engineering" },
          { country: "Singapore", university: "NUS", course: "MSc in Electrical Engineering" }
        ]
      },
      {
        id: "btech_chem",
        title: "Chemical Engineering",
        description: "Application of chemistry, physics, and biology to industrial processes.",
        icon: "FlaskConical",
        imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9d39d6627?auto=format&fit=crop&w=800&q=80",
        duration: "4 Years",
        qualifications: ["12th with PCM"],
        exams: ["JEE Main", "State CETs"],
        skills: ["Process Control", "Chemical Kinetics", "Thermodynamics"],
        outcomes: ["Chemical Engineer", "Process Engineer", "Petroleum Engineer", "Materials Scientist", "Quality Control Engineer"],
        salaryRange: "₹4.5L - ₹13.0L PA",
        growthData: [{year: 0, salary: 4.5}, {year: 2, salary: 7.5}, {year: 5, salary: 14}, {year: 10, salary: 26}],
        studyAbroad: [
          { country: "USA", university: "MIT", course: "MS in Chemical Engineering" },
          { country: "Netherlands", university: "TU Delft", course: "MSc in Chemical Engineering" }
        ]
      }
    ]
  },
  {
    id: "med_health",
    title: "Medical & Health Sciences",
    category: "Science",
    description: "For students who completed 12th with PCB. Focuses on healing and healthcare.",
    paths: [
      {
        id: "mbbs_bds",
        title: "Medicine & Surgery (MBBS)",
        description: "The primary path to becoming a licensed physician.",
        icon: "Stethoscope",
        imageUrl: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80",
        duration: "5.5 Years",
        qualifications: ["12th with PCB"],
        exams: ["NEET UG"],
        skills: ["Biology", "Empathy", "Stamina"],
        outcomes: ["Physician", "Surgeon", "Dentist", "Medical Researcher", "Hospital Administrator"],
        salaryRange: "₹8.0L - ₹25.0L PA",
        growthData: [{year: 0, salary: 8}, {year: 2, salary: 14}, {year: 5, salary: 28}, {year: 10, salary: 55}],
        studyAbroad: [
          { country: "UK", university: "University of Oxford", course: "MBBS" },
          { country: "USA", university: "Harvard Medical School", course: "MD Program" }
        ]
      },
      {
        id: "bams_bhms",
        title: "AYUSH (BAMS/BHMS)",
        description: "Ayurveda, Homeopathy, Unani, and Siddha medicine systems.",
        icon: "Leaf",
        imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
        duration: "5.5 Years",
        qualifications: ["12th with PCB"],
        exams: ["NEET UG"],
        skills: ["Traditional Medicine", "Patient Care"],
        outcomes: ["Ayurvedic Doctor", "Homeopath", "Wellness Consultant", "Clinical Researcher", "Hospital Administrator"],
        salaryRange: "₹4.0L - ₹10.0L PA",
        growthData: [{year: 0, salary: 4}, {year: 2, salary: 6}, {year: 5, salary: 11}, {year: 10, salary: 20}],
        studyAbroad: [
          { country: "Germany", university: "University of Leipzig", course: "Homeopathy Research" }
        ]
      },
      {
        id: "bpharm",
        title: "Pharmacy (B.Pharm)",
        description: "Study of drug development, chemical properties, and clinical use.",
        icon: "Pill",
        imageUrl: "https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?auto=format&fit=crop&w=800&q=80",
        duration: "4 Years",
        qualifications: ["12th with PCB"],
        exams: ["NEET UG", "State Entrances"],
        skills: ["Chemistry", "Research", "Attention to Detail"],
        outcomes: ["Pharmacist", "Drug Researcher", "Clinical Research Associate", "Quality Control Analyst", "Regulatory Affairs Specialist"],
        salaryRange: "₹3.0L - ₹8.0L PA",
        growthData: [{year: 0, salary: 3}, {year: 2, salary: 5}, {year: 5, salary: 9}, {year: 10, salary: 16}],
        studyAbroad: [
          { country: "USA", university: "Purdue University", course: "PharmD" },
          { country: "Australia", university: "Monash University", course: "Bachelor of Pharmacy" }
        ]
      },
      {
        id: "bsc_nursing",
        title: "B.Sc Nursing",
        description: "Professional healthcare role focusing on patient care and recovery.",
        icon: "HeartPulse",
        imageUrl: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80",
        duration: "4 Years",
        qualifications: ["12th with PCB"],
        exams: ["NEET UG", "State Entrances"],
        skills: ["Patient Care", "Medical Knowledge", "Empathy"],
        outcomes: ["Registered Nurse", "Nurse Educator", "Hospital Administrator", "Public Health Nurse", "Clinical Nurse Specialist"],
        salaryRange: "₹3.0L - ₹7.0L PA",
        growthData: [{year: 0, salary: 3}, {year: 2, salary: 4.5}, {year: 5, salary: 8}, {year: 10, salary: 15}],
        studyAbroad: [
          { country: "Canada", university: "University of Toronto", course: "BSc Nursing" },
          { country: "Australia", university: "University of Melbourne", course: "Bachelor of Nursing" }
        ]
      }
    ]
  },
  {
    id: "comm_fin",
    title: "Commerce & Finance",
    category: "Commerce",
    description: "For students from any stream (Commerce preferred). Focuses on wealth and business.",
    paths: [
      {
        id: "ca_cs",
        title: "Chartered Accountancy (CA)",
        description: "Expertise in auditing, taxation, and financial accounting.",
        icon: "Calculator",
        imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
        duration: "4.5 - 5 Years",
        qualifications: ["12th Pass"],
        exams: ["CA Foundation", "Intermediate", "Final"],
        skills: ["Accounting", "Law", "Ethics"],
        outcomes: ["Chartered Accountant", "Auditor", "Tax Consultant", "Financial Advisor", "Corporate Secretary"],
        salaryRange: "₹8.0L - ₹20.0L PA",
        growthData: [{year: 0, salary: 8}, {year: 2, salary: 14}, {year: 5, salary: 28}, {year: 10, salary: 55}],
        studyAbroad: [
          { country: "UK", university: "ICAEW", course: "Chartered Accountancy" },
          { country: "Canada", university: "CPA Canada", course: "Professional Accounting" }
        ]
      },
      {
        id: "bcom_hons",
        title: "B.Com (Hons) / B.Econ",
        description: "In-depth study of business, trade, and economic theories.",
        icon: "TrendingUp",
        imageUrl: "https://images.unsplash.com/photo-1611974714024-46202e33bc36?auto=format&fit=crop&w=800&q=80",
        duration: "3 Years",
        qualifications: ["12th Pass"],
        exams: ["CUET", "Merit"],
        skills: ["Economics", "Analysis", "Maths"],
        outcomes: ["Financial Analyst", "Economist", "Investment Banker", "Market Researcher", "Business Consultant"],
        salaryRange: "₹4.0L - ₹12.0L PA",
        growthData: [{year: 0, salary: 4}, {year: 2, salary: 7}, {year: 5, salary: 14}, {year: 10, salary: 28}],
        studyAbroad: [
          { country: "UK", university: "LSE", course: "BSc Economics" },
          { country: "USA", university: "University of Chicago", course: "BA Economics" }
        ]
      },
      {
        id: "cfa_frm",
        title: "Professional Finance (CFA/FRM)",
        description: "Global certifications for investment analysis and risk management.",
        icon: "TrendingUp",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        duration: "2 - 3 Years",
        qualifications: ["Graduate (Any stream)"],
        exams: ["CFA Institute Exams", "GARP Exams"],
        skills: ["Investment Analysis", "Risk Assessment"],
        outcomes: ["Portfolio Manager", "Risk Analyst", "Investment Consultant", "Wealth Manager", "Financial Controller"],
        salaryRange: "₹10.0L - ₹30.0L+ PA",
        growthData: [{year: 0, salary: 10}, {year: 2, salary: 18}, {year: 5, salary: 35}, {year: 10, salary: 65}],
        studyAbroad: [
          { country: "Global", university: "CFA Institute", course: "CFA Program" }
        ]
      }
    ]
  },
  {
    id: "mgmt_law",
    title: "Management & Law",
    category: "Humanities",
    description: "Professional degrees focusing on leadership and legal frameworks.",
    paths: [
      {
        id: "ipm_bba",
        title: "Integrated Management (IPM)",
        description: "5-year combined BBA+MBA program at top IIMs.",
        icon: "Briefcase",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        duration: "5 Years",
        qualifications: ["12th Pass"],
        exams: ["IPMAT", "JIPMAT"],
        skills: ["Leadership", "Strategy"],
        outcomes: ["Manager", "Consultant", "Marketing Manager", "Entrepreneur", "Operations Manager"],
        salaryRange: "₹12.0L - ₹30.0L PA",
        growthData: [{year: 0, salary: 12}, {year: 2, salary: 20}, {year: 5, salary: 38}, {year: 10, salary: 75}],
        studyAbroad: [
          { country: "France", university: "INSEAD", course: "Management Program" },
          { country: "USA", university: "Wharton School", course: "BBA" }
        ]
      },
      {
        id: "bba_standalone",
        title: "BBA (Standalone)",
        description: "3-year undergraduate management degree.",
        icon: "Briefcase",
        imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
        duration: "3 Years",
        qualifications: ["12th Pass"],
        exams: ["CUET", "Merit"],
        skills: ["Management", "Communication"],
        outcomes: ["Business Executive", "Entrepreneur", "Sales Manager", "Marketing Coordinator", "HR Assistant"],
        salaryRange: "₹3.0L - ₹8.0L PA",
        growthData: [{year: 0, salary: 3}, {year: 2, salary: 5}, {year: 5, salary: 10}, {year: 10, salary: 18}],
        studyAbroad: [
          { country: "UK", university: "Warwick Business School", course: "BSc Management" },
          { country: "Australia", university: "University of Melbourne", course: "Bachelor of Commerce" }
        ]
      },
      {
        id: "ballb",
        title: "Integrated Law (BA/BBA LLB)",
        description: "5-year combined degree for legal practice.",
        icon: "Scale",
        imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
        duration: "5 Years",
        qualifications: ["12th Pass"],
        exams: ["CLAT", "AILET", "LSAT"],
        skills: ["Reasoning", "Writing"],
        outcomes: ["Lawyer", "Legal Advisor", "Corporate Counsel", "Judge", "Mediator"],
        salaryRange: "₹6.0L - ₹18.0L PA",
        growthData: [{year: 0, salary: 6}, {year: 2, salary: 10}, {year: 5, salary: 20}, {year: 10, salary: 40}],
        studyAbroad: [
          { country: "UK", university: "King's College London", course: "LLB" },
          { country: "USA", university: "Harvard Law School", course: "LLM" }
        ]
      }
    ]
  },
  {
    id: "design_arts",
    title: "Design & Creative Arts",
    category: "Arts",
    description: "For creative minds looking to build careers in visual and functional arts.",
    paths: [
      {
        id: "bdes",
        title: "Bachelor of Design (B.Des)",
        description: "Fashion, Product, Graphic, and Interior design.",
        icon: "PenTool",
        imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
        duration: "4 Years",
        qualifications: ["12th Pass"],
        exams: ["NID DAT", "UCEED", "NIFT"],
        skills: ["Creativity", "Visual Thinking"],
        outcomes: ["Designer", "Creative Director", "UI/UX Designer", "Product Designer", "Graphic Designer"],
        salaryRange: "₹5.0L - ₹15.0L PA",
        growthData: [{year: 0, salary: 5}, {year: 2, salary: 9}, {year: 5, salary: 18}, {year: 10, salary: 35}],
        studyAbroad: [
          { country: "Italy", university: "Politecnico di Milano", course: "BDes Product Design" },
          { country: "UK", university: "UAL", course: "BA Graphic Design" }
        ]
      },
      {
        id: "fashion_design",
        title: "Fashion Design",
        description: "Design and creation of clothing and accessories.",
        icon: "Scissors",
        imageUrl: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
        duration: "4 Years",
        qualifications: ["12th Pass"],
        exams: ["NIFT", "Merit"],
        skills: ["Textile Design", "Sketching", "Trend Analysis"],
        outcomes: ["Fashion Designer", "Stylist", "Textile Designer", "Fashion Merchandiser", "Costume Designer"],
        salaryRange: "₹3.0L - ₹10.0L PA",
        growthData: [{year: 0, salary: 3}, {year: 2, salary: 5}, {year: 5, salary: 10}, {year: 10, salary: 18}],
        studyAbroad: [
          { country: "France", university: "Parsons Paris", course: "BFA Fashion Design" },
          { country: "Italy", university: "Istituto Marangoni", course: "Fashion Design" }
        ]
      },
      {
        id: "interior_design",
        title: "Interior Design",
        description: "Planning and designing interior spaces.",
        icon: "Home",
        imageUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
        duration: "3 - 4 Years",
        qualifications: ["12th Pass"],
        exams: ["Merit", "Entrance"],
        skills: ["Space Planning", "CAD", "Aesthetics"],
        outcomes: ["Interior Designer", "Space Planner", "Furniture Designer", "Lighting Designer", "Project Manager"],
        salaryRange: "₹3.0L - ₹9.0L PA",
        growthData: [{year: 0, salary: 3}, {year: 2, salary: 5}, {year: 5, salary: 9}, {year: 10, salary: 16}],
        studyAbroad: [
          { country: "UK", university: "Royal College of Art", course: "MA Interior Design" },
          { country: "USA", university: "RISD", course: "BFA Interior Architecture" }
        ]
      },
      {
        id: "bfa_animation",
        title: "Fine Arts & Animation",
        description: "Traditional arts and digital animation.",
        icon: "Palette",
        imageUrl: "https://images.unsplash.com/photo-1460661419201-fd4ce18a802f?auto=format&fit=crop&w=800&q=80",
        duration: "3 - 4 Years",
        qualifications: ["12th Pass"],
        exams: ["Merit", "Portfolio"],
        skills: ["Drawing", "Digital Tools"],
        outcomes: ["Artist", "Animator", "VFX Artist", "Game Designer", "Motion Graphics Artist"],
        salaryRange: "₹3.5L - ₹10.0L PA",
        growthData: [{year: 0, salary: 3.5}, {year: 2, salary: 6}, {year: 5, salary: 12}, {year: 10, salary: 22}],
        studyAbroad: [
          { country: "USA", university: "CalArts", course: "BFA Character Animation" },
          { country: "Canada", university: "Sheridan College", course: "Bachelor of Animation" }
        ]
      }
    ]
  },
  {
    id: "pure_sci",
    title: "Pure Sciences & Research",
    category: "Science",
    description: "For students passionate about fundamental science and discovery.",
    paths: [
      {
        id: "bs_ms",
        title: "Integrated BS-MS",
        description: "5-year research-focused degree at IISERs and NISER.",
        icon: "FlaskConical",
        imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9d39d6627?auto=format&fit=crop&w=800&q=80",
        duration: "5 Years",
        qualifications: ["12th with Science"],
        exams: ["IISER IAT", "NEST"],
        skills: ["Research", "Analytical Thinking"],
        outcomes: ["Scientist", "Researcher"],
        salaryRange: "₹6.0L - ₹15.0L PA",
        growthData: [{year: 0, salary: 6}, {year: 2, salary: 10}, {year: 5, salary: 18}, {year: 10, salary: 32}]
      },
      {
        id: "integrated_msc",
        title: "Integrated M.Sc",
        description: "5-year program for in-depth specialization in sciences.",
        icon: "FlaskConical",
        imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9d39d6627?auto=format&fit=crop&w=800&q=80",
        duration: "5 Years",
        qualifications: ["12th with Science"],
        exams: ["CUET", "Merit"],
        skills: ["Advanced Science", "Research"],
        outcomes: ["Scientist", "Researcher"],
        salaryRange: "₹5.0L - ₹12.0L PA",
        growthData: [{year: 0, salary: 5}, {year: 2, salary: 8}, {year: 5, salary: 14}, {year: 10, salary: 25}]
      },
      {
        id: "bsc_hons",
        title: "B.Sc (Hons) Specializations",
        description: "Specialized study in Physics, Chemistry, Maths, or Biology.",
        icon: "Microscope",
        imageUrl: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80",
        duration: "3 - 4 Years",
        qualifications: ["12th with Science"],
        exams: ["CUET", "Merit"],
        skills: ["Scientific Logic", "Lab Work"],
        outcomes: ["Academician", "Lab Manager", "Research Assistant", "Quality Control Specialist", "Science Communicator"],
        salaryRange: "₹3.0L - ₹8.0L PA",
        growthData: [{year: 0, salary: 3}, {year: 2, salary: 4.5}, {year: 5, salary: 8}, {year: 10, salary: 15}]
      }
    ]
  },
  {
    id: "humanities_social",
    title: "Humanities & Social Sciences",
    category: "Humanities",
    description: "Study of human society, culture, and behavior.",
    paths: [
      {
        id: "ba_psych",
        title: "Psychology & Counseling",
        description: "Understanding mental processes and behavior.",
        icon: "Brain",
        imageUrl: "https://images.unsplash.com/photo-1526232761682-d26e4f9c60e4?auto=format&fit=crop&w=800&q=80",
        duration: "3 Years",
        qualifications: ["12th Pass"],
        exams: ["CUET", "Merit"],
        skills: ["Empathy", "Listening"],
        outcomes: ["Counselor", "HR Manager", "Clinical Psychologist", "User Researcher", "Behavioral Therapist"],
        salaryRange: "₹3.5L - ₹10.0L PA",
        growthData: [{year: 0, salary: 3.5}, {year: 2, salary: 5.5}, {year: 5, salary: 11}, {year: 10, salary: 20}],
        studyAbroad: [
          { country: "USA", university: "Stanford University", course: "PhD in Psychology" },
          { country: "UK", university: "University of Edinburgh", course: "MSc Psychology" }
        ]
      },
      {
        id: "ba_sociology",
        title: "Sociology",
        description: "Study of society, social structures, and interactions.",
        icon: "Users",
        imageUrl: "https://images.unsplash.com/photo-1523050335392-9bc567597280?auto=format&fit=crop&w=800&q=80",
        duration: "3 Years",
        qualifications: ["12th Pass"],
        exams: ["CUET", "Merit"],
        skills: ["Social Analysis", "Research"],
        outcomes: ["Social Worker", "Policy Analyst", "Community Organizer", "Researcher", "HR Specialist"],
        salaryRange: "₹3.0L - ₹8.0L PA",
        growthData: [{year: 0, salary: 3}, {year: 2, salary: 4.5}, {year: 5, salary: 8}, {year: 10, salary: 15}],
        studyAbroad: [
          { country: "UK", university: "LSE", course: "MSc Sociology" },
          { country: "USA", university: "University of Chicago", course: "MA Sociology" }
        ]
      },
      {
        id: "ba_history",
        title: "History",
        description: "Study of past events, cultures, and civilizations.",
        icon: "BookOpen",
        imageUrl: "https://images.unsplash.com/photo-1461360228754-6e81c478b882?auto=format&fit=crop&w=800&q=80",
        duration: "3 Years",
        qualifications: ["12th Pass"],
        exams: ["CUET", "Merit"],
        skills: ["Critical Analysis", "Research"],
        outcomes: ["Historian", "Teacher", "Archivist", "Museum Curator", "Journalist"],
        salaryRange: "₹3.0L - ₹8.0L PA",
        growthData: [{year: 0, salary: 3}, {year: 2, salary: 4.5}, {year: 5, salary: 8}, {year: 10, salary: 15}],
        studyAbroad: [
          { country: "UK", university: "University of Oxford", course: "MSt History" },
          { country: "USA", university: "Yale University", course: "PhD History" }
        ]
      },
      {
        id: "ba_econ_pol",
        title: "Economics & Political Science",
        description: "Study of power, markets, and governance.",
        icon: "Globe",
        imageUrl: "https://images.unsplash.com/photo-1523050335392-9bc567597280?auto=format&fit=crop&w=800&q=80",
        duration: "3 Years",
        qualifications: ["12th Pass"],
        exams: ["CUET", "Merit"],
        skills: ["Critical Thinking", "Writing"],
        outcomes: ["Policy Analyst", "Journalist", "Political Consultant", "Economist", "Public Relations Specialist"],
        salaryRange: "₹4.0L - ₹12.0L PA",
        growthData: [{year: 0, salary: 4}, {year: 2, salary: 6.5}, {year: 5, salary: 12}, {year: 10, salary: 22}],
        studyAbroad: [
          { country: "UK", university: "University of Cambridge", course: "MPhil Economics" },
          { country: "USA", university: "Princeton University", course: "PhD Political Science" }
        ]
      }
    ]
  },
  {
    id: "media_hospitality",
    title: "Media & Hospitality",
    category: "Humanities",
    description: "Dynamic careers in communication, travel, and service industries.",
    paths: [
      {
        id: "bjmc",
        title: "Journalism & Mass Comm",
        description: "Reporting, digital media, and public relations.",
        icon: "Mic",
        imageUrl: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=800&q=80",
        duration: "3 Years",
        qualifications: ["12th Pass"],
        exams: ["CUET", "IIMC Entrance"],
        skills: ["Storytelling", "Communication"],
        outcomes: ["Journalist", "PR Specialist", "Digital Content Creator", "Media Planner", "News Anchor"],
        salaryRange: "₹4.0L - ₹10.0L PA",
        growthData: [{year: 0, salary: 4}, {year: 2, salary: 6}, {year: 5, salary: 11}, {year: 10, salary: 20}],
        studyAbroad: [
          { country: "USA", university: "Columbia University", course: "MS Journalism" },
          { country: "UK", university: "Goldsmiths, UoL", course: "MA Media & Comm" }
        ]
      },
      {
        id: "film_tv",
        title: "Film & TV Production",
        description: "Creative and technical aspects of film and television production.",
        icon: "Film",
        imageUrl: "https://images.unsplash.com/photo-1574267432553-4b4628081c44?auto=format&fit=crop&w=800&q=80",
        duration: "3 Years",
        qualifications: ["12th Pass"],
        exams: ["Merit", "Entrance"],
        skills: ["Direction", "Editing", "Creativity"],
        outcomes: ["Film Director", "Editor", "Cinematographer", "Producer", "Screenwriter"],
        salaryRange: "₹3.0L - ₹12.0L PA",
        growthData: [{year: 0, salary: 3}, {year: 2, salary: 5.5}, {year: 5, salary: 12}, {year: 10, salary: 25}],
        studyAbroad: [
          { country: "USA", university: "NYU Tisch", course: "BFA Film" },
          { country: "UK", university: "NFTS", course: "MA Film Production" }
        ]
      },
      {
        id: "bhm",
        title: "Hotel Management",
        description: "Managing global hospitality and travel operations.",
        icon: "Utensils",
        imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        duration: "3 - 4 Years",
        qualifications: ["12th Pass"],
        exams: ["NCHMCT JEE"],
        skills: ["Customer Service", "Management"],
        outcomes: ["Hotel Manager", "Chef", "Event Planner", "Travel Consultant", "Restaurant Manager"],
        salaryRange: "₹3.5L - ₹12.0L PA",
        growthData: [{year: 0, salary: 3.5}, {year: 2, salary: 6}, {year: 5, salary: 12}, {year: 10, salary: 22}],
        studyAbroad: [
          { country: "Switzerland", university: "EHL Hospitality Business School", course: "BSc International Hospitality" },
          { country: "Australia", university: "Griffith University", course: "Bachelor of International Tourism" }
        ]
      }
    ]
  },
  {
    id: "agri_vet",
    title: "Agriculture & Veterinary",
    category: "Science",
    description: "Focus on animal health, crop science, and agricultural technology.",
    paths: [
      {
        id: "bsc_agri",
        title: "B.Sc Agriculture",
        description: "Study of crop production, soil science, and agricultural management.",
        icon: "Leaf",
        imageUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
        duration: "4 Years",
        qualifications: ["12th with PCB/PCMB"],
        exams: ["ICAR AIEEA", "State Agri Entrances"],
        skills: ["Botany", "Field Work", "Research"],
        outcomes: ["Agricultural Officer", "Agro-researcher", "Farm Manager", "Food Safety Inspector", "Agricultural Consultant"],
        salaryRange: "₹3.0L - ₹8.0L PA",
        growthData: [{year: 0, salary: 3}, {year: 2, salary: 4.5}, {year: 5, salary: 8}, {year: 10, salary: 15}],
        studyAbroad: [
          { country: "Australia", university: "University of Queensland", course: "Bachelor of Agricultural Science" },
          { country: "Canada", university: "University of Guelph", course: "BSc Agriculture" }
        ]
      },
      {
        id: "bvsc",
        title: "Veterinary Science (B.V.Sc)",
        description: "Medical care for animals and livestock management.",
        icon: "Dog",
        imageUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80",
        duration: "5.5 Years",
        qualifications: ["12th with PCB"],
        exams: ["NEET UG"],
        skills: ["Animal Care", "Surgery", "Biology"],
        outcomes: ["Veterinarian", "Animal Researcher", "Livestock Manager", "Wildlife Conservationist", "Public Health Officer"],
        salaryRange: "₹5.0L - ₹15.0L PA",
        growthData: [{year: 0, salary: 5}, {year: 2, salary: 8.5}, {year: 5, salary: 16}, {year: 10, salary: 30}],
        studyAbroad: [
          { country: "UK", university: "Royal Veterinary College", course: "BVetMed" },
          { country: "Australia", university: "University of Sydney", course: "Doctor of Veterinary Medicine" }
        ]
      }
    ]
  },
  {
    id: "paramedical",
    title: "Paramedical & Allied Health",
    category: "Science",
    description: "Crucial healthcare roles supporting doctors.",
    paths: [
      {
        id: "bpt",
        title: "Physiotherapy (BPT)",
        description: "Rehabilitation and physical therapy for patients.",
        icon: "Activity",
        imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
        duration: "4.5 Years",
        qualifications: ["12th with PCB"],
        exams: ["NEET UG", "State Entrances"],
        skills: ["Anatomy", "Patient Care", "Stamina"],
        outcomes: ["Physiotherapist", "Sports Therapist", "Rehabilitation Specialist", "Ergonomist", "Clinical Physiotherapist"],
        salaryRange: "₹3.0L - ₹8.0L PA",
        growthData: [{year: 0, salary: 3}, {year: 2, salary: 4.5}, {year: 5, salary: 8}, {year: 10, salary: 15}],
        studyAbroad: [
          { country: "Australia", university: "University of Sydney", course: "Bachelor of Physiotherapy" },
          { country: "UK", university: "University of Birmingham", course: "BSc Physiotherapy" }
        ]
      },
      {
        id: "bmlt",
        title: "Medical Lab Tech (BMLT)",
        description: "Diagnostic testing and laboratory analysis.",
        icon: "FlaskConical",
        imageUrl: "https://images.unsplash.com/photo-1579154234431-30146296305d?auto=format&fit=crop&w=800&q=80",
        duration: "3 Years",
        qualifications: ["12th with PCB"],
        exams: ["Merit", "State Entrances"],
        skills: ["Lab Equipment", "Chemistry", "Attention to Detail"],
        outcomes: ["Lab Technician", "Diagnostic Specialist", "Pathology Assistant", "Quality Control Analyst", "Research Assistant"],
        salaryRange: "₹2.5L - ₹6.0L PA",
        growthData: [{year: 0, salary: 2.5}, {year: 2, salary: 3.5}, {year: 5, salary: 6}, {year: 10, salary: 10}],
        studyAbroad: [
          { country: "Canada", university: "University of Alberta", course: "BSc Medical Laboratory Science" },
          { country: "USA", university: "University of Minnesota", course: "BS Medical Laboratory Science" }
        ]
      }
    ]
  },
  {
    id: "aviation_navy",
    title: "Aviation & Merchant Navy",
    category: "Science",
    description: "Careers in the skies and on the high seas.",
    paths: [
      {
        id: "aviation",
        title: "Aviation / Pilot Training",
        description: "Commercial pilot training and aviation management.",
        icon: "Plane",
        imageUrl: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=800&q=80",
        duration: "1.5 - 3 Years",
        qualifications: ["12th with PCM"],
        exams: ["DGCA Exams", "Entrance"],
        skills: ["Navigation", "Decision Making"],
        outcomes: ["Commercial Pilot", "Aviation Manager", "Flight Instructor", "Ground Operations Manager", "Aviation Safety Officer"],
        salaryRange: "₹10.0L - ₹30.0L+ PA",
        growthData: [{year: 0, salary: 10}, {year: 2, salary: 18}, {year: 5, salary: 35}, {year: 10, salary: 70}],
        studyAbroad: [
          { country: "USA", university: "Embry-Riddle Aeronautical University", course: "BS Aeronautical Science" },
          { country: "UK", university: "Cranfield University", course: "MSc Air Transport Management" }
        ]
      },
      {
        id: "merchant_navy",
        title: "Merchant Navy",
        description: "Nautical science and marine engineering for commercial shipping.",
        icon: "Anchor",
        imageUrl: "https://images.unsplash.com/photo-1544945582-3b466d874eac?auto=format&fit=crop&w=800&q=80",
        duration: "3 - 4 Years",
        qualifications: ["12th with PCM"],
        exams: ["IMU-CET"],
        skills: ["Navigation", "Engineering"],
        outcomes: ["Deck Officer", "Marine Engineer", "Captain", "Port Manager", "Logistics Specialist"],
        salaryRange: "₹6.0L - ₹25.0L+ PA",
        growthData: [{year: 0, salary: 6}, {year: 2, salary: 12}, {year: 5, salary: 25}, {year: 10, salary: 50}],
        studyAbroad: [
          { country: "Singapore", university: "Singapore Maritime Academy", course: "Diploma in Nautical Studies" },
          { country: "UK", university: "Solent University", course: "BSc Merchant Navy" }
        ]
      }
    ]
  },
  {
    id: "edu_sports",
    title: "Education & Sports",
    category: "Humanities",
    description: "Careers in teaching, training, and sports management.",
    paths: [
      {
        id: "bed_integrated",
        title: "Integrated B.Ed / B.El.Ed",
        description: "Professional training for teaching in schools.",
        icon: "BookOpen",
        imageUrl: "https://images.unsplash.com/photo-1503676260728-1c09da09476b?auto=format&fit=crop&w=800&q=80",
        duration: "4 Years",
        qualifications: ["12th Pass"],
        exams: ["CUET", "State Entrances"],
        skills: ["Teaching", "Communication", "Patience"],
        outcomes: ["School Teacher", "Educational Consultant", "Curriculum Developer", "Academic Administrator", "Special Education Teacher"],
        salaryRange: "₹2.5L - ₹6.0L PA",
        growthData: [{year: 0, salary: 2.5}, {year: 2, salary: 3.5}, {year: 5, salary: 6}, {year: 10, salary: 10}],
        studyAbroad: [
          { country: "USA", university: "Teachers College, Columbia University", course: "MA Education" },
          { country: "UK", university: "UCL Institute of Education", course: "MA Education" }
        ]
      },
      {
        id: "bped",
        title: "Physical Education (B.P.Ed)",
        description: "Sports training, coaching, and physical fitness management.",
        icon: "Dumbbell",
        imageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80",
        duration: "3 - 4 Years",
        qualifications: ["12th Pass"],
        exams: ["Merit", "Physical Aptitude Test"],
        skills: ["Sports Coaching", "Fitness Management"],
        outcomes: ["Sports Coach", "Physical Trainer", "Fitness Consultant", "Athletic Director", "Recreation Manager"],
        salaryRange: "₹2.0L - ₹6.0L PA",
        growthData: [{year: 0, salary: 2}, {year: 2, salary: 3.5}, {year: 5, salary: 7}, {year: 10, salary: 14}]
      }
    ]
  }
];
