import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ProblemSolutionSection } from "@/components/problem-solution-section"
import { ServicesSection } from "@/components/services-section"
import { TechStackSection } from "@/components/tech-stack-section"
import { CaseStudySection } from "@/components/case-study-section"
import { FooterSection } from "@/components/footer-section"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSolutionSection />
        <ServicesSection />
        <TechStackSection />
        <CaseStudySection />
      </main>
      <FooterSection />
    </>
  )
}
