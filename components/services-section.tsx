"use client"

import { motion } from "framer-motion"
import { Rocket, RefreshCw, Gauge } from "lucide-react"

const services = [
  {
    icon: Rocket,
    title: "SaaS MVP Development",
    tagline: "From 0 to 1 in record time.",
    description:
      "Transform your validated idea into a production-ready SaaS product. I build lightning-fast MVPs with Next.js 16, ensuring your product hits the market before the window closes.",
    features: [
      "Full-stack Next.js architecture",
      "Auth, billing & dashboard setup",
      "Responsive, conversion-optimized UI",
      "Deployment-ready on Vercel",
    ],
  },
  {
    icon: RefreshCw,
    title: "Next.js Migration & Refactoring",
    tagline: "Scaling legacy React apps to Next.js 16.",
    description:
      "Struggling with a legacy Create React App or an outdated Next.js version? I'll modernize your codebase with Server Components, App Router, and cutting-edge patterns.",
    features: [
      "CRA to Next.js migration",
      "Pages Router to App Router upgrade",
      "State management modernization",
      "Zero-downtime transition plan",
    ],
  },
  {
    icon: Gauge,
    title: "Performance & UX Audit",
    tagline: "Identifying bottlenecks and boosting Core Web Vitals.",
    description:
      "Get a comprehensive audit of your SaaS frontend with actionable recommendations. I'll pinpoint exactly what's slowing you down and deliver a roadmap to fix it.",
    features: [
      "Core Web Vitals deep-dive",
      "Bundle size & load time analysis",
      "UX friction point mapping",
      "Prioritized optimization roadmap",
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function ServicesSection() {
  return (
    <section id="services" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            {"Services"}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {"The SaaS Trio"}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            {"Three specialized services designed to take your SaaS frontend from friction to flow."}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid gap-8 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group flex flex-col rounded-xl border border-border/50 bg-card p-8 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
                <service.icon className="size-6 text-primary" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-foreground">{service.title}</h3>
              <p className="mt-1 text-sm font-medium text-primary">{service.tagline}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>

              <ul className="mt-6 flex flex-col gap-2.5">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1 block size-1.5 shrink-0 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
