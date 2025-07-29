export default function Blog() {
  return (
    <>
      {/* Hero Section with gradient background and decorative elements */}
      <section className="text-center py-20 px-5 relative overflow-hidden" style={{background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)'}}>
        {/* Decorative circle - top right */}
        <div className="absolute top-5 right-5 w-25 h-25 bg-white/10 rounded-full"></div>
        {/* Decorative circle - bottom left */}
        <div className="absolute bottom-5 left-5 w-36 h-36 bg-white/5 rounded-full"></div>
        
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-5 text-white">
            Crafting Digital Solutions for Tomorrow's Challenges
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
            Welcome to our Blog. Stay tuned for insights, updates, and thought leadership from our team of experts.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto text-center px-4">
        <h2 className="text-3xl font-semibold mb-10 text-white">Coming Soon</h2>
        <div className="bg-gray-800 rounded-xl p-8 shadow-xl border border-gray-700">
          <p className="text-gray-300 leading-relaxed text-lg">
            We're currently working on bringing you valuable content about software development, 
            technology trends, and industry insights. Check back soon for our latest articles and tutorials.
          </p>
        </div>
      </section>
    </>
  );
}
