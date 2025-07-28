export default function About() {
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

      <section className="about-hero">
        <div className="hero-content">
          <h1>Crafting Digital Solutions for Tomorrow's Challenges</h1>
          <p>
            At CodeCraft, we transform innovative ideas into robust, scalable software solutions. Our team of 
            developers, designers, and strategists are dedicated to delivering exceptional results that drive your 
            business forward.
          </p>
        </div>
        <div className="hero-image">
          <img src="/assets/homepage.png" alt="Modern office space with city view" />
        </div>
      </section>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to empower businesses with cutting-edge technology solutions that enhance efficiency, drive growth, and 
          create lasting value. We are committed to excellence in every project, ensuring our clients achieve their strategic objectives 
          through innovative software development.
        </p>
      </section>

      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <div className="member-photo">
              <img src="/assets/Sohaib.jpg" alt="Muhammad Sohaib" />
            </div>
            <h3>Muhammad Sohaib</h3>
            <p className="member-role">Lead Developer</p>
          </div>
          <div className="team-member">
            <div className="member-photo">
              <img src="/assets/Sohaib.jpg" alt="M Taha" />
            </div>
            <h3>Syed M Taha</h3>
            <p className="member-role">Design Director</p>
          </div>
          <div className="team-member">
            <div className="member-photo">
              <img src="/assets/Sohaib.jpg" alt="Hassan Naeem" />
            </div>
            <h3>Hassan Naeem</h3>
            <p className="member-role">Project Manager</p>
          </div>
        </div>
      </section>

      <section className="values-section">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">{"</>"}</div>
            <h3>Innovation</h3>
            <p>
              We embrace creativity and constantly seek new ways to solve complex problems.
            </p>
          </div>
          <div className="value-card">
            <div className="value-icon">👥</div>
            <h3>Collaboration</h3>
            <p>
              We believe in the power of teamwork and open communication to achieve shared goals.
            </p>
          </div>
          <div className="value-card">
            <div className="value-icon">🎯</div>
            <h3>Results-Driven</h3>
            <p>
              We are committed to delivering measurable outcomes that align with our clients' business objectives.
            </p>
          </div>
        </div>
      </section>

      <section className="founder-section">
        <h2>A Message from Our Founder</h2>
        <div className="founder-content">
          <div className="founder-photo">
            <img src="/assets/Sohaib.jpg" alt="Maarij Bukhari" />
          </div>
          <div className="founder-message">
            <h3>Maarij Bukhari</h3>
            <p className="founder-title">Founder & CEO</p>
            <p className="founder-text">
              At CodeCraft, we are driven by a passion for technology and a commitment to excellence. Our journey began with a vision to 
              create a software development agency that not only delivers exceptional solutions but also fosters long-term partnerships 
              with our clients. We believe in transparency, integrity, and a relentless pursuit of innovation. Our team is dedicated to 
              understanding your unique needs and crafting tailored solutions that exceed your expectations. Together, we can transform 
              your ideas into reality and achieve remarkable success.
            </p>
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
