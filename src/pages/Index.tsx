
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

    // Create tech grid background
    const createTechGrid = () => {
      const techGrids = document.querySelectorAll('.tech-grid');
      techGrids.forEach(grid => {
        const gridElement = grid as HTMLElement;
        gridElement.innerHTML = '';
        
        // Create vertical lines
        for (let i = 0; i < 20; i++) {
          const line = document.createElement('div');
          line.style.position = 'absolute';
          line.style.top = '0';
          line.style.bottom = '0';
          line.style.width = '1px';
          line.style.left = `${5 + i * 5}%`;
          line.style.background = 'linear-gradient(to bottom, rgba(59, 130, 246, 0.2), transparent)';
          gridElement.appendChild(line);
        }
        
        // Create horizontal lines
        for (let i = 0; i < 20; i++) {
          const line = document.createElement('div');
          line.style.position = 'absolute';
          line.style.left = '0';
          line.style.right = '0';
          line.style.height = '1px';
          line.style.top = `${5 + i * 5}%`;
          line.style.background = 'linear-gradient(to right, rgba(59, 130, 246, 0.2), transparent)';
          gridElement.appendChild(line);
        }
        
        // Add some nodes at intersections
        for (let i = 0; i < 10; i++) {
          const node = document.createElement('div');
          node.style.position = 'absolute';
          node.style.width = '4px';
          node.style.height = '4px';
          node.style.borderRadius = '50%';
          node.style.backgroundColor = 'rgba(59, 130, 246, 0.5)';
          node.style.left = `${Math.random() * 100}%`;
          node.style.top = `${Math.random() * 100}%`;
          gridElement.appendChild(node);
        }
      });
    };

    // Create neural background pattern
    const createNeuralBg = () => {
      const neuralBgs = document.querySelectorAll('.neural-bg');
      neuralBgs.forEach(bg => {
        const bgElement = bg as HTMLElement;
        bgElement.innerHTML = '';
        
        // Create nodes
        for (let i = 0; i < 30; i++) {
          const node = document.createElement('div');
          node.style.position = 'absolute';
          node.style.width = `${Math.random() * 4 + 2}px`;
          node.style.height = node.style.width;
          node.style.borderRadius = '50%';
          node.style.backgroundColor = 'rgba(59, 130, 246, 0.3)';
          node.style.left = `${Math.random() * 100}%`;
          node.style.top = `${Math.random() * 100}%`;
          bgElement.appendChild(node);
          
          // Create connections between nodes
          for (let j = 0; j < 2; j++) {
            const connection = document.createElement('div');
            connection.style.position = 'absolute';
            connection.style.width = '1px';
            connection.style.height = `${Math.random() * 100 + 50}px`;
            connection.style.background = 'linear-gradient(to bottom, rgba(59, 130, 246, 0.2), transparent)';
            connection.style.left = `${Math.random() * 100}%`;
            connection.style.top = `${Math.random() * 100}%`;
            connection.style.transform = `rotate(${Math.random() * 360}deg)`;
            connection.style.transformOrigin = 'top';
            bgElement.appendChild(connection);
          }
        }
      });
    };

    // Create circuit patterns
    const createCircuitPattern = () => {
      const circuitPatterns = document.querySelectorAll('.circuit-pattern');
      circuitPatterns.forEach(pattern => {
        const patternElement = pattern as HTMLElement;
        patternElement.innerHTML = '';
        
        // Create horizontal lines
        for (let i = 0; i < 10; i++) {
          const line = document.createElement('div');
          line.style.position = 'absolute';
          line.style.left = '0';
          line.style.width = `${Math.random() * 30 + 20}%`;
          line.style.height = '1px';
          line.style.top = `${Math.random() * 100}%`;
          line.style.backgroundColor = 'rgba(59, 130, 246, 0.3)';
          patternElement.appendChild(line);
          
          // Add node at the end of line
          const node = document.createElement('div');
          node.style.position = 'absolute';
          node.style.width = '3px';
          node.style.height = '3px';
          node.style.borderRadius = '50%';
          node.style.backgroundColor = 'rgba(59, 130, 246, 0.5)';
          node.style.left = line.style.width;
          node.style.top = '-1px';
          line.appendChild(node);
        }
        
        // Create vertical lines
        for (let i = 0; i < 10; i++) {
          const line = document.createElement('div');
          line.style.position = 'absolute';
          line.style.top = '0';
          line.style.height = `${Math.random() * 30 + 20}%`;
          line.style.width = '1px';
          line.style.left = `${Math.random() * 100}%`;
          line.style.backgroundColor = 'rgba(59, 130, 246, 0.3)';
          patternElement.appendChild(line);
          
          // Add node at the end of line
          const node = document.createElement('div');
          node.style.position = 'absolute';
          node.style.width = '3px';
          node.style.height = '3px';
          node.style.borderRadius = '50%';
          node.style.backgroundColor = 'rgba(59, 130, 246, 0.5)';
          node.style.bottom = '0';
          node.style.left = '-1px';
          line.appendChild(node);
        }
      });
    };

    setupAnimations();
    setupSmoothScroll();
    createTechGrid();
    createNeuralBg();
    createCircuitPattern();

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
