"use client";

import React from "react"

import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  Mail,
  Github,
  Linkedin,
  Send,
  MapPin,
  ArrowUpRight,
  Instagram,
} from "lucide-react";

const socials = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Fareez96",
    handle: "@Fareez96",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/fareez-raza-6a0b9928a/",
    handle: "in/fareez-raza",
  },
  {
    icon: Mail,
    label: "Work Email",
    href: "mailto:captain1122raza@gmail.com",
    handle: "captain1122raza@gmail.com",
  },
  {
    icon: Mail,
    label: "Personal Email",
    href: "mailto:fareezraza@gmail.com",
    handle: "fareezraza@gmail.com",
  },
  {
    icon: Instagram,
    label: "Instagram (Personal)",
    href: "https://instagram.com/dexter_96_dwel",
    handle: "@dexter_96_dwel",
  },
  {
    icon: Instagram,
    label: "Instagram (Work)",
    href: "https://instagram.com/callsign_reaper_96",
    handle: "@callsign_reaper_96",
  },
];

export function Contact() {
  const { ref, isVisible } = useScrollReveal();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form handling placeholder
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-6 transition-all duration-700 ${
          isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
          Contact
        </div>
        <h2 className="mb-12 text-balance text-3xl font-bold text-foreground md:text-4xl">
          {"Let's work together"}
        </h2>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact info */}
          <div>
            <p className="mb-8 leading-relaxed text-muted-foreground">
              I am always open to discussing new opportunities, interesting
              projects, or just connecting over tech. Feel free to reach out
              through any of the channels below or use the contact form.
            </p>

            <div className="mb-8 flex items-center gap-3 text-muted-foreground">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Punjab, India</span>
            </div>

            <div className="flex flex-col gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
                >
                  <social.icon className="h-5 w-5 text-primary" />
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-foreground">
                      {social.label}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {social.handle}
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 rounded-xl border border-border bg-card p-8"
          >
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={formState.name}
                onChange={(e) =>
                  setFormState({ ...formState, name: e.target.value })
                }
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={formState.email}
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                className="w-full resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Tell me about your project or opportunity..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
            >
              Send Message
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
