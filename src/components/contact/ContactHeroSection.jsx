function ContactHeroSection({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'contact', label: 'Contact Us', icon: '📧', description: 'Send us a message' },
    { id: 'support', label: 'Support', icon: '🎯', description: 'Get help instantly' },
    { id: 'consultation', label: 'Book Consultation', icon: '📅', description: 'Schedule a meeting' }
  ];

  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fadeInUp">
          <div className="inline-block px-6 py-2 bg-indigo-100 rounded-full text-indigo-600 font-semibold text-sm mb-6">
            💬 We're Here to Help
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Have questions about IP protection? Need support? Want to schedule a consultation? 
            We're available 24/7 to assist you with all your intellectual property needs.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 animate-fadeInUp animation-delay-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`group relative p-8 rounded-2xl transition-all duration-500 transform hover:scale-105 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-2xl shadow-indigo-500/50'
                    : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white shadow-lg hover:shadow-xl'
                }`}
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {tab.icon}
                </div>
                <h3 className={`text-xl font-bold mb-2 ${
                  activeTab === tab.id ? 'text-white' : 'text-gray-900'
                }`}>
                  {tab.label}
                </h3>
                <p className={`text-sm ${
                  activeTab === tab.id ? 'text-blue-100' : 'text-gray-600'
                }`}>
                  {tab.description}
                </p>
                {activeTab === tab.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl animate-pulse"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactHeroSection;