import projectsData from '../../data/projects.json';

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
      <header>
        <div className="header-logo">
          <a href="/">
            <img src="/assets/logo.png" alt="CodeCraft Logo" />
          </a>
        </div>
        <nav className="header-menu">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/projects">Projects</a>
          <a href="#">Blogs</a>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
          <button className="get-quote-btn">Get a Quote</button>
        </nav>
      </header>

      <section className="projects-hero">
        <h1>Our Recent Projects</h1>
        <p>
          Explore a selection of our latest projects showcasing our capabilities in delivering innovative solutions across industries.
        </p>
      </section>

      <section className="projects-section">
        <h2>Our Projects</h2>
        
        <div className="projects-list">
          {projects.map((project) => (
            <div key={project.id} className="project-item">
              <div className="project-details">
                <div className="project-category">{project.category}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <a href={project.projectLink} className="view-project-btn">View Project</a>
              </div>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="tech-stack-section">
        <h2>Tech Stack</h2>
        <p>Our team is proficient in a wide range of technologies, allowing us to select the best tools for each project. We specialize in modern frameworks and languages to ensure performance, scalability, and maintainability.</p>
        
        <div className="tech-stack-grid">
          <div className="tech-stack-item">
            <div className="tech-icon">{"</>"}</div>
            <h4>Frontend Development</h4>
          </div>
          <div className="tech-stack-item">
            <div className="tech-icon">🗄️</div>
            <h4>Backend Development</h4>
          </div>
          <div className="tech-stack-item">
            <div className="tech-icon">☁️</div>
            <h4>Cloud Infrastructure</h4>
          </div>
          <div className="tech-stack-item">
            <div className="tech-icon">📱</div>
            <h4>Mobile Development</h4>
          </div>
        </div>
      </section>

      <section className="results-section">
        <h2>Results</h2>
        <p>Our commitment to quality and client satisfaction is reflected in the outcomes of our projects. We consistently deliver solutions that meet and exceed expectations, driving tangible business results.</p>
        
        <div className="results-grid">
          <div className="result-item">
            <h4>Client Satisfaction</h4>
            <div className="result-value">95%</div>
          </div>
          <div className="result-item">
            <h4>Project Completion Rate</h4>
            <div className="result-value">100%</div>
          </div>
          <div className="result-item">
            <h4>Average Project Rating</h4>
            <div className="result-value">4.9/5</div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-content">
          <div className="social-links">
            <span>🔗</span>
            <span>📧</span>
          </div>
          <p>© 2024 CodeCraft. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

