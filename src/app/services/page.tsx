'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <Image 
          src="/assets/homepage.png" 
          alt="Hero Background" 
          width={1920} 
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 flex items-center justify-center h-full px-8">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold text-white mb-4 leading-tight">
              Our Services
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto">
              Discover our comprehensive range of software development services. From web applications to mobile apps, cloud solutions to consulting - we deliver tailored solutions that drive your business forward.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-8" style={{ backgroundColor: '#121417' }}>
        <div className="max-w-6xl mx-auto">

          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-5 text-white">Comprehensive Software Development</h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-10">We offer a full spectrum of software development services, ensuring your project&apos;s success from inception to completion.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-lg p-6 text-left" style={{ backgroundColor: '#1C2126', border: '1px solid #3b4554' }}>
              <div className="text-2xl mb-4 text-gray-400">&lt;/&gt;</div>
              <h3 className="text-lg text-white mb-2">Web Development</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Building responsive and dynamic websites using the latest technologies.
              </p>
            </div>

            <div className="rounded-lg p-6 text-left" style={{ backgroundColor: '#1C2126', border: '1px solid #3b4554' }}>
              <div className="mb-4">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <ellipse cx="12" cy="5" rx="9" ry="3"/>
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
                </svg>
              </div>
              <h3 className="text-lg text-white mb-2">Database Design</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Designing and managing robust and scalable database solutions.
              </p>
            </div>

            <div className="rounded-lg p-6 text-left" style={{ backgroundColor: '#1C2126', border: '1px solid #3b4554' }}>
              <div className="mb-4">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5"/>
                </svg>
              </div>
              <h3 className="text-lg text-white mb-2">Cloud Solutions</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Leveraging cloud technologies for enhanced performance and scalability.
              </p>
            </div>

            <div className="rounded-lg p-6 text-left" style={{ backgroundColor: '#1C2126', border: '1px solid #3b4554' }}>
              <div className="mb-4">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                  <line x1="12" y1="18" x2="12.01" y2="18"/>
                </svg>
              </div>
              <h3 className="text-lg text-white mb-2">Mobile App Development</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Creating native and cross-platform mobile applications for iOS and Android.
              </p>
            </div>
          </div>
          </div>

        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-5 text-white">Custom Software Solutions</h3>
          <p className="text-lg text-gray-300 leading-relaxed mb-10">We tailor our software development services to meet your specific business requirements, ensuring a perfect fit for your unique challenges.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-lg p-6 text-left" style={{ backgroundColor: '#1C2126', border: '1px solid #3b4554' }}>
              <div className="text-2xl mb-4 text-gray-400">&lt;/&gt;</div>
              <h3 className="text-lg text-white mb-2">Enterprise Software</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Building large-scale software solutions for complex business operations.
              </p>
            </div>

            <div className="rounded-lg p-6 text-left" style={{ backgroundColor: '#1C2126', border: '1px solid #3b4554' }}>
              <div className="mb-4">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5"/>
                </svg>
              </div>
              <h3 className="text-lg text-white mb-2">SaaS Applications</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Creating scalable and secure cloud-based solutions for businesses.
              </p>
            </div>

            <div className="rounded-lg p-6 text-left" style={{ backgroundColor: '#1C2126', border: '1px solid #3b4554' }}>
              <div className="mb-4">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h10M7 11h10M7 15h7"/>
                </svg>
              </div>
              <h3 className="text-lg text-white mb-2">E-commerce Platforms</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Building user-friendly e-commerce platforms for online sales.
              </p>
            </div>

            <div className="rounded-lg p-6 text-left" style={{ backgroundColor: '#1C2126', border: '1px solid #3b4554' }}>
              <div className="mb-4">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
                </svg>
              </div>
              <h3 className="text-lg text-white mb-2">API Development</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Designing APIs for seamless integration with third-party systems.
              </p>
            </div>
          </div>
          </div>

        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-5 text-white">Technology Consulting</h3>
          <p className="text-lg text-gray-300 leading-relaxed mb-10">Our expert consultants provide strategic guidance to help you make informed decisions about your technology investments.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-lg p-6 text-left" style={{ backgroundColor: '#1C2126', border: '1px solid #3b4554' }}>
              <div className="text-2xl mb-4 text-gray-400">&lt;/&gt;</div>
              <h3 className="text-lg text-white mb-2">Technology Strategy</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Developing a comprehensive technology strategy aligned with your business goals.
              </p>
            </div>

            <div className="rounded-lg p-6 text-left" style={{ backgroundColor: '#1C2126', border: '1px solid #3b4554' }}>
              <div className="mb-4">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M1 5h22m-2 0a1 1 0 00-1-1H4a1 1 0 00-1 1m3 0V3a2 2 0 012-2h8a2 2 0 012 2v2"/>
                </svg>
              </div>
              <h3 className="text-lg text-white mb-2">System Architecture</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Designing scalable and efficient system architectures to support your application growth.
              </p>
            </div>

            <div className="rounded-lg p-6 text-left" style={{ backgroundColor: '#1C2126', border: '1px solid #3b4554' }}>
              <div className="mb-4">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
              </div>
              <h3 className="text-lg text-white mb-2">Security Consulting</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Providing expert security consulting to protect your applications and data from threats.
              </p>
            </div>

            <div className="rounded-lg p-6 text-left" style={{ backgroundColor: '#1C2126', border: '1px solid #3b4554' }}>
              <div className="mb-4">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-lg text-white mb-2">Performance Optimization</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Optimizing application performance to enhance user experience and reduce costs.
              </p>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Our Development Process Section */}
      <section className="py-16 px-8" style={{ backgroundColor: '#121417' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-12">Our Process</h2>
          <div className="relative">
            {/* Vertical connecting line */}
            <div className="absolute left-1 top-2 bottom-2 w-0.5 bg-white"></div>
            
            <div className="space-y-6">
              <div className="flex items-start relative">
                <div className="w-2 h-2 rounded-full bg-white mt-2 mr-4 flex-shrink-0 relative z-10"></div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Discovery & Planning</h3>
                  <p className="text-gray-500 text-sm">Understanding your business goals and requirements.</p>
                </div>
              </div>
              
              <div className="flex items-start relative">
                <div className="w-2 h-2 rounded-full bg-white mt-2 mr-4 flex-shrink-0 relative z-10"></div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Design & Prototyping</h3>
                  <p className="text-gray-500 text-sm">Creating wireframes and interactive prototypes.</p>
                </div>
              </div>
              
              <div className="flex items-start relative">
                <div className="w-2 h-2 rounded-full bg-white mt-2 mr-4 flex-shrink-0 relative z-10"></div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Development & Testing</h3>
                  <p className="text-gray-500 text-sm">Developing and rigorously testing the application.</p>
                </div>
              </div>
              
              <div className="flex items-start relative">
                <div className="w-2 h-2 rounded-full bg-white mt-2 mr-4 flex-shrink-0 relative z-10"></div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Deployment & Launch</h3>
                  <p className="text-gray-500 text-sm">Deploying the application to production servers.</p>
                </div>
              </div>
              
              <div className="flex items-start relative">
                <div className="w-2 h-2 rounded-full bg-white mt-2 mr-4 flex-shrink-0 relative z-10"></div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Maintenance & Support</h3>
                  <p className="text-gray-500 text-sm">Providing ongoing maintenance and support.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center py-20 px-5" style={{backgroundColor: '#1a1a1a'}}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-5 text-white">Ready to Transform Your Business?</h2>
          <p className="text-lg leading-relaxed mb-8 text-gray-300">
            Contact us today to discuss your project and discover how CodeCraft can help you achieve your goals.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300">
            Get Started
          </button>
        </div>
      </section>
    </>
  );
}
