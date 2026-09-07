/* Portfolio content — Muhammad Haseeb
   Single source of truth for every section rendered by the site. */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 1400
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Muhammad Haseeb",
  name: "Muhammad Haseeb",
  title: "Muhammad Haseeb",
  roles: [
    "Full-Stack Software Engineer",
    "AI / Machine Learning Engineer",
    "Backend & API Architect",
    "Creative Frontend Developer"
  ],
  subTitle:
    "Remote software engineer at RFM Loyalty Co., building on a UAE payments and POS platform. Outside of that I design and ship production-grade software end to end — retrieval-augmented AI systems, asynchronous FastAPI and Node backends, and design-system-driven React frontends — across 27 delivered projects.",
  currentRole: "Software Engineer @ RFM Loyalty Co. · Remote",
  location: "Lahore, Pakistan · Open to remote",
  profileImage: require("./assets/images/muhammadHaseebProfile.png"),
  resumeLink: "",
  displayGreeting: true
};

// Hero metrics band

const heroStats = {
  display: true,
  stats: [
    {value: "27", label: "Projects delivered"},
    {value: "4", label: "Engineering domains"},
    {value: "40+", label: "Technologies used"},
    {value: "7", label: "Live deployments"}
  ]
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
  title: "What I Do",
  subTitle:
    "END-TO-END PRODUCT OWNERSHIP — FROM DATA MODEL AND API DESIGN THROUGH ML EVALUATION, FRONTEND ARCHITECTURE, AND CLOUD DEPLOYMENT",
  skills: [
    emoji(
      "⚡ Build production AI systems — RAG pipelines with citation grounding, vector stores, embedding pipelines, and multi-provider LLM abstraction with automatic fallback"
    ),
    emoji(
      "⚡ Architect secure, asynchronous backends — FastAPI, Django REST, Node/Express, Celery + Redis queues, WebSocket telemetry, and webhook-driven event processing"
    ),
    emoji(
      "⚡ Engineer design-system-led frontends — React, Next.js, TypeScript, Tailwind, Three.js and Framer Motion, with accessibility and measurable performance budgets"
    ),
    emoji(
      "⚡ Ship and operate — Docker Compose environments, GitHub Actions pipelines, and live production deployments on Vercel and Render with documented release runbooks"
    )
  ],

  /* Font Awesome 5 classnames — https://fontawesome.com/v5/search */

  softwareSkills: [
    {skillName: "Python", fontAwesomeClassname: "fab fa-python"},
    {skillName: "JavaScript", fontAwesomeClassname: "fab fa-js"},
    {skillName: "TypeScript", fontAwesomeClassname: "fas fa-code"},
    {skillName: "React", fontAwesomeClassname: "fab fa-react"},
    {skillName: "Next.js", fontAwesomeClassname: "fas fa-forward"},
    {skillName: "Node.js", fontAwesomeClassname: "fab fa-node"},
    {skillName: "FastAPI", fontAwesomeClassname: "fas fa-bolt"},
    {skillName: "Django", fontAwesomeClassname: "fas fa-server"},
    {skillName: "PyTorch", fontAwesomeClassname: "fas fa-brain"},
    {skillName: "PostgreSQL", fontAwesomeClassname: "fas fa-database"},
    {skillName: "MongoDB", fontAwesomeClassname: "fas fa-leaf"},
    {skillName: "Redis", fontAwesomeClassname: "fas fa-layer-group"},
    {skillName: "Docker", fontAwesomeClassname: "fab fa-docker"},
    {skillName: "Java", fontAwesomeClassname: "fab fa-java"},
    {skillName: "HTML5", fontAwesomeClassname: "fab fa-html5"},
    {skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt"},
    {skillName: "Git", fontAwesomeClassname: "fab fa-git-alt"},
    {skillName: "Cloud & CI/CD", fontAwesomeClassname: "fas fa-cloud"}
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
      duration: "2022 — 2026",
      desc: "Software engineering, data structures, distributed and parallel computing, machine learning, and database systems.",
      descBullets: [
        "Built a 27-project engineering portfolio spanning AI/ML, full-stack platforms, and desktop software",
        "Final Year Project: AI-Powered Dynamic Skill Matching Platform — NLP skill extraction and automated team formation"
      ]
    },
    {
      schoolName: "Punjab Group of Colleges, Lahore",
      logo: require("./assets/images/pgcLogo.png"),
      subHeader: "Intermediate in Computer Science",
      duration: "2020 — 2022",
      desc: "Mathematics, physics, and programming foundations.",
      descBullets: [
        "Established the analytical groundwork for a computer science degree and professional software practice"
      ]
    }
  ]
};

// Proficiency bars

const techStack = {
  viewSkillBars: true,
  experience: [
    {Stack: "Backend Engineering & API Design", progressPercentage: "92%"},
    {Stack: "AI / Machine Learning Engineering", progressPercentage: "88%"},
    {
      Stack: "Frontend Architecture & Design Systems",
      progressPercentage: "90%"
    },
    {Stack: "Databases & Data Modelling", progressPercentage: "86%"},
    {Stack: "DevOps, Docker & Cloud Deployment", progressPercentage: "80%"}
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Engineer",
      company: "RFM Loyalty Co.",
      companyShort: "RFM",
      companyUrl: "https://www.rfmloyaltyco.ae/",
      location: "Remote · UAE",
      current: true,
      date: "2026 — Present",
      desc: "Software engineer at a UAE payments and loyalty company that owns and operates the POS terminal network for First Abu Dhabi Bank, serving 15,000+ merchants across all seven Emirates.",
      descBullets: [
        "Develop and maintain software across the payment processing and point-of-sale platform",
        "Build backend services, integrations, and internal tooling in the payments and loyalty domain",
        "Work within a production environment handling card transactions at national scale"
      ]
    },
    {
      role: "Java Developer Intern",
      company: "Uworx Software House",
      companyShort: "UW",
      location: "On-site · Lahore",
      companylogo: require("./assets/images/uworxLogo.png"),
      date: "Aug 2025 — Sep 2025",
      desc: "Worked inside a professional delivery team on Java module implementation, debugging, and code quality.",
      descBullets: [
        "Implemented and debugged Java modules against team coding standards and review feedback",
        "Adopted production workflow practices — branch hygiene, testing discipline, and peer code review"
      ]
    }
  ]
};

const openSource = {
  showGithubProfile: "false",
  display: false
};

// Projects — grouped by engineering domain

const bigProjects = {
  title: "Selected Work",
  subtitle:
    "TWENTY-SEVEN PROJECTS ACROSS APPLIED AI, FULL-STACK PLATFORMS, INTERACTIVE FRONTEND, AND DESKTOP SOFTWARE",
  categories: [
    "All",
    "AI & Machine Learning",
    "Full-Stack",
    "Frontend",
    "Desktop"
  ],
  projects: [
    /* ---------------- AI & Machine Learning ---------------- */
    {
      projectName: "ReviewAI — AI Code Review Bot",
      category: "AI & Machine Learning",
      icon: "fas fa-code-branch",
      featured: true,
      projectDesc:
        "Automated pull-request reviewer that connects to GitHub over OAuth, consumes webhook events, and posts line-by-line comments within seconds. Celery workers analyse large diffs off the request path; the dashboard tracks review scores and issue trends.",
      tech: [
        "React 18",
        "TypeScript",
        "FastAPI",
        "Celery",
        "Redis",
        "PostgreSQL",
        "GPT-4o",
        "Docker"
      ],
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/GitwithHaseeb/AI-Code-review-bot"
        }
      ]
    },
    {
      projectName: "DocuMind AI — RAG Document Chatbot",
      category: "AI & Machine Learning",
      icon: "fas fa-file-alt",
      featured: true,
      projectDesc:
        "Production RAG system that chunks and embeds PDFs into a vector store and answers natural-language questions with page-level citations. A pluggable provider layer switches between Gemini and OpenAI from a single environment variable.",
      tech: [
        "FastAPI",
        "LangChain",
        "Gemini 2.5",
        "FAISS",
        "React 18",
        "Tailwind",
        "Docker"
      ],
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/GitwithHaseeb/AI-Document-Search-RAG-Chatbot"
        }
      ]
    },
    {
      projectName: "AI Market Intelligence Dashboard",
      category: "AI & Machine Learning",
      icon: "fas fa-chart-line",
      projectDesc:
        "Real-time crypto and equity analytics across ten assets and seven horizons. A Random Forest regressor trained on engineered technical features reports R², MAE, RMSE and MAPE transparently, alongside RSI, volatility and a composite sentiment gauge.",
      tech: ["Python", "Streamlit", "scikit-learn", "Plotly", "pandas"],
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/GitwithHaseeb/AI-Market-Intelligence"
        }
      ]
    },
    {
      projectName: "Audio DeepFake Detector",
      category: "AI & Machine Learning",
      icon: "fas fa-wave-square",
      projectDesc:
        "End-to-end deepfake audio pipeline comparing a CNN baseline against a RawNet2-inspired raw-waveform architecture. Grad-CAM overlays on spectrograms make every prediction visually auditable; ships with a CLI batch mode and live mic capture.",
      tech: ["PyTorch", "RawNet2", "Grad-CAM", "Streamlit", "NumPy"],
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/GitwithHaseeb/Audio-DeepFake-Detector"
        }
      ]
    },
    {
      projectName: "GH Plagiarism Checker",
      category: "AI & Machine Learning",
      icon: "fas fa-search",
      projectDesc:
        "Semantic similarity engine that embeds a reference corpus with Sentence-Transformers and detects plagiarism through cosine similarity over cached embeddings, plus a complementary AI-generated-text detector and IEEE-formatted report export.",
      tech: [
        "FastAPI",
        "Sentence-Transformers",
        "PyTorch",
        "React 18",
        "Tailwind"
      ],
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/GitwithHaseeb/GH-Plagiarism-Checker"
        }
      ]
    },
    {
      projectName: "GH Recruitment & ATS Platform",
      category: "AI & Machine Learning",
      icon: "fas fa-user-check",
      featured: true,
      projectDesc:
        "Complete recruitment pipeline: hybrid 0–100 ATS scoring blended with embedding similarity between CV text and job descriptions, the Hungarian algorithm for optimal one-candidate-per-role allocation, and automated offer emails with generated PDF letters.",
      tech: [
        "FastAPI",
        "Embeddings",
        "Hungarian Algorithm",
        "Gmail API",
        "React",
        "Vite"
      ],
      footerLink: [
        {
          name: "Live",
          url: "https://gh-pvt-ltd-recruitment-platform.vercel.app"
        },
        {
          name: "GitHub",
          url: "https://github.com/GitwithHaseeb/GH-Pvt-Ltd-Recruitment-Platform"
        }
      ]
    },
    {
      projectName: "GH Buddy — RAG Student Assistant",
      category: "AI & Machine Learning",
      icon: "fas fa-robot",
      projectDesc:
        "Multi-source RAG chatbot ingesting PDF, DOCX, TXT and live URLs into a persistent ChromaDB store, with a runtime toggle between Gemini and Hugging Face inference, cited sources on every answer, and CSV chat logging.",
      tech: ["Python", "Streamlit", "ChromaDB", "Gemini", "Docker"],
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/GitwithHaseeb/RAG-Base-Chatbot"
        }
      ]
    },
    {
      projectName: "MyRecs — Content Recommender",
      category: "AI & Machine Learning",
      icon: "fas fa-thumbs-up",
      projectDesc:
        "Three complementary recommendation strategies — TF-IDF content similarity, biased matrix factorisation trained with SGD, and sentence-embedding semantics — evaluated offline on Precision@5, Recall@5 and mean top-10 rating.",
      tech: [
        "scikit-learn",
        "Sentence-Transformers",
        "NumPy",
        "Streamlit",
        "Jupyter"
      ],
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/GitwithHaseeb/Personal-Content-Recommender"
        }
      ]
    },
    {
      projectName: "MyHinglishSentiment",
      category: "AI & Machine Learning",
      icon: "fas fa-comment-dots",
      projectDesc:
        "XLM-RoBERTa fine-tuned for three-class sentiment on Roman-script Hinglish, reaching ~92–96% test accuracy on a balanced stratified benchmark. Ships confusion matrices, training curves, and a Gradio UI that captures user-labelled feedback for retraining.",
      tech: ["PyTorch", "XLM-RoBERTa", "Transformers", "Gradio", "pandas"],
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/GitwithHaseeb/MyHinglishSentiment"
        }
      ]
    },
    {
      projectName: "Vehicle Tracking System",
      category: "AI & Machine Learning",
      icon: "fas fa-map-marked-alt",
      featured: true,
      projectDesc:
        "Multi-tenant telemetry platform streaming live location over WebSockets with strict per-user data isolation. Three ML capabilities ship alongside it: regression ETA prediction, IsolationForest anomaly detection, and KMeans driver-behaviour scoring.",
      tech: [
        "FastAPI",
        "WebSockets",
        "scikit-learn",
        "React",
        "SQLite",
        "PDF Reports"
      ],
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/GitwithHaseeb/Vehicle-Tracking-System"
        }
      ]
    },
    {
      projectName: "AI Skill Matching Platform",
      category: "AI & Machine Learning",
      icon: "fas fa-project-diagram",
      projectDesc:
        "Final Year Project — an AI-powered team-formation platform that extracts skills from free-text profiles with NLP, matches candidates to project roles, and guides users through an integrated chatbot assistant.",
      tech: ["Python", "NLP", "Embeddings", "React", "REST API"],
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/GitwithHaseeb/AI-Powered-Dynamic-Skill-Matching-Platform-"
        }
      ]
    },
    {
      projectName: "Parallel Health Diagnosis System",
      category: "AI & Machine Learning",
      icon: "fas fa-heartbeat",
      projectDesc:
        "Parallel machine-learning pipeline predicting gender, age band and disease class from sensor features, using multi-task model training and parallelised inference to cut end-to-end runtime.",
      tech: ["Python", "scikit-learn", "Parallel Computing", "pandas"],
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/GitwithHaseeb/health-disease-prediction"
        }
      ]
    },

    /* ---------------- Full-Stack ---------------- */
    {
      projectName: "GH.ai — Full-Stack SaaS Platform",
      category: "Full-Stack",
      icon: "fas fa-cubes",
      featured: true,
      projectDesc:
        "Production SaaS with a Next.js 15 App Router frontend proxying same-origin calls to an async FastAPI backend. Every entity persists in PostgreSQL through async SQLAlchemy over asyncpg, with Celery and Redis handling email and lead-scoring workloads.",
      tech: [
        "Next.js 15",
        "React 19",
        "FastAPI",
        "PostgreSQL",
        "Redis",
        "Celery",
        "Docker"
      ],
      footerLink: [
        {
          name: "Live",
          url: "https://full-stack-saa-s-website-gh-ai-gh-p.vercel.app/"
        },
        {
          name: "GitHub",
          url: "https://github.com/GitwithHaseeb/Full-Stack-SaaS-Website-GH.ai-GH-Pvt-Ltd-"
        }
      ]
    },
    {
      projectName: "E-Learning Platform",
      category: "Full-Stack",
      icon: "fas fa-graduation-cap",
      featured: true,
      projectDesc:
        "Django REST + React learning platform with JWT auth, a course catalogue with enrolments, a five-phase learning flow, a quiz engine with progress tracking, and certificate generation on completion. Deployed across Render and Vercel.",
      tech: [
        "Django 5",
        "DRF",
        "SimpleJWT",
        "PostgreSQL",
        "React 18",
        "React Query",
        "Zustand"
      ],
      footerLink: [
        {name: "Live", url: "https://gh-e-learning-platform.vercel.app/"},
        {
          name: "GitHub",
          url: "https://github.com/GitwithHaseeb/GH-E-Learning-Platform-"
        }
      ]
    },
    {
      projectName: "Examify — Online Exam Portal",
      category: "Full-Stack",
      icon: "fas fa-file-signature",
      projectDesc:
        "Examination system with Admin, Instructor and Student dashboards. A secure exam runtime provides countdown timers, auto-submit, tab-switch alerts and continuous auto-save; grading covers instant objective scoring plus PDF grade-sheet export.",
      tech: [
        "React 18",
        "TypeScript",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
        "PDFKit"
      ],
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/GitwithHaseeb/Online-Exam-Portal"
        }
      ]
    },
    {
      projectName: "RentFlow — Property Management",
      category: "Full-Stack",
      icon: "fas fa-building",
      projectDesc:
        "Dual-persona rental platform: landlords get income charts, payment activity and maintenance overviews; tenants get payment history, request tracking and documents. Priority-based maintenance workflow with full status transitions.",
      tech: [
        "React 19",
        "Tailwind 4",
        "Framer Motion",
        "Express 5",
        "MongoDB",
        "Zustand"
      ],
      footerLink: [
        {name: "GitHub", url: "https://github.com/GitwithHaseeb/RentFLow"}
      ]
    },
    {
      projectName: "BloodLink-AI",
      category: "Full-Stack",
      icon: "fas fa-tint",
      projectDesc:
        "Role-based donation platform connecting donors and hospitals through city-wise discovery and blood-group compatibility validation, with a full request lifecycle and an AI assistant using Gemini with automatic Groq fallback on quota exhaustion.",
      tech: ["Node.js", "Express", "SQLite", "JWT", "Gemini API", "Groq"],
      footerLink: [
        {name: "GitHub", url: "https://github.com/GitwithHaseeb/BloodLink-AI"}
      ]
    },
    {
      projectName: "SkillForge AI",
      category: "Full-Stack",
      icon: "fas fa-bolt",
      projectDesc:
        "Gamified learning platform generating personalised skill roadmaps with XP, badges and progress tracking. An interactive path timeline auto-persists step completion to SQLite through Prisma — with zero external API keys required.",
      tech: ["Next.js 14", "TypeScript", "Prisma", "SQLite", "Framer Motion"],
      footerLink: [
        {name: "GitHub", url: "https://github.com/GitwithHaseeb/SkillForge-AI"}
      ]
    },
    {
      projectName: "GH Store.PK — E-Commerce Monorepo",
      category: "Full-Stack",
      icon: "fas fa-store",
      projectDesc:
        "Monorepo storefront with generator tooling that programmatically produces 480 unique SKUs plus seed data, and an image pipeline emitting 480 optimised WebP assets with a switchable local/AI source so the store runs fully offline.",
      tech: ["React", "Vite", "Node.js", "Express", "MongoDB", "Sharp"],
      footerLink: []
    },
    {
      projectName: "Full-Stack E-Commerce Web App",
      category: "Full-Stack",
      icon: "fas fa-shopping-cart",
      projectDesc:
        "Complete storefront built from a Figma specification — home, listing, product detail and cart flows over dynamic MongoDB data, with search, category filtering, JWT auth, an admin CRUD panel, and localStorage cart persistence.",
      tech: ["React", "Vite", "Tailwind", "Express", "MongoDB", "JWT"],
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/GitwithHaseeb/Ecomerce-Website-"
        }
      ]
    },
    {
      projectName: "Expense Tracker Pro",
      category: "Full-Stack",
      icon: "fas fa-wallet",
      projectDesc:
        "Personal finance manager with budgets, colour-coded categories and threshold alerts, plus a client-side ML module doing linear-regression spend forecasting and standard-deviation anomaly detection. Exports to CSV and PDF with full JSON backup.",
      tech: ["PHP REST API", "JavaScript ES6", "Chart.js", "jsPDF", "SheetJS"],
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/GitwithHaseeb/expense-tracker-pro"
        }
      ]
    },

    /* ---------------- Frontend ---------------- */
    {
      projectName: "SEEB.io — Cinematic Studio Site",
      category: "Frontend",
      icon: "fas fa-cube",
      featured: true,
      projectDesc:
        "Immersive single-page studio portfolio pairing a lazy-loaded Three.js hero — reactive particle system, infinite grid floor, cursor-trailing glow orb — with TypeScript strict mode, reduced-motion support, and complete SEO and JSON-LD coverage.",
      tech: [
        "Next.js 14",
        "TypeScript",
        "Three.js",
        "React Three Fiber",
        "Framer Motion"
      ],
      footerLink: [
        {name: "Live", url: "https://seeb-io.vercel.app"},
        {name: "GitHub", url: "https://github.com/GitwithHaseeb/Seeb.io"}
      ]
    },
    {
      projectName: "CHEETO Watches Configurator",
      category: "Frontend",
      icon: "fas fa-clock",
      projectDesc:
        "Luxury multi-page configurator across three watch families, with a three-step flow featuring collection-dependent options, animated live pricing, engraving validation and localStorage persistence — plus a WebGL tube-field hero.",
      tech: ["HTML5", "CSS3", "Vanilla JS", "Three.js", "WebGL", "Vercel"],
      footerLink: [
        {
          name: "Live",
          url: "https://cheeto-watch-ladies-watch-configura.vercel.app/"
        },
        {
          name: "GitHub",
          url: "https://github.com/GitwithHaseeb/CHEETO-WATCH--Ladies-Watch-Configurator"
        }
      ]
    },
    {
      projectName: "Pepsi GMT Watch Configurator",
      category: "Frontend",
      icon: "fas fa-stopwatch",
      projectDesc:
        "Cinematic dark-mode configurator built on a pure-CSS four-face 3D rotating cube hero, with a live pricing engine mapping bezel, strap and finishing selections to animated updates. Zero frameworks, no build step.",
      tech: [
        "HTML5",
        "CSS3",
        "Vanilla JS",
        "IntersectionObserver",
        "Glassmorphism"
      ],
      footerLink: [
        {name: "Live", url: "https://pepsi-watch-configurator.vercel.app/"},
        {
          name: "GitHub",
          url: "https://github.com/GitwithHaseeb/Pepsi-Watch-Configurator"
        }
      ]
    },
    {
      projectName: "GH AI — Startup Website",
      category: "Frontend",
      icon: "fas fa-microchip",
      projectDesc:
        "Five-page enterprise AI marketing site presenting research, platform capabilities and contact channels, with a dark editorial design system, glassmorphism navigation and scroll-reveal animation — entirely dependency-free.",
      tech: ["HTML5", "CSS3", "Vanilla JS", "Vercel"],
      footerLink: [
        {
          name: "Live",
          url: "https://gh-ai-artificial-intelligence-start.vercel.app/"
        },
        {
          name: "GitHub",
          url: "https://github.com/GitwithHaseeb/GH-AI---Artificial-Intelligence-Startup"
        }
      ]
    },
    {
      projectName: "Pizza Venue — Restaurant Site",
      category: "Frontend",
      icon: "fas fa-pizza-slice",
      projectDesc:
        "Responsive multi-page restaurant site with home, menu and branch-locator experiences, client-side category filtering across six menu groups, sticky navigation with active states, and a WhatsApp quick-contact action.",
      tech: ["HTML5", "CSS3", "Vanilla JS"],
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/GitwithHaseeb/Pizza-Venue-Website"
        }
      ]
    },

    /* ---------------- Desktop ---------------- */
    {
      projectName: "Java POS System",
      category: "Desktop",
      icon: "fas fa-cash-register",
      projectDesc:
        "Production-ready desktop point-of-sale for departmental retail, structured for multi-client rebranding. Role-based Administrator and Cashier workflows over embedded H2, OpenPDF receipt generation, and externalised white-label branding config.",
      tech: ["Java 17", "JavaFX", "Maven", "H2 Database", "OpenPDF"],
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/GitwithHaseeb/POS-System-JAVA-"
        }
      ]
    }
  ],
  display: true
};

// Core engineering competencies

const achievementSection = {
  title: "Core Competencies",
  subtitle:
    "The engineering themes that run through every project in this portfolio",

  achievementsCards: [
    {
      title: "Production AI Engineering",
      icon: "fas fa-brain",
      subtitle:
        "Retrieval-augmented generation with citation grounding, vector store design, embedding pipelines, and multi-provider LLM abstraction with automatic fallback and quota handling."
    },
    {
      title: "Asynchronous & Real-Time Systems",
      icon: "fas fa-network-wired",
      subtitle:
        "Celery and Redis task queues, WebSocket telemetry streaming, background job scheduling, and webhook-driven event processing that keeps the request path fast."
    },
    {
      title: "Security-First API Development",
      icon: "fas fa-shield-alt",
      subtitle:
        "JWT and role-based access control, password hashing, schema validation, rate limiting, and strict per-user data isolation across multi-tenant platforms."
    },
    {
      title: "Design-System-Led Frontend",
      icon: "fas fa-palette",
      subtitle:
        "Token-based theming, WebGL and motion design, accessibility through ARIA, reduced-motion and semantic landmarks, plus measurable performance optimisation."
    },
    {
      title: "Deployment & Delivery",
      icon: "fab fa-docker",
      subtitle:
        "Docker Compose environments, GitHub Actions pipelines, and live production deployments on Vercel and Render backed by documented release runbooks."
    },
    {
      title: "Technical Communication",
      icon: "fas fa-book-open",
      subtitle:
        "IEEE-format technical reports, automated Word and PDF report generators, deployment runbooks, and bilingual user documentation for non-technical stakeholders."
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

// Talks Section

const talkSection = {
  title: "TALKS",
  subtitle: "",
  talks: [],
  display: false
};

// Podcast Section

const podcastSection = {
  title: "Podcast",
  subtitle: "",
  podcast: [],
  display: false
};

// Resume Section

const resumeSection = {
  title: "Resume",
  subtitle: "",
  display: false
};

const contactInfo = {
  title: "Let's Build Something",
  subtitle:
    "Open to engineering conversations — full-stack builds, AI/ML delivery, and remote collaboration. Email is the fastest way to reach me; I reply within a day.",
  number: "+92 313 4377476",
  email_address: "haseebch8130@gmail.com"
};

const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  heroStats,
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
