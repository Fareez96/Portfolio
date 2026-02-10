"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Github, ExternalLink, Folder } from "lucide-react";

const projects = [
  {
    title: "Multifactor Cryptographic Auth System",
    description:
      "A full-stack, security-focused web app implementing multi-layered cryptographic authentication with bcrypt/Argon2 password hashing, OTP email verification, and JWT session management to defend against brute-force and phishing attacks.",
    tech: ["Flask", "SQLite", "bcrypt", "pyOTP", "JWT"],
    github:
      "https://github.com/Fareez96/Multi-Factor-Cryptographic-Authentication-System",
    demo: null,
  },
  {
    title: "CloudDeploy Dashboard",
    description:
      "A full-stack web dashboard for managing and monitoring cloud deployments across AWS with real-time status updates, resource tracking, and deployment logs.",
    tech: ["React", "Node.js", "AWS", "Docker"],
    github: "#",
    demo: "#",
  },
  {
    title: "GameVerse",
    description:
      "An all-in-one gaming marketplace and streaming hub bringing together digital game sales, gaming accessories, merchandise, and live streaming. Features buy/sell functionality, gear browsing, and live esports content.",
    tech: ["React", "CSS", "SQL", "HTML5", "JavaScript"],
    github: "#",
    demo: null,
  },
  {
    title: "Enigma Cipher Machine",
    description:
      "A custom-built encryption and decryption system inspired by the Enigma machine. Enhances security with dynamic rearrangement algorithms across uppercase, lowercase, numbers, and special characters -- ensuring no two encryptions are alike.",
    tech: ["Python", "Cryptography"],
    github: "#",
    demo: null,
  },
  {
    title: "SmartNotes AI",
    description:
      "An AI-powered note-taking app that automatically summarizes, categorizes, and links related content together using natural language processing.",
    tech: ["Python", "Flask", "React", "NLP"],
    github: "#",
    demo: null,
  },
  {
    title: "OS Efficiency Research Paper",
    description:
      "Co-authored a research paper proposing a dynamic paging algorithm that adjusts page size in real-time based on process workload, reducing page faults. Covers paging, segmentation, virtual memory, and LRU/FIFO/OPT page replacement.",
    tech: ["OS", "Memory Mgmt", "Systems Design"],
    github: null,
    demo: null,
  },
  {
    title: "HYMN",
    description:
      "A feature-rich music and podcast streaming platform with an extensive library, custom playlists, smart recommendations based on listening history, and a sleek Spotify-like UI for a premium audio experience.",
    tech: ["React", "CSS", "HTML"],
    github: "#",
    demo: null,
  },
  {
    title: "Budget Tracker",
    description:
      "A personal finance management tool with interactive charts, spending insights, and budget forecasting capabilities for smart money management.",
    tech: ["JavaScript", "React", "SQL", "Recharts"],
    github: "#",
    demo: "#",
  },
  {
    title: "Disaster Management & Response",
    description:
      "A disaster management platform providing real-time alerts on earthquakes, floods, and storms, along with emergency resources, interactive maps for affected areas, and AI-powered risk assessment for community preparedness.",
    tech: ["React", "CSS", "SQL", "HTML5"],
    github: "#",
    demo: null,
  },
  {
    title: "CLI Task Manager",
    description:
      "A lightweight command-line tool for managing tasks and to-dos with tagging, priorities, and deadline reminders built for developer workflows.",
    tech: ["Python", "Click", "SQLite"],
    github: "#",
    demo: null,
  },
  {
    title: "Portfolio Website",
    description:
      "This very portfolio website built with modern web technologies, featuring smooth scroll animations, dark/light mode, and a fully responsive design.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    github: "#",
    demo: "#",
  },
];

export function Projects() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-6 transition-all duration-700 ${
          isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
          Projects
        </div>
        <h2 className="mb-12 text-balance text-3xl font-bold text-foreground md:text-4xl">
          Things I have built
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col justify-between rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5"
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <Folder className="h-8 w-8 text-primary" />
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="text-muted-foreground transition-colors hover:text-primary"
                      aria-label={`GitHub link for ${project.title}`}
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        className="text-muted-foreground transition-colors hover:text-primary"
                        aria-label={`Live demo for ${project.title}`}
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-secondary/50 px-3 py-0.5 font-mono text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
