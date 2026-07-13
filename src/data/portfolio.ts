import type { LucideIcon } from 'lucide-react';
import {
  Brain,
  Bot,
  Cpu,
  Database,
  LineChart,
  Boxes,
  Workflow,
  ScanSearch,
  FileJson,
  FileText,
  BarChart3,
  Lightbulb,
  TrendingUp,
  ShieldCheck,
  Stethoscope,
  Network,
  Server,
  Container,
  Cloud,
  Eye,
  Code2,
  Sparkles,
  GraduationCap,
  Award,
  BookOpenCheck,
  Rocket,
  GitBranch,
  Layers,
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/*  Profile                                                                    */
/* -------------------------------------------------------------------------- */

export const profile = {
  name: 'Shivam Sonawane',
  initials: 'SS',
  /** Rotating hero titles */
  titles: [
    'AI/ML Engineer',
    'Generative AI Engineer',
    'LLM Engineer',
    'Data Scientist',
    'Applied AI Engineer',
  ],
  headline: 'I build production-grade AI systems.',
  tagline:
    'AI/ML Engineer & Data Scientist shipping LLM applications, multi-agent systems, and ML pipelines to production.',
  summary:
    'AI/ML Engineer and Data Scientist with hands-on experience building and deploying machine learning models, LangGraph multi-agent systems, and data-driven pipelines in production — across finance, QA automation, and industrial engineering.',
  location: 'Nashik, India',
  email: 'sasonawane2003@gmail.com',
  phone: '+91 93591 45675',
  phoneHref: '+919359145675',
  /** Lives in /public, resolved against the Vite base path at runtime */
  resumeFile: 'Shivam_Sonawane_Resume.pdf',
  availability: {
    open: true,
    label: 'Open to AI/ML & Data Science roles',
  },
  currentRole: {
    title: 'GenAI Developer',
    company: 'Combat Solutions',
  },
  socials: {
    github: 'https://github.com/ShivamSonawane2003',
    linkedin: 'https://in.linkedin.com/in/shivam-sonawane-582b48346',
    kaggle: 'https://www.kaggle.com/shivamsonawane96',
    email: 'mailto:sasonawane2003@gmail.com',
  },
} as const;

/* -------------------------------------------------------------------------- */
/*  Hero statistics (honest, resume-backed impact numbers)                     */
/* -------------------------------------------------------------------------- */

export interface Stat {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  icon: LucideIcon;
}

export const heroStats: Stat[] = [
  { value: 2, suffix: '+', label: 'Years Experience', icon: Rocket },
  { value: 15, suffix: '+', label: 'AI/ML Projects', icon: Boxes },
  { value: 80, suffix: '%', label: 'Faster Pipelines', icon: TrendingUp },
  { value: 92, suffix: '%', label: 'Parser Accuracy', icon: ScanSearch },
];

/* -------------------------------------------------------------------------- */
/*  About                                                                       */
/* -------------------------------------------------------------------------- */

export const about = {
  heading: 'Turning research into systems that ship',
  paragraphs: [
    'I design and deploy end-to-end AI systems — from data pipelines and model training to FastAPI inference services running in Docker. As a GenAI Developer I build production ReAct agents with dynamic tool routing, memory, and API integrations, backed by CI/CD and zero-downtime deployments.',
    'My work spans finance (LLM-powered SEC filing extraction, stock forecasting, sentiment analysis), QA automation (a self-healing test infrastructure combining ML and LLMs), and industrial engineering (YOLO-based P&ID symbol detection). I care about metrics: 80% faster pipelines, 92% parser accuracy, 12% lower forecasting error.',
    'Strong foundations in statistical modeling, feature engineering, NLP, deep learning, prompt engineering, and MLOps — with a research mindset backed by a published paper on CNN-based object detection.',
  ],
  highlights: [
    { icon: Brain, label: 'AI Engineering' },
    { icon: Cpu, label: 'Machine Learning' },
    { icon: LineChart, label: 'Data Science' },
    { icon: Sparkles, label: 'LLM Engineering' },
    { icon: Bot, label: 'Multi-Agent Systems' },
    { icon: Eye, label: 'Computer Vision' },
    { icon: Server, label: 'Backend Engineering' },
    { icon: Container, label: 'MLOps & Deployment' },
  ] as { icon: LucideIcon; label: string }[],
};

/* -------------------------------------------------------------------------- */
/*  Skills — premium categorised grid (no vanity percentages)                  */
/* -------------------------------------------------------------------------- */

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    icon: Code2,
    skills: ['Python', 'SQL'],
  },
  {
    title: 'Machine Learning',
    icon: Cpu,
    skills: [
      'Scikit-learn',
      'XGBoost',
      'LightGBM',
      'Random Forest',
      'Gradient Boosting',
      'Cross-Validation',
      'Hyperparameter Tuning',
    ],
  },
  {
    title: 'Deep Learning',
    icon: Brain,
    skills: ['TensorFlow', 'PyTorch', 'CNNs', 'Transformers', 'LSTM', 'Transfer Learning'],
  },
  {
    title: 'Generative AI & NLP',
    icon: Sparkles,
    skills: ['LLMs', 'RAG', 'Fine-tuning', 'Prompt Engineering', 'Embeddings', 'Sentiment Analysis', 'Ollama'],
  },
  {
    title: 'AI Agents & Frameworks',
    icon: Bot,
    skills: ['LangChain', 'LangGraph', 'MCP', 'ReAct Agents', 'OpenAI API', 'Anthropic API', 'Hugging Face'],
  },
  {
    title: 'Vector Databases',
    icon: Database,
    skills: ['FAISS', 'ChromaDB', 'Pinecone'],
  },
  {
    title: 'Backend & APIs',
    icon: Server,
    skills: ['FastAPI', 'REST APIs', 'Celery', 'Redis', 'Nginx', 'Streamlit'],
  },
  {
    title: 'Data Science',
    icon: LineChart,
    skills: ['Pandas', 'NumPy', 'SciPy', 'EDA', 'Feature Engineering', 'Statistical Analysis', 'A/B Testing'],
  },
  {
    title: 'MLOps & DevOps',
    icon: Container,
    skills: ['Docker', 'Docker Compose', 'GitHub Actions', 'CI/CD', 'MLflow', 'Weights & Biases'],
  },
  {
    title: 'Cloud & Databases',
    icon: Cloud,
    skills: ['AWS (S3, EC2)', 'Azure ML Studio', 'PostgreSQL'],
  },
  {
    title: 'Computer Vision',
    icon: Eye,
    skills: ['YOLO', 'OpenCV', 'Object Detection', 'Image Preprocessing'],
  },
  {
    title: 'Visualization',
    icon: BarChart3,
    skills: ['Matplotlib', 'Seaborn', 'Plotly', 'Tableau'],
  },
];

/* -------------------------------------------------------------------------- */
/*  Projects — premium case studies                                            */
/* -------------------------------------------------------------------------- */

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  icon: LucideIcon;
  /** tailwind gradient e.g. 'from-cyan-500 to-blue-600' */
  accent: string;
  year: string;
  featured: boolean;
  badges: string[];
  overview: string;
  problem: string;
  solution: string;
  architecture: string[];
  tech: string[];
  challenges: string[];
  achievements: string[];
  github?: string;
  live?: string;
}

const GH = 'https://github.com/ShivamSonawane2003';

export const projects: Project[] = [
  {
    slug: 'agentforge',
    title: 'AgentForge',
    subtitle: 'Multi-Agent AI Platform with MCP Integration',
    category: 'Agentic AI',
    icon: Bot,
    accent: 'from-cyan-500 to-blue-600',
    year: '2026',
    featured: true,
    badges: ['Multi-Agent', 'MCP', 'Production'],
    overview:
      'A production-grade platform where teams create LangGraph ReAct agents, connect them to tools via MCP, and automate business workflows behind strict multi-tenant data isolation.',
    problem:
      'Enterprises want custom AI agents and automation, but lack a secure, extensible platform to build, orchestrate, and deploy them across teams and clients.',
    solution:
      'Built a multi-tenant platform combining LangGraph ReAct agents, MCP tool integration, and RAG, with a visual node-based workflow builder (n8n-style) featuring WhatsApp and Slack nodes for non-technical users.',
    architecture: [
      'FastAPI microservices orchestrated with LangGraph',
      'MCP tool servers for dynamic, pluggable capabilities',
      'PostgreSQL with per-tenant data isolation',
      'Vector database for retrieval-augmented context',
      'Dockerised services, Nginx reverse proxy, GitHub Actions CI/CD',
    ],
    tech: ['Python', 'FastAPI', 'LangGraph', 'LangChain', 'MCP', 'PostgreSQL', 'Vector DB', 'Docker Compose', 'Nginx', 'GitHub Actions'],
    challenges: [
      'Guaranteeing secure multi-tenant isolation across shared services',
      'Dynamic tool routing for long-running, stateful agent runs',
      'Making agent orchestration reliable and observable in production',
    ],
    achievements: [
      'Automated an end-to-end RFQ workflow (vendor parsing, duty computation, email generation), cutting manual quoting time by ~70%',
      'Supports agent creation, workflow automation, and secure data isolation for multiple tenants',
    ],
    github: `${GH}/AgentForge`,
  },
  {
    slug: 'ai-healer',
    title: 'AI Healer',
    subtitle: 'Self-Healing UI Test Infrastructure Platform',
    category: 'ML + LLM Systems',
    icon: ShieldCheck,
    accent: 'from-emerald-500 to-teal-600',
    year: '2025',
    featured: true,
    badges: ['ML + LLM', 'Multi-Agent', 'MLOps'],
    overview:
      'A platform that auto-detects broken DOM selectors in E2E test suites (Playwright, Selenium, Cypress) and repairs them with a three-strategy ML + LLM engine.',
    problem:
      'Flaky end-to-end tests break constantly as the UI changes, and teams burn hours manually re-writing selectors and diagnosing failures.',
    solution:
      'A 3-strategy healing engine — rule-based heuristics, XGBoost/LightGBM candidate scoring, and LLM-powered semantic repair via local Mistral 7B with Gemini/OpenAI fallback — driven by a 3-agent pipeline: Investigator, Healer, Validator.',
    architecture: [
      'FastAPI service with dedicated Celery workers (ingestion, analysis, healing queues)',
      'Redis broker + PostgreSQL for state and structured JSON logging',
      'ChromaDB vector similarity over chunked HTML embeddings',
      'tree-sitter AST parsing for grounded, automated patch generation',
      'Deployed via Docker Compose',
    ],
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'ChromaDB', 'Celery', 'Redis', 'XGBoost', 'LightGBM', 'Mistral 7B', 'Qwen2.5-Coder', 'Docker Compose'],
    challenges: [
      'Reliable selector repair across three different test frameworks',
      'Grounding LLM patches with AST context and vector retrieval to avoid hallucinated fixes',
      'Scaling asynchronous healing across queues without blocking',
    ],
    achievements: [
      'Classifies failures across 7 types (selector, timeout, auth, backend, assertion, DB, syntax) with evidence-backed root-cause analysis',
      'Auto-generates code fixes instead of just flagging failures',
    ],
    github: `${GH}/AI_Healer`,
  },
  {
    slug: 'pid2dcs',
    title: 'PID2DCS',
    subtitle: 'AI-Powered P&ID Analysis → DCS/XML',
    category: 'Computer Vision',
    icon: ScanSearch,
    accent: 'from-violet-500 to-purple-600',
    year: '2026',
    featured: true,
    badges: ['Computer Vision', 'YOLO', 'Production'],
    overview:
      'An AI platform that reads engineering P&ID diagrams — OCR, symbol detection — and converts them into structured DCS/XML for downstream control systems.',
    problem:
      'Translating P&ID diagrams into control-system data is manual, slow, and error-prone, creating a bottleneck in industrial engineering workflows.',
    solution:
      'YOLO object detection with OpenCV preprocessing extracts P&ID symbols, and graph-based inference algorithms export structured XAML/SVG to engineering systems.',
    architecture: [
      'YOLO detection pipeline with OpenCV preprocessing',
      'Graph-based inference to reconstruct diagram connectivity',
      'FastAPI model-serving APIs for scalable inference',
      'CI/CD for repeatable model deployment',
    ],
    tech: ['Python', 'JavaScript', 'YOLO', 'OpenCV', 'Scikit-learn', 'FastAPI', 'CI/CD'],
    challenges: [
      'Robust detection on noisy, dense engineering diagrams',
      'Mapping raw detections into a connected component graph',
      'Preserving fidelity when exporting to XAML/SVG',
    ],
    achievements: [
      'Improved detection consistency over rule-based baselines',
      'Productionised scalable model-serving APIs for structured export',
    ],
    github: `${GH}/PID2DCS`,
  },
  {
    slug: 'docgen-agent',
    title: 'DocGen Agent',
    subtitle: 'Autonomous Document-Generation Agent',
    category: 'Agentic AI',
    icon: FileText,
    accent: 'from-sky-500 to-cyan-600',
    year: '2026',
    featured: true,
    badges: ['Agentic AI', 'LLM', 'FastAPI'],
    overview:
      'A FastAPI agent that turns a natural-language request into a polished Word document — planning its own tasks, generating content, self-checking, and rendering the result.',
    problem:
      'Producing structured business documents — proposals, reports, SOPs, technical specs — is repetitive, manual, and inconsistent.',
    solution:
      'A classification → content-generation → self-check → rendering pipeline that classifies 7+ document types and generates content with dual-LLM support (Groq / Gemini), retries, and a deterministic offline fallback.',
    architecture: [
      'FastAPI service exposing the agent as an API',
      'LLM planner + generator with automatic provider selection',
      'Self-check verifier that repairs incomplete sections',
      'python-docx renderer producing the final .docx',
    ],
    tech: ['Python', 'FastAPI', 'python-docx', 'Groq', 'Google Gemini'],
    challenges: [
      'Graceful degradation — never crash when the LLM is unreachable',
      'Verifying every section has valid heading and content',
      'Handling ambiguous requests by tracking assumptions',
    ],
    achievements: [
      'Falls back to a deterministic generator on LLM failure, so requests never fail',
      'Records assumptions directly in the JSON response and document',
    ],
    github: `${GH}/DocGen-Agent`,
  },
  {
    slug: 'resume-to-json',
    title: 'Resume → JSON Tool',
    subtitle: 'LLM Resume Parser with Schema Output',
    category: 'LLM / NLP',
    icon: FileJson,
    accent: 'from-amber-500 to-orange-600',
    year: '2025',
    featured: true,
    badges: ['LLM', 'NLP', 'FastAPI'],
    overview:
      'An AI service that converts PDF and DOCX resumes into structured JSON that conforms to a fixed schema — built for recruitment pipelines.',
    problem:
      'Manual resume data entry is slow and error-prone, and unstructured resumes are hard to search, rank, and integrate.',
    solution:
      'Dual-backend LLM extraction — Ollama (Gemma 3:4b) primary with a Hugging Face (gemma-3-1b-it) fallback — behind an async FastAPI service with file validation and health checks.',
    architecture: [
      'Async FastAPI backend with a 10 MB upload guard',
      'Ollama primary model layer with Hugging Face fallback',
      'Schema validation for machine-readable JSON output',
      'GPU/CUDA acceleration and a health-check endpoint',
    ],
    tech: ['Python', 'FastAPI', 'Ollama', 'Hugging Face', 'Gemma 3'],
    challenges: [
      'Enforcing consistent, schema-conformant output from LLMs',
      'Robust parsing across varied PDF/DOCX layouts',
      'Local-first inference with a reliable cloud fallback',
    ],
    achievements: [
      'Powered a production recruitment workflow with 92% field-level extraction accuracy (skills, education, experience)',
      'Standardised messy resumes into a searchable, machine-readable format',
    ],
    github: `${GH}/Resume_to_JOSN_Tool_Using_AI`,
  },
  {
    slug: 'ai-data-analyst',
    title: 'AI Data Analyst Dashboard',
    subtitle: 'LLM-Powered Analytics with Plotly',
    category: 'Data Science',
    icon: BarChart3,
    accent: 'from-pink-500 to-rose-600',
    year: '2025',
    featured: true,
    badges: ['Data Science', 'LLM', 'Plotly'],
    overview:
      'An interactive dashboard that loads a dataset and produces LLM-written insights alongside rich Plotly visualizations.',
    problem:
      'Non-analysts struggle to explore data and surface meaningful insights quickly, and traditional dashboards stop at charts.',
    solution:
      'A pipeline of data loading, automated analysis, and LLM insight generation feeds an interactive Plotly dashboard that pairs charts with plain-language narrative.',
    architecture: [
      'Modular Python backend: data_loader, analysis, llm_insights',
      'LLM insight layer that narrates statistical findings',
      'Plotly-driven interactive charts',
      'Lightweight HTML dashboard front end',
    ],
    tech: ['Python', 'Plotly', 'Pandas', 'LLM'],
    challenges: [
      'Turning raw tables into reliable natural-language insights',
      'Keeping charts interactive and responsive',
      'Selecting the right model for insight generation',
    ],
    achievements: [
      'Automated EDA and narrative reporting in a single dashboard',
      'Lowered the barrier to data exploration for non-technical users',
    ],
    github: `${GH}/AI_Data_Analyst_Plotly_Dashboard`,
  },
  {
    slug: 'ai-use-case-agent',
    title: 'AI Use-Case Generation Agent',
    subtitle: 'GenAI Opportunity Finder for Industries',
    category: 'Generative AI',
    icon: Lightbulb,
    accent: 'from-yellow-500 to-amber-600',
    year: '2025',
    featured: true,
    badges: ['GenAI', 'NLP', 'Streamlit'],
    overview:
      'A GenAI tool that analyzes an industry or company description and proposes tailored, practical AI and GenAI use cases.',
    problem:
      'Businesses struggle to identify where AI can actually deliver value inside their operations.',
    solution:
      'A transformer model (LaMini-Flan-T5) served through the Hugging Face Inference API generates contextual, business-focused use-case recommendations behind a Streamlit interface.',
    architecture: [
      'Streamlit web app for input and results',
      'Hugging Face Inference API with LaMini-Flan-T5-783M',
      'Companion Jupyter notebook for experimentation',
      'Example outputs mapped to public datasets',
    ],
    tech: ['Python', 'Streamlit', 'Hugging Face', 'LaMini-Flan-T5', 'Transformers'],
    challenges: [
      'Grounding suggestions in industry-specific context',
      'Keeping recommendations concise and actionable',
      'Balancing model size against inference cost',
    ],
    achievements: [
      'Generates industry-tailored AI use cases with linked datasets and resources',
      'Ships both a research notebook and a production-ready Streamlit app',
    ],
    github: `${GH}/AI-Use-Case-Generation-Agent`,
  },
  {
    slug: 'stock-recommendation',
    title: 'Stock Recommendation System',
    subtitle: 'Quant + NLP Buy/Sell Signal Engine',
    category: 'ML / Finance',
    icon: TrendingUp,
    accent: 'from-green-500 to-emerald-600',
    year: '2025',
    featured: true,
    badges: ['ML', 'Finance', 'Time-Series'],
    overview:
      'An engine that ranks buy/sell signals by fusing fundamental ratios, technical indicators, and NLP-based sentiment scoring.',
    problem:
      'Investment decisions often ignore how fundamentals, technicals, and market sentiment interact — leaving signal on the table.',
    solution:
      'Combines fundamentals with technical indicators (RSI, MACD, Bollinger Bands) and NLP sentiment to produce ranked buy/sell signals, paired with an LSTM + Gradient Boosting forecasting model using 30+ engineered features.',
    architecture: [
      'Data ingestion and 30+ feature engineering steps',
      'Technical indicator computation (RSI, MACD, Bollinger Bands)',
      'NLP sentiment scoring over market text',
      'LSTM + Gradient Boosting forecasting with ranking layer',
    ],
    tech: ['Python', 'Scikit-learn', 'LSTM', 'Gradient Boosting', 'FastAPI', 'Streamlit', 'NLP'],
    challenges: [
      'Fusing heterogeneous signals into one ranking',
      'Rigorous time-series validation to avoid leakage',
      'Balancing model complexity against interpretability',
    ],
    achievements: [
      'Forecasting model achieved 12% lower MAE than moving-average baselines on held-out test sets',
      'Generated ranked, explainable buy/sell recommendations',
    ],
    github: `${GH}/Stock-Recommendation-Dashboard`,
  },
];

/** Secondary projects — shown as a compact grid below the case studies */
export interface MiniProject {
  title: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
  github?: string;
  live?: string;
}

export const secondaryProjects: MiniProject[] = [
  {
    title: 'RAG Document Q&A System',
    description:
      'FastAPI Retrieval-Augmented Generation app answering questions over private documents with source-grounded, low-hallucination responses via FAISS semantic search.',
    icon: FileText,
    tags: ['RAG', 'FastAPI', 'FAISS', 'Transformers'],
  },
  {
    title: 'Diabetic Retinopathy Prediction',
    description:
      'Binary classification model detecting diabetic retinopathy from 6,000+ medical records, served through an interactive Streamlit app.',
    icon: Stethoscope,
    tags: ['Healthcare', 'ML', 'Streamlit'],
    github: `${GH}/Diabetic_retinopathy_prediction`,
    live: 'https://diabetic-retinopathy-prediction-in-patients.streamlit.app/',
  },
  {
    title: 'Fraud Detection System',
    description:
      'Anomaly-detection model using Isolation Forest with SMOTE for class imbalance, reaching 89% recall on 5,000+ transactions.',
    icon: ShieldCheck,
    tags: ['Anomaly Detection', 'Finance', 'SMOTE'],
    github: `${GH}/Fraud-Detection-System`,
    live: 'https://fraud-detection-system-shivam-sonawane.streamlit.app/',
  },
];

/* -------------------------------------------------------------------------- */
/*  Experience timeline                                                         */
/* -------------------------------------------------------------------------- */

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  points: string[];
  tech: string[];
}

export const experiences: Experience[] = [
  {
    role: 'GenAI Developer',
    company: 'Combat Solutions Pvt. Ltd.',
    location: 'Nashik, India',
    period: 'Feb 2026 – Present',
    current: true,
    points: [
      'Built production-grade ReAct AI agents with dynamic tool routing, memory management, and Gmail/API integrations — deployed across 3 client workflows, reducing manual task handling by an estimated 60%.',
      'Designed end-to-end CI/CD: Docker Compose orchestration, GitHub Actions pipelines, and an Nginx reverse proxy with SSL, achieving zero-downtime deployments.',
      'Developed a visual workflow-automation platform (n8n-style) with WhatsApp and Slack nodes, letting non-technical users build multi-step business automations.',
      'Productionised YOLO object-detection pipelines for P&ID symbol extraction with OpenCV preprocessing and FastAPI inference APIs; graph-based algorithms export structured XAML/SVG.',
    ],
    tech: ['LangGraph', 'ReAct Agents', 'FastAPI', 'Docker Compose', 'GitHub Actions', 'Nginx', 'YOLO'],
  },
  {
    role: 'AI/ML Developer',
    company: 'Infomanav Autotropic Cloud Technologies Pvt. Ltd.',
    location: 'Nashik, India',
    period: 'Mar 2025 – Feb 2026',
    points: [
      'Built an LLM-powered data-extraction pipeline parsing structured financial fields from SEC EDGAR filings (10-K, 10-Q), replacing manual review and cutting processing time by 80%.',
      'Developed a resume-parsing service using LLMs to extract candidate entities (skills, education, experience) with 92% field-level accuracy, integrated into the internal recruitment workflow.',
      'Engineered a stock recommendation engine fusing fundamental ratios, technical indicators (RSI, MACD, Bollinger Bands), and NLP sentiment scoring into ranked buy/sell signals.',
      'Built a time-series forecasting model (LSTM + Gradient Boosting, 30+ engineered features) achieving 12% lower MAE than moving-average baselines on held-out sets.',
      'Created an interactive Streamlit/FastAPI analytics dashboard across 5 KPIs, adopted by the analytics team for routine reporting.',
    ],
    tech: ['LLMs', 'LSTM', 'Gradient Boosting', 'FastAPI', 'Streamlit', 'NLP', 'Feature Engineering'],
  },
  {
    role: 'Data Science Intern',
    company: 'AiVariant',
    location: 'Pune, India',
    period: 'Aug 2024 – Mar 2025',
    points: [
      'Cleaned and validated 100,000+ data entries weekly; built automated preprocessing pipelines (missing-value imputation, outlier detection, normalization) that lifted dataset accuracy by 15% on internal benchmarks.',
      'Performed exploratory data analysis and feature engineering across multiple datasets, building interactive dashboards with Pandas, Matplotlib, Seaborn, and Tableau for stakeholder reporting.',
    ],
    tech: ['Python', 'Pandas', 'EDA', 'Matplotlib', 'Seaborn', 'Tableau'],
  },
];

export interface Education {
  degree: string;
  school: string;
  location: string;
  period: string;
  icon: LucideIcon;
}

export const education: Education[] = [
  {
    degree: 'B.E. Computer Science & Engineering',
    school: 'Sandip Foundation',
    location: 'Nashik, India',
    period: 'Jul 2022 – May 2025',
    icon: GraduationCap,
  },
  {
    degree: 'Diploma in Information Technology',
    school: 'Amrutvahini Polytechnic',
    location: 'Sangamner, India',
    period: 'Aug 2019 – Jul 2022',
    icon: GraduationCap,
  },
];

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  credentialId: string;
}

export const certifications: Certification[] = [
  {
    title: 'Data Science Certified',
    issuer: 'ExcelR',
    year: '2025',
    credentialId: '18994/07012025',
  },
  {
    title: 'Generative AI Foundations Certified',
    issuer: 'Certification Authority',
    year: '2025',
    credentialId: 'plOwOFvoWscHe6tK',
  },
];

export const publication = {
  title: 'CNN-Based Object Detection for Industrial Automation',
  venue: 'IJMRSET — Int. Journal of Multidisciplinary Research in Science, Engineering & Technology',
  year: '2025',
  description:
    'Designed a CNN-based object-detection system for real-time industrial automation, benchmarked against K-NN baselines with improved classification accuracy.',
  tags: ['Deep Learning', 'Computer Vision', 'Research'],
};

/* -------------------------------------------------------------------------- */
/*  Why hire me                                                                 */
/* -------------------------------------------------------------------------- */

export interface Pillar {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const whyHireMe: Pillar[] = [
  {
    icon: Rocket,
    title: 'Production AI Systems',
    description:
      'I ship, not just prototype — FastAPI inference APIs, Dockerised services, CI/CD pipelines, and zero-downtime deployments behind Nginx.',
  },
  {
    icon: Bot,
    title: 'LLM & Agentic Applications',
    description:
      'LangGraph and LangChain ReAct agents, MCP tool integration, and RAG systems built on FAISS, ChromaDB, and Pinecone.',
  },
  {
    icon: Layers,
    title: 'End-to-End Ownership',
    description:
      'I own the full lifecycle — data → model → API → deployment — solo, across finance, QA automation, and industrial domains.',
  },
  {
    icon: Container,
    title: 'MLOps & DevOps',
    description:
      'Docker Compose, GitHub Actions, Celery/Redis workers, Nginx/SSL, and experiment tracking with MLflow and Weights & Biases.',
  },
  {
    icon: LineChart,
    title: 'Data Science Depth',
    description:
      'EDA, feature engineering, statistical modeling, and forecasting with LSTM, XGBoost, and LightGBM — always measured against baselines.',
  },
  {
    icon: BookOpenCheck,
    title: 'Research Mindset',
    description:
      'Published CNN object-detection research (IJMRSET). I read papers, run benchmarks, and let metrics drive decisions.',
  },
];

/* -------------------------------------------------------------------------- */
/*  GitHub showcase                                                             */
/* -------------------------------------------------------------------------- */

export interface FeaturedRepo {
  name: string;
  description: string;
  language: string;
  url: string;
  icon: LucideIcon;
}

export const github = {
  username: 'ShivamSonawane2003',
  url: 'https://github.com/ShivamSonawane2003',
  repoCount: 27,
  focusAreas: [
    'Multi-Agent Systems',
    'LLM Applications',
    'Computer Vision',
    'Data Science',
    'MLOps',
    'Backend APIs',
  ],
  /** Approximate language distribution across public repositories */
  languages: [
    { name: 'Python', pct: 68 },
    { name: 'JavaScript / TypeScript', pct: 14 },
    { name: 'Jupyter / HTML', pct: 12 },
    { name: 'Java / Other', pct: 6 },
  ],
  featured: [
    {
      name: 'AgentForge',
      description: 'Enterprise AI agent platform with LangGraph, MCP, RAG, and microservice orchestration.',
      language: 'Python',
      url: `${GH}/AgentForge`,
      icon: Bot,
    },
    {
      name: 'PID2DCS',
      description: 'AI platform for intelligent P&ID analysis, OCR, symbol detection, and DCS/XML generation.',
      language: 'JavaScript',
      url: `${GH}/PID2DCS`,
      icon: ScanSearch,
    },
    {
      name: 'AI_Healer',
      description: 'Self-healing UI test infrastructure combining ML scoring with LLM-based semantic repair.',
      language: 'Python',
      url: `${GH}/AI_Healer`,
      icon: ShieldCheck,
    },
    {
      name: 'DocGen-Agent',
      description: 'Autonomous FastAPI agent that turns natural-language requests into formatted documents.',
      language: 'Python',
      url: `${GH}/DocGen-Agent`,
      icon: FileText,
    },
  ] as FeaturedRepo[],
} as const;

/* -------------------------------------------------------------------------- */
/*  Navigation                                                                  */
/* -------------------------------------------------------------------------- */

export const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'GitHub', href: '#github' },
  { name: 'Why Me', href: '#why-me' },
  { name: 'Contact', href: '#contact' },
];
