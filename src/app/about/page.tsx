'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <div style={{ backgroundColor: 'var(--background-primary)' }} className="min-h-screen">
      {/* Hero Section */}
      <section className="section-hero" style={{ minHeight: '500px' }}>
        <Image 
          src="/assets/homepage.png" 
          alt="Hero Background" 
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
            <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
              About CodeCraft
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
              We transform innovative ideas into robust, scalable software solutions. Our team of 
              developers, designers, and strategists are dedicated to delivering exceptional results that drive your 
              business forward.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section text-center" style={{backgroundColor: 'var(--background-secondary)'}}>
        <h2 className="text-[2rem] mb-5">Our Mission</h2>
        <p className="text-base max-w-4xl mx-auto" style={{lineHeight: '1.6'}}>
          Our mission is to empower businesses with cutting-edge technology solutions that enhance efficiency, drive growth, and 
          create lasting value. We are committed to excellence in every project, ensuring our clients achieve their strategic objectives 
          through innovative software development.
        </p>
      </section>

      <section className="section" style={{backgroundColor: 'var(--background-secondary)'}}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Maarij Bukhari */}
            <div className="group relative bg-gray-800 rounded-2xl overflow-hidden hover:bg-gray-700 transition-all duration-500">
              <div className="relative overflow-hidden">
                <Image 
                  src="/assets/sohaib-removebg.png" 
                  alt="Maarij Bukhari" 
                  width={300} 
                  height={400} 
                  className="w-full h-80 object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold text-white mb-2">Maarij Bukhari</h3>
                <p className="text-blue-400 font-semibold mb-2">CEO & Founder</p>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Visionary leader with expertise in business strategy and technology innovation.
                </p>
              </div>
            </div>

            {/* M. Sohaib */}
            <div className="group relative bg-gray-800 rounded-2xl overflow-hidden hover:bg-gray-700 transition-all duration-500">
              <div className="relative overflow-hidden">
                <Image 
                  src="/assets/sohaib-removebg.png" 
                  alt="M. Sohaib" 
                  width={300} 
                  height={400} 
                  className="w-full h-80 object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold text-white mb-2">M. Sohaib</h3>
                <p className="text-blue-400 font-semibold mb-2">Lead Developer</p>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Full-stack developer specializing in modern web technologies and scalable solutions.
                </p>
              </div>
            </div>

            {/* Syed M. Taha */}
            <div className="group relative bg-gray-800 rounded-2xl overflow-hidden hover:bg-gray-700 transition-all duration-500">
              <div className="relative overflow-hidden">
                <Image 
                  src="/assets/sohaib-removebg.png" 
                  alt="Syed M. Taha" 
                  width={300} 
                  height={400} 
                  className="w-full h-80 object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold text-white mb-2">Syed M. Taha</h3>
                <p className="text-blue-400 font-semibold mb-2">Design Director</p>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Creative designer focused on user experience and modern interface design.
                </p>
              </div>
            </div>

            {/* Hassan Naeem */}
            <div className="group relative bg-gray-800 rounded-2xl overflow-hidden hover:bg-gray-700 transition-all duration-500">
              <div className="relative overflow-hidden">
                <Image 
                  src="/assets/sohaib-removebg.png" 
                  alt="Hassan Naeem" 
                  width={300} 
                  height={400} 
                  className="w-full h-80 object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold text-white mb-2">Hassan Naeem</h3>
                <p className="text-blue-400 font-semibold mb-2">Project Manager</p>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Strategic project manager ensuring seamless delivery and client satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section text-center" style={{backgroundColor: 'var(--background-secondary)'}}>
        <h2 className="text-[2rem] mb-5 text-white">Our Values</h2>
        <div className="flex justify-center gap-5">
          <div className="card rounded-lg p-5 text-center w-[200px]">
            <div className="text-[2rem] mb-3 text-blue-400">{"</>"}</div>
            <h3 className="text-[1.2rem] mb-1 font-semibold text-white">Innovation</h3>
            <p className="text-[0.9rem] text-gray-300 leading-relaxed">
              We embrace creativity and constantly seek new ways to solve complex problems.
            </p>
          </div>
          <div className="card rounded-lg p-5 text-center w-[200px]">
            <div className="text-[2rem] mb-3 text-blue-400">👥</div>
            <h3 className="text-[1.2rem] mb-1 font-semibold text-white">Collaboration</h3>
            <p className="text-[0.9rem] text-gray-300 leading-relaxed">
              We believe in the power of teamwork and open communication to achieve shared goals.
            </p>
          </div>
          <div className="card rounded-lg p-5 text-center w-[200px]">
            <div className="text-[2rem] mb-3 text-blue-400">🎯</div>
            <h3 className="text-[1.2rem] mb-1 font-semibold text-white">Results-Driven</h3>
            <p className="text-[0.9rem] text-gray-300 leading-relaxed">
              We are committed to delivering measurable outcomes that align with our clients&apos; business objectives.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
