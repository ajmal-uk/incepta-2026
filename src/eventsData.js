// Event categories
export const eventCategories = {
  competitions: {
    title: 'Competitions',
    description: 'Test your skills and compete for glory',
    color: '#c678ff',
    events: ['hackathon', 'ctf', 'coderush', 'vibecoding', 'promptcraft', 'projectpres']
  },
  workshops: {
    title: 'Workshops & Events',
    description: 'Learn from industry experts',
    color: '#61dafb',
    events: ['workshops', 'treasurehunt']
  },
  gala: {
    title: 'INCEPTA Gala',
    description: 'Cultural nights of music and performances',
    color: '#ff6ac1',
    events: ['gala']
  }
};

export const eventsData = {
  hackathon: {
    title: 'AI Agent Hackathon',
    badge: 'Competition',
    category: 'competitions',
    tagline: 'Build the next generation of autonomous AI agents in this 12-hour coding marathon.',
    details: [
      { label: 'Date', value: 'January 30, 2026' },
      { label: 'Time', value: '9:00 AM - 9:00 PM' },
      { label: 'Venue', value: 'MCA Department' },
      { label: 'Team Size', value: '4 Members' },
      { label: 'Prize Pool', value: '₹25,000+' },
      { label: 'Registration', value: 'Required' }
    ],
    description: 'Join the ultimate AI Agent Hackathon where innovation meets competition. Build autonomous agents that can solve real-world problems.',
    highlights: [
      'Build agents using LangChain, AutoGPT, or custom frameworks',
      'Industry mentors available throughout the event',
      'Top 3 teams win cash prizes and certificates',
      'Chance to get offers from sponsoring companies',
      'Free meals and refreshments provided'
    ],
    buttonText: 'Register Your Team',
    icon: 'layers'
  },
  ctf: {
    title: 'Capture The Flag',
    badge: 'Competition',
    category: 'competitions',
    tagline: 'Test your cybersecurity skills in this Jeopardy-style CTF competition.',
    details: [
      { label: 'Date', value: 'January 29, 2026' },
      { label: 'Time', value: '10:00 AM - 5:00 PM' },
      { label: 'Venue', value: 'Software Lab' },
      { label: 'Team Size', value: '1-2 Members' },
      { label: 'Prize Pool', value: '₹15,000+' },
      { label: 'Platform', value: 'CTFd' }
    ],
    description: 'Dive into challenges across Web Security, Forensics, Cryptography, and Binary Exploitation. Compete for the top spot on the leaderboard.',
    highlights: [
      'Categories: Web, Forensic, Crypto, Binary, OSINT',
      'Sponsored by PentesterLab - vouchers for winners',
      'Points based on challenge difficulty',
      'Real-time leaderboard display',
      'No brute forcing or flag sharing allowed'
    ],
    buttonText: 'Join the Hunt',
    icon: 'flag'
  },
  coderush: {
    title: 'CodeRush',
    badge: 'Competition',
    category: 'competitions',
    tagline: 'Prove your algorithmic prowess in this intense 2.5-hour coding challenge.',
    details: [
      { label: 'Date', value: 'January 30, 2026' },
      { label: 'Time', value: '2:00 PM - 4:30 PM' },
      { label: 'Venue', value: 'Software Lab' },
      { label: 'Format', value: 'Individual' },
      { label: 'Problems', value: '20 Questions' },
      { label: 'Platform', value: 'HackerRank' }
    ],
    description: 'Tackle 20 coding problems ranging from easy to medium difficulty. Your algorithmic skills and speed will be put to the test.',
    highlights: [
      'Problems cover data structures and algorithms',
      'Multiple programming languages supported',
      'Ranked by HackerRank scoring system',
      'No AI or external tools allowed',
      'Top 3 coders receive prizes and certificates'
    ],
    buttonText: 'Start Coding',
    icon: 'code'
  },
  vibecoding: {
    title: 'Vibe Coding',
    badge: 'Competition',
    category: 'competitions',
    tagline: 'Where creativity meets code. Build something extraordinary.',
    details: [
      { label: 'Date', value: 'January 29, 2026' },
      { label: 'Time', value: '11:00 AM - 2:00 PM' },
      { label: 'Venue', value: 'MCA Department' },
      { label: 'Format', value: 'Individual/Team' },
      { label: 'Prize Pool', value: '₹6,000+' },
      { label: 'Theme', value: 'Announced on spot' }
    ],
    description: 'Express yourself through code. Create visual experiences, generative art, or interactive applications that showcase your creative coding skills.',
    highlights: [
      'Theme revealed at the start of competition',
      'Use any creative coding framework',
      'Judged on creativity, execution, and aesthetics',
      'Live demo of projects at the end',
      'Best projects featured in fest gallery'
    ],
    buttonText: 'Express Yourself',
    icon: 'music'
  },
  promptcraft: {
    title: 'Prompt Crafting',
    badge: 'Competition',
    category: 'competitions',
    tagline: 'Master the art of communicating with AI through effective prompts.',
    details: [
      { label: 'Date', value: 'January 29, 2026' },
      { label: 'Time', value: '3:00 PM - 5:00 PM' },
      { label: 'Venue', value: 'Seminar Hall' },
      { label: 'Format', value: 'Individual' },
      { label: 'Prize Pool', value: '₹3,000+' },
      { label: 'Focus', value: 'GenAI Prompts' }
    ],
    description: 'Craft prompts that produce the best outputs from Large Language Models. Show your understanding of prompt engineering techniques.',
    highlights: [
      'Multiple rounds with increasing difficulty',
      'Work with GPT, Claude, and other LLMs',
      'Judged on output quality and creativity',
      'Learn advanced prompting techniques',
      'Certificates for all participants'
    ],
    buttonText: 'Craft Your Prompt',
    icon: 'messageSquare'
  },
  workshops: {
    title: 'GenAI Workshops',
    badge: 'Workshop',
    category: 'workshops',
    tagline: 'Hands-on learning sessions with industry experts on cutting-edge AI technologies.',
    details: [
      { label: 'Dates', value: 'Jan 29-30, 2026' },
      { label: 'Time', value: 'Various Slots' },
      { label: 'Venue', value: 'Seminar Hall' },
      { label: 'Format', value: 'Hands-on' },
      { label: 'Certificate', value: 'Provided' },
      { label: 'Laptop', value: 'Required' }
    ],
    description: 'Deep dive into the world of Generative AI with practical, hands-on workshops conducted by industry professionals.',
    highlights: [
      'Build RAG pipelines from scratch',
      'Create AI agents with no-code tools',
      'Fine-tune open-source LLMs',
      'Industry guest speakers and mentors',
      'Take-home resources and code samples'
    ],
    buttonText: 'Book Your Seat',
    icon: 'layoutDashboard'
  },
  projectpres: {
    title: 'Project Presentation',
    badge: 'Competition',
    category: 'competitions',
    tagline: 'Showcase your AI innovations to industry experts and peers.',
    details: [
      { label: 'Date', value: 'January 30, 2026' },
      { label: 'Time', value: '10:00 AM - 1:00 PM' },
      { label: 'Venue', value: 'Conference Room' },
      { label: 'Team Size', value: '1-4 Members' },
      { label: 'Duration', value: '10 min + Q&A' },
      { label: 'Focus', value: 'AI/ML Projects' }
    ],
    description: 'Present your AI projects to a panel of industry experts. Get valuable feedback and recognition for your innovative work.',
    highlights: [
      'Projects must involve AI/ML technologies',
      'Live demo encouraged',
      'Expert panel with Q&A session',
      'Best projects receive awards',
      'Networking opportunity with professionals'
    ],
    buttonText: 'Submit Project',
    icon: 'bookOpen'
  },
  treasurehunt: {
    title: 'Treasure Hunt',
    badge: 'Fun Event',
    category: 'workshops',
    tagline: 'Embark on a One Piece themed adventure across the campus!',
    details: [
      { label: 'Date', value: 'January 29, 2026' },
      { label: 'Time', value: '10:00 AM - 1:00 PM' },
      { label: 'Venue', value: 'CET Campus' },
      { label: 'Team Size', value: '5 Members' },
      { label: 'Format', value: 'Location-based' },
      { label: 'Theme', value: 'One Piece' }
    ],
    description: 'Form your pirate crew and race across campus solving riddles to find The One Piece treasure chest! A fun-filled adventure for all.',
    highlights: [
      'Each team gets a volunteer "Marine" guide',
      'Solve One Piece themed riddles at each checkpoint',
      'Slowest teams eliminated each round',
      'Final treasure chest contains prizes',
      'Dress up as pirates for bonus points!'
    ],
    buttonText: 'Assemble Your Crew',
    icon: 'mapPin'
  },
  gala: {
    title: 'INCEPTA GALA',
    badge: 'Cultural Night',
    category: 'gala',
    tagline: 'Two nights of music, dance, and unforgettable performances.',
    details: [
      { label: 'Day 1', value: 'January 29, 2026' },
      { label: 'Day 2', value: 'January 30, 2026' },
      { label: 'Time', value: '5:00 PM - 10:00 PM' },
      { label: 'Venue', value: 'Gazebo/DJ Hall' },
      { label: 'Entry', value: 'With Pass' },
      { label: 'Audience', value: '500+ Expected' }
    ],
    description: "The grand cultural celebration of INCEPTA'26! Two nights of entertainment, performances, and memories.",
    highlights: [
      'Day 1: Student performances from all departments',
      'Day 2: Pro Show with professional bands',
      'Food stalls and informal art corners',
      'Interactive crowd games and prizes',
      'Entry via wristbands or QR passes'
    ],
    buttonText: 'Get Your Pass',
    icon: 'award'
  }
};

export const REGISTRATION_LINKS = {
  hackathon: '#register-hackathon',
  ctf: '#register-ctf',
  coderush: '#register-coderush',
  vibecoding: '#register-vibecoding',
  promptcraft: '#register-promptcraft',
  workshops: '#register-workshops',
  projectpres: '#register-projectpres',
  treasurehunt: '#register-treasurehunt',
  gala: '#register-gala'
};
