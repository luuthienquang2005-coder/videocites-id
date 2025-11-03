import { useEffect, useState } from 'react';
import Header from '../components/home/Header';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import StatisticsSection from '../components/home/StatisticsSection';
import FeaturesSection from '../components/home/FeaturesSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import PartnersSection from '../components/home/PartnersSection';
import CTASection from '../components/home/CTASection';
import Footer from '../components/home/Footer';

function HomePage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      <HeroSection scrollY={scrollY} />
      <ServicesSection />
      <StatisticsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PartnersSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default HomePage;