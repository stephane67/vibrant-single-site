
import { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "This AI platform has completely transformed our workflow. The intuitive interface and powerful features have increased our productivity by 40%.",
    author: "Sarah Johnson",
    position: "CTO, TechFlow Inc.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
  },
  {
    quote: "The ML analytics capabilities alone are worth the investment. We've gained invaluable insights that have helped us make smarter business decisions.",
    author: "Michael Chen",
    position: "CEO, Innovate Solutions",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
  },
  {
    quote: "Customer support is exceptional. The AI model customization options are unparalleled, and the team is always open to feedback.",
    author: "Emily Rodriguez",
    position: "Operations Manager, Velocity Group",
    rating: 4,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
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

    // Auto rotate testimonials
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
      clearInterval(interval);
    };
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 relative">
      {/* Tech background patterns */}
      <div className="absolute inset-0 neural-bg opacity-20 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="slide-in-section text-center mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 mb-4 border border-blue-500/20">
            Testimonials
          </span>
          <h2 className="heading-lg mb-4">What our customers say</h2>
          <p className="text-blue-100/70 text-lg max-w-2xl mx-auto">
            Don't just take our word for it — hear from some of our amazing AI adopters
          </p>
        </div>

        <div className="relative slide-in-section" ref={sectionRef}>
          <div className="max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`transition-all duration-500 absolute inset-0 ${
                  index === activeIndex 
                    ? 'opacity-100 translate-x-0 z-10' 
                    : index < activeIndex 
                      ? 'opacity-0 -translate-x-full z-0' 
                      : 'opacity-0 translate-x-full z-0'
                }`}
              >
                <div className="glass-card p-8 md:p-10 cyber-border">
                  {/* Tech pattern background */}
                  <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none rounded-xl overflow-hidden"></div>
                  
                  {/* Circuit elements */}
                  <div className="absolute top-4 right-4 font-mono text-xs text-blue-400/70">
                    ID: {Math.floor(Math.random() * 1000).toString().padStart(4, '0')}
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.author}
                          className="w-16 h-16 rounded-full object-cover border-2 border-blue-500/50" 
                          loading="lazy"
                        />
                        <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-blue-500/20 border border-blue-500/50 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={18} 
                            className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"} 
                          />
                        ))}
                      </div>
                      <blockquote className="text-lg md:text-xl mb-4 italic text-blue-100">
                        "{testimonial.quote}"
                      </blockquote>
                      <div>
                        <p className="font-semibold text-blue-300">{testimonial.author}</p>
                        <p className="text-blue-100/70 text-sm">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* For height purposes since the actual testimonials are absolutely positioned */}
            <div className="invisible">
              <div className="glass-card p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full"></div>
                  </div>
                  <div>
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={18} />
                      ))}
                    </div>
                    <blockquote className="text-lg md:text-xl mb-4 italic">
                      "This platform has completely transformed our workflow. The intuitive interface and powerful features have increased our productivity by 40%."
                    </blockquote>
                    <div>
                      <p className="font-semibold">Sarah Johnson</p>
                      <p className="text-blue-100/70 text-sm">CTO, TechFlow Inc.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full mx-1 transition-all ${
                  index === activeIndex ? 'bg-blue-500' : 'bg-slate-600'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-20 text-center slide-in-section">
          <p className="text-blue-100/70 max-w-3xl mx-auto mb-10 text-lg italic">
            "Join over <span className="font-semibold text-blue-300 neon-blue">2,000+</span> satisfied customers who have transformed their business with our AI platform"
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="flex items-center">
              <img src="https://tailwindui.com/img/logos/tuple-logo-gray-300.svg" alt="Tuple" className="h-8 opacity-50 hover:opacity-100 transition-opacity" loading="lazy" />
              <div className="ml-2 h-2 w-2 rounded-full bg-blue-500 animate-pulse"></div>
            </div>
            <div className="flex items-center">
              <img src="https://tailwindui.com/img/logos/mirage-logo-gray-300.svg" alt="Mirage" className="h-8 opacity-50 hover:opacity-100 transition-opacity" loading="lazy" />
              <div className="ml-2 h-2 w-2 rounded-full bg-blue-500 animate-pulse"></div>
            </div>
            <div className="flex items-center">
              <img src="https://tailwindui.com/img/logos/statickit-logo-gray-300.svg" alt="StaticKit" className="h-8 opacity-50 hover:opacity-100 transition-opacity" loading="lazy" />
              <div className="ml-2 h-2 w-2 rounded-full bg-blue-500 animate-pulse"></div>
            </div>
            <div className="flex items-center">
              <img src="https://tailwindui.com/img/logos/transistor-logo-gray-300.svg" alt="Transistor" className="h-8 opacity-50 hover:opacity-100 transition-opacity" loading="lazy" />
              <div className="ml-2 h-2 w-2 rounded-full bg-blue-500 animate-pulse"></div>
            </div>
            <div className="flex items-center">
              <img src="https://tailwindui.com/img/logos/workcation-logo-gray-300.svg" alt="Workcation" className="h-8 opacity-50 hover:opacity-100 transition-opacity" loading="lazy" />
              <div className="ml-2 h-2 w-2 rounded-full bg-blue-500 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
