"use client"

import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  ArrowLeft,
  Calendar,
  Users,
  Target,
  TrendingUp,
  CheckCircle,
  Code,
  Database,
  ExternalLink,
  Quote,
  Award,
} from "lucide-react"
import caseStudiesData from "../../../data/caseStudies.json"

export default function CaseStudy() {
  const params = useParams()
  const id = params?.id as string
  const caseStudy = caseStudiesData.caseStudies.find((study) => study.id === Number.parseInt(id))

  const overviewRef = useRef(null)
  const resultsRef = useRef(null)
  const processRef = useRef(null)
  const testimonialRef = useRef(null)

  const isOverviewInView = useInView(overviewRef, { once: true, margin: "-100px" })
  const isResultsInView = useInView(resultsRef, { once: true, margin: "-100px" })
  const isProcessInView = useInView(processRef, { once: true, margin: "-100px" })
  const isTestimonialInView = useInView(testimonialRef, { once: true, margin: "-100px" })

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-950">
        <div className="text-center max-w-md mx-auto px-6">
          <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <ExternalLink className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Case Study Not Found</h1>
            <p className="text-xl text-gray-400 mb-8">The case study you are looking for does not exist.</p>
            <Link
              href="/case-studies"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Case Studies
            </Link>
          </motion.div>
        </div>
      </div>
    )
  }

  const processSteps = [
    {
      title: "Discovery & Research",
      description: "Comprehensive analysis of business requirements and market research",
      icon: Target,
    },
    {
      title: "Design & Planning",
      description: "Strategic planning and user experience design development",
      icon: Code,
    },
    {
      title: "Development & Testing",
      description: "Agile development with continuous testing and quality assurance",
      icon: Database,
    },
    {
      title: "Launch & Optimization",
      description: "Deployment, monitoring, and continuous performance optimization",
      icon: TrendingUp,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={caseStudy.image || "/placeholder.svg?height=1080&width=1920&query=business success"}
            alt={caseStudy.title}
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
        </div>

        <div className="relative z-10 flex items-center justify-center h-full px-6">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium mb-8 backdrop-blur-sm"
            >
              <Award className="w-4 h-4 mr-2" />
              {caseStudy.industry} Success Story
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-tight">
              {caseStudy.title}
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Client: <span className="font-semibold text-blue-300">{caseStudy.client}</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center text-gray-300">
                <Calendar className="w-5 h-5 mr-2 text-blue-400" />
                <span>{caseStudy.duration}</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-gray-500 rounded-full"></div>
              <div className="flex items-center text-gray-300">
                <Users className="w-5 h-5 mr-2 text-purple-400" />
                <span>Team of 8 Specialists</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation Breadcrumb */}
      <section className="py-6 bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            href="/case-studies"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors font-semibold"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Case Studies
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Project Overview */}
        <section className="mb-20" ref={overviewRef}>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={isOverviewInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
              >
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Target className="w-8 h-8 mr-3 text-blue-400" />
                  The Challenge
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {`${caseStudy.client} faced significant operational challenges that required a comprehensive digital transformation. The existing systems were outdated, inefficient, and couldn't scale with their growing business needs. They needed a modern, scalable solution that would streamline operations, improve user experience, and drive business growth.`}
                </p>
              </motion.div>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={isOverviewInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
              >
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Code className="w-8 h-8 mr-3 text-purple-400" />
                  Our Solution
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  {`We developed a comprehensive, scalable solution tailored to ${caseStudy.client}'s specific needs. Our approach involved modern architecture, user-centric design, and cutting-edge technologies to deliver a platform that not only solved immediate challenges but also positioned them for future growth.`}
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-800/30 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-2">Key Features</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• Scalable Architecture</li>
                      <li>• Real-time Analytics</li>
                      <li>• Mobile Responsive</li>
                      <li>• Advanced Security</li>
                    </ul>
                  </div>
                  <div className="bg-gray-800/30 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-2">Technical Highlights</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• Cloud-Native Design</li>
                      <li>• API-First Approach</li>
                      <li>• Automated Testing</li>
                      <li>• CI/CD Pipeline</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={isOverviewInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-6">Project Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Duration</p>
                      <p className="text-white font-semibold">{caseStudy.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Team Size</p>
                      <p className="text-white font-semibold">8 Specialists</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mr-4">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Industry</p>
                      <p className="text-white font-semibold">{caseStudy.industry}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={isOverviewInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-6">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-lg text-sm font-medium border border-blue-500/30 hover:border-blue-400/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={isOverviewInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-4">Quick Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Budget Range</span>
                    <span className="text-white font-semibold">$50K - $100K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Completion</span>
                    <span className="text-green-400 font-semibold">100%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Client Rating</span>
                    <span className="text-yellow-400 font-semibold">★★★★★</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="mb-20" ref={resultsRef}>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isResultsInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Results Achieved
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Measurable outcomes that demonstrate the success and impact of our solution
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudy.results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={isResultsInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-green-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/10"
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-semibold text-lg leading-tight group-hover:text-green-300 transition-colors">
                      {result}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-20" ref={processRef}>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isProcessInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Our Process
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The systematic approach we followed to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={isProcessInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group text-center bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-blue-400 mb-3">{String(index + 1).padStart(2, "0")}</div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="mb-20" ref={testimonialRef}>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isTestimonialInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-blue-500/20 rounded-3xl p-12 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
            <div className="relative z-10">
              <div className="text-center mb-8">
                <Quote className="w-16 h-16 text-blue-400 mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Client Testimonial</h2>
              </div>

              <blockquote className="text-xl md:text-2xl text-gray-300 italic text-center mb-8 leading-relaxed max-w-4xl mx-auto">
                &ldquo;{caseStudy.testimonial.quote}&rdquo;
              </blockquote>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {caseStudy.testimonial.author.charAt(0)}
                </div>
                <p className="text-white font-bold text-xl mb-2">{caseStudy.testimonial.author}</p>
                <p className="text-blue-300 font-semibold">{caseStudy.testimonial.position}</p>
                <p className="text-gray-400">{caseStudy.client}</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Navigation & CTA */}
        <section className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-gray-800">
          <Link
            href="/case-studies"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors font-semibold text-lg"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Case Studies
          </Link>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl text-center"
            >
              Start Your Project
            </Link>
            <Link
              href="/projects"
              className="border-2 border-gray-600/50 hover:border-blue-500/50 text-gray-300 hover:text-blue-300 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 backdrop-blur-sm hover:bg-white/5 text-center"
            >
              View More Projects
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
