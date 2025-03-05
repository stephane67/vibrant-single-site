
import { useState, useEffect, useRef } from 'react';
import { Check, ArrowRight } from 'lucide-react';

const pricingPlans = [
  {
    name: "Diagnostic",
    price: "0",
    period: "monthly",
    description: "Une analyse rapide de vos besoins et problématiques",
    features: [
      "Appel de 15 minutes",
      "Identification des problématiques",
      "Conseils rapides",
      "Sans engagement"
    ],
    cta: "Réserver un appel",
    highlighted: false
  },
  {
    name: "Coaching",
    price: "Sur mesure",
    period: "monthly",
    description: "Pour les entreprises qui veulent aller plus loin dans leur stratégie",
    features: [
      "Analyse approfondie",
      "Recommandations personnalisées",
      "Suivi régulier",
      "Accès direct",
      "Accompagnement stratégique",
      "Transfert de compétences"
    ],
    cta: "En savoir plus",
    highlighted: true
  },
  {
    name: "Consultant",
    price: "Sur mesure",
    period: "monthly",
    description: "Solution complète pour implémentation technique et stratégique",
    features: [
      "Automatisation des processus",
      "Intégration d'outils",
      "Développement sur mesure",
      "Formation des équipes",
      "Tableau de bord et KPIs",
      "Optimisation des workflows",
      "Accompagnement complet",
      "Résultats mesurables"
    ],
    cta: "Discutons de vos besoins",
    highlighted: false
  }
];

const Pricing = () => {
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
    <section id="pricing" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative">
      {/* Tech background patterns */}
      <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="slide-in-section text-center mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 mb-4 border border-blue-500/20">
            Services
          </span>
          <h2 className="heading-lg mb-4">Comment puis-je vous aider ?</h2>
          <p className="text-blue-100/70 text-lg max-w-2xl mx-auto">
            Des solutions adaptées à vos besoins en automatisation et croissance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 slide-in-section" ref={sectionRef}>
          {pricingPlans.map((plan, index) => {
            return (
              <div 
                key={index} 
                className={`rounded-2xl p-8 transition-all duration-300 cyber-border relative ${
                  plan.highlighted 
                    ? 'glass-card bg-blue-900/30 shadow-xl scale-105 z-10' 
                    : 'glass-card shadow-lg'
                }`}
              >
                {/* Tech pattern background */}
                <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none rounded-2xl overflow-hidden"></div>
                
                {/* Highlighted plan gets a special effect */}
                {plan.highlighted && (
                  <div className="absolute -top-3 -right-3 bg-blue-600 rounded-full px-3 py-1 text-xs font-bold shadow-lg border border-blue-500/50">
                    Recommandé
                  </div>
                )}
                
                <div className="mb-8 relative z-10">
                  <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'neon-blue' : ''}`}>{plan.name}</h3>
                  <p className={plan.highlighted ? 'text-blue-200/80' : 'text-blue-100/70'}>
                    {plan.description}
                  </p>
                </div>
                
                <div className="flex items-baseline mb-8 relative z-10">
                  {plan.price !== "Sur mesure" ? (
                    <>
                      <span className="text-4xl font-bold">€</span>
                      <span className="text-5xl font-bold">{plan.price}</span>
                    </>
                  ) : (
                    <span className="text-4xl font-bold">{plan.price}</span>
                  )}
                </div>
                
                <ul className="space-y-4 mb-8 relative z-10">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className={`mr-3 mt-1 ${plan.highlighted ? 'text-blue-400' : 'text-blue-500'}`}>
                        <Check size={16} />
                      </div>
                      <span className={plan.highlighted ? 'text-blue-100' : 'text-blue-100/80'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="#contact" 
                  className={`block w-full py-3 px-4 rounded-lg text-center font-medium transition-all relative z-10 ${
                    plan.highlighted 
                      ? 'btn-primary' 
                      : 'btn-secondary'
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
