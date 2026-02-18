"use client"

export function PhilosophySection() {
  return (
    <section className="relative py-32 px-6 lg:px-12 grid-overlay overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Large quote block */}
        <div className="flex flex-col items-center text-center gap-12">
          <span className="font-sans text-xs font-bold text-primary tracking-widest uppercase">
            Philosophy
          </span>

          <blockquote className="max-w-4xl">
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight text-balance">
              {'"'}The biggest scientific breakthroughs of the 21st century will
              be powered by AI. We are on the verge of the most exciting and
              transformative period in human history.{'"'}
            </p>
          </blockquote>

          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-px bg-primary" />
            <span className="font-mono text-sm text-muted-foreground tracking-wider">
              DEMIS HASSABIS
            </span>
          </div>

          {/* Principles grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 w-full mt-12">
            {[
              {
                number: "I",
                title: "SOLVE INTELLIGENCE",
                text: "Develop the most general and capable AI systems by combining insights from neuroscience, mathematics, and engineering.",
              },
              {
                number: "II",
                title: "ADVANCE SCIENCE",
                text: "Apply AI as a tool to accelerate scientific discovery, from protein folding to materials science to weather prediction.",
              },
              {
                number: "III",
                title: "BENEFIT HUMANITY",
                text: "Ensure AI is developed responsibly and its benefits are shared broadly, addressing global challenges from health to climate.",
              },
            ].map((principle, i) => (
              <div
                key={principle.number}
                className={`group p-10 border-2 border-border hover:border-primary transition-all ${i < 2 ? "md:-mr-0.5" : ""
                  }`}
              >
                <span className="text-5xl font-bold text-border group-hover:text-primary/20 transition-colors">
                  {principle.number}
                </span>
                <h3 className="font-mono text-sm font-bold tracking-wider text-foreground mt-6 mb-4">
                  {principle.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {principle.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
