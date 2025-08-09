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
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Success stories and case studies"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-white/90"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 12,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute top-20 right-20 w-32 h-32 bg-blue-100 rounded-2xl opacity-60"
          />
          <motion.div
            animate={{
              y: [0, 25, 0],
              rotate: [0, -8, 0],
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-20 left-20 w-28 h-28 bg-slate-100 rounded-full opacity-50"
          />
          <motion.div
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 18,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-100 rounded-xl opacity-40"
          />
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
              className="inline-flex items-center px-6 py-3 bg-slate-100 border border-slate-200 rounded-full text-slate-700 text-sm font-medium mb-8 shadow-sm"
            >
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></span>
              Real Success Stories & Proven Results
            </motion.div>

            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-6 text-slate-900 leading-tight"
            >
              Case
              <br />
              <span className="text-blue-600">Studies</span>
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto mb-12 leading-relaxed"
            >
              Discover how we've helped businesses transform their operations and achieve remarkable results through
              innovative software solutions and strategic technology implementations.
            </motion.p>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center"
              >
                Explore Success Stories
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group border-2 border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-slate-50"
              >
                Start Your Project
              </motion.button>
            </motion.div>
          </motion.div>
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
                className="text-center group"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                  <metric.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{metric.value}</div>
                <div className="text-slate-700 font-semibold mb-1">{metric.label}</div>
                <div className="text-slate-500 text-sm">{metric.description}</div>
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
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200 hover:border-slate-300"
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
      <section className="py-24 bg-slate-50" ref={casesRef}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isCasesInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Success Stories</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real projects, real results. See how we've helped businesses achieve their goals.
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
                className="group text-center bg-white border border-slate-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <step.icon className={`w-8 h-8 ${step.iconColor}`} />
                </div>

                <div className="text-3xl font-bold text-blue-600 mb-4">{step.step}</div>

                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">{step.description}</p>
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
              Let's discuss how we can help transform your business with innovative technology solutions that deliver
              measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start Your Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/30 hover:border-white/50 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white/10"
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
