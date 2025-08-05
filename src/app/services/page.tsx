"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import {
  Code2,
  Database,
  Cloud,
  Smartphone,
  Building2,
  Globe,
  ShoppingCart,
  Zap,
  Target,
  Shield,
  Gauge,
  Lightbulb,
  ArrowRight,
  CheckCircle,
  Users,
  Clock,
  Award,
  TrendingUp,
} from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Full-stack web applications built with cutting-edge technologies like React, Next.js, and modern frameworks for optimal performance and user experience.",
    features: ["Responsive Design", "SEO Optimized", "Performance Focused", "Modern Frameworks"],
    color: "from-blue-500 to-cyan-500",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: Database,
    title: "Database Solutions",
    description:
      "Robust, scalable database architectures designed for high-performance data management and enterprise-level security.",
    features: ["Scalable Architecture", "Data Security", "Performance Tuned", "Cloud Integration"],
    color: "from-purple-500 to-pink-500",
    technologies: ["PostgreSQL", "MongoDB", "Redis", "AWS RDS"],
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "Comprehensive cloud solutions leveraging AWS, Azure, and GCP for enhanced scalability, reliability, and cost-effectiveness.",
    features: ["Auto Scaling", "High Availability", "Cost Optimized", "DevOps Integration"],
    color: "from-green-500 to-emerald-500",
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile applications delivering exceptional user experiences across iOS and Android platforms.",
    features: ["Cross Platform", "Native Performance", "App Store Ready", "Push Notifications"],
    color: "from-orange-500 to-red-500",
    technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
  },
]

const customSolutions = [
  {
    icon: Building2,
    title: "Enterprise Software",
    description:
      "Large-scale software solutions designed for complex business operations with enterprise-grade security, scalability, and integration capabilities.",
    color: "from-indigo-500 to-purple-500",
    benefits: ["Scalable Architecture", "Enterprise Security", "Custom Integrations"],
  },
  {
    icon: Globe,
    title: "SaaS Applications",
    description:
      "Cloud-based software solutions with multi-tenant architecture, subscription management, and global scalability for modern businesses.",
    color: "from-teal-500 to-blue-500",
    benefits: ["Multi-Tenant", "Subscription Billing", "Global CDN"],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Platforms",
    description:
      "Feature-rich e-commerce solutions with advanced inventory management, payment processing, and customer analytics.",
    color: "from-pink-500 to-rose-500",
    benefits: ["Payment Integration", "Inventory Management", "Analytics Dashboard"],
  },
  {
    icon: Zap,
    title: "API Development",
    description:
      "RESTful and GraphQL APIs with comprehensive documentation, authentication, and rate limiting for seamless third-party integrations.",
    color: "from-yellow-500 to-orange-500",
    benefits: ["RESTful & GraphQL", "API Documentation", "Rate Limiting"],
  },
]

const consulting = [
  {
    icon: Target,
    title: "Technology Strategy",
    description:
      "Comprehensive technology roadmaps aligned with your business objectives, market demands, and growth projections.",
    metrics: "90% Success Rate",
  },
  {
    icon: Lightbulb,
    title: "System Architecture",
    description:
      "Scalable and efficient system designs optimized for performance, maintainability, and future expansion.",
    metrics: "50% Cost Reduction",
  },
  {
    icon: Shield,
    title: "Security Consulting",
    description:
      "Advanced security assessments and implementations to protect your applications and data from evolving cyber threats.",
    metrics: "99.9% Security Score",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description:
      "Application performance tuning and optimization to enhance user experience and reduce operational costs.",
    metrics: "300% Speed Improvement",
  },
]

const processSteps = [
  {
    title: "Discovery & Strategy",
    description:
      "Comprehensive analysis of your business goals, technical requirements, and market constraints to create a detailed project roadmap and technical specification.",
    duration: "1-2 weeks",
    deliverables: ["Technical Specification", "Project Roadmap", "Risk Assessment"],
  },
  {
    title: "Design & Architecture",
    description:
      "Creating intuitive user experiences, system architecture, and interactive prototypes that align with your brand identity and business objectives.",
    duration: "2-3 weeks",
    deliverables: ["UI/UX Design", "System Architecture", "Interactive Prototypes"],
  },
  {
    title: "Development & Integration",
    description:
      "Agile development methodology with continuous integration, automated testing, and regular code reviews to ensure high-quality deliverables.",
    duration: "4-16 weeks",
    deliverables: ["Source Code", "API Documentation", "Test Coverage Reports"],
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "Comprehensive testing including unit tests, integration tests, performance testing, and security audits to ensure reliability and security.",
    duration: "1-2 weeks",
    deliverables: ["Test Reports", "Performance Metrics", "Security Audit"],
  },
  {
    title: "Deployment & Launch",
    description:
      "Seamless deployment to production environments with monitoring setup, performance optimization, and launch support.",
    duration: "1 week",
    deliverables: ["Production Deployment", "Monitoring Setup", "Launch Support"],
  },
  {
    title: "Maintenance & Support",
    description:
      "Ongoing maintenance, feature updates, performance monitoring, and 24/7 technical support to ensure optimal performance.",
    duration: "Ongoing",
    deliverables: ["Regular Updates", "Performance Reports", "24/7 Support"],
  },
]

const stats = [
  { icon: Users, value: "500+", label: "Projects Delivered" },
  { icon: Clock, value: "99.9%", label: "Uptime Guarantee" },
  { icon: Award, value: "50+", label: "Industry Awards" },
  { icon: TrendingUp, value: "300%", label: "Average ROI" },
]

export default function Services() {
  const heroRef = useRef(null)
  const processRef = useRef(null)
  const servicesRef = useRef(null)
  const customRef = useRef(null)
  const consultingRef = useRef(null)
  const statsRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3])

  const isServicesInView = useInView(servicesRef, { once: true, margin: "-100px" })
  const isCustomInView = useInView(customRef, { once: true, margin: "-100px" })
  const isConsultingInView = useInView(consultingRef, { once: true, margin: "-100px" })
  const isProcessInView = useInView(processRef, { once: true, margin: "-100px" })
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" })

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with enhanced overlay */}
        <motion.div style={{ y, opacity }} className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Services Hero Background"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-blue-900/80 to-purple-900/90"></div>
        </motion.div>

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
              Comprehensive Software Development Services
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-tight">
              Our
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Services
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              From web applications to mobile apps, cloud solutions to consulting - we deliver tailored software
              solutions that drive business growth and innovation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group border-2 border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 backdrop-blur-sm hover:bg-white/5"
              >
                View Portfolio
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900" ref={statsRef}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ y: 50, opacity: 0 }}
                animate={isStatsInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-24 bg-gray-950" ref={servicesRef}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isServicesInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Core Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive software development services designed to transform your business and drive innovation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 50, opacity: 0 }}
                animate={isServicesInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions Section */}
      <section className="py-24 bg-gray-900" ref={customRef}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isCustomInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Custom Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Tailored software solutions designed to meet your unique business requirements and industry challenges
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {customSolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ y: 50, opacity: 0 }}
                animate={isCustomInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                ></div>

                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                    {solution.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-6">{solution.description}</p>

                  <div className="space-y-2 mb-6">
                    {solution.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>

                  <button className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300 group">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Consulting Section */}
      <section className="py-24 bg-gray-950" ref={consultingRef}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isConsultingInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Technology Consulting
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Strategic technology guidance to help you make informed decisions and maximize your technology investments
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {consulting.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ y: 50, opacity: 0 }}
                animate={isConsultingInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.description}</p>

                <div className="text-purple-400 font-semibold text-sm">{item.metrics}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-900" ref={processRef}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isProcessInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Our Process
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery from concept to launch and beyond
            </p>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            {/* Connecting line */}
            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ x: -50, opacity: 0 }}
                  animate={isProcessInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative flex items-start group"
                >
                  <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-8 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="flex-1 bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-xl p-8 hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                        {step.title}
                      </h3>
                      <span className="text-sm text-blue-400 font-semibold bg-blue-500/20 px-3 py-1 rounded-full">
                        {step.duration}
                      </span>
                    </div>

                    <p className="text-gray-400 leading-relaxed mb-6">{step.description}</p>

                    <div>
                      <h4 className="text-sm font-semibold text-white mb-3">Key Deliverables:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        {step.deliverables.map((deliverable) => (
                          <div key={deliverable} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {deliverable}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-2xl mx-auto">
              Let&apos;s discuss your project and discover how our comprehensive services can help you achieve your
              technology goals and drive business growth.
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
