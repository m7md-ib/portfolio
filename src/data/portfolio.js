// ============================================================
// 📝 PORTFOLIO DATA — Edit everything here to personalize
// ============================================================

export const personal = {
  name: "Mohammed Ibdah",
  role: "Full-Stack Developer",
  tagline: "I craft digital experiences that people actually enjoy using.",
  email: "mohammedibdah04@gmail.com",
  location: "Amman, Jordan",
  available: true, // toggles "Available for work" badge
  social: {
    github: "https://github.com/m7md-ib",
    linkedin: "https://www.linkedin.com/in/mohammed-ibdah/",
  },
  resumeUrl: "/Mohammed-Ibdah-CV.pdf",
};

export const about = {
  bio: `Full-Stack Developer and Computer Science graduate from Al-Balqa Applied University. I build complete web applications with React, Next.js, TypeScript, Node.js, and PostgreSQL — from the database schema to the UI, in both Arabic (RTL) and English. I also work hands-on with business systems like QuickBooks, Foodics, Cloudbeds, and LenovoHRM, which shapes how I design software for real operations.`,

  highlights: [
    "Built Daftar, a digital graduation guestbook: TypeScript monorepo, PostgreSQL + Drizzle, Stripe payments, tested with Vitest and Playwright",
    "Built MAYS HR, an HR & payroll system: Next.js, Prisma, role-based access, audit log, and Excel reports",
    "Bilingual Arabic/English apps with full RTL support",
    "Day-to-day experience with accounting, restaurant, hotel, and HR systems",
  ],
};

export const stats = [
  { value: "2", label: "Live full-stack apps" },
  { value: "AR / EN", label: "RTL-ready UIs" },
  { value: "3.30", label: "GPA · BSc CS" },
];

export const skills = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "PostgreSQL", "Drizzle ORM", "Prisma", "MongoDB"],
  },
  {
    category: "Tools & Concepts",
    items: [
      "Git & GitHub",
      "REST APIs",
      "Authentication (JWT / sessions)",
      "Role-based access",
      "Vitest & Playwright",
      "Responsive Design",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Daftar — Digital Graduation Guestbook",
    description:
      "An interactive graduation guestbook: graduates personalize a notebook and share a link or QR code, and friends leave messages that render as pages in a book. Includes a graduate dashboard, admin panel, moderation, privacy levels, server-verified Stripe payments, and full Arabic RTL.",
    tags: ["TypeScript", "React", "Node.js", "Express", "PostgreSQL", "Drizzle", "Tailwind"],
    image: "/projects/daftar.png",
    liveUrl: "https://grad-book-web.vercel.app",
    githubUrl: "https://github.com/m7md-ib/gradBook",
    featured: true,
  },
  {
    id: 2,
    title: "MAYS HR — HR & Payroll System",
    description:
      "HR and payroll system for employees, attendance, daily/weekly/monthly payroll, advances, deductions, leave, and a per-employee ledger. Exact money math with decimal.js, role-based permissions for 6 roles, audit log, dashboard charts, and Excel reports, in Arabic and English.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind"],
    image: null,
    liveUrl: "https://hr-system-pearl-mu.vercel.app",
    githubUrl: "https://github.com/m7md-ib/HR-System",
    featured: true,
  },
  {
    id: 3,
    title: "E-Learning System",
    description:
      "Full-stack e-learning platform that allows users to browse courses, enroll, and track their progress. Includes authentication, course management, and responsive UI.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    image: null,
    liveUrl: "",
    githubUrl: "",
    featured: false,
  },
  {
    id: 4,
    title: "Session Booking Website",
    description:
      "Booking system that enables users to schedule and manage sessions, with REST APIs on Node.js/Express and MongoDB for storage.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    image: null,
    liveUrl: "",
    githubUrl: "",
    featured: false,
  },
  {
    id: 5,
    title: "Todo List Application",
    description:
      "Simple and responsive to-do list app that allows users to add, update, and delete tasks with real-time UI updates.",
    tags: ["JavaScript", "HTML", "CSS"],
    image: null,
    liveUrl: "https://taskflow-todo-app-tst4.vercel.app/",
    githubUrl: "",
    featured: false,
  },
];
