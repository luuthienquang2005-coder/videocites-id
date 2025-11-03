function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'CEO, TechInnovate Solutions',
      company: 'Fortune 500 Technology Company',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
      content: 'Videocites ID transformed our IP protection strategy. Their expertise and technology platform helped us secure over 50 patents in record time. The peace of mind knowing our innovations are protected is invaluable.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Founder & CTO',
      company: 'BioMed Research Labs',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
      content: 'The international filing process was seamless. Their team guided us through complex regulations across multiple countries, and we successfully protected our breakthrough medical device technology globally.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Legal Director',
      company: 'Global Fashion Brand',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
      content: 'Outstanding trademark protection services! They helped us build a comprehensive brand protection strategy across 80+ countries. The monitoring system caught potential infringements before they became problems.',
      rating: 5
    },
    {
      name: 'David Thompson',
      role: 'VP of Innovation',
      company: 'Automotive Manufacturing Corp',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
      content: 'Their trade secret protection program is exceptional. The security audits and employee training have significantly strengthened our competitive position. Highly recommend for any company with valuable IP.',
      rating: 5
    },
    {
      name: 'Lisa Anderson',
      role: 'Chief Creative Officer',
      company: 'Digital Media Studio',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80',
      content: 'Copyright protection made simple! Their platform streamlined our entire content protection workflow. We now manage thousands of creative works efficiently with automated monitoring and enforcement.',
      rating: 5
    },
    {
      name: 'James Wilson',
      role: 'General Counsel',
      company: 'Pharmaceutical Enterprise',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
      content: 'The litigation support during our patent dispute was phenomenal. Their expert testimony and strategic counsel were instrumental in our successful defense. True IP protection partners.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fadeInUp">
          <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full font-semibold text-sm mb-4">
            Client Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Worldwide
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied clients who trust us to protect their most valuable assets. 
            Here's what they have to say about our services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-indigo-200 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/0 to-purple-600/0 group-hover:from-indigo-600/5 group-hover:to-purple-600/5 rounded-2xl transition-all duration-500"></div>
              
              <div className="relative">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                    <p className="text-indigo-600 font-semibold text-sm">{testimonial.role}</p>
                    <p className="text-gray-500 text-xs">{testimonial.company}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center text-indigo-600 font-semibold text-sm">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Verified Client
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fadeInUp animation-delay-600">
          <div className="inline-flex items-center space-x-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">4.9/5</div>
              <div className="text-gray-600 font-medium">Average Rating</div>
            </div>
            <div className="h-16 w-px bg-gray-300"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">10,000+</div>
              <div className="text-gray-600 font-medium">Happy Clients</div>
            </div>
            <div className="h-16 w-px bg-gray-300"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">50,000+</div>
              <div className="text-gray-600 font-medium">Protected Assets</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;