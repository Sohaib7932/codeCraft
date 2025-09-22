"use client"

import type React from "react"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Building2,
  ShoppingCart,
  Car,
  Home,
  Briefcase,
  Target,
  Lightbulb,
  Rocket,
  TrendingUp,
  Users,
  Clock,
  Award,
  CheckCircle,
  ExternalLink,
} from "lucide-react"
import caseStudiesData from "../../data/caseStudies.json"
import AnimatedCounter, { PercentageCounter, TimeCounter, PlusCounter } from "../../components/AnimatedCounter"

interface CaseStudy {
  id: number
  title: string
  client: string
  industry: string
  description: string
  results: string[]
  technologies: string[]
  duration: string
  image: string
  testimonial: {
    quote: string
    author: string
    position: string
  }
  featured?: boolean
  metrics?: {
    improvement: string
    users: string
    revenue: string
  }
}

const caseStudies: CaseStudy[] = caseStudiesData.caseStudies

type FilterType = "all" | "real estate" | "architect" | "ecommerce" | "automotive" | "healthcare"

const filterLabels: { value: FilterType; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { value: "all", label: "All Industries", icon: Briefcase },
  { value: "real estate", label: "Real Estate", icon: Home },
  { value: "architect", label: "Architecture", icon: Building2 },
  { value: "ecommerce", label: "E-commerce", icon: ShoppingCart },
  { value: "automotive", label: "Automotive", icon: Car },
  { value: "healthcare", label: "Healthcare", icon: Users },
]

const approachSteps = [
  {
    step: "01",
    title: "Discovery & Analysis",
    description:
    "Comprehensive analysis of business challenges, market research, and stakeholder interviews to understand core requirements.",
    icon: Target,
    color: "from-blue-50 to-blue-100",
    iconColor: "text-blue-600",
  },
  {
    step: "02",
    title: "Strategic Planning",
    description:
      "Development of detailed project roadmap, technical architecture, and risk assessment with clear milestones.",
    icon: Lightbulb,
    color: "from-green-50 to-green-100",
    iconColor: "text-green-600",
  },
  {
    step: "03",
    title: "Agile Development",
    description:
      "Iterative development process with continuous integration, regular testing, and stakeholder feedback loops.",
    icon: Rocket,
    color: "from-orange-50 to-orange-100",
    iconColor: "text-orange-600",
  },
  {
    step: "04",
    title: "Launch & Optimize",
    description:
      "Seamless deployment, performance monitoring, user training, and continuous optimization based on real-world usage.",
    icon: TrendingUp,
    color: "from-purple-50 to-purple-100",
    iconColor: "text-purple-600",
  },
]

const successMetrics = [
  { icon: Users, value: "500K+", label: "Users Impacted", description: "Across all our case studies" },
  { icon: TrendingUp, value: "300%", label: "Average ROI", description: "Return on investment" },
  { icon: Clock, value: "98%", label: "On-Time Delivery", description: "Project completion rate" },
  { icon: Award, value: "4.9/5", label: "Client Satisfaction", description: "Average project rating" },
]

export default function CaseStudies() {
  const [selectedFilter, setSelectedFilter] = useState<FilterType>("all")
  const heroRef = useRef(null)
  const casesRef = useRef(null)
  const approachRef = useRef(null)
  const metricsRef = useRef(null)

  const isCasesInView = useInView(casesRef, { once: true, margin: "-100px" })
  const isApproachInView = useInView(approachRef, { once: true, margin: "-100px" })
  const isMetricsInView = useInView(metricsRef, { once: true, margin: "-100px" })

  // Filter case studies based on selected filter
  const filteredCaseStudies =
    selectedFilter === "all"
      ? caseStudies
      : caseStudies.filter((study) => study.industry.toLowerCase().includes(selectedFilter.toLowerCase()))

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section ref={heroRef} className="relative">

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="text-center">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
                <Award className="w-4 h-4" />
                Success Stories
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-none mb-8">
                Proven Results
                <br />
                <span className="text-slate-700">Real Success Stories</span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-12">
                Discover how we've helped businesses transform their operations and achieve remarkable results through
                innovative software solutions and strategic technology implementations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Link
                  href="#cases"
                  className="group inline-flex items-center justify-center bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:shadow-lg hover:scale-105"
                >
                  Explore Success Stories
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center border border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:bg-white hover:shadow-lg hover:scale-105"
                >
                  Start Your Project
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="py-16 bg-slate-50" ref={metricsRef}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ y: 50, opacity: 0 }}
                animate={isMetricsInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden text-center p-6 rounded-xl border border-slate-200/60 bg-gradient-to-br from-white via-slate-50/50 to-white backdrop-blur-sm shadow-lg shadow-slate-200/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-300/30 hover:border-slate-300/80 hover:bg-gradient-to-br hover:from-white hover:via-blue-50/30 hover:to-white"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200/80 text-slate-700 flex items-center justify-center ring-1 ring-slate-200/50 shadow-sm group-hover:ring-blue-300/60 group-hover:shadow-md group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-blue-50 group-hover:to-slate-100 transition-all duration-300">
                  <metric.icon className="w-7 h-7 group-hover:text-blue-600 transition-colors" />
                </div>
                <div className="text-2xl font-bold text-slate-900 mb-2">
                  {metric.value.includes('+') || metric.value.includes('K') ? (
                    metric.value.includes('K') ? (
                      <><AnimatedCounter value={parseInt(metric.value.replace('K+', '').replace('K', ''))} delay={0} duration={4500} />K+</>
                    ) : (
                      <PlusCounter value={parseInt(metric.value.replace('+', ''))} delay={0} duration={4500} />
                    )
                  ) : metric.value.includes('%') ? (
                    <PercentageCounter value={parseInt(metric.value.replace('%', ''))} delay={0} duration={4500} />
                  ) : metric.value.includes('/') ? (
                    metric.value
                  ) : (
                    <AnimatedCounter value={parseInt(metric.value)} delay={0} duration={4500} />
                  )}
                </div>
                <div className="text-sm text-slate-600 font-medium mb-1">{metric.label}</div>
                <div className="text-xs text-slate-500">{metric.description}</div>
                <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-transparent via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Filter by Industry</h2>
            <p className="text-slate-600 text-lg">Explore our success stories across different industries</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {filterLabels.map((filter) => (
              <motion.button
                key={filter.value}
                onClick={() => setSelectedFilter(filter.value)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedFilter === filter.value
                    ? "bg-slate-900 text-white shadow-lg"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 hover:border-slate-300"
                }`}
              >
                <filter.icon className="w-5 h-5 mr-2" />
                {filter.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 bg-slate-50" ref={casesRef} id="cases">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isCasesInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Success Stories</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real projects, real results. See how we&apos;ve helped businesses achieve their goals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isCasesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-blue-300 hover:shadow-xl transition-all duration-300"
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={study.image || "/placeholder.svg?height=200&width=400"}
                    alt={study.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      {study.industry}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="relative p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                    {study.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed line-clamp-3">{study.description}</p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="text-slate-500 text-xs">
                      <span className="font-semibold">Client:</span> {study.client}
                    </div>
                    <div className="text-slate-500 text-xs">
                      <span className="font-semibold">Duration:</span> {study.duration}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {study.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs">
                        +{study.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Results Preview */}
                  {study.results && study.results.length > 0 && (
                    <div className="mb-6">
                      <div className="flex items-center text-green-600 text-sm mb-2">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Key Result
                      </div>
                      <p className="text-slate-700 text-sm">{study.results[0]}</p>
                    </div>
                  )}

                  {/* CTA Button */}
                  <Link
                    href={`/case-studies/${study.id}`}
                    className="group/btn inline-flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    View Case Study
                    <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredCaseStudies.length === 0 && (
            <div className="text-center py-16">
              <div className="text-slate-600 text-lg mb-4">No case studies found for this industry.</div>
              <button
                onClick={() => setSelectedFilter("all")}
                className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
              >
                View All Case Studies
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-24 bg-white" ref={approachRef}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isApproachInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Our Proven Approach</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Every successful project follows our time-tested methodology that ensures exceptional results and client
              satisfaction.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approachSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ y: 50, opacity: 0 }}
                animate={isApproachInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden text-center p-6 rounded-2xl border border-slate-200/60 bg-gradient-to-br from-white via-slate-50/30 to-white shadow-lg shadow-slate-200/40 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-300/30 hover:border-slate-300/70 hover:bg-gradient-to-br hover:from-white hover:via-blue-50/20 hover:to-slate-50/50"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white flex items-center justify-center shadow-lg shadow-slate-900/30 ring-1 ring-white/20 group-hover:shadow-xl group-hover:shadow-slate-900/40 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-blue-900 group-hover:to-slate-900 transition-all duration-300">
                  <step.icon className="w-7 h-7" />
                </div>

                <div className="text-2xl font-bold text-blue-600 mb-3">{step.step}</div>

                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>

                <p className="text-slate-600 leading-relaxed text-sm">{step.description}</p>
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=600&width=1920"
            alt="Create your success story"
            width={1920}
            height={600}
            className="w-full h-full object-cover opacity-10"
          />
        </div>

        {/* Animated background elements */}
        <motion.div
          className="absolute top-10 left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-60 h-60 bg-slate-500/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">Ready to Create Your Success Story?</h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-12 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help transform your business with innovative technology solutions that deliver
              measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:bg-slate-100 hover:shadow-lg hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:bg-white/10 hover:shadow-lg hover:scale-105"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
