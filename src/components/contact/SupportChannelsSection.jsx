function SupportChannelsSection() {
  const supportChannels = [
    {
      icon: '💬',
      title: 'Live Chat',
      description: 'Get instant answers from our support team',
      availability: 'Available 24/7',
      responseTime: 'Instant',
      action: 'Start Chat',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '📧',
      title: 'Email Support',
      description: 'Send detailed inquiries to our team',
      availability: 'Response within 24 hours',
      responseTime: '< 24 hours',
      action: 'Send Email',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: '📞',
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      availability: 'Mon-Fri, 9AM-6PM EST',
      responseTime: 'Immediate',
      action: 'Call Now',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: '🎫',
      title: 'Support Tickets',
      description: 'Track your issues with ticket system',
      availability: 'Available 24/7',
      responseTime: '< 12 hours',
      action: 'Create Ticket',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: '📚',
      title: 'Knowledge Base',
      description: 'Browse our comprehensive help articles',
      availability: 'Always Available',
      responseTime: 'Self-service',
      action: 'Browse Articles',
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      icon: '🎥',
      title: 'Video Tutorials',
      description: 'Watch step-by-step guides',
      availability: 'Always Available',
      responseTime: 'Self-service',
      action: 'Watch Videos',
      gradient: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Choose Your Support Channel
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer multiple ways to get help. Select the channel that works best for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {supportChannels.map((channel, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${channel.gradient} rounded-2xl flex items-center justify-center text-3xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                {channel.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {channel.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {channel.description}
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-2 text-sm">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 font-medium">{channel.availability}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 font-medium">Response: {channel.responseTime}</span>
                </div>
              </div>

              <button className={`w-full py-3 bg-gradient-to-r ${channel.gradient} text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}>
                {channel.action}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white animate-fadeInUp animation-delay-600">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">Need Urgent Assistance?</h3>
            <p className="text-blue-100 text-lg mb-8">
              For critical issues requiring immediate attention, contact our emergency support line
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+1-800-IP-PROTECT"
                className="px-8 py-4 bg-white text-indigo-600 rounded-full font-bold text-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                📞 +1-800-IP-PROTECT
              </a>
              <button className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-full font-bold text-lg border-2 border-white/30 hover:bg-white/30 transform hover:scale-105 transition-all duration-300">
                💬 Emergency Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SupportChannelsSection;