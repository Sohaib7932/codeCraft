"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import {
  ExternalLink,
  Github,
  Code2,
  Database,
  Cloud,
  Smartphone,
  Globe,
  ShoppingCart,
  Building2,
  Filter,
  TrendingUp,
  Users,
  Award,
  Clock,
} from "lucide-react"
import projectsData from "../../data/projects.json"

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  projectLink: string
  category: string
  featured?: boolean
  duration?: string
  client?: string
  results?: string[]
}

const categories = [
  { name: "All", value: "all", icon: Globe },
  { name: "Web Apps", value: "web", icon: Code2 },
  { name: "Mobile", value: "mobile", icon: Smartphone },
  { name: "E-commerce", value: "ecommerce", icon: ShoppingCart },
  { name: "Enterprise", value: "enterprise", icon: Building2 },
]

const techStack = [
  {
    category: "Frontend Development",
    icon: Code2,
    technologies: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    category: "Backend Development",
    icon: Database,
    technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL"],
    color: "from-green-500 to-emerald-500",
  },
  {
    category: "Cloud Infrastructure",
    icon: Cloud,
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"],
    color: "from-purple-500 to-pink-500",
  },
  {
    category: "Mobile Development",
    icon: Smartphone,
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Expo"],
    color: "from-orange-500 to-red-500",
  },
]

const stats = [
  { icon: TrendingUp, value: "95%", label: "Client Satisfaction", description: "Average client satisfaction rating" },
  { icon: Clock, value: "100%", label: "On-Time Delivery", description: "Projects delivered on schedule" },
  { icon: Award, value: "4.9/5", label: "Project Rating", description: "Average project quality rating" },
  { icon: Users, value: "50+", label: "Happy Clients", description: "Successful client partnerships" },
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all")
  const heroRef = useRef(null)
  const projectsRef = useRef(null)
  const techRef = useRef(null)
  const statsRef = useRef(null)

  const isProjectsInView = useInView(projectsRef, { once: true, margin: "-100px" })
  const isTechInView = useInView(techRef, { once: true, margin: "-100px" })
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" })

  const projects: Project[] = projectsData.projects

  const filteredProjects = projects.filter((project) =>
    activeCategory === "all" ? true : project.category.toLowerCase() === activeCategory,
  )

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Projects Hero Background"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-blue-900/80 to-purple-900/90"></div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
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
              Showcasing Innovation & Excellence
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-tight">
              Our
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Explore our latest projects showcasing innovative solutions, cutting-edge technologies, and exceptional
              results across diverse industries.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center"
              >
                View All Projects
                <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
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

      {/* Project Categories Filter */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.value}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.value)}
                className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeCategory === category.value
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-700/50"
                }`}
              >
                <category.icon className="w-5 h-5 mr-2" />
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-24 bg-gray-950" ref={projectsRef}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isProjectsInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their ideas into successful digital solutions
            </p>
          </motion.div>

          <div className="space-y-12">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ y: 50, opacity: 0 }}
                animate={isProjectsInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } flex flex-col lg:flex`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Project Content */}
                <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center relative z-10">
                  <div className="inline-flex items-center px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium mb-4 w-fit">
                    <Filter className="w-4 h-4 mr-2" />
                    {project.category}
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-lg leading-relaxed mb-6">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm font-medium border border-gray-600/50 hover:bg-blue-500/20 hover:text-blue-300 hover:border-blue-500/50 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.projectLink}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="group/btn bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center"
                    >
                      View Project
                      <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </motion.a>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="group/btn border-2 border-gray-600/50 text-gray-300 hover:border-blue-500/50 hover:text-blue-300 px-6 py-3 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm flex items-center"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </motion.button>
                  </div>
                </div>

                {/* Project Image */}
                <div className="flex-1 lg:max-w-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <Image
                    src={project.image || "/placeholder.svg?height=400&width=600&query=modern web application"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 bg-gray-900" ref={techRef}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isTechInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Technology Stack
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We leverage cutting-edge technologies to build scalable, performant, and maintainable solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStack.map((stack, index) => (
              <motion.div
                key={stack.category}
                initial={{ y: 50, opacity: 0 }}
                animate={isTechInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${stack.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <stack.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                  {stack.category}
                </h3>

                <div className="space-y-2">
                  {stack.technologies.map((tech) => (
                    <div key={tech} className="text-gray-400 text-sm">
                      • {tech}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results & Stats Section */}
      <section className="py-24 bg-gray-950" ref={statsRef}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isStatsInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Proven Results
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our commitment to excellence is reflected in the success metrics and client satisfaction we consistently
              achieve
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ y: 50, opacity: 0 }}
                animate={isStatsInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group text-center bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>

                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {stat.value}
                </div>

                <div className="text-lg font-semibold text-gray-300 mb-2">{stat.label}</div>

                <div className="text-sm text-gray-500">{stat.description}</div>
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
              Ready to Start Your Next Project?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life with innovative technology solutions that drive real
              business results.
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
                View More Projects
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
