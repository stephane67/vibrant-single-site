
import { useState, useEffect, useRef } from 'react';
import { Check } from 'lucide-react';

const pricingPlans = [
  {
    name: "Starter",
    price: "29",
    period: "monthly",
    description: "Perfect for individuals and small teams just getting started",
    features: [
      "Up to 5 users",
      "Basic analytics",
      "24/7 support",
      "1 GB storage",
      "Standard reporting"
    ],
    cta: "Get Started",
    highlighted: false
  },
  {
    name: "Professional",
    price: "79",
    period: "monthly",
    description: "Ideal for growing businesses with more advanced needs",
    features: [
      "Up to 20 users",
      "Advanced analytics",
      "Priority support",
      "10 GB storage",
      "Custom reports",
      "API access",
      "Team collaboration"
    ],
    cta: "Get Started",
    highlighted: true
  },
  {
    name: "Enterprise",
    price: "149",
    period: "monthly",
    description: "Advanced features for larger organizations with complex requirements",
    features: [
      "Unlimited users",
      "Premium analytics",
      "Dedicated support",
      "100 GB storage",
      "Advanced reporting",
      "API access",
      "Team collaboration",
      "Custom integrations",
      "Advanced security"
    ],
    cta: "Contact Sales",
    highlighted: false
  }
];

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);
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
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="slide-in-section text-center mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
            Pricing
          </span>
          <h2 className="heading-lg mb-4">Simple, transparent pricing</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Choose the plan that works best for your business needs
          </p>
          
          <div className="flex items-center justify-center mt-8">
            <div className="bg-secondary rounded-full p-1 inline-flex">
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  isMonthly ? 'bg-white shadow-sm' : 'text-foreground/70'
                }`}
                onClick={() => setIsMonthly(true)}
              >
                Monthly
              </button>
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  !isMonthly ? 'bg-white shadow-sm' : 'text-foreground/70'
                }`}
                onClick={() => setIsMonthly(false)}
              >
                Annually
              </button>
            </div>
          </div>
          
          {!isMonthly && (
            <div className="mt-4 inline-flex items-center justify-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
              Save 20% with annual billing
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 slide-in-section" ref={sectionRef}>
          {pricingPlans.map((plan, index) => {
            // Calculate the annual price (20% discount)
            const annualPrice = Math.round(Number(plan.price) * 0.8);
            
            return (
              <div 
                key={index} 
                className={`rounded-2xl p-8 transition-all duration-300 ${
                  plan.highlighted 
                    ? 'bg-primary text-white shadow-xl scale-105 z-10' 
                    : 'bg-white border border-border shadow-lg'
                }`}
              >
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className={plan.highlighted ? 'text-white/80' : 'text-foreground/70'}>
                    {plan.description}
                  </p>
                </div>
                
                <div className="flex items-baseline mb-8">
                  <span className="text-4xl font-bold">$</span>
                  <span className="text-5xl font-bold">
                    {isMonthly ? plan.price : annualPrice}
                  </span>
                  <span className={`ml-2 ${plan.highlighted ? 'text-white/80' : 'text-foreground/70'}`}>
                    /{isMonthly ? 'month' : 'month, billed annually'}
                  </span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className={`mr-3 mt-1 ${plan.highlighted ? 'text-white' : 'text-primary'}`}>
                        <Check size={16} />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="#contact" 
                  className={`block w-full py-3 px-4 rounded-lg text-center font-medium transition-all ${
                    plan.highlighted 
                      ? 'bg-white text-primary hover:bg-white/90' 
                      : 'bg-primary text-white hover:bg-primary/90'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
