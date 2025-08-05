"use client"

import React from "react"
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
    color: "from-blue-500 to-cyan-500",
  },
  {
    step: "02",
    title: "Strategic Planning",
    description:
      "Development of detailed project roadmap, technical architecture, and risk assessment with clear milestones.",
    icon: Lightbulb,
    color: "from-purple-500 to-pink-500",
  },
  {
    step: "03",
    title: "Agile Development",
    description:
      "Iterative development process with continuous integration, regular testing, and stakeholder feedback loops.",
    icon: Rocket,
    color: "from-green-500 to-emerald-500",
  },
  {
    step: "04",
    title: "Launch & Optimize",
    description:
      "Seamless deployment, performance monitoring, user training, and continuous optimization based on real-world usage.",
    icon: TrendingUp,
    color: "from-orange-500 to-red-500",
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
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/assets/homepage.png"
            alt="Case Studies Hero Background"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-blue-900/80 to-purple-900/90"></div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium mb-8 backdrop-blur-sm"
            >
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
              Real Success Stories & Proven Results
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-tight">
              Case
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Studies
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Discover how we&apos;ve helped businesses transform their operations and achieve remarkable results through
              innovative software solutions and strategic technology implementations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center"
              >
                Explore Success Stories
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group border-2 border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 backdrop-blur-sm hover:bg-white/5"
              >
                Start Your Project
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="py-16 bg-gray-900" ref={metricsRef}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ y: 50, opacity: 0 }}
                animate={isMetricsInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{metric.value}</div>
                <div className="text-gray-300 font-semibold mb-1">{metric.label}</div>
                <div className="text-gray-500 text-sm">{metric.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Filter by Industry
            </h2>
            <p className="text-gray-400 text-lg">Explore our success stories across different industries</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {filterLabels.map((filter) => (
              <motion.button
                key={filter.value}
                onClick={() => setSelectedFilter(filter.value)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedFilter === filter.value
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                    : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-700/50"
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
      <section className="py-24 bg-gray-900" ref={casesRef}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isCasesInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Success Stories
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
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
                className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={study.image || "/placeholder.svg?height=200&width=400&query=business success"}
                    alt={study.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-blue-500/20 backdrop-blur-sm text-blue-300 px-3 py-1 rounded-full text-sm font-medium border border-blue-400/30">
                      {study.industry}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="relative p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors leading-tight">
                    {study.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">{study.description}</p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="text-gray-500 text-xs">
                      <span className="font-semibold">Client:</span> {study.client}
                    </div>
                    <div className="text-gray-500 text-xs">
                      <span className="font-semibold">Duration:</span> {study.duration}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {study.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-700/50 text-gray-400 rounded text-xs">
                        +{study.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Results Preview */}
                  {study.results && study.results.length > 0 && (
                    <div className="mb-6">
                      <div className="flex items-center text-green-400 text-sm mb-2">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Key Result
                      </div>
                      <p className="text-gray-300 text-sm">{study.results[0]}</p>
                    </div>
                  )}

                  {/* CTA Button */}
                  <Link
                    href={`/case-studies/${study.id}`}
                    className="group/btn inline-flex items-center justify-center w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
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
              <div className="text-gray-400 text-lg mb-4">No case studies found for this industry.</div>
              <button
                onClick={() => setSelectedFilter("all")}
                className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
              >
                View All Case Studies
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-24 bg-gray-950" ref={approachRef}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isApproachInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Our Proven Approach
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
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
                className="group text-center bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                <div className="text-3xl font-bold text-blue-400 mb-4">{step.step}</div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                  {step.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900/20 to-purple-900/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gray-950/80"></div>

        {/* Animated background elements */}
        <motion.div
          className="absolute top-10 left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl"
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
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help transform your business with innovative technology solutions that deliver
              measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start Your Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/20 hover:border-white/40 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 backdrop-blur-sm hover:bg-white/5"
              >
                Schedule Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
