"use client"

import { motion } from "framer-motion"
import { AlertTriangle, Zap, ShieldCheck, TrendingUp } from "lucide-react"

const problems = [
  {
    icon: AlertTriangle,
    title: "Slow Dashboard Performance",
    description:
      "Your users are waiting 5+ seconds for data to load. Every second of delay costs you conversions and increases churn rates dramatically.",
  },
  {
    icon: TrendingUp,
    title: "Mounting Technical Debt",
    description:
      "Legacy React codebases with tangled state management, making every new feature a gamble that might break existing functionality.",
  },
  {
    icon: ShieldCheck,
    title: "Poor User Retention",
    description:
      "Clunky UI and sluggish interactions are pushing users to competitors. First impressions matter, and yours isn't cutting it.",
  },
]

const solutions = [
  {
    title: "Server Actions",
    description: "Eliminate client-side waterfalls with server-first data mutations that feel instant to your users.",
  },
  {
    title: "Partial Prerendering",
    description: "Serve a static shell instantly while streaming dynamic content, achieving sub-second perceived load times.",
  },
  {
    title: "React Server Components",
    description: "Ship zero JavaScript for read-only UI, reducing bundle sizes by up to 70% for data-heavy dashboards.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function ProblemSolutionSection() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Problem */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            {"The Problem"}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {"Your SaaS Frontend Is Holding You Back"}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            {"Most SaaS products lose users not because of bad ideas, but because of poor frontend execution. Sound familiar?"}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 grid gap-6 md:grid-cols-3"
        >
          {problems.map((problem) => (
            <motion.div
              key={problem.title}
              variants={itemVariants}
              className="group rounded-xl border border-border/50 bg-card p-6 transition-colors hover:border-primary/30"
            >
              <div className="flex size-10 items-center justify-center rounded-lg bg-destructive/10">
                <problem.icon className="size-5 text-destructive" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">{problem.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="my-20 flex items-center justify-center">
          <Zap className="size-8 text-primary" />
        </div>

        {/* Solution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            {"The Solution"}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {"Next.js 16 — Built for SaaS Scale"}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            {"I leverage the latest Next.js 16 features to build frontends that are fast by default and scalable by design."}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 grid gap-6 md:grid-cols-3"
        >
          {solutions.map((solution) => (
            <motion.div
              key={solution.title}
              variants={itemVariants}
              className="group rounded-xl border border-border/50 bg-card p-6 transition-colors hover:border-primary/30"
            >
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                <Zap className="size-5 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">{solution.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {solution.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
