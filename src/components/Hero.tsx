
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl -z-10"></div>
        
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              Simplify your workflow
            </span>
          </div>
          
          <h1 className={`heading-xl mb-6 transition-all duration-1000 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Your all-in-one solution for modern <span className="text-primary">SaaS</span> business
          </h1>
          
          <p className={`text-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Streamline your operations, enhance productivity, and elevate customer experience with our intuitive platform designed for business growth.
          </p>
          
          <div className={`flex flex-col sm:flex-row justify-center gap-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <a href="#contact" className="btn-primary inline-flex items-center justify-center">
              Get Started
              <ArrowRight size={18} className="ml-2" />
            </a>
            <a href="#features" className="btn-secondary inline-flex items-center justify-center">
              Learn More
            </a>
          </div>
        </div>
        
        <div className={`mt-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative mx-auto max-w-4xl rounded-xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none"></div>
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
              alt="Dashboard Preview" 
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
