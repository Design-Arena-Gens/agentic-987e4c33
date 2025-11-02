'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, GraduationCap, Building2, Briefcase, TrendingUp, Award, BookOpen, DollarSign, Target, CheckCircle2 } from 'lucide-react';

interface PathDetails {
  title: string;
  icon: any;
  category: string;
  estimatedSalary: string;
  scCategoryAdvantage: string;
  successProbability: string;
  timeCommitment: string;
  overview: string;
  eligibility: string[];
  preparation: string[];
  examDetails: string[];
  colleges: string[];
  careerGrowth: string[];
  pros: string[];
  cons: string[];
  actionPlan: string[];
  resources: string[];
  costs: string;
}

const careerPaths: PathDetails[] = [
  {
    title: "GATE → M.Tech CSE (IITs/NITs)",
    icon: GraduationCap,
    category: "Higher Education",
    estimatedSalary: "₹12-25 LPA (Starting) | ₹30-50+ LPA (3-5 years)",
    scCategoryAdvantage: "Significant: Reserved seats (15% in IITs, 15% in NITs), Lower cutoff marks, Fee concessions/scholarships available",
    successProbability: "High (75-80%) with consistent preparation for 6-8 months",
    timeCommitment: "6-8 months preparation + 2 years M.Tech",
    overview: "GATE is the premier entrance exam for M.Tech admissions in India's top institutions. With your 8.7 CGPA and SC category benefits, you have excellent chances of securing admission to IITs/NITs in CSE specializations like AI/ML, Data Science, Computer Vision.",
    eligibility: [
      "B.Tech in AI/ML (You qualify ✓)",
      "Valid GATE score in CS/DA paper",
      "Minimum 60% aggregate (55% for SC - You exceed this ✓)",
      "No age limit"
    ],
    examDetails: [
      "Exam Pattern: 65 questions (100 marks), 3 hours duration",
      "Sections: General Aptitude (15%), Engineering Math (13%), Core CSE (72%)",
      "Marking: MCQs (1 or 2 marks) + NAT (no negative marking)",
      "Exam Date: Usually February (Register by September-October)",
      "Score Validity: 3 years",
      "SC Category: Qualifying marks ~25/100 for top IITs"
    ],
    colleges: [
      "IIT Bombay CSE/AI - GATE Score 700+ (SC cutoff ~550-600)",
      "IIT Delhi CSE/AI - GATE Score 680+ (SC cutoff ~530-580)",
      "IIT Madras CSE/Data Science - GATE Score 670+ (SC cutoff ~520-570)",
      "IIT Kanpur CSE - GATE Score 650+ (SC cutoff ~500-550)",
      "IIT Kharagpur CSE/AI - GATE Score 630+ (SC cutoff ~480-530)",
      "IIIT Hyderabad CSE/ML - GATE Score 700+ (Limited seats)",
      "NIT Trichy CSE - GATE Score 600+ (SC cutoff ~450-500)",
      "NIT Warangal CSE - GATE Score 580+ (SC cutoff ~430-480)",
      "All 31 NITs have M.Tech CSE programs with SC reservation"
    ],
    preparation: [
      "Start 6-8 months before exam (August for February GATE)",
      "Study Plan: 4-6 hours daily",
      "Core Subjects: Data Structures (15%), Algorithms (15%), TOC (10%), OS (10%), DBMS (10%), COA (8%), Digital Logic (5%), Compiler Design (5%)",
      "Engineering Math: Probability (5%), Linear Algebra (5%), Discrete Math (3%)",
      "Focus Areas for AI/ML background: Algorithms, DS, Math",
      "Practice: 15+ previous year papers, 50+ mock tests",
      "Key Resources: GATE Overflow, Made Easy, ACE Academy notes"
    ],
    careerGrowth: [
      "Year 0-2: M.Tech at IIT/NIT with stipend (₹12,400/month for research)",
      "Year 2-3: Placement package ₹15-30 LPA (IIT avg), Top offers: ₹50+ LPA",
      "Year 3-5: Senior SDE roles ₹30-50 LPA in product companies",
      "Year 5-8: Lead/Manager positions ₹50-80 LPA",
      "Research Path: PhD option (stipend ₹31,000-35,000/month) → Professor (₹70k-2L/month)",
      "Companies: Google, Microsoft, Amazon, Meta, Adobe, Oracle, Goldman Sachs",
      "PSU Option: With M.Tech from IIT, direct recruitment to executive positions"
    ],
    pros: [
      "15% reservation + relaxed cutoffs significantly boost chances",
      "IIT/NIT brand opens doors globally",
      "Research exposure and specialization in AI/ML",
      "Strong placement support (90%+ placement rate in top IITs)",
      "Option to pivot to research/teaching career",
      "Government job eligibility increases",
      "Lower fees (~₹2L for SC category with scholarships)",
      "Stipend during M.Tech covers living costs"
    ],
    cons: [
      "2 years invested (opportunity cost of work experience)",
      "GATE preparation requires 6-8 months dedicated effort",
      "High competition even with reservation",
      "Coursework can be rigorous",
      "Starting salary may be less than direct job initially"
    ],
    actionPlan: [
      "Month 1-2: Complete syllabus overview, collect study material, join test series",
      "Month 3-5: Subject-wise deep preparation, daily practice problems",
      "Month 6-7: Full syllabus revision, previous year papers",
      "Month 8: Mock tests (3-4 per week), weak area focus",
      "Post-GATE: COAP registration (April-May), college/specialization preference filling",
      "Backup: Apply to IIIT Hyderabad, BITS Pilani, private universities"
    ],
    resources: [
      "Official: gate.iitk.ac.in (or current year IIT)",
      "Study: GATE Overflow (GO Book PDF - Free), GeeksforGeeks GATE section",
      "Test Series: Made Easy, ACE Academy, Unacademy (₹5000-15000)",
      "YouTube: Neso Academy, Knowledge Gate, Gate Lectures by Ravindrababu Ravula",
      "Practice: Previous 15 years GATE papers, Virtual Calculator practice",
      "Community: GATE Overflow Q&A forum, r/Indian_Academia"
    ],
    costs: "Application: ₹1500 (₹750 for SC), Test Series: ₹5000-10000 (optional), Books: ₹2000-3000, M.Tech Fees: ₹2-3L total (SC scholarship available)"
  },
  {
    title: "PSU Recruitment through GATE",
    icon: Building2,
    category: "Government Job",
    estimatedSalary: "₹8-12 LPA (Starting) | ₹15-25 LPA (10 years) | ₹40-60 LPA (20+ years)",
    scCategoryAdvantage: "Strong: 15% reserved posts, Age relaxation (5 years), Lower GATE cutoff (normalized marks ~200-250 vs 450+ General)",
    successProbability: "Very High (85-90%) with good GATE score (500+)",
    timeCommitment: "6-8 months GATE prep (same as M.Tech path)",
    overview: "PSUs (Public Sector Undertakings) like ONGC, NTPC, BHEL, IOCL recruit engineers through GATE scores. Offers job security, work-life balance, government perks, and excellent long-term growth. Perfect for those wanting stable career without corporate pressure.",
    eligibility: [
      "B.Tech in AI/ML/CSE/ECE/related (You qualify ✓)",
      "Valid GATE score (usually last 2 years)",
      "Age limit: 18-30 years (35 for SC - You qualify ✓)",
      "Minimum 65% aggregate (60% for SC - You exceed this ✓)",
      "Medical fitness standards"
    ],
    examDetails: [
      "Selection: Purely GATE score based OR GATE + Interview",
      "No separate PSU exam needed (GATE is the gateway)",
      "Each PSU announces vacancies in March-May post-GATE results",
      "GATE Score requirement: 450-550+ (normalized) for General, 200-350 for SC",
      "Multiple PSUs can be applied with single GATE score",
      "CS/IT stream: Fewer PSU opportunities than core branches (Mechanical/Electrical), but still available in: ONGC (IT division), NTPC (IT), BHEL (Cyber Security), HAL, Indian Oil (Automation)"
    ],
    colleges: [
      "Maharatna PSUs (Best packages ₹10-14 LPA): ONGC, NTPC, IOCL, Coal India, BPCL, HPCL, GAIL, Power Grid, SAIL",
      "Navratna PSUs (₹8-12 LPA): BHEL, HAL, BEL, NALCO, NMDC, Oil India",
      "Other PSUs: PGCIL, NPCIL, MECL, REC, PFC",
      "Tech-focused: BSNL, MTNL (through GATE CS)",
      "Defence: BEL, HAL, DRDO (IT/Computer Science roles)",
      "Note: Core branches have more PSU options; CSE limited but growing"
    ],
    preparation: [
      "Leverage same GATE preparation for PSU route",
      "Target GATE Score: 550+ (normalized) for top PSU choices",
      "SC advantage: Even 400-450 GATE score opens many PSU doors",
      "Keep track of PSU notifications (March-August)",
      "Prepare for interviews (technical + HR) for select PSUs",
      "Stay updated on PSU recruitment through employment news"
    ],
    careerGrowth: [
      "Entry Level: Executive/Engineer Grade (₹8-12 LPA with perks)",
      "Perks: DA, HRA, Medical, LTC, Pension, Job security, Housing",
      "Effective CTC: Add ₹2-4 LPA in perks/benefits",
      "Year 5: Senior Engineer (₹12-18 LPA + grade pay)",
      "Year 10-15: Manager/Deputy Manager (₹18-28 LPA)",
      "Year 15-20: Senior Manager/General Manager (₹25-40 LPA)",
      "Year 25-30: AGM/DGM/Director Level (₹40-80 LPA)",
      "Retirement: Pension + Gratuity (₹30-50L+)",
      "Work-Life: 9-6 job, weekends off, 30+ days leave annually"
    ],
    pros: [
      "Lifetime job security (almost impossible to fire)",
      "15% SC reservation significantly improves chances",
      "Excellent work-life balance compared to private sector",
      "Housing, medical, education allowances for family",
      "Pension after retirement (no worry for old age)",
      "Prestige and social status",
      "Lower stress compared to tech startups/MNCs",
      "Gradual, guaranteed salary increments",
      "Can pursue part-time MBA/certifications alongside"
    ],
    cons: [
      "Limited CSE/IT positions compared to core engineering",
      "Initial salary lower than top tech companies",
      "Slower career growth compared to private sector (but guaranteed)",
      "Work may become monotonous",
      "Less exposure to cutting-edge technology",
      "Bureaucratic culture",
      "Relocation possible to remote areas (ONGC, Coal India)",
      "Limited entrepreneurship opportunities while employed"
    ],
    actionPlan: [
      "Step 1: Prepare for GATE (same as M.Tech path) - 6-8 months",
      "Step 2: Appear for GATE exam in February",
      "Step 3: Check GATE results (March) and scorecard",
      "Step 4: Monitor PSU notifications (March-July) on websites",
      "Step 5: Apply to all eligible PSUs with required documents",
      "Step 6: Prepare for interviews (if required by specific PSU)",
      "Step 7: Accept offer, complete joining formalities",
      "Parallel: Can apply for both M.Tech and PSU, decide after results"
    ],
    resources: [
      "PSU Notifications: sarkariresult.com, employmentnews.gov.in",
      "GATE Prep: Same as M.Tech path resources",
      "Interview Prep: AffairsCloud, GradeUp PSU section",
      "Company Websites: Direct career pages of ONGC, NTPC, etc.",
      "Communities: r/Indian_Academia, Quora PSU groups",
      "Books: 'PSU Jobs through GATE' by GKP"
    ],
    costs: "Same as GATE (₹750 application), No additional costs for PSU applications (free), Interview travel: ₹2000-5000"
  },
  {
    title: "UPSC Engineering Services (IES/ESE)",
    icon: Award,
    category: "Government Job",
    estimatedSalary: "₹9-12 LPA (Starting) | ₹20-30 LPA (10 years) | ₹50-100 LPA (20+ years as Chief Engineer)",
    scCategoryAdvantage: "Very Strong: 15% reservation, 5 years age relaxation, Lower cutoff marks (30-40% vs 50-60% for General)",
    successProbability: "Moderate-High (60-70%) with 12-18 months dedicated preparation",
    timeCommitment: "12-18 months full-time preparation",
    overview: "ESE (Engineering Services Examination) is conducted by UPSC to recruit engineers for central government services. Offers Group A officer status, very high prestige, decision-making authority, and excellent long-term prospects. You'll work in railways, defense, telecom, central engineering projects.",
    eligibility: [
      "B.Tech in relevant stream (CSE/IT/Electronics - You qualify ✓)",
      "Age: 21-30 years (35 for SC - You qualify ✓)",
      "Must have engineering degree by the time of interview",
      "No minimum percentage required officially"
    ],
    examDetails: [
      "Stage 1: Prelims (Objective) - 2 papers, General Studies + Engineering (CSE/IT/ECE)",
      "Stage 2: Mains (Descriptive) - 2 conventional papers (3 hours each, deep engineering)",
      "Stage 3: Personality Test (Interview) - 200 marks",
      "Total Marks: Prelims (600) + Mains (600) + Interview (200) = 1400",
      "Prelims qualify only; Mains + Interview for final merit",
      "Exam frequency: Once per year (Prelims in June, Mains in October)",
      "Total vacancies: 300-500 posts (15% reserved for SC)",
      "Services: Indian Railway Services of Engineers (IRSE), Central Engineering Services, Defence Service of Engineers, Telecom, etc.",
      "SC Cutoff: ~800-900/1400 (vs 1000-1100 for General)"
    ],
    colleges: [
      "Not applicable - Direct government service posting after selection",
      "Training: 1 year at National Academy of Indian Railways (NAIR) for IRSE or respective training centers",
      "Posting locations: Pan-India (Railways, Defence establishments, CPWD, Border Roads, Telecom)"
    ],
    preparation: [
      "Timeline: 12-18 months recommended",
      "Stage 1 Prep: General Studies (History, Polity, Economy, Geography, S&T) + Engineering fundamentals",
      "Stage 2 Prep: Deep engineering topics - Computer Science (Algorithms, OS, Networks, DBMS, Software Engineering, Web Tech, etc.)",
      "Study hours: 6-8 hours daily minimum",
      "Coaching: Optional but helpful (Delhi-based: Made Easy, Engineers Institute of India, IES Master) - ₹80k-1.5L",
      "Mock tests crucial for both prelims and mains",
      "Current affairs mandatory (6 months before exam)",
      "Interview prep: Personality development, engineering project knowledge"
    ],
    careerGrowth: [
      "Entry: Assistant Executive Engineer/Assistant Divisional Engineer (₹9-12 LPA)",
      "Year 4-6: Executive Engineer (₹12-16 LPA)",
      "Year 8-12: Superintending Engineer (₹18-25 LPA)",
      "Year 15-20: Chief Engineer/Director (₹30-50 LPA)",
      "Year 25+: Member Engineering (Board level) (₹60-100 LPA)",
      "Position: Group A Gazetted Officer (policy-making authority)",
      "Power: Handle projects worth crores, team management (100s of staff)",
      "Perks: Government housing, vehicle, medical, travel allowances, pension",
      "Retirement: Lakhs in pension + gratuity + commuted benefits",
      "Post-retirement: Consultancy opportunities, PSU board positions"
    ],
    pros: [
      "Highest prestige among engineering jobs in India",
      "Group A officer status (equivalent to IAS level for technical domain)",
      "Decision-making authority in massive infrastructure projects",
      "15% SC reservation + age relaxation significantly boost chances",
      "Government perks unmatched (housing, vehicle, security)",
      "Nationwide posting options",
      "Can influence national infrastructure development",
      "Family security and social standing",
      "Pension and lifetime benefits"
    ],
    cons: [
      "Extremely competitive (300-500 selections from 50,000+ applicants)",
      "Requires 12-18 months full-time preparation (no earning during this)",
      "Syllabus is vast (Engineering + General Studies)",
      "Limited to CSE/IT roles (more opportunities in Civil/Mechanical)",
      "Opportunity cost: Could be earning ₹8-15 LPA in tech job during prep",
      "Bureaucratic work culture",
      "Initial postings may be in remote locations",
      "Tech roles limited compared to core infrastructure services"
    ],
    actionPlan: [
      "Month 1-3: Understand full syllabus, collect study material, decide on coaching",
      "Month 4-9: Complete engineering subjects + General Studies subjects",
      "Month 10-11: Revision + Previous year prelims papers (15+ years)",
      "Month 12: Prelims mock tests (at least 20 tests)",
      "Post-Prelims: If qualified, intensive mains prep (3-4 months)",
      "Mains Prep: Answer writing practice (150-200 pages), engineering deep-dive",
      "Post-Mains: Interview preparation (current affairs, hobby, DAF preparation)",
      "Apply when notification comes (usually February-March for June exam)"
    ],
    resources: [
      "Official: upsc.gov.in/examinations/ese",
      "Coaching: Made Easy (Delhi), IES Master, Engineers Institute of India",
      "Books: Made Easy handbook, GKP ESE book, R.S. Aggarwal for aptitude",
      "CSE Engineering: Forouzan (Networks), Galvin (OS), Navathe (DBMS), standard CS textbooks",
      "General Studies: NCERTs (6-12), Laxmikant (Polity), Ramesh Singh (Economy)",
      "Previous Papers: UPSC website (last 15 years)",
      "Test Series: Made Easy, IES Master (₹8000-15000)",
      "YouTube: Made Easy YouTube, ESE topper interviews"
    ],
    costs: "Application: ₹200 (₹0 for SC/ST/Women), Coaching: ₹80k-1.5L (optional), Study material: ₹5000-8000, Test series: ₹10000-15000, Living costs during prep: ₹3-5L (12-18 months)"
  },
  {
    title: "SSC CGL (Combined Graduate Level)",
    icon: Briefcase,
    category: "Government Job",
    estimatedSalary: "₹4.5-7 LPA (Starting) | ₹10-15 LPA (10 years) | ₹20-30 LPA (Senior positions)",
    scCategoryAdvantage: "Strong: 15% reservation in all posts, Lower cutoff (100-120 marks vs 160-180 for General), Age relaxation (5 years)",
    successProbability: "Very High (80-85%) for SC candidates with 6-8 months prep",
    timeCommitment: "6-8 months preparation",
    overview: "SSC CGL offers Group B and Group C central government posts including Inspector (Income Tax, CBI, NIA), Assistant (CSS, CAG, MEA), AAO (Accounts Officer), and more. While salary is lower than tech jobs initially, job security, work-life balance, and steady growth make it attractive. Easiest government job to crack with SC reservation.",
    eligibility: [
      "Bachelor's degree in any discipline (You qualify ✓)",
      "Age: 18-32 years (varies by post, SC: +5 years - You qualify ✓)",
      "No minimum percentage required"
    ],
    examDetails: [
      "Tier 1: Computer-based objective test (60 min, 200 marks) - Reasoning, Quantitative, English, General Awareness",
      "Tier 2: Computer-based test (3 papers) - Quantitative, English, Statistics/Accounts (based on post)",
      "Tier 3: Descriptive (Pen & Paper) - Essay, Letter, Application writing",
      "Tier 4: Computer test (for specific posts like Data Entry, DEO)",
      "Total process duration: 8-10 months from Tier 1 to results",
      "Vacancies: 8000-10,000 posts annually across 50+ departments",
      "SC Cutoff Tier 1: ~110-130 marks (vs 160-180 General)",
      "Exam held: Once a year (notification in September, Tier 1 in April-May)"
    ],
    colleges: [
      "Not applicable - Posts in various central government ministries",
      "Major departments: Income Tax, CBI, CAG, CSS, Ministry of External Affairs, CAG, Central Vigilance, Intelligence Bureau",
      "Posting: Initially anywhere in India, transfer policies vary by department"
    ],
    preparation: [
      "Duration: 6-8 months sufficient for SC candidates",
      "Study plan: 4-5 hours daily",
      "Tier 1 Focus: Quantitative (Class 10 level math), Reasoning (puzzles, coding), English (grammar, vocabulary), GK/Current Affairs (last 6 months)",
      "Tier 2 Focus: Advanced math (Class 12 level), English comprehension",
      "Practice: 50+ mock tests mandatory",
      "Coaching: Not necessary (self-study works well), optional online: ₹5000-15000",
      "YouTube, apps, free resources abundant"
    ],
    careerGrowth: [
      "Entry Level: Assistant/Inspector - ₹4.5-7 LPA (Grade Pay + Allowances)",
      "Posts available:",
      "  - Inspector (Income Tax, Excise, CBI) - ₹6-8 LPA",
      "  - Assistant (CSS, MEA, CAG) - ₹4.5-6 LPA",
      "  - Auditor (CAG, Income Tax) - ₹5-7 LPA",
      "  - Statistical Investigator - ₹4.5-6 LPA",
      "Year 5-7: Senior positions (₹8-12 LPA)",
      "Year 10-15: Group B officer (₹12-18 LPA)",
      "Year 20+: Deputy Director/equivalent (₹20-30 LPA)",
      "Perks: DA, HRA, Medical, Pension, LTC",
      "Work-Life: 9:30-6 timing, weekends off, good leave policy"
    ],
    pros: [
      "Easiest central govt job to crack (relative to others)",
      "15% SC reservation + 5 years age relaxation + lower cutoffs",
      "No need for engineering subjects (unlike GATE/ESE)",
      "Low preparation cost (can self-study)",
      "Job security and government perks",
      "Good work-life balance",
      "Prestige of central government job",
      "Opportunity to serve in diverse ministries (MEA, CBI, IT dept)",
      "Can prepare alongside final year BTech"
    ],
    cons: [
      "Lower initial salary (₹4.5-7 LPA vs ₹8-15 LPA in tech jobs)",
      "Slower career growth",
      "Engineering degree underutilized",
      "Repetitive clerical work in many posts",
      "High competition (30-40 lakh applicants for 8000 posts)",
      "Posting anywhere in India (no choice initially)",
      "Limited scope for using AI/ML skills"
    ],
    actionPlan: [
      "Month 1-2: Cover Quantitative Aptitude (Arithmetic, Algebra, Geometry)",
      "Month 3-4: Reasoning (Verbal & Non-verbal), English grammar",
      "Month 5: General Awareness + Current Affairs (daily reading)",
      "Month 6: Previous year papers (last 10 years) + weak areas",
      "Month 7-8: Mock tests (2-3 per week), speed improvement",
      "Post Tier 1: If qualified, intensive Tier 2 math & English prep (2 months)",
      "Post Tier 2: Essay/letter writing practice for Tier 3",
      "Timeline: Can start prep in 3rd year final semester"
    ],
    resources: [
      "Official: ssc.nic.in",
      "Books: Kiran SSC CGL, Arihant SSC CGL, R.S. Aggarwal Quantitative",
      "Apps: Adda247, Testbook, Gradeup (₹0-₹3000 for premium)",
      "YouTube: Adda247, StudyIQ, SSC Adda",
      "Current Affairs: Affairscloud, Jagran Josh (free)",
      "Mock Tests: Oliveboard, Testbook (₹500-2000)",
      "Telegram: Free SSC CGL channels for daily updates"
    ],
    costs: "Application: ₹100 (₹0 for SC/ST/Women), Study material: ₹1000-2000, Test series: ₹1000-3000, Coaching (optional): ₹5000-15000 online"
  },
  {
    title: "RBI Grade B Officer",
    icon: TrendingUp,
    category: "Government Job",
    estimatedSalary: "₹15-18 LPA (Starting) | ₹25-35 LPA (5 years) | ₹50-80 LPA (15+ years)",
    scCategoryAdvantage: "Moderate: 15% reservation, Lower cutoff in Mains & Interview, Age relaxation (5 years)",
    successProbability: "Moderate (50-60%) with 12 months dedicated preparation",
    timeCommitment: "12-15 months preparation",
    overview: "RBI Grade B is one of the most prestigious banking jobs in India. As a Grade B officer, you'll work directly in the Reserve Bank of India in policy formulation, regulation, supervision. Excellent salary, prestige, and career growth. Highly competitive but SC reservation improves chances significantly.",
    eligibility: [
      "Bachelor's degree with 60% (55% for SC) - You exceed this ✓",
      "Age: 21-30 years (35 for SC) - You qualify ✓",
      "Valid throughout India without bond"
    ],
    examDetails: [
      "Phase 1: Prelims (Online) - General Awareness, English, Quantitative, Reasoning (200 marks, 2 hours)",
      "Phase 2: Mains (Online) - 3 papers (Economic & Social Issues, English Writing, Finance & Management) (300 marks, 3 hours each)",
      "Phase 3: Interview (50 marks)",
      "Total: Prelims (qualify only) + Mains (300) + Interview (50) = 350 for merit",
      "Vacancies: 150-200 annually (15% SC quota = ~25-30 seats)",
      "SC Cutoff: ~50-60% in Mains (vs 70-80% General)",
      "Exam frequency: Once a year (notification July-Aug, prelims Sep)"
    ],
    colleges: [
      "Not applicable - Direct RBI posting",
      "Work locations: RBI offices in Mumbai (HQ), Delhi, Chennai, Kolkata, Bangalore, Hyderabad + regional offices",
      "Initial posting: Usually metro cities"
    ],
    preparation: [
      "Duration: 12-15 months recommended",
      "Background advantage: Economics, Finance, Accounting knowledge helps",
      "Phase 1 Prep: Similar to bank PO exams (Quantitative, Reasoning, English, GA)",
      "Phase 2 Prep: Economic Survey, Budget, Finance, Management concepts, Essay & Letter writing",
      "Study hours: 6-8 hours daily",
      "Coaching: Optional - ₹30k-60k (online/offline in Delhi, Mumbai)",
      "Must read: Economic Survey, RBI Annual Reports, Budget, Business newspapers (The Hindu, Business Standard)",
      "Mock tests critical (50+ tests for both phases)"
    ],
    careerGrowth: [
      "Entry: Grade B Officer (Scale III) - ₹15-18 LPA + perks",
      "Year 3-5: Grade A Officer (Scale IV) - ₹20-28 LPA",
      "Year 7-10: Assistant General Manager - ₹30-40 LPA",
      "Year 12-15: Deputy General Manager - ₹40-55 LPA",
      "Year 18-22: General Manager - ₹55-75 LPA",
      "Year 25+: Executive Director/Deputy Governor - ₹80 LPA-1 Cr+",
      "Perks: HRA, DA, City Allowance, Furnished accommodation/lease, Medical, LTC",
      "Work: Policy making, banking regulation, monetary policy formulation",
      "Prestige: Among top 5 government jobs in India"
    ],
    pros: [
      "Highest paying government job at entry level",
      "Immense prestige (equivalent to IAS in banking sector)",
      "Work in monetary policy, banking regulation (intellectual work)",
      "15% SC reservation significantly improves selection chances",
      "Posting in metro cities mostly",
      "Excellent work-life balance",
      "Government perks + RBI-specific allowances",
      "Rapid career progression (Grade B to Grade A in 3-5 years)",
      "Global exposure (deputation to IMF, World Bank possible)"
    ],
    cons: [
      "Extremely competitive (150-200 selections from 2-3 lakh applicants)",
      "Requires strong Economics, Finance, Management knowledge",
      "12-15 months full-time preparation needed",
      "Mains exam is subjective and lengthy (essay, descriptive)",
      "Engineering background may not help directly (need to learn new subjects)",
      "Opportunity cost: Not earning during prep period"
    ],
    actionPlan: [
      "Month 1-3: Build Economics foundation (Micro, Macro, Indian Economy)",
      "Month 4-6: Phase 1 preparation (Quant, Reasoning, English, Banking Awareness)",
      "Month 7-9: Phase 2 prep start (Economic Survey, Budget, Finance, Management)",
      "Month 10-12: Essay writing practice, current affairs, mock tests",
      "Post-Prelims: If qualified, intensive 2-month Phase 2 focus",
      "Post-Mains: Interview preparation (current economic issues, RBI functions, personality)",
      "Daily: Read business newspapers (The Hindu/Indian Express + Business Standard)"
    ],
    resources: [
      "Official: opportunities.rbi.org.in",
      "Coaching: Study IQ, Oliveboard, Career Launcher (₹30k-60k)",
      "Books: Indian Economy by Ramesh Singh, Datta & Sundaram for Economics",
      "Mains: RBI Annual Reports, Economic Survey (last 5 years), Budget documents",
      "Essay: Previous RBI Grade B essay topics, current affairs compilations",
      "Current Affairs: Affairscloud, Banking Awareness by Oliveboard",
      "Mock Tests: Adda247, Oliveboard, Testbook (₹3000-8000)",
      "YouTube: Study IQ, Oliveboard YouTube for free resources"
    ],
    costs: "Application: ₹850 (₹100 for SC), Study material: ₹3000-5000, Coaching (optional): ₹30k-60k, Test series: ₹5000-10000, Living costs during prep: ₹3-5L (12-15 months)"
  },
  {
    title: "Tech Job (Product Companies)",
    icon: Briefcase,
    category: "Private Sector",
    estimatedSalary: "₹8-20 LPA (Starting) | ₹20-40 LPA (3-5 years) | ₹50-100+ LPA (7-10 years)",
    scCategoryAdvantage: "None (Merit-based recruitment, no reservations in private sector)",
    successProbability: "High (70-80%) with good coding skills + CGPA 8.7 is excellent",
    timeCommitment: "3-6 months intensive placement prep OR continuous skill building",
    overview: "Direct employment in tech companies (Google, Microsoft, Amazon, Adobe, Flipkart, etc.) through campus placements or off-campus applications. Highest starting salaries, rapid growth potential, cutting-edge tech work. Your 8.7 CGPA and AI/ML background give you strong positioning for product-based companies.",
    eligibility: [
      "B.Tech in AI/ML/CSE (You qualify ✓)",
      "CGPA: 7.0+ for most companies (You have 8.7 ✓)",
      "Strong problem-solving and coding skills",
      "Projects/internships in resume",
      "No age limit"
    ],
    examDetails: [
      "Selection Process: Resume Screening → Online Assessment (Coding + MCQs) → Technical Interviews (2-3 rounds) → HR Interview",
      "Online Assessment: Data Structures, Algorithms, Problem Solving (LeetCode style)",
      "Technical Interviews: DSA questions, System Design (for senior roles), CS fundamentals",
      "Companies: Tier 1 (Google, Microsoft, Amazon, Adobe, Meta) - ₹15-45 LPA, Tier 2 (Flipkart, Walmart, Oracle, Salesforce) - ₹10-25 LPA, Tier 3 (Startups, service companies) - ₹6-15 LPA",
      "Placement season: July-December (final year)",
      "Off-campus: Apply anytime via company careers page, referrals"
    ],
    colleges: [
      "Not applicable - Job through campus placement or off-campus applications",
      "Work locations: Bangalore, Hyderabad, Pune, Mumbai, Delhi-NCR, Remote options available"
    ],
    preparation: [
      "DSA Mastery: 300-500 LeetCode problems (Easy: 100, Medium: 300, Hard: 100)",
      "Focus topics: Arrays, Strings, Trees, Graphs, DP, Greedy, Backtracking",
      "System Design: For senior SDE roles (Grokking System Design, Gaurav Sen YouTube)",
      "CS Fundamentals: OS, DBMS, Networks, OOP (commonly asked in interviews)",
      "AI/ML Projects: 2-3 strong projects showcasing AI/ML skills (Github)",
      "Resume: Highlight projects, internships, open source contributions",
      "Mock Interviews: Practice on Pramp, InterviewBit, with seniors",
      "Timeline: Start from 2nd year (projects) + 3-6 months intensive prep before placements"
    ],
    careerGrowth: [
      "Year 0-2: SDE 1/Software Engineer - ₹8-20 LPA (based on company tier)",
      "Year 2-4: SDE 2/Senior Engineer - ₹18-35 LPA",
      "Year 4-7: SDE 3/Staff Engineer/Lead - ₹35-60 LPA",
      "Year 7-10: Senior Staff/Principal Engineer/Manager - ₹60-100 LPA",
      "Year 10+: Director/Engineering Manager - ₹1-3 Cr+ (top companies)",
      "Parallel option: Switch companies every 2-3 years for 40-70% hikes",
      "Top performers: ₹50 LPA by 5 years, ₹1 Cr by 10 years possible",
      "Specialization: ML Engineer roles ₹20-50 LPA (your AI/ML degree advantage)",
      "Startups: ESOPs can yield lakhs/crores if company succeeds"
    ],
    pros: [
      "Highest earning potential in India (₹20-40 LPA by 5 years easily)",
      "Your 8.7 CGPA makes you eligible for all top companies",
      "AI/ML degree highly relevant (ML Engineer roles pay premium)",
      "Rapid salary growth (30-50% hikes via job switches)",
      "Cutting-edge technology work",
      "Flexible work culture (many companies offer remote/hybrid)",
      "Global opportunities (onsite, H1B visa for USA)",
      "No entrance exam stress (continuous skill building)",
      "Can start earning immediately after B.Tech (no 2 years M.Tech investment)"
    ],
    cons: [
      "No reservations (SC benefit doesn't apply)",
      "High work pressure and long hours (especially in startups)",
      "Job security lower than government jobs",
      "Stress and burnout common",
      "Ageism in tech industry (pressure to constantly upskill)",
      "Layoffs possible during recession/slowdown",
      "Work-life balance challenging",
      "Intense competition (100s of applicants for each position)"
    ],
    actionPlan: [
      "Start NOW (3rd year): Build 2-3 AI/ML projects (GitHub)",
      "Month 1-3: Master DSA basics (Arrays, Linked Lists, Trees, Graphs)",
      "Month 4-6: Solve 200+ LeetCode problems (focus Medium difficulty)",
      "Month 7-9: Advanced DSA (DP, Greedy, Advanced graphs), System Design basics",
      "Throughout: Strengthen CS fundamentals (OS, DBMS, Networks)",
      "Resume: Update with projects, internships, certifications",
      "July-Dec (final year): Campus placements (apply to all good companies)",
      "Backup: Keep applying off-campus, use referrals",
      "Continuous: Contribute to open source, build side projects"
    ],
    resources: [
      "DSA: LeetCode, Striver's SDE Sheet (191 problems), Love Babbar DSA Sheet",
      "YouTube: takeUforward (Striver), Aditya Verma, Abdul Bari, CodeHelp",
      "System Design: Grokking System Design Interview, Gaurav Sen YouTube, System Design Primer (GitHub)",
      "CS Fundamentals: GeeksforGeeks, InterviewBit",
      "AI/ML Projects: Kaggle competitions, UCI ML Repository",
      "Interview Prep: Pramp (free mock interviews), InterviewBit",
      "Books: Cracking the Coding Interview (CTCI), Elements of Programming Interviews",
      "Off-campus: LinkedIn, AngelList, Wellfound (AngelList), company career pages"
    ],
    costs: "LeetCode Premium: ₹2500/year (optional), Interview prep courses: ₹0-5000 (mostly free), Total: ~₹0-5000 (minimal cost compared to government job exams)"
  },
  {
    title: "UPSC Civil Services (IAS/IPS/IRS)",
    icon: Award,
    category: "Government Job",
    estimatedSalary: "₹8-10 LPA (Starting) | ₹20-30 LPA (10 years) | ₹50-100+ LPA (20+ years as Secretary)",
    scCategoryAdvantage: "Very Strong: 15% reservation, Lower cutoff (significantly easier to clear - 600-700 marks vs 900-1000 for General), Age relaxation (5 years), 5 attempts extra",
    successProbability: "Moderate (40-50%) with 18-24 months dedicated preparation",
    timeCommitment: "18-24 months full-time preparation",
    overview: "UPSC CSE is India's most prestigious exam, recruiting IAS, IPS, IFS, IRS officers. Offers unmatched power, prestige, and nation-building opportunities. SC reservation significantly improves chances. While engineering background is not directly useful, your analytical thinking from AI/ML helps. This is the most powerful government job.",
    eligibility: [
      "Bachelor's degree in any discipline (You qualify ✓)",
      "Age: 21-32 years (37 for SC with 5 years relaxation - You qualify ✓)",
      "Number of attempts: 9 for SC (vs 6 for General)",
      "No minimum percentage required"
    ],
    examDetails: [
      "Stage 1: Prelims (Objective) - 2 papers: GS (200 marks) + CSAT (200 marks, qualifying)",
      "Stage 2: Mains (Descriptive) - 9 papers (1750 marks): Essay (250), GS 1-4 (250 each x4), Optional subject (250x2), English (300, qualifying), Regional language (300, qualifying)",
      "Stage 3: Personality Test (Interview) - 275 marks",
      "Total merit: Mains (1750) + Interview (275) = 2025 marks",
      "Vacancies: 1000-1200 annually (15% SC = ~180 seats)",
      "SC Cutoff: ~750-850/2025 (vs 950-1050 General) - 150-200 marks advantage",
      "Services allocated by rank: IAS (top ~100 ranks), IPS, IFS, IRS, IRAS, etc.",
      "Exam frequency: Once a year (Prelims June, Mains September, Interview Feb-April)"
    ],
    colleges: [
      "Not applicable - Direct civil services posting",
      "Training: Lal Bahadur Shastri National Academy of Administration (LBSNAA) for IAS (Mussoorie) - 2 years",
      "Posting: Pan-India, can be posted anywhere as District Collector, SP, etc."
    ],
    preparation: [
      "Duration: 18-24 months minimum (can attempt multiple times)",
      "Strategy: Prelims focus (first 6 months) → Mains + Prelims (next 9 months) → Interview prep (post-Mains)",
      "Prelims: GS (History, Polity, Geography, Economy, Science, Environment, Current Affairs) + CSAT (Basic math, reasoning, reading)",
      "Mains: 4 GS papers (Ethics, Governance, History, Geography, IR, Economy, S&T, Environment, Disaster, Security) + Essay + Optional subject",
      "Optional subject: Mathematics/Pub Admin/Geography/Sociology (choose based on interest)",
      "Study hours: 8-10 hours daily",
      "Coaching: Highly recommended for first-timers - ₹1.5-2.5L (Delhi coaching hubs: Vajiram, Vision IAS, Forum IAS)",
      "Current affairs: Daily (The Hindu, Indian Express) + monthly compilations"
    ],
    careerGrowth: [
      "IAS (Indian Administrative Service) - Most prestigious:",
      "  Entry: Sub-Divisional Magistrate (SDM) - ₹8-10 LPA",
      "  Year 4-6: District Collector/Magistrate (DM) - ₹12-18 LPA + immense power",
      "  Year 10-15: Divisional Commissioner/Joint Secretary - ₹20-30 LPA",
      "  Year 20-25: Additional Secretary/Secretary to Govt - ₹40-70 LPA",
      "  Year 30+: Cabinet Secretary (highest post) - ₹2.5 lakh/month + benefits",
      "IPS (Police Service):",
      "  Entry: Assistant Superintendent of Police (ASP) - ₹8-10 LPA",
      "  Year 8-12: Superintendent of Police (District SP) - ₹15-25 LPA",
      "  Year 20+: DGP (Director General) - ₹50-80 LPA",
      "IRS (Revenue Service/Income Tax):",
      "  Entry: Assistant Commissioner - ₹9-12 LPA",
      "  Year 10+: Commissioner - ₹25-40 LPA",
      "Power & Prestige: As DM, you control entire district (10-30 lakh population), implement govt schemes, law & order, development",
      "Perks: Official residence (bungalow), vehicle with driver, security, staff, medical, foreign training"
    ],
    pros: [
      "Most powerful job in India (implement govt policies, affect millions of lives)",
      "15% SC reservation + 200 marks advantage in cutoffs + 9 attempts vs 6",
      "Unmatched prestige and social status",
      "Lifetime job security",
      "Massive decision-making authority (especially IAS - as DM you're the king of district)",
      "Government perks unmatched (bungalow, car, security, staff)",
      "Pension and post-retirement benefits",
      "Opportunity to serve nation and bring grassroots change",
      "All-India service (can be posted anywhere, wide exposure)"
    ],
    cons: [
      "Extremely competitive (1000 selections from 10 lakh+ applicants)",
      "Requires 18-24 months full-time preparation with no guarantee",
      "Vast syllabus (9 papers in Mains covering everything)",
      "Engineering degree completely unused",
      "Opportunity cost: Not earning ₹8-20 LPA during 2 years prep",
      "Lower initial salary compared to tech jobs",
      "Postings can be in remote/difficult areas initially",
      "Bureaucratic work culture, political interference",
      "High pressure and public scrutiny"
    ],
    actionPlan: [
      "Month 1-3: Understand syllabus, join coaching (optional but recommended), cover NCERTs (6-12)",
      "Month 4-9: Complete standard books for Polity, History, Geography, Economy",
      "Month 10-12: Current affairs (daily Hindu), Environment, S&T, Optional subject start",
      "Month 13-15: Full prelims revision + previous year papers (10 years)",
      "Month 16-18: Prelims mock tests (50+ tests), optional subject completion",
      "Post-Prelims (if qualified): Mains answer writing (200+ answers), optional subject deep dive",
      "Post-Mains (if qualified): Interview/personality prep (DAF, hobbies, current issues)",
      "Can attempt multiple times (9 attempts for SC) - most clear in 2nd/3rd attempt"
    ],
    resources: [
      "Official: upsc.gov.in",
      "Coaching: Vajiram & Ravi (Delhi), Vision IAS, Forum IAS, Drishti IAS (₹1.5-2.5L)",
      "Books: Laxmikant (Polity), Spectrum (Modern History), Certificate Physical & Human Geography (Goh Cheng Leong), Indian Economy by Ramesh Singh",
      "Mains: Vision IAS monthly magazine, insights secure initiative, answer writing programs",
      "Current Affairs: The Hindu (daily), Indian Express, Vision IAS monthly compilations",
      "Optional: Standard textbooks based on subject chosen",
      "Previous papers: UPSC website (last 15 years for trend analysis)",
      "Community: r/UPSC, ForumIAS community, Telegram UPSC channels"
    ],
    costs: "Application: ₹100 (₹0 for SC/ST/Women), Coaching: ₹1.5-2.5L (optional), Study material: ₹10k-15k, Test series: ₹15k-25k, Living costs during prep: ₹5-8L (18-24 months in Delhi), Total: ~₹8-12L for full preparation cycle"
  },
  {
    title: "State PSC/State Government Jobs",
    icon: Building2,
    category: "Government Job",
    estimatedSalary: "₹4-8 LPA (Starting) | ₹10-18 LPA (10 years) | ₹25-40 LPA (Senior positions)",
    scCategoryAdvantage: "Very Strong: 15-18% reservation (varies by state), Significantly lower competition than UPSC, Age relaxation, Lower cutoff marks",
    successProbability: "Very High (75-85%) with 8-12 months preparation",
    timeCommitment: "8-12 months preparation",
    overview: "State Public Service Commissions (like MPSC, UPPSC, BPSC, etc.) conduct exams for state government jobs including Dy. Collector, DSP, Block Development Officer, State Service Officers. Easier than UPSC, offers good salary, job security, and power at state/district level. SC reservation + home state advantage makes this highly achievable.",
    eligibility: [
      "Bachelor's degree in any discipline (You qualify ✓)",
      "Age: 21-40 years (varies by state, SC: +5 years relaxation)",
      "Domicile of respective state may be required for some states",
      "No minimum percentage required"
    ],
    examDetails: [
      "Pattern: Similar to UPSC (Prelims + Mains + Interview) but state-level",
      "Prelims: Objective MCQs on GS + State-specific GK",
      "Mains: Descriptive answers on GS + State-specific topics + Essay",
      "Interview: Personality test",
      "Exam frequency: Annual (some states conduct multiple exams)",
      "Vacancies: 500-2000 per state per year (varies)",
      "Posts: Dy. Collector, DSP, BDO, Asst. Commissioner, Commercial Tax Officer, Registrar, State Service Officers",
      "SC Cutoff: Much lower than General (30-40% advantage)",
      "Difficulty: Easier than UPSC, more predictable syllabus"
    ],
    colleges: [
      "Not applicable - State government postings",
      "Work location: Within the state (district/block/state capital)",
      "Better work-life balance than UPSC services"
    ],
    preparation: [
      "Duration: 8-12 months",
      "Syllabus: Similar to UPSC but with heavy focus on state-specific topics (state history, geography, economy, polity, current affairs)",
      "Advantage: If you're already preparing for UPSC, State PSC becomes much easier",
      "Study plan: 5-7 hours daily",
      "Focus: State GK (50% weightage in prelims), Basic GS (rest)",
      "Coaching: Optional, state-based coaching available (₹30k-80k)",
      "Can appear for multiple state PSCs simultaneously"
    ],
    careerGrowth: [
      "Entry: Dy. Collector/DSP/BDO - ₹5-8 LPA + perks",
      "Year 5-8: Additional Collector/Dy. SP/SDO - ₹10-15 LPA",
      "Year 10-15: Collector (district level)/SP - ₹18-28 LPA",
      "Year 20+: Divisional Commissioner/Secretary level - ₹30-50 LPA",
      "Perks: Government residence, vehicle, medical, pension",
      "Power: Implement state schemes, district administration, law & order (similar to IAS but at state level)",
      "Work-life: Better than UPSC officers (less transfers, more stability)"
    ],
    pros: [
      "Much easier to crack than UPSC (lower competition, easier syllabus)",
      "15-18% SC reservation with significantly lower cutoffs",
      "Can appear for multiple state PSCs (increase chances)",
      "Good salary and government perks",
      "Job security and pension",
      "Power and prestige at state/district level (Dy. Collector has significant authority)",
      "Less syllabus burden compared to UPSC",
      "Home state advantage (familiar with state GK)",
      "Can prepare alongside UPSC (syllabus overlap ~60%)"
    ],
    cons: [
      "Lower prestige compared to UPSC services",
      "Lower salary than IAS/IPS",
      "Limited to one state (no pan-India posting)",
      "Political interference at state level",
      "Slower career growth compared to UPSC",
      "Engineering degree not utilized",
      "Opportunity cost: Not earning during prep period"
    ],
    actionPlan: [
      "Month 1-3: Cover NCERT books (basic GS foundation)",
      "Month 4-6: State-specific GK (state history, geography, economy, culture, current CM schemes)",
      "Month 7-9: Previous year question papers (last 10 years), identify patterns",
      "Month 10-12: Mains answer writing, essay practice, mock tests",
      "Pro-tip: Prepare for UPSC and State PSC simultaneously (60% syllabus overlap)",
      "Apply to multiple states: MPSC, UPPSC, BPSC, RPSC (your home state + neighboring states)"
    ],
    resources: [
      "Official: Individual state PSC websites (e.g., mpsc.gov.in, uppsc.up.nic.in)",
      "Books: Lucent GK, State-specific GK books (available on Amazon for each state)",
      "Coaching: State-based coaching centers (e.g., Chanakya Mandal for MPSC, ALS IAS for UPPSC)",
      "Previous papers: State PSC websites, bookstores",
      "Current affairs: State newspapers + The Hindu",
      "Community: State PSC-specific Telegram groups, YouTube channels"
    ],
    costs: "Application: ₹200-500 (₹0-100 for SC), Study material: ₹3000-5000, Coaching (optional): ₹30k-80k, Test series: ₹5000-10000, Total: ₹10k-1L"
  },
  {
    title: "DRDO Scientist 'B' (Defence R&D)",
    icon: Target,
    category: "Government R&D",
    estimatedSalary: "₹9-11 LPA (Starting) | ₹15-22 LPA (10 years) | ₹30-50 LPA (Senior Scientist)",
    scCategoryAdvantage: "Strong: 15% reservation, Lower cutoff in exam + interview, Age relaxation (5 years)",
    successProbability: "High (70-75%) with 4-6 months preparation + good engineering background",
    timeCommitment: "4-6 months preparation",
    overview: "DRDO recruits Scientist 'B' for defense research and development in areas like AI, ML, Computer Science, Cybersecurity, Robotics. Perfect blend of government job security and cutting-edge tech work. Your AI/ML background is HIGHLY relevant. Less competitive than GATE/UPSC but excellent growth.",
    eligibility: [
      "B.E/B.Tech in CSE/IT/ECE/AI/ML (You qualify perfectly ✓)",
      "First class (60%+) - You exceed with 8.7 CGPA ✓",
      "Age: Up to 28 years (33 for SC) - You qualify ✓"
    ],
    examDetails: [
      "Tier 1: Online exam (Multiple choice) - Technical (CSE/AI topics) + General Awareness (100 marks, 90 min)",
      "Tier 2: Interview (100 marks) - Technical depth + Personality",
      "Merit: Tier 1 (100) + Tier 2 (100) = 200 marks",
      "Exam frequency: Once a year (notification in August-September, exam in November-December)",
      "Vacancies: 150-300 Scientist B posts in Computer Science/AI/Electronics",
      "SC Cutoff: ~45-55% in Tier 1 (vs 70-80% General)",
      "Syllabus: Similar to GATE CS + Defense awareness"
    ],
    colleges: [
      "Not applicable - DRDO labs posting",
      "Work locations: DRDO labs across India - Bangalore (ADA, CABS), Hyderabad (DRDL, RCI), Delhi (DRDO HQ), Pune, Chennai, Kolkata",
      "Advanced labs: AI lab (Bangalore), Cyber security lab, C4I labs"
    ],
    preparation: [
      "Duration: 4-6 months (leverage your AI/ML degree)",
      "Syllabus: Same as GATE CS (DSA, OS, Networks, DBMS, TOC, COA) + AI/ML topics (your strength)",
      "Additional: Defence awareness, DRDO projects, current military tech",
      "Study plan: 3-4 hours daily (engineering background helps)",
      "Interview prep: Your AI/ML projects, final year project, recent DRDO developments",
      "Advantage: Your AI/ML specialization is in high demand at DRDO"
    ],
    careerGrowth: [
      "Entry: Scientist B - ₹9-11 LPA (Level 10)",
      "Year 4-6: Scientist C - ₹12-16 LPA (Level 11)",
      "Year 8-12: Scientist D - ₹15-20 LPA (Level 12)",
      "Year 12-18: Scientist E (Associate Director) - ₹20-28 LPA (Level 13)",
      "Year 18-25: Scientist F (Director) - ₹28-38 LPA (Level 13A)",
      "Year 25+: Scientist G/Outstanding Scientist (Lab Director) - ₹40-60 LPA",
      "Work: AI/ML for defense, autonomous systems, cybersecurity, missile guidance, radar systems",
      "Perks: DA, HRA, Transport, Medical, Canteen, Housing in DRDO campus",
      "Prestige: Work on classified projects, contribute to national security"
    ],
    pros: [
      "Perfect fit for your AI/ML degree (directly relevant work)",
      "15% SC reservation + age relaxation improves chances significantly",
      "Cutting-edge R&D work (not routine government desk job)",
      "Work on AI, ML, Robotics, Cybersecurity for defense",
      "Job security + government benefits",
      "Exposure to advanced technology (often ahead of commercial sector)",
      "Moderate work pressure (better work-life than private tech jobs)",
      "Opportunity to contribute to national defense",
      "Can pursue higher studies (M.Tech/PhD) with job",
      "Easier than GATE PSU route, comparable salary"
    ],
    cons: [
      "Lower salary than top tech companies initially",
      "Slower career growth than private sector",
      "Work is confidential (can't share/publish freely)",
      "Posting may be in less developed cities",
      "Bureaucratic processes",
      "Limited global exposure (defense work is sensitive)",
      "May need security clearance",
      "Less flexibility compared to startups"
    ],
    actionPlan: [
      "Month 1-2: Revise core CSE subjects (DSA, OS, DBMS, Networks)",
      "Month 3-4: Cover AI/ML topics in depth (your strong area), previous year papers",
      "Month 5: Defence awareness (DRDO achievements, recent defence tech), mock tests",
      "Month 6: Full revision, exam-specific preparation",
      "Post-exam: If shortlisted, prepare for interview (your projects, AI/ML applications in defense)",
      "Timeline: Can prepare during final year B.Tech (exam in Nov-Dec)"
    ],
    resources: [
      "Official: rac.gov.in (RAC conducts DRDO exam)",
      "Syllabus: GATE CS syllabus + AI/ML topics (your B.Tech curriculum)",
      "Previous papers: Search 'DRDO Scientist B previous papers' - limited availability",
      "Study material: Standard GATE CS books + your AI/ML course notes",
      "Defence awareness: DRDO website, PIB defence news, Yojana magazine",
      "YouTube: DRDO projects videos, defence tech channels",
      "Community: r/Indian_Academia, defence job forums"
    ],
    costs: "Application: ₹100 (₹0 for SC/ST/Women), Study material: ₹0-2000 (can reuse GATE material), Total: Minimal (₹0-2000)"
  },
  {
    title: "MBA from Top B-Schools (IIM/FMS/ISB)",
    icon: BookOpen,
    category: "Higher Education",
    estimatedSalary: "₹20-30 LPA (Starting post-MBA) | ₹40-70 LPA (5 years) | ₹1-3 Cr (15+ years)",
    scCategoryAdvantage: "Strong in IIMs/FMS: 15% reservation, Lower CAT percentile cutoffs (75-85 for SC vs 98-99+ for General)",
    successProbability: "High (70-80%) for IIM admission with SC category + decent CAT prep",
    timeCommitment: "6-8 months CAT preparation + 2 years MBA",
    overview: "MBA from IIMs/top B-schools opens doors to consulting, product management, investment banking, general management roles with high salaries. With SC category, getting into IIM ABC/FMS becomes much easier. Engineering + MBA is a power combo. Highest long-term earnings potential.",
    eligibility: [
      "Bachelor's degree with 50% (45% for SC) - You exceed with 8.7 CGPA ✓",
      "Valid CAT score (for IIMs) OR XAT/GMAT (for other B-schools)",
      "Age: No limit",
      "Work experience: Not mandatory for IIMs (freshers can apply)"
    ],
    examDetails: [
      "CAT (Common Admission Test): 3 sections (VARC, DILR, QA) - 120 min, 66 questions",
      "Scoring: Percentile-based (99+ for IIM ABC General, 75-85 for SC)",
      "SC Cutoff examples:",
      "  - IIM Ahmedabad: ~75-78 percentile (vs 99+ General)",
      "  - IIM Bangalore: ~75-80 percentile",
      "  - IIM Calcutta: ~70-75 percentile",
      "  - FMS Delhi: ~96-97 percentile (NC-OBC), limited SC data",
      "Selection: CAT score + Academic record (your 8.7 helps) + WAT + PI",
      "Exam frequency: Once a year (November), applications in August",
      "Total IIM seats: ~5000 across 20 IIMs (15% SC quota = 750 seats)"
    ],
    colleges: [
      "Top tier (₹25-35 LPA avg): IIM A/B/C, FMS Delhi, ISB Hyderabad, XLRI, IIM L/I/K",
      "Second tier (₹18-25 LPA avg): IIM Indore/Kozhikode/Lucknow, SP Jain, MDI Gurgaon",
      "New IIMs (₹12-20 LPA avg): IIM Trichy/Udaipur/Ranchi/Raipur/Kashipur/Rohtak",
      "Work locations post-MBA: Mumbai, Delhi-NCR, Bangalore, Hyderabad (major cities)",
      "Global MBA: ISB (1 year), can also target international B-schools"
    ],
    preparation: [
      "Duration: 6-8 months (start in March-April for November CAT)",
      "VARC: Reading comprehension, vocabulary, grammar",
      "DILR: Puzzles, logical reasoning, data interpretation",
      "QA: Class 10 math (Arithmetic, Algebra, Geometry, Number system)",
      "Study plan: 3-4 hours daily alongside job/final year",
      "Mock tests: 30-40 full-length CATs mandatory",
      "Coaching: Optional (₹30k-50k online) - Unacademy, Career Launcher, TIME",
      "PI/WAT prep: Post-CAT (if shortlisted) - current affairs, why MBA, goals"
    ],
    careerGrowth: [
      "Post-MBA roles: Consultant (McKinsey, BCG, Bain) ₹25-35 LPA, Product Manager (Google, Amazon) ₹20-30 LPA, Investment Banking (Goldman, JP Morgan) ₹20-40 LPA, General Management (Unilever, P&G) ₹18-28 LPA",
      "Year 0-2: Analyst/Associate - ₹20-35 LPA",
      "Year 3-5: Senior Associate/Manager - ₹35-60 LPA",
      "Year 5-8: Senior Manager/Associate Director - ₹60-100 LPA",
      "Year 8-12: Director/Associate Partner - ₹1-2 Cr",
      "Year 12+: Partner/VP/CXO - ₹2-5 Cr+",
      "Entrepreneurship: MBA grads often start successful startups (funding, network access)",
      "Sectors: Consulting, Banking, Tech, FMCG, Pharma, E-commerce, Startups"
    ],
    pros: [
      "Highest long-term earning potential (₹1-3 Cr by 15 years achievable)",
      "15% SC reservation makes IIM admission much easier (75-85 percentile vs 99+)",
      "Career pivot: Move from tech to consulting/PM/banking/management",
      "IIM brand opens global opportunities",
      "Network: Alumni network extremely valuable (investors, mentors, jobs)",
      "Accelerated career growth post-MBA",
      "Exposure to strategy, business, leadership",
      "Entrepreneurship: Best foundation for starting your own company",
      "Work in diverse sectors (not limited to tech)"
    ],
    cons: [
      "High MBA fees: ₹20-25L (IIM ABC), loans available but debt burden",
      "2 years invested (not earning, plus fees)",
      "Opportunity cost: Could be earning ₹20-30 LPA in tech job during MBA",
      "Post-MBA jobs are high pressure (consulting = 70-80 hour weeks)",
      "Not guaranteed success (placement depends on market, your performance)",
      "ROI questionable if MBA from tier-2/3 colleges",
      "Age: Will be 25-26 by MBA completion, late start in career"
    ],
    actionPlan: [
      "Option 1: CAT after B.Tech (4th year)",
      "  - Start prep in June (4th year), take CAT in November",
      "  - Join IIM in June next year (if selected)",
      "  - Timeline: B.Tech (2025) → CAT prep (2025) → IIM (2026-2028)",
      "Option 2: Work 2-3 years, then MBA (recommended)",
      "  - Get tech job after B.Tech (₹8-15 LPA), work 2-3 years",
      "  - Save money, gain experience (helps in MBA admissions + placements)",
      "  - Take CAT, join IIM",
      "  - Timeline: B.Tech (2025) → Work (2025-2028) → CAT → IIM (2029-2031)",
      "Preparation:",
      "  - Month 1-3: Complete syllabus (VARC, DILR, QA)",
      "  - Month 4-6: Practice sectional tests, previous year papers",
      "  - Month 7-8: Full-length mocks (30+ tests), weak area focus",
      "  - Post-CAT: WAT/PI prep if shortlisted (current affairs, profile building)"
    ],
    resources: [
      "Official: iimcat.ac.in",
      "Coaching: Unacademy, Career Launcher, TIME, IMS (₹30k-60k online)",
      "Books: Arun Sharma (QA, DILR), Norman Lewis (Word Power), RC99 (Reading)",
      "Mock Tests: Official CAT mocks (most important), Unacademy, Career Launcher",
      "YouTube: Rodha (Unacademy), CAT preparation channels",
      "Free resources: PagalGuy forum (MBA aspirants community), MBA Crystal Ball",
      "PI/WAT: Personal MBA Coach, Endeavor Careers"
    ],
    costs: "CAT Application: ₹2200 (₹1100 for SC), Coaching (optional): ₹30k-60k, Mock tests: ₹2000-5000, MBA Fees (IIM ABC): ₹23-25L total (Education loans available at 8-10% interest), Total investment: ₹25-30L for full MBA"
  }
];

export default function Home() {
  const [expandedPath, setExpandedPath] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(careerPaths.map(p => p.category)))];

  const filteredPaths = selectedCategory === "All"
    ? careerPaths
    : careerPaths.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Anand Ambhore</h1>
          <p className="text-xl md:text-2xl mb-2">B.Tech AI/ML | 3rd Year | CGPA: 8.7</p>
          <p className="text-lg opacity-90">Comprehensive Career Pathways Guide</p>
          <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <p className="text-sm md:text-base">
              <strong>SC Category Benefits:</strong> With your SC category status and excellent CGPA of 8.7,
              you have significant advantages including 15% reservation in most government jobs/colleges,
              age relaxation, lower cutoffs, and extra attempts. This guide details every career option
              with specific focus on your advantages and success probability.
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Career Paths */}
      <div className="max-w-6xl mx-auto px-4 pb-12">
        <div className="space-y-4">
          {filteredPaths.map((path, index) => {
            const Icon = path.icon;
            const isExpanded = expandedPath === index;

            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                {/* Card Header */}
                <div
                  className="p-6 cursor-pointer"
                  onClick={() => setExpandedPath(isExpanded ? null : index)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-lg">
                        <Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {path.title}
                        </h2>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
                            {path.category}
                          </span>
                          <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                            Success: {path.successProbability}
                          </span>
                        </div>
                        <div className="grid md:grid-cols-2 gap-2 text-sm">
                          <div className="flex items-center gap-2">
                            <DollarSign className="w-4 h-4 text-green-600" />
                            <span className="text-gray-700 dark:text-gray-300">{path.estimatedSalary}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Award className="w-4 h-4 text-yellow-600" />
                            <span className="text-gray-700 dark:text-gray-300">{path.timeCommitment}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="ml-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                      {isExpanded ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                    </button>
                  </div>
                </div>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="border-t dark:border-gray-700 p-6 space-y-6 bg-gray-50 dark:bg-gray-900">
                    {/* SC Category Advantage - Highlighted */}
                    <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500 p-4 rounded">
                      <h3 className="font-bold text-lg text-amber-900 dark:text-amber-300 mb-2 flex items-center gap-2">
                        <Award className="w-5 h-5" />
                        SC Category Advantage (Your Edge!)
                      </h3>
                      <p className="text-amber-800 dark:text-amber-200 font-medium">{path.scCategoryAdvantage}</p>
                    </div>

                    {/* Overview */}
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Overview</h3>
                      <p className="text-gray-700 dark:text-gray-300">{path.overview}</p>
                    </div>

                    {/* Two Column Layout */}
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Eligibility */}
                      <div>
                        <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-white flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600" />
                          Eligibility
                        </h3>
                        <ul className="space-y-2">
                          {path.eligibility.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                              <span className="text-green-600 mt-1">✓</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Exam Details */}
                      <div>
                        <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-white flex items-center gap-2">
                          <Target className="w-5 h-5 text-blue-600" />
                          Exam/Selection Details
                        </h3>
                        <ul className="space-y-2">
                          {path.examDetails.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                              <span className="text-blue-600 mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Colleges/Institutions */}
                    {path.colleges.length > 0 && (
                      <div>
                        <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-white flex items-center gap-2">
                          <GraduationCap className="w-5 h-5 text-purple-600" />
                          Colleges/Institutions/PSUs
                        </h3>
                        <ul className="space-y-2">
                          {path.colleges.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                              <span className="text-purple-600 mt-1">▸</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Preparation Strategy */}
                    <div>
                      <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-white flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-indigo-600" />
                        Preparation Strategy
                      </h3>
                      <ul className="space-y-2">
                        {path.preparation.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                            <span className="text-indigo-600 mt-1">▸</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Career Growth */}
                    <div>
                      <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-white flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-green-600" />
                        Career Growth & Salary Progression
                      </h3>
                      <ul className="space-y-2">
                        {path.careerGrowth.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                            <span className="text-green-600 mt-1">▸</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pros & Cons */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                        <h3 className="font-bold text-lg mb-3 text-green-900 dark:text-green-300">✓ Pros</h3>
                        <ul className="space-y-2">
                          {path.pros.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-green-800 dark:text-green-200">
                              <span className="text-green-600 mt-1">+</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                        <h3 className="font-bold text-lg mb-3 text-red-900 dark:text-red-300">✗ Cons</h3>
                        <ul className="space-y-2">
                          {path.cons.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-red-800 dark:text-red-200">
                              <span className="text-red-600 mt-1">-</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Action Plan */}
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                      <h3 className="font-bold text-lg mb-3 text-blue-900 dark:text-blue-300">📋 Step-by-Step Action Plan</h3>
                      <ul className="space-y-2">
                        {path.actionPlan.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-blue-800 dark:text-blue-200">
                            <span className="font-bold mt-1">{i + 1}.</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Resources */}
                    <div>
                      <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">📚 Resources & Links</h3>
                      <ul className="space-y-2">
                        {path.resources.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                            <span className="text-indigo-600 mt-1">🔗</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Costs */}
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                      <h3 className="font-bold text-lg mb-2 text-yellow-900 dark:text-yellow-300 flex items-center gap-2">
                        <DollarSign className="w-5 h-5" />
                        Investment Required
                      </h3>
                      <p className="text-yellow-800 dark:text-yellow-200">{path.costs}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 mt-12">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg font-medium mb-2">Anand Ambhore - Career Pathways Guide</p>
          <p className="text-gray-400 text-sm">
            This comprehensive guide covers all major career options after B.Tech AI/ML with special focus on
            SC category advantages. Each path includes detailed preparation strategies, success probability,
            salary ranges, and action plans. Make informed decisions about your future!
          </p>
          <p className="text-gray-500 text-xs mt-4">
            Last updated: 2025 | All information is approximate and subject to change
          </p>
        </div>
      </footer>
    </div>
  );
}
