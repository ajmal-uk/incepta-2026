// Event categories
export const eventCategories = {
  competitions: {
    title: "Competitions",
    description: "Test your skills and compete for glory",
    color: "#c678ff",
    events: ["hackathon", "ctf", "coderush", "vibecoding", "promptcraft", "treasurehunt"],
  },
  workshops: {
    title: "Workshops & Events",
    description: "Learn from industry experts",
    color: "#61dafb",
    events: ["keynote", "panel", "workshops"],
  },
  gala: {
    title: "INCEPTA Gala",
    description: "Cultural nights of music and performances",
    color: "#ff6ac1",
    events: ["gala"],
  },
};

export const eventsData = {
  hackathon: {
    title: "GNOSIS",
    badge: "Hackathon",
    category: "competitions",
    tagline: "Insight into Innovation",

    details: [
      { label: "Date", value: "January 30, 2026" },
      { label: "Duration", value: "12 Hours" },
      { label: "Venue", value: "MCA Department" },
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
          name: "Jerardh Tom Jasper",
          phone: "+91 75589 77917",
        },
        {
          name: "Muhammed K B",
          phone: "+91 96454 97235",
        },
      ],
    },

    buttonText: "Register Your Team",
    icon: "brainCircuit",
    registrationUrl: "https://app.makemypass.com/event/incepta-hackathon",
  },
  ctf: {
    title: "INCEPTA Cyber Siege",
    badge: "CTF Competition",
    category: "competitions",
    tagline:
      "Dive into the digital abyss, crack the codes, and infiltrate the task force.",

    details: [
      { label: "Date", value: "January 29, 2026" },
      { label: "Duration", value: "10:00 AM – 5:00 PM" },
      { label: "Venue", value: "Software Lab" },
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
      "Prize pool worth $400+ USD",
      "PentesterLab vouchers for top 3 teams",
    ],

    contact: {
      coordinators: [
        {
          name: "Hari Sankar R S",
          phone: "9946908599",
          email: "To be announced",
        },
      ],
    },

    buttonText: "Join the Hunt",
    icon: "shieldCheck",
    registrationUrl: "https://app.makemypass.com/event/cyber-seige-capture-the-flag",
  },
  coderush: {
    title: "Code Rush",
    badge: "Coding Competition",
    category: "competitions",
    tagline: "Code Rush: Run the code before the clock runs you.",

    details: [
      { label: "Date", value: "January 29, 2026" },
      { label: "Duration", value: "90 Minutes" },
      { label: "Venue", value: "Software Lab" },
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
          name: "Subi Suresh",
          phone: "8593978871",
          email: "subisuresh69@gmail.com",
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
      { label: "Date", value: "January 29, 2026" },
      { label: "Duration", value: "3 Hours + Demo" },
      { label: "Venue", value: "MCA Department" },
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
          name: "Muhammed K B",
          phone: "+91 96454 97235",
        },
        {
          name: "John William Santhosh",
          phone: "+91 94962 09122",
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
      { label: "Date", value: "January 30, 2026" },
      { label: "Time", value: "3:00 PM – 5:00 PM" },
      { label: "Venue", value: "Seminar Hall" },
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
          name: "Safa Abdul Hameed",
          phone: "9061445705",
          email: "safaabdulhameed2002@gmail.com",
        },
        {
          name: "Afthab K L",
          phone: "8129232709",
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
      { label: "Dates", value: "Jan 29-30, 2026" },
      { label: "Time", value: "Various Slots" },
      { label: "Venue", value: "Seminar Hall" },
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
    tagline: "Insights from Striver",
    details: [
      { label: "Date", value: "January 29, 2026" },
      { label: "Venue", value: "CETAA Hall" },
      { label: "Speaker", value: "Striver" },
    ],
    description: "An exclusive keynote session by Striver, a renowned figure in the tech community. Gain valuable insights into competitive programming, career growth, and the future of tech.",
    highlights: [
      "Journey of Striver",
      "Competitive Programming tips",
      "Career guidance for students",
      "Q&A Session",
    ],
    buttonText: "Register Now",
    icon: "mic",
    registrationUrl: "#register-keynote", // Add your MakeMyPass URL here
  },
  panel: {
    title: "Panel Discussion",
    badge: "Panel",
    category: "workshops",
    tagline: "AI in Education & Entrepreneurship",
    details: [
      { label: "Date", value: "January 30, 2026" },
      { label: "Venue", value: "CETAA Hall" },
      { label: "Focus", value: "AI Impact" },
    ],
    description: "A thought-provoking panel discussion on 'How AI Can Impact Education'. Industry leaders and educators discuss the benefits, challenges, and future of AI in academia and beyond.",
    highlights: [
      "Panelist: Anwar Sadath (CEO, Kite)",
      "Panelist: Sunil Raveendran",
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
      { label: "Date", value: "January 29, 2026" },
      { label: "Time", value: "10:00 AM - 1:00 PM" },
      { label: "Venue", value: "CET Campus" },
      { label: "Team Size", value: "5 Members + 1 Vol" },
      { label: "Format", value: "Location-based" },
      { label: "Theme", value: "One Piece" },
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
      gameFlow: [
        "Teams act as pirate crews racing to find the One Piece.",
        "Each clue is a photo/riddle hinting at the next location.",
        "Teams must find the location and have their assigned volunteer verify it.",
        "Slowest teams to reach checkpoints may be eliminated.",
      ],
      rules: [
        "Each team must have exactly 5 members.",
        "Teams must stay together at all times.",
        "No outside help allowed.",
        "Clues/props must not be moved or damaged.",
        "Volunteers will accompany teams to ensure fair play.",
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
          name: "Coordinator Name",
          phone: "Contact Number",
        },
      ],
    },
    buttonText: "Assemble Crew",
    icon: "compass",
    registrationUrl: "#register-treasurehunt",
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
      { label: "Platform", value: "Offline/LAN" },
      { label: "Reg Fee", value: "₹50" },
      { label: "Prize Pool", value: "₹1,500" },
    ],
    description: "Chaotic 2D shooter action. Fly, shoot, and survive in intense battles.",
    highlights: ["Offline Mode", "Fast-paced Action"],
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
  gala: {
    title: "INCEPTA GALA",
    badge: "Cultural Night",
    category: "gala",
    tagline: "Two nights of music, dance, and unforgettable performances.",
    details: [
      { label: "Day 1", value: "January 29, 2026" },
      { label: "Day 2", value: "January 30, 2026" },
      { label: "Time", value: "5:00 PM - 10:00 PM" },
      { label: "Venue", value: "Gazebo/DJ Hall" },
      { label: "Entry", value: "With Pass" },
      { label: "Audience", value: "500+ Expected" },
    ],
    description:
      "The grand cultural celebration of INCEPTA'26! Two nights of entertainment, performances, and memories.",
    highlights: [
      "Day 1: Student performances from all departments",
      "Day 2: Pro Show with professional bands",
      "Food stalls and informal art corners",
      "Interactive crowd games and prizes",
      "Entry via wristbands or QR passes",
    ],
    buttonText: "Get Your Pass",
    icon: "music",
    registrationUrl: "#register-gala", // Add your MakeMyPass URL here
  },
};

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
