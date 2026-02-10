"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Heart, Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Volunteer",
    org: "Goonj NGO",
    duration: "Volunteering",
    achievements: [
      "Participated in community welfare and disaster relief activities",
      "Assisted in organizing donation drives and distribution campaigns",
      "Collaborated with team members to support grassroots-level initiatives",
    ],
  },
];

export function Experience() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="experience" className="py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-6 transition-all duration-700 ${
          isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
          Volunteering
        </div>
        <h2 className="mb-12 text-balance text-3xl font-bold text-foreground md:text-4xl">
          Giving back to the community
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border md:left-1/2 md:-translate-x-px" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, i) => (
              <div
                key={exp.role}
                className={`relative flex flex-col md:flex-row ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 top-1 z-10 h-4 w-4 rounded-full border-2 border-primary bg-background md:left-1/2 md:-translate-x-1/2" />

                {/* Card */}
                <div
                  className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${
                    i % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  }`}
                >
                  <div className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                    <div className="mb-3 flex items-center gap-3">
                      <Heart className="h-5 w-5 text-primary" />
                      <span className="rounded-full border border-border bg-secondary/50 px-3 py-0.5 font-mono text-xs text-muted-foreground">
                        {exp.duration}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {exp.role}
                    </h3>
                    <p className="mb-3 text-sm text-primary">{exp.org}</p>
                    <ul className="flex flex-col gap-2">
                      {exp.achievements.map((ach) => (
                        <li
                          key={ach}
                          className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                          {ach}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
