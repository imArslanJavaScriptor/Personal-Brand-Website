"use client"

import { motion } from "framer-motion"

const technologies = [
  {
    name: "React",
    description: "UI Library",
    color: "from-[#61DAFB]/20 to-[#61DAFB]/5",
    textColor: "text-[#61DAFB]",
  },
  {
    name: "Next.js",
    description: "React Framework",
    color: "from-foreground/20 to-foreground/5",
    textColor: "text-foreground",
  },
  {
    name: "TypeScript",
    description: "Type Safety",
    color: "from-[#3178C6]/20 to-[#3178C6]/5",
    textColor: "text-[#3178C6]",
  },
  {
    name: "Tailwind CSS",
    description: "Utility-First CSS",
    color: "from-[#06B6D4]/20 to-[#06B6D4]/5",
    textColor: "text-[#06B6D4]",
  },
  {
    name: "Zustand",
    description: "State Management",
    color: "from-[#F59E0B]/20 to-[#F59E0B]/5",
    textColor: "text-[#F59E0B]",
  },
  {
    name: "React Query",
    description: "Server State",
    color: "from-[#EF4444]/20 to-[#EF4444]/5",
    textColor: "text-[#EF4444]",
  },
  {
    name: "Framer Motion",
    description: "Animations",
    color: "from-[#A855F7]/20 to-[#A855F7]/5",
    textColor: "text-[#A855F7]",
  },
  {
    name: "Vercel",
    description: "Deployment",
    color: "from-foreground/20 to-foreground/5",
    textColor: "text-foreground",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
}

export function TechStackSection() {
  return (
    <section id="tech-stack" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            {"Tech Stack"}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {"Tools I Work With"}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            {"A modern, battle-tested stack optimized for SaaS products that need to ship fast and scale gracefully."}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group cursor-default rounded-xl border border-border/50 bg-card p-6 transition-colors hover:border-primary/30"
            >
              <div className={`inline-flex rounded-lg bg-gradient-to-br ${tech.color} px-3 py-1.5`}>
                <span className={`text-xs font-semibold ${tech.textColor}`}>{tech.name}</span>
              </div>
              <p className="mt-3 text-sm font-medium text-foreground">{tech.name}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{tech.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
