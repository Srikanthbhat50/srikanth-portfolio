// ============================================================
// CENTRAL DATA FILE
// Every piece of personal/factual content on the site is read
// from here. Update your information in ONE place only.
// ============================================================

const portfolioData = {
  name: "Srikanth",
  initials: "SB",
  role: "MCA Student | Python Developer | AI/ML Enthusiast",
  taglineWords: ["Python Developer", "AI/ML Enthusiast", "Web Developer", "Problem Solver"],

  phone: "+91 7899129674",
  phoneHref: "tel:+917899129674",
  email: "shrikanthbhat636@gmail.com",
  emailHref: "mailto:shrikanthbhat636@gmail.com",

  github: "https://github.com/Srikanthbhat50",
  githubHandle: "Srikanthbhat50",
  linkedin: "https://www.linkedin.com/in/srikanth-bhat-ab0626331/",
  leetcode: "https://leetcode.com/u/srikanthb004/",
  leetcodeHandle: "srikanthb004",

  resume: "/assets/resume.pdf",
  profileImage: "/assets/profile.jpg",

  summary:
    "MCA student with hands-on experience building web-based applications using Python, JavaScript, and MySQL, including an expense-tracking system, a film-streaming platform, and a news aggregation tool. Comfortable across the stack — from responsive front-end interfaces to database-backed back-end logic — with a strong foundation in data structures, problem-solving, and a growing interest in AI/ML.",

  aboutCards: [
    {
      title: "MCA Student",
      description: "Pursuing a Master of Computer Applications at NMAM Institute of Technology, building on a BCA foundation.",
    },
    {
      title: "Python Developer",
      description: "Comfortable writing back-end logic and data-handling code in Python across personal projects.",
    },
    {
      title: "Web Development",
      description: "Builds responsive, interactive front ends with HTML, CSS and JavaScript, backed by MySQL/MongoDB.",
    },
    {
      title: "AI/ML Interest",
      description: "Actively growing skills in AI/ML fundamentals alongside core software development.",
    },
  ],

  skills: [
    {
      category: "Programming Languages",
      items: ["Python", "Java", "C"],
    },
    {
      category: "Web Technologies",
      items: ["HTML", "CSS", "JavaScript"],
    },
    {
      category: "Databases",
      items: ["MySQL", "MongoDB"],
    },
    {
      category: "Tools & Platforms",
      items: ["Git", "GitHub", "VS Code"],
    },
  ],

  projects: [
    {
      id: "expense-tracker",
      name: "Daily Expense Tracker",
      category: "Database",
      role: "Full-Stack Contributor",
      image: "/assets/projects/expense-tracker.jpg",
      shortDescription:
        "A web-based application to record, edit and categorize daily expenses, with MySQL-backed storage and spending reports.",
      description:
        "Built a web-based expense tracking application enabling users to add, edit, and categorize daily expenses. Designed a MySQL database schema to persist expense records and support querying by category and date, and implemented graphical spending reports to help users visualize their spending patterns.",
      features: [
        "Add, edit and categorize daily expenses",
        "MySQL-backed persistent storage",
        "Query records by category and date",
        "Graphical reports for spending analysis",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Python", "MySQL"],
      githubUrl: null,
      liveUrl: null,
    },
    {
      id: "film-streaming",
      name: "Film Streaming Platform",
      category: "Web Development",
      role: "Front-End Developer",
      image: "/assets/projects/film-streaming.jpg",
      shortDescription:
        "An interactive film browsing and streaming interface, built with a Python backend and a responsive front end.",
      description:
        "Developed a web-based film streaming platform allowing users to browse and watch movies through an interactive interface. The system was built using HTML, CSS and JavaScript for the front end and Python for the back end. Worked as Front-End Developer, designing responsive UI pages and implementing interface features for smooth navigation.",
      features: [
        "Browse and watch movies through an interactive UI",
        "Responsive front-end pages across devices",
        "Smooth navigation between views",
        "Python-powered back end",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Python"],
      githubUrl: null,
      liveUrl: null,
    },
    {
      id: "news-aggregator",
      name: "News Aggregator System",
      category: "UI/UX",
      role: "UI Designer",
      image: "/assets/projects/news-aggregator.jpg",
      shortDescription:
        "A news aggregation platform collecting articles from multiple sources into categorized, responsive layouts.",
      description:
        "Developed a news aggregation platform that collects and displays news from multiple sources in a single interface. The system allows users to browse news by categories such as technology, sports and entertainment. Worked as UI Designer, designing responsive layouts and improving the overall user interface for better user experience.",
      features: [
        "Aggregates news from multiple sources",
        "Browse by category — technology, sports, entertainment",
        "Responsive layout design",
        "Focus on usability and user experience",
      ],
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl: null,
      liveUrl: null,
    },
  ],

  projectFilters: ["All", "Web Development", "Database", "UI/UX"],

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Nitte University | NMAM Institute of Technology",
      duration: "2025 – Present",
      detail: "CGPA: 7.65 (Pursuing)",
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Mangalore University | Alva's Degree College",
      duration: "2022 – 2025",
      detail: null,
    },
    {
      degree: "Pre-University (Commerce)",
      institution: "Department of Pre-University Education | Excellent PU College",
      duration: "2020 – 2022",
      detail: "91.83% | CGPA: 8.47",
    },
  ],

  experience: [
    {
      role: "Front-End Developer",
      context: "Film Streaming Platform",
      description:
        "Designed responsive UI pages and implemented interface features for smooth navigation across the platform.",
    },
    {
      role: "UI Designer",
      context: "News Aggregator System",
      description:
        "Designed responsive layouts and improved the overall user interface for a multi-source news platform.",
    },
  ],
  experienceNote:
    "Currently building professional experience through academic projects and hands-on development.",

  certifications: [
    {
      name: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
      issuer: "Oracle University",
      year: "2026",
      url: null,
    },
  ],

  achievements: [
    {
      title: "NCC Cadet (CDT)",
      description: "Completed the NCC Certificate Exam.",
    },
  ],
}

export default portfolioData
