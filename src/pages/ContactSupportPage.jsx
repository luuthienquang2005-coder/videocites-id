import { useState } from 'react';
import Header from '../components/home/Header';
import Footer from '../components/home/Footer';
import ContactHeroSection from '../components/contact/ContactHeroSection';
import ContactFormSection from '../components/contact/ContactFormSection';
import SupportChannelsSection from '../components/contact/SupportChannelsSection';
import ConsultationBookingSection from '../components/contact/ConsultationBookingSection';
import FAQSection from '../components/contact/FAQSection';
import ContactInfoSection from '../components/contact/ContactInfoSection';

function ContactSupportPage() {
  const [activeTab, setActiveTab] = useState('contact');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      <ContactHeroSection activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {activeTab === 'contact' && (
        <>
          <ContactFormSection />
          <ContactInfoSection />
        </>
      )}
      
      {activeTab === 'support' && (
        <>
          <SupportChannelsSection />
          <FAQSection />
        </>
      )}
      
      {activeTab === 'consultation' && (
        <ConsultationBookingSection />
      )}
      
      <Footer />
    </div>
  );
}

export default ContactSupportPage;