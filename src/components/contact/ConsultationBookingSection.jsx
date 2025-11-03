import { useState } from 'react';

function ConsultationBookingSection() {
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    consultationType: 'initial',
    preferredDate: '',
    preferredTime: '',
    timezone: 'EST',
    description: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const consultationTypes = [
    { value: 'initial', label: 'Initial Consultation (Free)', duration: '30 min' },
    { value: 'patent', label: 'Patent Strategy Session', duration: '60 min' },
    { value: 'trademark', label: 'Trademark Consultation', duration: '45 min' },
    { value: 'copyright', label: 'Copyright Review', duration: '45 min' },
    { value: 'litigation', label: 'Litigation Strategy', duration: '90 min' },
    { value: 'comprehensive', label: 'Comprehensive IP Audit', duration: '120 min' }
  ];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  const timezones = ['EST', 'CST', 'MST', 'PST', 'GMT', 'CET', 'JST', 'AEST'];

  const handleChange = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setBookingData({
        name: '',
        email: '',
        company: '',
        phone: '',
        consultationType: 'initial',
        preferredDate: '',
        preferredTime: '',
        timezone: 'EST',
        description: ''
      });
      
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Schedule Your Consultation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Book a personalized consultation with our IP experts. Choose a time that works for you.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 animate-fadeInUp">
                {submitStatus === 'success' && (
                  <div className="mb-8 p-6 bg-green-50 border-2 border-green-200 rounded-2xl animate-fadeIn">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-green-900">Consultation Booked!</h3>
                        <p className="text-green-700">We've sent a confirmation email with meeting details.</p>
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={bookingData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 outline-none"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={bookingData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 outline-none"
                        placeholder="john@company.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={bookingData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 outline-none"
                        placeholder="Your Company Ltd."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={bookingData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 outline-none"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Consultation Type *
                    </label>
                    <select
                      name="consultationType"
                      value={bookingData.consultationType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 outline-none"
                    >
                      {consultationTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label} - {type.duration}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        name="preferredDate"
                        value={bookingData.preferredDate}
                        onChange={handleChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Preferred Time *
                      </label>
                      <select
                        name="preferredTime"
                        value={bookingData.preferredTime}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 outline-none"
                      >
                        <option value="">Select time</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Timezone *
                      </label>
                      <select
                        name="timezone"
                        value={bookingData.timezone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 outline-none"
                      >
                        {timezones.map((tz) => (
                          <option key={tz} value={tz}>
                            {tz}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Brief Description
                    </label>
                    <textarea
                      name="description"
                      value={bookingData.description}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 outline-none resize-none"
                      placeholder="Tell us briefly about your IP needs..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center space-x-3">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Booking Consultation...</span>
                      </span>
                    ) : (
                      'Book Consultation'
                    )}
                  </button>
                </form>
              </div>
            </div>

            <div className="space-y-6 animate-fadeInUp animation-delay-200">
              <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">What to Expect</h3>
                <ul className="space-y-4">
                  {[
                    'Expert IP attorney consultation',
                    'Personalized strategy discussion',
                    'Detailed cost breakdown',
                    'Timeline and next steps',
                    'Q&A session',
                    'Follow-up documentation'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-blue-100">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Need Help Choosing?</h3>
                <p className="text-gray-600 mb-6">
                  Not sure which consultation type is right for you? Our team can help you decide.
                </p>
                <button className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Chat with Expert
                </button>
              </div>

              <div className="bg-blue-50 rounded-2xl p-6 border-2 border-blue-200">
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-blue-900 mb-2">Flexible Scheduling</h4>
                    <p className="text-sm text-blue-700">
                      Can't find a suitable time? Contact us for alternative scheduling options.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConsultationBookingSection;