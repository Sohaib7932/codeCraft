import projectsData from '../../data/projects.json';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  projectLink: string;
  category: string;
}

export default function Projects() {
  const projects: Project[] = projectsData.projects;

  return (
    <>
      <section className="text-center py-20 px-5 relative overflow-hidden" style={{background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)'}}>
        <div className="absolute top-5 right-5 w-25 h-25 bg-white/10 rounded-full"></div>
        <div className="absolute bottom-5 left-5 w-36 h-36 bg-white/5 rounded-full"></div>
        
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-5 text-white font-bold">
            Our Recent Projects
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Explore a selection of our latest projects showcasing our capabilities in delivering innovative solutions across industries.
          </p>
        </div>
      </section>

      <section className="py-20 px-5 max-w-6xl mx-auto" style={{backgroundColor: '#1a1a1a'}}>
        
        <div className="flex flex-col gap-10 mt-12">
          {projects.map((project) => (
            <div key={project.id} className="flex bg-[#1C2126] rounded-2xl overflow-hidden border border-[#3b4554] transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-500/15 hover:border-gray-500 min-h-[300px]">
              <div className="flex-1 p-8 flex flex-col justify-between">
                <div className="text-gray-400 text-sm font-medium uppercase tracking-wide mb-2">{project.category}</div>
                <h3 className="text-3xl font-semibold mb-4 text-white font-semibold leading-tight">{project.title}</h3>
                <p className="text-gray-300 leading-relaxed text-base mb-6 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-[#1C2126] text-gray-300 px-3 py-1.5 rounded-2xl text-sm font-medium border border-[#3b4554] transition-all duration-300 hover:bg-gray-600 hover:text-white hover:transform hover:-translate-y-0.5">{tech}</span>
                  ))}
                </div>
                <a href={project.projectLink} className="bg-blue-600 text-white text-base font-semibold px-6 py-3 rounded-lg inline-block transition-all duration-300 self-start border-2 border-blue-600 hover:bg-transparent hover:text-blue-600 hover:transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30">View Project</a>
              </div>
              <div className="flex-none w-[45%] bg-[#3b4554] flex items-center justify-center overflow-hidden relative">
                <Image src={project.image} alt={project.title} width={500} height={300} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-5 max-w-6xl mx-auto" style={{backgroundColor: '#1a1a1a'}}>
        <h2 className="text-left text-4xl font-semibold mb-5 text-white">Tech Stack</h2>
        <p className="text-gray-300 text-base leading-relaxed mb-10 max-w-4xl">Our team is proficient in a wide range of technologies, allowing us to select the best tools for each project. We specialize in modern frameworks and languages to ensure performance, scalability, and maintainability.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
          <div className="bg-[#1C2126] border border-[#3b4554] rounded-lg p-5 flex items-center gap-4 transition-all duration-300 hover:border-gray-500 hover:transform hover:-translate-y-0.5">
            <div className="text-2xl w-10 h-10 flex items-center justify-center bg-[#3b4554] rounded-md text-gray-400">{"</>"}</div>
            <h4 className="text-white text-base font-medium m-0">Frontend Development</h4>
          </div>
          <div className="bg-[#1C2126] border border-[#3b4554] rounded-lg p-5 flex items-center gap-4 transition-all duration-300 hover:border-gray-500 hover:transform hover:-translate-y-0.5">
            <div className="text-2xl w-10 h-10 flex items-center justify-center bg-[#3b4554] rounded-md text-gray-400">🗄️</div>
            <h4 className="text-white text-base font-medium m-0">Backend Development</h4>
          </div>
          <div className="bg-[#1C2126] border border-[#3b4554] rounded-lg p-5 flex items-center gap-4 transition-all duration-300 hover:border-gray-500 hover:transform hover:-translate-y-0.5">
            <div className="text-2xl w-10 h-10 flex items-center justify-center bg-[#3b4554] rounded-md text-gray-400">☁️</div>
            <h4 className="text-white text-base font-medium m-0">Cloud Infrastructure</h4>
          </div>
          <div className="bg-[#1C2126] border border-[#3b4554] rounded-lg p-5 flex items-center gap-4 transition-all duration-300 hover:border-gray-500 hover:transform hover:-translate-y-0.5">
            <div className="text-2xl w-10 h-10 flex items-center justify-center bg-[#3b4554] rounded-md text-gray-400">📱</div>
            <h4 className="text-white text-base font-medium m-0">Mobile Development</h4>
          </div>
        </div>
      </section>

      <section className="py-20 px-5 max-w-6xl mx-auto" style={{backgroundColor: '#1a1a1a'}}>
        <h2 className="text-left text-4xl font-semibold mb-5 text-white">Results</h2>
        <p className="text-gray-300 text-base leading-relaxed mb-10 max-w-4xl">Our commitment to quality and client satisfaction is reflected in the outcomes of our projects. We consistently deliver solutions that meet and exceed expectations, driving tangible business results.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-[#1C2126] border border-[#3b4554] rounded-lg p-8 text-left transition-all duration-300 hover:border-gray-500 hover:transform hover:-translate-y-0.5">
            <h4 className="text-gray-300 text-sm font-normal mb-4 uppercase tracking-wide">Client Satisfaction</h4>
            <div className="text-white text-5xl font-bold m-0">95%</div>
          </div>
          <div className="bg-[#1C2126] border border-[#3b4554] rounded-lg p-8 text-left transition-all duration-300 hover:border-gray-500 hover:transform hover:-translate-y-0.5">
            <h4 className="text-gray-300 text-sm font-normal mb-4 uppercase tracking-wide">Project Completion Rate</h4>
            <div className="text-white text-5xl font-bold m-0">100%</div>
          </div>
          <div className="bg-[#1C2126] border border-[#3b4554] rounded-lg p-8 text-left transition-all duration-300 hover:border-gray-500 hover:transform hover:-translate-y-0.5">
            <h4 className="text-gray-300 text-sm font-normal mb-4 uppercase tracking-wide">Average Project Rating</h4>
            <div className="text-white text-5xl font-bold m-0">4.9/5</div>
          </div>
        </div>
      </section>
    </>
  );
}

