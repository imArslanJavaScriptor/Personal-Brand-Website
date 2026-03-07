'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Mail, href: 'mailto:arslan@imarslansaas.com', label: 'Email' },
]

const footerLinks = [
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="py-16 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="text-2xl font-bold tracking-tight inline-block mb-4">
              <span className="gradient-text">imArslan</span>
              <span className="text-muted-foreground">saas</span>
            </a>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs">
              Building high-performance frontends that help SaaS founders scale to $10k+ MRR.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>For project inquiries:</p>
              <a 
                href="mailto:arslan@imarslansaas.com"
                className="text-primary hover:text-accent transition-colors block"
              >
                arslan@imarslansaas.com
              </a>
              <p className="pt-2">Currently accepting projects for Q2 2026</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} imArslansaas. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Crafted with precision in Pakistan 🇵🇰
          </p>
        </div>
      </div>
    </footer>
  )
}
