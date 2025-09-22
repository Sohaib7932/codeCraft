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
import GradientBlobs from "../../components/GradientBlobs"
import AnimatedCounter, { PercentageCounter, TimeCounter, PlusCounter } from "../../components/AnimatedCounter"

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Full-stack web applications built with cutting-edge technologies like React, Next.js, and modern frameworks for optimal performance and user experience.",
    features: ["Responsive Design", "SEO Optimized", "Performance Focused", "Modern Frameworks"],
    color: "from-blue-50 to-blue-100",
    iconColor: "text-blue-600",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: Database,
    title: "Database Solutions",
    description:
      "Robust, scalable database architectures designed for high-performance data management and enterprise-level security.",
    features: ["Scalable Architecture", "Data Security", "Performance Tuned", "Cloud Integration"],
    color: "from-slate-50 to-slate-100",
    iconColor: "text-slate-600",
    technologies: ["PostgreSQL", "MongoDB", "Redis", "AWS RDS"],
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
     "Comprehensive cloud solutions leveraging AWS, Azure, and GCP for enhanced scalability, reliability, and cost-effectiveness.",
    features: ["Auto Scaling", "High Availability", "Cost Optimized", "DevOps Integration"],
    color: "from-green-50 to-green-100",
    iconColor: "text-green-600",
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
     "Native and cross-platform mobile applications delivering exceptional user experiences across iOS and Android platforms.",
    features: ["Cross Platform", "Native Performance", "App Store Ready", "Push Notifications"],
    color: "from-orange-50 to-orange-100",
    iconColor: "text-orange-600",
    technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
  },
]

const customSolutions = [
  {
    icon: Building2,
    title: "Enterprise Software",
    description:
      "Large-scale software solutions designed for complex business operations with enterprise-grade security, scalability, and integration capabilities.",
    color: "from-indigo-50 to-indigo-100",
    iconColor: "text-indigo-600",
    benefits: ["Scalable Architecture", "Enterprise Security", "Custom Integrations"],
  },
  {
    icon: Globe,
    title: "SaaS Applications",
    description:
      "Cloud-based software solutions with multi-tenant architecture, subscription management, and global scalability for modern businesses.",
    color: "from-cyan-50 to-cyan-100",
    iconColor: "text-cyan-600",
    benefits: ["Multi-Tenant", "Subscription Billing", "Global CDN"],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Platforms",
    description:
      "Feature-rich e-commerce solutions with advanced inventory management, payment processing, and customer analytics.",
    color: "from-pink-50 to-pink-100",
    iconColor: "text-pink-600",
    benefits: ["Payment Integration", "Inventory Management", "Analytics Dashboard"],
  },
  {
    icon: Zap,
    title: "API Development",
    description:
      "RESTful and GraphQL APIs with comprehensive documentation, authentication, and rate limiting for seamless third-party integrations.",
    color: "from-yellow-50 to-yellow-100",
    iconColor: "text-yellow-600",
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
    color: "from-blue-50 to-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: Lightbulb,
    title: "System Architecture",
    description:
      "Scalable and efficient system designs optimized for performance, maintainability, and future expansion.",
    metrics: "50% Cost Reduction",
    color: "from-green-50 to-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: Shield,
    title: "Security Consulting",
    description:
      "Advanced security assessments and implementations to protect your applications and data from evolving cyber threats.",
    metrics: "99.9% Security Score",
    color: "from-red-50 to-red-100",
    iconColor: "text-red-600",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description:
      "Application performance tuning and optimization to enhance user experience and reduce operational costs.",
    metrics: "300% Speed Improvement",
    color: "from-purple-50 to-purple-100",
    iconColor: "text-purple-600",
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section ref={heroRef} className="relative overflow-hidden bg-slate-50">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_25%,_rgba(15,_23,_42,_0.02)_25%,_rgba(15,_23,_42,_0.02)_50%,_transparent_50%,_transparent_75%,_rgba(15,_23,_42,_0.02)_75%)] bg-[length:32px_32px]" />
        
        {/* Animated Gradient Blobs */}
        <GradientBlobs variant="default" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="text-center">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
                <Code2 className="w-4 h-4" />
                Our Services
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-none mb-8">
                Enterprise solutions
                <br />
                <span className="text-slate-700">that drive innovation</span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-12">
                From web applications to mobile apps, cloud solutions to consulting - we deliver tailored software
                solutions that drive business growth and innovation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <a
                  href="/contact"
                  className="group inline-flex items-center justify-center bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:shadow-lg hover:scale-105"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="/projects"
                  className="group inline-flex items-center justify-center border border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:bg-white hover:shadow-lg hover:scale-105"
                >
                  View Portfolio
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50" ref={statsRef}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ y: 50, opacity: 0 }}
                animate={isStatsInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden text-center p-6 rounded-xl border border-slate-200/60 bg-gradient-to-br from-white via-slate-50/50 to-white backdrop-blur-sm shadow-lg shadow-slate-200/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-300/30 hover:border-slate-300/80 hover:bg-gradient-to-br hover:from-white hover:via-blue-50/30 hover:to-white"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200/80 text-slate-700 flex items-center justify-center ring-1 ring-slate-200/50 shadow-sm group-hover:ring-blue-300/60 group-hover:shadow-md group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-blue-50 group-hover:to-slate-100 transition-all duration-300">
                  <stat.icon className="w-7 h-7 group-hover:text-blue-600 transition-colors" />
                </div>
                <div className="text-2xl font-bold text-slate-900 mb-2">
                  {stat.value.includes('+') ? (
                    <PlusCounter value={parseInt(stat.value.replace('+', ''))} delay={0} duration={4500} />
                  ) : stat.value.includes('%') ? (
                    <PercentageCounter value={parseInt(stat.value.replace('%', ''))} delay={0} duration={4500} />
                  ) : stat.value.includes('/') ? (
                    stat.value
                  ) : (
                    <AnimatedCounter value={parseInt(stat.value)} delay={0} duration={4500} />
                  )}
                </div>
                <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
                <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-transparent via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-24 bg-white" ref={servicesRef}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isServicesInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Core Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive software development services designed to transform your business and drive innovation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
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
                    <p className="text-slate-600 text-sm font-medium">Advanced Technology Solutions</p>
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

                {/* Technology Stack - Inline */}
                <div className="flex gap-6 pt-4 border-t border-slate-200">
                  {service.technologies.slice(0, 3).map((tech) => (
                    <div key={tech} className="text-center">
                      <div className="text-sm font-bold text-slate-900">{tech}</div>
                      <div className="text-xs text-slate-500">Technology</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions Section */}
      <section className="py-24 bg-slate-50" ref={customRef}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isCustomInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Custom Solutions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
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
                className="group relative bg-white border border-slate-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-slate-900/30 ring-1 ring-white/20 group-hover:shadow-xl group-hover:shadow-slate-900/40 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-blue-900 group-hover:to-slate-900 transition-all duration-300">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {solution.title}
                </h3>

                <p className="text-slate-600 leading-relaxed mb-6">{solution.description}</p>

                <div className="space-y-2 mb-6">
                  {solution.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>

                <a href="/contact" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-300 group cursor-pointer">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Consulting Section */}
      <section className="py-24 bg-white" ref={consultingRef}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isConsultingInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Technology Consulting</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
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
                className="group bg-white border border-slate-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-slate-900/30 ring-1 ring-white/20 group-hover:shadow-xl group-hover:shadow-slate-900/40 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-blue-900 group-hover:to-slate-900 transition-all duration-300">
                  <item.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-4">{item.description}</p>

                <div className="text-blue-600 font-semibold text-sm">{item.metrics}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-50" ref={processRef}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isProcessInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Our Process</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery from concept to launch and beyond
            </p>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            {/* Connecting line */}
            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-500 to-slate-300 hidden md:block"></div>

            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ x: -50, opacity: 0 }}
                  animate={isProcessInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative flex items-start group"
                >
                  <div className="relative z-10 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-8 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="flex-1 bg-white border border-slate-200 rounded-xl p-8 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {step.title}
                      </h3>
                      <span className="text-sm text-blue-600 font-semibold bg-blue-100 px-3 py-1 rounded-full">
                        {step.duration}
                      </span>
                    </div>

                    <p className="text-slate-600 leading-relaxed mb-6">{step.description}</p>

                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 mb-3">Key Deliverables:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        {step.deliverables.map((deliverable) => (
                          <div key={deliverable} className="flex items-center text-sm text-slate-700">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
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

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=600&width=1920"
            alt="Ready to transform your business"
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
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">Ready to Transform Your Business?</h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-12 max-w-2xl mx-auto">
              Let&apos;s discuss your project and discover how our comprehensive services can help you achieve your
              technology goals and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
              >
                Start Your Project
              </motion.a>
              <motion.a
                href="/projects"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/30 hover:border-white/50 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white/10 cursor-pointer"
              >
                View More Projects
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
