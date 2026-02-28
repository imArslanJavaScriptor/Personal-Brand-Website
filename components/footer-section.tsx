"use client"

import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export function FooterSection() {
  return (
    <footer id="footer" className="border-t border-border/50 px-6 pt-24 pb-12">
      <div className="mx-auto max-w-6xl">
        {/* CTA Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="rounded-xl border border-border/50 bg-card p-8 text-center md:p-12"
        >
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {"Ready to Build Something Extraordinary?"}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
            {"Let's turn your SaaS vision into a high-performance reality. Book a free strategy call and let's discuss how to accelerate your product."}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild className="gap-2">
              <a href="mailto:contact@imarslansaas.com">
                {"Book a Strategy Call"}
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="gap-2">
              <a href="mailto:contact@imarslansaas.com">
                <Mail className="size-4" />
                {"Send an Email"}
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Newsletter + Links */}
        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-bold text-foreground">{"SaaS Growth Tips"}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {"Weekly insights on frontend performance, conversion optimization, and SaaS product-led growth. No spam, unsubscribe anytime."}
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-4 flex gap-2"
            >
              <Input
                type="email"
                placeholder="you@company.com"
                className="max-w-xs"
                aria-label="Email address for newsletter"
              />
              <Button type="submit" size="default" className="gap-1.5 shrink-0">
                {"Subscribe"}
                <ArrowRight className="size-3.5" />
              </Button>
            </form>
          </div>

          <div className="flex flex-col gap-6 md:items-end">
            <div className="flex flex-col gap-3 md:items-end">
              <h3 className="text-lg font-bold text-foreground">{"Muhammad Arslan"}</h3>
              <p className="text-sm text-muted-foreground md:text-right">
                {"SaaS Frontend Specialist"}
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-lg border border-border/50 text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-lg border border-border/50 text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
                aria-label="GitHub"
              >
                <Github className="size-4" />
              </a>
              <a
                href="mailto:contact@imarslansaas.com"
                className="flex size-10 items-center justify-center rounded-lg border border-border/50 text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
                aria-label="Email"
              >
                <Mail className="size-4" />
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-muted-foreground">
            {"© 2026 imArslansaas.com. All rights reserved."}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
              {"Privacy Policy"}
            </a>
            <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
              {"Terms of Service"}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
