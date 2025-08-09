"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Users,
  Target,
  Lightbulb,
  Award,
  TrendingUp,
  Globe,
  Code,
  Heart,
  Zap,
  Mail,
  Linkedin,
  Github,
} from "lucide-react"

const teamMembers = [
  {
    name: "Maarij Bukhari",
    role: "CEO & Founder",
    image: "/placeholder.svg?height=400&width=300",
    description: "Visionary leader with 8+ years of experience in business strategy and technology innovation.",
    expertise: ["Business Strategy", "Product Vision", "Team Leadership"],
    social: {
      linkedin: "#",
      email: "maarij@codecraft.com",
    },
  },
  {
    name: "M. Sohaib",
    role: "Lead Developer",
    image: "/placeholder.svg?height=400&width=300",
    description: "Full-stack developer specializing in modern web technologies and scalable cloud solutions.",
    expertise: ["React/Next.js", "Node.js", "Cloud Architecture"],
    social: {
      linkedin: "#",
      github: "#",
      email: "sohaib@codecraft.com",
    },
  },
  {
    name: "Syed M. Taha",
    role: "Design Director",
    image: "/placeholder.svg?height=400&width=300",
    description: "Creative designer focused on user experience and modern interface design with 6+ years experience.",
    expertise: ["UI/UX Design", "Brand Identity", "Design Systems"],
    social: {
      linkedin: "#",
      email: "taha@codecraft.com",
    },
  },
  {
    name: "Hassan Naeem",
    role: "Project Manager",
    image: "/placeholder.svg?height=400&width=300",
    description: "Strategic project manager ensuring seamless delivery and exceptional client satisfaction.",
    expertise: ["Project Management", "Client Relations", "Agile Methodology"],
    social: {
      linkedin: "#",
      email: "hassan@codecraft.com",
    },
  },
]

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We embrace creativity and constantly seek new ways to solve complex problems with cutting-edge technology solutions.",
    color: "from-blue-100 to-blue-200",
    iconColor: "text-blue-600",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We believe in the power of teamwork and open communication to achieve shared goals and deliver exceptional results.",
    color: "from-green-100 to-green-200",
    iconColor: "text-green-600",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "We are committed to delivering measurable outcomes that align with our clients' business objectives and drive growth.",
    color: "from-orange-100 to-orange-200",
    iconColor: "text-orange-600",
  },
  {
    icon: Heart,
    title: "Client-Centric",
    description:
      "Our clients' success is our success. We prioritize understanding their needs and exceeding their expectations.",
    color: "from-slate-100 to-slate-200",
    iconColor: "text-slate-600",
  },
]

const achievements = [
  { icon: Users, value: "50+", label: "Happy Clients", description: "Successful partnerships worldwide" },
  { icon: Award, value: "100+", label: "Projects Delivered", description: "Across various industries" },
  { icon: TrendingUp, value: "95%", label: "Client Satisfaction", description: "Average project rating" },
  { icon: Globe, value: "15+", label: "Countries Served", description: "Global reach and impact" },
]

const milestones = [
  {
    year: "2020",
    title: "Company Founded",
    description:
      "CodeCraft was established with a vision to transform businesses through innovative technology solutions.",
  },
  {
    year: "2021",
    title: "First Major Client",
    description:
      "Successfully delivered our first enterprise-level project, establishing our reputation in the market.",
  },
  {
    year: "2022",
    title: "Team Expansion",
    description: "Grew our team to include specialized developers, designers, and project managers.",
  },
  {
    year: "2023",
    title: "Global Recognition",
    description: "Received industry awards and recognition for our innovative solutions and client satisfaction.",
  },
  {
    year: "2024",
    title: "Continued Growth",
    description: "Expanding our services and reaching new markets while maintaining our commitment to excellence.",
  },
]

export default function AboutPage() {
  const heroRef = useRef(null)
  const storyRef = useRef(null)
  const teamRef = useRef(null)
  const valuesRef = useRef(null)
  const achievementsRef = useRef(null)
  const timelineRef = useRef(null)

  const isStoryInView = useInView(storyRef, { once: true, margin: "-100px" })
  const isTeamInView = useInView(teamRef, { once: true, margin: "-100px" })
  const isValuesInView = useInView(valuesRef, { once: true, margin: "-100px" })
  const isAchievementsInView = useInView(achievementsRef, { once: true, margin: "-100px" })
  const isTimelineInView = useInView(timelineRef, { once: true, margin: "-100px" })

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="About Hero Background"
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
              Transforming Ideas into Digital Reality
            </motion.div>

            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-6 text-slate-900 leading-tight"
            >
              About
              <br />
              <span className="text-blue-600">CodeCraft</span>
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto mb-12 leading-relaxed"
            >
              We transform innovative ideas into robust, scalable software solutions. Our team of developers, designers,
              and strategists are dedicated to delivering exceptional results that drive your business forward.
            </motion.p>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                href="#team"
                className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center"
              >
                Meet Our Team
                <Users className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#story"
                className="group border-2 border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-slate-50"
              >
                Our Story
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-slate-50" ref={achievementsRef}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ y: 50, opacity: 0 }}
                animate={isAchievementsInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                  <achievement.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{achievement.value}</div>
                <div className="text-slate-700 font-semibold mb-1">{achievement.label}</div>
                <div className="text-slate-500 text-sm">{achievement.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-24 bg-white" ref={storyRef} id="story">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isStoryInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Our Story</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From a small startup to a trusted technology partner, discover our journey of innovation and growth
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={isStoryInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-md">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                  <Target className="w-6 h-6 mr-3 text-blue-600" />
                  Our Mission
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Our mission is to empower businesses with cutting-edge technology solutions that enhance efficiency,
                  drive growth, and create lasting value. We are committed to excellence in every project, ensuring our
                  clients achieve their strategic objectives through innovative software development.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-md">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                  <Zap className="w-6 h-6 mr-3 text-blue-600" />
                  Our Vision
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  To be the leading software development agency that transforms businesses through innovative technology
                  solutions, fostering long-term partnerships and driving digital transformation across industries
                  worldwide.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={isStoryInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-lg">
                <div className="text-center">
                  <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                    <Code className="w-12 h-12 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Founded in 2020</h3>
                  <p className="text-slate-700 leading-relaxed">
                    CodeCraft was born from a passion for technology and a vision to help businesses thrive in the
                    digital age. What started as a small team of dedicated developers has grown into a full-service
                    software development agency trusted by clients worldwide.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-slate-50" ref={teamRef} id="team">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isTeamInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Meet Our Team</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The talented individuals behind our success, each bringing unique expertise and passion to every project
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ y: 50, opacity: 0 }}
                animate={isTeamInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-md hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Image Section */}
                <div className="relative overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={400}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent"></div>
                </div>
                {/* Content Section */}
                <div className="relative p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-slate-700 text-sm leading-relaxed mb-4">{member.description}</p>
                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  {/* Social Links */}
                  <div className="flex gap-3">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        className="w-8 h-8 bg-blue-100 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                      >
                        <Linkedin className="w-4 h-4 text-blue-600 group-hover:text-white" />
                      </a>
                    )}
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        className="w-8 h-8 bg-slate-100 hover:bg-slate-600 rounded-lg flex items-center justify-center transition-colors"
                      >
                        <Github className="w-4 h-4 text-slate-600 group-hover:text-white" />
                      </a>
                    )}
                    {member.social.email && (
                      <a
                        href={`mailto:${member.social.email}`}
                        className="w-8 h-8 bg-slate-100 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                      >
                        <Mail className="w-4 h-4 text-slate-600 group-hover:text-white" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white" ref={valuesRef}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isValuesInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Our Values</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The core principles that guide our work and define our commitment to excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ y: 50, opacity: 0 }}
                animate={isValuesInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group text-center bg-white border border-slate-200 rounded-2xl p-8 shadow-md hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <value.icon className={`w-8 h-8 ${value.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-slate-50" ref={timelineRef}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isTimelineInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Our Journey</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Key milestones that have shaped our growth and success over the years
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Connecting line */}
            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-500 to-slate-300"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ x: -50, opacity: 0 }}
                  animate={isTimelineInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative flex items-start group"
                >
                  <div className="relative z-10 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-8 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    {milestone.year}
                  </div>
                  <div className="flex-1 bg-white border border-slate-200 rounded-xl p-6 shadow-md hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {milestone.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">{milestone.description}</p>
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
            alt="Ready to work together"
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
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">Ready to Work Together?</h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-12 max-w-2xl mx-auto">
              Let&apos;s discuss how our team can help transform your business with innovative technology solutions that
              drive real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start Your Project
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white/30 hover:border-white/50 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white/10"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
