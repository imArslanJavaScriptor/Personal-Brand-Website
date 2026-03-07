'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Founder & CEO',
    company: 'DataSync.io',
    image: null,
    content: 'Arslan transformed our clunky dashboard into an intuitive powerhouse. Our users now spend 40% more time on the platform, and our NPS shot up by 25 points. Worth every penny.',
    rating: 5,
  },
  {
    name: 'Marcus Rodriguez',
    role: 'CTO',
    company: 'LaunchMetrics',
    image: null,
    content: 'We needed someone who could think like a founder and code like a senior engineer. Arslan delivered a landing page that converts at 12%—double our previous rate. Insanely fast turnaround.',
    rating: 5,
  },
  {
    name: 'Emily Watson',
    role: 'Head of Product',
    company: 'ScaleOps',
    image: null,
    content: 'Hiring Arslan as our fractional frontend lead was a game-changer. He built our design system, mentored our junior devs, and shipped more in 3 months than we did in the previous year.',
    rating: 5,
  },
  {
    name: 'James Park',
    role: 'Founder',
    company: 'InvoiceFlow',
    image: null,
    content: 'The attention to performance optimization is unreal. Our Lighthouse score went from 65 to 98, and page load times dropped by 70%. Our customers noticed immediately.',
    rating: 5,
  },
  {
    name: 'Alexandra Novak',
    role: 'VP Engineering',
    company: 'CloudMetrics',
    image: null,
    content: 'Arslan doesn\'t just write code—he architects solutions. His work on our analytics dashboard has become the foundation for our entire frontend. Highly recommend for any serious SaaS.',
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance">
            Trusted by
            <span className="gradient-text"> SaaS founders</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Don't just take my word for it—here's what founders and engineering 
            leaders say about working together.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${index === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="h-full p-6 sm:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 flex flex-col">
                {/* Quote icon and rating */}
                <div className="flex items-start justify-between mb-6">
                  <Quote className="h-8 w-8 text-primary/30" />
                  <div className="flex gap-0.5">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <p className="text-foreground/90 mb-6 flex-grow leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-border">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center text-lg font-bold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground text-sm mb-6">Trusted by founders at</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            {['DataSync', 'LaunchMetrics', 'ScaleOps', 'InvoiceFlow', 'CloudMetrics'].map((company) => (
              <span key={company} className="text-xl font-bold tracking-tight">
                {company}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
