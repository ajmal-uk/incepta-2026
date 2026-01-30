// Event categories
export const eventCategories = {
  competitions: {
    title: "Competitions",
    description: "Test your skills and compete for glory",
    color: "#c678ff",
    events: ["hackathon", "ctf", "coderush", "vibecoding", "promptcraft", "obscura", "treasurehunt"],
  },
  workshops: {
    title: "Workshops & Events",
    description: "Learn from industry experts",
    color: "#61dafb",
    events: ["inauguration", "keynote", "panel", "workshops", "appliedai", "shapingai", "workflowautomation", "agenticaiworkshop"],
  },
  /*
  gala: {
    title: "INCEPTA Gala",
    description: "Cultural nights of music and performances",
    color: "#ff6ac1",
    events: ["gala", "flashmob"],
  },
  */
};

export const eventsData = {
  hackathon: {
    title: "GNOSIS",
    badge: "Hackathon",
    category: "competitions",
    tagline: "Insight into Innovation",

    details: [
      { label: "Date", value: "February 5, 2026" },
      { label: "Time", value: "9:00 AM - 9:00 PM" },
      { label: "Venue", value: "MCA Main LAB" },
      { label: "Focus", value: "Agentic AI" },
    ],

    description:
      "GNOSIS is a 12-hour intensive hackathon focused on analytical thinking and innovative problem-solving, with a strong emphasis on agentic AI. Participants will work in teams to build intelligent, autonomous solutions addressing a real-world problem statement.",

    highlights: [
      "Build intelligent, autonomous AI solutions",
      "Strong focus on agentic AI concepts",
      "Real-world problem statements",
      "Industry-relevant judging",
      "Certificates and prizes for top teams",
    ],

    rulesAndGuidelines: {
      generalGuidelines: [
        "Teams can consist of 1–4 members. Inter-college teams are allowed unless stated otherwise.",
        "Problem statement will be provided on the spot. Solutions must strictly align with the given topic and requirements.",
        "The hackathon will run continuously for 12 hours. All submissions must be completed within the allotted time.",
      ],

      technicalAndSubmission: [
        "Any programming language or framework may be used.",
        "Use of agentic AI concepts is strongly encouraged.",
        "External APIs or libraries are allowed if properly cited.",
        "Each team must submit a working prototype.",
        "A presentation explaining the solution is mandatory.",
        "Supporting documents, diagrams, or demos may be included.",
      ],

      policiesAndEthics: [
        "Evaluation will be based on innovation, feasibility, impact, and presentation.",
        "Judges’ decisions are final and binding.",
        "Participants must maintain professional and respectful conduct.",
        "Sharing solutions with other teams or external parties is prohibited.",
        "Plagiarism, unethical behavior, or violation of rules will lead to disqualification.",
      ],
    },

    judgingCriteria: [
      "Alignment with Problem Statement",
      "Innovation & Creativity",
      "Application of Agentic AI",
      "Technical Feasibility & Implementation",
      "Impact & Applicability",
      "Presentation & Communication",
    ],

    judges: ["Industry experts from ABC Company"],

    volunteers: ["Jerardh Tom Jasper", "Muhammed K B"],

    contact: {
      coordinators: [
        {
          name: "Jerardh",
          phone: "+91 755 897 7917",
        },
      ],
    },

    buttonText: "Register Your Team",
    icon: "brainCircuit",
    registrationUrl: "https://app.makemypass.com/event/incepta-hackathon",
  },
  ctf: {
    title: "INCEPTA Cyber Siege",
    badge: "CTF",
    category: "competitions",
    tagline:
      "Dive into the digital abyss, crack the codes, and infiltrate the task force.",

    details: [
      { label: "Date", value: "February 6, 2026" },
      { label: "Time", value: "9:00 AM – 4:00 PM" },
      { label: "Venue", value: "MCA Main LAB" },
      { label: "Registration Fee", value: "₹350 / Team" },
    ],

    description:
      "INCEPTA Cyber Siege is a Jeopardy-style Capture The Flag competition featuring challenges across Web Security, Forensics, Cryptography, Binary Exploitation, and more. Teams earn points by solving tasks, with harder challenges awarding higher scores. Winners are determined by total points, with submission time used as a tie-breaker.",

    highlights: [
      "Jeopardy-style CTF format",
      "Categories include Web, Forensics, Crypto, Binary, and OSINT",
      "Harder challenges yield higher points",
      "Real-time leaderboard",
      "PentesterLab vouchers for top teams",
    ],

    rulesAndGuidelines: {
      gameplayRules: [
        "No brute forcing on remote infrastructure.",
        "No flag sharing with other teams or participants.",
        "No flag hoarding; flags must be submitted promptly.",
        "Only one account per participant is allowed. Each participant can play for only one team.",
        "No spamming challenge authors, players, or platform channels.",
        "Use of any LLM or AI tool for solving challenges will lead to disqualification.",
        "Any attempt to attack, disrupt, or tamper with competition infrastructure will result in immediate disqualification.",
      ],

      submissionAndConsequences: [
        "Winning teams must submit a short write-up of solved challenges.",
        "Failure to submit the write-up within the given time frame will result in disqualification.",
        "Teams violating any rules will be disqualified from the competition.",
      ],
    },

    judgingCriteria: [
      "Top 3 teams on the leaderboard will be declared winners",
      "Winners must submit challenge write-ups to be eligible for prizes",
      "In case of a tie, submission time will be used as the tie-breaker",
    ],

    judges: ["Internal and External Judges (Details to be announced)"],

    volunteers: [
      "3 volunteers for ticket confirmation and on-spot registration",
      "3 volunteers for monitoring the event",
    ],

    prizes: [
      "Pentester lab vouchers:",
      "  • 1st Place - 6 months",
      "  • 2nd Place - 3 months",
      "  • 3rd Place - 1 month",
      "Cash Prize: Prize pool - 12K INR",
    ],

    contact: {
      coordinators: [
        {
          name: "Harishankar",
          phone: "99469 08599",
        },
      ],
    },

    buttonText: "Join the Hunt",
    icon: "shieldCheck",
    registrationUrl: "https://app.makemypass.com/event/cyber-seige-capture-the-flag",
  },
  coderush: {
    title: "Code Rush",
    badge: "Coding",
    category: "competitions",
    tagline: "Code Rush: Run the code before the clock runs you.",

    details: [
      { label: "Date", value: "February 5, 2026" },
      { label: "Time", value: "2:00 PM - 4:00 PM" },
      { label: "Venue", value: "MCA Project LAB" },
      { label: "Platform", value: "HackerRank" },
    ],

    description:
      "Code Rush is a high-speed competitive programming event designed to test your accuracy under pressure. Participants face a rapid-fire set of 25 easy-level problems where the real challenge is translating logic into fast, bug-free code within a strict time limit.",

    highlights: [
      "Rapid-fire competitive programming format",
      "Focus on speed and accuracy",
      "25 easy-level problems released at once",
      "Real-time HackerRank leaderboard",
      "Prizes and certificates for top performers",
    ],

    rulesAndGuidelines: {
      competitionFormat: [
        "This is an individual (solo) competition. Participants must bring their own laptop.",
        "Open to all skill levels. A registered HackerRank account is mandatory.",
        "25 easy-level coding problems will be released simultaneously.",
        "Total contest duration is exactly 90 minutes.",
        "Most major programming languages are allowed (Python, Java, C++, JavaScript).",
        "Compiler versions will be as per HackerRank platform settings.",
        "Primary scoring metric is the number of test cases passed across all problems.",
      ],

      codeOfConduct: [
        "All code must be written from scratch during the contest window.",
        "Use of AI assistants (ChatGPT, Copilot, etc.) is strictly prohibited.",
        "Use of pre-written personal libraries or external code snippets is not allowed.",
        "Any form of communication between participants is forbidden.",
        "Sharing solutions, using multiple accounts, or attempting bot-based submissions will lead to disqualification.",
      ],
    },

    judgingCriteria: [
      "Total number of points earned on the HackerRank leaderboard",
      "Number of test cases passed across all 25 problems",
    ],

    judges: ["Internal and External Judges (Details to be announced)"],

    volunteers: [
      "Subi Suresh – Assistance",
      "Additional volunteers to be announced",
    ],

    contact: {
      coordinators: [
        {
          name: "Subi",
          phone: "85939 78871",
        },
      ],
    },

    buttonText: "Start Coding",
    icon: "zap",
    registrationUrl: "https://app.makemypass.com/event/coderush-coding",
  },
  vibecoding: {
    title: "CodeLess",
    badge: "Vibe Coding",
    category: "competitions",
    tagline: "Vibe Coding: Don't write the code, manage the code",

    details: [
      { label: "Date", value: "February 6, 2026" },
      { label: "Time", value: "2:00 PM - 4:00 PM" },
      { label: "Venue", value: "MCA Project LAB" },
      { label: "Format", value: "AI-assisted Full Stack" },
    ],

    description:
      "CodeLess is a high-intensity AI-assisted coding competition where participants demonstrate their full-stack development skills. Teams have 3 hours to build a functional web application from scratch using AI tools, followed by a live demonstration.",

    highlights: [
      "AI-assisted full-stack development challenge",
      "Build frontend and backend within 3 hours",
      "Live project demonstration",
      "Focus on prompt engineering and system design",
      "Innovation over manual coding",
    ],

    rulesAndGuidelines: {
      participationAndFormat: [
        "Teams must consist of 1–2 members. Only one laptop is allowed per team.",
        "Problem statement and minimum functionalities will be provided on the spot.",
        "Round 1: Code Build (3 Hours). Teams must build a full-stack web application (Frontend + Backend).",
        "Round 2: Live Demo (5 mins/team). Explain application features and backend integration.",
      ],

      technicalGuidelines: [
        "Frontend and Backend must be integrated with working UI and functional logic.",
        "AI tools such as ChatGPT, Gemini, Copilot, Claude are allowed.",
        "Use of tools like Cursor and Lovable is strictly prohibited.",
        "Project must run locally at the end of the build phase.",
      ],

      ethicsAndDisqualification: [
        "Using pre-built GitHub projects, code written before the event, or copying full tutorials is prohibited.",
        "Sharing code between teams or receiving external help represents a violation.",
        "Misbehavior or submitting a non-functional project with no attempt to fix it will lead to disqualification.",
      ],
    },

    judgingCriteria: [
      "Alignment with problem statement",
      "Quality of UI/UX design",
      "Prompt quality (clarity, intent, structure)",
      "Effective use of AI tools",
      "Clarity of the 5-minute demo",
    ],

    judges: ["Internal and External Judges"],

    volunteers: ["To be announced"],

    contact: {
      coordinators: [
        {
          name: "Muhammed",
          phone: "+91 96454 97235",
        },
      ],
    },

    buttonText: "Build with AI",
    icon: "sparkles",
    registrationUrl: "https://app.makemypass.com/event/codeless-vibe-coding",
  },
  promptcraft: {
    title: "PromptVision",
    badge: "Prompt Crafting",
    category: "competitions",
    tagline: "See the image. Shape the prompt. Recreate the vision.",

    details: [
      { label: "Date", value: "February 5, 2026" },
      { label: "Time", value: "2:00 PM - 3:00 PM" },
      { label: "Venue", value: "MCA Project LAB II" },
      { label: "Prize Pool", value: "₹3,000" },
      { label: "Reg Fee", value: "₹50" },
    ],

    description:
      "PromptVision is an AI-powered prompt crafting competition where participants observe a given image and write a precise text prompt to recreate it using an AI image generator. The event tests observation skills, creativity, clarity, and prompt engineering ability.",

    highlights: [
      "Image-to-prompt recreation challenge",
      "Focus on observation and prompt clarity",
      "Single precise prompt submission",
      "Creativity combined with technical prompt structure",
      "Certificates for all participants",
    ],

    rulesAndGuidelines: {
      competitionRules: [
        "Individual participation only. Open to all students. Registration fee of ₹50 is mandatory.",
        "A single reference image will be displayed. Participants must write one detailed prompt in English to recreate it.",
        "Participants may use mobile phones or laptops only for prompt submission via the official Google Form.",
        "Only one submission per participant is allowed.",
      ],

      codeOfConduct: [
        "Prompts must be original and written during the event.",
        "Browsing, AI tools, or external assistance (other than the official generation tool) are strictly prohibited.",
        "Plagiarism, using devices for other purposes, or misbehavior will lead to disqualification.",
      ],
    },

    judgingCriteria: [
      "Accuracy",
      "Detail & Completeness",
      "Clarity & Structure",
      "Creativity",
      "Tie-breaker: Number of meaningful descriptive lines",
    ],

    judges: ["Internal and External Judges (Details to be announced)"],

    volunteers: ["To be announced"],

    contact: {
      coordinators: [
        {
          name: "Safa",
          phone: "90614 45705",
        },
      ],
    },

    buttonText: "Craft Your Prompt",
    icon: "image",
    registrationUrl: "https://app.makemypass.com/event/prompt-vision-prompt-crafting",
  },
  workshops: {
    title: "GenAI Workshops",
    badge: "Workshop",
    category: "workshops",
    tagline:
      "Hands-on learning sessions with industry experts on cutting-edge AI technologies.",
    details: [
      { label: "Dates", value: "Feb 5-6, 2026" },
      { label: "Time", value: "Various Slots" },
      { label: "Venue", value: "MCA Main LAB" },
      { label: "Format", value: "Hands-on" },
      { label: "Certificate", value: "Provided" },
      { label: "Laptop", value: "Required" },
    ],
    description:
      "Deep dive into the world of Generative AI with practical, hands-on workshops conducted by industry professionals.",
    highlights: [
      "Build RAG pipelines from scratch",
      "Create AI agents with no-code tools",
      "Fine-tune open-source LLMs",
      "Industry guest speakers and mentors",
      "Take-home resources and code samples",
    ],
    buttonText: "Book Your Seat",
    icon: "presentation",
    registrationUrl: "#register-workshops", // Add your MakeMyPass URL here
  },
  keynote: {
    title: "Keynote Session",
    badge: "Keynote",
    category: "workshops",
    tagline: "Thinking for Ourselves in the Age of AI",
    details: [
      { label: "Date", value: "February 6, 2026" },
      { label: "Time", value: "11:00 AM - 12:00 PM" },
      { label: "Venue", value: "CETAA Hall" },
      { label: "Speaker", value: "Sourav" },
    ],
    description: " keynote session",
    highlights: [
      "keynote session",
      "",
      "",
      "",
    ],
    buttonText: "Register Now",
    icon: "mic",
    registrationUrl: "#register-keynote", // Add your MakeMyPass URL here
  },
  panel: {
    title: "Panel Discussion",
    badge: "Panel",
    category: "workshops",
    tagline: "From Code to Co-Creation",
    details: [
      { label: "Date", value: "February 5, 2026" },
      { label: "Time", value: "2:00 PM - 4:00 PM" },
      { label: "Venue", value: "MCA Seminar Hall" },
      { label: "Speaker", value: "Aaron" },
    ],
    description: "A thought-provoking panel discussion on 'How AI Can Impact Education'. Industry leaders and educators discuss the benefits, challenges, and future of AI in academia and beyond.",
    highlights: [
      "Panelist: industry professionals",
      "Panelist: industry professionals",
      "Impact on Students & Educators",
      "Future of AI in the workforce",
    ],
    buttonText: "Register Now",
    icon: "users",
    registrationUrl: "#register-panel", // Add your MakeMyPass URL here
  },
  treasurehunt: {
    title: "Treasure Hunt",
    badge: "One Piece Theme",
    category: "competitions",
    tagline: "Embark on a One Piece themed adventure across the campus!",
    details: [
      { label: "Date", value: "February 3, 2026" },
      { label: "Time", value: "2:00 PM - 4:00 PM" },
      { label: "Venue", value: "Open Space" },
      { label: "Team Size", value: "4 - 5 Members" },
      { label: "REG FEE", value: "₹150" },
      { label: "PRIZE POOL", value: "₹2000" },
    ],
    description: "The One Piece Treasure Hunt is a college-wide adventure game where teams act as pirate crews racing to find the ultimate treasure — the One Piece! Each clue is hidden in the form of a photo and riddle, leading teams to the next location.",
    highlights: [
      "5-7 Locations across campus",
      "One Piece themed riddles and clues",
      "Elimination rounds (slowest teams eliminated)",
      "Final treasure chest with prizes",
      "Dedicated 'Marine' volunteer for each team",
    ],
    rulesAndGuidelines: {
      rulesAndRegulations: [
        "Each team must consist of 4 to 5 members.",
        "Team members must stay together throughout the event.",
        "No substitution of team members is allowed after registration.",
        "Each team will receive a unique set of clues.",
        "Clues must be solved in the given sequence.",
        "Each team will be assigned one volunteer to monitor progress and ensure fair play.",
        "Participants must follow all safety and organizer instructions.",
        "The event must be completed within the time limit set by the organizers.",
        "The team that correctly completes all tasks and reaches the final destination first will be declared the winner.",
        "The organizers' decision will be final and binding.",
      ],
      disqualificationCriteria: [
        "Sharing clues, answers, or any information with other teams.",
        "Skipping clues, checkpoints, or solving tasks out of order.",
        "Using mobile phones, smart devices, or any external assistance.",
        "Tampering with, damaging, or removing clues or event materials.",
        "Entering restricted or unsafe areas.",
        "Misconduct, misbehavior, or failure to comply with organizer or volunteer instructions.",
        "Any form of cheating or unfair practice.",
      ],
    },
    judgingCriteria: [
      "Speed: First team to finding the final treasure wins.",
      "Fair Play: Adherence to all rules and volunteer instructions.",
    ],
    judges: ["Event Organizers"],
    volunteers: ["1 Volunteer per Team (Marine/Guardian)"],
    contact: {
      coordinators: [
        {
          name: "Shivarama",
          phone: "8086942328",
        },
      ],
    },
    buttonText: "Assemble Crew",
    icon: "compass",
    registrationUrl: "https://app.makemypass.com/event/treasure-hunt-4",
  },
  obscura: {
    title: "OBSCURA – Digital Treasure Hunt",
    badge: "Digital Treasure Hunt",
    category: "competitions",
    tagline: "The Worthy Shall Conquer",
    icon: "trophy",
    details: [
      { label: "Organized by", value: "Dept. of Computer Applications" },
      { label: "Mode", value: "Online" },
      { label: "Duration", value: "5 Days" },
      { label: "Participation", value: "Individual" },
      { label: "Eligibility", value: "Open to all" },
      { label: "Platform", value: "Official Website" },
      { label: "Registration Fee", value: "₹0" },
      { label: "Contact", value: "Bhavana – +91 73567 23856" },
    ],
    description:
      "Are you ready to decode mysteries hidden in plain sight? OBSCURA is a multi-day digital treasure hunt where participants follow clues and clever digital trails to uncover what others miss. This is not about speed alone — it’s about how well you connect the dots. Each day brings new clues and rounds that gradually increase in difficulty, making OBSCURA suitable for both beginners and seasoned problem-solvers. Whether you join on Day 1 or later, the hunt remains open — but only the most observant will reach the end.",
    highlights: [
      "5-day online event, participate any time during the period",
      "New clues and rounds each day, increasing in difficulty",
      "Open to all, beginners and pros alike",
      "Solve at your own pace within the event window",
      "Prizes for the most observant explorers!",
    ],
    rulesAndGuidelines: {
      generalGuidelines: [
        "Event runs from 1 February 2026 to 5 February 2026.",
        "You can join and participate at any time during the event period.",
        "Each day, new clues and rounds will be released on the website.",
        "Difficulty increases with each round.",
        "Check the website regularly for updates and details.",
      ],
      technicalAndSubmission: [
        "All answers must be submitted through the official website.",
        "You may use the internet for research and solving clues.",
        "Unfair practices or sharing answers publicly will lead to disqualification.",
      ],
      policiesAndEthics: [
        "Respect all participants and organizers.",
        "Organizer decisions are final.",
      ],
    },
    prizes: [
      "Winner: ₹2,000",
      "Runner-Up: ₹1,000",
    ],
    contact: {
      coordinators: [
        {
          name: "Bhavana",
          phone: "+91 73567 23856",
        },
      ],
    },
    registrationUrl: "https://obscura.cetmca.in",
    buttonText: "Register & Play",
  },
  valorant: {
    title: "Valorant",
    badge: "PC FPS",
    category: "egames",
    tagline: "5v5 Tactical Shooter",
    details: [
      { label: "Mode", value: "5v5" },
      { label: "Platform", value: "Online (PC)" },
      { label: "Reg Fee", value: "₹120" },
      { label: "Prize Pool", value: "₹2,000" },
    ],
    description: "Compete in the ultimate 5v5 tactical shooter. Show off your aim, strategy, and teamwork to dominate the lobby.",
    highlights: ["Knockout Tournament", "Cash Prizes", "Live Streamed Finals"],
    contact: {
      coordinators: [
        { name: "Aswin", phone: "8590463908" },
        { name: "Aravind", phone: "8848060367" },
      ],
    },
    buttonText: "Register Team",
    icon: "crosshair",
    registrationUrl: "https://app.makemypass.com/event/coliseum-valorant",
  },
  bgmi: {
    title: "BGMI",
    badge: "Mobile BR",
    category: "egames",
    tagline: "Battlegrounds Mobile India",
    details: [
      { label: "Mode", value: "Squad TPP" },
      { label: "Platform", value: "Online (Mobile)" },
      { label: "Reg Fee", value: "₹100" },
      { label: "Prize Pool", value: "₹2,000" },
    ],
    description: "Drop into the battleground, loot up, and survive till the end. Only the best squad will secure the Chicken Dinner.",
    highlights: ["Squad Matches", "Multiple Maps", "Points System"],
    contact: {
      coordinators: [
        { name: "Abhin Dev", phone: "9846205075" },
        { name: "Bharadwaj", phone: "7994265599" },
      ],
    },
    buttonText: "Register Squad",
    icon: "smartphone",
    registrationUrl: "https://app.makemypass.com/event/coliseum-bgmi",
  },
  efootball: {
    title: "eFootball",
    badge: "Mobile Sports",
    category: "egames",
    tagline: "eFootball Online Championship",
    details: [
      { label: "Mode", value: "1v1" },
      { label: "Platform", value: "Online (Mobile)" },
      { label: "Reg Fee", value: "₹50" },
      { label: "Prize Pool", value: "₹2,000" },
    ],
    description: "Showcase your football skills on the virtual pitch. Dribble, pass, and score your way to victory.",
    highlights: ["1v1 Matches", "Knockout Format"],
    contact: {
      coordinators: [
        { name: "Abhimanyu", phone: "7510884289" },
        { name: "Abraham", phone: "9778527716" },
      ],
    },
    buttonText: "Register Now",
    icon: "trophy",
    registrationUrl: "https://app.makemypass.com/event/coliseum-efootball",
  },
  minimilitia: {
    title: "Mini Militia",
    badge: "Mobile Action",
    category: "egames",
    tagline: "Mini Militia Online Championship",
    details: [
      { label: "Mode", value: "6 Player/Solo" },
      { label: "Platform", value: "Offline (Mobile)" },
      { label: "Reg Fee", value: "₹50" },
      { label: "Prize Pool", value: "₹1,500" },
    ],
    description: "Chaotic 2D shooter action. Fly, shoot, and survive in intense battles.",
    highlights: ["Online Mode", "Fast-paced Action"],
    contact: {
      coordinators: [
        { name: "William", phone: "9496299122" },
        { name: "Nidal", phone: "8075543651" },
      ],
    },
    buttonText: "Register Now",
    icon: "zap",
    registrationUrl: "https://app.makemypass.com/event/coliseum-mini-miltia",
  },
  fifa: {
    title: "FC25",
    badge: "Console",
    category: "egames",
    tagline: "FC25 Championship",
    details: [
      { label: "Mode", value: "1v1" },
      { label: "Platform", value: "Console (Offline)" },
      { label: "Reg Fee", value: "₹100" },
      { label: "Prize Pool", value: "₹3,000" },
    ],
    description: "Experience realistic football on console. Compete offline in a high-stakes FC25 tournament.",
    highlights: ["Played on PS5/Xbox", "Big Screen Experience"],
    contact: {
      coordinators: [
        { name: "Abhimanyu", phone: "7510884289" },
        { name: "Abraham", phone: "9778527716" },
      ],
    },
    buttonText: "Register Now",
    icon: "gamepad",
    registrationUrl: "https://app.makemypass.com/event/coliseum-fc25",
  },
  /*
  gala: {
    title: "INCEPTA GALA",
    badge: "ProShow",
    category: "gala",
    tagline: "Live with Bhavin and Sharan Appu",
    details: [
      { label: "Date", value: "February 5, 2026" },
      { label: "Time", value: "6:00 PM - 8:00 PM" },
      { label: "Venue", value: "Dhwani Stage Open Space" },
      { label: "Entry", value: "Free for All" },
      { label: "Artist", value: "External artists" },
    ],
    description:
      "The grand cultural celebration of INCEPTA'26! Two nights of entertainment, performances, and memories.",
    highlights: [
      "Pro Show with professional bands",
    ],
    buttonText: "Get Your Pass",
    icon: "music",
    registrationUrl: "#register-gala", // Add your MakeMyPass URL here
  },
  */
  inauguration: {
    title: "Inauguration",
    badge: "Opening Ceremony",
    category: "workshops",
    tagline: "Official Opening of INCEPTA'26",
    details: [
      { label: "Date", value: "February 6, 2026" },
      { label: "Time", value: "10:00 AM - 11:00 PM" },
      { label: "Venue", value: "CETAA Hall" },
    ],
    description:
      "Join us for the official inauguration of INCEPTA'26, marking the beginning of our premier technical festival focused on AI Agents & Generative AI.",
    highlights: [
      "Official opening ceremony",
      "Welcome address by dignitaries",
      "Introduction to INCEPTA'26 events",
      "Networking opportunity",
    ],
    contact: {
      coordinators: [
        {
          name: "Zuhri",
          phone: "99951 88553",
        },
      ],
    },
    buttonText: "Register Now",
    icon: "mic",
    registrationUrl: "#register-inauguration",
  },
  appliedai: {
    title: "Applied AI in CyberSecurity",
    badge: "Workshop",
    category: "workshops",
    tagline: "Leverage AI for Enhanced Security",
    details: [
      { label: "Date", value: "February 6, 2026" },
      { label: "Time", value: "1:00 PM - 5:00 PM" },
      { label: "Venue", value: "MCA Seminar Hall" },
    ],
    description:
      "Learn how to apply artificial intelligence techniques to cybersecurity challenges and threat detection. This hands-on workshop covers AI-powered security solutions and real-world applications.",
    highlights: [
      "AI-powered security solutions",
      "Threat detection with machine learning",
      "Hands-on exercises",
      "Industry best practices",
      "Certificate of participation",
    ],
    contact: {
      coordinators: [
        {
          name: "Abraham Peter",
          phone: "97785 27716",
        },
      ],
    },
    buttonText: "Register Now",
    icon: "shieldCheck",
    registrationUrl: "#register-appliedai",
  },
  shapingai: {
    title: "Shaping the AI Future",
    badge: "Session",
    category: "workshops",
    tagline: "Envisioning Tomorrow's AI Landscape",
    details: [
      { label: "Date", value: "February 5, 2026" },
      { label: "Time", value: "9:00 AM - 1:00 PM" },
      { label: "Venue", value: "CETAA Hall" },
    ],
    description:
      "Explore the future possibilities of AI and how we can shape it for a better tomorrow. Join industry experts and thought leaders in discussing the trajectory of AI development.",
    highlights: [
      "Future of AI technology",
      "Ethical AI development",
      "Industry perspectives",
      "Interactive discussions",
      "Q&A with experts",
    ],
    contact: {
      coordinators: [
        {
          name: "Tina",
          phone: "70120 37297",
        },
      ],
    },
    buttonText: "Register Now",
    icon: "lightbulb",
    registrationUrl: "#register-shapingai",
  },
  flashmob: {
    title: "FlashMob and Banner Release",
    badge: "Cultural Event",
    category: "gala",
    tagline: "Surprise Performance and Grand Reveal",
    details: [
      { label: "Date", value: "February 2, 2026" },
      { label: "Time", value: "4:00 PM - 5:00 PM" },
      { label: "Venue", value: "Open Space" },
      { label: "Entry", value: "Free for All" },
    ],
    description:
      "Be part of an exciting flashmob performance and witness the official banner release of INCEPTA'26. A vibrant pre-event celebration to kick off the festival!",
    highlights: [
      "Surprise flashmob performance",
      "Official banner release",
      "Community gathering",
      "Photo opportunities",
    ],
    buttonText: "Join Us",
    icon: "party",
    registrationUrl: "#register-flashmob",
  },
  workflowautomation: {
    title: "WorkFlow Automation Workshop",
    badge: "Workshop",
    category: "workshops",
    tagline: "Automate Your Workflow with AI",
    details: [
      { label: "Dates", value: "Feb 5-6, 2026" },
      { label: "Venue", value: "MCA Main LAB" },
      { label: "Format", value: "Hands-on" },
      { label: "Certificate", value: "Provided" },
    ],
    description:
      "Learn to build workflow automation solutions using cutting-edge AI tools and techniques. Transform repetitive tasks into automated processes.",
    highlights: [
      "AI workflow automation techniques",
      "Practical hands-on exercises",
      "Industry tools and frameworks",
      "Certificate of completion",
      "Take-home project templates",
    ],
    contact: {
      coordinators: [
        {
          name: "Zuhri Noor",
          phone: "99951 88553",
        },
      ],
    },
    buttonText: "Register Now",
    icon: "workflow",
    registrationUrl: "#register-workflow",
  },
  agenticaiworkshop: {
    title: "Agentic AI Workshop",
    badge: "Workshop",
    category: "workshops",
    tagline: "Building Intelligent AI Agents",
    details: [
      { label: "Dates", value: "Feb 5-6, 2026" },
      { label: "Venue", value: "MCA Main LAB" },
      { label: "Format", value: "Hands-on" },
      { label: "Certificate", value: "Provided" },
    ],
    description:
      "Deep dive into building autonomous AI agents that can reason, plan, and take actions. Learn the fundamentals of agentic AI systems.",
    highlights: [
      "Agent architecture patterns",
      "Tool use and function calling",
      "Multi-agent systems",
      "Practical implementations",
      "Industry case studies",
    ],
    contact: {
      coordinators: [
        {
          name: "Abhishek RS",
          phone: "77364 87600",
        },
      ],
    },
    buttonText: "Register Now",
    icon: "bot",
    registrationUrl: "#register-agenticai",
  },
};

/*
// PlayFest & Board Games Data
export const playFestData = [
  // Live Activity & Game Stalls
  {
    id: "speed-typing",
    title: "Speed Typing Challenge",
    players: "Individual",
    duration: "1–2 mins",
    type: "Focus & Reaction",
    description: "A fast-paced typing battle where participants race to type accurately at high speed.",
    group: "Live Activity",
  },
  {
    id: "escape-room",
    title: "Escape Room Experience",
    players: "3–6 players",
    duration: "10–15 mins",
    type: "Team Strategy",
    description: "Teams solve clues and unlock the path to escape within the time limit.",
    group: "Live Activity",
  },
  {
    id: "dart-throw",
    title: "Dart Throw",
    players: "1–2 players",
    duration: "1 min",
    type: "Aim & Accuracy",
    description: "A casual target game to challenge hand-eye coordination.",
    group: "Live Activity",
  },
  {
    id: "foam-archery",
    title: "Foam Archery Zone",
    players: "1–4 players",
    duration: "Open play",
    type: "Safe Sport",
    description: "Soft foam-tipped archery that is safe and fun for all age groups.",
    group: "Live Activity",
  },
  {
    id: "cosplay",
    title: "Cosplay Booth",
    players: "Open",
    duration: "Open",
    type: "Creative",
    description: "A free-spirited creative space encouraging self-expression and character representation.",
    group: "Live Activity",
  },
  {
    id: "nerf-battle",
    title: "Nerf Battle Arena",
    players: "Teams",
    duration: "Round based",
    type: "Action",
    description: "An energetic soft-shooting activity encouraging team play and stress release.",
    group: "Live Activity",
  },
  // Board & Card Games
  {
    id: "top-that",
    title: "Top That!",
    players: "4 players",
    duration: "5 min",
    type: "Strategy + Reaction",
    description: "Fast stacking and matching challenge to test reflex and pattern reading.",
  },
  {
    id: "chain-triangle",
    title: "Chain Triangle",
    players: "4 players",
    duration: "10 min",
    type: "Strategy",
    description: "Players form patterns using triangle chains based on prompt cards.",
  },
  {
    id: "happy-salmon",
    title: "Happy Salmon",
    players: "4 players",
    duration: "90 secs",
    type: "Social Game",
    description: "Fast hand-action exchanges leading to loud laughter and instant bonding.",
  },
  {
    id: "maki-stack",
    title: "Maki Stack",
    players: "2–4 players",
    duration: "5 min",
    type: "Team Building",
    description: "Players stack sushi pieces using blindfolds or shared instructions.",
  },
  {
    id: "dr-eureka",
    title: "Dr. Eureka",
    players: "2–8 players",
    duration: "5 min",
    type: "Coordination",
    description: "Solve formula card patterns by transferring colored balls through tubes safely.",
  },
  {
    id: "taco-cat",
    title: "Taco Cat Goat Cheese Pizza",
    players: "2–8 players",
    duration: "3 min",
    type: "Rhythm + Reaction",
    description: "Call words in order, react fast—chaotic, funny, and addictive.",
  },
  {
    id: "dobble",
    id: "dobble",
    title: "Spot It / Dobble",
    players: "2–4 players",
    duration: "3 min",
    type: "Pattern Recognition",
    description: "Match identical icons faster than your opponent.",
  },
  {
    id: "face-change",
    title: "Face Change Cube",
    players: "2–4 players",
    duration: "5 min",
    type: "Pattern Recognition",
    description: "Recreate face expressions using cube pieces.",
  },
  {
    id: "sling-puck",
    title: "Sling Puck",
    players: "2 players",
    duration: "3 min",
    type: "Reaction Game",
    description: "Push all pucks to opponent’s side — fast, exciting, loud.",
  },
  {
    id: "pictureka",
    title: "Pictureka",
    players: "2–8 players",
    duration: "10 min",
    type: "Pattern Search",
    description: "Players race to find pictures matching task prompts.",
  },
  {
    id: "magnet-sizzle",
    title: "Magnet / Sizzle",
    players: "2–8 players",
    duration: "3 min",
    type: "Strategy + Reaction",
    description: "Magnetic pieces create suspenseful chain reactions.",
  },
  {
    id: "mikkaido",
    title: "Mikkaido",
    players: "2–8 players",
    duration: "3 min",
    type: "Hand-Eye Coordination",
    description: "Carefully lift sticks without disturbing others.",
  },
  {
    id: "yeti-spaghetti",
    id: "yeti-spaghetti",
    title: "Yeti in My Spaghetti",
    players: "2–4 players",
    duration: "15 min",
    type: "Balance Game",
    description: "Remove spaghetti sticks without letting the Yeti fall.",
  },
  {
    id: "dead-mans-deck",
    title: "Dead Man’s Deck",
    players: "2–8 players",
    duration: "15 min",
    type: "Strategy / Memory",
    description: "Pirate-themed card game with twists and risk-taking.",
  },
  {
    id: "suspend",
    title: "Suspend",
    players: "2–8 players",
    duration: "3 min",
    type: "Balance + Precision",
    description: "Build hanging structures without collapse.",
  },
  {
    id: "connect-4",
    title: "Connect 4",
    players: "2 players",
    duration: "5 min",
    type: "Strategy",
    description: "Form a straight line of 4 tokens before your opponent.",
  },
  {
    id: "jenga",
    title: "Jenga",
    players: "2–4 players",
    duration: "5 min",
    type: "Balance + Suspense",
    description: "Remove blocks without toppling the tower.",
  },
  {
    id: "board-boats",
    title: "Board & Boats",
    players: "Open",
    duration: "Relaxed",
    type: "Casual",
    description: "A cozy board-play zone for winding down.",
    group: "Board Games",
  },
  {
    id: "balloon-shooting",
    title: "Balloon Shooting",
    players: "Individual",
    duration: "Varies",
    type: "Skill",
    description: "Fun burst-and-score shooting activity.",
  },
  {
    id: "tower-hanoi",
    title: "Tower of Hanoi",
    players: "Individual",
    duration: "Varies",
    type: "Logic",
    description: "Logic puzzle requiring planned moves and patience.",
  },
  {
    id: "hot-wheels",
    title: "Hot Wheels Track Race",
    players: "Individual",
    duration: "Varies",
    type: "Racing",
    description: "An exciting racing lane for car speed.",
    group: "Skill Zones",
  },
];
*/
