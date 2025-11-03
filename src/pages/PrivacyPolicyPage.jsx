import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/home/Header';
import Footer from '../components/home/Footer';

function PrivacyPolicyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: 'Information We Collect',
      content: [
        {
          subtitle: 'Personal Information',
          text: 'We collect personal information that you voluntarily provide to us when you register for our services, express interest in obtaining information about us or our products and services, participate in activities on our platform, or otherwise contact us. This includes your name, email address, phone number, company information, and professional credentials.'
        },
        {
          subtitle: 'Intellectual Property Data',
          text: 'When you use our IP protection services, we collect information about your intellectual property including patent applications, trademark registrations, copyright materials, and trade secrets. This information is handled with the highest level of security and confidentiality.'
        },
        {
          subtitle: 'Usage Information',
          text: 'We automatically collect certain information when you visit, use, or navigate our platform. This includes device information, browser type, IP address, operating system, and usage patterns. This helps us improve our services and provide better user experience.'
        }
      ]
    },
    {
      title: 'How We Use Your Information',
      content: [
        {
          subtitle: 'Service Delivery',
          text: 'We use your information to provide, maintain, and improve our intellectual property protection services. This includes processing your applications, managing your IP portfolio, monitoring for potential infringements, and providing legal support.'
        },
        {
          subtitle: 'Communication',
          text: 'We use your contact information to send you important updates about your IP protection status, service notifications, security alerts, and relevant industry news. You can opt out of marketing communications at any time.'
        },
        {
          subtitle: 'Security and Compliance',
          text: 'Your information helps us maintain the security of our platform, prevent fraud, comply with legal obligations, and protect the rights and safety of our users and the public.'
        }
      ]
    },
    {
      title: 'Data Security',
      content: [
        {
          subtitle: 'Security Measures',
          text: 'We implement industry-leading security measures to protect your personal and intellectual property information. This includes end-to-end encryption, secure data centers, regular security audits, and strict access controls. Our platform is ISO 27001 certified and GDPR compliant.'
        },
        {
          subtitle: 'Data Storage',
          text: 'Your data is stored in secure, geographically distributed data centers with redundant backups. We use advanced encryption both in transit and at rest to ensure your information remains confidential and protected from unauthorized access.'
        },
        {
          subtitle: 'Access Controls',
          text: 'We maintain strict access controls and authentication protocols. Only authorized personnel with legitimate business needs can access your information, and all access is logged and monitored for security purposes.'
        }
      ]
    },
    {
      title: 'Information Sharing',
      content: [
        {
          subtitle: 'Service Providers',
          text: 'We may share your information with trusted third-party service providers who assist us in operating our platform, conducting our business, or servicing you. These parties are contractually obligated to keep your information confidential and use it only for the purposes we specify.'
        },
        {
          subtitle: 'Legal Requirements',
          text: 'We may disclose your information if required by law, court order, or governmental regulation. We will notify you of such disclosures unless prohibited by law or if the request involves imminent harm.'
        },
        {
          subtitle: 'Business Transfers',
          text: 'In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity. We will notify you of any such change and provide options regarding your information.'
        }
      ]
    },
    {
      title: 'Your Privacy Rights',
      content: [
        {
          subtitle: 'Access and Correction',
          text: 'You have the right to access, update, or correct your personal information at any time through your account settings or by contacting our support team. We will respond to your requests within the timeframes required by applicable law.'
        },
        {
          subtitle: 'Data Deletion',
          text: 'You can request deletion of your personal information, subject to certain legal obligations and legitimate business interests. We will retain certain information as required by law or for legitimate business purposes such as fraud prevention.'
        },
        {
          subtitle: 'Opt-Out Rights',
          text: 'You can opt out of marketing communications, cookies, and certain data collection practices. However, some data collection is necessary for the operation of our services and cannot be disabled without affecting functionality.'
        }
      ]
    },
    {
      title: 'International Data Transfers',
      content: [
        {
          subtitle: 'Global Operations',
          text: 'As a global IP protection service, we may transfer your information to countries outside your residence. We ensure appropriate safeguards are in place, including standard contractual clauses and adequacy decisions, to protect your information during international transfers.'
        },
        {
          subtitle: 'Data Protection Standards',
          text: 'Regardless of where your information is processed, we maintain the same high standards of data protection and security. We comply with applicable data protection laws including GDPR, CCPA, and other regional privacy regulations.'
        }
      ]
    },
    {
      title: 'Cookies and Tracking',
      content: [
        {
          subtitle: 'Cookie Usage',
          text: 'We use cookies and similar tracking technologies to enhance your experience, analyze usage patterns, and improve our services. You can control cookie preferences through your browser settings, though some features may not function properly without cookies.'
        },
        {
          subtitle: 'Analytics',
          text: 'We use analytics tools to understand how users interact with our platform. This helps us improve functionality, identify issues, and develop new features. All analytics data is anonymized and aggregated.'
        }
      ]
    },
    {
      title: 'Children\'s Privacy',
      content: [
        {
          subtitle: 'Age Restrictions',
          text: 'Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will take steps to delete such information promptly.'
        }
      ]
    },
    {
      title: 'Updates to This Policy',
      content: [
        {
          subtitle: 'Policy Changes',
          text: 'We may update this privacy policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by posting the new policy on this page and updating the "Last Updated" date.'
        },
        {
          subtitle: 'Continued Use',
          text: 'Your continued use of our services after any changes to this policy constitutes your acceptance of the updated terms. We encourage you to review this policy periodically to stay informed about how we protect your information.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <Header />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fadeInUp">
              <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Your privacy and data security are our top priorities
              </p>
              <p className="text-sm text-gray-500">
                Last Updated: December 2024
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-8 animate-fadeInUp animation-delay-200">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  At Videocites ID Ltd, we are committed to protecting your privacy and ensuring the security of your personal and intellectual property information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our intellectual property protection services.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  By using our services, you agree to the collection and use of information in accordance with this policy. We encourage you to read this policy carefully to understand our practices regarding your information and how we will treat it.
                </p>
              </div>
            </div>

            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-8 animate-fadeInUp hover:shadow-2xl transition-all duration-300"
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent flex items-center">
                  <span className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl mr-4 text-lg">
                    {index + 1}
                  </span>
                  {section.title}
                </h2>
                <div className="space-y-6">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="pl-14">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        {item.subtitle}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl shadow-xl p-8 md:p-12 text-white animate-fadeInUp">
              <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
              <p className="text-lg mb-6 text-blue-100">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please don't hesitate to contact us:
              </p>
              <div className="space-y-4 text-blue-100">
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <p>privacy@videocitesid.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-white">Phone</p>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-white">Address</p>
                    <p>123 IP Protection Street, Legal District, London, UK</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-white/20">
                <Link
                  to="/"
                  className="inline-flex items-center text-white hover:text-blue-100 transition-colors duration-300 font-semibold"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default PrivacyPolicyPage;