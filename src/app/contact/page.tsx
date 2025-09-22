"use client"

import type React from "react"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  Calendar,
  Linkedin,
  Instagram,
  Facebook,
  Github,
  Globe,
  ArrowRight,
  User,
  Building,
} from "lucide-react"
import { useCalendly } from "../../components/CalendlyWidget"

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Get in touch via email",
    contact: "hello@codecraft.dev",
    action: "mailto:hello@codecraft.dev",
    color: "from-blue-100 to-blue-200",
    iconColor: "text-blue-600",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak with our team",
    contact: "+1 (555) 123-4567",
    action: "tel:+15551234567",
    color: "from-green-100 to-green-200",
    iconColor: "text-green-600",
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Chat with us online",
    contact: "Available 24/7",
    action: "https://wa.me/923180977791?text=Hi%20there!%20I'm%20interested%20in%20your%20services.",
    color: "from-orange-100 to-orange-200",
    iconColor: "text-orange-600",
  },
  {
    icon: Calendar,
    title: "Schedule Meeting",
    description: "Book a consultation",
    contact: "Free 30-min call",
    action: "#",
    color: "from-slate-100 to-slate-200",
    iconColor: "text-slate-600",
  },
]

const officeInfo = [
  {
    icon: MapPin,
    title: "Office Location",
    details: ["123 Tech Street", "Innovation City, IC 12345", "United States"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM", "Sunday: Closed"],
  },
  {
    icon: Globe,
    title: "Global Reach",
    details: ["Serving clients worldwide", "Remote collaboration", "Multiple time zones"],
  },
]

const socialLinks = [
  { icon: Instagram, name: "Instagram", url: "https://www.instagram.com/code.kraft1/", color: "hover:text-blue-500" },
  { icon: Facebook, name: "Facebook", url: "https://www.facebook.com/profile.php?id=61581019661724", color: "hover:text-blue-500" },
  { icon: Linkedin, name: "LinkedIn", url: "https://www.linkedin.com/in/code-kraft-043904384", color: "hover:text-blue-600" },
  { icon: Github, name: "GitHub", url: "https://github.com/Sohaib7932/codeCraft", color: "hover:text-blue-500" },
]

const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on complexity and scope. Simple websites typically take 4-6 weeks, while complex applications can take 3-6 months. We&apos;ll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "Do you work with startups?",
    answer:
      "We love working with startups and have helped many launch their digital products. We offer flexible engagement models and can work within startup budgets while delivering high-quality solutions.",
  },
  {
    question: "What's your development process?",
    answer:
      "We follow an agile development methodology with regular check-ins, iterative development, and continuous client feedback. This ensures transparency and allows for adjustments throughout the project.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes, we offer comprehensive maintenance and support packages. This includes regular updates, security patches, performance monitoring, and feature enhancements as your business grows.",
  },
]

export default function ContactPage() {
  const { openCalendly, CalendlyComponent } = useCalendly("https://calendly.com/hr-codekraft/30min")
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    projectType: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const heroRef = useRef(null)
  const formRef = useRef(null)
  const faqRef = useRef(null)

  const isFormInView = useInView(formRef, { once: true, margin: "-100px" })
  const isFaqInView = useInView(faqRef, { once: true, margin: "-100px" })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
        projectType: "",
      })
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section ref={heroRef} className="relative">

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="text-center">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
                <MessageSquare className="w-4 h-4" />
                Get In Touch
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-none mb-8">
                Let's Build Something
                <br />
                <span className="text-slate-700">Amazing Together</span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-12">
                Ready to start your next project? Let's discuss how we can help you achieve your goals with our
                expert team and innovative solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Link
                  href="#form"
                  className="group inline-flex items-center justify-center bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:shadow-lg hover:scale-105"
                >
                  Start Conversation
                  <MessageSquare className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <button
                  onClick={openCalendly}
                  className="group inline-flex items-center justify-center border border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:bg-white hover:shadow-lg hover:scale-105"
                >
                  Schedule Call
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => {
              const isScheduleMeeting = method.title === "Schedule Meeting"
              const Element = isScheduleMeeting ? motion.button : motion.a
              
              return (
                <Element
                  key={method.title}
                  {...(isScheduleMeeting ? { onClick: openCalendly } : { href: method.action })}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative overflow-hidden bg-gradient-to-br from-white via-slate-50/30 to-white rounded-2xl p-6 border border-slate-200/60 shadow-lg shadow-slate-200/40 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-300/30 hover:border-slate-300/70 hover:bg-gradient-to-br hover:from-white hover:via-blue-50/20 hover:to-slate-50/50 cursor-pointer"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200/80 text-slate-700 flex items-center justify-center ring-1 ring-slate-200/50 shadow-sm group-hover:ring-blue-300/60 group-hover:shadow-md group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-blue-50 group-hover:to-slate-100 transition-all duration-300">
                    <method.icon className={`w-6 h-6 group-hover:text-blue-600 transition-colors`} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {method.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-2">{method.description}</p>
                  <p className="text-blue-600 font-semibold">{method.contact}</p>
                  <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Element>
              )
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24 bg-white" ref={formRef} id="form">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isFormInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Send Us a Message</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Tell us about your project and we&apos;ll get back to you within 24 hours
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={isFormInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-md">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-12 pr-4 py-3 bg-slate-100 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                            placeholder="Your full name"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-12 pr-4 py-3 bg-slate-100 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                          Company
                        </label>
                        <div className="relative">
                          <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full pl-12 pr-4 py-3 bg-slate-100 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                            placeholder="Your company name"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="projectType" className="block text-sm font-medium text-slate-700 mb-2">
                          Project Type
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-slate-100 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        >
                          <option value="">Select project type</option>
                          <option value="web-development">Web Development</option>
                          <option value="mobile-app">Mobile App</option>
                          <option value="ecommerce">E-commerce</option>
                          <option value="enterprise">Enterprise Software</option>
                          <option value="consulting">Consulting</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-100 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Brief description of your project"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-slate-100 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-300"
                        placeholder="Tell us more about your project requirements, timeline, and goals..."
                      ></textarea>
                    </div>
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 text-white px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </motion.button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Message Sent Successfully!</h3>
                    <p className="text-slate-700 mb-6">
                      Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                    </p>
                    <div className="text-blue-600 text-sm">Redirecting to form...</div>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={isFormInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col h-full justify-between space-y-4"
            >
              {/* First info div - aligns with top of form */}
              {officeInfo.slice(0, 1).map((info) => (
                <div key={info.title} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-md flex-1">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mr-3 flex-shrink-0">
                      <info.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 mb-2">{info.title}</h3>
                      <div className="space-y-1">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-slate-600 text-xs leading-relaxed">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Second info div */}
              {officeInfo.slice(1, 2).map((info) => (
                <div key={info.title} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-md flex-1">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mr-3 flex-shrink-0">
                      <info.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 mb-2">{info.title}</h3>
                      <div className="space-y-1">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-slate-600 text-xs leading-relaxed">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Third info div */}
              {officeInfo.slice(2, 3).map((info) => (
                <div key={info.title} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-md flex-1">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mr-3 flex-shrink-0">
                      <info.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 mb-2">{info.title}</h3>
                      <div className="space-y-1">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-slate-600 text-xs leading-relaxed">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Social Links - Fourth div */}
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-md flex-1">
                <h3 className="text-base font-bold text-slate-900 mb-3">Follow Us</h3>
                <div className="flex gap-3 justify-center">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-9 h-9 bg-slate-100 hover:bg-blue-100 rounded-lg flex items-center justify-center transition-all duration-300 ${social.color}`}
                    >
                      <social.icon className={`w-4 h-4 ${social.color.replace("hover:", "")}`} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50" ref={faqRef}>
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isFaqInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-600">Quick answers to common questions about our services and process</p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={isFaqInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-md hover:border-blue-300 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.question}</h3>
                <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
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
            alt="Ready to get started"
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
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">Ready to Get Started?</h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-12 max-w-2xl mx-auto">
              Let&apos;s turn your ideas into reality. Contact us today for a free consultation and discover how we can
              help your business thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={openCalendly}
                className="group inline-flex items-center justify-center bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:bg-slate-100 hover:shadow-lg hover:scale-105 cursor-pointer"
              >
                Schedule a Call
                <Calendar className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-0.5" />
              </button>
              <Link
                href="/projects"
                className="group inline-flex items-center justify-center border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:bg-white/10 hover:shadow-lg hover:scale-105"
              >
                View Our Work
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Calendly Widget */}
      <CalendlyComponent />
    </div>
  )
}
