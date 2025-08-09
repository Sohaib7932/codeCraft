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

export default function CaseStudyPage() {
  const params = useParams()
  const id = params?.id as string
  const caseStudy = caseStudies.find((study) => study.id === Number.parseInt(id))

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
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center max-w-md mx-auto px-6">
          <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-md">
              <ExternalLink className="w-12 h-12 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Case Study Not Found</h1>
            <p className="text-xl text-slate-600 mb-8">The case study you are looking for does not exist.</p>
            <Link
              href="/case-studies"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
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
      color: "from-blue-50 to-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Design & Planning",
      description: "Strategic planning and user experience design development",
      icon: Code,
      color: "from-green-50 to-green-100",
      iconColor: "text-green-600",
    },
    {
      title: "Development & Testing",
      description: "Agile development with continuous testing and quality assurance",
      icon: Database,
      color: "from-orange-50 to-orange-100",
      iconColor: "text-orange-600",
    },
    {
      title: "Launch & Optimization",
      description: "Deployment, monitoring, and continuous performance optimization",
      icon: TrendingUp,
      color: "from-slate-50 to-slate-100",
      iconColor: "text-slate-600",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={caseStudy.image || "/placeholder.svg?height=1080&width=1920"}
            alt={caseStudy.title}
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-white/90"></div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute top-20 right-20 w-24 h-24 bg-blue-100 rounded-2xl opacity-60"
          />
          <motion.div
            animate={{
              y: [0, 15, 0],
              rotate: [0, -3, 0],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-32 left-16 w-20 h-20 bg-slate-100 rounded-full opacity-50"
          />
          <motion.div
            animate={{
              y: [0, -10, 0],
              x: [0, 5, 0],
            }}
            transition={{
              duration: 12,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute top-1/3 left-1/4 w-16 h-16 bg-green-100 rounded-xl opacity-40"
          />
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
              className="inline-flex items-center px-6 py-3 bg-slate-100 border border-slate-200 rounded-full text-slate-700 text-sm font-medium mb-8 shadow-sm"
            >
              <Award className="w-4 h-4 mr-2 text-blue-500" />
              {caseStudy.industry} Success Story
            </motion.div>

            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold mb-6 text-slate-900 leading-tight"
            >
              {caseStudy.title}
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-slate-600 mb-8"
            >
              Client: <span className="font-semibold text-blue-600">{caseStudy.client}</span>
            </motion.p>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <div className="flex items-center text-slate-600">
                <Calendar className="w-5 h-5 mr-2 text-blue-500" />
                <span>{caseStudy.duration}</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-slate-300 rounded-full"></div>
              <div className="flex items-center text-slate-600">
                <Users className="w-5 h-5 mr-2 text-blue-500" />
                <span>Team of 8 Specialists</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Navigation Breadcrumb */}
      <section className="py-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            href="/case-studies"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors font-semibold"
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
                className="bg-white border border-slate-200 rounded-2xl p-8 shadow-md"
              >
                <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
                  <Target className="w-8 h-8 mr-3 text-blue-600" />
                  The Challenge
                </h2>
                <p className="text-lg text-slate-700 leading-relaxed">
                  {`${caseStudy.client} faced significant operational challenges that required a comprehensive digital transformation. The existing systems were outdated, inefficient, and couldn't scale with their growing business needs. They needed a modern, scalable solution that would streamline operations, improve user experience, and drive business growth.`}
                </p>
              </motion.div>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={isOverviewInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white border border-slate-200 rounded-2xl p-8 shadow-md"
              >
                <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
                  <Code className="w-8 h-8 mr-3 text-blue-600" />
                  Our Solution
                </h2>
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  {`We developed a comprehensive, scalable solution tailored to ${caseStudy.client}'s specific needs. Our approach involved modern architecture, user-centric design, and cutting-edge technologies to deliver a platform that not only solved immediate challenges but also positioned them for future growth.`}
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                    <h4 className="text-slate-900 font-semibold mb-2">Key Features</h4>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>
                        <CheckCircle className="w-4 h-4 text-green-500 inline-block mr-2" />
                        Scalable Architecture
                      </li>
                      <li>
                        <CheckCircle className="w-4 h-4 text-green-500 inline-block mr-2" />
                        Real-time Analytics
                      </li>
                      <li>
                        <CheckCircle className="w-4 h-4 text-green-500 inline-block mr-2" />
                        Mobile Responsive
                      </li>
                      <li>
                        <CheckCircle className="w-4 h-4 text-green-500 inline-block mr-2" />
                        Advanced Security
                      </li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                    <h4 className="text-slate-900 font-semibold mb-2">Technical Highlights</h4>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>
                        <CheckCircle className="w-4 h-4 text-green-500 inline-block mr-2" />
                        Cloud-Native Design
                      </li>
                      <li>
                        <CheckCircle className="w-4 h-4 text-green-500 inline-block mr-2" />
                        API-First Approach
                      </li>
                      <li>
                        <CheckCircle className="w-4 h-4 text-green-500 inline-block mr-2" />
                        Automated Testing
                      </li>
                      <li>
                        <CheckCircle className="w-4 h-4 text-green-500 inline-block mr-2" />
                        CI/CD Pipeline
                      </li>
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
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-md"
              >
                <h3 className="text-xl font-semibold text-slate-900 mb-6">Project Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                      <Calendar className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-slate-600 text-sm">Duration</p>
                      <p className="text-slate-900 font-semibold">{caseStudy.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                      <Users className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-slate-600 text-sm">Team Size</p>
                      <p className="text-slate-900 font-semibold">8 Specialists</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
                      <Award className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-slate-600 text-sm">Industry</p>
                      <p className="text-slate-900 font-semibold">{caseStudy.industry}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={isOverviewInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-md"
              >
                <h3 className="text-xl font-semibold text-slate-900 mb-6">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium border border-slate-200 hover:border-blue-300 transition-colors"
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
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-md"
              >
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Quick Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Budget Range</span>
                    <span className="text-slate-900 font-semibold">$50K - $100K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Completion</span>
                    <span className="text-green-600 font-semibold">100%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Client Rating</span>
                    <span className="text-yellow-500 font-semibold">★★★★★</span>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Results Achieved</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
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
                className="group bg-white border border-slate-200 rounded-2xl p-6 shadow-md hover:border-green-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-green-200 transition-colors duration-300">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-slate-900 font-semibold text-lg leading-tight group-hover:text-green-700 transition-colors">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Our Process</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
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
                className="group text-center bg-white border border-slate-200 rounded-2xl p-6 shadow-md hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <step.icon className={`w-8 h-8 ${step.iconColor}`} />
                </div>

                <div className="text-2xl font-bold text-blue-600 mb-3">{String(index + 1).padStart(2, "0")}</div>

                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonial Section */}
        {caseStudy.testimonial && (
          <section className="mb-20" ref={testimonialRef}>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={isTestimonialInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-slate-50 border border-slate-200 rounded-3xl p-12 relative overflow-hidden shadow-lg"
            >
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <Quote className="w-16 h-16 text-blue-500 mx-auto mb-6" />
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Client Testimonial</h2>
                </div>
                <blockquote className="text-xl md:text-2xl text-slate-700 italic text-center mb-8 leading-relaxed max-w-4xl mx-auto">
                  &ldquo;{caseStudy.testimonial.quote}&rdquo;
                </blockquote>
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl font-bold mx-auto mb-4 shadow-md">
                    {caseStudy.testimonial.author.charAt(0)}
                  </div>
                  <p className="text-slate-900 font-bold text-xl mb-2">{caseStudy.testimonial.author}</p>
                  <p className="text-blue-600 font-semibold">{caseStudy.testimonial.position}</p>
                  <p className="text-slate-600">{caseStudy.client}</p>
                </div>
              </div>
            </motion.div>
          </section>
        )}

        {/* Navigation & CTA */}
        <section className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-slate-200">
          <Link
            href="/case-studies"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors font-semibold text-lg"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Case Studies
          </Link>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl text-center"
            >
              Start Your Project
            </Link>
            <Link
              href="/projects"
              className="border-2 border-slate-300 hover:border-blue-300 text-slate-700 hover:text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-blue-50 text-center"
            >
              View More Projects
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
