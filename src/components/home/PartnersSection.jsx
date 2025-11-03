import { useEffect, useRef, useState } from 'react';

function PartnersSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const partners = [
    {
      name: 'TechCorp Global',
      logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=400&h=200&fit=crop&q=80',
      description: 'Leading technology innovator',
      testimonial: 'Videocites ID has been instrumental in protecting our cutting-edge innovations. Their expertise in IP law is unmatched.',
      industry: 'Technology'
    },
    {
      name: 'BioMed Innovations',
      logo: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=200&fit=crop&q=80',
      description: 'Pharmaceutical research leader',
      testimonial: 'Their comprehensive IP protection strategy helped us secure patents for our breakthrough medical devices.',
      industry: 'Healthcare'
    },
    {
      name: 'FinanceFirst Solutions',
      logo: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=200&fit=crop&q=80',
      description: 'Global financial services',
      testimonial: 'Outstanding service in protecting our proprietary financial algorithms and software innovations.',
      industry: 'Finance'
    },
    {
      name: 'EcoEnergy Systems',
      logo: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=200&fit=crop&q=80',
      description: 'Renewable energy pioneer',
      testimonial: 'Videocites ID helped us navigate complex international IP regulations for our green technology patents.',
      industry: 'Energy'
    },
    {
      name: 'AutoDrive Technologies',
      logo: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=200&fit=crop&q=80',
      description: 'Autonomous vehicle systems',
      testimonial: 'Their proactive approach to IP protection has been crucial in our competitive automotive technology sector.',
      industry: 'Automotive'
    },
    {
      name: 'CloudNet Infrastructure',
      logo: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=200&fit=crop&q=80',
      description: 'Cloud computing solutions',
      testimonial: 'Exceptional guidance in securing our cloud architecture patents and protecting our trade secrets.',
      industry: 'Cloud Services'
    },
    {
      name: 'FoodTech Ventures',
      logo: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=200&fit=crop&q=80',
      description: 'Food technology innovation',
      testimonial: 'Their expertise in food technology IP has been invaluable for our product development and market expansion.',
      industry: 'Food & Beverage'
    },
    {
      name: 'SpaceX Dynamics',
      logo: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=200&fit=crop&q=80',
      description: 'Aerospace engineering',
      testimonial: 'World-class IP protection for our aerospace innovations. Highly recommended for complex technical patents.',
      industry: 'Aerospace'
    },
    {
      name: 'RetailTech Solutions',
      logo: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=200&fit=crop&q=80',
      description: 'E-commerce platform leader',
      testimonial: 'Their strategic IP portfolio management has strengthened our competitive position in the retail technology market.',
      industry: 'Retail'
    },
    {
      name: 'EdTech Innovations',
      logo: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=200&fit=crop&q=80',
      description: 'Educational technology',
      testimonial: 'Videocites ID provided comprehensive protection for our educational software and learning platforms.',
      industry: 'Education'
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="partners"
      className="py-24 bg-gradient-to-br from-white via-blue-50 to-indigo-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM0RjQ2RTUiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAgNHYyaDJ2LTJoLTJ6bS0yIDJ2Mmgydi0yaC0yem0wLTR2Mmgydi0yaC0yem0yLTJ2LTJoLTJ2Mmgyem0wLTR2LTJoLTJ2Mmgyem0yIDJ2LTJoLTJ2Mmgyem0wIDR2LTJoLTJ2Mmgyem0yLTJ2Mmgydi0yaC0yem0wLTR2Mmgydi0yaC0yem0tMiAydi0yaC0ydjJoMnptMC00di0yaC0ydjJoMnptMiAydi0yaC0ydjJoMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full mb-6">
            <svg
              className="w-5 h-5 text-indigo-600 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="text-indigo-600 font-semibold text-sm">Trusted Partners</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent">
              Trusted by Industry Leaders
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're proud to collaborate with world-renowned companies across diverse industries who trust us to protect their most valuable intellectual property assets
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {partners.slice(0, 9).map((partner, index) => (
            <div
              key={index}
              className={`group transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden h-full flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -mr-16 -mt-16"></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="aspect-video mb-4 rounded-lg overflow-hidden bg-gray-100">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                    />
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                      {partner.name}
                    </h3>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full">
                      {partner.industry}
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 mb-4 font-medium">
                    {partner.description}
                  </p>

                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <div className="flex items-start space-x-2">
                      <svg
                        className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <p className="text-sm text-gray-600 italic leading-relaxed">
                        "{partner.testimonial}"
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center text-indigo-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                    <span className="text-sm font-semibold">View Case Study</span>
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`text-center transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex flex-col md:flex-row items-center gap-6 bg-white rounded-2xl p-8 shadow-xl max-w-4xl mx-auto">
            <div className="flex items-center space-x-6">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 border-4 border-white flex items-center justify-center text-white font-bold shadow-lg"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                  </div>
                ))}
              </div>
              <div className="text-left">
                <p className="text-3xl font-bold text-gray-900">500+</p>
                <p className="text-sm text-gray-600 font-medium">Global Partners</p>
              </div>
            </div>

            <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>

            <div className="text-left flex-1">
              <p className="text-gray-700 mb-4 font-medium">
                Join the world's leading companies in protecting innovation and securing competitive advantages
              </p>
              <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 mx-auto md:mx-0">
                <span>Become a Partner</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PartnersSection;