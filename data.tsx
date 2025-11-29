// import { SlideData, SlideType } from './types';

// export const slides: SlideData[] = [
//   // --- INTRO ---
//   {
//     id: 1,
//     type: SlideType.TITLE,
//     title: "PROJECT RISK MANAGEMENT",
//     subtitle: "Planning, Analysis, and Control in IT Projects",
//     section: "Intro"
//   },
//   {
//     id: 2,
//     type: SlideType.LIST,
//     title: "INTRODUCTION",
//     subtitle: "Why Risk Management Matters?",
//     content: [
//       "70% of IT Projects fail to meet Time, Budget, or Scope goals.",
//       "Risk Management is the key differentiator for success.",
//       "Shift from Reactive ('Firefighting') to Proactive planning.",
//       "Two main phases: Analysis & Response."
//     ],
//     section: "Intro"
//   },
//   {
//     id: 3,
//     type: SlideType.SPLIT,
//     title: "WHAT IS RISK MANAGEMENT?",
//     content: [
//       "The systematic process of managing uncertainty.",
//       "Identifying potential problems before they occur.",
//       "Minimizing negative impacts on project objectives.",
//       "Maximizing the probability of project success.",
//       "A continuous process throughout the Project Lifecycle."
//     ],
//     visualConfig: { icon: 'ShieldAlert' },
//     section: "Intro"
//   },
  
//   // --- PLANNING ---
//   {
//     id: 4,
//     type: SlideType.LIST,
//     title: "RISK PLANNING",
//     subtitle: "Key Components",
//     content: [
//       "Methodology: Choosing the framework (PMBOK, PRINCE2, Agile).",
//       "Roles & Responsibilities: Defining who owns the risks.",
//       "Budgeting: Allocating Contingency Reserves.",
//       "Categorization: Technical, External, Organizational, Project Management."
//     ],
//     section: "Planning"
//   },
//   {
//     id: 5,
//     type: SlideType.SPLIT,
//     title: "RISK IDENTIFICATION",
//     content: [
//       "Brainstorming: Collaborative team sessions.",
//       "Delphi Technique: Anonymous expert consensus.",
//       "SWOT Analysis: Strengths, Weaknesses, Opportunities, Threats.",
//       "Checklists & Root Cause Analysis.",
//       "Historical Data: Learning from past project post-mortems."
//     ],
//     visualConfig: { icon: 'Search' },
//     section: "Planning"
//   },

//   // --- ANALYSIS ---
//   {
//     id: 6,
//     type: SlideType.COMPARISON,
//     title: "ANALYSIS TYPES",
//     subtitle: "Qualitative vs Quantitative",
//     comparisonData: {
//       left: {
//         title: "Qualitative Analysis",
//         points: [
//           "Subjective assessment (Expert Judgment).",
//           "Probability (Low/Medium/High).",
//           "Impact (Minor/Major/Critical).",
//           "Quick & Cost-effective.",
//           "Output: Prioritized Risk Register."
//         ],
//         type: "neutral"
//       },
//       right: {
//         title: "Quantitative Analysis",
//         points: [
//           "Data-driven (Numerical values).",
//           "Expected Monetary Value (EMV).",
//           "Monte Carlo Simulation.",
//           "Time-consuming but precise.",
//           "Output: Financial reserve calculations."
//         ],
//         type: "neutral"
//       }
//     },
//     section: "Analysis"
//   },
//   {
//     id: 7,
//     type: SlideType.MATRIX,
//     title: "PROBABILITY-IMPACT MATRIX",
//     subtitle: "Visualizing Risk Priority",
//     content: [],
//     section: "Analysis"
//   },
//   {
//     id: 8,
//     type: SlideType.SPLIT,
//     title: "EMV CALCULATION (EXAMPLE)",
//     subtitle: "E-Commerce Project Scenario",
//     content: [
//       "Risk: Payment Gateway Integration Failure.",
//       "Probability (P): 35%",
//       "Financial Impact (I): $50,000",
//       "Formula: EMV = P × I",
//       "Calculation: 0.35 × $50,000 = $17,500",
//       "Action: Allocate $17,500 to the Contingency Reserve."
//     ],
//     visualConfig: { icon: 'Calculator' },
//     section: "Analysis"
//   },

//   // --- IT RISKS ---
//   {
//     id: 9,
//     type: SlideType.LIST,
//     title: "IT-SPECIFIC RISKS",
//     subtitle: "Technical & Security Challenges",
//     content: [
//       "Cybersecurity: DDoS, Ransomware, SQL Injection.",
//       "Social Engineering: Phishing attacks on staff.",
//       "Tech Obsolescence: End-of-Life software/libraries.",
//       "Integration: API incompatibility & legacy system failures."
//     ],
//     section: "IT Risks"
//   },
//   {
//     id: 10,
//     type: SlideType.LIST,
//     title: "HUMAN RESOURCES RISKS",
//     subtitle: "The 'People' Factor",
//     content: [
//       "Key Person Risk ('Bus Factor'): Reliance on one expert.",
//       "Knowledge Drain: Loss of tacit knowledge.",
//       "Skill Gaps: Team lacks expertise in new stack.",
//       "Burnout & High Turnover.",
//       "Mitigation: Documentation, Pair Programming, Cross-training."
//     ],
//     section: "IT Risks"
//   },

//   // --- REGISTER ---
//   {
//     id: 11,
//     type: SlideType.TABLE,
//     title: "RISK REGISTER",
//     subtitle: "Living Document Examples",
//     content: [],
//     tableData: [
//       { id: "ID", risk: "Risk Description", prob: "Prob", impact: "Impact", priority: "Priority", strategy: "Strategy", owner: "Owner", status: "Status" },
//       { id: "R01", risk: "Senior Architect leaves", prob: "40%", impact: "High", priority: "High", strategy: "Mitigate", owner: "HR Lead", status: "Active" },
//       { id: "R02", risk: "Legacy API Failure", prob: "60%", impact: "Critical", priority: "Critical", strategy: "Avoid/Mitigate", owner: "Tech Lead", status: "Active" },
//       { id: "R03", risk: "Cloud Budget Overrun", prob: "70%", impact: "Medium", priority: "High", strategy: "Monitor", owner: "FinOps", status: "Active" }
//     ],
//     section: "Register"
//   },

//   // --- RESPONSE ---
//   {
//     id: 12,
//     type: SlideType.CHART,
//     title: "RESPONSE STRATEGIES",
//     subtitle: "Handling Threats",
//     content: [],
//     chartData: [
//       { name: "Mitigate", value: 45, fill: "#eab308" },
//       { name: "Avoid", value: 25, fill: "#ef4444" },
//       { name: "Transfer", value: 20, fill: "#3b82f6" },
//       { name: "Accept", value: 10, fill: "#22c55e" },
//     ],
//     section: "Response"
//   },
//   {
//     id: 13,
//     type: SlideType.COMPARISON,
//     title: "STRATEGY DETAILS",
//     subtitle: "Active vs Passive",
//     comparisonData: {
//       left: {
//         title: "Mitigate & Avoid",
//         points: [
//           "Avoid: Eliminate the risk entirely (e.g., Change scope/tech).",
//           "Mitigate: Reduce Probability or Impact (e.g., Testing, Backups).",
//           "Most common approach in IT.",
//           "Proactive action required."
//         ],
//         type: "neutral"
//       },
//       right: {
//         title: "Transfer & Accept",
//         points: [
//           "Transfer: Shift responsibility (e.g., Insurance, Outsourcing).",
//           "Accept: No immediate action (Passive) or Plan B (Active).",
//           "Used for low impact or unmanageable risks."
//         ],
//         type: "neutral"
//       }
//     },
//     section: "Response"
//   },
  
//   // --- MONITORING ---
//   {
//     id: 14,
//     type: SlideType.LIST,
//     title: "MONITORING & CONTROL",
//     subtitle: "Staying on Track",
//     content: [
//       "Regular Reviews: Weekly/Monthly Risk meetings.",
//       "Risk Triggers: Early warning signs (e.g., missed sprint goals).",
//       "Audits: Assessing the effectiveness of risk processes.",
//       "KPIs: Burndown charts, number of Active vs Closed risks."
//     ],
//     section: "Control"
//   },

//   // --- CASE STUDIES ---
//   {
//     id: 15,
//     type: SlideType.COMPARISON,
//     title: "CASE STUDIES",
//     subtitle: "Success vs Failure",
//     comparisonData: {
//       left: {
//         title: "Success: Spotify",
//         subtitle: "Microservices Migration",
//         points: [
//           "Risk: Downtime during massive architectural shift.",
//           "Strategy: 'Strangler Fig' pattern (gradual replacement).",
//           "Result: Zero downtime, seamless transition."
//         ],
//         type: "success"
//       },
//       right: {
//         title: "Failure: Healthcare.gov",
//         subtitle: "Launch Disaster (2013)",
//         points: [
//           "Risk: Scalability & Third-party integration.",
//           "Failure: No Load Testing, political pressure to launch.",
//           "Result: System crash, $500M+ remediation cost."
//         ],
//         type: "failure"
//       }
//     },
//     section: "Cases"
//   },

//   // --- PRACTICAL SCENARIO ---
//   {
//     id: 16,
//     type: SlideType.SPLIT,
//     title: "PRACTICE SCENARIO",
//     subtitle: "Mobile Banking App Project",
//     content: [
//       "Project: iOS/Android Banking Application.",
//       "Team: 8 people (Cross-functional).",
//       "Timeline: 9 months.",
//       "Budget: $250,000.",
//       "Goal: Secure, fast, regulatory compliant."
//     ],
//     visualConfig: { icon: 'Smartphone' },
//     section: "Practice"
//   },
//   {
//     id: 17,
//     type: SlideType.TABLE,
//     title: "SCENARIO RISKS",
//     subtitle: "Identified Threats",
//     content: [],
//     tableData: [
//       { id: "ID", risk: "Risk Event", prob: "Prob", impact: "Imp", priority: "Pri", strategy: "Strategy", owner: "Role", status: "St" },
//       { id: "R1", risk: "Biometric Auth Bypass", prob: "35%", impact: "Crit", priority: "Crit", strategy: "Transfer", owner: "SecLead", status: "Open" },
//       { id: "R2", risk: "App Store Rejection", prob: "40%", impact: "Med", priority: "Med", strategy: "Mitigate", owner: "PM", status: "Open" },
//       { id: "R3", risk: "API Latency >2s", prob: "55%", impact: "High", priority: "High", strategy: "Mitigate", owner: "DevLead", status: "Open" }
//     ],
//     section: "Practice"
//   },

//   // --- CONCLUSION ---
//   {
//     id: 18,
//     type: SlideType.LIST,
//     title: "KEY TAKEAWAYS",
//     subtitle: "Final Recommendations",
//     content: [
//       "Start Early: Risk management begins at project inception.",
//       "Budgeting: Always allocate a 10-15% Contingency Reserve.",
//       "Culture: Encourage the team to speak up about risks.",
//       "Documentation: The Risk Register is a living document, not a one-time task."
//     ],
//     section: "Conclusion"
//   },
//   {
//     id: 19,
//     type: SlideType.FINAL,
//     title: "Q & A",
//     subtitle: "Thank you for your attention!",
//     section: "End"
//   }
// ];

import { SlideData, SlideType } from './types';

export const slides: SlideData[] = [
  // --- INTRO ---
  {
    id: 1,
    type: SlideType.TITLE,
    title: "PROJECT RISK MANAGEMENT",
    subtitle: "Planning, Analysis, and Control in IT Projects",
    section: "Intro"
  },
  {
    id: 2,
    type: SlideType.LIST,
    title: "INTRODUCTION",
    subtitle: "Why Risk Management Matters?",
    content: [
      "70% of IT Projects fail to meet Time, Budget, or Scope goals.",
      "Risk Management is the key differentiator for success.",
      "Shift from Reactive ('Firefighting') to Proactive planning.",
      "Two main phases: Analysis & Response."
    ],
    section: "Intro"
  },
  {
    id: 3,
    type: SlideType.SPLIT,
    title: "WHAT IS RISK MANAGEMENT?",
    content: [
      "The systematic process of managing uncertainty.",
      "Identifying potential problems before they occur.",
      "Minimizing negative impacts on project objectives.",
      "Maximizing the probability of project success.",
      "A continuous process throughout the Project Lifecycle."
    ],
    visualConfig: { icon: 'ShieldAlert' },
    section: "Intro"
  },
  
  // --- PLANNING ---
  {
    id: 4,
    type: SlideType.LIST,
    title: "RISK PLANNING",
    subtitle: "Key Components",
    content: [
      "Methodology: Choosing the framework (PMBOK, PRINCE2, Agile).",
      "Roles & Responsibilities: Defining who owns the risks.",
      "Budgeting: Allocating Contingency Reserves.",
      "Categorization: Technical, External, Organizational, Project Management."
    ],
    section: "Planning"
  },
  {
    id: 5,
    type: SlideType.SPLIT,
    title: "RISK IDENTIFICATION",
    content: [
      "Brainstorming: Collaborative team sessions.",
      "Delphi Technique: Anonymous expert consensus.",
      "SWOT Analysis: Strengths, Weaknesses, Opportunities, Threats.",
      "Checklists & Root Cause Analysis.",
      "Historical Data: Learning from past project post-mortems."
    ],
    visualConfig: { icon: 'Search' },
    section: "Planning"
  },

  // --- ANALYSIS ---
  {
    id: 6,
    type: SlideType.COMPARISON,
    title: "ANALYSIS TYPES",
    subtitle: "Qualitative vs Quantitative",
    comparisonData: {
      left: {
        title: "Qualitative Analysis",
        points: [
          "Subjective assessment (Expert Judgment).",
          "Probability (Low/Medium/High).",
          "Impact (Minor/Major/Critical).",
          "Quick & Cost-effective.",
          "Output: Prioritized Risk Register."
        ],
        type: "neutral"
      },
      right: {
        title: "Quantitative Analysis",
        points: [
          "Data-driven (Numerical values).",
          "Expected Monetary Value (EMV).",
          "Monte Carlo Simulation.",
          "Time-consuming but precise.",
          "Output: Financial reserve calculations."
        ],
        type: "neutral"
      }
    },
    section: "Analysis"
  },
  {
    id: 7,
    type: SlideType.MATRIX,
    title: "PROBABILITY-IMPACT MATRIX",
    subtitle: "Visualizing Risk Priority",
    content: [],
    section: "Analysis"
  },
  {
    id: 8,
    type: SlideType.SPLIT,
    title: "EMV CALCULATION (EXAMPLE)",
    subtitle: "E-Commerce Project Scenario",
    content: [
      "Risk: Payment Gateway Integration Failure.",
      "Probability (P): 35%",
      "Financial Impact (I): $50,000",
      "Formula: EMV = P × I",
      "Calculation: 0.35 × $50,000 = $17,500",
      "Action: Allocate $17,500 to the Contingency Reserve."
    ],
    visualConfig: { icon: 'Calculator' },
    section: "Analysis"
  },

  // --- IT RISKS ---
  {
    id: 9,
    type: SlideType.LIST,
    title: "IT-SPECIFIC RISKS",
    subtitle: "Technical & Security Challenges",
    content: [
      "Cybersecurity: DDoS, Ransomware, SQL Injection.",
      "Social Engineering: Phishing attacks on staff.",
      "Tech Obsolescence: End-of-Life software/libraries.",
      "Integration: API incompatibility & legacy system failures."
    ],
    section: "IT Risks"
  },
  {
    id: 10,
    type: SlideType.LIST,
    title: "HUMAN RESOURCES RISKS",
    subtitle: "The 'People' Factor",
    content: [
      "Key Person Risk ('Bus Factor'): Reliance on one expert.",
      "Knowledge Drain: Loss of tacit knowledge.",
      "Skill Gaps: Team lacks expertise in new stack.",
      "Burnout & High Turnover.",
      "Mitigation: Documentation, Pair Programming, Cross-training."
    ],
    section: "IT Risks"
  },

  // --- REGISTER ---
  {
    id: 11,
    type: SlideType.TABLE,
    title: "RISK REGISTER",
    subtitle: "Living Document Examples",
    content: [],
    tableData: [
      { id: "ID", risk: "Risk Description", prob: "Prob", impact: "Impact", priority: "Priority", strategy: "Strategy", owner: "Owner", status: "Status" },
      { id: "R01", risk: "Senior Architect leaves", prob: "40%", impact: "High", priority: "High", strategy: "Mitigate", owner: "HR Lead", status: "Active" },
      { id: "R02", risk: "Legacy API Failure", prob: "60%", impact: "Critical", priority: "Critical", strategy: "Avoid/Mitigate", owner: "Tech Lead", status: "Active" },
      { id: "R03", risk: "Cloud Budget Overrun", prob: "70%", impact: "Medium", priority: "High", strategy: "Monitor", owner: "FinOps", status: "Active" }
    ],
    section: "Register"
  },

  // --- RESPONSE ---
  {
    id: 12,
    type: SlideType.CHART,
    title: "RESPONSE STRATEGIES",
    subtitle: "Handling Threats",
    content: [],
    chartData: [
      { name: "Mitigate", value: 45, fill: "#eab308" },
      { name: "Avoid", value: 25, fill: "#ef4444" },
      { name: "Transfer", value: 20, fill: "#3b82f6" },
      { name: "Accept", value: 10, fill: "#22c55e" },
    ],
    section: "Response"
  },
  {
    id: 13,
    type: SlideType.COMPARISON,
    title: "STRATEGY DETAILS",
    subtitle: "Active vs Passive",
    comparisonData: {
      left: {
        title: "Mitigate & Avoid",
        points: [
          "Avoid: Eliminate the risk entirely (e.g., Change scope/tech).",
          "Mitigate: Reduce Probability or Impact (e.g., Testing, Backups).",
          "Most common approach in IT.",
          "Proactive action required."
        ],
        type: "neutral"
      },
      right: {
        title: "Transfer & Accept",
        points: [
          "Transfer: Shift responsibility (e.g., Insurance, Outsourcing).",
          "Accept: No immediate action (Passive) or Plan B (Active).",
          "Used for low impact or unmanageable risks."
        ],
        type: "neutral"
      }
    },
    section: "Response"
  },
  
  // --- MONITORING & KPIs ---
  {
    id: 14,
    type: SlideType.LIST,
    title: "MONITORING & CONTROL",
    subtitle: "Staying on Track",
    content: [
      "Regular Reviews: Weekly/Monthly Risk meetings.",
      "Risk Triggers: Early warning signs (e.g., missed sprint goals).",
      "Audits: Assessing the effectiveness of risk processes.",
      "KPIs: Burndown charts, number of Active vs Closed risks."
    ],
    section: "Control"
  },

  // ⭐ NEW: KPI SLIDE 1
  {
    id: 15,
    type: SlideType.CHART,
    title: "RISK KPIs - TRACKING METRICS",
    subtitle: "Key Performance Indicators",
    content: [
      "Total Active Risks: Monitor growth/decline trend.",
      "Critical vs Low Risks: Percentage distribution.",
      "Average Resolution Time: Days to close a risk.",
      "Occurred vs Identified: Forecast accuracy rate."
    ],
    chartData: [
      { name: "Week 1", value: 15, fill: "#ef4444" },
      { name: "Week 2", value: 18, fill: "#f97316" },
      { name: "Week 3", value: 12, fill: "#eab308" },
      { name: "Week 4", value: 8, fill: "#22c55e" },
    ],
    section: "Control"
  },

  // ⭐ NEW: KPI SLIDE 2
  {
    id: 16,
    type: SlideType.TABLE,
    title: "KPI DASHBOARD EXAMPLE",
    subtitle: "Monthly Risk Report",
    content: [],
    tableData: [
      { metric: "Metric", target: "Target", actual: "Actual", status: "Status" },
      { metric: "Active Risks", target: "< 10", actual: "8", status: "✅ On Track" },
      { metric: "Critical Risks", target: "0", actual: "1", status: "⚠️ Attention" },
      { metric: "Avg Resolution Time", target: "21 days", actual: "18 days", status: "✅ Good" },
      { metric: "Forecast Accuracy", target: "80%", actual: "85%", status: "✅ Excellent" },
      { metric: "Budget Variance", target: "±10%", actual: "+15%", status: "❌ Over" }
    ],
    section: "Control"
  },

  // ⭐ NEW: KAIZEN IN RISK MANAGEMENT
  {
    id: 17,
    type: SlideType.SPLIT,
    title: "KAIZEN IN RISK MANAGEMENT",
    subtitle: "Continuous Improvement Philosophy",
    content: [
      "Origin: Japanese concept ('Change for Better').",
      "Apply to Risk Process: Regular retrospectives after each sprint/phase.",
      "Ask: What risks did we miss? What worked well?",
      "Small, incremental improvements to Risk Register and processes.",
      "Culture: Everyone is responsible for identifying improvements."
    ],
    visualConfig: { icon: 'TrendingUp' },
    section: "Control"
  },

  // ⭐ NEW: KAIZEN CYCLE
  {
    id: 18,
    type: SlideType.LIST,
    title: "KAIZEN CYCLE (PDCA)",
    subtitle: "Plan-Do-Check-Act for Risks",
    content: [
      "Plan: Identify a risk process weakness (e.g., slow risk reviews).",
      "Do: Implement a small change (e.g., automated reminders).",
      "Check: Measure the impact (Did review attendance improve?).",
      "Act: Standardize if successful, adjust if not.",
      "Example: Sprint retrospectives → Update Risk Register template."
    ],
    section: "Control"
  },

  // --- CASE STUDIES ---
  {
    id: 19,
    type: SlideType.COMPARISON,
    title: "CASE STUDIES",
    subtitle: "Success vs Failure",
    comparisonData: {
      left: {
        title: "Success: Spotify",
        subtitle: "Microservices Migration",
        points: [
          "Risk: Downtime during massive architectural shift.",
          "Strategy: 'Strangler Fig' pattern (gradual replacement).",
          "Result: Zero downtime, seamless transition."
        ],
        type: "success"
      },
      right: {
        title: "Failure: Healthcare.gov",
        subtitle: "Launch Disaster (2013)",
        points: [
          "Risk: Scalability & Third-party integration.",
          "Failure: No Load Testing, political pressure to launch.",
          "Result: System crash, $500M+ remediation cost."
        ],
        type: "failure"
      }
    },
    section: "Cases"
  },

  // ⭐ NEW: INTERACTIVE CASE STUDY 1
  {
    id: 20,
    type: SlideType.SPLIT,
    title: "CASE STUDY EXERCISE 1",
    subtitle: "E-Government Portal (Azerbaijan)",
    content: [
      "Scenario: Government portal integrating 15+ agencies.",
      "Problem: 3 months before launch, a critical API provider announces shutdown.",
      "Questions for Students:",
      "1. What type of risk is this? (External, Technical, etc.)",
      "2. What should have been done during planning?",
      "3. What Response Strategy would you apply now?",
      "4. Calculate EMV if switching costs $80K and delay costs $120K."
    ],
    visualConfig: { icon: 'HelpCircle' },
    section: "Cases"
  },

  // ⭐ NEW: INTERACTIVE CASE STUDY 2
  {
    id: 21,
    type: SlideType.SPLIT,
    title: "CASE STUDY EXERCISE 2",
    subtitle: "Fintech Startup - Payment App",
    content: [
      "Scenario: 4 weeks before launch, penetration test reveals 12 critical vulnerabilities.",
      "Pressure: Marketing campaign already started, investors expect launch.",
      "Questions for Students:",
      "1. Risk Category? (Security/Compliance)",
      "2. Should they launch on time or delay? Why?",
      "3. What Response Strategy: Accept, Mitigate, or Avoid?",
      "4. What KPI would track this risk resolution?"
    ],
    visualConfig: { icon: 'AlertTriangle' },
    section: "Cases"
  },

  // ⭐ NEW: INTERACTIVE CASE STUDY 3
  {
    id: 22,
    type: SlideType.SPLIT,
    title: "CASE STUDY EXERCISE 3",
    subtitle: "Cloud Migration Project",
    content: [
      "Scenario: Bank migrating to AWS. Senior Cloud Architect (only expert) submits resignation.",
      "Timeline: 5 months remaining, architect leaving in 2 weeks.",
      "Questions for Students:",
      "1. What is the Risk ID, Probability, and Impact?",
      "2. Create a Risk Register entry for this.",
      "3. Suggest 3 mitigation actions (short-term & long-term).",
      "4. How does Kaizen apply here for future prevention?"
    ],
    visualConfig: { icon: 'UserX' },
    section: "Cases"
  },

  // ⭐ NEW: CASE ANSWERS SLIDE (Hidden/Reveal Later)
  {
    id: 23,
    type: SlideType.LIST,
    title: "CASE STUDY ANSWERS",
    subtitle: "Discussion Points",
    content: [
      "Case 1: External/Tech risk. Mitigation: Backup vendor, early vendor assessment. EMV = P × (80K+120K).",
      "Case 2: Security risk. Recommendation: DELAY launch. Strategy: Mitigate (fix vulns). KPI: 'Critical Vulns = 0'.",
      "Case 3: HR risk (R-HR01, P=90%, I=High). Mitigation: Knowledge transfer, hire consultant, cross-train team. Kaizen: Implement 'Bus Factor > 1' rule."
    ],
    section: "Cases"
  },

  // --- PRACTICAL SCENARIO ---
  {
    id: 24,
    type: SlideType.SPLIT,
    title: "PRACTICE SCENARIO",
    subtitle: "Mobile Banking App Project",
    content: [
      "Project: iOS/Android Banking Application.",
      "Team: 8 people (Cross-functional).",
      "Timeline: 9 months.",
      "Budget: $250,000.",
      "Goal: Secure, fast, regulatory compliant."
    ],
    visualConfig: { icon: 'Smartphone' },
    section: "Practice"
  },
  {
    id: 25,
    type: SlideType.TABLE,
    title: "SCENARIO RISKS",
    subtitle: "Identified Threats",
    content: [],
    tableData: [
      { id: "ID", risk: "Risk Event", prob: "Prob", impact: "Imp", priority: "Pri", strategy: "Strategy", owner: "Role", status: "St" },
      { id: "R1", risk: "Biometric Auth Bypass", prob: "35%", impact: "Crit", priority: "Crit", strategy: "Transfer", owner: "SecLead", status: "Open" },
      { id: "R2", risk: "App Store Rejection", prob: "40%", impact: "Med", priority: "Med", strategy: "Mitigate", owner: "PM", status: "Open" },
      { id: "R3", risk: "API Latency >2s", prob: "55%", impact: "High", priority: "High", strategy: "Mitigate", owner: "DevLead", status: "Open" }
    ],
    section: "Practice"
  },

  // ⭐ NEW: RISK RESPONSE PLAN EXAMPLE
  {
    id: 26,
    type: SlideType.LIST,
    title: "RESPONSE PLAN: R1 EXAMPLE",
    subtitle: "Biometric Auth Bypass Risk",
    content: [
      "Strategy: Transfer + Mitigate.",
      "Action 1: Use Apple/Google official APIs (not custom).",
      "Action 2: Hire certified penetration testing firm ($15K).",
      "Action 3: Purchase Cyber Insurance ($8K/year, $150K coverage).",
      "Action 4: Implement Bug Bounty program ($10K reserve).",
      "Owner: Security Lead. Timeline: Month 3-7. Success Criteria: Zero critical vulnerabilities in final audit."
    ],
    section: "Practice"
  },

  // --- CONCLUSION ---
  {
    id: 27,
    type: SlideType.LIST,
    title: "KEY TAKEAWAYS",
    subtitle: "Final Recommendations",
    content: [
      "Start Early: Risk management begins at project inception.",
      "Budgeting: Always allocate a 10-15% Contingency Reserve.",
      "Culture: Encourage the team to speak up about risks.",
      "Documentation: The Risk Register is a living document, not a one-time task.",
      "Kaizen: Continuously improve your risk processes through retrospectives."
    ],
    section: "Conclusion"
  },

  // ⭐ NEW: BEST PRACTICES SUMMARY
  {
    id: 28,
    type: SlideType.COMPARISON,
    title: "DO'S AND DON'TS",
    subtitle: "Risk Management Best Practices",
    comparisonData: {
      left: {
        title: "✅ DO",
        points: [
          "Update Risk Register weekly.",
          "Assign clear ownership to each risk.",
          "Run 'What-If' scenarios regularly.",
          "Celebrate successful risk mitigation.",
          "Learn from both successes and failures."
        ],
        type: "success"
      },
      right: {
        title: "❌ DON'T",
        points: [
          "Ignore 'low probability' risks entirely.",
          "Skip risk reviews due to time pressure.",
          "Blame individuals when risks occur.",
          "Keep risks hidden from stakeholders.",
          "Forget to archive lessons learned."
        ],
        type: "failure"
      }
    },
    section: "Conclusion"
  },

  // ⭐ NEW: TOOLS & TEMPLATES
  {
    id: 29,
    type: SlideType.LIST,
    title: "TOOLS & RESOURCES",
    subtitle: "Practical Risk Management Tools",
    content: [
      "Risk Register Template: Excel/Google Sheets with formulas.",
      "Software: Jira (Risk tracking), Miro (Brainstorming), Monte Carlo tools.",
      "Frameworks: PMBOK Guide, ISO 31000, NIST Cybersecurity.",
      "Communities: PMI, Risk Management Society, local meetups.",
      "Books: 'The Failure of Risk Management' by Douglas Hubbard."
    ],
    section: "Conclusion"
  },

  {
    id: 30,
    type: SlideType.FINAL,
    title: "Q & A",
    subtitle: "Thank you for your attention!",
    section: "End"
  }
];