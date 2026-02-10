"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Code2, Cloud, Cpu, Zap } from "lucide-react";

const traits = [
  { icon: Cloud, label: "Cloud Computing", description: "AWS: IAM, EC2, S3, VPC, RDS" },
  { icon: Cpu, label: "System Design", description: "Scalable cloud architecture" },
  { icon: Code2, label: "Developer", description: "Python, Java, C, SQL, Web" },
  { icon: Zap, label: "Fast Learner", description: "Adapting to new technologies" },
];

export function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-6 transition-all duration-700 ${
          isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
          About Me
        </div>
        <h2 className="mb-8 text-balance text-3xl font-bold text-foreground md:text-4xl">
          A bit about who I am
        </h2>

        <div className="grid gap-12 md:grid-cols-2">
          <div className="leading-relaxed text-muted-foreground">
            <p className="mb-4">
              I am a Computer Science and Engineering student specializing in
              Cloud Computing, with a strong interest in cloud infrastructure,
              system design, and scalable application development. I have a
              solid foundation in programming, data structures, operating
              systems, computer networks, and database management systems.
            </p>
            <p className="mb-4">
              My technical skills include Python, Java, C, SQL, and web
              technologies such as HTML, CSS, and JavaScript. I have hands-on
              experience with cloud platforms and services, including AWS
              components such as IAM, EC2, S3, VPC, and RDS, along with
              practical experience in Linux environments, networking concepts,
              and system configuration.
            </p>
            <p>
              I focus on building practical projects to apply my knowledge and
              continuously improve my understanding of cloud architecture,
              deployment, and automation. I am currently seeking internship and
              entry-level opportunities where I can contribute to real-world
              projects and further develop my skills in cloud and infrastructure
              engineering.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {traits.map((trait) => (
              <div
                key={trait.label}
                className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
              >
                <trait.icon className="mb-3 h-6 w-6 text-primary" />
                <div className="mb-1 text-sm font-semibold text-foreground">
                  {trait.label}
                </div>
                <div className="text-xs leading-relaxed text-muted-foreground">
                  {trait.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
