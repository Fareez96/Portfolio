"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const skillCategories = [
  {
    category: "Programming",
    skills: [
      { name: "Python", level: 90 },
      { name: "Java", level: 85 },
      { name: "C", level: 75 },
      { name: "JavaScript", level: 88 },
      { name: "TypeScript", level: 80 },
    ],
  },
  {
    category: "Web Development",
    skills: [
      { name: "HTML / CSS", level: 95 },
      { name: "React", level: 82 },
      { name: "Next.js", level: 78 },
      { name: "Flask", level: 75 },
      { name: "Node.js", level: 80 },
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "AWS", level: 75 },
      { name: "Docker", level: 78 },
      { name: "Terraform", level: 70 },
      { name: "Maven", level: 68 },
      { name: "Jenkins", level: 72 },
      { name: "Linux", level: 85 },
    ],
  },
  {
    category: "Tools & Systems",
    skills: [
      { name: "Git / GitHub", level: 92 },
      { name: "VS Code", level: 95 },
      { name: "SQL", level: 75 },
      { name: "NoSQL", level: 70 },
      { name: "System Design", level: 68 },
    ],
  },
];

export function Skills() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills" className="py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-6 transition-all duration-700 ${
          isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
          Skills
        </div>
        <h2 className="mb-12 text-balance text-3xl font-bold text-foreground md:text-4xl">
          Technologies I work with
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((cat) => (
            <div
              key={cat.category}
              className="rounded-xl border border-border bg-card p-6"
            >
              <h3 className="mb-5 text-lg font-semibold text-foreground">
                {cat.category}
              </h3>
              <div className="flex flex-col gap-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="font-mono text-xs text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                      <div
                        className="h-full rounded-full bg-primary transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech strip */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {[
            "Python",
            "Java",
            "JavaScript",
            "React",
            "Flask",
            "AWS",
            "Docker",
            "Terraform",
            "Jenkins",
            "Maven",
            "SQL",
            "NoSQL",
            "Git",
            "Linux",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-secondary/50 px-4 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
