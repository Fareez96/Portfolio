"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Award, ExternalLink, ChevronDown } from "lucide-react";

const mainCertifications = [
  {
    name: "AWS Cloud Practitioner Essentials",
    org: "Amazon Web Services",
    date: "",
    color: "text-[hsl(35,90%,55%)]",
  },
  {
    name: "AWS Architecting",
    org: "Amazon Web Services",
    date: "",
    color: "text-[hsl(35,80%,50%)]",
  },
  {
    name: "Introduction to Generative AI",
    org: "Google Cloud",
    date: "",
    color: "text-[hsl(145,60%,45%)]",
  },
  {
    name: "Deep Learning",
    org: "NPTEL",
    date: "",
    color: "text-[hsl(210,80%,55%)]",
  },
  {
    name: "Cyber Security Essentials",
    org: "",
    date: "",
    color: "text-[hsl(0,70%,55%)]",
  },
];

const additionalCertifications = [
  {
    name: "AWS Academy Cloud Foundations",
    org: "Amazon Web Services",
    date: "May 2025",
    color: "text-[hsl(35,85%,52%)]",
  },
  {
    name: "Java",
    org: "LPU School of Computer Science Engineering",
    date: "May 2025",
    color: "text-[hsl(10,75%,50%)]",
  },
  {
    name: "Data Structures and Algorithm",
    org: "LPU School of Computer Science Engineering",
    date: "Dec 2024",
    color: "text-[hsl(260,60%,55%)]",
  },
  {
    name: "C",
    org: "LPU School of Computer Science Engineering",
    date: "May 2024",
    color: "text-[hsl(220,70%,55%)]",
  },
  {
    name: "C++",
    org: "LPU School of Computer Science Engineering",
    date: "Dec 2024",
    color: "text-[hsl(200,70%,50%)]",
  },
  {
    name: "Fundamentals of Network Communication",
    org: "Coursera / University of Colorado",
    date: "Dec 2024",
    color: "text-[hsl(180,60%,45%)]",
  },
  {
    name: "Digital Systems: From Logic Gates to Processors",
    org: "Coursera / Universitat Autonoma de Barcelona",
    date: "Dec 2024",
    color: "text-[hsl(290,55%,50%)]",
  },
  {
    name: "Computer Communications",
    org: "Coursera / University of Colorado",
    date: "Dec 2024",
    color: "text-[hsl(170,55%,45%)]",
  },
  {
    name: "Introduction to Hardware and Operating Systems",
    org: "Coursera / IBM",
    date: "Oct 2024",
    color: "text-[hsl(210,65%,50%)]",
  },
  {
    name: "The Bits and Bytes of Computer Networking",
    org: "Google / EDX",
    date: "Sep 2024",
    color: "text-[hsl(145,55%,48%)]",
  },
  {
    name: "Responsive Web Design",
    org: "freeCodeCamp",
    date: "Oct 2023",
    color: "text-[hsl(50,80%,48%)]",
  },
  {
    name: "Excellence in Product and Brand Management",
    org: "Udemy",
    date: "Oct 2023",
    color: "text-[hsl(320,60%,50%)]",
  },
];

function CertCard({
  cert,
}: {
  cert: { name: string; org: string; date: string; color: string };
}) {
  return (
    <div className="group flex flex-col justify-between rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
      <div>
        <Award className={`mb-4 h-8 w-8 ${cert.color}`} />
        <h3 className="mb-1 text-lg font-semibold text-foreground">
          {cert.name}
        </h3>
        {cert.org && (
          <p className="text-sm text-muted-foreground">{cert.org}</p>
        )}
        {cert.date && (
          <p className="mt-1 font-mono text-xs text-muted-foreground">
            {cert.date}
          </p>
        )}
      </div>
      <button
        type="button"
        className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm font-medium text-foreground transition-all group-hover:border-primary group-hover:text-primary"
      >
        View Certificate
        <ExternalLink className="h-3 w-3" />
      </button>
    </div>
  );
}

export function Certifications() {
  const { ref, isVisible } = useScrollReveal();
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="certifications" className="py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-6 transition-all duration-700 ${
          isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
          Certifications
        </div>
        <h2 className="mb-12 text-balance text-3xl font-bold text-foreground md:text-4xl">
          Credentials & Certificates
        </h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {mainCertifications.map((cert) => (
            <CertCard key={cert.name} cert={cert} />
          ))}
        </div>

        <div className="mt-12">
          <button
            type="button"
            onClick={() => setShowMore(!showMore)}
            className="mx-auto flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-6 py-2.5 text-sm font-medium text-foreground transition-all hover:border-primary hover:text-primary"
          >
            {showMore ? "Show Less" : `Show ${additionalCertifications.length} More Certificates`}
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-300 ${
                showMore ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {showMore && (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 animate-fade-in-up">
            {additionalCertifications.map((cert) => (
              <CertCard key={cert.name} cert={cert} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
