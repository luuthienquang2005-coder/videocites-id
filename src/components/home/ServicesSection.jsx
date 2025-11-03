function ServicesSection() {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Patent Protection',
      description: 'Secure your innovations with comprehensive patent filing and management services. Our expert team handles everything from initial searches to international filings.',
      features: ['Prior Art Search', 'Patent Drafting', 'International Filing', 'Portfolio Management'],
      stats: { success: '96%', avgTime: '45 days', cases: '3,420' }
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
      ),
      title: 'Trademark Registration',
      description: 'Protect your brand identity with strategic trademark registration and enforcement. Build lasting brand value with our comprehensive trademark services.',
      features: ['Brand Search', 'Registration Filing', 'Monitoring Services', 'Enforcement Support'],
      stats: { success: '94%', avgTime: '30 days', cases: '2,890' }
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: 'Copyright Services',
      description: 'Safeguard your creative works with professional copyright registration and licensing. Protect your artistic and literary creations with confidence.',
      features: ['Work Registration', 'Licensing Agreements', 'Infringement Detection', 'Legal Support'],
      stats: { success: '98%', avgTime: '15 days', cases: '4,150' }
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: 'Trade Secret Protection',
      description: 'Implement robust strategies to protect your confidential business information. Maintain competitive advantage through comprehensive trade secret management.',
      features: ['Security Audits', 'NDA Management', 'Employee Training', 'Breach Response'],
      stats: { success: '92%', avgTime: '7 days', cases: '1,680' }
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      title: 'International IP',
      description: 'Expand your IP protection globally with our international filing and management services. Navigate complex international IP laws with expert guidance.',
      features: ['PCT Applications', 'Madrid Protocol', 'Regional Filings', 'Global Monitoring'],
      stats: { success: '95%', avgTime: '60 days', cases: '2,240' }
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'IP Litigation Support',
      description: 'Expert legal support for IP disputes and enforcement actions. Protect your rights with experienced litigation professionals and strategic counsel.',
      features: ['Dispute Resolution', 'Litigation Strategy', 'Expert Testimony', 'Settlement Negotiation'],
      stats: { success: '88%', avgTime: '90 days', cases: '980' }
    }
  ];

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fadeInUp">
          <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full font-semibold text-sm mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive IP Protection
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Tailored to Your Needs
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            From patents to trademarks, we provide end-to-end intellectual property services 
            to protect and maximize the value of your innovations.
          </p>
          <div className="flex justify-center space-x-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">15,680+</div>
              <p className="text-gray-600">Cases Handled</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">95.8%</div>
              <p className="text-gray-600">Success Rate</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">50+</div>
              <p className="text-gray-600">Countries</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-indigo-200 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative">
                <div className="inline-flex p-4 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl text-white mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div>
                      <div className="text-lg font-bold text-green-600">{service.stats.success}</div>
                      <div className="text-xs text-gray-600">Success</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-blue-600">{service.stats.avgTime}</div>
                      <div className="text-xs text-gray-600">Avg Time</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-purple-600">{service.stats.cases}</div>
                      <div className="text-xs text-gray-600">Cases</div>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-indigo-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex space-x-3">
                  <button className="flex-1 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                    Learn More
                  </button>
                  <button className="px-4 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition-all duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#statistics" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            View Detailed Statistics
            <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;