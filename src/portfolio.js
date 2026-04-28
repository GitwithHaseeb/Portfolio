/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Muhammad Haseeb",
  title: "Hi all, I'm Muhammad Haseeb",
  subTitle: emoji(
    "Entry-level Software Developer and final-year BSCS student focused on full-stack web development, AI-powered solutions, and building reliable software with Python, JavaScript, FastAPI, Node.js, and databases. 🚀"
  ),
  profileImage: require("./assets/images/muhammadHaseebProfile.png"),
  resumeLink: "",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/GitwithHaseeb",
  linkedin: "https://www.linkedin.com/in/muhammad-haseeb-5a73bb317/",
  gmail: "haseebch8130@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "FINAL YEAR BSCS STUDENT BUILDING WEB, DATABASE, AND AI-BASED SOFTWARE SOLUTIONS",
  skills: [
    emoji(
      "⚡ Build responsive full-stack applications using React, JavaScript, Node.js, FastAPI, and REST APIs"
    ),
    emoji(
      "⚡ Design practical machine learning solutions including recommendation systems, sentiment analysis, and prediction modules"
    ),
    emoji(
      "⚡ Work with SQL and NoSQL databases, authentication workflows, and real-time systems using WebSockets"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University of Central Punjab, Lahore",
      logo: require("./assets/images/ucpLogo.png"),
      subHeader: "BS Computer Science",
      duration: "",
      desc: "",
      descBullets: [
        "Built multiple production-style academic projects with web, ML, and database components",
        "Actively working on AI Skill Matching Platform as Final Year Project (FYP)"
      ]
    },
    {
      schoolName: "Punjab Group of Colleges, Lahore",
      logo: require("./assets/images/pgcLogo.png"),
      subHeader: "ICS (Physics)",
      duration: "2020 - 2022",
      desc: "Completed intermediate studies with focus on analytical and technical foundations.",
      descBullets: ["Prepared strong base for computer science degree and practical programming work"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Frontend / Web Development",
      progressPercentage: "80%"
    },
    {
      Stack: "Backend / APIs / Databases",
      progressPercentage: "78%"
    },
    {
      Stack: "Machine Learning / AI Projects",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Java Intern",
      company: "Uworx Software House",
      companylogo: require("./assets/images/uworxLogo.png"),
      date: "Aug 2025 - Sep 2025",
      desc: "Contributed to Java development tasks, debugging, and module-level implementation in a collaborative software environment.",
      descBullets: [
        "Worked on bug fixing and code improvements for Java modules",
        "Improved understanding of team workflow, testing, and code quality practices"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false",
  display: false
};

// Some big projects you have worked on

const bigProjects = {
  title: "Selected Projects",
  subtitle:
    "PROJECTS DESIGNED AND DEVELOPED INDEPENDENTLY ACROSS WEB, ML, AI, AND SYSTEM DESIGN",
  projects: [
    {
      image: require("./assets/images/bloodlinkProject.png"),
      projectName: "BloodLink-AI",
      projectDesc:
        "Role-based blood donation platform with donor-hospital workflow, JWT authentication, city-based matching, and AI assistant integration."
    },
    {
      image: require("./assets/images/expenseProject.png"),
      projectName: "Expense Tracker Pro",
      projectDesc:
        "Full-stack personal finance manager with expense/category CRUD, budgets, recurring transactions, analytics, and forecasting."
    },
    {
      image: require("./assets/images/vehicleProject.png"),
      projectName: "Vehicle Tracking System",
      projectDesc:
        "FastAPI + React tracking platform with real-time location streaming, ETA prediction, anomaly detection, and dashboard analytics."
    },
    {
      image: require("./assets/images/myrecsProject.png"),
      projectName: "MyRecs Recommender",
      projectDesc:
        "Personalized recommendation engine using TF-IDF, matrix factorization, and sentence-transformer embeddings with Streamlit interface."
    },
    {
      image: require("./assets/images/myhinglishProject.png"),
      projectName: "MyHinglishSentiment",
      projectDesc:
        "Hinglish sentiment classifier using fine-tuned XLM-RoBERTa for positive, negative, and neutral text analysis."
    },
    {
      image: require("./assets/images/ghbuddyProject.png"),
      projectName: "GH Buddy RAG Chatbot",
      projectDesc:
        "Student-focused RAG chatbot using ChromaDB and dual model routing to answer questions from uploaded study documents."
    },
    {
      image: require("./assets/images/diagnosisProject.png"),
      projectName: "PDC Health Diagnosis System",
      projectDesc:
        "Parallel ML pipeline predicting gender, age, and disease from sensor features using multi-task model training and inference."
    },
    {
      image: require("./assets/images/fypProject.png"),
      projectName: "AI Skill Matching Platform (FYP)",
      projectDesc:
        "AI-powered team formation platform with NLP-based skill extraction, profile matching, and chatbot assistance."
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Project Highlights 🏆 "),
  subtitle:
    "Core technical highlights from independent project reports and implementations",

  achievementsCards: [
    {
      title: "Applied AI + Full-Stack Development",
      subtitle:
        "Delivered multiple end-to-end AI-enabled web systems including chatbot, recommender, sentiment analysis, and prediction modules.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Project Highlights"
    },
    {
      title: "Real-Time and Scalable Architectures",
      subtitle:
        "Built role-based systems, real-time tracking, and modular API architectures focused on maintainability and practical deployment.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Engineering Practice"
    },

    {
      title: "Strong Academic and Internship Foundation",
      subtitle:
        "Final-year BSCS student with Java internship experience and consistent project-based learning in software engineering.",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "Academic and Internship"
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "Technical writing section can be enabled later.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("Public speaking section can be enabled later."),

  talks: [],
  display: false
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Podcast section can be enabled later.",
  podcast: [],
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Resume link can be added anytime.",
  display: false
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project, collaboration, or entry-level software role opportunities.",
  number: "+92-313-4377476",
  email_address: "haseebch8130@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
