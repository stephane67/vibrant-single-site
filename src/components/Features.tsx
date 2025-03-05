
import { useEffect, useRef } from 'react';
import { LineChart, BarChart, PieChart, Zap, Shield, Users, Clock, Target, Workflow } from 'lucide-react';

const features = [
  {
    icon: <LineChart size={24} className="text-blue-400" />,
    title: "Advanced Analytics",
    description: "Gain valuable insights with our powerful analytics tools. Track growth and make data-driven decisions."
  },
  {
    icon: <Shield size={24} className="text-blue-400" />,
    title: "Secure Infrastructure",
    description: "Enterprise-grade security protocols to protect your data. Your business security is our priority."
  },
  {
    icon: <Zap size={24} className="text-blue-400" />,
    title: "Lightning Fast",
    description: "Optimized performance for seamless operations. Speed up your workflow and save valuable time."
  },
  {
    icon: <BarChart size={24} className="text-blue-400" />,
    title: "Growth Tracking",
    description: "Monitor your business metrics in real-time. Set goals and visualize your progress effortlessly."
  },
  {
    icon: <Clock size={24} className="text-blue-400" />,
    title: "Time Saving",
    description: "Automate repetitive tasks and focus on what matters. Reclaim hours of your workday with smart automation."
  },
  {
    icon: <Users size={24} className="text-blue-400" />,
    title: "Team Collaboration",
    description: "Seamless communication and project management tools to keep your team synchronized and productive."
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
            Features
          </span>
          <h2 className="heading-lg mb-4">Everything you need in one place</h2>
          <p className="text-blue-100/70 text-lg max-w-2xl mx-auto">
            Our comprehensive suite of AI-powered tools will help you streamline operations and focus on growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 slide-in-section" ref={sectionRef}>
          {features.map((feature, index) => (
            <div key={index} className="glass-card p-6 hover-scale cyber-border">
              <div className="tech-icon-container">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 neon-blue">{feature.title}</h3>
              <p className="text-blue-100/70">{feature.description}</p>
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
                  Workflow
                </span>
                <h2 className="heading-md mb-4">Streamlined process for maximum efficiency</h2>
                <p className="text-blue-100/70 mb-6">
                  Our AI-powered workflow system reduces complexity and boosts productivity. Experience a seamless journey from ideation to execution with our carefully designed process.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <div className="h-6 w-6 rounded-full bg-blue-900/50 flex items-center justify-center mr-3 border border-blue-500/30">
                      <Target size={14} className="text-blue-400" />
                    </div>
                    <span className="text-blue-100">Set clear objectives and targets</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-6 w-6 rounded-full bg-blue-900/50 flex items-center justify-center mr-3 border border-blue-500/30">
                      <Workflow size={14} className="text-blue-400" />
                    </div>
                    <span className="text-blue-100">Automate repetitive workflows</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-6 w-6 rounded-full bg-blue-900/50 flex items-center justify-center mr-3 border border-blue-500/30">
                      <PieChart size={14} className="text-blue-400" />
                    </div>
                    <span className="text-blue-100">Analyze results with rich visualizations</span>
                  </li>
                </ul>
                <a href="#contact" className="btn-primary inline-flex self-start">Learn More</a>
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
                    AI Processing: 98% Complete
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
