import { useState } from 'react';

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What are your support hours?',
      answer: 'Our support team is available 24/7 through live chat and email. Phone support is available Monday-Friday, 9AM-6PM EST. For urgent matters outside business hours, our emergency hotline is always available.'
    },
    {
      question: 'How quickly will I receive a response?',
      answer: 'Response times vary by channel: Live chat provides instant responses, email inquiries are answered within 24 hours, and support tickets within 12 hours. Emergency issues receive immediate attention through our priority support line.'
    },
    {
      question: 'Do you offer support in multiple languages?',
      answer: 'Yes! We provide support in English, Spanish, French, German, Chinese, Japanese, and Korean. Our multilingual team ensures you can communicate in your preferred language for all IP protection matters.'
    },
    {
      question: 'What information should I prepare before contacting support?',
      answer: 'Please have your account details, relevant documentation (patents, trademarks, etc.), and a clear description of your issue or question. For technical issues, screenshots or error messages are helpful.'
    },
    {
      question: 'Can I schedule a consultation outside business hours?',
      answer: 'Absolutely! We offer flexible scheduling including evenings and weekends. When booking your consultation, you can select from available time slots that work best for your schedule across different time zones.'
    },
    {
      question: 'Is the initial consultation really free?',
      answer: 'Yes, your first 30-minute consultation is completely free with no obligations. This allows us to understand your needs and provide initial guidance on protecting your intellectual property.'
    },
    {
      question: 'How do I track my support ticket?',
      answer: 'After creating a support ticket, you\'ll receive a unique ticket number via email. You can track its status through your account dashboard or by clicking the tracking link in your confirmation email.'
    },
    {
      question: 'What if I need urgent legal assistance?',
      answer: 'For urgent legal matters, call our emergency hotline at +1-800-IP-PROTECT. Our on-call attorneys are available 24/7 to handle critical IP protection issues that require immediate attention.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Find quick answers to common questions about our support services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl animate-fadeInUp"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-300"
                >
                  <span className="text-lg font-bold text-gray-900 pr-8">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 text-indigo-600 flex-shrink-0 transform transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-8 pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white animate-fadeInUp animation-delay-400">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-blue-100 mb-6">
              Can't find the answer you're looking for? Our support team is here to help!
            </p>
            <button className="px-8 py-3 bg-white text-indigo-600 rounded-full font-bold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-xl">
              Contact Support Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;