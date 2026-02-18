"use client"

import { ExternalLink } from "lucide-react"
import Image from "next/image"

const breakthroughs = [
  {
    id: "01",
    name: "AlphaGo",
    year: "2016",
    category: "REINFORCEMENT LEARNING",
    impact:
      "First AI system to defeat a world champion at the ancient game of Go. Achieved a feat many experts thought was at least a decade away.",
    metrics: [
      { label: "ELO Rating", value: "5,185" },
      { label: "Win Rate vs. Pros", value: "99.8%" },
      { label: "Viewers Worldwide", value: "200M+" },
    ],
    color: "bg-primary",
  },
  {
    id: "02",
    name: "AlphaFold",
    year: "2020",
    category: "STRUCTURAL BIOLOGY",
    impact:
      "Solved the 50-year-old protein folding problem with atomic accuracy. Predicted structures for nearly all known proteins, accelerating drug discovery globally.",
    metrics: [
      { label: "Proteins Predicted", value: "200M+" },
      { label: "GDT Score", value: "92.4" },
      { label: "Researchers Using", value: "2M+" },
    ],
    color: "bg-primary",
  },
  {
    id: "03",
    name: "AlphaStar",
    year: "2019",
    category: "MULTI-AGENT AI",
    impact:
      "Achieved Grandmaster level in StarCraft II, mastering one of the most complex real-time strategy games with imperfect information.",
    metrics: [
      { label: "Ranking", value: "Grandmaster" },
      { label: "APM", value: "~280" },
      { label: "Win Rate", value: "99.8%" },
    ],
    color: "bg-primary",
  },
  {
    id: "04",
    name: "Gemini",
    year: "2023",
    category: "MULTIMODAL AI",
    impact:
      "Google DeepMind's most capable and general AI model, natively multimodal across text, image, audio, video and code. Powers Google's next generation of products.",
    metrics: [
      { label: "Modalities", value: "5+" },
      { label: "MMLU Score", value: "90.0%" },
      { label: "Languages", value: "40+" },
    ],
    color: "bg-primary",
  },
  {
    id: "05",
    name: "GraphCast",
    year: "2023",
    category: "WEATHER PREDICTION",
    impact:
      "AI weather forecasting system that outperforms traditional numerical methods. Produces 10-day forecasts in under a minute with higher accuracy.",
    metrics: [
      { label: "Forecast Range", value: "10 days" },
      { label: "Speed", value: "<60 sec" },
      { label: "Accuracy vs. HRES", value: "+10%" },
    ],
    color: "bg-primary",
  },
  {
    id: "06",
    name: "GNoME",
    year: "2023",
    category: "MATERIALS SCIENCE",
    impact:
      "Discovered 2.2 million new crystal structures, equivalent to 800 years of knowledge, massively accelerating materials science research.",
    metrics: [
      { label: "New Crystals", value: "2.2M" },
      { label: "Stable Materials", value: "380K" },
      { label: "Knowledge Equiv.", value: "800 yrs" },
    ],
    color: "bg-primary",
  },
]

export function ResearchSection() {
  return (
    <section id="research" className="relative py-32 px-6 lg:px-12 grid-overlay">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-6 mb-20">
          <div className="flex flex-col gap-1">
            <span className="font-sans text-xs font-bold text-primary tracking-widest uppercase">
              Breakthroughs
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground">
              RESEARCH
            </h2>
          </div>
          <div className="flex-1 h-px bg-border" />
          <span className="font-mono text-xs text-muted-foreground tracking-wider hidden md:block">
            KEY BREAKTHROUGHS
          </span>
        </div>

        {/* Research cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {breakthroughs.map((item, i) => (
            <div
              key={item.id}
              className="group border-2 border-border hover:border-primary transition-all duration-300 relative overflow-hidden"
              style={{
                marginRight: i % 3 < 2 ? "-2px" : "0",
                marginBottom: i < 3 ? "-2px" : "0",
              }}
            >
              {/* Top bar */}
              <div className="flex items-center justify-between px-6 py-3 border-b-2 border-border bg-secondary">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-primary font-bold">
                    {item.id}
                  </span>
                  <span className="w-px h-4 bg-border" />
                  <span className="font-mono text-xs text-muted-foreground tracking-wider">
                    {item.category}
                  </span>
                </div>
                <span className="font-mono text-xs text-muted-foreground">
                  {item.year}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold tracking-tight text-foreground">
                    {item.name}
                  </h3>
                  <ExternalLink
                    size={16}
                    className="text-muted-foreground group-hover:text-primary transition-colors"
                  />
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.impact}
                </p>

                {/* Metrics */}
                <div className="flex flex-col gap-3 mt-2 pt-4 border-t border-border">
                  {item.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="flex items-center justify-between"
                    >
                      <span className="font-mono text-xs text-muted-foreground tracking-wider">
                        {metric.label}
                      </span>
                      <span className="font-mono text-sm font-bold text-primary">
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom accent */}
              <div className="h-1 w-0 bg-primary group-hover:w-full transition-all duration-700" />
            </div>
          ))}
        </div>

        {/* Image Showcase */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { src: "/alphago.png", alt: "AlphaGo Match", label: "AlphaGo" },
            { src: "/alphafold.png", alt: "Protein Structure", label: "AlphaFold" },
            { src: "/gemini.png", alt: "Gemini Model", label: "Gemini" }
          ].map((img, i) => (
            <div key={i} className="group relative rounded-2xl overflow-hidden aspect-video border border-white/10 shadow-2xl">
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10" />
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent z-20">
                <span className="font-sans text-sm font-bold text-white tracking-wide">{img.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
