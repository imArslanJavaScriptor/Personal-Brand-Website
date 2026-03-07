'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Gauge, Clock, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const categories = ['All', 'Landing Pages', 'Dashboards', 'SaaS Contributions']

const projects = [
  {
    id: 1,
    title: 'MetricFlow Analytics',
    category: 'Dashboards',
    image: '/projects/metricflow.jpg',
    description: 'A comprehensive analytics dashboard for a B2B SaaS platform, featuring real-time data visualization, custom reporting, and predictive insights powered by ML.',
    techStack: ['Next.js', 'TypeScript', 'Recharts', 'TailwindCSS', 'Prisma', 'PostgreSQL'],
    metrics: {
      lighthouse: 98,
      loadTime: '0.8s',
      conversion: '+45%',
    },
    color: 'from-blue-500/20 to-purple-500/20',
  },
  {
    id: 2,
    title: 'LaunchPad Pro',
    category: 'Landing Pages',
    image: '/projects/launchpad.jpg',
    description: 'High-converting landing page for a project management SaaS. Achieved 40% improvement in trial signups through strategic copy and UX optimization.',
    techStack: ['Next.js', 'Framer Motion', 'TailwindCSS', 'Vercel Edge'],
    metrics: {
      lighthouse: 100,
      loadTime: '0.4s',
      conversion: '+40%',
    },
    color: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    id: 3,
    title: 'DataPulse Dashboard',
    category: 'Dashboards',
    image: '/projects/datapulse.jpg',
    description: 'Enterprise-grade monitoring dashboard with real-time alerts, custom widgets, and collaborative features for DevOps teams.',
    techStack: ['React', 'D3.js', 'WebSockets', 'Node.js', 'Redis'],
    metrics: {
      lighthouse: 96,
      loadTime: '1.1s',
      conversion: '+35%',
    },
    color: 'from-orange-500/20 to-red-500/20',
  },
  {
    id: 4,
    title: 'ScaleStack',
    category: 'SaaS Contributions',
    image: '/projects/scalestack.jpg',
    description: 'Led frontend architecture for a Series A startup, implementing a design system and reducing bundle size by 60%.',
    techStack: ['React', 'Storybook', 'Webpack', 'Jest', 'Cypress'],
    metrics: {
      lighthouse: 95,
      loadTime: '0.9s',
      conversion: '+28%',
    },
    color: 'from-pink-500/20 to-rose-500/20',
  },
  {
    id: 5,
    title: 'CloudSync Landing',
    category: 'Landing Pages',
    image: '/projects/cloudsync.jpg',
    description: 'Minimalist yet powerful landing page for a cloud storage solution. Focus on trust signals and clear value proposition.',
    techStack: ['Next.js', 'GSAP', 'TailwindCSS', 'Contentful'],
    metrics: {
      lighthouse: 99,
      loadTime: '0.5s',
      conversion: '+52%',
    },
    color: 'from-cyan-500/20 to-blue-500/20',
  },
  {
    id: 6,
    title: 'InvoiceFlow',
    category: 'SaaS Contributions',
    image: '/projects/invoiceflow.jpg',
    description: 'Complete frontend rebuild for an invoicing platform. Improved user onboarding flow and reduced churn by 25%.',
    techStack: ['Vue.js', 'Vuex', 'TailwindCSS', 'Chart.js'],
    metrics: {
      lighthouse: 97,
      loadTime: '0.7s',
      conversion: '+38%',
    },
    color: 'from-violet-500/20 to-purple-500/20',
  },
]

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="portfolio" className="py-24 px-4 relative bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Portfolio</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance">
            Projects that
            <span className="gradient-text"> drive results</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            A selection of recent work showcasing high-performance frontends 
            that have helped SaaS companies scale.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card border border-border hover:border-primary/50 text-muted-foreground hover:text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div 
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                layoutId={`project-${project.id}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer"
              >
                <div className="relative h-64 rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300">
                  {/* Gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-50`} />
                  
                  {/* Project image placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-bold text-foreground/10">{project.title.charAt(0)}</div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-xs font-medium text-primary mb-2">{project.category}</span>
                    <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                  </div>

                  {/* Lighthouse badge */}
                  <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-background/80 backdrop-blur-sm border border-border text-xs font-medium flex items-center gap-1">
                    <Gauge className="h-3 w-3 text-primary" />
                    {project.metrics.lighthouse}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          >
            <motion.div
              layoutId={`project-${selectedProject.id}`}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-card border border-border rounded-2xl shadow-2xl"
            >
              {/* Modal header */}
              <div className={`relative h-48 bg-gradient-to-br ${selectedProject.color}`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-8xl font-bold text-foreground/10">{selectedProject.title.charAt(0)}</div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-background transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
                <div className="absolute bottom-4 left-6">
                  <span className="text-xs font-medium text-primary px-2 py-1 rounded-full bg-background/80 backdrop-blur-sm">
                    {selectedProject.category}
                  </span>
                </div>
              </div>

              {/* Modal content */}
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
                <p className="text-muted-foreground mb-6">{selectedProject.description}</p>

                {/* Tech stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span key={tech} className="px-3 py-1.5 rounded-full bg-secondary text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Performance metrics */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Performance Metrics</h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-secondary/50 text-center">
                      <Gauge className="h-5 w-5 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold gradient-text">{selectedProject.metrics.lighthouse}</div>
                      <div className="text-xs text-muted-foreground">Lighthouse</div>
                    </div>
                    <div className="p-4 rounded-xl bg-secondary/50 text-center">
                      <Clock className="h-5 w-5 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold gradient-text">{selectedProject.metrics.loadTime}</div>
                      <div className="text-xs text-muted-foreground">Load Time</div>
                    </div>
                    <div className="p-4 rounded-xl bg-secondary/50 text-center">
                      <Zap className="h-5 w-5 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold gradient-text">{selectedProject.metrics.conversion}</div>
                      <div className="text-xs text-muted-foreground">Conversion</div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
                  asChild
                >
                  <a href="#contact">
                    Discuss a Similar Project
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
