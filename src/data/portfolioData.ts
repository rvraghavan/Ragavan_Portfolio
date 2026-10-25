import { TechItem, MetricItem, Project, CareerExperience, AwardItem, EducationItem, CourseItem, AssistantQA } from '../types';

export const PERSONAL_INFO = {
  name: "V. Raghavan",
  role: "Technical Lead | Full Stack Engineer | Cloud Solutions",
  headline: "Engineering Scalable Solutions. Modernizing Enterprise Systems. Leading Teams Forward.",
  supportingText: "Technology leader with 12+ years of experience delivering enterprise applications, modernizing legacy systems, and building cloud-enabled solutions across multiple industries.",
  email: "rvraghavan.it@gmail.com",
  phone: "+91 96000 18839",
  location: "Chennai, India",
  linkedIn: "https://www.linkedin.com/in/raghavanvijayan",
  resumePdfUrl: "/Raghavan_Technical_Lead_Resume.pdf",
  portraitUrl: "/raghavan-portrait.jpg",
  experienceYears: "12+",
  highlights: [
    "12+ years of enterprise experience",
    "Technical team leadership & mentoring",
    "Enterprise application modernization",
    "AWS & microservices architecture",
    "AI-powered document automation"
  ],
  bioParagraphs: [
    "With over 12 years of enterprise engineering leadership across Finance, Shipping, Telecommunications, Manufacturing, and Intellectual Property domains, I specialize in transforming legacy monoliths into highly reliable, cloud-native architectures.",
    "Currently serving as Tech Lead at Tech Mahindra on key modernization initiatives for Nissan North America, I direct cross-functional engineering teams, architect serverless and containerized AWS systems, and enforce rigorous security compliance frameworks including AWS Security Hub (ECS.5), Prowler, and Veracode.",
    "Previously at HCL Technologies, I spearheaded the complete development and commercial release of iDoRAN, an AI-powered document extraction and workflow automation platform that earned the corporate ERS Champion award and achieved public marketplace listings across AWS, Microsoft Azure, and HCL Tech."
  ],
  engineeringPillars: [
    {
      title: "Enterprise Modernization",
      description: "Proven track record migrating legacy mainframe and monolithic stacks to modern microservices, achieving measurable operational cost reductions.",
      tag: "Mainframe to Cloud"
    },
    {
      title: "Cloud & Microservices",
      description: "Designing resilient AWS infrastructures utilizing ECS Fargate, Lambda, API Gateway, S3, and event-driven patterns with Apache Kafka and SQS.",
      tag: "Serverless & Containers"
    },
    {
      title: "Engineering Leadership",
      description: "Leading Agile teams through sprint ceremonies, architecture reviews, cognitive complexity refactoring with SonarQube, and stakeholder alignment.",
      tag: "Agile & Team Mentoring"
    },
    {
      title: "Enterprise Security & Quality",
      description: "Rigorous vulnerability mitigation through Veracode, read-only root filesystems on container environments, and zero-defect delivery standards.",
      tag: "Compliance & SonarQube"
    }
  ]
};

export const METRICS_DATA: MetricItem[] = [
  {
    id: "experience",
    value: 12,
    suffix: "+",
    label: "Years of Experience",
    context: "Across enterprise domains including automotive, finance, shipping & telecom",
    icon: "clock"
  },
  {
    id: "engineers",
    value: 5,
    suffix: "",
    label: "Engineers Led on Key Project",
    context: "Direct technical leadership on Monroney Modernization & iDoRAN delivery",
    icon: "users"
  },
  {
    id: "savings",
    value: 10,
    suffix: "%",
    label: "Cost Savings Delivered",
    context: "Achieved on the Monroney Modernization Initiative at Tech Mahindra",
    icon: "trending-down"
  },
  {
    id: "pcsat",
    value: 7,
    suffix: "/7",
    label: "Customer PCSAT Score",
    context: "Perfect 7/7 customer satisfaction rating for VDX Application from JGC Corp Japan",
    icon: "award"
  }
];

export const TECH_SKILLS: TechItem[] = [
  // Programming & Backend
  { name: "Java", category: "backend", brandColor: "#e76f00", experience: "Core Java 1.7 - 17, Enterprise APIs, JVM Tuning" },
  { name: "Spring Boot", category: "backend", brandColor: "#6db33f", experience: "Spring MVC, Microservices, Spring Data JPA, Security" },
  { name: "Node.js", category: "backend", brandColor: "#5fa04e", experience: "v20 LTS, Microservices, DB2 / Postgres connectors" },
  { name: "Python", category: "backend", brandColor: "#3776ab", experience: "Backend microservices, AI pipeline integration" },
  { name: "Hibernate", category: "backend", brandColor: "#59666c", experience: "ORM, JPA entity modeling, caching strategies" },
  { name: "REST APIs", category: "backend", brandColor: "#0284c7", experience: "Contract-first OpenAPI, API Gateway routing" },
  
  // Frontend
  { name: "Angular", category: "frontend", brandColor: "#dd0031", experience: "Angular v11, v12, v14, component architecture, RxJS" },
  { name: "TypeScript", category: "frontend", brandColor: "#3178c6", experience: "Strict type systems, scalable client-side logic" },
  { name: "JavaScript", category: "frontend", brandColor: "#f7df1e", experience: "Modern ES6+, DOM manipulation, asynchronous flows" },
  { name: "HTML5", category: "frontend", brandColor: "#e34f26", experience: "Semantic markup, accessibility landmarks" },
  { name: "CSS3", category: "frontend", brandColor: "#1572b6", experience: "Responsive grids, flexbox, custom design tokens" },
  { name: "Bootstrap", category: "frontend", brandColor: "#7952b3", experience: "Rapid responsive layouts, custom dashboard theming" },
  { name: "jQuery", category: "frontend", brandColor: "#0769ad", experience: "Legacy enterprise UI modernization & integration" },

  // Cloud
  { name: "Amazon Web Services", category: "cloud", brandColor: "#ff9900", experience: "Certified Cloud Practitioner, multi-service architecture" },
  { name: "AWS ECS", category: "cloud", brandColor: "#ff9900", experience: "Elastic Container Service, task definitions, clusters" },
  { name: "AWS Fargate", category: "cloud", brandColor: "#f58220", experience: "Serverless container compute, read-only root filesystems" },
  { name: "AWS Lambda", category: "cloud", brandColor: "#ff9900", experience: "Serverless event-driven functions & microservices" },
  { name: "AWS S3", category: "cloud", brandColor: "#569a31", experience: "Secure object storage, lifecycle policies, asset hosting" },
  { name: "API Gateway", category: "cloud", brandColor: "#ff9900", experience: "Throttling, authentication proxies, VPC links" },
  { name: "AWS CloudFront", category: "cloud", brandColor: "#d86613", experience: "Edge caching, CDN routing, low latency delivery" },
  { name: "AWS CloudWatch", category: "cloud", brandColor: "#e7157b", experience: "Centralized logging, operational alarms, telemetry" },
  { name: "AWS IAM", category: "cloud", brandColor: "#dd344c", experience: "Least-privilege role policies, task execution roles" },
  { name: "AWS EC2", category: "cloud", brandColor: "#f58536", experience: "Virtual compute management & Linux server admin" },

  // Data & Messaging
  { name: "PostgreSQL", category: "data", brandColor: "#4169e1", experience: "Relational modeling, indexing, ACID transactions" },
  { name: "Oracle Database", category: "data", brandColor: "#f80000", experience: "PL/SQL, enterprise schema design, Toad integration" },
  { name: "IBM Db2", category: "data", brandColor: "#054ada", experience: "Mainframe & enterprise relational data integration" },
  { name: "Apache Kafka", category: "data", brandColor: "#231f20", experience: "Event streaming, producer-consumer architectures" },
  { name: "Amazon SQS", category: "data", brandColor: "#ff4f8b", experience: "Decoupled asynchronous message queuing & retry dead-letters" },

  // DevOps & Tools
  { name: "Docker", category: "devops", brandColor: "#2496ed", experience: "Containerization, multi-stage builds, rootless security" },
  { name: "Jenkins", category: "devops", brandColor: "#d24939", experience: "Automated CI/CD build pipelines, test automation" },
  { name: "Git", category: "devops", brandColor: "#f05032", experience: "Version control workflows, GitFlow, branch governance" },
  { name: "SVN", category: "devops", brandColor: "#809cc9", experience: "Subversion enterprise repository management" },
  { name: "Maven", category: "devops", brandColor: "#c71a36", experience: "Java dependency orchestration, multi-module builds" },
  { name: "Gradle", category: "devops", brandColor: "#02303a", experience: "Fast declarative build scripts for Spring Boot & Node" },
  { name: "Jira", category: "devops", brandColor: "#0052cc", experience: "Scrum board management, sprint planning, backlog grooming" },
  { name: "SonarQube", category: "devops", brandColor: "#4e9bcd", experience: "Cognitive complexity analysis, static security gates" },
  { name: "Apache Tomcat", category: "devops", brandColor: "#f8dc75", experience: "Enterprise Java servlet hosting & configuration" },

  // Architecture & Engineering
  { name: "Microservices", category: "architecture", brandColor: "#06b6d4", experience: "Decoupled domain services, independent scaling & deployments" },
  { name: "Serverless Architecture", category: "architecture", brandColor: "#38bdf8", experience: "Event-triggered execution with Lambda, ECS Fargate & SQS" },
  { name: "Enterprise Modernization", category: "architecture", brandColor: "#6366f1", experience: "Mainframe migration, Java 11 to 17 upgrade, security fixes" },
  { name: "Agile & Scrum", category: "architecture", brandColor: "#10b981", experience: "Sprint planning, daily standups, retrospectives, story points" },
  { name: "System Integration", category: "architecture", brandColor: "#a855f7", experience: "Bespoke REST interfaces, enterprise ERP connectors" },
  { name: "Performance Optimization", category: "architecture", brandColor: "#f59e0b", experience: "Query profiling, memory leak detection, cognitive code refactoring" }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "monroney-app",
    title: "Monroney Web Application",
    client: "Nissan North America, USA",
    organization: "Tech Mahindra",
    role: "Tech Lead",
    duration: "June 2024 – Present",
    featured: true,
    category: "Enterprise Modernization",
    summary: "Large-scale modernization initiative transforming a legacy mainframe-dependent automotive labeling system into a high-resilience, serverless and containerized AWS cloud platform.",
    technologies: [
      "Java 17",
      "Node.js 20",
      "Angular 14",
      "TypeScript",
      "PostgreSQL",
      "IBM Db2",
      "AWS ECS Fargate",
      "AWS S3",
      "API Gateway",
      "AWS CloudWatch",
      "Mainframe"
    ],
    highlights: [
      "Directed offshore team of 5 engineers delivering milestones on schedule",
      "Successfully delivered 10% cost savings through cloud resource optimization",
      "Migrated critical monolithic Java code from Java 11 to Java 17",
      "Remediated Veracode security vulnerabilities and reduced SonarQube cognitive complexity",
      "Enforced AWS Security Hub ECS.5 & Prowler compliance via read-only root container filesystems",
      "Recognized with Tech Mahindra 'Pat on the Back' award in September 2025 and January 2026"
    ],
    outcomes: [
      "10% cost reduction on modernization operations",
      "Top 2nd performance rating across 2024-2025 Annual & 2025-2026 Midterm periods",
      "Direct work appreciation in daily Scrum ceremonies from Nissan North America leadership"
    ],
    deepDive: {
      businessContext: "The Monroney application generates standardized automobile window stickers (Monroney labels) required for all new vehicles sold in North America, detailing MSRP, fuel economy ratings, and crash-test scores. The original system relied heavily on aging mainframe systems and legacy application dependencies with high operational overhead.",
      engineeringChallenge: "Migrating from legacy mainframe interfaces while maintaining sub-second label calculation and rendering accuracy. The project required upgrading third-party libraries across Java 11 to 17 to eliminate critical Veracode CVE vulnerabilities, refactoring cognitive complexity bottlenecks, and complying with stringent cloud security audits (AWS Security Hub Control [ECS.5]).",
      roleResponsibilities: [
        "Led architecture design, requirement gathering, and sprint estimation stories.",
        "Direct technical leadership of a 5-person engineering squad via Agile Scrum ceremonies.",
        "Engineered critical Node.js v20 backend services integrating directly with IBM Db2 and PostgreSQL databases.",
        "Configured AWS ECS Fargate task definitions with strict read-only root filesystems to meet Prowler security benchmarks.",
        "Facilitated daily standups, release planning, backlog grooming, and offshore-onshore collaboration."
      ],
      architectureOverview: "Angular 14 single-page application served via CloudFront/S3, routing API requests through AWS API Gateway into containerized microservices hosted on AWS ECS Fargate. Node.js and Java 17 backend services communicate with both a modern PostgreSQL database for rapid caching/data and an IBM Db2 mainframe gateway for vehicle master records.",
      diagramType: "monroney",
      implementationHighlights: [
        "Major version migration from Java 11 to Java 17 to mitigate Veracode security risks.",
        "Refactored complex cyclomatic code paths using SonarQube quality gates.",
        "Engineered container runtime hardening (read-only root filesystem with ephemeral /tmp volume).",
        "Configured Amazon CloudWatch telemetry alarms for proactive error diagnosis."
      ],
      documentedOutcomes: [
        "Documented 10% operational cost savings achieved through right-sizing compute and eliminating legacy bottlenecks.",
        "Earned 2nd performance rating in consecutive review cycles.",
        "Zero security audit regressions across Prowler and AWS Security Hub validation runs."
      ],
      technicalTradeoffs: [
        "Maintained bidirectional sync between modern PostgreSQL and legacy IBM Db2 to support gradual transition rather than risky big-bang cutover.",
        "Adopted ECS Fargate over self-managed EC2 clusters, trading slight cold-start variations for zero server patching overhead and guaranteed compliance."
      ]
    }
  },
  {
    id: "idoran-automation",
    title: "iDoRAN Document Automation Platform",
    client: "Internal Product & Global Marketplaces",
    organization: "HCL Technologies",
    role: "Technical Lead",
    duration: "February 2021 – July 2023",
    featured: true,
    category: "AI & Document Automation",
    summary: "Commercial-grade AI-powered intelligent document extraction and workflow automation product designed to streamline invoice and unstructured document processing at scale.",
    technologies: [
      "Java 1.8",
      "Spring Boot",
      "JPA / Hibernate",
      "REST APIs",
      "Angular 12",
      "Node.js",
      "PostgreSQL",
      "Python",
      "Gradle"
    ],
    highlights: [
      "Awarded corporate ERS Champion award (JAS 2021) for delivering invoice extraction service ahead of schedule",
      "Publicly showcased and launched in AWS, Microsoft Azure, and HCL Tech Marketplaces in 2023",
      "Led end-to-end product development with customizable workflow engines and AI team integration",
      "Managed a team of 5 engineers delivering high velocity with 10% operational cost savings",
      "Awarded top 2nd performance rating across two consecutive review periods"
    ],
    outcomes: [
      "ERS Champion Award winner",
      "Public listing on AWS & Azure Marketplaces",
      "10% team cost savings delivered",
      "Top 2nd performance rating across consecutive periods"
    ],
    deepDive: {
      businessContext: "Enterprise back-offices process hundreds of thousands of heterogeneous invoices, purchase orders, and legal specs manually each month. iDoRAN was conceived as HCL's flagship intelligent document processing engine to extract key-value data automatically with human-in-the-loop validation.",
      engineeringChallenge: "Building a high-throughput processing pipeline that accepts various unstructured document formats (PDF, TIFF, scanned images), triggers OCR/AI extraction pipelines in Python, maps extracted data into structured JSON, and feeds customizable approval workflows with sub-second UI response times.",
      roleResponsibilities: [
        "End-to-end product architecture and technical governance.",
        "Spearheaded core workflow engine integration between Spring Boot REST services and Python AI extraction models.",
        "Led 5 engineers in Agile sprints, ensuring seamless interaction with QA and release teams.",
        "Prepared technical roadmap, marketplace deployment blueprints, and stakeholder demos."
      ],
      architectureOverview: "Angular 12 UI connected to Spring Boot JPA microservices. Inbound documents are queued, ingested into PostgreSQL metadata stores, processed through Python AI extraction workers, and presented through an interactive verification UI with confidence thresholding.",
      diagramType: "idoran",
      implementationHighlights: [
        "Engineered modular workflow orchestrator allowing clients to configure custom validation rules.",
        "Designed clean REST API contracts facilitating easy integration with external ERP systems.",
        "Streamlined build pipelines using Gradle for rapid multi-module compilation."
      ],
      documentedOutcomes: [
        "Publicly showcased on AWS Marketplace, Microsoft Azure Marketplace, and HCL Tech portal.",
        "Honored with ERS Champion Award for rapid delivery with superior accuracy.",
        "Achieved 10% cost efficiency through streamlined team execution."
      ],
      technicalTradeoffs: [
        "Separated UI ingestion services from CPU-heavy AI extraction jobs to avoid API thread starvation during bulk uploads.",
        "Employed PostgreSQL JSONB columns for flexible extracted document schema storage alongside traditional relational tables."
      ]
    }
  },
  {
    id: "vdx-application",
    title: "VDX Application",
    client: "JGC Corporation, Japan",
    organization: "HCL Technologies",
    role: "Technical Lead",
    duration: "March 2023 – September 2023",
    featured: true,
    category: "Cloud Solutions",
    summary: "Enterprise engineering portal built from scratch for a premier Japanese engineering firm, achieving a flawless 7/7 Customer PCSAT satisfaction rating.",
    technologies: [
      "Java 1.8",
      "Spring Boot",
      "JPA",
      "REST APIs",
      "Angular 11",
      "Node.js",
      "PostgreSQL",
      "Gradle",
      "Docker",
      "Python",
      "AWS (EC2, ECS, Fargate, S3, CloudFront, IAM, CloudWatch)"
    ],
    highlights: [
      "Achieved a perfect 7/7 Customer PCSAT Score from JGC Corporation, Japan",
      "Architected solution from scratch based on strict client Statement of Work (SoW)",
      "Designed full AWS cloud infrastructure: ECS Fargate, S3, CloudFront, and IAM",
      "Built containerized Spring Boot REST APIs with Docker orchestration",
      "Delivered ahead of milestone dates with comprehensive technical documentation"
    ],
    outcomes: [
      "Customer PCSAT Score: 7 / 7",
      "Flawless production deployment on AWS",
      "Commended by overseas leadership for technical delivery excellence"
    ],
    deepDive: {
      businessContext: "JGC Corporation required a centralized digital system for engineering document workflows, tracking technical deliverables, and collaborating across geographically distributed project teams with stringent security guidelines.",
      engineeringChallenge: "Architecting a greenfield cloud application compliant with Japanese enterprise security and performance standards while navigating international collaboration across time zones.",
      roleResponsibilities: [
        "Requirement gathering directly from Japanese stakeholders.",
        "Architecture design encompassing containerized backend, Angular frontend, and AWS infrastructure.",
        "Led sprint ceremonies, code reviews, and API contract specifications.",
        "Orchestrated Dockerized container deployment on AWS ECS Fargate."
      ],
      architectureOverview: "Frontend delivered via CloudFront and S3; Spring Boot REST services containerized with Docker running on AWS ECS Fargate with IAM roles, PostgreSQL relational backend, and CloudWatch log groups.",
      diagramType: "vdx",
      implementationHighlights: [
        "Built resilient RESTful API tier using Spring Boot and JPA entities.",
        "Containerized all backend services into multi-stage Docker images.",
        "Established CI/CD pipeline delivering automated builds to AWS."
      ],
      documentedOutcomes: [
        "Secured a unanimous 7/7 Customer PCSAT rating from JGC Corporation.",
        "Zero critical post-release defects recorded during acceptance testing."
      ],
      technicalTradeoffs: [
        "Adopted Docker containerization from day one to guarantee environment consistency across development, staging, and AWS production."
      ]
    }
  },
  {
    id: "spec-extraction",
    title: "Customer Specification Extraction",
    client: "Baker Hughes, USA",
    organization: "HCL Technologies",
    role: "Technical Lead",
    duration: "June 2023 – August 2023",
    featured: true,
    category: "AI & Document Automation",
    summary: "High-precision document data extraction pipeline for complex industrial equipment specifications in the energy sector.",
    technologies: [
      "Java 1.8",
      "Spring Boot",
      "JPA",
      "REST APIs",
      "Angular 12",
      "Node.js",
      "PostgreSQL",
      "Apache Kafka",
      "Apache Tomcat",
      "Gradle",
      "Python"
    ],
    highlights: [
      "Engineered automated spec extraction pipeline processing complex technical manuals",
      "Integrated Apache Kafka event streaming for asynchronous document parsing queues",
      "Collaborated with US-based engineering teams under fast-paced Agile delivery",
      "Architected clean REST APIs and database schema in PostgreSQL"
    ],
    outcomes: [
      "Substantial acceleration in spec review times for Baker Hughes engineers",
      "Delivered on time within tight 3-month contract window",
      "Successful integration with client downstream engineering systems"
    ],
    deepDive: {
      businessContext: "Baker Hughes engineers evaluate hundreds of multi-page technical specification documents to quote heavy industrial equipment. Extracting parametric data manually was slow and prone to oversight.",
      engineeringChallenge: "Parsing complex PDF tables, engineering diagrams, and variable-format requirements into standardized relational structures using Kafka messaging queues to handle batch processing bursts.",
      roleResponsibilities: [
        "Technical architecture design and customer requirement analysis.",
        "Integration of Apache Kafka event streaming with Spring Boot consumer services.",
        "Sprint leadership, daily Agile tracking, and hands-on API development."
      ],
      architectureOverview: "Document uploads handled by Angular 12 UI, published into Apache Kafka topic clusters, consumed by asynchronous Spring Boot / Python parsing services, and saved to PostgreSQL.",
      diagramType: "generic",
      implementationHighlights: [
        "Configured Apache Kafka topics with partition balancing for bulk document loads.",
        "Implemented fault-tolerant retry policies with dead-letter queue handling.",
        "Designed rich Angular dashboard for side-by-side verification."
      ],
      documentedOutcomes: [
        "Met 100% of functional requirements specified in the client SoW.",
        "Praised for architectural clarity and high-velocity execution."
      ],
      technicalTradeoffs: [
        "Leveraged Apache Kafka message broker to completely decouple document upload response from long-running OCR extraction jobs."
      ]
    }
  },
  // Additional projects from resume appendix
  {
    id: "manchester-united",
    title: "Manchester United Sports Portal",
    client: "Client: Australia",
    organization: "HCL Technologies",
    role: "Technical Lead",
    duration: "May 2021 – July 2021",
    featured: false,
    category: "Cloud Solutions",
    summary: "Serverless web application architecture leveraging AWS Lambda, API Gateway, CloudFront, and Angular 12 for high-traffic sports fan interaction.",
    technologies: ["Java 1.8", "AWS Lambda", "API Gateway", "CloudFront", "Angular 12", "PostgreSQL", "Python"],
    highlights: ["Team formation & project estimation", "Serverless AWS Lambda architecture"],
    outcomes: ["On-schedule delivery for Australian client"],
    deepDive: {
      businessContext: "Digital fan engagement platform requiring elastic scaling during live match windows.",
      engineeringChallenge: "Ensuring zero server provisioning with instant autoscaling under burst traffic.",
      roleResponsibilities: ["Requirement gathering, architecture design, team formation, and project estimation."],
      architectureOverview: "Angular 12 static assets hosted via CloudFront/S3, communicating with AWS Lambda microservices via API Gateway.",
      diagramType: "generic",
      implementationHighlights: ["Serverless execution model eliminating idle server infrastructure."],
      documentedOutcomes: ["Delivered complete estimation and architecture on target."],
      technicalTradeoffs: ["Selected serverless Lambda to accommodate unpredictable spike loads."]
    }
  },
  {
    id: "brightstar",
    title: "Brightstar Supply Chain Portal",
    client: "Brightstar",
    organization: "HCL Technologies",
    role: "Technical Lead",
    duration: "March 2021 – Sept 2021",
    featured: false,
    category: "Full Stack Web",
    summary: "Cloud-native supply chain and device inventory management application utilizing AWS Lambda, Angular 11, and PostgreSQL.",
    technologies: ["Java 1.8", "AWS Lambda", "Angular 11", "PostgreSQL", "Python", "Bootstrap"],
    highlights: ["Mentored developers and spearheaded core API modules", "Serverless cloud integration"],
    outcomes: ["High team velocity and reliable delivery"],
    deepDive: {
      businessContext: "Supply chain visibility portal for wireless device distribution.",
      engineeringChallenge: "Tracking serialized inventory transitions across distributed warehouse networks.",
      roleResponsibilities: ["Core development, team mentoring, and AWS Lambda serverless function delivery."],
      architectureOverview: "AWS Lambda backend microservices connected to PostgreSQL database.",
      implementationHighlights: ["Clean REST endpoints for inventory status queries."],
      documentedOutcomes: ["Successful rollout to support client operational teams."],
      technicalTradeoffs: ["Fine-grained Lambda handlers for distinct business actions."]
    }
  },
  {
    id: "intellect-info",
    title: "Intellect Info Application",
    client: "De Penning & De Penning, Chennai, India",
    organization: "Saksoft",
    role: "Developer / Module Lead",
    duration: "March 2018 – February 2021",
    featured: false,
    category: "Full Stack Web",
    summary: "Comprehensive intellectual property, patent, and trademark tracking ERP modernizing enterprise UI and database workflows.",
    technologies: ["Core Java 1.7", "Spring", "Struts 2.0", "Hibernate", "RESTful Webservices", "Oracle", "JBOSS", "jQuery", "Bootstrap"],
    highlights: ["Orchestrated end-to-end UI modernization project", "Surpassed client expectations for performance and reliability"],
    outcomes: ["High client satisfaction and seamless system migration"],
    deepDive: {
      businessContext: "Premier Indian IP law firm requiring modern tracking for complex multi-year patent lifecycles.",
      engineeringChallenge: "Refactoring legacy Struts components into modern Spring REST services while preserving complex legal business logic.",
      roleResponsibilities: ["Module leadership, Hibernate ORM mapping, Oracle database optimization, and cross-functional collaboration."],
      architectureOverview: "Multi-tier Java EE architecture on JBOSS with Oracle RDBMS.",
      implementationHighlights: ["Optimized complex relational queries in Oracle using Toad profiling."],
      documentedOutcomes: ["Surpassed client SLA expectations for screen rendering times."],
      technicalTradeoffs: ["Gradual migration from Struts to Spring REST controllers."]
    }
  },
  {
    id: "bgw-verizon",
    title: "Broadband Gateway (BGW)",
    client: "Powered by Verizon",
    organization: "Web Synergies",
    role: "Senior Software Engineer / Module Lead",
    duration: "June 2016 – December 2017",
    featured: false,
    category: "Full Stack Web",
    summary: "High-scale telecom wired domain UI modernization platform providing customer provisioning and network diagnostics for Verizon services.",
    technologies: ["Core Java", "Spring REST Services", "JSP", "JavaScript", "jQuery Datatable", "Oracle", "JUnit", "Jenkins"],
    highlights: ["Mentored team on Java and RDBMS best practices", "Direct interaction with US clients for fixing critical production issues"],
    outcomes: ["Substantially reduced support turnaround times", "Stable production operations across Verizon wired networks"],
    deepDive: {
      businessContext: "Broadband network service provisioning interface used by telecom engineers and field technicians.",
      engineeringChallenge: "Handling massive subscriber data sets with instantaneous client-side filtering and strict SLA uptime.",
      roleResponsibilities: ["Delivered end-to-end UI modernization; resolved production issues directly with US clients."],
      architectureOverview: "Spring RESTful backend with Oracle database and responsive jQuery Datatable frontend.",
      implementationHighlights: ["Integrated automated CI/CD unit testing via Jenkins and JUnit."],
      documentedOutcomes: ["Zero unresolved critical production tickets during operational shifts."],
      technicalTradeoffs: ["Implemented server-side pagination for million-record subscriber datasets."]
    }
  },
  {
    id: "feedertech-shipping",
    title: "Feedertech Shipping Domain",
    client: "Simatech Shipping LLC, Dubai, U.A.E",
    organization: "Paragon Dynamics",
    role: "Software Engineer",
    duration: "July 2015 – May 2016",
    featured: false,
    category: "Full Stack Web",
    summary: "Container vessel logistics and freight scheduling platform coordinating container vessel movements across Middle East and Asian maritime routes.",
    technologies: ["Java 1.7", "Spring", "AngularJS", "jQuery", "Bootstrap", "Oracle", "PostgreSQL", "Tomcat"],
    highlights: ["Developed cross-functional shipping modules from scratch", "Seamless multi-currency and port tracking"],
    outcomes: ["Successful deployment for Dubai maritime logistics provider"],
    deepDive: {
      businessContext: "Maritime shipping container vessel operations and booking scheduling.",
      engineeringChallenge: "Complex voyage calculation and container space allocation rules.",
      roleResponsibilities: ["Full-stack development, database schema modeling, and client requirement translation."],
      architectureOverview: "Java Spring application on Apache Tomcat with Oracle/PostgreSQL backends.",
      implementationHighlights: ["Built interactive cargo tracking tables and voyage manifest views."],
      documentedOutcomes: ["Enabled faster voyage turnaround time for operations staff."],
      technicalTradeoffs: ["Dual database architecture supporting regional branch mirrors."]
    }
  },
  {
    id: "hiserp-hospital",
    title: "HIS ERP - Hospital Domain",
    client: "Hospital Client: Bihar, India",
    organization: "Paragon Dynamics",
    role: "Software Engineer",
    duration: "July 2015 – December 2015",
    featured: false,
    category: "Full Stack Web",
    summary: "Integrated hospital information management system encompassing patient admission, diagnostics, ward management, and clinical billing.",
    technologies: ["Java 1.7", "Spring", "JSP", "AngularJS", "Bootstrap", "PostgreSQL", "Tomcat"],
    highlights: ["Patient lifecycle record tracking from admission to discharge", "Rapid implementation under strict hospital timelines"],
    outcomes: ["Smooth deployment in regional hospital setting"],
    deepDive: {
      businessContext: "Hospital administration system replacing paper ledgers with digital workflows.",
      engineeringChallenge: "Designing an intuitive, fail-safe patient admission and billing interface for non-technical hospital staff.",
      roleResponsibilities: ["Developed end-to-end billing and inventory modules."],
      architectureOverview: "Spring framework on Tomcat with PostgreSQL.",
      implementationHighlights: ["Integrated transactional billing safeguards."],
      documentedOutcomes: ["Eliminated billing discrepancy rates across clinical wards."],
      technicalTradeoffs: ["Lightweight JSP and AngularJS frontend for low-bandwidth LANs."]
    }
  },
  {
    id: "accounts-inventory",
    title: "Accounts & Inventory Application",
    client: "NFA International, Chennai, India",
    organization: "Paragon Dynamics",
    role: "Software Engineer",
    duration: "September 2014 – August 2015",
    featured: false,
    category: "Full Stack Web",
    summary: "Enterprise double-entry ledger, stock management, and Jasper automated financial reporting application.",
    technologies: ["Java 1.7", "Struts 2", "JSP", "JavaScript", "Bootstrap", "PostgreSQL", "Jasper Reports 6.0"],
    highlights: ["Engineered automated financial statement and invoice generation using Jasper Studio", "Multi-warehouse inventory synchronization"],
    outcomes: ["Automated monthly accounting reconciliations"],
    deepDive: {
      businessContext: "Manufacturing and trading firm needing synchronized ledger and warehouse inventory.",
      engineeringChallenge: "Real-time stock valuation updates triggered by sales invoices and purchase vouchers.",
      roleResponsibilities: ["Developed Struts 2 actions, database queries, and Jasper Report templates."],
      architectureOverview: "Struts 2 MVC pattern with PostgreSQL database and Jasper Reports engine.",
      implementationHighlights: ["Configured pixel-perfect PDF export templates for statutory invoices."],
      documentedOutcomes: ["Cut invoice reconciliation time by more than 50%."],
      technicalTradeoffs: ["Utilized server-side Jasper compilation for deterministic audit printing."]
    }
  }
];

export const CAREER_JOURNEY: CareerExperience[] = [
  {
    id: "tech-mahindra",
    company: "Tech Mahindra",
    role: "Tech Lead",
    period: "June 2024 – Present",
    location: "Chennai, India",
    client: "Nissan North America, USA",
    isCurrent: true,
    responsibilities: [
      "Collaborate with international stakeholders and project teams to ensure timely delivery against technical roadmaps and business goals.",
      "Facilitate daily stand-up meetings to track team progress in Agile methodology, prepare sprint estimation stories, and ensure customer satisfaction.",
      "Led major version upgrade from Java 11 to 17 to eliminate Veracode security vulnerable third-party components and secure production systems.",
      "Identified and refactored high cognitive complexity code in SonarQube to dramatically improve readability and long-term maintainability.",
      "Enforced container security compliance frameworks including AWS Security Hub (Control [ECS.5]) and Prowler, restricting Amazon ECS containers to read-only root filesystems.",
      "Architected and deployed critical Node.js v20 backend application communicating with IBM Db2 and PostgreSQL running successfully in production.",
      "Participated in advanced AI and cloud training: AWS Q Developer, Anthropic Claude, and AWS Kiro organized by Tech Mahindra."
    ],
    technologies: ["Java 17", "Node.js 20", "Angular 14", "PostgreSQL", "IBM Db2", "AWS ECS", "AWS Fargate", "AWS S3", "AWS CloudWatch", "SonarQube", "Mainframe"],
    achievements: [
      "Led team of 5 engineers to deliver Monroney modernization application from legacy mainframe system, resulting in a documented 10% cost savings.",
      "Awarded top 2nd performance rating during 2024-2025 Annual and 2025-2026 Midterm review periods based on project deliverables, client satisfaction, and team collaboration.",
      "Received Tech Mahindra 'Pat on the Back' award in September 2025 and January 2026.",
      "Earned direct work appreciation from Nissan North America customer leadership during daily Scrum ceremonies."
    ]
  },
  {
    id: "hcl-tech",
    company: "HCL Technologies",
    role: "Technical Lead",
    period: "February 2021 – November 2023",
    location: "Chennai, India",
    responsibilities: [
      "Spearheaded complete development of the iDoRAN product, integrating customizable workflows and AI-driven solutions to meet market demands.",
      "Collaborated with cross-functional stakeholders and project teams to drive timely delivery against technical roadmaps and company-wide support.",
      "Delivered multiple projects from scratch based on client SoW: VDX Application for JGC Corporation Japan, and Customer Spec Extraction for Baker Hughes USA.",
      "Conducted daily stand-up meetings in Agile methodology, sprint tracking, and backlog grooming.",
      "Interacted directly with QA testing teams to ensure seamless release of document automation extraction services."
    ],
    technologies: ["Java 1.8", "Spring Boot", "JPA", "REST APIs", "Angular 11/12", "Node.js", "PostgreSQL", "Docker", "AWS Cloud", "Apache Kafka", "Gradle", "Python"],
    achievements: [
      "Championed successful completion of iDoRAN Product, earning the esteemed ERS Champion Award (JAS 2021).",
      "Successfully showcased and launched iDoRAN in AWS Marketplace, Microsoft Azure Marketplace, and HCL Tech portal in 2023.",
      "Received perfect Customer PCSAT Score of 7/7 for the VDX Application from Japanese client JGC Corporation.",
      "Managed a team of 5 to deliver iDoRAN resulting in a 10% cost savings and awarded top 2nd performance rating two consecutive periods."
    ]
  },
  {
    id: "saksoft",
    company: "Saksoft",
    role: "Project Leader",
    period: "March 2018 – February 2021",
    location: "Chennai, India",
    client: "De Penning & De Penning",
    responsibilities: [
      "Orchestrated end-to-end UI Modernization project for Intellect Info Application, surpassing client expectations for software function, performance, and features.",
      "Collaborated with cross-functional teams and internal stakeholders to steer product evolution.",
      "Supervised module development, database modeling in Oracle, and integration with Hibernate ORM."
    ],
    technologies: ["Core Java 1.7", "Spring", "Struts 2.0", "Hibernate", "RESTful Webservices", "Oracle", "JBOSS", "Toad", "jQuery", "Bootstrap"],
    achievements: [
      "Successfully delivered complex multi-module legal ERP ahead of schedule.",
      "Elevated client satisfaction scores through high system responsiveness and zero critical regressions."
    ]
  },
  {
    id: "web-synergies",
    company: "Web Synergies",
    role: "Senior Software Engineer",
    period: "June 2016 – December 2017",
    location: "India",
    client: "Powered by Verizon",
    responsibilities: [
      "Delivered end-to-end UI Modernization projects for the telecom wired domain, ensuring seamless integration and improved network diagnostics performance.",
      "Supported and mentored team members, facilitating application-related UI, Java, and RDBMS tasks.",
      "Engaged in collaborative efforts with diverse cross-functional teams, stakeholders, and interacted directly with US clients for fixing high-priority production issues.",
      "Participated actively in Agile sprints and daily standup meetings."
    ],
    technologies: ["Core Java", "Spring REST Services", "JSP", "JavaScript", "jQuery Datatable", "Oracle", "JUnit", "Jenkins"],
    achievements: [
      "Consistently resolved complex production bugs within stringent client SLAs.",
      "Mentored junior developers into self-sufficient contributors on telecom workflows."
    ]
  },
  {
    id: "paragon-dynamics",
    company: "Paragon Dynamics",
    role: "Software Engineer",
    period: "June 2013 – May 2016",
    location: "Chennai, India",
    responsibilities: [
      "Developed and delivered end-to-end applications for finance, inventory, shipping, and healthcare cross-functional domains.",
      "Built solutions from scratch based on stakeholder requirements: Accounts Application for NFA Chennai, NVOCC shipping platform for Mumbai, and HIS ERP Application for a Bihar hospital.",
      "Created transactional business logic, relational schemas, and Jasper report integrations."
    ],
    technologies: ["Java 1.7", "Spring", "Struts 2", "JSP", "JavaScript", "Bootstrap", "PostgreSQL", "Oracle", "Tomcat", "Jasper Studio"],
    achievements: [
      "Shipped 3 distinct commercial products across healthcare, shipping, and financial accounting domains.",
      "Established automated reporting standards saving hundreds of manual reconciliation hours."
    ]
  },
  {
    id: "animation-focuz",
    company: "Animation Focuz",
    role: "Web Developer",
    period: "November 2011 – October 2012",
    location: "Chennai, India",
    responsibilities: [
      "Designed web pages and email templates using modern user interface technologies, enhancing aesthetics and functionality.",
      "Collaborated with creative designers to convert wireframes into functional web layouts with cross-browser compatibility."
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Email Templating", "UI Design"],
    achievements: [
      "Delivered responsive web assets improving client engagement rates."
    ]
  }
];

export const AWARDS_DATA: AwardItem[] = [
  {
    id: "ers-champion",
    title: "ERS Champion Award",
    issuer: "HCL Technologies",
    date: "JAS 2021 Quarter",
    description: "Awarded for the successful and timely completion of the iDoRAN Product – Invoice Extraction Service in a shorter span of time in close collaboration with the AI team.",
    iconType: "trophy",
    highlightMetric: "Flagship AI Product"
  },
  {
    id: "pcsat-score",
    title: "Perfect 7/7 Customer PCSAT Score",
    issuer: "JGC Corporation, Japan",
    date: "April – November 2023",
    description: "Received an unblemished 7/7 customer satisfaction rating for the VDX Application, recognizing exceptional architecture quality, technical leadership, and collaborative delivery.",
    iconType: "star",
    highlightMetric: "7/7 Score"
  },
  {
    id: "pat-on-back-techm",
    title: "Pat on the Back Award",
    issuer: "Tech Mahindra",
    date: "September 2025 & January 2026",
    description: "Awarded twice on the Monroney Modernization project for exemplary leadership, driving mainframe modernization and resolving complex security compliance requirements.",
    iconType: "award",
    highlightMetric: "2x Recipient"
  },
  {
    id: "nissan-appreciation",
    title: "Customer Work Appreciation",
    issuer: "Nissan North America Leadership",
    date: "Daily Scrum Recognition",
    description: "Formally recognized by Nissan North America customer stakeholders during daily Scrum ceremonies for technical problem-solving and proactive team delivery.",
    iconType: "badge",
    highlightMetric: "Client Recognition"
  },
  {
    id: "marketplace-launch",
    title: "Global Cloud Marketplace Showcasing",
    issuer: "AWS & Microsoft Azure Marketplaces",
    date: "2023",
    description: "iDoRAN automation product successfully cleared rigorous vendor reviews and was publicly displayed in the AWS Marketplace, Azure Marketplace, and HCL Tech portal.",
    iconType: "badge",
    highlightMetric: "AWS & Azure"
  },
  {
    id: "performance-rating",
    title: "Top 2nd Performance Rating (Consecutive Periods)",
    issuer: "Tech Mahindra & HCL Technologies",
    date: "2021-2023 & 2024-2026",
    description: "Awarded top 2nd performance rating across consecutive annual and midterm assessment cycles based on outstanding project deliverables, client satisfaction, and team mentorship.",
    iconType: "trophy",
    highlightMetric: "Top Tier Performer"
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "B.Tech in Information Technology",
    institution: "Anna University (Sakthi Mariamman Engineering College)",
    location: "Chennai, India",
    period: "2007 – 2011",
    grade: "73.4% Aggregate",
    type: "degree"
  }
];

export const PROFESSIONAL_COURSES: CourseItem[] = [
  {
    title: "AWS Cloud Practitioner",
    platform: "Udemy Course Completion",
    date: "July 2023",
    focus: "AWS core services, cloud security, compute, storage, and architectural principles",
    type: "course"
  },
  {
    title: "Google Cloud Digital Leader",
    platform: "Udemy Course Completion",
    date: "Completed",
    focus: "Google Cloud infrastructure, data modernization, and enterprise cloud solutions",
    type: "course"
  },
  {
    title: "Spring Framework Master Class - Java Spring the Modern Way",
    platform: "Udemy Course Completion",
    date: "December 2023",
    focus: "Modern Spring framework patterns, dependency injection, and AOP",
    type: "course"
  },
  {
    title: "Master Microservices with Spring Boot, Docker, Kubernetes",
    platform: "Udemy Course Completion",
    date: "January 2024",
    focus: "Cloud-native microservices architecture, container orchestration, and Docker networking",
    type: "course"
  },
  {
    title: "Design Thinking",
    platform: "Udemy Course Completion",
    date: "January 2023",
    focus: "User-centric problem solving, empathy mapping, and rapid iterative prototyping",
    type: "course"
  },
  {
    title: "AI White Belt (Google Cloud / Generative AI)",
    platform: "Tech Mahindra Internal Certification",
    date: "Internal Certification",
    focus: "Enterprise Generative AI fundamentals, LLM capabilities, and Google Cloud AI integrations",
    type: "internal_cert"
  },
  {
    title: "Manufacturing Process Training",
    platform: "Tech Mahindra Internal Certification",
    date: "Internal Certification",
    focus: "Automotive and industrial manufacturing supply chains and assembly tracking protocols",
    type: "internal_cert"
  }
];

export const CAREER_ASSISTANT_QA: AssistantQA[] = [
  {
    question: "What is Raghavan's experience with enterprise application modernization?",
    category: "Modernization",
    tags: ["Modernization", "Mainframe", "Java 17", "ECS"],
    answer: "Raghavan has extensive experience transforming monolithic legacy and mainframe systems into cloud-native platforms. At Tech Mahindra, he is currently leading the modernization of Nissan North America's Monroney Web Application, decoupling it from legacy mainframe dependencies to run on AWS ECS Fargate and Node.js v20/Java 17 with PostgreSQL and DB2. This initiative achieved a verified 10% cost savings. He has also executed Java 11-to-17 version upgrades and refactored high cognitive complexity code in SonarQube."
  },
  {
    question: "How does Raghavan lead engineering teams and manage Agile delivery?",
    category: "Leadership",
    tags: ["Leadership", "Agile", "Scrum", "Mentoring"],
    answer: "Raghavan has proven technical leadership experience directing teams of 5+ engineers across major programs including Monroney Modernization at Tech Mahindra and iDoRAN at HCL Technologies. He facilitates Scrum ceremonies (daily stand-ups, release planning, sprint planning, retrospectives, and backlog grooming in Jira), handles story estimation, mentors engineers on Java/UI/cloud best practices, and bridges communication between offshore development squads and onshore client stakeholders."
  },
  {
    question: "What AWS cloud and architecture experience does Raghavan possess?",
    category: "Cloud",
    tags: ["AWS", "ECS Fargate", "Lambda", "S3", "Security"],
    answer: "Raghavan designs resilient cloud architectures utilizing AWS ECS Fargate, Lambda, API Gateway, S3, CloudFront, CloudWatch, and IAM. He holds the AWS Cloud Practitioner credential (Udemy) and Google Cloud Digital Leader training. Notably, on the Monroney project, he configured container hardening by enforcing read-only root filesystems on ECS to pass AWS Security Hub Control [ECS.5] and Prowler compliance benchmarks."
  },
  {
    question: "Can you detail the AI-powered document automation product (iDoRAN)?",
    category: "AI & Innovation",
    tags: ["iDoRAN", "AI", "ERS Champion", "AWS Marketplace"],
    answer: "At HCL Technologies, Raghavan served as Technical Lead for iDoRAN, an AI-powered intelligent document extraction and workflow automation product. He collaborated with the AI/Python team to build an invoice and document extraction service, earning the corporate ERS Champion Award in JAS 2021. In 2023, the product achieved public marketplace showcase and listing across AWS Marketplace, Microsoft Azure Marketplace, and the HCL Tech portal."
  },
  {
    question: "What security remediation and code quality standards has Raghavan enforced?",
    category: "Security & Quality",
    tags: ["Veracode", "SonarQube", "Prowler", "ECS.5"],
    answer: "Raghavan prioritizes enterprise-grade code hygiene and security. He led a major Java 11 to 17 version upgrade specifically to remediate critical Veracode security vulnerabilities in third-party libraries. He continuously analyzes and solves cognitive complexity bottlenecks using SonarQube quality gates. For container workloads, he enforces rootless and read-only container filesystems to satisfy AWS Security Hub [ECS.5] and Prowler audit requirements."
  },
  {
    question: "What are his documented career metrics and customer satisfaction scores?",
    category: "Metrics",
    tags: ["PCSAT 7/7", "10% Savings", "5 Engineers", "12+ Years"],
    answer: "Raghavan's career metrics from verified project documentation include: 12+ years of enterprise IT experience; leading 5 engineers on both Monroney and iDoRAN initiatives; delivering a 10% cost reduction on the Monroney modernization; achieving a perfect 7/7 customer PCSAT score for the VDX Application from JGC Corp Japan; and receiving top 2nd performance ratings across two consecutive review cycles at both Tech Mahindra and HCL Technologies."
  }
];
