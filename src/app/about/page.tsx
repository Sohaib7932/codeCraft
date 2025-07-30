import Image from 'next/image';

export default function About() {
  return (
    <>
      <section className="flex justify-center items-center h-[350px] px-10 mx-20 gap-16 rounded-lg md:flex-col md:h-auto md:px-5 md:mx-5 md:gap-8" style={{backgroundColor: '#1a1a1a', color: '#f5f5f5'}}>
        <div className="max-w-[450px] flex-shrink-0 md:max-w-full md:text-center">
          <h1 className="text-[2.3rem] mb-4 leading-tight md:text-[1.8rem] md:mb-4" style={{textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)', lineHeight: '1.3'}}>Crafting Digital Solutions for Tomorrow&apos;s Challenges</h1>
          <p className="text-[1.1rem] leading-relaxed md:text-[0.9rem]" style={{textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)', color: '#cccccc', lineHeight: '1.5'}}>
            At CodeCraft, we transform innovative ideas into robust, scalable software solutions. Our team of 
            developers, designers, and strategists are dedicated to delivering exceptional results that drive your 
            business forward.
          </p>
        </div>
        <div className="max-w-[400px] flex-shrink-0 md:max-w-[280px]">
          <Image src="/assets/homepage.png" alt="Modern office space with city view" width={800} height={600} className="w-full h-auto rounded-lg" style={{boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)'}} />
        </div>
      </section>

      <section className="py-16 px-10 text-center md:py-10 md:px-5" style={{backgroundColor: '#1a1a1a', color: '#f5f5f5'}}>
        <h2 className="text-[2rem] mb-5">Our Mission</h2>
        <p className="text-base max-w-4xl mx-auto" style={{lineHeight: '1.6'}}>
          Our mission is to empower businesses with cutting-edge technology solutions that enhance efficiency, drive growth, and 
          create lasting value. We are committed to excellence in every project, ensuring our clients achieve their strategic objectives 
          through innovative software development.
        </p>
      </section>

      <section className="py-16 px-10 text-center md:py-10 md:px-5" style={{backgroundColor: '#1a1a1a', color: '#f5f5f5'}}>
        <h2 className="text-[2rem] mb-5">Meet Our Team</h2>
        <div className="flex justify-center gap-16 mt-10 md:flex-col md:items-center md:gap-8">
          <div className="text-center">
            <div className="w-[100px] h-[100px] rounded-full overflow-hidden mx-auto mb-3 flex items-center justify-center">
              <Image src="/assets/Sohaib.jpg" alt="Muhammad Sohaib" width={100} height={100} className="w-full h-full object-cover object-center" />
            </div>
            <h3 className="text-lg font-semibold">Muhammad Sohaib</h3>
            <p className="text-[0.9rem]" style={{color: '#cccccc'}}>Lead Developer</p>
          </div>
          <div className="text-center">
            <div className="w-[100px] h-[100px] rounded-full overflow-hidden mx-auto mb-3 flex items-center justify-center">
              <Image src="/assets/Sohaib.jpg" alt="M Taha" width={100} height={100} className="w-full h-full object-cover object-center" />
            </div>
            <h3 className="text-lg font-semibold">Syed M Taha</h3>
            <p className="text-[0.9rem]" style={{color: '#cccccc'}}>Design Director</p>
          </div>
          <div className="text-center">
            <div className="w-[100px] h-[100px] rounded-full overflow-hidden mx-auto mb-3 flex items-center justify-center">
              <Image src="/assets/Sohaib.jpg" alt="Hassan Naeem" width={100} height={100} className="w-full h-full object-cover object-center" />
            </div>
            <h3 className="text-lg font-semibold">Hassan Naeem</h3>
            <p className="text-[0.9rem]" style={{color: '#cccccc'}}>Project Manager</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-10 text-center md:py-10 md:px-5" style={{backgroundColor: '#1a1a1a', color: '#f5f5f5'}}>
        <h2 className="text-[2rem] mb-5">Our Values</h2>
        <div className="flex justify-center gap-5">
          <div className="rounded-lg p-5 text-center w-[200px]" style={{backgroundColor: '#2a2a2a'}}>
            <div className="text-[2rem] mb-3" style={{color: '#007bff'}}>{"</>"}</div>
            <h3 className="text-[1.2rem] mb-1 font-semibold">Innovation</h3>
            <p className="text-[0.9rem]" style={{color: '#cccccc', lineHeight: '1.4'}}>
              We embrace creativity and constantly seek new ways to solve complex problems.
            </p>
          </div>
          <div className="rounded-lg p-5 text-center w-[200px]" style={{backgroundColor: '#2a2a2a'}}>
            <div className="text-[2rem] mb-3" style={{color: '#007bff'}}>👥</div>
            <h3 className="text-[1.2rem] mb-1 font-semibold">Collaboration</h3>
            <p className="text-[0.9rem]" style={{color: '#cccccc', lineHeight: '1.4'}}>
              We believe in the power of teamwork and open communication to achieve shared goals.
            </p>
          </div>
          <div className="rounded-lg p-5 text-center w-[200px]" style={{backgroundColor: '#2a2a2a'}}>
            <div className="text-[2rem] mb-3" style={{color: '#007bff'}}>🎯</div>
            <h3 className="text-[1.2rem] mb-1 font-semibold">Results-Driven</h3>
            <p className="text-[0.9rem]" style={{color: '#cccccc', lineHeight: '1.4'}}>
              We are committed to delivering measurable outcomes that align with our clients&apos; business objectives.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-10 text-center md:py-10 md:px-5" style={{backgroundColor: '#1a1a1a', color: '#f5f5f5'}}>
        <h2 className="text-[2rem] mb-5">A Message from Our Founder</h2>
        <div className="flex justify-center items-center gap-10 mt-10 md:flex-col md:text-center md:gap-8">
          <div className="w-[150px] h-[150px] rounded-full overflow-hidden flex-shrink-0">
            <Image src="/assets/Sohaib.jpg" alt="Maarij Bukhari" width={150} height={150} className="w-full h-full object-cover" />
          </div>
          <div className="max-w-[600px] text-left md:text-center">
            <h3 className="text-xl font-semibold mb-2">Maarij Bukhari</h3>
            <p className="text-base mb-3" style={{color: '#cccccc'}}>Founder & CEO</p>
            <p className="text-base" style={{lineHeight: '1.6'}}>
              At CodeCraft, we are driven by a passion for technology and a commitment to excellence. Our journey began with a vision to 
              create a software development agency that not only delivers exceptional solutions but also fosters long-term partnerships 
              with our clients. We believe in transparency, integrity, and a relentless pursuit of innovation. Our team is dedicated to 
              understanding your unique needs and crafting tailored solutions that exceed your expectations. Together, we can transform 
              your ideas into reality and achieve remarkable success.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
