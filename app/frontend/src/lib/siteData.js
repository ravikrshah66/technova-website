import {
  Globe, Smartphone, Code2, BrainCircuit, Cloud, ShieldCheck, Megaphone, PenTool,
} from "lucide-react";

export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwyfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neSUyMGRpZ2l0YWwlMjB0cmFuc2Zvcm1hdGlvbiUyMGNsb3VkJTIwQUklMjBzZXJ2ZXIlMjBjeWJlciUyMG5ldHdvcmt8ZW58MHx8fHwxNzkzNTE2ODA4fDA&ixlib=rb-4.1.0&q=85",
  aiGrid: "https://images.unsplash.com/photo-1683560660669-6be33568035e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHw0fHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neSUyMGRpZ2l0YWwlMjB0cmFuc2Zvcm1hdGlvbiUyMGNsb3VkJTIwQUklMjBzZXJ2ZXIlMjBjeWJlciUyMG5ldHdvcmt8ZW58MHx8fHwxNzkzNTE2ODA4fDA&ixlib=rb-4.1.0&q=85",
  cyber: "https://images.unsplash.com/photo-1637166185518-058f5896a2e9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neSUyMGRpZ2l0YWwlMjB0cmFuc2Zvcm1hdGlvbiUyMGNsb3VkJTIwQUklMjBzZXJ2ZXIlMjBjeWJlciUyMG5ldHdvcmt8ZW58MHx8fHwxNzkzNTE2ODA4fDA&ixlib=rb-4.1.0&q=85",
  datacenter: "https://images.unsplash.com/photo-1752742111841-f490c48aa668?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwzfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neSUyMGRpZ2l0YWwlMjB0cmFuc2Zvcm1hdGlvbiUyMGNsb3VkJTIwQUklMjBzZXJ2ZXIlMjBjeWJlciUyMG5ldHdvcmt8ZW58MHx8fHwxNzkzNTE2ODA4fDA&ixlib=rb-4.1.0&q=85",
  workspace: "https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NjV8MHwxfHNlYXJjaHwzfHxzb2Z0d2FyZSUyMGVuZ2luZWVyaW5nJTIwdGVhbSUyMGRhcmslMjB0ZWNoJTIwb2ZmaWNlJTIwY2xvdWQlMjBjb21wdXRpbmclMjBjb2Rpbmd8ZW58MHx8fHwxNzkzNTE2ODE0fDA&ixlib=rb-4.1.0&q=85",
  code: "https://images.unsplash.com/photo-1738255654134-1877cb984a8f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NjV8MHwxfHNlYXJjaHwyfHxzb2Z0d2FyZSUyMGVuZ2luZWVyaW5nJTIwdGVhbSUyMGRhcmslMjB0ZWNoJTIwb2ZmaWNlJTIwY2xvdWQlMjBjb21wdXRpbmclMjBjb2Rpbmd8ZW58MHx8fHwxNzkzNTE2ODE0fDA&ixlib=rb-4.1.0&q=85",
};

export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "Why Us", path: "/why-us" },
  { label: "Contact", path: "/contact" },
];

export const MARQUEE_ITEMS = [
  "ARTIFICIAL INTELLIGENCE", "CLOUD COMPUTING", "CYBERSECURITY", "WEB ENGINEERING",
  "MOBILE APPS", "UI/UX DESIGN", "DEVOPS", "DATA ANALYTICS", "DIGITAL MARKETING",
];

export const STATS = [
  { value: 150, suffix: "+", label: "Enterprise projects delivered" },
  { value: 99.9, suffix: "%", label: "Uptime across managed systems", decimals: 1 },
  { value: 40, suffix: "+", label: "Engineers, designers & strategists" },
  { value: 12, suffix: "", label: "Industries transformed" },
];

export const SERVICES = [
  {
    id: "web-development", icon: Globe, title: "Web Development",
    blurb: "High-performance websites and web platforms engineered for speed, scale and conversion.",
    features: ["React / Next.js engineering", "Progressive web apps", "Headless CMS builds", "Performance & Core Web Vitals"],
  },
  {
    id: "mobile-app-development", icon: Smartphone, title: "Mobile App Development",
    blurb: "Native-quality iOS and Android apps from a single, maintainable codebase.",
    features: ["Flutter & React Native", "App Store / Play launch", "Offline-first architecture", "Push, payments & analytics"],
  },
  {
    id: "software-development", icon: Code2, title: "Software Development",
    blurb: "Custom enterprise software, APIs and platforms built around your exact workflows.",
    features: ["Custom ERP / CRM systems", "API design & integration", "Legacy modernisation", "Microservices architecture"],
  },
  {
    id: "artificial-intelligence", icon: BrainCircuit, title: "Artificial Intelligence",
    blurb: "Applied AI that automates decisions, personalises experiences and unlocks your data.",
    features: ["LLM-powered assistants", "Predictive analytics", "Computer vision systems", "MLOps & model monitoring"],
  },
  {
    id: "cloud-computing", icon: Cloud, title: "Cloud Computing",
    blurb: "Cloud-native infrastructure that is resilient, cost-efficient and ready to scale.",
    features: ["AWS / Azure / GCP migration", "Kubernetes & containers", "Infrastructure as Code", "FinOps cost optimisation"],
  },
  {
    id: "cybersecurity", icon: ShieldCheck, title: "Cybersecurity",
    blurb: "Zero-trust security that protects your product, your data and your reputation.",
    features: ["Penetration testing", "Zero-trust architecture", "SOC & threat monitoring", "Compliance readiness"],
  },
  {
    id: "digital-marketing", icon: Megaphone, title: "Digital Marketing",
    blurb: "Data-driven growth engines across search, social and performance media.",
    features: ["Technical SEO", "Performance marketing", "Marketing automation", "Analytics & attribution"],
  },
  {
    id: "ui-ux-design", icon: PenTool, title: "UI/UX Design",
    blurb: "Interfaces that feel effortless — researched, prototyped and tested with real users.",
    features: ["Product design sprints", "Design systems", "UX research & testing", "Motion & interaction design"],
  },
];

export const PROJECTS = [
  {
    id: "apex-ai", title: "Apex AI Analytics Platform", category: "Artificial Intelligence",
    image: IMAGES.aiGrid,
    description: "A real-time analytics platform that turns raw operational data into predictive insight dashboards for enterprise teams.",
    stack: ["Python", "TensorFlow", "React", "AWS"],
  },
  {
    id: "quantumcloud", title: "QuantumCloud Enterprise Portal", category: "Cloud Computing",
    image: IMAGES.datacenter,
    description: "A multi-tenant self-service cloud portal with automated provisioning, usage metering and role-based access.",
    stack: ["Kubernetes", "Go", "Azure", "Terraform"],
  },
  {
    id: "sentinel", title: "Sentinel CyberGuard Vault", category: "Cybersecurity",
    image: IMAGES.cyber,
    description: "A zero-trust secrets vault and threat-monitoring console with anomaly detection and instant incident response.",
    stack: ["Rust", "Zero-Trust", "SIEM", "gRPC"],
  },
  {
    id: "finpulse", title: "FinPulse Mobile Platform", category: "Mobile App Development",
    image: IMAGES.workspace,
    description: "A fictional fintech mobile app with biometric login, instant transfers and spending intelligence.",
    stack: ["Flutter", "Node.js", "PostgreSQL", "Redis"],
  },
  {
    id: "novacart", title: "NovaCart Commerce Suite", category: "Web Development",
    image: IMAGES.code,
    description: "A headless commerce storefront with sub-second page loads, A/B-tested checkout and live inventory sync.",
    stack: ["Next.js", "GraphQL", "Stripe", "Vercel"],
  },
  {
    id: "insight360", title: "Insight360 Data Platform", category: "Software Development",
    image: IMAGES.hero,
    description: "A unified data pipeline that ingests, models and visualises company-wide metrics in near real time.",
    stack: ["Spark", "dbt", "Snowflake", "Airflow"],
  },
];

export const PROJECT_FILTERS = ["All", "Artificial Intelligence", "Cloud Computing", "Cybersecurity", "Mobile App Development", "Web Development", "Software Development"];

export const WHY_US = [
  {
    id: "veterans", title: "Skilled Tech Veterans",
    text: "Senior engineers, architects and designers — no hand-offs to juniors. The people you meet are the people who build.",
    span: "lg:col-span-2",
  },
  {
    id: "innovation", title: "Innovative Solutions",
    text: "We prototype fast, test with real users, and only ship what measurably moves your metrics.",
    span: "",
  },
  {
    id: "stack", title: "Modern Tech Stack",
    text: "Cloud-native, API-first and AI-ready. We build on technology that will still be current five years from now.",
    span: "",
  },
  {
    id: "client-first", title: "Client-First Partnership",
    text: "Weekly demos, transparent roadmaps and a 99.9% uptime mindset. Your goals become our sprint goals.",
    span: "lg:col-span-2",
  },
];

export const VALUES = [
  { id: "innovation", title: "Innovation", text: "We experiment relentlessly so our clients never ship yesterday's technology." },
  { id: "security", title: "Security", text: "Security is designed in from line one, never bolted on at the end." },
  { id: "scalability", title: "Scalability", text: "Every system we build is designed for ten times today's load." },
  { id: "customer", title: "Customer Centricity", text: "We succeed only when our clients' customers love what we built." },
];

export const TEAM = [
  { name: "Aarav Menon", role: "Founder & CEO", initials: "AM" },
  { name: "Sofia Reyes", role: "CTO", initials: "SR" },
  { name: "Daniel Okafor", role: "Head of Engineering", initials: "DO" },
  { name: "Mei-Ling Zhao", role: "Design Director", initials: "MZ" },
];

export const CONTACT_INFO = {
  email: "hello@technova.solutions",
  phone: "+1 (555) 010-2299",
  address: "Level 12, Nova Tower, Innovation District, Bengaluru 560001 (fictional)",
  hours: "Mon – Fri, 9:00 – 18:00 IST",
};
