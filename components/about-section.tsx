"use client"

import { Brain, Atom, Gamepad2, GraduationCap } from "lucide-react"

const domains = [
  {
    icon: Brain,
    title: "ARTIFICIAL INTELLIGENCE",
    description:
      "Pioneering the development of artificial general intelligence through groundbreaking systems like AlphaGo, AlphaFold, and Gemini.",
  },
  {
    icon: Atom,
    title: "NEUROSCIENCE",
    description:
      "PhD in cognitive neuroscience from UCL, studying the neural basis of imagination and memory in the hippocampus.",
  },
  {
    icon: Gamepad2,
    title: "GAME DESIGN",
    description:
      "Lead programmer on Theme Park at age 17 under Peter Molyneux. Founded Elixir Studios, creating innovative strategy games.",
  },
  {
    icon: GraduationCap,
    title: "SCIENTIFIC LEADERSHIP",
    description:
      "Leading a team of 3,000+ researchers at Google DeepMind to solve intelligence and use it to advance science and humanity.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="relative py-32 px-6 lg:px-12 grid-overlay">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-6 mb-20">
          <div className="flex flex-col gap-1">
            <span className="font-sans text-xs font-bold text-primary tracking-widest uppercase">
              The Visionary
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground">
              ABOUT
            </h2>
          </div>
          <div className="flex-1 h-px bg-border" />
          <span className="font-mono text-xs text-muted-foreground tracking-wider hidden md:block">
            BIOGRAPHY & EXPERTISE
          </span>
        </div>

        {/* Content grid */}
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Bio text */}
          <div className="lg:w-2/5 flex flex-col gap-8">
            <div className="border-l-2 border-primary pl-6">
              <p className="text-lg leading-relaxed text-foreground">
                Demis Hassabis is a British artificial intelligence researcher,
                neuroscientist, and entrepreneur. As co-founder and CEO of
                Google DeepMind, he leads one of the world's most ambitious
                efforts to develop safe, beneficial artificial general
                intelligence.
              </p>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              A child chess prodigy who reached master standard at age 13,
              Hassabis went on to study computer science at Cambridge, earn a
              PhD in cognitive neuroscience from University College London, and
              conduct pioneering research on memory and imagination. He co-founded
              DeepMind in 2010, which was acquired by Google in 2014 for a
              reported $500 million.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              His work has led to transformative breakthroughs including AlphaGo,
              the first AI to defeat a world champion at Go, and AlphaFold,
              which solved the 50-year-old protein folding problem. In 2024,
              he was awarded the Nobel Prize in Chemistry for his contributions
              to protein structure prediction.
            </p>

            {/* Quick data */}
            <div className="flex flex-col gap-4 mt-4">
              {[
                { label: "BORN", value: "July 27, 1976 -- London, UK" },
                { label: "EDUCATION", value: "Cambridge, UCL, Harvard" },
                { label: "ROLE", value: "CEO, Google DeepMind" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 font-mono text-sm"
                >
                  <span className="text-primary tracking-wider min-w-[100px]">
                    {item.label}
                  </span>
                  <span className="text-muted-foreground">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Domains grid */}
          <div className="lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-0">
            {domains.map((domain, i) => (
              <div
                key={domain.title}
                className={`group p-8 border-2 border-border hover:border-primary transition-all duration-300 relative ${i % 2 === 0 ? "md:-mr-px" : ""
                  } ${i < 2 ? "-mb-px" : ""}`}
              >
                {/* Index number */}
                <span className="absolute top-4 right-4 font-sans text-xs font-bold text-muted-foreground/30">
                  0{i + 1}
                </span>

                <domain.icon
                  size={28}
                  className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300"
                  strokeWidth={1.5}
                />
                <h3 className="font-mono text-sm font-bold tracking-wider text-foreground mb-3">
                  {domain.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {domain.description}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
