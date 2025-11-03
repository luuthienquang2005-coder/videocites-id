import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/home/Header';
import Footer from '../components/home/Footer';

function TermsConditionsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: 'Acceptance of Terms',
      content: [
        {
          subtitle: 'Agreement to Terms',
          text: 'By accessing and using the Videocites ID platform and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services.'
        },
        {
          subtitle: 'Eligibility',
          text: 'You must be at least 18 years old and have the legal capacity to enter into binding contracts to use our services. By using our platform, you represent and warrant that you meet these eligibility requirements.'
        },
        {
          subtitle: 'Business Use',
          text: 'Our services are designed for business and professional use in the field of intellectual property protection. You agree to use our services only for lawful business purposes and in accordance with all applicable laws and regulations.'
        }
      ]
    },
    {
      title: 'Service Description',
      content: [
        {
          subtitle: 'IP Protection Services',
          text: 'Videocites ID provides comprehensive intellectual property protection services including patent applications, trademark registration, copyright protection, trade secret management, and IP litigation support. Our services are designed to help businesses and individuals protect their valuable intellectual assets.'
        },
        {
          subtitle: 'Platform Features',
          text: 'Our platform offers various features including IP portfolio management, infringement monitoring, legal document preparation, expert consultation, and automated alerts. We continuously update and improve our services to provide the best possible protection for your intellectual property.'
        },
        {
          subtitle: 'Service Availability',
          text: 'While we strive to maintain continuous service availability, we do not guarantee uninterrupted access to our platform. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time, with or without notice.'
        }
      ]
    },
    {
      title: 'User Accounts and Responsibilities',
      content: [
        {
          subtitle: 'Account Creation',
          text: 'To access our services, you must create an account by providing accurate, complete, and current information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.'
        },
        {
          subtitle: 'Account Security',
          text: 'You must immediately notify us of any unauthorized use of your account or any other security breach. We will not be liable for any loss or damage arising from your failure to comply with these security obligations.'
        },
        {
          subtitle: 'User Conduct',
          text: 'You agree not to use our services for any unlawful purpose, to violate any laws, to infringe on the rights of others, to transmit harmful code, or to interfere with the proper functioning of our platform. We reserve the right to suspend or terminate accounts that violate these terms.'
        }
      ]
    },
    {
      title: 'Intellectual Property Rights',
      content: [
        {
          subtitle: 'Our IP Rights',
          text: 'All content, features, and functionality of the Videocites ID platform, including but not limited to text, graphics, logos, software, and design, are owned by Videocites ID Ltd and protected by international copyright, trademark, and other intellectual property laws.'
        },
        {
          subtitle: 'Your IP Rights',
          text: 'You retain all rights to the intellectual property you submit to our platform. By using our services, you grant us a limited license to use, store, and process your IP information solely for the purpose of providing our services to you.'
        },
        {
          subtitle: 'License Grant',
          text: 'Subject to your compliance with these terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use our platform for your internal business purposes. This license does not include any right to resell or commercial use of our services.'
        }
      ]
    },
    {
      title: 'Fees and Payment',
      content: [
        {
          subtitle: 'Service Fees',
          text: 'Our services are provided on a subscription or per-service basis. All fees are clearly stated on our platform and must be paid in accordance with the payment terms specified at the time of purchase. Fees are non-refundable except as required by law.'
        },
        {
          subtitle: 'Payment Methods',
          text: 'We accept various payment methods including credit cards, bank transfers, and other payment services. You authorize us to charge your chosen payment method for all fees incurred. You are responsible for ensuring your payment information is current and accurate.'
        },
        {
          subtitle: 'Price Changes',
          text: 'We reserve the right to modify our fees at any time. We will provide reasonable notice of any fee changes, and your continued use of our services after such changes constitutes acceptance of the new fees.'
        }
      ]
    },
    {
      title: 'Confidentiality and Data Protection',
      content: [
        {
          subtitle: 'Confidential Information',
          text: 'We understand the sensitive nature of intellectual property information. We maintain strict confidentiality protocols and will not disclose your confidential information to third parties except as necessary to provide our services or as required by law.'
        },
        {
          subtitle: 'Data Security',
          text: 'We implement industry-standard security measures to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.'
        },
        {
          subtitle: 'Data Processing',
          text: 'We process your personal and IP information in accordance with our Privacy Policy and applicable data protection laws including GDPR and CCPA. You have certain rights regarding your data as outlined in our Privacy Policy.'
        }
      ]
    },
    {
      title: 'Limitation of Liability',
      content: [
        {
          subtitle: 'Service Limitations',
          text: 'Our services are provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that our services will be uninterrupted, error-free, or completely secure.'
        },
        {
          subtitle: 'Liability Cap',
          text: 'To the maximum extent permitted by law, Videocites ID Ltd shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.'
        },
        {
          subtitle: 'Maximum Liability',
          text: 'Our total liability to you for all claims arising from or related to our services shall not exceed the amount you paid to us in the twelve months preceding the claim. Some jurisdictions do not allow certain liability limitations, so some of these limitations may not apply to you.'
        }
      ]
    },
    {
      title: 'Indemnification',
      content: [
        {
          subtitle: 'Your Indemnification',
          text: 'You agree to indemnify, defend, and hold harmless Videocites ID Ltd, its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses arising from your use of our services, violation of these terms, or infringement of any third-party rights.'
        },
        {
          subtitle: 'Defense of Claims',
          text: 'We reserve the right to assume the exclusive defense and control of any matter subject to indemnification by you, and you agree to cooperate with our defense of such claims. You will not settle any claim without our prior written consent.'
        }
      ]
    },
    {
      title: 'Termination',
      content: [
        {
          subtitle: 'Termination by You',
          text: 'You may terminate your account at any time by contacting our support team. Upon termination, your right to use our services will immediately cease, though certain provisions of these terms will survive termination.'
        },
        {
          subtitle: 'Termination by Us',
          text: 'We reserve the right to suspend or terminate your account and access to our services at any time, with or without cause or notice, including for violation of these terms, fraudulent activity, or extended periods of inactivity.'
        },
        {
          subtitle: 'Effect of Termination',
          text: 'Upon termination, we will provide you with access to export your data for a reasonable period. After this period, we may delete your data in accordance with our data retention policies and applicable laws.'
        }
      ]
    },
    {
      title: 'Dispute Resolution',
      content: [
        {
          subtitle: 'Governing Law',
          text: 'These Terms and Conditions shall be governed by and construed in accordance with the laws of the United Kingdom, without regard to its conflict of law provisions.'
        },
        {
          subtitle: 'Arbitration',
          text: 'Any dispute arising from or relating to these terms or our services shall be resolved through binding arbitration in accordance with the rules of the London Court of International Arbitration, except where prohibited by law.'
        },
        {
          subtitle: 'Class Action Waiver',
          text: 'You agree that any dispute resolution proceedings will be conducted only on an individual basis and not in a class, consolidated, or representative action. This waiver applies to the maximum extent permitted by law.'
        }
      ]
    },
    {
      title: 'Changes to Terms',
      content: [
        {
          subtitle: 'Modifications',
          text: 'We reserve the right to modify these Terms and Conditions at any time. We will notify you of any material changes by posting the new terms on our platform and updating the "Last Updated" date. Your continued use of our services after such changes constitutes acceptance of the modified terms.'
        },
        {
          subtitle: 'Review Obligation',
          text: 'It is your responsibility to review these terms periodically. If you do not agree with any modifications, you must discontinue use of our services.'
        }
      ]
    },
    {
      title: 'General Provisions',
      content: [
        {
          subtitle: 'Entire Agreement',
          text: 'These Terms and Conditions, together with our Privacy Policy and any other legal notices published by us, constitute the entire agreement between you and Videocites ID Ltd regarding our services.'
        },
        {
          subtitle: 'Severability',
          text: 'If any provision of these terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.'
        },
        {
          subtitle: 'Waiver',
          text: 'Our failure to enforce any right or provision of these terms will not be deemed a waiver of such right or provision. Any waiver must be in writing and signed by an authorized representative of Videocites ID Ltd.'
        },
        {
          subtitle: 'Assignment',
          text: 'You may not assign or transfer these terms or your rights and obligations under these terms without our prior written consent. We may assign these terms without restriction.'
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Terms & Conditions
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Please read these terms carefully before using our services
              </p>
              <p className="text-sm text-gray-500">
                Last Updated: December 2024
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-8 animate-fadeInUp animation-delay-200">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Welcome to Videocites ID Ltd. These Terms and Conditions govern your use of our intellectual property protection services and platform. By accessing or using our services, you agree to be bound by these terms.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  These terms constitute a legally binding agreement between you and Videocites ID Ltd. Please read them carefully and contact us if you have any questions before using our services.
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
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <p className="text-lg mb-6 text-blue-100">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <div className="space-y-4 text-blue-100">
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <p>legal@videocitesid.com</p>
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

export default TermsConditionsPage;