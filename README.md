# Muhammad Haseeb – Software Developer Portfolio

<div align="center">

[![GitHub License](https://img.shields.io/github/license/GitwithHaseeb/Portfolio)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/GitwithHaseeb/Portfolio)](https://github.com/GitwithHaseeb/Portfolio/stargazers)
[![Made with React](https://img.shields.io/badge/Made%20with-React-61DAFB?logo=react)](https://reactjs.org/)
[![Deploy to Vercel](https://img.shields.io/badge/Deploy%20to-Vercel-black?logo=vercel)](https://vercel.com/new/)

</div>

**A clean, responsive, and modern portfolio template for Muhammad Haseeb – an aspiring full‑stack developer.**  
This portfolio showcases technical skills, education, work experience, and featured projects in a polished single‑page layout. It's fully customizable via a central configuration file and supports GitHub integration.

🔗 **Live Demo** → *(https://portfolio-fs3i.vercel.app/)*

---

## 👨‍💻 About the Developer

**Muhammad Haseeb** is a final‑year BSCS student at the University of Central Punjab, Lahore. He focuses on full‑stack web development, AI‑powered solutions, and reliable software using Python, FastAPI, Node.js, and modern databases. He has interned as a Java Developer at Uworx Software House and built multiple end‑to‑end applications that blend web technologies with machine learning.

> *Entry‑level Software Developer and final‑year BSCS student focused on full‑stack web development, AI‑powered solutions, and building reliable software with Python, JavaScript, FastAPI, Node.js, and databases.*  
> — Muhammad Haseeb

---

## 🚀 Portfolio Sections

✔️ **Greeting & Summary** – Professional introduction with profile image  
✔️ **Skills & Tech Stack** – Visual skill bars and technology icons  
✔️ **Education** – BSCS (UCP Lahore) and ICS (PGC Lahore)  
✔️ **Work Experience** – Java Intern at Uworx Software House  
✔️ **Open Source Projects** – (Optional) GitHub pinned repositories  
✔️ **Selected Projects** – Eight featured projects (web, ML, AI)  
✔️ **Achievements & Certifications** – Recognitions and badges  
✔️ **Contact Me** – Email and phone number  
✔️ **GitHub Profile** – (Optional) Display GitHub stats  

---

## 🛠️ Built With

- [React](https://reactjs.org/) – UI library
- [React Scripts](https://create-react-app.dev/) – Build tooling
- [Sass](https://sass-lang.com/) – CSS preprocessing
- [Lottie React](https://www.npmjs.com/package/lottie-react) – Animations
- [React Easy Emoji](https://www.npmjs.com/package/react-easy-emoji) – Emoji support
- [React Headroom](https://www.npmjs.com/package/react-headroom) – Sticky navigation
- [React Reveal](https://www.react-reveal.com/) – Scroll animations
- [React Twitter Embed](https://www.npmjs.com/package/react-twitter-embed) – Twitter feed (optional)
- [Color Thief](https://github.com/lokesh/color-thief) – Dynamic color extraction

---

## 🖼️ Selected Projects (Highlighted in Portfolio)

| Project | Description |
|---------|-------------|
| **BloodLink-AI** | Role‑based blood donation platform with JWT auth, city matching, and AI assistant. |
| **Expense Tracker Pro** | Full‑stack personal finance manager with budgets, analytics, and forecasting. |
| **Vehicle Tracking System** | FastAPI + React real‑time tracking with ETA prediction and anomaly detection. |
| **MyRecs Recommender** | Recommendation engine using TF‑IDF, matrix factorization, and sentence transformers. |
| **MyHinglishSentiment** | Hinglish sentiment classifier fine‑tuned on XLM‑RoBERTa. |
| **GH Buddy RAG Chatbot** | RAG chatbot using ChromaDB and dual model routing for student Q&A. |
| **PDC Health Diagnosis System** | Parallel ML pipeline predicting gender, age, and disease from sensor features. |
| **AI Skill Matching Platform (FYP)** | NLP‑based skill extraction, profile matching, and chatbot for team formation. |

---

## 📂 Getting Started (Local Development)

### Prerequisites

- Node.js (v10.16.0 or higher)
- npm (v6.9.0 or higher)
- Git

### Installation

```bash
# Clone your repository
git clone https://github.com/GitwithHaseeb/Portfolio.git

# Navigate into the folder
cd Portfolio

# Install dependencies
npm install

# Start the development server
npm start
docker build -t haseeb-portfolio .
🔧 Environment Variables (for GitHub & Medium integration)
REACT_APP_GITHUB_TOKEN="your_github_personal_access_token"
GITHUB_USERNAME="GitwithHaseeb"
USE_GITHUB_DATA="true"
MEDIUM_USERNAME="your_medium_username"
✏️ Customization – Edit src/portfolio.js
All content lives in src/portfolio.js. You can change your name, bio, skills, projects, experience, and contact info there.
Additional Files
Colors – src/_globalColor.scss

Resume PDF – replace src/containers/greeting/resume/resume.pdf

Lottie animations – replace JSON files in src/assets/lottie/

Page title & meta tags – public/index.html

To hide a section (e.g., Blogs, Twitter), set its display flag to false in portfolio.js.
🔗 **Live Demo** → https://portfolio-fs3i.vercel.app/
