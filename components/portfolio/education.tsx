"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { GraduationCap, BookOpen } from "lucide-react";

const coursework = [
  "Data Structures & Algorithms",
  "Operating Systems",
  "Computer Networks",
  "Database Systems",
  "Cloud Computing",
  "Software Engineering",
  "Machine Learning",
  "Distributed Systems",
];

export function Education() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="education" className="py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-6 transition-all duration-700 ${
          isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
          Education
        </div>
        <h2 className="mb-12 text-balance text-3xl font-bold text-foreground md:text-4xl">
          Academic background
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-8">
            <GraduationCap className="mb-4 h-10 w-10 text-primary" />
            <h3 className="mb-1 text-xl font-bold text-foreground">
              B.Tech Computer Science & Engineering
            </h3>
            <p className="text-primary">Specialization in Cloud Computing</p>
            <p className="mt-1 font-mono text-sm text-muted-foreground">
              2023 - 2027 (Expected)
            </p>
            <div className="mt-4 flex items-center gap-2">
              <span className="rounded-full border border-border bg-secondary/50 px-3 py-0.5 font-mono text-xs text-muted-foreground">
                GPA: 3.8 / 4.0
              </span>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-8">
            <BookOpen className="mb-4 h-10 w-10 text-primary" />
            <h3 className="mb-4 text-xl font-bold text-foreground">
              Relevant Coursework
            </h3>
            <div className="flex flex-wrap gap-2">
              {coursework.map((course) => (
                <span
                  key={course}
                  className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
