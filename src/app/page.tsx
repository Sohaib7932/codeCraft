export default function Home() {
  return (
    <>
      <header>
        <div className="header-logo">
          <a href="/">
            <img src="/assets/logo.png" alt="CodeCraft Logo" />
          </a>
        </div>
        <nav className="header-menu">
          <a href="#">Home</a>
          <a href="/services">Services</a>
          <a href="/projects">Projects</a>
          <a href="#">Blogs</a>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
          <button className="get-quote-btn">Get a Quote</button>
        </nav>
      </header>

    <section className="home-container">
      <section className="hero">
        <h1>Crafting Digital Solutions for Tomorrow’s Challenges</h1>
        <p>
          We are a software development agency specializing in building
          innovative and scalable applications. Our team of experts is dedicated
          to delivering high-quality solutions tailored to your business needs.
        </p>
      </section>
    </section>

      <section className="services section">
        <h2>Our Services</h2>
        <div className="services-card">
              <div className="service-icon">{"</>"}</div>
              <h4>Web Development</h4>
              <p>Building responsive and dynamic web applications using modern frameworks to create seamless user experiences.</p>
        </div>
        <div className="services-card">
          <div className="service-icon">📱</div>
          <h3>Mobile App Development</h3>
          <p>
            Creating native and cross-platform mobile applications for iOS and
            Android.
          </p>
        </div>
        <div className="services-card">
         <div className="service-icon">🗄️</div>
          <h3>Database Management</h3>
          <p>
            Designing and managing robust and scalable database solutions.
          </p>
        </div>
      </section>

      <section className="portfolio section">
        <h2>Portfolio</h2>
        <div className="portfolio-card">
          <h3>Project Alpha</h3>
          <p>A cutting-edge web application for a leading e-commerce company.</p>
        </div>
        <div className="portfolio-card">
          <h3>Project Beta</h3>
          <p>A user-friendly mobile app for a healthcare provider.</p>
        </div>
        <div className="portfolio-card">
          <h3>Project Gamma</h3>
          <p>
            A comprehensive dashboard for a data analytics platform.
          </p>
        </div>
      </section>

      <section className="testimonials section">
        <h2>Testimonials</h2>
        <div className="testimonial-card">
          <h3>Sophia Clark</h3>
          <p>
            CodeCraft delivered an exceptional web application that exceeded our
            expectations. Their professionalism and attention to detail were
            truly impressive.
          </p>
          <div className="star-rating">★★★★★</div>
        </div>
        <div className="testimonial-card">
          <h3>Ethan Bennett</h3>
          <p>
            We are extremely satisfied with the mobile app developed by
            CodeCraft. It's user-friendly and has significantly improved our
            customer engagement.
          </p>
          <div className="star-rating">★★★★★</div>
        </div>
        <div className="testimonial-card">
          <h3>Olivia Hayes</h3>
          <p>
            CodeCraft provided a solid database solution that met our
            requirements. Their team was responsive and helpful throughout the
            process.
          </p>
          <div className="star-rating">★★★★☆</div>
        </div>
      </section>

      <section className="about section">
        <h2>About Us</h2>
        <p>
          CodeCraft is a team of experienced software developers passionate
          about creating innovative solutions. We are committed to delivering
          high-quality applications that drive business growth and provide
          exceptional user experiences. Our expertise spans various technologies
          and industries, allowing us to tackle complex challenges with
          confidence.
        </p>
      </section>

      <section className="tech section">
        <h2>Tech Stack</h2>
        <div className="tech-card">
          <p>AWS</p>
        </div>
        <div className="tech-card">
          <p>Docker</p>
        </div>
        <div className="tech-card">
          <p>Node.js</p>
        </div>
        <div className="tech-card">
          <p>PostgreSQL</p>
        </div>
      </section>

      <section className="blog section">
        <h2>Latest from Our Blog</h2>
        <h3>The Future of Web Development: Trends to Watch in 2024</h3>
        <p>
          Explore the latest trends shaping the future of web development,
          including serverless architecture, progressive web apps, and
          AI-powered tools.
        </p>
      </section>

      <section className="cta section">
        <h2>Ready to Transform Your Business?</h2>
        <p>
          Contact us today to discuss your project and discover how CodeCraft
          can help you achieve your goals.
        </p>
        <button>Get Started</button>
      </section>

      <footer>
        <p>© 2024 CodeCraft. All rights reserved.</p>
      </footer>
    </>
  );
}
