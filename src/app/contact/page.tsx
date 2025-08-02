export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-hero text-center">
        {/* Decorative circles */}
        <div className="absolute top-5 right-5 w-25 h-25 bg-white/10 rounded-full"></div>
        <div className="absolute bottom-5 left-5 w-36 h-36 bg-white/5 rounded-full"></div>
        
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-5 text-white">
            Crafting Digital Solutions for Tomorrow&apos;s Challenges
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Ready to start your next project? Let&apos;s discuss how we can help you achieve your goals with our expert team.
          </p>
        </div>
      </section>

      <section className="section max-w-6xl mx-auto">
        <div className="grid gap-12 grid-cols-1 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="card rounded-xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Project inquiry"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="card rounded-xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white text-xl mr-4">
                    📧
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Email</h3>
                    <p className="text-gray-300">hello@codecraft.dev</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white text-xl mr-4">
                    📱
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Phone</h3>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center text-white text-xl mr-4">
                    📍
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Office</h3>
                    <p className="text-gray-300">123 Tech Street<br />Innovation City, IC 12345</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card rounded-xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-white mb-6">Business Hours</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">Monday - Friday</span>
                  <span className="text-white">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Saturday</span>
                  <span className="text-white">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Sunday</span>
                  <span className="text-white">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section text-center" style={{backgroundColor: 'var(--background-secondary)'}}>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-5 text-white">Ready to Get Started?</h2>
          <p className="text-lg leading-relaxed mb-8 text-gray-300">
            Let&apos;s turn your ideas into reality. Contact us today for a free consultation.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl">
            Schedule a Call
          </button>
        </div>
      </section>
    </>
  );
}
