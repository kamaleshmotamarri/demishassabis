"use client"

import { useEffect, useRef, useState } from "react"

const milestones = [
  {
    year: "1994",
    title: "THEME PARK",
    subtitle: "Bullfrog Productions",
    description:
      "At age 17, served as lead programmer on the hit game Theme Park, working alongside legendary designer Peter Molyneux. The game sold millions of copies worldwide.",
    tag: "GAMES",
  },
  {
    year: "1997",
    title: "CAMBRIDGE",
    subtitle: "Computer Science",
    description:
      "Graduated with a double first in Computer Science from Queens' College, University of Cambridge, one of the top programs in the world.",
    tag: "EDUCATION",
  },
  {
    year: "1998",
    title: "ELIXIR STUDIOS",
    subtitle: "London, UK",
    description:
      "Founded independent games developer Elixir Studios. Created ambitious simulation games like Republic: The Revolution and Evil Genius, growing the team to 60 people.",
    tag: "ENTREPRENEURSHIP",
  },
  {
    year: "2009",
    title: "PHD NEUROSCIENCE",
    subtitle: "University College London",
    description:
      "Completed doctoral research on the neural mechanisms of imagination and episodic memory, publishing landmark papers in Science and PNAS.",
    tag: "SCIENCE",
  },
  {
    year: "2010",
    title: "DEEPMIND FOUNDED",
    subtitle: "London, UK",
    description:
      "Co-founded DeepMind Technologies with Shane Legg and Mustafa Suleyman, with the mission to 'solve intelligence, and then use that to solve everything else.'",
    tag: "COMPANY",
  },
  {
    year: "2014",
    title: "GOOGLE ACQUISITION",
    subtitle: "$500M+ Deal",
    description:
      "Google acquired DeepMind in one of the largest European AI acquisitions ever. DeepMind became the cornerstone of Google's AI research efforts.",
    tag: "BUSINESS",
  },
  {
    year: "2016",
    title: "ALPHAGO",
    subtitle: "Defeats Lee Sedol",
    description:
      "AlphaGo defeated world champion Lee Sedol 4-1 in Go, a feat previously thought decades away. Watched by 200 million people worldwide, it became a defining moment in AI history.",
    tag: "BREAKTHROUGH",
  },
  {
    year: "2017",
    title: "ALPHAZERO",
    subtitle: "General Game Playing",
    description:
      "Developed AlphaZero, a single system that taught itself from scratch to master Chess, Shogi, and Go, beating world-champion programs in all three.",
    tag: "BREAKTHROUGH",
  },
  {
    year: "2020",
    title: "ALPHAFOLD 2",
    subtitle: "Protein Structure Solved",
    description:
      "AlphaFold 2 solved the 50-year-old protein folding problem with atomic accuracy, recognized as a 'once-in-a-generation advance' by the scientific community.",
    tag: "BREAKTHROUGH",
  },
  {
    year: "2021",
    title: "ISOMORPHIC LABS",
    subtitle: "Digital Biology",
    description:
      "Launched a new Alphabet company dedicated to reimagining the entire drug discovery process from first principles with an AI-first approach.",
    tag: "ENTREPRENEURSHIP",
  },
  {
    year: "2023",
    title: "GOOGLE DEEPMIND",
    subtitle: "Unified AI Lab",
    description:
      "Appointed CEO of the newly formed Google DeepMind, merging DeepMind and Google Brain into a single, world-leading AI research organization of 3,000+ people.",
    tag: "LEADERSHIP",
  },
  {
    year: "2023",
    title: "GEMINI",
    subtitle: "Native Multimodal AI",
    description:
      "Unveiled Gemini, Google's most capable and general model, built from the ground up to be multimodal. Powers the next generation of Google products.",
    tag: "BREAKTHROUGH",
  },
  {
    year: "2024",
    title: "NOBEL PRIZE",
    subtitle: "Chemistry",
    description:
      "Awarded the Nobel Prize in Chemistry alongside John Jumper for the development of AlphaFold, recognizing the transformative impact of AI on structural biology.",
    tag: "AWARD",
  },
]

function MilestoneCard({
  milestone,
  index,
  isVisible,
}: {
  milestone: (typeof milestones)[0]
  index: number
  isVisible: boolean
}) {
  const isLeft = index % 2 === 0

  return (
    <div
      className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-0 transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Left content */}
      <div
        className={`lg:w-5/12 ${isLeft ? "lg:text-right lg:pr-12" : "lg:order-3 lg:pl-12"}`}
      >
        <div
          className={`flex flex-col gap-4 relative group ${isLeft ? "lg:items-end" : "lg:items-start"}`}
        >
          <div className={`absolute top-4 ${isLeft ? "-right-14" : "-left-14"} hidden lg:block w-20 h-px bg-gradient-to-r from-primary/50 to-transparent`} />

          <div className="glass-card hover:bg-card/80 p-8 rounded-2xl shadow-lg hover:shadow-primary/10 transition-all border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary/20 group-hover:bg-primary transition-colors" />

            <span className="font-mono text-xs font-bold tracking-wider text-primary/80 mb-3 block">
              {milestone.tag}
            </span>
            <h3 className="text-2xl font-bold tracking-tight text-foreground mb-2 group-hover:text-primary transition-colors">
              {milestone.title}
            </h3>
            <p className="font-medium text-sm text-primary mb-4">
              {milestone.subtitle}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {milestone.description}
            </p>
          </div>
        </div>
      </div>

      {/* Center timeline */}
      <div className="hidden lg:flex lg:w-2/12 flex-col items-center justify-center relative z-10">
        <div className="w-12 h-12 rounded-full border-2 border-primary/20 bg-background flex items-center justify-center group-hover:border-primary transition-all shadow-glow z-20 relative">
          <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
        </div>
      </div>

      {/* Year Display (Opposite Content) */}
      <div className={`hidden lg:flex lg:w-5/12 items-center ${isLeft ? "lg:order-3 lg:pl-12 justify-start" : "lg:pr-12 justify-end"}`}>
        <span className="text-8xl font-bold text-white/5 tracking-tighter select-none transition-colors duration-700 group-hover:text-primary/10">
          {milestone.year}
        </span>
      </div>

      {/* Mobile year */}
      <div className="lg:hidden flex items-center gap-4 w-full">
        <span className="text-3xl font-bold text-primary opacity-50">
          {milestone.year}
        </span>
        <div className="h-px flex-1 bg-border" />
      </div>


    </div>
  )
}

export function MilestonesSection() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"))
            setVisibleItems((prev) => new Set(prev).add(index))
          }
        })
      },
      { threshold: 0.2 }
    )

    const items = sectionRef.current?.querySelectorAll("[data-index]")
    items?.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="milestones"
      className="relative py-32 px-6 lg:px-12 overflow-hidden"
      ref={sectionRef}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="flex items-center gap-6 mb-24">
          <div className="flex flex-col gap-2">
            <span className="font-sans text-xs font-bold text-primary tracking-widest uppercase bg-primary/10 px-3 py-1 rounded-full w-fit">
              Trajectory
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground">
              MILESTONES
            </h2>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-primary/20 to-transparent" />
          <span className="font-sans text-xs font-medium text-muted-foreground tracking-wider hidden md:block border border-border px-4 py-2 rounded-full">
            1994 — PRESENT
          </span>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line with gradient */}
          <div
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent -translate-x-1/2"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-24">
            {milestones.map((milestone, i) => (
              <div key={milestone.title} data-index={i}>
                <MilestoneCard
                  milestone={milestone}
                  index={i}
                  isVisible={visibleItems.has(i)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
