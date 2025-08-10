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
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <motion.div style={{ y, opacity }} className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Professional software development services"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-white/90"></div>
        </motion.div>

        {/* Floating Elements */}
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

        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Our Services
            </h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto mb-12 leading-relaxed"
            >
              From web applications to mobile apps, cloud solutions to consulting - we deliver tailored software
              solutions that drive business growth and innovation.
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
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group border-2 border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-slate-50"
              >
                View Portfolio
              </motion.button>
            </motion.div>
          </motion.div>
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
                className="text-center group"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-slate-600 text-sm font-medium">{stat.label}</div>
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
                initial={{ y: 50, opacity: 0 }}
                animate={isServicesInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative bg-white border border-slate-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                      {tech}
                    </span>
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
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <solution.icon className={`w-8 h-8 ${solution.iconColor}`} />
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

                <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-300 group">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
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
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon className={`w-6 h-6 ${item.iconColor}`} />
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
