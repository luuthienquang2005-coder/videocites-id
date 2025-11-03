function HeroSection({ scrollY }) {
  const parallaxOffset = scrollY * 0.5;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
          backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/90 via-purple-900/85 to-blue-900/90"></div>
      </div>

      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fadeInUp">
            <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white font-semibold text-sm border border-white/20">
              🛡️ Trusted by 10,000+ Businesses Worldwide
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fadeInUp animation-delay-200">
            Protect Your
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Intellectual Property
            </span>
            with Confidence
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed animate-fadeInUp animation-delay-400">
            Comprehensive IP protection services powered by cutting-edge technology and expert legal support. 
            Safeguard your innovations, trademarks, and creative works with enterprise-grade security.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp animation-delay-600">
            <button className="group relative px-8 py-4 bg-white text-indigo-600 rounded-full font-bold text-lg overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-2xl">
              <span className="relative z-10">Start Protection Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-bold text-lg border-2 border-white/30 hover:bg-white/20 transform hover:scale-105 transition-all duration-300">
              Watch Demo
            </button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto animate-fadeInUp animation-delay-800">
            {[
              { number: '10K+', label: 'Protected Assets' },
              { number: '99.9%', label: 'Success Rate' },
              { number: '24/7', label: 'Expert Support' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-200 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

export default HeroSection;