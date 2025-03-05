
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Intersection Observer to trigger animations when sections come into view
    const setupAnimations = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
            }
          });
        },
        { threshold: 0.1 }
      );

      const sections = document.querySelectorAll('.slide-in-section');
      sections.forEach((section) => {
        observer.observe(section);
      });
    };

    // Smooth scroll to anchor links
    const setupSmoothScroll = () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const href = this.getAttribute('href');
          if (!href) return;
          
          const target = document.querySelector(href);
          if (!target) return;
          
          window.scrollTo({
            top: target.getBoundingClientRect().top + window.scrollY - 100,
            behavior: 'smooth'
          });
        });
      });
    };

    setupAnimations();
    setupSmoothScroll();

    // Cleanup
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen antialiased bg-slate-950 text-white relative">
      {/* Neural network-inspired background patterns */}
      <div className="absolute inset-0 neural-bg opacity-70 pointer-events-none"></div>
      
      {/* Circuit patterns */}
      <div className="absolute inset-0 circuit-pattern opacity-20 pointer-events-none"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
