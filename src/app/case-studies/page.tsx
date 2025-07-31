'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import caseStudiesData from '../../data/caseStudies.json';

interface CaseStudy {
  id: number;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  duration: string;
  image: string;
  testimonial: {
    quote: string;
    author: string;
    position: string;
  };
}

const caseStudies: CaseStudy[] = caseStudiesData.caseStudies;

export default function CaseStudies() {
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
              Case Studies
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto">
              Discover how we've helped businesses transform their operations and achieve remarkable results through innovative software solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 px-8" style={{ backgroundColor: '#121417' }}>
        <div className="max-w-6xl mx-auto">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Content Section */}
                  <div className="p-8 lg:p-12">
                    <div className="mb-6">
                      <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                        {study.industry}
                      </span>
                      <h2 className="text-3xl font-bold text-white mb-2">{study.title}</h2>
                      <p className="text-gray-400 text-lg">Client: {study.client}</p>
                      <Link 
                        href={`/case-studies/${study.id}`}
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors mt-4"
                      >
                        Read Full Case Study
                      </Link>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-3">Challenge</h3>
                        <p className="text-gray-300 leading-relaxed">{study.challenge}</p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-white mb-3">Solution</h3>
                        <p className="text-gray-300 leading-relaxed">{study.solution}</p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-white mb-3">Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="bg-gray-700 text-gray-300 px-3 py-1 rounded-lg text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="bg-gray-700 rounded-lg p-4">
                        <p className="text-gray-400 text-sm mb-1">Project Duration</p>
                        <p className="text-white font-semibold">{study.duration}</p>
                      </div>
                    </div>
                  </div>

                  {/* Image Section */}
                  <div className="relative h-64 lg:h-full">
                    <Image
                      src={study.image}
                      alt={study.title}
                      width={600}
                      height={400}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Results Section */}
                <div className="bg-gray-900 p-8 lg:p-12">
                  <h3 className="text-2xl font-bold text-white mb-6">Results Achieved</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                    {study.results.map((result, resultIndex) => (
                      <div
                        key={resultIndex}
                        className="bg-gray-800 rounded-lg p-4 border-l-4 border-blue-500"
                      >
                        <p className="text-white font-semibold">{result}</p>
                      </div>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                        {study.testimonial.author.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-300 italic mb-4">"{study.testimonial.quote}"</p>
                        <div>
                          <p className="text-white font-semibold">{study.testimonial.author}</p>
                          <p className="text-gray-400 text-sm">{study.testimonial.position}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 px-8" style={{ backgroundColor: '#121417' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Proven Approach</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Every successful project follows our time-tested methodology that ensures exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Discovery & Analysis",
                description: "Deep dive into your business challenges and requirements"
              },
              {
                step: "02",
                title: "Strategic Planning",
                description: "Develop a comprehensive roadmap and technical architecture"
              },
              {
                step: "03",
                title: "Agile Development",
                description: "Build and iterate with continuous feedback and testing"
              },
              {
                step: "04",
                title: "Launch & Optimize",
                description: "Deploy successfully and continuously improve performance"
              }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{phase.title}</h3>
                <p className="text-gray-400 text-sm">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 text-center" style={{ backgroundColor: '#121417' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with innovative technology solutions.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Start Your Project
          </button>
        </div>
      </section>
    </>
  );
}
