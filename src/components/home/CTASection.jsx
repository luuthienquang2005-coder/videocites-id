function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fadeInUp">
            <span className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold text-sm border border-white/30">
              🚀 Start Your IP Protection Journey Today
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fadeInUp animation-delay-200">
            Ready to Protect Your
            <span className="block text-blue-200">
              Intellectual Property?
            </span>
          </h2>

          <p className="text-xl text-blue-100 mb-12 leading-relaxed animate-fadeInUp animation-delay-400">
            Join 10,000+ businesses worldwide who trust Videocites ID for comprehensive IP protection. 
            Get started with a free consultation and discover how we can safeguard your innovations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fadeInUp animation-delay-600">
            <button className="group relative px-8 py-4 bg-white text-indigo-600 rounded-full font-bold text-lg overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-2xl">
              <span className="relative z-10">Get Free Consultation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-bold text-lg border-2 border-white/30 hover:bg-white/20 transform hover:scale-105 transition-all duration-300">
              Schedule a Demo
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto animate-fadeInUp animation-delay-800">
            {[
              { icon: '⚡', text: 'Fast Processing' },
              { icon: '🔒', text: 'Secure Platform' },
              { icon: '🌍', text: 'Global Coverage' },
              { icon: '💼', text: 'Expert Support' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{item.icon}</div>
                <div className="text-white font-semibold">{item.text}</div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 animate-fadeInUp animation-delay-1000">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-blue-200">Customer Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-blue-200">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">150+</div>
                <div className="text-blue-200">Countries Covered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;