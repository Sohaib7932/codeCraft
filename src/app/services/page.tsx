export default function Services() {
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
          <a href="/about">About Us</a>
          <a href="#">Contact</a>
          <button className="get-quote-btn">Get a Quote</button>
        </nav>
      </header>

      <section className="services-hero">
        <h1>Crafting Digital Solutions for Tomorrow's Challenges</h1>
        <p>
          We are a software development agency specializing in creating innovative and scalable solutions that meet your needs. From concept to deployment, we ensure excellence at every step.
        </p>
      </section>

      <section className="services-section">
        <h2>Our Services</h2>
        
        <div className="service-category">
          <h3>Comprehensive Software Development</h3>
          <p>We offer a full spectrum of software development services, ensuring your project's success from inception to completion.</p>
          
          <div className="service-grid">
            <div className="service-card">
              <div className="service-icon">{"</>"}</div>
              <h4>Web Development</h4>
              <p>Building responsive and dynamic web applications using modern frameworks to create seamless user experiences.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🗄️</div>
              <h4>Database Design</h4>
              <p>Designing robust and scalable databases to support your application's data needs.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">☁️</div>
              <h4>Cloud Solutions</h4>
              <p>Leveraging cloud technologies for enhanced performance, security, and scalability.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">📱</div>
              <h4>Mobile App Development</h4>
              <p>Creating native and cross-platform mobile applications for iOS and Android devices.</p>
            </div>
          </div>
        </div>

        <div className="service-category">
          <h3>Custom Software Solutions</h3>
          <p>We tailor our software development services to meet your specific business requirements, ensuring a perfect fit for your unique challenges.</p>
          
          <div className="service-grid">
            <div className="service-card">
              <div className="service-icon">{"</>"}</div>
              <h4>Enterprise Software</h4>
              <p>Developing large-scale and feature-rich software solutions to meet complex operations and improve efficiency.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🗄️</div>
              <h4>SaaS Applications</h4>
              <p>Creating scalable and secure cloud-based solutions that provide businesses efficient solutions for their businesses.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">☁️</div>
              <h4>E-commerce Platforms</h4>
              <p>Building comprehensive and user-friendly e-commerce platforms to enhance online sales and customer engagement.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">📱</div>
              <h4>API Development</h4>
              <p>Designing and implementing APIs for seamless integration with third-party systems and services.</p>
            </div>
          </div>
        </div>

        <div className="service-category">
          <h3>Technology Consulting</h3>
          <p>Our expert consultants provide strategic guidance to help you make informed decisions about your technology investments.</p>
          
          <div className="service-grid">
            <div className="service-card">
              <div className="service-icon">{"</>"}</div>
              <h4>Technology Strategy</h4>
              <p>Developing a comprehensive technology strategy aligned with your business goals.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🗄️</div>
              <h4>System Architecture</h4>
              <p>Designing scalable and efficient system architectures to support your application growth.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">☁️</div>
              <h4>Security Consulting</h4>
              <p>Providing expert security consulting to protect your applications and data from threats.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">📱</div>
              <h4>Performance Optimization</h4>
              <p>Optimizing application performance to enhance user experience and reduce costs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="process-section">
        <h2>Our Process</h2>
        <div className="process-list">
          <div className="process-item">
            <h4>Discovery & Planning</h4>
            <p>Understanding your business needs and defining project scope.</p>
          </div>
          <div className="process-item">
            <h4>Design & Development</h4>
            <p>Creating wireframes, prototypes, and developing the software.</p>
          </div>
          <div className="process-item">
            <h4>Testing & Deployment</h4>
            <p>Rigorous testing and seamless deployment to production.</p>
          </div>
          <div className="process-item">
            <h4>Maintenance & Support</h4>
            <p>Ongoing maintenance, updates, and dedicated support.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Transform Your Business?</h2>
        <p>Contact us today to discuss your project and discover how CodeCraft can help you achieve your goals.</p>
        <button className="cta-button">Get Started</button>
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
