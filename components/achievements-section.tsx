"use client"

import { Award, Crown, Star, BookOpen } from "lucide-react"

const awards = [
  {
    year: "2024",
    title: "Nobel Prize in Chemistry",
    org: "Royal Swedish Academy of Sciences",
    highlight: true,
  },
  {
    year: "2024",
    title: "Time 100 Most Influential People",
    org: "Time Magazine",
    highlight: false,
  },
  {
    year: "2023",
    title: "Lasker Award",
    org: "Albert and Mary Lasker Foundation",
    highlight: true,
  },
  {
    year: "2023",
    title: "Breakthrough Prize in Life Sciences",
    org: "Breakthrough Prize Foundation",
    highlight: true,
  },
  {
    year: "2022",
    title: "Princess of Asturias Award",
    org: "Princess of Asturias Foundation",
    highlight: false,
  },
  {
    year: "2018",
    title: "Commander of the Order of the British Empire",
    org: "United Kingdom",
    highlight: true,
  },
  {
    year: "2017",
    title: "Royal Society Fellow",
    org: "The Royal Society",
    highlight: false,
  },
  {
    year: "2017",
    title: "Time 100 Most Influential People",
    org: "Time Magazine",
    highlight: false,
  },
]

const publications = [
  {
    title: "Highly accurate protein structure prediction with AlphaFold",
    journal: "Nature",
    year: "2021",
    citations: "30,000+",
  },
  {
    title: "Mastering the game of Go with deep neural networks and tree search",
    journal: "Nature",
    year: "2016",
    citations: "18,000+",
  },
  {
    title: "Human-level control through deep reinforcement learning",
    journal: "Nature",
    year: "2015",
    citations: "25,000+",
  },
  {
    title: "Mastering the game of Go without human knowledge",
    journal: "Nature",
    year: "2017",
    citations: "12,000+",
  },
]

export function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="relative py-32 px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-6 mb-20">
          <div className="flex flex-col gap-1">
            <span className="font-sans text-xs font-bold text-primary tracking-widest uppercase">
              Recognition
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground">
              ACHIEVEMENTS
            </h2>
          </div>
          <div className="flex-1 h-px bg-border" />
          <span className="font-mono text-xs text-muted-foreground tracking-wider hidden md:block">
            HONORS & PUBLICATIONS
          </span>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Awards column */}
          <div className="lg:w-1/2">
            <div className="flex items-center gap-3 mb-8">
              <Award size={20} className="text-primary" strokeWidth={1.5} />
              <h3 className="font-mono text-sm font-bold tracking-wider text-foreground">
                SELECTED AWARDS
              </h3>
            </div>

            <div className="flex flex-col gap-4">
              {awards.map((award, i) => (
                <div
                  key={i}
                  className={`group flex items-center gap-6 p-6 rounded-2xl border border-white/5 transition-all duration-300 hover:border-primary/30 hover:shadow-lg ${award.highlight ? "bg-primary/5 border-primary/20" : "bg-card/30"
                    }`}
                >
                  <span className="font-mono text-sm text-primary/80 font-bold min-w-[50px]">
                    {award.year}
                  </span>

                  <div className="flex flex-col gap-1 flex-1">
                    <span className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                      {award.title}
                    </span>
                    <span className="text-xs text-muted-foreground font-medium">
                      {award.org}
                    </span>
                  </div>

                  {award.highlight && (
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Crown size={14} strokeWidth={2} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Publications column */}
          <div className="lg:w-1/2">
            <div className="flex items-center gap-3 mb-8">
              <BookOpen size={20} className="text-primary" strokeWidth={1.5} />
              <h3 className="font-mono text-sm font-bold tracking-wider text-foreground">
                KEY PUBLICATIONS
              </h3>
            </div>

            <div className="flex flex-col gap-6">
              {publications.map((pub, i) => (
                <div
                  key={i}
                  className="glass-card p-6 rounded-2xl group hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h4 className="text-base font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                      {pub.title}
                    </h4>
                    <Star
                      size={16}
                      className="text-muted-foreground/30 group-hover:text-primary transition-colors shrink-0"
                      fill="currentColor"
                      strokeWidth={0}
                    />
                  </div>

                  <div className="flex items-center gap-3 text-xs font-medium text-muted-foreground bg-secondary/30 w-fit px-3 py-1.5 rounded-full">
                    <span className="text-primary">{pub.journal}</span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span>{pub.year}</span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span className="text-foreground">
                      {pub.citations} citations
                    </span>
                  </div>

                  {/* Citation bar */}
                  <div className="mt-5 h-1.5 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-blue-400 rounded-full transition-all duration-1000 group-hover:shadow-[0_0_10px_rgba(66,133,244,0.5)]"
                      style={{
                        width: `${Math.min(
                          100,
                          (parseInt(pub.citations.replace(/[^0-9]/g, "")) /
                            30000) *
                          100
                        )}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Total citations callout */}
            <div className="mt-8 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full -mr-10 -mt-10" />

              <div className="flex items-center justify-between relative z-10">
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-bold text-primary tracking-widest uppercase">
                    Total Career Citations
                  </span>
                  <span className="text-4xl font-bold text-foreground tracking-tight">
                    130,000+
                  </span>
                </div>
                <div className="h-10 w-px bg-primary/20" />
                <div className="flex flex-col gap-2 text-right">
                  <span className="text-xs font-bold text-primary tracking-widest uppercase">
                    h-index
                  </span>
                  <span className="text-4xl font-bold text-foreground tracking-tight">85+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
