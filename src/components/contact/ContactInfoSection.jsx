function ContactInfoSection() {
  const contactMethods = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email Us',
      details: ['support@videocitesid.com', 'legal@videocitesid.com'],
      action: 'Send Email',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Call Us',
      details: ['+1 (800) IP-PROTECT', '+1 (555) 123-4567'],
      action: 'Call Now',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Visit Us',
      details: ['123 IP Protection Plaza', 'New York, NY 10001, USA'],
      action: 'Get Directions',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Business Hours',
      details: ['Mon-Fri: 9:00 AM - 6:00 PM EST', 'Emergency: 24/7 Available'],
      action: 'View Schedule',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const offices = [
    {
      city: 'New York',
      country: 'USA',
      address: '123 IP Protection Plaza, NY 10001',
      phone: '+1 (555) 123-4567',
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800'
    },
    {
      city: 'London',
      country: 'UK',
      address: '456 Innovation Street, London EC1A 1BB',
      phone: '+44 20 1234 5678',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800'
    },
    {
      city: 'Tokyo',
      country: 'Japan',
      address: '789 Patent Avenue, Tokyo 100-0001',
      phone: '+81 3 1234 5678',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800'
    },
    {
      city: 'Singapore',
      country: 'Singapore',
      address: '321 IP Tower, Singapore 018956',
      phone: '+65 6123 4567',
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Multiple ways to reach us. Choose the method that works best for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${method.gradient} rounded-2xl flex items-center justify-center text-white mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                {method.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{method.title}</h3>
              <div className="space-y-2 mb-6">
                {method.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                ))}
              </div>
              <button className={`w-full py-2 bg-gradient-to-r ${method.gradient} text-white rounded-lg font-semibold text-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300`}>
                {method.action}
              </button>
            </div>
          ))}
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 animate-fadeInUp">
            Our Global Offices
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offices.map((office, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={office.image}
                    alt={office.city}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="text-2xl font-bold">{office.city}</h4>
                    <p className="text-sm text-blue-200">{office.country}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-start space-x-2">
                      <svg className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      <span>{office.address}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-indigo-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>{office.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-white text-center animate-fadeInUp animation-delay-600">
          <h3 className="text-3xl font-bold mb-4">Ready to Protect Your IP?</h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Don't wait to secure your intellectual property. Our experts are standing by to help you get started today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-indigo-600 rounded-full font-bold text-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-xl">
              Schedule Free Consultation
            </button>
            <button className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-full font-bold text-lg border-2 border-white/30 hover:bg-white/30 transform hover:scale-105 transition-all duration-300">
              Start Live Chat
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactInfoSection;