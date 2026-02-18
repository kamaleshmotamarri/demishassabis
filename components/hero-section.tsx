"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    // Create particles
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.1,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(66, 133, 244, ${p.opacity})`
        ctx.fill()

        // Draw connections
        particles.slice(i + 1).forEach((p2) => {
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y)
          if (dist < 150) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(66, 133, 244, ${0.05 * (1 - dist / 150)})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        })
      })

      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-overlay">
      {/* Neural network canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        aria-hidden="true"
      />

      {/* Scan line effect */}
      <div
        className="absolute left-0 right-0 h-px bg-primary/10 z-10 pointer-events-none animate-scan"
        aria-hidden="true"
      />

      <div className="relative z-20 w-full px-6 lg:px-12 py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-7xl mx-auto">
          {/* Left content */}
          <div className="flex-1 flex flex-col gap-8">
            {/* Status bar */}
            <div className="flex items-center gap-4 font-mono text-xs text-muted-foreground">
              <span className="text-primary">{">"}</span>
              <span className="tracking-widest">GOOGLE DEEPMIND</span>
              <span className="w-8 h-px bg-border" />
              <span className={`transition-opacity duration-1000 ${mounted ? "opacity-100" : "opacity-0"}`}>
                LONDON / MOUNTAIN VIEW
              </span>
            </div>

            {/* Main heading */}
            <div className="flex flex-col gap-2">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground leading-none">
                DEMIS
              </h1>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none">
                <span className="text-primary">HASSABIS</span>
              </h1>
            </div>

            {/* Subtitle with typing effect */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap gap-3">
                {["AI PIONEER", "NEUROSCIENTIST", "NOBEL LAUREATE"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs tracking-wider px-3 py-1.5 border-2 border-border text-muted-foreground hover:border-primary hover:text-primary transition-all cursor-default"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
              <p className="font-mono text-sm text-muted-foreground max-w-lg leading-relaxed mt-4">
                Co-Founder & CEO of Google DeepMind. Building artificial
                general intelligence to advance scientific discovery and
                benefit humanity.
              </p>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-6 mt-4">
              <a
                href="#about"
                className="group flex items-center gap-3 bg-primary text-primary-foreground font-mono text-sm font-bold px-6 py-3 border-2 border-primary hover:bg-transparent hover:text-primary transition-all"
              >
                EXPLORE WORK
                <ArrowDown
                  size={16}
                  className="group-hover:translate-y-1 transition-transform"
                />
              </a>
              <a
                href="#contact"
                className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors border-b border-muted-foreground hover:border-primary pb-1"
              >
                GET IN TOUCH
              </a>
            </div>
          </div>

          {/* Right: Portrait */}
          <div className="relative flex-shrink-0">
            <div className="relative w-72 h-96 md:w-80 md:h-[28rem] lg:w-96 lg:h-[32rem] border border-primary/20 bg-secondary/30 backdrop-blur-sm overflow-hidden group shadow-2xl shadow-primary/10">
              <Image
                src="/demis.webp"
                alt="Portrait of Demis Hassabis"
                fill
                className="object-cover group-hover:scale-105 transition-all duration-700"
                priority
              />
              {/* Overlay scan lines */}
              <div
                className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.03)_2px,rgba(0,0,0,0.03)_4px)] pointer-events-none"
                aria-hidden="true"
              />
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary" />
            </div>
            {/* Floating label */}
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground font-sans text-xs font-bold px-4 py-2 tracking-wider shadow-lg">
              CEO & CO-FOUNDER
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20">
        <span className="font-mono text-xs text-muted-foreground tracking-wider">
          SCROLL
        </span>
        <div className="w-px h-8 bg-border relative overflow-hidden">
          <div className="w-full h-4 bg-primary absolute animate-scan" />
        </div>
      </div>
    </section>
  )
}
