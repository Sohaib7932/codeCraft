"use client"

import React from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { 
  ArrowRight, Code2, Smartphone, Brain, CheckCircle2, 
  ShieldCheck, BarChart3, Rocket, ExternalLink, Terminal, 
  Zap, Cloud, Award, Users, Clock, ArrowUpRight, Play,
  Shield, Gauge, Calendar
} from "lucide-react"
import caseStudiesData from "../data/caseStudies.json"
import { useCalendly } from "../components/CalendlyWidget"
import AnimatedCounter, { PercentageCounter, TimeCounter, PlusCounter } from "../components/AnimatedCounter"

export default function Home() {
  const router = useRouter()
  const { openCalendly, CalendlyComponent } = useCalendly("https://calendly.com/hr-codekraft/30min")
  
  const heroRef = useRef(null)
  const servicesRef = useRef(null)
  const clientsRef = useRef(null)
  const caseRef = useRef(null)

  const isHeroInView = useInView(heroRef, { once: true })
  const isServicesInView = useInView(servicesRef, { once: true, margin: "-50px" })
  const isClientsInView = useInView(clientsRef, { once: true, margin: "-50px" })
  const isCaseInView = useInView(caseRef, { once: true, margin: "-50px" })


  const codeSnippets = [
    { lang: "Next.js", code: `export default async function Page() {
  const data = await fetch('/api/secure')
  return <Dashboard data={data} />
}` },
    { lang: "Python", code: `@app.route('/api/ai-chat')
@security_required
async def chat_endpoint(request):
  return await ai_model.generate(request.json)` },
    { lang: "Docker", code: `FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production` }
  ]

  const enterpriseMetrics = [
    { label: "Uptime SLA", value: "99.9%", icon: Gauge },
    { label: "Avg Response", value: "<150ms", icon: Zap },
    { label: "Security Score", value: "A+", icon: Shield },
    { label: "Code Coverage", value: "95%", icon: CheckCircle2 }
  ]

  const clientLogos = [
    { name: "TechCorp", industry: "Enterprise Software" },
    { name: "DataFlow", industry: "FinTech" },
    { name: "HealthSys", industry: "Healthcare" },
    { name: "LogiTrack", industry: "Logistics" },
    { name: "RetailMax", industry: "E-commerce" },
    { name: "CloudFirst", industry: "Cloud Services" }
  ]

  const services = [
    {
      icon: Code2,
      title: "Web Development",
      subtitle: "Next.js • TypeScript • Tailwind",
      description: "Production-ready web platforms with enterprise security, performance monitoring, and scalable architecture.",
      features: ["Shopify Plus integration", "WordPress enterprise", "Custom SaaS platforms"],
      metrics: { performance: "98/100", security: "A+", uptime: "99.9%" },
      techStack: ["Next.js 14", "TypeScript", "Prisma", "PostgreSQL"]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      subtitle: "React Native • Flutter • Native",
      description: "Cross-platform mobile apps with native performance, offline capabilities, and enterprise-grade security.",
      features: ["iOS & Android native feel", "Offline-first architecture", "Enterprise MDM support"],
      metrics: { performance: "60fps", users: "1M+", rating: "4.8★" },
      techStack: ["React Native", "Flutter", "Firebase", "AWS Amplify"]
    },
    {
      icon: Brain,
      title: "AI & Python Engineering",
      subtitle: "OpenAI • LangChain • FastAPI",
      description: "Production-grade AI systems with robust APIs, intelligent automation, and enterprise data processing.",
      features: ["Custom AI assistants", "Advanced web scraping", "ML-powered backends"],
      metrics: { accuracy: "94%", latency: "<50ms", scale: "1B+ requests" },
      techStack: ["Python 3.11", "FastAPI", "OpenAI", "PostgreSQL"]
    },
    {
      icon: Cloud,
      title: "DevOps & Infrastructure",
      subtitle: "Docker • Kubernetes • AWS",
      description: "Containerized deployments with auto-scaling, monitoring, and zero-downtime releases for enterprise reliability.",
      features: ["Multi-cloud deployments", "Auto-scaling infrastructure", "24/7 monitoring"],
      metrics: { uptime: "99.99%", deploy: "<5min", scale: "Auto" },
      techStack: ["Docker", "Kubernetes", "Terraform", "AWS/GCP"]
    }
  ]

  const differentiators = [
    {
      icon: ShieldCheck,
      title: "Security-first",
      desc: "OWASP-aware builds, least-privilege access, and secure SDLC baked into delivery.",
    },
    {
      icon: BarChart3,
      title: "Proven delivery",
      desc: "Predictable timelines, transparent comms, and measurable outcomes.",
    },
    {
      icon: Rocket,
      title: "Performance & scale",
      desc: "Fast, resilient systems tuned for growth, load, and real-world use.",
    },
  ]

  const technicalExcellence = [
    {
      icon: ShieldCheck,
      title: "Enterprise Security",
      desc: "SOC 2 Type II compliance, OWASP best practices, and penetration testing for every deployment.",
      badge: "SOC 2 Certified"
    },
    {
      icon: BarChart3,
      title: "Performance Engineering",
      desc: "Sub-150ms response times, 99.9% uptime SLA, and auto-scaling infrastructure that handles traffic spikes.",
      badge: "99.9% SLA"
    },
    {
      icon: Award,
      title: "Code Quality",
      desc: "95%+ test coverage, automated security scanning, and senior-level code reviews on every commit.",
      badge: "A+ Grade"
    }
  ]


  return (
    <div className="min-h-screen bg-white">
      {/* Enterprise Hero */}
      <section ref={heroRef} className="relative">
        
        
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="text-center">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={isHeroInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.6 }}
            >

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-none mb-8">
                Build software that
                <br />
                <span className="text-slate-700">scales with confidence</span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-12">
                We partner with enterprise teams to deliver production-ready applications, 
                AI-powered solutions, and cloud infrastructure that performs at scale.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <button
                  onClick={openCalendly}
                  className="group inline-flex items-center justify-center bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:shadow-lg hover:scale-105"
                >
                  Schedule Technical Call
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-0.5" />
                </button>
                <button
                  onClick={() => router.push('/case-studies')}
                  className="group inline-flex items-center justify-center border border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:bg-white hover:shadow-lg hover:scale-105"
                >
                  View Case Studies
                  <ExternalLink className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>

              {/* Enterprise Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {[
                  { icon: Shield, value: "SOC 2", label: "Compliant", animated: false },
                  { icon: Gauge, value: 99.9, label: "Uptime SLA", animated: true, type: "percentage" },
                  { icon: Clock, value: 150, label: "Response Time", animated: true, type: "time" },
                  { icon: Award, value: "Senior", label: "Engineering Team", animated: false },
                ].map(({ icon: Icon, value, label, animated, type }) => (
                  <motion.div
                    key={label}
                    initial={{ y: 20, opacity: 0 }}
                    animate={isHeroInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="group relative overflow-hidden text-center p-6 rounded-xl border border-slate-200/60 bg-gradient-to-br from-white via-slate-50/50 to-white backdrop-blur-sm shadow-lg shadow-slate-200/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-300/30 hover:border-slate-300/80 hover:bg-gradient-to-br hover:from-white hover:via-blue-50/30 hover:to-white"
                  >
                    <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200/80 text-slate-700 flex items-center justify-center ring-1 ring-slate-200/50 shadow-sm group-hover:ring-blue-300/60 group-hover:shadow-md group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-blue-50 group-hover:to-slate-100 transition-all duration-300">
                      <Icon className="w-7 h-7 group-hover:text-blue-600 transition-colors" />
                    </div>
                    <div className="text-2xl font-bold text-slate-900 mb-1">
                      {animated ? (
                        type === "percentage" ? (
                          <PercentageCounter value={value as number} delay={0} duration={4500} />
                        ) : type === "time" ? (
                          <TimeCounter value={value as number} delay={0} duration={4500} />
                        ) : (
                          <AnimatedCounter value={value as number} delay={0} duration={4500} />
                        )
                      ) : (
                        value
                      )}
                    </div>
                    <div className="text-sm text-slate-600 font-medium">{label}</div>
                    <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-transparent via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted by Enterprise Clients */}
      <section ref={clientsRef} className="py-20 bg-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={isClientsInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="text-sm font-medium text-slate-400 uppercase tracking-wide mb-3">Trusted by Industry Leaders</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Enterprise clients worldwide</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">From Fortune 500 companies to innovative startups, we power mission-critical systems.</p>
          </motion.div>
          
          {/* Horizontal scrolling logos */}
          <div className="relative mb-16">
            <div className="flex animate-pulse">
              <div className="flex space-x-12 animate-marquee">
                {[...clientLogos, ...clientLogos].map((client, index) => (
                  <motion.div
                    key={`${client.name}-${index}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isClientsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: (index % 6) * 0.1 }}
                    className="flex-shrink-0 group"
                  >
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 min-w-[200px]">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white mb-2">{client.name}</div>
                        <div className="text-sm text-slate-400 font-medium">{client.industry}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-900 to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-900 to-transparent pointer-events-none" />
          </div>
          
          {/* Key metrics in grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 500, label: "Enterprise Projects", icon: Award, type: "plus" },
              { value: 99.9, label: "Uptime Delivered", icon: Shield, type: "percentage" },
              { value: 24, label: "Response Time", icon: Clock, type: "time", prefix: "<", unit: "h" },
              { value: 150, label: "Engineering Years", icon: Users, type: "plus" }
            ].map(({ value, label, icon: Icon, type, prefix, unit }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={isClientsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {type === "plus" ? (
                    <PlusCounter value={value} delay={0} duration={4500} />
                  ) : type === "percentage" ? (
                    <PercentageCounter value={value} delay={0} duration={4500} />
                  ) : type === "time" ? (
                    <TimeCounter value={value} prefix={prefix} unit={unit} delay={0} duration={4500} />
                  ) : (
                    <AnimatedCounter value={value} delay={0} duration={4500} />
                  )}
                </div>
                <div className="text-slate-300 font-medium">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Services */}
      <section ref={servicesRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={isServicesInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="text-sm font-medium text-slate-600 uppercase tracking-wide mb-3">Our Expertise</div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Enterprise-grade solutions
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Full-stack development with security, performance, and scalability built-in from day one.
            </p>
          </motion.div>

          {/* Clean Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 30, opacity: 0 }}
                animate={isServicesInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl p-8 border border-slate-200/60 bg-gradient-to-br from-white via-slate-50/30 to-white shadow-lg shadow-slate-200/40 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-300/30 hover:-translate-y-2 hover:border-slate-300/70 hover:bg-gradient-to-br hover:from-white hover:via-blue-50/20 hover:to-slate-50/50"
              >
                {/* Service Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-slate-900/30 ring-1 ring-white/20 group-hover:shadow-xl group-hover:shadow-slate-900/40 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-blue-900 group-hover:to-slate-900 transition-all duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{service.title}</h3>
                    <p className="text-slate-600 text-sm font-medium">{service.subtitle}</p>
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>

                {/* Key Features - Simplified */}
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, featureIndex) => (
                    <div key={feature} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-slate-600 rounded-full flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Performance Metrics - Inline */}
                <div className="flex gap-6 pt-4 border-t border-slate-200">
                  {Object.entries(service.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-slate-900">{value}</div>
                      <div className="text-xs text-slate-500 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center bg-slate-900 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-3">Ready to scale your business?</h3>
            <p className="text-slate-300 mb-6 max-w-lg mx-auto">
              Let&apos;s discuss your project and find the right solution for your enterprise needs.
            </p>
            <button
              onClick={openCalendly}
              className="group inline-flex items-center bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-all duration-200 hover:shadow-lg hover:scale-105"
            >
              Schedule a consultation
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Technical Excellence */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="text-sm font-medium text-slate-600 uppercase tracking-wide mb-3">Technical Excellence</div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Built for enterprise scale
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Every solution is architected with security, performance, and maintainability as core principles.
            </p>
          </div>
          
          {/* Simple Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {technicalExcellence.map((item, index) => (
              <div key={item.title} className="group relative overflow-hidden bg-gradient-to-br from-white via-slate-50/30 to-white rounded-2xl p-8 border border-slate-200/60 text-center shadow-lg shadow-slate-200/40 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-300/30 hover:border-slate-300/70 hover:bg-gradient-to-br hover:from-white hover:via-blue-50/20 hover:to-slate-50/50">
                <div className="w-18 h-18 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-slate-900/30 ring-2 ring-white/20 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-slate-900/40 group-hover:bg-gradient-to-br group-hover:from-blue-900 group-hover:to-slate-900 group-hover:ring-blue-300/30 transition-all duration-300">
                  <item.icon className="w-9 h-9 text-white group-hover:text-blue-100 transition-colors" />
                </div>
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-slate-100 to-slate-200/80 text-slate-700 shadow-sm ring-1 ring-slate-200/50 group-hover:bg-gradient-to-r group-hover:from-blue-100 group-hover:to-slate-100 group-hover:text-blue-800 group-hover:ring-blue-200/50 transition-all">
                    {item.badge}
                  </span>
                </div>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
          
          {/* Performance Metrics */}
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Performance guarantees</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: 99.9, label: "Uptime SLA", icon: Gauge, type: "percentage" },
              { value: 150, label: "API Response", icon: Zap, type: "time" },
              { value: "SOC 2", label: "Certified", icon: Shield, type: "static" },
              { value: "24/7", label: "Support", icon: Clock, type: "static" }
            ].map((metric, index) => (
              <div 
                key={metric.label} 
                className="group relative overflow-hidden text-center p-6 rounded-2xl border border-slate-200/60 bg-gradient-to-br from-white via-slate-50/30 to-white shadow-lg shadow-slate-200/40 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-300/30 hover:border-slate-300/70 hover:bg-gradient-to-br hover:from-white hover:via-blue-50/20 hover:to-slate-50/50"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200/80 text-slate-700 flex items-center justify-center ring-1 ring-slate-200/50 shadow-sm group-hover:ring-blue-300/60 group-hover:shadow-md group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-blue-50 group-hover:to-slate-100 transition-all duration-300">
                  <metric.icon className="w-7 h-7 group-hover:text-blue-600 transition-colors" />
                </div>
                <div className="text-2xl font-bold text-slate-900 mb-2">
                  {metric.type === "percentage" ? (
                    <PercentageCounter value={metric.value as number} delay={0} duration={4500} />
                  ) : metric.type === "time" ? (
                    <TimeCounter value={metric.value as number} delay={0} duration={4500} />
                  ) : (
                    metric.value
                  )}
                </div>
                <div className="text-slate-600 text-sm font-medium">{metric.label}</div>
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Why partner with CodeCraft</h2>
            <p className="mt-3 text-slate-600 max-w-2xl">We obsess over correctness, clarity, and outcomes. The work looks good because it is good.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {differentiators.map(({ icon: Icon, title, desc }, index) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-2xl border border-slate-200/60 bg-gradient-to-br from-white via-slate-50/30 to-white p-6 shadow-lg shadow-slate-200/40 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-300/30 hover:border-slate-300/70 hover:bg-gradient-to-br hover:from-white hover:via-blue-50/20 hover:to-slate-50/50"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200/80 text-slate-700 flex items-center justify-center ring-1 ring-slate-200/50 shadow-sm group-hover:ring-blue-300/60 group-hover:shadow-md group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-blue-50 group-hover:to-slate-100 transition-all duration-300">
                  <Icon className="h-6 w-6 group-hover:text-blue-600 transition-colors" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-slate-600">{desc}</p>
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-400/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case study */}
      <section ref={caseRef} className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={isCaseInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Recent work</h2>
          </motion.div>

          <Link href={`/case-studies/${caseStudiesData.caseStudies[0].id}`} className="block group">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="md:col-span-8 p-8">
                <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                  {caseStudiesData.caseStudies[0].industry}
                </span>
                <h3 className="mt-4 text-2xl md:text-3xl font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">
                  {caseStudiesData.caseStudies[0].title}
                </h3>
                <p className="mt-3 text-slate-600">
                  Discover how we helped {caseStudiesData.caseStudies[0].client.toString()} achieve {caseStudiesData.caseStudies[0].results[0].toLowerCase()} through a secure, scalable platform.
                </p>
                <div className="mt-6 inline-flex items-center text-blue-700 font-medium">
                  Read the case study <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
              <div className="md:col-span-4 p-8 bg-slate-50 border-t md:border-t-0 md:border-l border-slate-200 flex items-center justify-center">
                <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-sm">
                  <ExternalLink className="h-5 w-5 text-blue-700" />
                  <div className="text-sm font-medium text-slate-900">Success Story</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white">Ready to ship with confidence?</h2>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">Let’s scope your project and align on outcomes, timelines, and the fastest path to value.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={openCalendly} className="group cursor-pointer inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-slate-900 font-semibold transition-all duration-200 hover:bg-slate-100 hover:shadow-lg hover:scale-105">
              Schedule a call
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </button>
            <button onClick={() => router.push('/contact')} className="group cursor-pointer inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-3 text-white font-semibold hover:bg-white/10 transition-all duration-200 hover:shadow-lg hover:scale-105">
              Start a project
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Calendly Widget */}
      <CalendlyComponent />
    </div>
  )
}
