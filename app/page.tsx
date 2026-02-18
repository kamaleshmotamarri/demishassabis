import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { StatsTicker } from "@/components/stats-ticker"
import { AboutSection } from "@/components/about-section"
import { MilestonesSection } from "@/components/milestones-section"
import { ResearchSection } from "@/components/research-section"
import { AchievementsSection } from "@/components/achievements-section"
import { PhilosophySection } from "@/components/philosophy-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <StatsTicker />
      <AboutSection />
      <MilestonesSection />
      <ResearchSection />
      <AchievementsSection />
      <PhilosophySection />
      <ContactSection />
      <Footer />
    </main>
  )
}
