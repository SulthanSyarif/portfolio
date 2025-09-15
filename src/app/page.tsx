import { Navigation } from "@/components/navigation"
import { HomeSection } from "@/components/sections/home-section"
import { AboutSection } from "@/components/sections/about-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { CareerSection } from "@/components/sections/career-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { CertificationsSection } from "@/components/sections/certifications-section"
import { ContactSection } from "@/components/sections/contact-section"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <CareerSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="bg-muted/50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2024 Your Name. Built with Next.js, Tailwind CSS, and Framer Motion.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
