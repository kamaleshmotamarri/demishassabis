"use client"

import { ArrowUpRight } from "lucide-react"

const links = [
  {
    label: "GOOGLE DEEPMIND",
    href: "https://deepmind.google/",
    description: "Official research lab",
  },
  {
    label: "GOOGLE SCHOLAR",
    href: "https://scholar.google.com/citations?user=2XRpnSMAAAAJ",
    description: "Publications & citations",
  },
  {
    label: "X / TWITTER",
    href: "https://x.com/demaboris",
    description: "@demaboris",
  },
  {
    label: "WIKIPEDIA",
    href: "https://en.wikipedia.org/wiki/Demis_Hassabis",
    description: "Full biography",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="relative py-32 px-6 lg:px-12 bg-gradient-to-t from-background to-secondary/20">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-6 mb-20">
          <div className="flex flex-col gap-1">
            <span className="font-sans text-xs font-bold text-primary tracking-widest uppercase">
              Get in Touch
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground">
              CONNECT
            </h2>
          </div>
          <div className="flex-1 h-px bg-border" />
          <span className="font-mono text-xs text-muted-foreground tracking-wider hidden md:block">
            LINKS & CONTACT
          </span>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left text */}
          <div className="lg:w-2/5 flex flex-col gap-8">
            <div className="glass-panel p-8 rounded-2xl border-l-4 border-l-primary">
              <p className="text-lg leading-relaxed text-foreground">
                For professional inquiries, research collaborations, and media
                requests, reach out through the official Google DeepMind
                channels.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Office</span>
                  <span className="text-sm font-medium">Google DeepMind, 6 Pancras Square, London</span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Role</span>
                  <span className="text-sm font-medium">Co-Founder & CEO, Google DeepMind</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right links */}
          <div className="lg:w-3/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {links.map((link, i) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col justify-between p-8 rounded-2xl glass-card hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 transition-all"
                >
                  <div className="flex justify-between items-start mb-6">
                    <span className="font-mono text-xs font-bold text-primary/50">0{i + 1}</span>
                    <ArrowUpRight
                      size={20}
                      className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {link.label}
                    </span>
                    <span className="text-xs font-medium text-muted-foreground">
                      {link.description}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
