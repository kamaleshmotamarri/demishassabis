"use client"

const stats = [
  { label: "YEARS IN AI", value: "30+" },
  { label: "PUBLICATIONS", value: "200+" },
  { label: "CITATIONS", value: "130K+" },
  { label: "NATURE COVERS", value: "5" },
  { label: "AWARDS", value: "50+" },
  { label: "NOBEL PRIZE", value: "2024" },
  { label: "ALPHAFOLD PROTEINS", value: "200M+" },
  { label: "TEAM SIZE", value: "3000+" },
]

export function StatsTicker() {
  return (
    <div className="w-full border-y-2 border-border bg-secondary overflow-hidden py-4">
      <div className="flex animate-ticker whitespace-nowrap">
        {[...stats, ...stats].map((stat, i) => (
          <div key={i} className="flex items-center gap-8 mx-8 shrink-0">
            <span className="font-mono text-xs text-muted-foreground tracking-wider">
              {stat.label}
            </span>
            <span className="font-mono text-lg font-bold text-primary">
              {stat.value}
            </span>
            <span className="text-border" aria-hidden="true">|</span>
          </div>
        ))}
      </div>
    </div>
  )
}
