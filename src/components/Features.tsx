
import { useEffect, useRef } from 'react';
import { Check, AlertTriangle, ArrowRight, Users, Clock, Target, Workflow } from 'lucide-react';

const painPoints = [
  {
    icon: <AlertTriangle size={24} className="text-amber-400" />,
    title: "Vous",
    description: "Vous avez l'impression que vos sales perdent beaucoup de temps sur des tâches manuelles"
  },
  {
    icon: <AlertTriangle size={24} className="text-amber-400" />,
    title: "Vous",
    description: "Vous avez l'impression que marketing et sales ne sont pas alignés"
  },
  {
    icon: <AlertTriangle size={24} className="text-amber-400" />,
    title: "Vous",
    description: "Vous avez l'impression que plus de choses pourraient être faites sur le suivi client"
  },
  {
    icon: <AlertTriangle size={24} className="text-amber-400" />,
    title: "Vous",
    description: "Vous avez l'impression que des opportunités sont laissées à l'abandon"
  },
];

const technicalSkills = [
  {
    title: "Modélisation de données",
    description: "Conception et gestion de bases de données – SQL."
  },
  {
    title: "APIs et formats de données",
    description: "Intégration d'APIs (REST, JSON) et gestion des flux d'information."
  },
  {
    title: "Automatisation",
    description: "Conception de workflows et automatisations avec ou sans code (Make, N8N, scripting)"
  },
  {
    title: "IA",
    description: "Créations d'agents IA sur mesure"
  }
];

const businessSkills = [
  {
    title: "Marketing – Copywriting",
    description: "User research, élaboration de messages efficaces et ciblés pour attirer des prospects."
  },
  {
    title: "Collaboration",
    description: "Coordination inter-équipes et traduction des enjeux techniques en solutions métiers."
  },
  {
    title: "Analyse",
    description: "Optimisation des processus et exploitation des données pour guider les décisions."
  }
];

const Features = () => {
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
    <section id="features" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900/70 relative">
      {/* Background tech patterns */}
      <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="slide-in-section text-center mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 mb-4 border border-blue-500/20">
            Problématiques
          </span>
          <h2 className="heading-lg mb-4">Bref, vous avez l'impression qu'il manque un engrenage à votre entreprise</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 slide-in-section" ref={sectionRef}>
          {painPoints.map((point, index) => (
            <div key={index} className="glass-card p-6 hover-scale cyber-border">
              <div className="tech-icon-container">
                {point.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 neon-blue">{point.title}</h3>
              <p className="text-blue-100/70">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 slide-in-section">
          <div className="glass-card overflow-hidden cyber-border">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 md:p-12 flex flex-col justify-center relative">
                {/* Data visualization patterns */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <div className="h-full w-full">
                    {Array(5).fill(0).map((_, i) => (
                      <div key={i} className="absolute" style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        width: `${Math.random() * 30 + 20}px`,
                        height: `${Math.random() * 30 + 20}px`,
                        borderRadius: '50%',
                        border: '1px solid rgba(59, 130, 246, 0.5)',
                        transform: 'translate(-50%, -50%)'
                      }}></div>
                    ))}
                    {Array(10).fill(0).map((_, i) => (
                      <div key={i} className="absolute" style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        width: '1px',
                        height: `${Math.random() * 50 + 50}px`,
                        background: 'linear-gradient(to bottom, rgba(59, 130, 246, 0.5), transparent)',
                        transform: 'rotate(45deg)',
                      }}></div>
                    ))}
                  </div>
                </div>
                
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 mb-4 border border-blue-500/20">
                  La réalité
                </span>
                <h2 className="heading-md mb-4">Vos équipes pourraient être plus efficaces</h2>
                <p className="text-blue-100/70 mb-6">
                  Beaucoup pensent que la seule façon de développer leur chiffre d'affaire est de recruter plus de commerciaux, ou d'investir davantage en marketing.
                </p>
                <p className="text-blue-100/70 mb-6">
                  Mais les temps ont changé. Avec les bons outils, les bons process et les bonnes stratégies il est possible d'avoir plus de résultats, avec moins d'employés.
                </p>
                <a href="#contact" className="btn-primary inline-flex self-start">
                  Échanger 15 min avec moi
                  <ArrowRight size={18} className="ml-2" />
                </a>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-transparent to-transparent z-10 pointer-events-none"></div>
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                  alt="Workflow Dashboard" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-4 right-4 glass-effect p-2 rounded-md text-xs font-mono text-blue-300 z-20">
                  <div className="flex items-center">
                    <span className="block w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
                    Growth Processing: 98% Complete
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 slide-in-section">
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 mb-4 border border-blue-500/20">
              Compétences
            </span>
            <h2 className="heading-lg mb-4">Mes compétences</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-blue-400">(techniques)</h3>
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="glass-card p-6 cyber-border">
                    <h4 className="text-lg font-medium mb-2 text-blue-300">{skill.title}</h4>
                    <p className="text-blue-100/70">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6 text-blue-400">(non techniques)</h3>
              <div className="space-y-6">
                {businessSkills.map((skill, index) => (
                  <div key={index} className="glass-card p-6 cyber-border">
                    <h4 className="text-lg font-medium mb-2 text-blue-300">{skill.title}</h4>
                    <p className="text-blue-100/70">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
