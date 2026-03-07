'use client'

import { motion } from 'framer-motion'
import { Zap, BarChart3, Users, ArrowUpRight, Check } from 'lucide-react'

const services = [
  {
    icon: Zap,
    title: 'Lightning-Fast SaaS Landing Pages',
    description: 'High-converting landing pages optimized for speed and performance. Every millisecond counts when it comes to user acquisition.',
    features: [
      'Sub-second load times',
      'Mobile-first responsive design',
      'A/B testing ready',
      'SEO optimized structure',
      'Conversion-focused CTAs',
    ],
    highlight: '95+ Lighthouse Score',
  },
  {
    icon: BarChart3,
    title: 'Scalable Analytics Dashboards',
    description: 'Transform complex data into intuitive visualizations that empower your users to make data-driven decisions instantly.',
    features: [
      'Real-time data visualization',
      'Custom chart components',
      'Drag-and-drop layouts',
      'Export & reporting tools',
      'Role-based access views',
    ],
    highlight: 'Data Visualization Expert',
  },
  {
    icon: Users,
    title: 'Fractional Frontend Lead',
    description: 'Need senior frontend expertise without the full-time commitment? I embed with your team to architect and scale your UI.',
    features: [
      'Technical architecture',
      'Code review & mentoring',
      'Performance optimization',
      'Design system creation',
      'Team process improvement',
    ],
    highlight: 'Startup-Ready',
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Services</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance">
            Three pillars of
            <span className="gradient-text"> SaaS frontend excellence</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Whether you need a conversion machine, a data powerhouse, or strategic leadership—
            I deliver frontend solutions that drive real business results.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 flex flex-col">
                {/* Icon and highlight */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent/10 text-accent">
                    {service.highlight}
                  </span>
                </div>

                {/* Title and description */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Features list */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn more link */}
                <a 
                  href="#contact"
                  className="inline-flex items-center text-sm font-medium text-primary hover:text-accent transition-colors mt-auto"
                >
                  Discuss your project
                  <ArrowUpRight className="ml-1 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
