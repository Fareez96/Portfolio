"use client";

import { useEffect, useState } from "react";
import { ArrowDown, Download, Mail } from "lucide-react";

const titles = [
  "CSE Student",
  "Cloud Computing Specialist",
  "Software Developer",
  "Infrastructure Engineer",
];

export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const currentTitle = titles[titleIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentTitle.slice(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);

          if (charIndex + 1 === currentTitle.length) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setDisplayText(currentTitle.slice(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);

          if (charIndex - 1 === 0) {
            setIsDeleting(false);
            setTitleIndex((prev) => (prev + 1) % titles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, titleIndex]);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      {/* Animated background grid */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(192_91%_46%/0.08),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
        {/* Left content */}
        <div className="animate-fade-in-up">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Open to opportunities
          </div>

          <h1 className="mb-2 text-balance text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            Fareez Raza
          </h1>

          <div className="mb-6 flex h-8 items-center text-lg text-muted-foreground md:text-xl">
            <span className="font-mono text-primary">{displayText}</span>
            <span className="ml-0.5 inline-block w-0.5 h-6 bg-primary animate-blink" />
          </div>

          <p className="mb-8 max-w-lg text-pretty leading-relaxed text-muted-foreground">
            CSE student specializing in Cloud Computing with hands-on experience
            in AWS, system design, and scalable application development. Seeking
            internship opportunities in cloud and infrastructure engineering.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
            >
              View Projects
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-6 py-2.5 text-sm font-semibold text-foreground transition-all hover:border-primary hover:text-primary"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-6 py-2.5 text-sm font-semibold text-foreground transition-all hover:border-primary hover:text-primary"
            >
              <Mail className="h-4 w-4" />
              Get in Touch
            </a>
          </div>
        </div>

        {/* Right: Profile visual */}
        <div className="flex justify-center" style={{ animationDelay: "0.3s" }}>
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-2 border-primary/30 bg-card md:h-80 md:w-80">
              <div className="flex h-full w-full items-center justify-center">
                <div className="text-center">
                  <div className="mb-2 font-mono text-5xl font-bold text-primary md:text-6xl">
                    FR
                  </div>
                  <div className="text-sm text-muted-foreground">
                    CS Student
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
