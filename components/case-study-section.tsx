"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface CaseStudy {
  title: string
  category: string
  challenge: string
  solution: string
  impact: string[]
  technologies: string[]
}

const caseStudies: CaseStudy[] = [
  {
    title: "Analytics Dashboard for FinTech Startup",
    category: "SaaS MVP",
    challenge:
      "The client needed a real-time analytics dashboard that could handle 50K+ data points without performance degradation. Their existing solution was built with Create React App and took 8+ seconds to load.",
    solution:
      "Built a streaming-first dashboard with Next.js 16 Server Components and Partial Prerendering. Implemented virtualized data tables and optimistic UI updates using Server Actions.",
    impact: [
      "Load time reduced from 8s to 1.2s",
      "40% increase in daily active users",
      "Zero client-side JavaScript for static panels",
    ],
    technologies: ["Next.js 16", "TypeScript", "Tailwind CSS", "React Query"],
  },
  {
    title: "E-Commerce SaaS Platform Migration",
    category: "Migration",
    challenge:
      "A growing e-commerce platform was running on Next.js 12 with Pages Router. The codebase had accumulated significant technical debt, and new features were taking 3x longer to implement.",
    solution:
      "Executed a phased migration to Next.js 16 App Router with zero downtime. Refactored state management from Redux to Zustand and implemented granular caching strategies.",
    impact: [
      "Bundle size reduced by 65%",
      "Feature deployment time cut by 60%",
      "Core Web Vitals: all green scores",
    ],
    technologies: ["Next.js 16", "Zustand", "Server Actions", "Vercel"],
  },
  {
    title: "Healthcare SaaS UX Overhaul",
    category: "Performance Audit",
    challenge:
      "A healthcare SaaS product had a user retention problem, with 35% of users dropping off during onboarding. The UI was cluttered and the application felt sluggish on mobile devices.",
    solution:
      "Conducted a comprehensive UX and performance audit. Redesigned the onboarding flow, optimized images with next/image, and implemented progressive loading patterns.",
    impact: [
      "Onboarding completion up by 52%",
      "Mobile performance score: 38 to 94",
      "User retention improved by 28%",
    ],
    technologies: ["Next.js 16", "Framer Motion", "Tailwind CSS", "Radix UI"],
  },
]

function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group rounded-xl border border-border/50 bg-card transition-all hover:border-primary/30"
    >
      <div className="p-8">
        <div className="flex items-start justify-between">
          <Badge variant="outline" className="border-primary/30 text-primary">
            {study.category}
          </Badge>
          <ArrowUpRight className="size-5 text-muted-foreground transition-colors group-hover:text-primary" />
        </div>

        <h3 className="mt-4 text-xl font-bold text-foreground">{study.title}</h3>

        <div className="mt-6 flex flex-col gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              {"The Challenge"}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {study.challenge}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              {"The Tech Solution"}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {study.solution}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              {"The Business Impact"}
            </p>
            <ul className="mt-2 flex flex-col gap-2">
              {study.impact.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                  <span className="mt-1.5 block size-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {study.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function CaseStudySection() {
  return (
    <section id="case-studies" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            {"Case Studies"}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {"Results That Speak for Themselves"}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            {"Every project is an opportunity to deliver measurable business impact. Here's a look at recent wins."}
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.title} study={study} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
