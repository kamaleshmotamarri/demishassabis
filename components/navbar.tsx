"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const navLinks = [
  { label: "ABOUT", href: "#about" },
  { label: "MILESTONES", href: "#milestones" },
  { label: "RESEARCH", href: "#research" },
  { label: "ACHIEVEMENTS", href: "#achievements" },
  { label: "CONTACT", href: "#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [time, setTime] = useState("")

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      )
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-background/80 backdrop-blur-md border-b border-white/5 shadow-sm"
        : "bg-transparent"
        }`}
    >
      <div className="flex items-center justify-between px-6 py-4 lg:px-12">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 group-hover:scale-110 transition-transform duration-300">
            <Image
              src="/deepmindlogo.svg"
              alt="DeepMind Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="font-sans text-sm font-bold tracking-wide text-foreground/90 group-hover:text-primary transition-colors">
            DEMIS HASSABIS
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-sans text-xs font-medium tracking-wide text-muted-foreground hover:text-primary transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-primary after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Clock + Status */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-2 bg-secondary/30 px-3 py-1 rounded-full border border-white/5">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="font-sans text-[10px] font-bold text-muted-foreground tracking-wider">
              DEEPMIND RESEARCH
            </span>
          </div>
          <span className="font-mono text-xs text-muted-foreground tabular-nums opacity-50">
            {time || "--:--:--"}
          </span>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-white/10 shadow-2xl">
          <div className="flex flex-col px-6 py-6 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-sans text-sm font-medium tracking-wide text-muted-foreground hover:text-primary hover:bg-white/5 transition-all py-3 px-4 rounded-lg flex items-center gap-3"
                onClick={() => setIsOpen(false)}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                {link.label}
              </a>
            ))}
            <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-2 px-4">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow h-full" />
              <span className="font-sans text-xs font-bold text-muted-foreground tracking-wider">
                DEEPMIND RESEARCH
              </span>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
