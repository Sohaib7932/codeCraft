"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Code, Smartphone, Database, CheckCircle, Star, ExternalLink, Play } from "lucide-react"
import caseStudiesData from "../data/caseStudies.json"
import GradientBlobs from "../components/GradientBlobs"

export default function Home() {
  const processRef = useRef(null)
  const servicesRef = useRef(null)
  const portfolioRef = useRef(null)
  const statsRef = useRef(null)

  const isProcessInView = useInView(processRef, { once: true, margin: "-100px" })
  const isServicesInView = useInView(servicesRef, { once: true, margin: "-100px" })
  const isPortfolioInView = useInView(portfolioRef, { once: true, margin: "-100px" })
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" })

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Full-stack web applications built with cutting-edge technologies like React, Next.js, and Node.js for optimal performance and scalability.",
      features: ["Responsive Design", "SEO Optimized", "Performance Focused"],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile solutions using React Native and Flutter, delivering seamless user experiences across all devices.",
      features: ["iOS & Android", "Cross-Platform", "Native Performance"],
    },
    {
      icon: Database,
      title: "Backend & Database",
      description:
        "Robust backend architectures and database solutions designed for scalability, security, and high-performance data management.",
      features: ["Cloud Infrastructure", "API Development", "Data Security"],
    },
  ]

  const techStack = [
    { name: "React", color: "from-blue-50 to-blue-100", textColor: "text-blue-600", icon: "⚛️" },
    { name: "Next.js", color: "from-slate-50 to-slate-100", textColor: "text-slate-700", icon: "▲" },
    { name: "Node.js", color: "from-green-50 to-green-100", textColor: "text-green-600", icon: "⬢" },
    { name: "PostgreSQL", color: "from-indigo-50 to-indigo-100", textColor: "text-indigo-600", icon: "🐘" },
    { name: "AWS", color: "from-orange-50 to-orange-100", textColor: "text-orange-600", icon: "☁️" },
    { name: "Docker", color: "from-cyan-50 to-cyan-100", textColor: "text-cyan-600", icon: "🐳" },
  ]

  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          {/* <Image
            src="/assets/devTeam.jpg"
            alt="Software Development Team"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            priority
          /> */}
          <div className="absolute inset-0 bg-white/90"></div>
        </div>

        {/* Animated Gradient Blobs */}
        <GradientBlobs variant="default" />

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute top-20 right-20 w-20 h-20 bg-slate-100 rounded-2xl opacity-60"
          />
          <motion.div
            animate={{
              y: [0, 15, 0],
              rotate: [0, -3, 0],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-32 left-16 w-16 h-16 bg-blue-100 rounded-full opacity-50"
          />
          <motion.div
            animate={{
              y: [0, -10, 0],
              x: [0, 5, 0],
            }}
            transition={{
              duration: 7,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute top-1/3 left-1/4 w-12 h-12 bg-slate-200 rounded-xl opacity-40"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-6 text-slate-900 leading-tight"
            >
              Transforming Ideas into
              <br />
              <span className="text-blue-600">Digital Reality</span>
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              We build innovative, scalable software solutions that drive business growth and deliver exceptional user
              experiences.
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
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group border-2 border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-slate-50 flex items-center"
              >
                <Play className="mr-2 w-5 h-5" />
                View Our Work
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
                initial={{ scale: 0.5, opacity: 0 }}
                animate={isStatsInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">{stat.number}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white" ref={servicesRef}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isServicesInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Our Expertise</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive software development services tailored to your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 50, opacity: 0 }}
                animate={isServicesInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative bg-white border border-slate-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-blue-600" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process Section */}
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
              A proven methodology that ensures successful project delivery
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Connecting line */}
            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-500 to-slate-300 hidden md:block"></div>

            <div className="space-y-12">
              {[
                {
                  title: "Discovery & Strategy",
                  description:
                    "Deep dive into your business goals, target audience, and technical requirements to create a comprehensive project roadmap.",
                  number: "01",
                },
                {
                  title: "Design & Architecture",
                  description:
                    "Create intuitive user experiences and robust system architecture that scales with your business growth.",
                  number: "02",
                },
                {
                  title: "Development & Integration",
                  description:
                    "Agile development process with continuous integration, ensuring high-quality code and rapid iteration.",
                  number: "03",
                },
                {
                  title: "Testing & Quality Assurance",
                  description:
                    "Comprehensive testing including unit tests, integration tests, and user acceptance testing for reliability.",
                  number: "04",
                },
                {
                  title: "Deployment & Support",
                  description:
                    "Seamless deployment to production with ongoing maintenance, monitoring, and feature enhancements.",
                  number: "05",
                },
              ].map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ x: -50, opacity: 0 }}
                  animate={isProcessInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative flex items-start"
                >
                  <div className="relative z-10 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-8 flex-shrink-0 shadow-lg">
                    {step.number}
                  </div>

                  <div className="flex-1 bg-white border border-slate-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 bg-white" ref={portfolioRef}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isPortfolioInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Featured Projects</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Showcasing our latest work and innovative solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "FinTech Dashboard",
                description:
                  "Advanced financial analytics platform with real-time data visualization and AI-powered insights.",
                tech: ["React", "Node.js", "PostgreSQL"],
                gradient: "from-green-100 to-green-200",
                iconColor: "text-green-600",
              },
              {
                title: "Healthcare Mobile App",
                description: "Patient management system with telemedicine capabilities and secure health data storage.",
                tech: ["React Native", "Firebase", "AWS"],
                gradient: "from-blue-100 to-blue-200",
                iconColor: "text-blue-600",
              },
              {
                title: "E-commerce Platform",
                description:
                  "Scalable online marketplace with advanced search, payment processing, and inventory management.",
                tech: ["Next.js", "Stripe", "MongoDB"],
                gradient: "from-orange-100 to-orange-200",
                iconColor: "text-orange-600",
              },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ y: 50, opacity: 0 }}
                animate={isPortfolioInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-blue-300 hover:shadow-xl transition-all duration-300"
              >
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/80 rounded-full flex items-center justify-center backdrop-blur-sm shadow-lg">
                      <ExternalLink className={`w-8 h-8 ${project.iconColor}`} />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
                      >
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

      {/* Tech Stack Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Technologies We Master</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Cutting-edge tools and frameworks for modern software development
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`group relative bg-gradient-to-br ${tech.color} border border-slate-200 rounded-2xl p-6 h-32 flex flex-col items-center justify-center hover:shadow-lg transition-all duration-300 cursor-pointer`}
              >
                <div className="text-3xl mb-2">{tech.icon}</div>
                <div className={`${tech.textColor} font-semibold text-sm text-center`}>{tech.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Client Success Stories</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Trusted by businesses worldwide to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CTO, TechCorp",
                content:
                  "CodeCraft transformed our legacy system into a modern, scalable platform. Their expertise in cloud architecture and attention to detail exceeded our expectations.",
                rating: 5,
                image: "/placeholder.svg?height=48&width=48",
              },
              {
                name: "Michael Chen",
                role: "Founder, StartupXYZ",
                content:
                  "The mobile app they developed has been instrumental in our growth. User engagement increased by 300% within the first month of launch.",
                rating: 5,
                image: "/placeholder.svg?height=48&width=48",
              },
              {
                name: "Emily Rodriguez",
                role: "Product Manager, InnovateCo",
                content:
                  "Professional, responsive, and delivered on time. The web application they built handles our complex workflows seamlessly.",
                rating: 5,
                image: "/placeholder.svg?height=48&width=48",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white border border-slate-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed italic">&quot;{testimonial.content}&quot;</p>
                <div className="flex items-center">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-slate-200"
                  />
                  <div>
                    <div className="text-slate-900 font-semibold">{testimonial.name}</div>
                    <div className="text-slate-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Case Study Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Latest Case Study</h2>
          </div>

          <Link href={`/case-studies/${caseStudiesData.caseStudies[0].id}`} className="block group">
            <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden hover:border-blue-300 hover:shadow-xl transition-all duration-300">
              <div className="md:flex">
                <div className="md:w-2/3 p-12">
                  <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    {caseStudiesData.caseStudies[0].industry}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 group-hover:text-blue-600 transition-colors">
                    {caseStudiesData.caseStudies[0].title}
                  </h3>
                  <p className="text-slate-600 text-lg leading-relaxed mb-8">
                    Discover how we helped {caseStudiesData.caseStudies[0].client} achieve remarkable results including{" "}
                    {caseStudiesData.caseStudies[0].results[0].toLowerCase()} through our innovative healthcare
                    management platform.
                  </p>
                  <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                    <span className="text-lg">Read Full Case Study</span>
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
                <div className="md:w-1/3 bg-gradient-to-br from-blue-100 to-slate-100 p-12 flex items-center justify-center relative">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <svg
                        className="w-10 h-10 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <div className="text-slate-900 font-bold text-xl mb-2">Success Story</div>
                    <div className="text-slate-600">{caseStudiesData.caseStudies[0].duration} project</div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=600&width=1920"
            alt="Team collaboration"
            width={1920}
            height={600}
            className="w-full h-full object-cover opacity-10"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">Ready to Build Something Amazing?</h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-12 max-w-2xl mx-auto">
              Let&apos;s discuss your project and discover how we can help transform your vision into reality.
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
                Schedule a Call
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
