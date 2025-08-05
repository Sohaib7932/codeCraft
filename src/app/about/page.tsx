"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
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
    image: "/assets/sohaib-removebg.png",
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
    image: "/assets/sohaib-removebg.png",
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
    image: "/assets/sohaib-removebg.png",
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
    image: "/assets/sohaib-removebg.png",
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
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We believe in the power of teamwork and open communication to achieve shared goals and deliver exceptional results.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "We are committed to delivering measurable outcomes that align with our clients' business objectives and drive growth.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Heart,
    title: "Client-Centric",
    description:
      "Our clients' success is our success. We prioritize understanding their needs and exceeding their expectations.",
    color: "from-orange-500 to-red-500",
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

export default function About() {
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
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/assets/homepage.png"
            alt="About Hero Background"
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
              Transforming Ideas into Digital Reality
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-tight">
              About
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                CodeCraft
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              We transform innovative ideas into robust, scalable software solutions. Our team of developers, designers,
              and strategists are dedicated to delivering exceptional results that drive your business forward.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center"
              >
                Meet Our Team
                <Users className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group border-2 border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 backdrop-blur-sm hover:bg-white/5"
              >
                Our Story
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-gray-900" ref={achievementsRef}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ y: 50, opacity: 0 }}
                animate={isAchievementsInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{achievement.value}</div>
                <div className="text-gray-300 font-semibold mb-1">{achievement.label}</div>
                <div className="text-gray-500 text-sm">{achievement.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-24 bg-gray-950" ref={storyRef}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isStoryInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Our Story
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
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
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Target className="w-6 h-6 mr-3 text-blue-400" />
                  Our Mission
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Our mission is to empower businesses with cutting-edge technology solutions that enhance efficiency,
                  drive growth, and create lasting value. We are committed to excellence in every project, ensuring our
                  clients achieve their strategic objectives through innovative software development.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Zap className="w-6 h-6 mr-3 text-purple-400" />
                  Our Vision
                </h3>
                <p className="text-gray-300 leading-relaxed">
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
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl p-8 backdrop-blur-sm border border-blue-500/20">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Code className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Founded in 2020</h3>
                  <p className="text-gray-300 leading-relaxed">
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
      <section className="py-24 bg-gray-900" ref={teamRef}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isTeamInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
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
                className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Image Section */}
                <div className="relative overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={400}
                    className="w-full h-80 object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                </div>

                {/* Content Section */}
                <div className="relative p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-blue-400 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">{member.description}</p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs font-medium"
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
                        className="w-8 h-8 bg-blue-600/20 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                      >
                        <Linkedin className="w-4 h-4 text-blue-400 hover:text-white" />
                      </a>
                    )}
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        className="w-8 h-8 bg-gray-600/20 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-colors"
                      >
                        <Github className="w-4 h-4 text-gray-400 hover:text-white" />
                      </a>
                    )}
                    {member.social.email && (
                      <a
                        href={`mailto:${member.social.email}`}
                        className="w-8 h-8 bg-purple-600/20 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-colors"
                      >
                        <Mail className="w-4 h-4 text-purple-400 hover:text-white" />
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
      <section className="py-24 bg-gray-950" ref={valuesRef}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isValuesInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Our Values
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
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
                className="group text-center bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <value.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                  {value.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-gray-900" ref={timelineRef}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isTimelineInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Our Journey
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Key milestones that have shaped our growth and success over the years
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Connecting line */}
            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ x: -50, opacity: 0 }}
                  animate={isTimelineInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative flex items-start group"
                >
                  <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-8 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {milestone.year}
                  </div>

                  <div className="flex-1 bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
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
              Ready to Work Together?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-2xl mx-auto">
              Let&apos;s discuss how our team can help transform your business with innovative technology solutions that
              drive real results.
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
                Get in Touch
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
