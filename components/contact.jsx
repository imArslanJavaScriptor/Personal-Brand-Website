"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { sendEmail } from "../app/actions/sendEmail";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const result = await sendEmail(formData);

    setIsSubmitting(false);

    if (result.success) {
      setIsSubmitted(true);
      // Reset after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } else {
      alert("Something went wrong. Please try again or email me directly.");
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance">
            Ready to
            <span className="gradient-text"> scale your SaaS?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Let's discuss how I can help you build a high-converting frontend
            that drives real business results. Currently accepting projects for
            Q2 2026.
          </p>
        </motion.div>

        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative"
        >
          <div className="p-8 sm:p-10 rounded-2xl bg-card border border-border">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle2 className="h-16 w-16 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-3">Message Sent!</h3>
                <p className="text-muted-foreground">
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      className="bg-secondary/50 border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      required
                      className="bg-secondary/50 border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Your company name"
                    className="bg-secondary/50 border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="projectType">Project Type</Label>
                  <select
                    id="projectType"
                    name="projectType"
                    className="w-full h-10 px-3 rounded-md bg-secondary/50 border border-border text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                    required
                  >
                    <option value="">Select a project type</option>
                    <option value="landing-page">Landing Page</option>
                    <option value="dashboard">Analytics Dashboard</option>
                    <option value="fractional">Fractional Frontend Lead</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Project Details</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project, timeline, and goals..."
                    rows={5}
                    required
                    className="bg-secondary/50 border-border focus:border-primary resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">Budget Range</Label>
                  <select
                    id="budget"
                    name="budget"
                    className="w-full h-10 px-3 rounded-md bg-secondary/50 border border-border text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                  >
                    <option value="">Select your budget range</option>
                    <option value="500-1500">$500 - $1,500</option>
                    <option value="1500-3000">$1,500 - $3,000</option>
                    <option value="3000-7000">$3,000 - $7,000</option>
                    <option value="7000+">$7,000+</option>
                  </select>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full py-6 text-lg glow"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-pulse">Sending...</span>
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>

          {/* Alternative contact */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 text-center"
          >
            <p className="text-muted-foreground mb-4">
              Prefer email? Reach me directly at
            </p>
            <a
              href="mailto:arslan@imarslansaas.com"
              className="inline-flex items-center gap-2 text-lg font-medium text-primary hover:text-accent transition-colors group"
            >
              <Mail className="h-5 w-5" />
              arslan@imarslansaas.com
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
