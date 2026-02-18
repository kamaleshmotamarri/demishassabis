"use client"

import { ArrowUp } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative border-t-2 border-border bg-background px-6 lg:px-12 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Left */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-primary" />
              <span className="font-mono text-sm font-bold tracking-widest text-foreground">
                DEMIS HASSABIS
              </span>
            </div>
            <p className="font-mono text-xs text-muted-foreground max-w-md">
              Co-Founder & CEO, Google DeepMind. This portfolio is an
              informational tribute and is not officially affiliated with Google
              or DeepMind.
            </p>
          </div>

          {/* Right */}
          <div className="flex items-center gap-8">
            <span className="font-mono text-xs text-muted-foreground">
              2024
            </span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
              aria-label="Scroll to top"
            >
              BACK TO TOP
              <ArrowUp
                size={14}
                className="group-hover:-translate-y-1 transition-transform"
              />
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border flex items-center justify-between">
          <span className="font-sans text-xs text-muted-foreground font-medium">
            © 2024 DEMIS HASSABIS portfolio website
          </span>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary animate-pulse-glow" />
            <span className="font-sans text-xs font-medium text-muted-foreground">
              DEEPMIND RESEARCH
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
