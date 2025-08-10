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
    color: "from-blue-50 to-blue-100",
    iconColor: "text-blue-600",
  },
  {
    category: "Backend Development",
    icon: Database,
    technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL"],
    color: "from-green-50 to-green-100",
    iconColor: "text-green-600",
  },
  {
    category: "Cloud Infrastructure",
    icon: Cloud,
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"],
    color: "from-slate-50 to-slate-100",
    iconColor: "text-slate-600",
  },
  {
    category: "Mobile Development",
    icon: Smartphone,
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Expo"],
    color: "from-orange-50 to-orange-100",
    iconColor: "text-orange-600",
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Portfolio showcase of innovative projects"
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
              y: [0, -25, 0],
              rotate: [0, 8, 0],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute top-20 right-20 w-28 h-28 bg-blue-100 rounded-2xl opacity-60"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 12,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-20 left-20 w-32 h-32 bg-slate-100 rounded-full opacity-50"
          />
          <motion.div
            animate={{
              y: [0, -15, 0],
              x: [0, 8, 0],
            }}
            transition={{
              duration: 14,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute top-1/2 left-1/4 w-20 h-20 bg-green-100 rounded-xl opacity-40"
          />
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
                    <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Our Projects
            </h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto mb-12 leading-relaxed"
            >
              Explore our latest projects showcasing innovative solutions, cutting-edge technologies, and exceptional
              results across diverse industries.
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
                View All Projects
                <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
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

      {/* Project Categories Filter */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.value}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.value)}
                className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeCategory === category.value
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 hover:border-slate-300"
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
      <section className="py-24 bg-white" ref={projectsRef}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isProjectsInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Featured Projects</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover how we&apos;ve helped businesses transform their ideas into successful digital solutions
            </p>
          </motion.div>

          <div className="space-y-12">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ y: 50, opacity: 0 }}
                animate={isProjectsInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`group relative bg-white border border-slate-200 rounded-3xl overflow-hidden hover:border-blue-300 hover:shadow-xl transition-all duration-500 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } flex flex-col lg:flex`}
              >
                {/* Project Content */}
                <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4 w-fit">
                    <Filter className="w-4 h-4 mr-2" />
                    {project.category}
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 text-lg leading-relaxed mb-6">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.projectLink}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="group/btn bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center"
                    >
                      View Project
                      <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </motion.a>

                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="group/btn border-2 border-slate-300 text-slate-700 hover:border-blue-300 hover:text-blue-600 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-blue-50 flex items-center"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </motion.button>
                  </div>
                </div>

                {/* Project Image */}
                <div className="flex-1 lg:max-w-lg relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg?height=400&width=600"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 bg-slate-50" ref={techRef}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isTechInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Technology Stack</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
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
                className="group bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${stack.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <stack.icon className={`w-8 h-8 ${stack.iconColor}`} />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {stack.category}
                </h3>

                <div className="space-y-2">
                  {stack.technologies.map((tech) => (
                    <div key={tech} className="text-slate-600 text-sm flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                      {tech}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results & Stats Section */}
      <section className="py-24 bg-white" ref={statsRef}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isStatsInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Proven Results</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
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
                className="group text-center bg-white border border-slate-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>

                <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {stat.value}
                </div>

                <div className="text-lg font-semibold text-slate-700 mb-2">{stat.label}</div>
                <div className="text-sm text-slate-500">{stat.description}</div>
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
            alt="Start your next project"
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
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">Ready to Start Your Next Project?</h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-12 max-w-2xl mx-auto">
              Let&apos;s collaborate to bring your vision to life with innovative technology solutions that drive real
              business results.
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
                View More Projects
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
