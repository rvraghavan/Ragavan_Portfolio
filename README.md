# V. Raghavan — Technical Lead & Enterprise Modernization Portfolio

A production-quality personal portfolio website for **V. Raghavan**, Technical Lead & Enterprise Solutions Architect, inspired by the information architecture, content density, and editorial aesthetics of [sankar.work](https://sankar.work/).

Built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**, this portfolio functions as an interactive case-study library and living professional profile, strictly grounded in V. Raghavan's verified 12+ years of enterprise engineering records.

---

## 🌟 Key Highlights & Features

### 1. Editorial Technology Art Direction
- **Midnight Navy & Charcoal Palette**: Base `#060913` with vibrant cyan (`#06b6d4`), electric blue (`#38bdf8`), and emerald accents.
- **Modern Typography**: High-readability font hierarchy pairing *Space Grotesk* for bold headlines, *Inter* for editorial narrative, and *JetBrains Mono* for metrics and technical badges.
- **Subtle Animated Network Visualizer**: Interactive canvas mesh simulating distributed microservices and cloud nodes without distracting heavy 3D elements.
- **Authentic Portrait & Verification**: Candidate's genuine resume portrait framed in a sleek technical card with authenticated metadata.

### 2. Verified Career Impact Metrics
Animated count-up counters displaying only resume-verified data:
- **12+ Years** of Enterprise IT Leadership
- **5 Engineers** Led on Key Client Modernizations (Monroney & iDoRAN)
- **10% Cost Reduction** Delivered on the Monroney Modernization Initiative
- **7/7 PCSAT Score** Perfect Client Satisfaction from JGC Corporation, Japan

### 3. Interactive Before-and-After Modernization Experience
A dynamic comparison slider contrasting legacy enterprise monoliths against modern cloud-native architectures:
- **Legacy State**: Mainframe coupling (IBM Db2), Java 11 Veracode CVE backlogs, high cyclomatic complexity, and rigid compute costs.
- **Modernized State**: Decoupled AWS ECS Fargate microservices, upgraded Java 17 LTS, SonarQube refactored clean code, read-only root filesystems satisfying **AWS Security Hub Control [ECS.5]** and **Prowler** compliance, yielding 10% operational savings.

### 4. Curated Engineering Case Studies & Project Deep Dives
Interactive project cards with category filtering, technology badges, and full-screen modal deep dives:
- **Monroney Web Application** (Nissan North America / Tech Mahindra): Mainframe-to-cloud modernization on AWS ECS Fargate, Node.js 20, Java 17, Angular 14, and DB2/Postgres.
- **iDoRAN Document Automation** (HCL Technologies): Flagship AI-driven intelligent document extraction engine, winner of the **ERS Champion Award**, showcased across **AWS & Microsoft Azure Marketplaces**.
- **VDX Application** (JGC Corporation, Japan / HCL Technologies): Greenfield cloud portal scoring a unanimous **7/7 Customer PCSAT**.
- **Customer Spec Extraction** (Baker Hughes, USA / HCL Technologies): Apache Kafka streaming and Spring Boot document parsing pipeline.
- Additional compact case studies: Manchester United fan portal (AWS Lambda), Brightstar, Broadband Gateway (Verizon), Intellect Info (Saksoft), and Feedertech Shipping (Dubai).

### 5. Authentic Technology Logo Ecosystem
Over 35 real SVG technology logos with official brand colors and hover tooltips:
- **Backend**: Java, Spring Boot, Node.js, Python, Hibernate, REST APIs
- **Frontend**: Angular, TypeScript, JavaScript, HTML5, CSS3, Bootstrap, jQuery
- **Cloud (AWS)**: ECS, Fargate, Lambda, S3, API Gateway, CloudFront, CloudWatch, IAM, EC2
- **Data & Messaging**: PostgreSQL, Oracle Database, IBM Db2, Apache Kafka, Amazon SQS
- **DevOps & Tools**: Docker, Jenkins, Git, SVN, Maven, Gradle, Jira, SonarQube, Tomcat
- **Architecture**: Microservices, Serverless, Enterprise Modernization, Agile/Scrum, System Integration, Performance Optimization

### 6. Interactive Career Assistant ("Ask About My Experience")
Recruiter Q&A exploration drawer preloaded with deterministic questions on:
- Enterprise application modernization
- AWS cloud infrastructure & container compliance
- Engineering team leadership & Agile Scrum delivery
- AI document automation (iDoRAN)
- Security remediation (Java 11 to 17, SonarQube, Prowler, ECS.5)
- Documented career metrics & client satisfaction

### 7. Global Command Palette (`Ctrl + K`)
Instant jump-to-section navigation, project filtering, and quick actions (download resume PDF, contact, open assistant).

### 8. Career Journey Timeline & Awards
- Expandable company cards spanning **Tech Mahindra**, **HCL Technologies**, **Saksoft**, **Web Synergies (Verizon)**, and **Paragon Dynamics**.
- Formal recognition showcase: **ERS Champion Award**, **Pat on the Back (Sept 2025 & Jan 2026)**, **PCSAT 7/7**, and marketplace launches.
- Clear distinction between formal degrees (B.Tech IT, Anna University) and professional training (Udemy, Google Cloud Digital Leader, TechM AI White Belt).

### 9. Privacy Adherence
Strict compliance with candidate privacy: passport numbers, date of birth, residential addresses, and passport expiry dates are protected and excluded.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework** | [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| **Bundler & Server** | [Vite 8](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS v3](https://tailwindcss.com/) + PostCSS + Autoprefixer |
| **Icons** | [Lucide React](https://lucide.dev/) + Custom authentic SVG brand icons |
| **Typography** | Google Fonts (*Space Grotesk*, *Inter*, *JetBrains Mono*) |

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: v18.0.0 or higher (v22+ recommended)
- **npm**: v9.0.0 or higher

### Installation

1. Navigate to the project directory:
   ```bash
   cd raghavan-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

Start the Vite development server:
```bash
npm run dev
```
Open your browser and navigate to:
```
http://localhost:3000/
```

### Production Build & Preview

Compile and bundle for production:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

---

## 📁 Project Architecture

```
raghavan-portfolio/
├── public/
│   ├── raghavan-portrait.jpg              # Authentic professional portrait from resume
│   └── Raghavan_Technical_Lead_Resume.pdf # Full 4-page verified resume PDF
├── src/
│   ├── components/
│   │   ├── AboutSection.tsx               # Editorial bio & 8 enterprise domains
│   │   ├── AchievementGrid.tsx            # Corporate awards & executive accolades
│   │   ├── ArchitectureDiagram.tsx        # Interactive SVG architecture flows
│   │   ├── CareerAssistantModal.tsx       # Recruiter Q&A exploration drawer
│   │   ├── CareerMetrics.tsx              # Animated count-up verified metric cards
│   │   ├── CareerTimeline.tsx             # Expandable chronological career journey
│   │   ├── CommandPalette.tsx             # Global Ctrl+K quick-search dialog
│   │   ├── ContactSection.tsx             # Validated form, direct mailto & LinkedIn
│   │   ├── EducationSection.tsx           # B.Tech IT, Udemy upskilling & AI certs
│   │   ├── Footer.tsx                     # Editorial footer, back-to-top, privacy note
│   │   ├── HeroSection.tsx                # Dynamic headline, portrait & canvas mesh
│   │   ├── ModernizationSlider.tsx        # Before & After architecture comparison
│   │   ├── ProjectDetailModal.tsx         # Comprehensive multi-tab deep-dive modal
│   │   ├── ProjectGrid.tsx                # Filterable project case-study library
│   │   ├── SiteNavigation.tsx             # Sticky navigation & mobile drawer
│   │   ├── TechIcon.tsx                   # 35+ authentic SVG brand logos
│   │   └── TechnologyLogoGrid.tsx         # Filterable technology ecosystem
│   ├── data/
│   │   └── portfolioData.ts               # Single source of truth (resume-grounded)
│   ├── types/
│   │   └── index.ts                       # TypeScript interfaces and domain models
│   ├── App.tsx                            # Root application layout
│   ├── index.css                          # Tailwind CSS directives and custom scrollbars
│   ├── main.tsx                           # Application entry point
│   └── vite-env.d.ts                      # Vite client environment declarations
├── index.html                             # Semantic HTML5, SEO meta tags & fonts
├── package.json                           # Dependencies and build scripts
├── tailwind.config.js                     # Tailored color palette and typography
├── tsconfig.json                          # Strict TypeScript compiler options
└── vite.config.ts                         # Vite configuration with React plugin
```

---

## 📄 License & Attribution
Designed and built for **V. Raghavan**, Technical Lead. Content derived from verified professional resume documentation.
All company and trademark names belong to their respective copyright holders.
