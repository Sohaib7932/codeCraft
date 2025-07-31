'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import caseStudiesData from '../data/caseStudies.json';

export default function Home() {
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
              Crafting Digital Solutions for Tomorrow&apos;s Challenges
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto">
              We are a software development agency specializing in building innovative and scalable applications. Our team of experts is dedicated to delivering high-quality solutions tailored to your business needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16 px-8" style={{ backgroundColor: '#121417' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-12">Our Services</h2>
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
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                  <line x1="12" y1="18" x2="12.01" y2="18"/>
                </svg>
              </div>
              <h3 className="text-lg text-white mb-2">Mobile App Development</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Creating native and cross-platform mobile applications for iOS and Android.
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
              <h3 className="text-lg text-white mb-2">Database Management</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Designing and managing robust and scalable database solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Development Process Section */}
      <section className="py-16 px-8" style={{ backgroundColor: '#121417' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-12">Our Development Process</h2>
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

      {/* Portfolio Section */}
      <section className="py-16 px-8" style={{ backgroundColor: '#121417' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-12">Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="bg-teal-100 rounded-2xl h-[200px] flex items-center justify-center mb-4">
                <div className="bg-white rounded-lg p-6 shadow-md max-w-sm w-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm font-medium text-gray-600">Rental Reservation</div>
                    <div className="w-8 h-6 bg-orange-400 rounded"></div>
                  </div>
                  <div className="text-xs text-gray-500 mb-2">Due</div>
                  <div className="space-y-2">
                    <div className="h-2 bg-gray-200 rounded"></div>
                    <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Project Alpha</h3>
                <p className="text-gray-500 text-sm">
                  A cutting-edge web application for a leading e-commerce company.
                </p>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-50 rounded-2xl h-[200px] p-8 flex items-center justify-center mb-4">
                <div className="grid grid-cols-3 gap-2 max-w-sm w-full">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="w-full h-16 bg-green-200 rounded mb-2"></div>
                    <div className="h-1 bg-gray-200 rounded mb-1"></div>
                    <div className="h-1 bg-gray-200 rounded w-2/3"></div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="w-full h-16 bg-pink-200 rounded mb-2"></div>
                    <div className="h-1 bg-gray-200 rounded mb-1"></div>
                    <div className="h-1 bg-gray-200 rounded w-3/4"></div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="w-full h-16 bg-gray-200 rounded mb-2"></div>
                    <div className="h-1 bg-gray-200 rounded mb-1"></div>
                    <div className="h-1 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Project Beta</h3>
                <p className="text-gray-500 text-sm">
                  A user-friendly mobile app for a healthcare provider.
                </p>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-800 rounded-2xl h-[200px] p-8 flex items-center justify-center mb-4">
                <div className="bg-gray-900 rounded-lg p-6 max-w-sm w-full">
                  <div className="text-green-400 font-mono text-xs space-y-2">
                    <div className="flex items-center">
                      <span className="text-gray-500 mr-2">$</span>
                      <span>npm start</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-500 mr-2">$</span>
                      <span>build complete</span>
                    </div>
                    <div className="text-gray-500 text-xs mt-4">
                      Local: http://localhost:3000
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Project Gamma</h3>
                <p className="text-gray-500 text-sm">
                  A comprehensive dashboard for a data analytics platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-8" style={{ backgroundColor: '#121417' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-12">Testimonials</h2>
          <div className="space-y-8">
            <div>
              <div className="flex items-start space-x-4 mb-3">
                <Image src="/assets/Sohaib.jpg" alt="Sophia Clark" width={48} height={48} className="w-12 h-12 rounded-full object-cover flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-white">Sophia Clark</h3>
                  <div className="text-sm text-gray-500">2023-08-15</div>
                </div>
              </div>
              <div className="flex items-center mb-3">
                <div className="text-white text-lg">★★★★★</div>
              </div>
              <p className="text-white text-sm leading-relaxed">
                CodeCraft delivered an exceptional web application that exceeded our expectations. Their professionalism and attention to detail were truly impressive.
              </p>
            </div>
            
            <div>
              <div className="flex items-start space-x-4 mb-3">
                <Image src="/assets/Sohaib.jpg" alt="Ethan Bennett" width={48} height={48} className="w-12 h-12 rounded-full object-cover flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-white">Ethan Bennett</h3>
                  <div className="text-sm text-gray-500">2023-07-22</div>
                </div>
              </div>
              <div className="flex items-center mb-3">
                <div className="text-white text-lg">★★★★★</div>
              </div>
              <p className="text-white text-sm leading-relaxed">
                We are extremely satisfied with the mobile app developed by CodeCraft. It&apos;s user-friendly and has significantly improved our customer engagement.
              </p>
            </div>
            
            <div>
              <div className="flex items-start space-x-4 mb-3">
                <Image src="/assets/Sohaib.jpg" alt="Olivia Hayes" width={48} height={48} className="w-12 h-12 rounded-full object-cover flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-white">Olivia Hayes</h3>
                  <div className="text-sm text-gray-500">2023-06-10</div>
                </div>
              </div>
              <div className="flex items-center mb-3">
                <div className="text-white text-lg">★★★★☆</div>
              </div>
              <p className="text-white text-sm leading-relaxed">
                CodeCraft provided a solid database solution that met our requirements. Their team was responsive and helpful throughout the process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 px-8" style={{ backgroundColor: '#121417' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-12">About Us</h2>
          <div className="bg-gray-800 rounded-lg p-8">
            <p className="text-gray-300 text-sm leading-relaxed">
              CodeCraft is a team of experienced software developers passionate about creating innovative solutions. We are committed to delivering high-quality applications that drive business growth and provide exceptional user experiences. Our expertise spans various technologies and industries, allowing us to tackle complex challenges with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 px-8" style={{ backgroundColor: '#121417' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-12">Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="bg-white rounded-2xl p-8 flex items-center justify-center h-40">
              <div className="text-teal-500 text-4xl font-light">⚛</div>
            </div>
            <div className="bg-gray-800 rounded-2xl p-8 flex flex-col items-center justify-center h-40">
              <div className="w-12 h-12 border-2 border-teal-400 rounded-full flex items-center justify-center mb-2">
                <div className="w-6 h-6 bg-teal-400 rounded-full"></div>
              </div>
              <div className="text-white text-xs">mirde natural</div>
            </div>
            <div className="bg-yellow-500 rounded-2xl p-8 flex items-center justify-center h-40">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white rounded-full"></div>
                <div className="text-white font-semibold text-sm">PostgreSQL</div>
              </div>
            </div>
            <div className="bg-blue-900 rounded-2xl p-8 flex items-center justify-center h-40">
              <div className="text-white font-bold text-2xl">aws</div>
            </div>
            <div className="bg-blue-600 rounded-2xl p-8 flex items-center justify-center h-40">
              <div className="text-white font-bold text-xl">docker</div>
            </div>
            <div className="bg-teal-600 rounded-2xl p-8 flex items-center justify-center h-40 md:col-start-1">
              <div className="text-white text-4xl">🏠</div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Case Studies Section */}
      <section className="py-16 px-8" style={{ backgroundColor: '#121417' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-12">Latest Case Studies</h2>
          <Link href={`/case-studies/${caseStudiesData.caseStudies[0].id}`} className="block group">
            <div className="flex items-stretch rounded-2xl overflow-hidden bg-gray-800 hover:bg-gray-700 transition-colors duration-300 cursor-pointer">
              <div className="flex-1 p-8">
                <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {caseStudiesData.caseStudies[0].industry}
                </span>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                  {caseStudiesData.caseStudies[0].title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Discover how we helped {caseStudiesData.caseStudies[0].client} achieve remarkable results including {caseStudiesData.caseStudies[0].results[0].toLowerCase()} through our innovative healthcare management platform.
                </p>
                <div className="flex items-center text-blue-400 text-sm font-semibold group-hover:text-blue-300 transition-colors">
                  <span>Read Full Case Study</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              <div className="w-80 bg-gradient-to-br from-blue-500 to-blue-700 p-8 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="text-white font-semibold">
                    Success Story
                  </div>
                  <div className="text-blue-100 text-sm mt-1">
                    {caseStudiesData.caseStudies[0].duration} project
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 text-center" style={{ backgroundColor: '#121417' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project and discover how CodeCraft can help you achieve your goals.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Get Started
          </button>
        </div>
      </section>
    </>
  );
}