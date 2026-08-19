export type Project = {
  name: string;
  category: string;
  image: string;
  url: string;
  description: string;
};

export const projects: Project[] = [
  {
    name: "TaskCraft",
    category: "Task management web application",
    image: "/images/taskcraft.png",
    url: "https://task-manager-omega-nine-20.vercel.app",
    description: "A task management web application built on the MERN stack with TypeScript and Redux Toolkit, offering a clean interface to create, organize, and track tasks efficiently.",
  },
  {
    name: "My Home Nishada",
    category: "Real estate platform",
    image: "/images/nishidha.png",
    url: "https://myhomenishada.co.in/",
    description: "A conversion-focused property website that presents architecture, construction detail, and a clear enquiry path for prospective buyers.",
  },
  {
    name: "Cancer Clinics",
    category: "Healthcare campaign",
    image: "/images/cancerc.png",
    url: "https://www.cancerclinics.in/breast-cancer-screening/",
    description: "An SEO-conscious healthcare landing page designed to communicate screening information clearly and route patient enquiries to the team.",
  },
  {
    name: "Brinnova Care",
    category: "Healthcare website",
    image: "/images/brinnova.png",
    url: "https://www.brinnovacare.com/",
    description: "A web presence for a transitional-care centre, balancing compassionate storytelling with clear service information.",
  },
];

export const stack = ["MongoDB", "Express.js", "React", "Node.js", "TypeScript", "Next.js", "REST APIs", "Tailwind CSS"];

export const stats = [
  { value: "5+", label: "Live client projects shipped" },
  { value: "4", label: "Industries served" },
  { value: "8", label: "Technologies in the toolkit" },
  { value: "100%", label: "Hand-crafted attention to detail" },
];

export const processSteps = [
  {
    title: "Strategy-first design",
    text: "I shape the product around goals, user journeys, and conversion moments before code starts moving.",
  },
  {
    title: "Build with clarity",
    text: "Clean component structure, reusable patterns, and performance-aware frontend choices keep the experience smooth.",
  },
  {
    title: "Ship with confidence",
    text: "I test the details, refine interactions, and keep the final product easy to maintain and expand.",
  },
];

export const faqItems = [
  {
    question: "What kind of work do I focus on?",
    answer: "I work best on product landing pages, marketing websites, client portals, and polished frontend features that demand both design quality and speed.",
  },
  {
    question: "How do I approach a new project?",
    answer: "I start by mapping audience outcomes, then translate that into a simple visual system, focused content blocks, and a clean user flow.",
  },
  {
    question: "Can I help with full-stack delivery?",
    answer: "Yes. I can contribute across the MERN stack, from API integration and data handling to frontend UX and deployment-ready polish.",
  },
];
