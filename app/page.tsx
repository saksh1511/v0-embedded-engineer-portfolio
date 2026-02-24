import { NavHeader } from "@/components/portfolio/nav-header"
import { HeroSection } from "@/components/portfolio/hero-section"
import { ExperienceSection } from "@/components/portfolio/experience-section"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { CertificationsSection } from "@/components/portfolio/certifications-section"
import { AchievementsSection } from "@/components/portfolio/achievements-section"
import { EducationSection } from "@/components/portfolio/education-section"
import { CVSection } from "@/components/portfolio/cv-section"
import { ContactSection } from "@/components/portfolio/contact-section"
import { Footer } from "@/components/portfolio/footer"
import { FloatingBackground } from "@/components/portfolio/floating-background"

export default function Home() {
  return (
    <div className="relative min-h-screen scroll-smooth">
      <FloatingBackground />
      <div className="relative z-10">
        <NavHeader />
        <main>
          <HeroSection />
          <ExperienceSection />
          <ProjectsSection />
          <CertificationsSection />
          <AchievementsSection />
          <EducationSection />
          <CVSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}
