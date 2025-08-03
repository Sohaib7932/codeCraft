'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import caseStudiesData from '../../data/caseStudies.json';

interface CaseStudy {
  id: number;
  title: string;
  client: string;
  industry: string;
  description: string;
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

type FilterType = 'all' | 'real estate' | 'architect' | 'ecommerce' | 'automotive';

const filterLabels: { value: FilterType; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'real estate', label: 'Real Estate' },
  { value: 'architect', label: 'Architect' },
  { value: 'ecommerce', label: 'E-commerce' },
  { value: 'automotive', label: 'Automotive' },
];

export default function CaseStudies() {
  const [selectedFilter, setSelectedFilter] = useState<FilterType>('all');

  // Filter case studies based on selected filter
  const filteredCaseStudies = selectedFilter === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => 
        study.industry.toLowerCase().includes(selectedFilter.toLowerCase())
      );
  return (
    <>
      {/* Hero Section */}
      <section className="section-hero">
        <Image 
          src="/assets/homepage.png" 
          alt="Hero Background" 
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
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
              Discover how we&apos;ve helped businesses transform their operations and achieve remarkable results through innovative software solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="section" style={{ backgroundColor: 'var(--background-secondary)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {filterLabels.map((filter) => (
              <motion.button
                key={filter.value}
                onClick={() => setSelectedFilter(filter.value)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedFilter === filter.value
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {filter.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section" style={{ backgroundColor: 'var(--background-secondary)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study, index) => (
              <motion.div 
                key={study.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Image Section - 60% of card height */}
                <div className="relative h-48 overflow-hidden mb-6">
                  <Image 
                    src={study.image} 
                    alt={study.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                {/* Content Section */}
                <div className="relative pb-12">
                  <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                    {study.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {study.description}
                  </p>
                  <p className="text-gray-500 text-xs mb-4">
                    Client: {study.client}
                  </p>
                </div>
                
                {/* V-Shaped Chevron Arrow Button - Below Content */}
                <div className="absolute bottom-4 right-4">
                  <Link
                    href={`/case-studies/${study.id}`}
                    className="inline-flex items-center justify-center w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 transform hover:scale-110"
                  >
                    <svg 
                      className="w-5 h-5" 
                      fill = "currentColor" 
                      viewBox = "0 0 24 24"
                    >
                      <path d="M9 6l6 6-6 6"/>
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="section" style={{ backgroundColor: 'var(--background-secondary)' }}>
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
      <section className="section text-center" style={{ backgroundColor: 'var(--background-secondary)' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help transform your business with innovative technology solutions.
          </p>
          <button className="btn-primary">
            Start Your Project
          </button>
        </div>
      </section>
    </>
  );
}
