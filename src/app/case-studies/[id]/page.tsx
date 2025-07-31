'use client';
import caseStudiesData from '../../../data/caseStudies.json';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CaseStudy() {
  const params = useParams();
  const id = params?.id as string;
  const caseStudy = caseStudiesData.caseStudies.find((study) => study.id === parseInt(id));

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#121417' }}>
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Case Study Not Found</h1>
          <p className="text-xl text-gray-400 mb-8">The case study you are looking for does not exist.</p>
          <Link 
            href="/case-studies"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Back to Case Studies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#121417' }} className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image 
          src={caseStudy.image} 
          alt={caseStudy.title} 
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 flex items-center justify-center h-full px-8">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              {caseStudy.industry}
            </span>
            <h1 className="text-5xl font-bold text-white mb-4 leading-tight">
              {caseStudy.title}
            </h1>
            <p className="text-xl text-gray-200">
              Client: <span className="font-semibold">{caseStudy.client}</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Project Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="bg-gray-800 rounded-2xl p-8 mb-8">
              <h2 className="text-3xl font-bold text-white mb-6">The Challenge</h2>
              <p className="text-lg text-gray-300 leading-relaxed">{caseStudy.challenge}</p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Our Solution</h2>
              <p className="text-lg text-gray-300 leading-relaxed">{caseStudy.solution}</p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Project Timeline</h3>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-lg font-bold mr-4">
                  📅
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Duration</p>
                  <p className="text-white font-semibold">{caseStudy.duration}</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {caseStudy.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-700 text-gray-300 px-3 py-1 rounded-lg text-sm border border-gray-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-gray-800 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Results Achieved</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudy.results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 rounded-lg p-6 border-l-4 border-blue-500"
              >
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-1">
                    ✓
                  </div>
                  <p className="text-white font-semibold text-lg">{result}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="bg-gray-800 rounded-2xl p-8 mb-16 border-l-4 border-blue-500">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-white mb-4">Client Testimonial</h2>
            <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto border-2 border-blue-500">
              {caseStudy.testimonial.author.charAt(0)}
            </div>
          </div>
          <blockquote className="text-xl text-gray-300 italic text-center mb-6 leading-relaxed relative">
            <span className="text-blue-400 text-4xl absolute -top-4 -left-4">&quot;</span>
            {caseStudy.testimonial.quote}
            <span className="text-blue-400 text-4xl absolute -bottom-8 -right-4">&quot;</span>
          </blockquote>
          <div className="text-center">
            <p className="text-white font-semibold text-lg">{caseStudy.testimonial.author}</p>
            <p className="text-gray-400">{caseStudy.testimonial.position}</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/case-studies"
            className="flex items-center text-blue-400 hover:text-blue-300 transition-colors font-semibold"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Case Studies
          </Link>

          <Link 
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </div>
  );
}
