
import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
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

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-background to-white"></div>
      <div className="absolute -top-96 -right-96 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-96 -left-96 w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-blue-600 rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 text-white">
              <div className="slide-in-section">
                <h2 className="text-3xl font-bold mb-4">Ready to transform your business?</h2>
                <p className="text-white/90 mb-8">
                  Get started today and see the difference our platform can make for your business growth and efficiency.
                </p>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                  </div>
                  <button className="w-full bg-white text-primary hover:bg-white/90 transition-colors font-medium py-3 px-4 rounded-lg flex items-center justify-center">
                    Get Started
                    <ArrowRight size={18} className="ml-2" />
                  </button>
                  <p className="text-sm text-white/80 text-center">
                    Start your 14-day free trial. No credit card required.
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden md:block bg-gradient-to-br from-blue-600/90 to-primary">
              <div className="h-full flex items-center justify-center p-6">
                <div className="max-w-sm">
                  <div className="slide-in-section">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">Simple Onboarding</h3>
                        <p className="text-white/80 text-sm">Get started in minutes, not days</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
                          <path d="M12 6V12L16 14" stroke="white" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">Time-Saving</h3>
                        <p className="text-white/80 text-sm">Reduce workload by up to 40%</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16 10L18 12L22 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M12 4H10C6.13401 4 3 7.13401 3 11C3 14.866 6.13401 18 10 18H14C17.866 18 21 14.866 21 11V8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">Support Included</h3>
                        <p className="text-white/80 text-sm">24/7 customer service access</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-24 text-center slide-in-section">
          <h3 className="heading-md mb-4">Frequently Asked Questions</h3>
          <p className="text-foreground/70 max-w-2xl mx-auto mb-12">
            Have questions? We're here to help.
          </p>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-sm border border-border p-6 text-left hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold mb-2">How do I get started with the platform?</h4>
                <p className="text-foreground/70">
                  Getting started is easy! Simply sign up for a free trial, and you'll have immediate access to all features for 14 days. No credit card required until you decide to continue.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-border p-6 text-left hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold mb-2">Can I cancel my subscription at any time?</h4>
                <p className="text-foreground/70">
                  Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. You'll continue to have access until the end of your billing period.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-border p-6 text-left hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold mb-2">Is there a limit to how many users I can add?</h4>
                <p className="text-foreground/70">
                  The user limit depends on your subscription plan. Our Starter plan supports up to 5 users, Professional up to 20 users, and Enterprise offers unlimited users. You can upgrade your plan at any time as your team grows.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-border p-6 text-left hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold mb-2">What kind of support do you offer?</h4>
                <p className="text-foreground/70">
                  We provide comprehensive support through multiple channels. All plans include 24/7 email support, while Professional and Enterprise plans also get priority phone support. Enterprise customers receive a dedicated support manager.
                </p>
              </div>
            </div>
            
            <div className="mt-10">
              <a href="#contact" className="inline-flex items-center text-primary font-medium hover:underline">
                View all FAQs
                <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
