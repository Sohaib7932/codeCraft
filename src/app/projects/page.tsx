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
import GradientBlobs from "../../components/GradientBlobs"

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
      <section ref={heroRef} className="relative bg-slate-50 overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_25%,_rgba(15,_23,_42,_0.02)_25%,_rgba(15,_23,_42,_0.02)_50%,_transparent_50%,_transparent_75%,_rgba(15,_23,_42,_0.02)_75%)] bg-[length:32px_32px]" />
        
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="text-center">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
                <Award className="w-4 h-4" />
                Project Portfolio
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-none mb-8">
                Enterprise solutions
                <br />
                <span className="text-slate-700">that deliver results</span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-12">
                Explore our portfolio of production-ready applications, enterprise platforms, 
                and innovative solutions built for scale.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
                >
                  View Projects
                  <ExternalLink className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center border border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors hover:bg-white"
                >
                  Start Your Project
                </a>
              </div>

              {/* Project Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                {[
                  { value: "50+", label: "Projects Completed" },
                  { value: "98%", label: "Client Satisfaction" },
                  { value: "100%", label: "On-Time Delivery" }
                ].map((metric) => (
                  <div key={metric.label} className="text-center p-6 bg-white rounded-lg border border-slate-200 shadow-sm">
                    <div className="text-3xl font-bold text-slate-900 mb-2">{metric.value}</div>
                    <div className="text-sm text-slate-600 font-medium">{metric.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
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
                    ? "bg-slate-900 text-white shadow-lg"
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
      <section className="py-24 bg-white" id="projects" ref={projectsRef}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={isProjectsInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Our Work</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Explore our portfolio of successful projects built for enterprises and growing businesses.
            </p>
          </motion.div>

          {/* Featured Project */}
          {filteredProjects.length > 0 && (
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={isProjectsInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-16 bg-slate-50 rounded-2xl overflow-hidden border border-slate-200"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="inline-flex items-center px-3 py-1 bg-slate-900 text-white rounded-full text-sm font-semibold mb-4 w-fit">
                    Featured
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                    {filteredProjects[0].title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {filteredProjects[0].description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {filteredProjects[0].technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-white border border-slate-200 text-slate-700 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <a href={filteredProjects[0].projectLink} className="inline-flex items-center bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors">
                      View Project <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                    <button className="inline-flex items-center border border-slate-300 text-slate-700 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
                      <Github className="w-4 h-4 mr-2" /> Code
                    </button>
                  </div>
                </div>
                
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={filteredProjects[0].image || "/placeholder.svg?height=400&width=600"}
                    alt={filteredProjects[0].title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* Other Projects Grid */}
          {filteredProjects.length > 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.slice(1).map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ y: 30, opacity: 0 }}
                  animate={isProjectsInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                  className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg?height=300&width=400"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="text-sm text-slate-600 mb-2">{project.category}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <a href={project.projectLink} className="text-slate-900 font-semibold hover:text-slate-700 transition-colors flex items-center text-sm">
                        View Project <ExternalLink className="ml-1 w-3 h-3" />
                      </a>
                      <button className="text-slate-600 hover:text-slate-900 transition-colors">
                        <Github className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-slate-50" ref={techRef}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Our Technology Stack</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We use enterprise-grade technologies to build scalable and maintainable solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((stack, index) => (
              <div key={stack.category} className="bg-white border border-slate-200 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stack.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-3">{stack.category}</h3>
                <div className="space-y-1">
                  {stack.technologies.slice(0, 4).map((tech) => (
                    <div key={tech} className="text-slate-600 text-sm">{tech}</div>
                  ))}
                  {stack.technologies.length > 4 && (
                    <div className="text-slate-500 text-xs">+{stack.technologies.length - 4} more</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results & Stats Section */}
      <section className="py-20 bg-white" ref={statsRef}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Project Results</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our commitment to quality and excellence is reflected in our project outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center bg-slate-50 rounded-xl p-6 border border-slate-200">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to start your next project?</h2>
          <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto">
            Let's collaborate to bring your vision to life with enterprise-grade technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
            >
              Start Your Project
            </a>
            <a
              href="#projects"
              className="border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:bg-white/10"
            >
              View More Projects
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
